import 'renderer_backend.dart';

class BackendSelection {
  final RendererBackendKind kind;
  final bool explicit;

  const BackendSelection(this.kind, {required this.explicit});
}

class BackendSelector {
  const BackendSelector();

  BackendSelection select(String? rendererQuery) {
    final value = rendererQuery?.trim().toLowerCase();
    if (value == 'next') {
      return const BackendSelection(RendererBackendKind.next, explicit: true);
    }
    return const BackendSelection(RendererBackendKind.legacy, explicit: false);
  }
}
