import 'dart:convert';
import 'dart:io';

enum AutomationRunStatus { running, passed, failed, unsupported, interrupted }

enum AutomationFailureKind {
  schema,
  boot,
  move,
  focus,
  action,
  assertion,
  capture,
  timeout,
  infrastructure,
  crash,
}

/// Bounded evidence writer for one automation run.
///
/// A reporter owns only its fresh run directory. Every mutable document is
/// finalized with a sibling temporary file followed by an atomic rename.
final class AutomationRunReporter {
  static const maxTraceBytes = 2 * 1024 * 1024;
  static const maxArtifactBytes = 8 * 1024 * 1024;

  final Directory artifactRoot;
  final String scenarioId;
  final String runId;
  final Map<String, Object?> resolvedRun;
  final int maxEvents;
  final int maxHistory;

  late final Directory runDirectory;
  late final File _traceFile;
  final List<Map<String, Object?>> _history = <Map<String, Object?>>[];
  int _sequence = 0;
  int _traceBytes = 0;
  int _droppedEvents = 0;
  AutomationRunStatus _status = AutomationRunStatus.running;
  int? _exitCode;
  AutomationFailureKind? _failureKind;
  String? _failureMessage;
  bool _started = false;
  bool _finished = false;

  AutomationRunReporter({
    required this.artifactRoot,
    required this.scenarioId,
    required this.runId,
    required this.resolvedRun,
    this.maxEvents = 10_000,
    this.maxHistory = 120,
  }) {
    if (!_safeId(scenarioId) || !_safeId(runId)) {
      throw ArgumentError('scenarioId and runId must be safe stable IDs');
    }
    if (maxEvents <= 0 || maxHistory <= 0) {
      throw ArgumentError('reporter bounds must be positive');
    }
  }

  Future<void> start() async {
    if (_started) throw StateError('reporter already started');
    await artifactRoot.create(recursive: true);
    runDirectory = Directory('${artifactRoot.path}/$scenarioId/$runId');
    if (await runDirectory.exists()) {
      throw StateError('run directory already exists: ${runDirectory.path}');
    }
    await runDirectory.create(recursive: true);
    _traceFile = File('${runDirectory.path}/trace.jsonl');
    await _atomicJson('manifest.json', {
      'status': _status.name,
      'scenario': scenarioId,
      'runId': runId,
      'resolvedRun': resolvedRun,
      'trace': 'trace.jsonl',
    });
    _started = true;
    await record('run.start', tick: 0, data: {'scenario': scenarioId});
  }

  Future<void> stepStart(String stepId, {required int tick}) =>
      record('step.start', tick: tick, data: {'step': _safeValue(stepId)});

  Future<void> stepEnd(
    String stepId, {
    required int tick,
    required bool passed,
    Map<String, Object?> data = const {},
  }) => record(
    'step.end',
    tick: tick,
    data: {'step': _safeValue(stepId), 'passed': passed, ..._safeMap(data)},
  );

  Future<void> record(
    String type, {
    required int tick,
    Map<String, Object?> data = const {},
  }) async {
    _ensureStarted();
    if (_finished) throw StateError('reporter is already finished');
    final event = <String, Object?>{
      'seq': _sequence++,
      'type': _safeValue(type),
      'tick': tick,
      'data': _safeMap(data),
    };
    _history.add(event);
    if (_history.length > maxHistory) _history.removeAt(0);
    final line = '${jsonEncode(event)}\n';
    final bytes = utf8.encode(line).length;
    if (_sequence > maxEvents || _traceBytes + bytes > maxTraceBytes) {
      _droppedEvents++;
      return;
    }
    await _traceFile.writeAsString(line, mode: FileMode.append, flush: true);
    _traceBytes += bytes;
  }

  Future<void> fail(
    AutomationFailureKind kind, {
    required int tick,
    required String message,
  }) async {
    _status = AutomationRunStatus.failed;
    _failureKind = kind;
    _failureMessage = message;
    await record(
      'run.failure',
      tick: tick,
      data: {'kind': kind.name, 'message': _safeValue(message)},
    );
  }

  Future<File> writeArtifact(
    String name,
    List<int> bytes, {
    String? contentType,
  }) async {
    _ensureStarted();
    if (_finished) throw StateError('reporter is already finished');
    if (!_safeFileName(name)) {
      throw ArgumentError('artifact name must be a file name');
    }
    if (bytes.length > maxArtifactBytes) {
      throw ArgumentError('artifact exceeds $maxArtifactBytes bytes');
    }
    final file = File('${runDirectory.path}/$name');
    await file.writeAsBytes(bytes, flush: true);
    await record(
      'artifact',
      tick: _sequence,
      data: {
        'name': name,
        'bytes': bytes.length,
        if (contentType != null) 'contentType': contentType,
      },
    );
    return file;
  }

