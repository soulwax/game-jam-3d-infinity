import 'dart:convert';

import 'renderer_backend.dart';

enum RendererReplayActionKind {
  initialize,
  submit,
  input,
  loseContext,
  recover,
  dispose,
}

/// One deterministic public operation used by the backend parity harness.
/// It intentionally contains no callback or runtime renderer object.
final class RendererReplayAction {
  final RendererReplayActionKind kind;
  final RendererFrame? frame;
  final RendererInputAction? input;

  const RendererReplayAction._(this.kind, {this.frame, this.input});

  const RendererReplayAction.initialize()
    : this._(RendererReplayActionKind.initialize);

  const RendererReplayAction.submit(RendererFrame frame)
    : this._(RendererReplayActionKind.submit, frame: frame);

  const RendererReplayAction.input(RendererInputAction input)
    : this._(RendererReplayActionKind.input, input: input);

  const RendererReplayAction.loseContext()
    : this._(RendererReplayActionKind.loseContext);

  const RendererReplayAction.recover()
    : this._(RendererReplayActionKind.recover);

  const RendererReplayAction.dispose()
    : this._(RendererReplayActionKind.dispose);
}

final class RendererParityReport {
  final List<String> mismatches;
  final List<String> trace;

  RendererParityReport({
    required Iterable<String> mismatches,
    required Iterable<String> trace,
  }) : mismatches = List.unmodifiable(mismatches),
       trace = List.unmodifiable(trace);

  bool get equivalent => mismatches.isEmpty;

  String get traceDigest {
    var hash = 0x811c9dc5;
    for (final byte in trace.join('\n').codeUnits) {
      hash ^= byte;
      hash = (hash * 0x01000193) & 0x7fffffff;
    }
    return hash.toRadixString(16).padLeft(8, '0');
  }
}

/// Replays the same public lifecycle/frame/input sequence against both
/// implementations and compares their structural observations.
final class RendererParityHarness {
  const RendererParityHarness();

  RendererParityReport run({
    required RendererBackend legacy,
    required RendererBackend next,
    required Iterable<RendererReplayAction> actions,
  }) {
    final mismatches = <String>[];
    final trace = <String>[];
    var index = 0;
    for (final action in actions) {
      _apply(legacy, action);
      _apply(next, action);
      final left = _observation(legacy);
      final right = _observation(next);
      trace.add(jsonEncode({'step': index, 'legacy': left, 'next': right}));
      if (!_equalPublicObservations(left, right)) {
        mismatches.add(
          'step $index ${action.kind.name}: public observations differ',
        );
      }
      index++;
    }
    return RendererParityReport(mismatches: mismatches, trace: trace);
  }

  void _apply(RendererBackend backend, RendererReplayAction action) {
    switch (action.kind) {
      case RendererReplayActionKind.initialize:
        backend.initialize();
      case RendererReplayActionKind.submit:
        backend.submit(action.frame!);
      case RendererReplayActionKind.input:
        backend.handleInput(action.input!);
      case RendererReplayActionKind.loseContext:
        backend.loseContext();
      case RendererReplayActionKind.recover:
        backend.recover();
      case RendererReplayActionKind.dispose:
        backend.dispose();
    }
  }

  Map<String, dynamic> _observation(RendererBackend backend) => {
    'state': backend.state.name,
    'frame': _withoutBackend(backend.lastFrameEncoding),
    'input': _withoutBackend(backend.lastInputEncoding),
  };

  dynamic _withoutBackend(String? encoded) {
    if (encoded == null) return null;
    final value = jsonDecode(encoded);
    if (value is Map) {
      final copy = <String, dynamic>{};
      for (final entry in value.entries) {
        if (entry.key != 'backend') copy[entry.key as String] = entry.value;
      }
      return copy;
    }
    return value;
  }

  bool _equalPublicObservations(
    Map<String, dynamic> left,
    Map<String, dynamic> right,
  ) => jsonEncode(left) == jsonEncode(right);
}
