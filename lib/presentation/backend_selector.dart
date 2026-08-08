import 'renderer_backend.dart';

class BackendSelection {
  final RendererBackendKind kind;
  final bool explicit;
  final bool fallback;
  final String? fallbackReason;

  const BackendSelection(
    this.kind, {
    required this.explicit,
    this.fallback = false,
    this.fallbackReason,
  });
}

class BackendSelector {
  const BackendSelector();

  BackendSelection select(String? rendererQuery) {
    final value = rendererQuery?.trim().toLowerCase();
    if (value == 'next') {
      return const BackendSelection(RendererBackendKind.next, explicit: true);
    }
    final unknown = value != null && value != 'legacy';
    return BackendSelection(
      RendererBackendKind.legacy,
      explicit: false,
      fallback: unknown,
      fallbackReason: unknown ? 'unknown renderer query' : null,
    );
  }
}
