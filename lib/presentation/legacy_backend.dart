import 'dart:convert';

import 'renderer_backend.dart';
import 'renderer_diagnostics.dart';
import 'renderer_runtime.dart';

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
  final RendererRuntime? runtime;
  final bool fallback;
  final String? fallbackReason;
  RendererBackendState _state = RendererBackendState.constructed;
  RendererFrame? _lastFrame;
  String? _lastFrameEncoding;
  String? _lastInputEncoding;

  LegacyBackend({
    this.mapper = const LegacyBackendMapper(),
    this.runtime,
    this.fallback = false,
    this.fallbackReason,
  });

  @override
  RendererBackendKind get kind => RendererBackendKind.legacy;

  @override
  RendererBackendState get state => _state;

  @override
  RendererDiagnostics get diagnostics =>
      runtime?.diagnostics ??
      RendererDiagnostics.fromEnvironment(
        backend: 'legacy',
        profile: 'legacy',
        capabilities: [],
        fallback: fallback,
        fallbackReason: fallbackReason,
      );

  @override
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
    runtime?.initialize();
    _state = RendererBackendState.ready;
  }

  @override
  void resize(int width, int height) {
    if (width <= 0 || height <= 0) {
      throw ArgumentError('legacy surface size must be positive');
    }
    _requireReady();
    runtime?.resize(width, height);
  }

  @override
  void loseContext() {
    if (_state != RendererBackendState.ready) {
      throw StateError('legacy backend is not ready');
    }
    _state = RendererBackendState.lost;
    runtime?.loseContext();
  }

  @override
  void recover() {
    if (_state != RendererBackendState.lost) {
      throw StateError('legacy backend is not context-lost');
    }
    runtime?.recover();
    _state = RendererBackendState.ready;
  }

  @override
  void submit(RendererFrame frame) {
    _requireReady();
    _lastFrameEncoding = jsonEncode(mapper.mapFrame(frame));
    runtime?.submit(frame);
    _lastFrame = frame;
  }

  @override
  void handleInput(RendererInputAction action) {
    _requireReady();
    _lastInputEncoding = jsonEncode(mapper.mapInput(action));
    runtime?.handleInput(action);
  }

  @override
  void dispose() {
    if (_state != RendererBackendState.disposed) runtime?.dispose();
    _state = RendererBackendState.disposed;
  }

  void _requireReady() {
    if (_state != RendererBackendState.ready) {
      throw StateError('legacy backend is not ready');
    }
  }
}
