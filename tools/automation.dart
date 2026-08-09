import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;

import 'package:quarantine/automation/automation_args.dart';
import 'package:quarantine/automation/automation_lifecycle.dart';
import 'package:quarantine/automation/automation_reporter.dart';

Future<void> main(List<String> argv) async {
  final result = parseAutomationArgs(argv);
  if (!result.isSuccess) {
    stderr.writeln('automation: ${result.error}');
    exitCode = result.exitCode;
    return;
  }
  final args = result.args!;
  switch (args.mode) {
    case AutomationMode.help:
      stdout.write(automationHelp);
    case AutomationMode.list:
      stdout.write('${registeredAutomationScenarios.join('\n')}\n');
    case AutomationMode.validate:
      stdout.write('${args.encode()}\n');
    case AutomationMode.run:
      await _run(args);
  }
}

Future<void> _run(AutomationArgs args) async {
  if (args.browser != AutomationBrowser.firefox) {
    stderr.writeln(
      'automation: only the Firefox adapter is implemented (T-01)',
    );
    exitCode = 4;
    return;
  }
  final lifecycle = AutomationLifecycle(args: args);
  final reporter = AutomationRunReporter(
    artifactRoot: Directory(args.artifacts),
    scenarioId: args.scenario,
    runId: 'run-${DateTime.now().toUtc().millisecondsSinceEpoch}',
    resolvedRun: args.toJson(),
  );
  var reporterStarted = false;
  var reporterFinished = false;
  try {
    await reporter.start();
    reporterStarted = true;
    await reporter.record(
      'runner.lifecycle',
      tick: 0,
      data: {'phase': 'starting-server', 'browser': args.browser.name},
    );
    final baseUrl = await lifecycle.startServer();
    await reporter.record(
      'runner.lifecycle',
      tick: 0,
      data: {'phase': 'server-ready', 'baseUrl': baseUrl.toString()},
    );
    await reporter.record('runner.config', tick: 0, data: args.toJson());
    final process = await Process.start(
      'node',
      ['tools/browser/renderer_smoke.cjs'],
      environment: {
        ...Platform.environment,
        'AUTOMATION_ARGS': args.encode(),
        'AUTOMATION_BASE_URL': baseUrl.toString(),
        'AUTOMATION_RUN_DIR': reporter.runDirectory.path,
        'RENDERER_HEADLESS': args.headless ? '1' : '0',
      },
      runInShell: false,
    );
    lifecycle.cleanup.add(() async {
      process.kill(ProcessSignal.sigterm);
    });
    final browserStdout = StringBuffer();
    final browserStderr = StringBuffer();
    final stdoutDone = utf8.decoder.bind(process.stdout).forEach((text) {
      stdout.write(text);
      _appendBounded(browserStdout, text);
    });
    final stderrDone = utf8.decoder.bind(process.stderr).forEach((text) {
      stderr.write(text);
      _appendBounded(browserStderr, text);
    });
    stdout.writeln(args.copyWith(baseUrl: baseUrl).encode());
    await stdout.flush();
    final watchdog = automationWallTimeout(args);
    var timedOut = false;
    final exitOrTimeout = Future.any<int>([
      process.exitCode,
      Future<void>.delayed(watchdog, () async {
        timedOut = true;
        process.kill(ProcessSignal.sigterm);
        await Future<void>.delayed(automationWatchdogGrace);
        process.kill(ProcessSignal.sigkill);
      }).then((_) => -1),
    ]);
    var code = await exitOrTimeout;
    if (timedOut) {
      code = await process.exitCode;
    }
    await Future.wait([stdoutDone, stderrDone]);
    await reporter.writeArtifact(
      'browser-stdout.log',
      utf8.encode(browserStdout.toString()),
      contentType: 'text/plain',
    );
    await reporter.writeArtifact(
      'browser-stderr.log',
      utf8.encode(browserStderr.toString()),
      contentType: 'text/plain',
    );
    await _registerScreenshotArtifacts(reporter);
    await reporter.record(
      'runner.browser-exit',
      tick: 0,
      data: {
        'exitCode': code,
        'stdoutBytes': browserStdout.length,
        'watchdogSeconds': watchdog.inMilliseconds / 1000,
        'timedOut': timedOut,
      },
    );
    if (timedOut) {
      await reporter.fail(
        AutomationFailureKind.timeout,
        tick: 0,
        message: 'browser smoke exceeded ${watchdog.inSeconds}s watchdog',
      );
    } else if (code != 0) {
      await reporter.fail(
        AutomationFailureKind.assertion,
        tick: 0,
        message: 'browser smoke exited with code $code',
      );
    }
    await lifecycle.close();
    await reporter.finish(
      status: code == 0
          ? AutomationRunStatus.passed
          : AutomationRunStatus.failed,
      exitCode: code == 0 ? 0 : 5,
      replayCommand:
          'dart run tools/automation.dart run --scenario ${args.scenario}',
      cleanup: const {'server': 'closed', 'browser': 'closed'},
    );
    reporterFinished = true;
    exitCode = code == 0 ? 0 : 5;
  } catch (error) {
    stderr.writeln('automation: run failed: $error');
    if (reporterStarted && !reporterFinished) {
      await reporter.fail(
        AutomationFailureKind.infrastructure,
        tick: 0,
        message: error.toString(),
      );
    }
    exitCode = 5;
  } finally {
    try {
      await lifecycle.close();
    } catch (error) {
      stderr.writeln('automation: cleanup failed: $error');
      exitCode = 6;
    }
    if (reporterStarted && !reporterFinished) {
      try {
        await reporter.finish(
          status: AutomationRunStatus.failed,
          exitCode: exitCode == 0 ? 5 : exitCode,
          cleanup: const {'server': 'closed-or-unavailable'},
        );
      } catch (error) {
        stderr.writeln('automation: report finalization failed: $error');
        exitCode = 6;
      }
    }
  }
}

