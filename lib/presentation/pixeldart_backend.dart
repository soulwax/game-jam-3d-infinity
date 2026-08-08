import 'renderer_backend.dart';
import 'renderer_diagnostics.dart';

/// Pixeldart-facing mapping seam. The eventual backend owns Pixeldart/WebGL
/// objects; the game exposes only this structural frame and action contract.
class PixeldartBackendMapper {
  const PixeldartBackendMapper();

  Map<String, Object?> mapFrame(RendererFrame frame) => {
    'backend': 'next',
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
  RendererBackendState _state = RendererBackendState.constructed;
  RendererFrame? _lastFrame;

  PixeldartBackend({this.mapper = const PixeldartBackendMapper()});

  @override
  RendererBackendKind get kind => RendererBackendKind.next;

  @override
  RendererBackendState get state => _state;

  @override
  RendererDiagnostics get diagnostics => RendererDiagnostics(
    backend: 'next',
    profile: 'safe',
    buildId: 'boundary',
    capabilities: [],
  );

  RendererFrame? get lastFrame => _lastFrame;

  @override
  void initialize() {
    if (_state == RendererBackendState.disposed) {
      throw StateError('pixeldart backend is disposed');
    }
    _state = RendererBackendState.ready;
  }

  @override
  void submit(RendererFrame frame) {
    _requireReady();
    mapper.mapFrame(frame);
    _lastFrame = frame;
  }

  @override
  void handleInput(RendererInputAction action) {
    _requireReady();
    mapper.mapInput(action);
  }

  @override
  void dispose() => _state = RendererBackendState.disposed;

  void _requireReady() {
    if (_state != RendererBackendState.ready) {
      throw StateError('pixeldart backend is not ready');
    }
  }
}
