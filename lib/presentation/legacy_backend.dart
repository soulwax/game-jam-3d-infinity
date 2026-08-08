import 'dart:convert';

import 'renderer_backend.dart';
import 'renderer_diagnostics.dart';

/// Mapping-only legacy adapter seam. The concrete legacy renderer remains the
/// owner of engine/GPU handles; this class only translates the public boundary.
class LegacyBackendMapper {
  const LegacyBackendMapper();

  Map<String, Object?> mapFrame(RendererFrame frame) => {
    'backend': 'legacy',
    'interpolation': frame.interpolation,
    'facts': frame.snapshot.toJson(),
  };

  Map<String, Object?> mapInput(RendererInputAction action) => {
    'id': action.id,
    'pressed': action.pressed,
    'value': action.value,
  };
}

final class LegacyBackend implements RendererBackend {
  final LegacyBackendMapper mapper;
  final bool fallback;
  final String? fallbackReason;
  RendererBackendState _state = RendererBackendState.constructed;
  RendererFrame? _lastFrame;
  String? _lastFrameEncoding;
  String? _lastInputEncoding;

  LegacyBackend({
    this.mapper = const LegacyBackendMapper(),
    this.fallback = false,
    this.fallbackReason,
  });

  @override
  RendererBackendKind get kind => RendererBackendKind.legacy;

  @override
  RendererBackendState get state => _state;

  @override
  RendererDiagnostics get diagnostics => RendererDiagnostics(
    backend: 'legacy',
    profile: 'legacy',
    buildId: 'boundary',
    capabilities: [],
    fallback: fallback,
    fallbackReason: fallbackReason,
  );

  RendererFrame? get lastFrame => _lastFrame;

  @override
  String? get lastFrameEncoding => _lastFrameEncoding;

  @override
  String? get lastInputEncoding => _lastInputEncoding;

  @override
  void initialize() {
    if (_state == RendererBackendState.disposed) {
      throw StateError('legacy backend is disposed');
    }
    _state = RendererBackendState.ready;
  }

  @override
  void loseContext() {
    if (_state != RendererBackendState.ready) {
      throw StateError('legacy backend is not ready');
    }
    _state = RendererBackendState.lost;
  }

  @override
  void recover() {
    if (_state != RendererBackendState.lost) {
      throw StateError('legacy backend is not context-lost');
    }
    _state = RendererBackendState.ready;
  }

  @override
  void submit(RendererFrame frame) {
    _requireReady();
    _lastFrameEncoding = jsonEncode(mapper.mapFrame(frame));
    _lastFrame = frame;
  }

  @override
  void handleInput(RendererInputAction action) {
    _requireReady();
    _lastInputEncoding = jsonEncode(mapper.mapInput(action));
  }

  @override
  void dispose() => _state = RendererBackendState.disposed;

  void _requireReady() {
    if (_state != RendererBackendState.ready) {
      throw StateError('legacy backend is not ready');
    }
  }
}