const automationWatchdogGrace = Duration(seconds: 2);

/// Converts the fixed-tick budget into a bounded host-time watchdog.
///
/// Browser startup and WebGL context creation need a floor; malformed or
/// unexpectedly large scenarios must still have a finite upper bound.
Duration automationWallTimeout(AutomationArgs args) {
  final seconds = (args.timeoutTicks * args.fixedDelta * 8).ceil();
  return Duration(seconds: seconds.clamp(15, 300));
}

const _browserLogLimit = 64 * 1024;

void _appendBounded(StringBuffer target, String text) {
  final remaining = _browserLogLimit - target.length;
  if (remaining <= 0) return;
  target.write(text.length <= remaining ? text : text.substring(0, remaining));
}

Future<void> _registerScreenshotArtifacts(
  AutomationRunReporter reporter,
) async {
  final entries = reporter.runDirectory.listSync().whereType<File>().where((
    file,
  ) {
    final name = file.uri.pathSegments.last;
    return name.startsWith('browser-') &&
        (name.endsWith('.png') || name.endsWith('.json'));
  });
  for (final file in entries) {
    final name = file.uri.pathSegments.last;
    final digestData = <String, Object?>{};
    if (name.endsWith('.digest.json')) {
      digestData.addAll(await parseCaptureDigest(file));
    } else if (name.endsWith('-embodied.json')) {
      digestData.addAll(await parseEmbodiedEvidence(file));
    } else if (name.endsWith('.json')) {
      digestData.addAll(await parseCaptureMetadata(file));
    }
    await reporter.record(
      'artifact.external',
      tick: 0,
      data: {
        'name': name,
        'bytes': await file.length(),
        'contentType': name.endsWith('.png') ? 'image/png' : 'application/json',
        ...digestData,
      },
    );
  }
}

