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
  RendererBackendState _state = RendererBackendState.constructed;
  RendererFrame? _lastFrame;

  LegacyBackend({this.mapper = const LegacyBackendMapper()});

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
  );

  RendererFrame? get lastFrame => _lastFrame;

  @override
  void initialize() {
    if (_state == RendererBackendState.disposed) {
      throw StateError('legacy backend is disposed');
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
      throw StateError('legacy backend is not ready');
    }
  }
}