  Future<void> finish({
    required AutomationRunStatus status,
    required int exitCode,
    String? replayCommand,
    Map<String, Object?> cleanup = const {},
  }) async {
    _ensureStarted();
    if (_finished) throw StateError('reporter is already finished');
    _status = status;
    _exitCode = exitCode;
    _finished = true;
    await _atomicString('junit.xml', toJUnitXml());
    await _atomicJson('summary.json', {
      'status': _status.name,
      'exitCode': exitCode,
      'scenario': scenarioId,
      'runId': runId,
      'failure': {
        if (_failureKind != null) 'kind': _failureKind!.name,
        if (_failureMessage != null) 'message': _failureMessage,
      },
      'events': _sequence,
      'traceBytes': _traceBytes,
      'droppedEvents': _droppedEvents,
      'history': _history,
      if (replayCommand != null) 'replayCommand': replayCommand,
      'cleanup': _safeMap(cleanup),
    });
    await _atomicJson('manifest.json', {
      'status': _status.name,
      'exitCode': _exitCode,
      'scenario': scenarioId,
      'runId': runId,
      'resolvedRun': resolvedRun,
      'summary': 'summary.json',
      'trace': 'trace.jsonl',
      'junit': 'junit.xml',
    });
  }

  String toJUnitXml() {
    final failed = _status == AutomationRunStatus.failed;
    final failures = failed ? 1 : 0;
    final failureElem = failed
        ? '      <failure message="${_xmlEscape(_failureMessage ?? 'unknown failure')}" type="${_failureKind?.name ?? 'failure'}"/>\n'
        : '';
    return '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<testsuites tests="1" failures="$failures" name="automation">\n'
        '  <testsuite name="$scenarioId" tests="1" failures="$failures" errors="0" time="0.0">\n'
        '    <testcase name="$scenarioId" classname="automation.$scenarioId" time="0.0">\n'
        '$failureElem'
        '    </testcase>\n'
        '  </testsuite>\n'
        '</testsuites>\n';
  }

  Future<void> _atomicString(String name, String content) async {
    final target = File('${runDirectory.path}/$name');
    final temporary = File('${target.path}.tmp');
    await temporary.writeAsString(content, flush: true);
    if (await target.exists()) await target.delete();
    await temporary.rename(target.path);
  }

  Future<void> _atomicJson(String name, Map<String, Object?> value) async {
    final target = File('${runDirectory.path}/$name');
    final temporary = File('${target.path}.tmp');
    await temporary.writeAsString(
      const JsonEncoder.withIndent('  ').convert(value),
      flush: true,
    );
    if (await target.exists()) await target.delete();
    await temporary.rename(target.path);
  }

  void _ensureStarted() {
    if (!_started) throw StateError('reporter has not started');
  }
}

bool _safeId(String value) => RegExp(r'^[a-z0-9][a-z0-9._-]*$').hasMatch(value);

bool _safeFileName(String value) =>
    value.isNotEmpty &&
    !value.contains('/') &&
    !value.contains('\\') &&
    value != '.' &&
    value != '..';

Object? _safeValue(Object? value) {
  if (value == null || value is String || value is num || value is bool) {
    return value;
  }
  if (value is List) return value.map(_safeValue).toList();
  if (value is Map) return _safeMap(Map<String, Object?>.from(value));
  return value.toString();
}

Map<String, Object?> _safeMap(Map<String, Object?> value) => value.map(
  (key, item) => MapEntry(_safeValue(key) as String, _safeValue(item)),
);

int exitCodeForFailureKind(AutomationFailureKind kind) => switch (kind) {
  AutomationFailureKind.schema => 2,
  AutomationFailureKind.boot => 3,
  AutomationFailureKind.infrastructure => 4,
  AutomationFailureKind.move => 5,
  AutomationFailureKind.focus => 6,
  AutomationFailureKind.action => 7,
  AutomationFailureKind.assertion => 8,
  AutomationFailureKind.capture => 9,
  AutomationFailureKind.timeout => 10,
  AutomationFailureKind.crash => 11,
};

String _xmlEscape(String text) => text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