/// Validates and extracts the two hashes emitted by browser capture smoke.
///
/// Kept public so malformed-sidecar fixtures can exercise the same parser the
/// release runner uses, without launching a browser.
Future<Map<String, String>> parseCaptureDigest(File file) async {
  final name = file.uri.pathSegments.last;
  final decoded = jsonDecode(await file.readAsString());
  if (decoded is! Map) {
    throw FormatException('capture digest is not a JSON object: $name');
  }
  if (decoded['schemaVersion'] != 1) {
    throw FormatException('capture digest has unsupported schema: $name');
  }
  final result = <String, String>{'schemaVersion': '1'};
  for (final entry in const {
    'screenshot': '.png',
    'metadata': '.json',
  }.entries) {
    final value = decoded[entry.key];
    if (value is! String ||
        !RegExp(r'^browser-[a-z0-9._-]+\.(?:png|json)$').hasMatch(value) ||
        !value.endsWith(entry.value)) {
      throw FormatException(
        'capture digest has invalid ${entry.key} artifact: $name',
      );
    }
    result[entry.key] = value;
    final referenced = File('${file.parent.path}/$value');
    if (!referenced.existsSync()) {
      throw FormatException(
        'capture digest references missing ${entry.key} file: $name',
      );
    }
  }
  for (final key in const ['screenshotSha256', 'metadataSha256']) {
    final value = decoded[key];
    if (value is! String || !RegExp(r'^[0-9a-f]{64}$').hasMatch(value)) {
      throw FormatException('capture digest has invalid $key: $name');
    }
    result[key] = value;
  }
  for (final entry in const {
    'screenshot': 'screenshotSha256',
    'metadata': 'metadataSha256',
  }.entries) {
    final referenced = File('${file.parent.path}/${result[entry.key]}');
    final actual = await sha256File(referenced);
    if (actual != result[entry.value]) {
      throw FormatException(
        'capture digest does not match ${entry.key} bytes: $name',
      );
    }
  }
  return Map.unmodifiable(result);
}

/// Computes a file SHA-256 without invoking a shell.
///
/// The automation runner is currently packaged for Unix-like CI hosts. Keep
/// the command fallback explicit so a missing host utility fails as a clear
/// infrastructure error rather than silently weakening evidence validation.
Future<String> sha256File(File file) async {
  for (final candidate in const [
    ('sha256sum', <String>[]),
    ('shasum', <String>['-a', '256']),
  ]) {
    try {
      final result = await Process.run(candidate.$1, [
        ...candidate.$2,
        file.path,
      ]);
      if (result.exitCode != 0) continue;
      final match = RegExp(
        r'^([0-9a-f]{64})\s',
      ).firstMatch((result.stdout as String).trim());
      if (match != null) return match.group(1)!;
    } on ProcessException {
      continue;
    }
  }
  throw StateError('no SHA-256 utility is available for ${file.path}');
}

/// Validates the metadata sidecar paired with a browser screenshot.
Future<Map<String, Object?>> parseCaptureMetadata(File file) async {
  final name = file.uri.pathSegments.last;
  final decoded = jsonDecode(await file.readAsString());
  if (decoded is! Map || decoded['schemaVersion'] != 1) {
    throw FormatException('capture metadata has unsupported schema: $name');
  }

  String requiredString(String key) {
    final value = decoded[key];
    if (value is! String || value.trim().isEmpty) {
      throw FormatException('capture metadata missing $key: $name');
    }
    return value;
  }

  final scenario = requiredString('scenario');
  final routeName = requiredString('routeName');
  final routePath = requiredString('routePath');
  final requestedRenderer = requiredString('requestedRenderer');
  final requestedProfile = requiredString('requestedProfile');
  final negotiatedProfile = requiredString('negotiatedProfile');
  final profileNegotiation = requiredString('profileNegotiation');
  final screenshot = requiredString('screenshot');
  final viewport = decoded['viewport'];
  final width = viewport is Map ? viewport['width'] : null;
  final height = viewport is Map ? viewport['height'] : null;
  if (!const ['auto', 'legacy', 'next'].contains(requestedRenderer) ||
      !const ['safe', 'standard', 'clean'].contains(requestedProfile) ||
      !const [
        'legacy',
        'safe',
        'standard',
        'clean',
        'high',
      ].contains(negotiatedProfile) ||
      !const [
        'honored',
        'capability-negotiated',
      ].contains(profileNegotiation) ||
      (requestedProfile != negotiatedProfile &&
          profileNegotiation != 'capability-negotiated') ||
      (requestedProfile == negotiatedProfile &&
          profileNegotiation != 'honored') ||
      width is! int ||
      width < 1 ||
      height is! int ||
      height < 1 ||
      !RegExp(r'^browser-[a-z0-9._-]+\.png$').hasMatch(screenshot)) {
    throw FormatException('capture metadata has invalid route/profile: $name');
  }
  final screenshotFile = File('${file.parent.path}/$screenshot');
  if (!screenshotFile.existsSync()) {
    throw FormatException(
      'capture metadata references missing screenshot: $name',
    );
  }
  return Map.unmodifiable(<String, Object?>{
    'captureSchemaVersion': '1',
    'captureScenario': scenario,
    'captureRoute': routeName,
    'capturePath': routePath,
    'captureRequestedRenderer': requestedRenderer,
    'captureRequestedProfile': requestedProfile,
    'captureNegotiatedProfile': negotiatedProfile,
    'captureProfileNegotiation': profileNegotiation,
    'captureScreenshot': screenshot,
    'captureWidth': width,
    'captureHeight': height,
  });
}

