import 'renderer_backend.dart';

class BackendSelection {
  final RendererBackendKind kind;
  final bool explicit;
  final bool automatic;
  final bool fallback;
  final String? fallbackReason;

  const BackendSelection(
    this.kind, {
    required this.explicit,
    this.automatic = false,
    this.fallback = false,
    this.fallbackReason,
  });
}

class BackendSelector {
  const BackendSelector();

  BackendSelection select(String? rendererQuery) {
    final value = rendererQuery?.trim().toLowerCase();
    if (value == null || value.isEmpty) {
      return const BackendSelection(
        RendererBackendKind.next,
        explicit: false,
        automatic: true,
      );
    }
    if (value == 'next' || value == 'auto') {
      return BackendSelection(
        RendererBackendKind.next,
        explicit: value == 'next',
        automatic: value == 'auto',
      );
    }
    final unknown = value != 'legacy';
    return BackendSelection(
      RendererBackendKind.legacy,
      explicit: false,
      fallback: unknown,
      fallbackReason: unknown ? 'unknown renderer query' : null,
    );
  }
}
