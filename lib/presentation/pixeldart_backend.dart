import 'dart:convert';

import 'renderer_backend.dart';
import 'renderer_diagnostics.dart';
import 'renderer_runtime.dart';

/// Pixeldart-facing mapping seam. The eventual backend owns Pixeldart/WebGL
/// objects; the game exposes only this structural frame and action contract.
class PixeldartBackendMapper {
  const PixeldartBackendMapper();

  Map<String, Object?> mapFrame(RendererFrame frame) => {
    'backend': 'pixeldart',
    'interpolation': frame.interpolation,
    'facts': frame.snapshot.toJson(),
  };

  Map<String, Object?> mapInput(RendererInputAction action) => {
    'id': action.id,
    'pressed': action.pressed,
    'value': action.value,
  };
}

final class PixeldartBackend implements RendererBackend {
  final PixeldartBackendMapper mapper;
  final RendererRuntime? runtime;
  final Map<String, Object?>? selectionDiagnostics;
  RendererBackendState _state = RendererBackendState.constructed;
  RendererFrame? _lastFrame;
  String? _lastFrameEncoding;
  String? _lastInputEncoding;

  PixeldartBackend({
    this.mapper = const PixeldartBackendMapper(),
    this.runtime,
    this.selectionDiagnostics,
  });

  @override
  RendererBackendKind get kind => RendererBackendKind.pixeldart;

  @override
  RendererBackendState get state => _state;

  @override
  RendererDiagnostics get diagnostics {
    final base =
        runtime?.diagnostics ??
        RendererDiagnostics.fromEnvironment(
          backend: 'pixeldart',
          profile: 'safe',
          capabilities: [],
          fallback: false,
        );
    final selection = selectionDiagnostics;
    return selection == null ? base : base.withSelection(selection);
  }

  @override
  RendererFrame? get lastFrame => _lastFrame;

  @override
  String? get lastFrameEncoding => _lastFrameEncoding;

  @override
  String? get lastInputEncoding => _lastInputEncoding;

  @override
  void initialize() {
    if (_state == RendererBackendState.disposed) {
      throw StateError('pixeldart backend is disposed');
    }
    runtime?.initialize();
    _state = RendererBackendState.ready;
  }

  @override
  void resize(int width, int height) {
    _requireReady();
    if (width <= 0 || height <= 0) {
      throw ArgumentError('pixeldart surface size must be positive');
    }
    runtime?.resize(width, height);
  }

  @override
  void loseContext() {
    if (_state != RendererBackendState.ready) {
      throw StateError('pixeldart backend is not ready');
    }
    _state = RendererBackendState.lost;
    runtime?.loseContext();
  }

  @override
  void recover() {
    if (_state != RendererBackendState.lost) {
      throw StateError('pixeldart backend is not context-lost');
    }
    _state = RendererBackendState.ready;
    runtime?.recover();
  }

  @override
  void submit(RendererFrame frame) {
    final activeRuntime = runtime;
    if (_state == RendererBackendState.lost) {
      if (activeRuntime == null || !activeRuntime.contextLost) recover();
      if (_state == RendererBackendState.lost) return;
    }
    _requireReady();
    _lastFrameEncoding = jsonEncode(mapper.mapFrame(frame));
    if (activeRuntime != null) {
      if (activeRuntime.contextLost) {
        loseContext();
        return;
      }
      activeRuntime.submit(frame);
    }
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
      throw StateError('pixeldart backend is not ready');
    }
  }
}