/// Validates the structured embodied-route artifact emitted by browser smoke.
///
/// This is intentionally stricter than merely checking that the sidecar is
/// JSON: route consumers must be able to trust that movement, positive action,
/// and focus-clear denial were observed from authoritative save state.
Future<Map<String, Object?>> parseEmbodiedEvidence(File file) async {
  final name = file.uri.pathSegments.last;
  final decoded = jsonDecode(await file.readAsString());
  if (decoded is! Map) {
    throw FormatException('embodied evidence is not a JSON object: $name');
  }
  if (decoded['schemaVersion'] != 1 || decoded['kind'] != 'embodied-route-v1') {
    throw FormatException('embodied evidence has unsupported schema: $name');
  }

  String requiredString(String key) {
    final value = decoded[key];
    if (value is! String || value.trim().isEmpty) {
      throw FormatException('embodied evidence missing $key: $name');
    }
    return value;
  }

  final scenario = requiredString('scenario');
  final routeName = requiredString('routeName');
  final routePath = requiredString('routePath');
  final requestedRenderer = requiredString('requestedRenderer');
  final requestedProfile = requiredString('requestedProfile');
  final effectiveRenderer = requiredString('effectiveRenderer');
  final effectiveProfile = requiredString('effectiveProfile');
  final profileNegotiation = requiredString('profileNegotiation');
  final capture = decoded['capture'];
  if (capture is! Map) {
    throw FormatException(
      'embodied evidence capture references are missing: $name',
    );
  }
  String captureName(String key, String suffix) {
    final value = capture[key];
    if (value is! String ||
        !RegExp(r'^browser-[a-z0-9._-]+\.(?:png|json)$').hasMatch(value) ||
        !value.endsWith(suffix)) {
      throw FormatException(
        'embodied evidence has invalid capture $key: $name',
      );
    }
    final referenced = File('${file.parent.path}/$value');
    if (!referenced.existsSync()) {
      throw FormatException(
        'embodied evidence references missing capture $key: $name',
      );
    }
    return value;
  }

  final captureScreenshot = captureName('screenshot', '.png');
  final captureMetadata = captureName('metadata', '.json');
  final captureDigest = captureName('digest', '.json');
  final metadata = await parseCaptureMetadata(
    File('${file.parent.path}/$captureMetadata'),
  );
  final digest = await parseCaptureDigest(
    File('${file.parent.path}/$captureDigest'),
  );
  if (!const ['auto', 'legacy', 'next'].contains(requestedRenderer) ||
      !const ['safe', 'standard', 'clean'].contains(requestedProfile) ||
      !const ['legacy', 'next'].contains(effectiveRenderer) ||
      !const [
        'legacy',
        'safe',
        'standard',
        'clean',
        'high',
      ].contains(effectiveProfile) ||
      !const [
        'honored',
        'capability-negotiated',
      ].contains(profileNegotiation) ||
      (requestedProfile != effectiveProfile &&
          profileNegotiation != 'capability-negotiated') ||
      (requestedProfile == effectiveProfile &&
          profileNegotiation != 'honored')) {
    throw FormatException(
      'embodied evidence has invalid renderer/profile: $name',
    );
  }
  if (metadata['captureScenario'] != scenario ||
      metadata['captureRoute'] != routeName ||
      metadata['capturePath'] != routePath ||
      metadata['captureRequestedRenderer'] != requestedRenderer ||
      metadata['captureRequestedProfile'] != requestedProfile ||
      metadata['captureNegotiatedProfile'] != effectiveProfile ||
      metadata['captureProfileNegotiation'] != profileNegotiation ||
      metadata['captureScreenshot'] != captureScreenshot ||
      digest['screenshot'] != captureScreenshot ||
      digest['metadata'] != captureMetadata) {
    throw FormatException(
      'embodied evidence disagrees with capture metadata: $name',
    );
  }

  final actions = decoded['actions'];
  if (actions is! List ||
      actions.isEmpty ||
      actions.any((value) => value is! String || value.trim().isEmpty)) {
    throw FormatException('embodied evidence actions are invalid: $name');
  }
  final assertions = decoded['assertions'];
  if (assertions is! Map ||
      assertions['saveAuthoritative'] != true ||
      assertions['movementAuthoritative'] != true ||
      assertions['negativeAction'] != 'no-mutation-after-clear') {
    throw FormatException('embodied evidence assertions are incomplete: $name');
  }

  final evidence = decoded['evidence'];
  if (evidence is! Map) {
    throw FormatException('embodied evidence payload is missing: $name');
  }

  Map<String, Object?> pose(String key) {
    final raw = evidence[key];
    if (raw is! Map || raw['roomId'] is! String) {
      throw FormatException('embodied evidence pose is invalid ($key): $name');
    }
    final eye = raw['eye'];
    final values = [
      eye is Map ? eye['x'] : null,
      eye is Map ? eye['y'] : null,
      eye is Map ? eye['z'] : null,
      raw['yaw'],
      raw['pitch'],
    ];
    if (values.any((value) => value is! num || !value.toDouble().isFinite)) {
      throw FormatException(
        'embodied evidence pose numbers are invalid ($key): $name',
      );
    }
    return {
      'roomId': raw['roomId'] as String,
      'x': (eye as Map)['x'] as num,
      'y': eye['y'] as num,
      'z': eye['z'] as num,
      'yaw': raw['yaw'] as num,
      'pitch': raw['pitch'] as num,
    };
  }

  final before = pose('before');
  final approach = pose('approach');
  final after = pose('after');
  final approachDx =
      (before['x'] as num).toDouble() - (approach['x'] as num).toDouble();
  final approachDy =
      (before['y'] as num).toDouble() - (approach['y'] as num).toDouble();
  final approachDz =
      (before['z'] as num).toDouble() - (approach['z'] as num).toDouble();
  final approachDistance = math.sqrt(
    approachDx * approachDx + approachDy * approachDy + approachDz * approachDz,
  );
  if (!approachDistance.isFinite || approachDistance < 0.005) {
    throw FormatException(
      'embodied evidence approach movement is too small: $name',
    );
  }
  final dx = (before['x'] as num).toDouble() - (after['x'] as num).toDouble();
  final dy = (before['y'] as num).toDouble() - (after['y'] as num).toDouble();
  final dz = (before['z'] as num).toDouble() - (after['z'] as num).toDouble();
  final distance = math.sqrt(dx * dx + dy * dy + dz * dz);
  if (!distance.isFinite || distance < 0.005) {
    throw FormatException(
      'embodied evidence movement distance is too small: $name',
    );
  }

  final normalized = decoded['evidenceNormalized'];
  if (normalized is! Map) {
    throw FormatException(
      'embodied evidence normalized replay is missing: $name',
    );
  }
  if (decoded['normalizationMeters'] != 0.5 ||
      decoded['replayKey'] is! String ||
      (decoded['replayKey'] as String).trim().isEmpty) {
    throw FormatException(
      'embodied evidence replay identity is invalid: $name',
    );
  }
  Map<String, Object?> normalizedPose(String key) {
    final raw = normalized[key];
    if (raw is! Map || raw['roomId'] is! String || raw['eye'] is! Map) {
      throw FormatException(
        'embodied normalized pose is invalid ($key): $name',
      );
    }
    final eye = raw['eye'] as Map;
    final values = [eye['x'], eye['y'], eye['z'], raw['yaw'], raw['pitch']];
    if (values.any((value) => value is! num || !value.toDouble().isFinite)) {
      throw FormatException(
        'embodied normalized pose numbers are invalid ($key): $name',
      );
    }
    return {
      'roomId': raw['roomId'] as String,
      'x': (eye['x'] as num).toDouble(),
      'y': (eye['y'] as num).toDouble(),
      'z': (eye['z'] as num).toDouble(),
      'yaw': (raw['yaw'] as num).toDouble(),
      'pitch': (raw['pitch'] as num).toDouble(),
    };
  }

  normalizedPose('before');
  normalizedPose('approach');
  normalizedPose('after');
  final normalizedDistance = normalized['movementDistance'];
  if (normalizedDistance is! num ||
      !normalizedDistance.toDouble().isFinite ||
      normalizedDistance.toDouble() < 0.005) {
    throw FormatException(
      'embodied normalized movement distance is invalid: $name',
    );
  }

  Map<String, bool> mantleState(Object? raw, String key) {
    if (raw is! Map || raw['lit'] is! bool || raw['examined'] is! bool) {
      throw FormatException(
        'embodied evidence mantle state is invalid ($key): $name',
      );
    }
    return {'lit': raw['lit'] as bool, 'examined': raw['examined'] as bool};
  }

  final positive = evidence['positive'];
  if (positive is! Map) {
    throw FormatException(
      'embodied evidence positive action is missing: $name',
    );
  }
  final positiveBefore = mantleState(positive['before'], 'positive.before');
  final positiveAfter = mantleState(positive['after'], 'positive.after');
  if (positiveBefore['lit'] != false ||
      positiveBefore['examined'] != false ||
      positiveAfter['lit'] != true ||
      positiveAfter['examined'] != true) {
    throw FormatException(
      'embodied evidence positive action did not transition: $name',
    );
  }

  final denial = evidence['denial'];
  if (denial is! Map || denial['prompt'] != '') {
    throw FormatException(
      'embodied evidence denial focus was not clear: $name',
    );
  }
  final denialBefore = mantleState(denial['before'], 'denial.before');
  final denialAfter = mantleState(denial['after'], 'denial.after');
  if (denialBefore['lit'] != denialAfter['lit'] ||
      denialBefore['examined'] != denialAfter['examined']) {
    throw FormatException('embodied evidence denial mutated state: $name');
  }
  final restore = evidence['restore'];
  final restoredPlayer = restore is Map ? restore['player'] : null;
  final restoredEye = restoredPlayer is Map ? restoredPlayer['eye'] : null;
  final restoreValues = [
    restoredEye is Map ? restoredEye['x'] : null,
    restoredEye is Map ? restoredEye['y'] : null,
    restoredEye is Map ? restoredEye['z'] : null,
    restoredPlayer is Map ? restoredPlayer['yaw'] : null,
    restoredPlayer is Map ? restoredPlayer['pitch'] : null,
  ];
  final restoreDistance = restore is Map ? restore['distance'] : null;
  final restoreDx = restoredEye is Map
      ? (after['x'] as num).toDouble() - (restoredEye['x'] as num).toDouble()
      : double.nan;
  final restoreDy = restoredEye is Map
      ? (after['y'] as num).toDouble() - (restoredEye['y'] as num).toDouble()
      : double.nan;
  final restoreDz = restoredEye is Map
      ? (after['z'] as num).toDouble() - (restoredEye['z'] as num).toDouble()
      : double.nan;
  final computedRestoreDistance = math.sqrt(
    restoreDx * restoreDx + restoreDy * restoreDy + restoreDz * restoreDz,
  );
  if (restore is! Map ||
      restoredPlayer is! Map ||
      restoredPlayer['roomId'] is! String ||
      restoreValues.any(
        (value) => value is! num || !value.toDouble().isFinite,
      ) ||
      restoreDistance is! num ||
      !restoreDistance.toDouble().isFinite ||
      restoreDistance.toDouble() > 0.05 ||
      !computedRestoreDistance.isFinite ||
      computedRestoreDistance > 0.05 ||
      (computedRestoreDistance - restoreDistance.toDouble()).abs() > 0.01) {
    throw FormatException(
      'embodied evidence restore checkpoint is invalid: $name',
    );
  }
  final restoredMantle = mantleState(restore['mantle'], 'restore.mantle');
  if (restoredMantle['lit'] != denialAfter['lit'] ||
      restoredMantle['examined'] != denialAfter['examined']) {
    throw FormatException('embodied evidence restore mantle diverged: $name');
  }
  final dayCycle = evidence['dayCycle'];
  if (scenario == 'days-1-3') {
    if (dayCycle is! Map ||
        dayCycle['schemaVersion'] != 1 ||
        dayCycle['startDay'] != 1 ||
        dayCycle['endDay'] != 3 ||
        dayCycle['transitions'] is! List ||
        (dayCycle['transitions'] as List).length != 2 ||
        !const ['Rest:day-1→day-2', 'Rest:day-2→day-3'].every(
          (expected) => (dayCycle['transitions'] as List).contains(expected),
        ) ||
        (dayCycle['transitions'] as List)[0] != 'Rest:day-1→day-2' ||
        (dayCycle['transitions'] as List)[1] != 'Rest:day-2→day-3') {
      throw FormatException('embodied day-cycle evidence is incomplete: $name');
    }
    final checkpoints = dayCycle['checkpoints'];
    if (checkpoints is! List || checkpoints.length != 3) {
      throw FormatException(
        'embodied day-cycle checkpoints are incomplete: $name',
      );
    }
    for (var index = 0; index < checkpoints.length; index++) {
      final checkpoint = checkpoints[index];
      final expectedDay = index + 1;
      if (checkpoint is! Map || checkpoint['day'] != expectedDay) {
        throw FormatException(
          'embodied day-cycle checkpoint day is invalid ($expectedDay): $name',
        );
      }
      final hour = checkpoint['hour'];
      if (hour is! num ||
          !hour.toDouble().isFinite ||
          hour.toDouble() < 0 ||
          hour.toDouble() >= 24) {
        throw FormatException(
          'embodied day-cycle checkpoint hour is invalid ($expectedDay): $name',
        );
      }
      final capture = checkpoint['capture'];
      if (capture is! Map) {
        throw FormatException(
          'embodied day-cycle checkpoint capture is missing ($expectedDay): $name',
        );
      }
      for (final entry in const {
        'screenshot': '.png',
        'metadata': '.json',
        'digest': '.digest.json',
      }.entries) {
        final value = capture[entry.key];
        if (value is! String ||
            !RegExp(r'^browser-[a-z0-9._-]+\.(?:png|json)$').hasMatch(value) ||
            !value.endsWith(entry.value) ||
            !File('${file.parent.path}/$value').existsSync()) {
          throw FormatException(
            'embodied day-cycle checkpoint artifact is invalid (${entry.key}, $expectedDay): $name',
          );
        }
      }
      final metadata = await parseCaptureMetadata(
        File('${file.parent.path}/${capture['metadata']}'),
      );
      final digest = await parseCaptureDigest(
        File('${file.parent.path}/${capture['digest']}'),
      );
      if (metadata['captureScenario'] != scenario ||
          metadata['captureRoute'] != routeName ||
          metadata['capturePath'] != routePath ||
          metadata['captureScreenshot'] != capture['screenshot'] ||
          digest['screenshot'] != capture['screenshot'] ||
          digest['metadata'] != capture['metadata']) {
        throw FormatException(
          'embodied day-cycle checkpoint disagrees with capture metadata ($expectedDay): $name',
        );
      }
    }
  }
  final settle = evidence['settle'];
  final positiveSettleMs = settle is Map ? settle['positiveMs'] : null;
  final denialClearMs = settle is Map ? settle['denialClearMs'] : null;
  if (positiveSettleMs is! num ||
      !positiveSettleMs.toDouble().isFinite ||
      positiveSettleMs.toDouble() < 0 ||
      denialClearMs is! num ||
      !denialClearMs.toDouble().isFinite ||
      denialClearMs.toDouble() < 0) {
    throw FormatException(
      'embodied evidence prompt settle timing is invalid: $name',
    );
  }
  final inputTrace = evidence['inputTrace'];
  if (inputTrace is! List || inputTrace.isEmpty) {
    throw FormatException('embodied evidence input trace is missing: $name');
  }
  final traceLabels = <String>[];
  var previousElapsedMs = -1.0;
  for (final entry in inputTrace) {
    final elapsedMs = entry is Map && entry['elapsedMs'] is num
        ? (entry['elapsedMs'] as num).toDouble()
        : double.nan;
    if (entry is! Map ||
        entry['label'] is! String ||
        (entry['label'] as String).trim().isEmpty ||
        entry['elapsedMs'] is! num ||
        !elapsedMs.isFinite ||
        elapsedMs < 0 ||
        elapsedMs < previousElapsedMs) {
      throw FormatException(
        'embodied evidence input trace entry is invalid: $name',
      );
    }
    previousElapsedMs = elapsedMs;
    traceLabels.add(entry['label'] as String);
  }
  const requiredTrace = [
    'visitor.ignore-until-clear',
    'KeyS:down',
    'KeyS:up',
    'KeyE:mantle-living-second',
    'KeyE:denied-after-focus-clear',
  ];
  var traceIndex = 0;
  for (final required in requiredTrace) {
    final next = traceLabels.indexOf(required, traceIndex);
    if (next < traceIndex) {
      throw FormatException(
        'embodied evidence input trace missing $required: $name',
      );
    }
    traceIndex = next + 1;
  }

  return Map.unmodifiable(<String, Object?>{
    'embodiedSchemaVersion': '1',
    'embodiedKind': 'embodied-route-v1',
    'embodiedScenario': scenario,
    'embodiedRoute': routeName,
    'embodiedPath': routePath,
    'embodiedRequestedRenderer': requestedRenderer,
    'embodiedRequestedProfile': requestedProfile,
    'embodiedEffectiveRenderer': effectiveRenderer,
    'embodiedEffectiveProfile': effectiveProfile,
    'embodiedProfileNegotiation': profileNegotiation,
    'embodiedCaptureScreenshot': captureScreenshot,
    'embodiedCaptureMetadata': captureMetadata,
    'embodiedCaptureDigest': captureDigest,
    'embodiedFocus': assertions['focus'] as String? ?? 'unknown',
    'embodiedBeforeRoom': before['roomId'],
    'embodiedAfterRoom': after['roomId'],
    'embodiedApproachMovementDistance': approachDistance,
    'embodiedMovementDistance': distance,
    'embodiedNormalizedMovementDistance': normalizedDistance.toDouble(),
    'embodiedFocusSettleMs': positiveSettleMs.toDouble(),
    'embodiedDenialClearMs': denialClearMs.toDouble(),
    'embodiedInputTraceCount': inputTrace.length,
    'embodiedRestoreDistance': restoreDistance.toDouble(),
    'embodiedRestoreStable': true,
    'embodiedReplayKey': decoded['replayKey'],
    'embodiedFocusCleared': true,
    'embodiedDenialStable': true,
    'embodiedDayCycleDays': scenario == 'days-1-3' ? 3 : 0,
  });
}
