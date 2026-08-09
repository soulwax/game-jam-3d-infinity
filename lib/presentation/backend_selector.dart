import 'renderer_backend.dart';

class BackendSelection {
  final RendererBackendKind kind;
  final bool explicit;
  final bool automatic;
  final bool fallback;
  final String? fallbackReason;

  /// The query was understood as unsupported, even though a safe fallback is
  /// retained until the bootstrap layer can turn this into a hard failure.
  final bool rejected;
  final String? rejectionReason;
  final bool aliasUsed;
  final String? aliasReason;

  const BackendSelection(
    this.kind, {
    required this.explicit,
    this.automatic = false,
    this.fallback = false,
    this.fallbackReason,
    this.rejected = false,
    this.rejectionReason,
    this.aliasUsed = false,
    this.aliasReason,
  });

  /// Stable, bootstrap-ready selection facts. The enclosing renderer
  /// diagnostics may add this map under a selection-specific key without
  /// changing existing backend/profile/provenance fields.
  Map<String, Object?> toJson() => {
    'kind': kind.name,
    'explicit': explicit,
    'automatic': automatic,
    'fallback': fallback,
    'rejected': rejected,
    'aliasUsed': aliasUsed,
    if (fallbackReason != null) 'fallbackReason': fallbackReason,
    if (rejectionReason != null) 'rejectionReason': rejectionReason,
    if (aliasReason != null) 'aliasReason': aliasReason,
  };

  /// Converts a selected Pixeldart request to a legacy fallback without
  /// discarding the original alias or rejection explanation.
  BackendSelection withLegacyFallback(String reason) => BackendSelection(
    RendererBackendKind.legacy,
    explicit: explicit,
    automatic: automatic,
    fallback: true,
    fallbackReason: reason,
    rejected: rejected,
    rejectionReason: rejectionReason,
    aliasUsed: aliasUsed,
    aliasReason: aliasReason,
  );
}

class BackendSelector {
  const BackendSelector();

  BackendSelection select(String? rendererQuery) {
    final value = rendererQuery?.trim().toLowerCase();
    if (value == null || value.isEmpty) {
      return const BackendSelection(
        RendererBackendKind.pixeldart,
        explicit: false,
        automatic: true,
      );
    }
    if (value == 'pixeldart' || value == 'next' || value == 'auto') {
      return BackendSelection(
        RendererBackendKind.pixeldart,
        explicit: value == 'pixeldart' || value == 'next',
        automatic: value == 'auto',
        aliasUsed: value == 'next',
        aliasReason: value == 'next'
            ? 'renderer query "next" is a compatibility alias; use "pixeldart"'
            : null,
      );
    }
    final unknown = value != 'legacy';
    return BackendSelection(
      RendererBackendKind.legacy,
      explicit: false,
      fallback: unknown,
      fallbackReason: unknown ? 'unknown renderer query' : null,
      rejected: unknown,
      rejectionReason: unknown ? 'unsupported renderer query "$value"' : null,
    );
  }
}
