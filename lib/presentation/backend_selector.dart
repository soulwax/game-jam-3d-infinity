import 'renderer_backend.dart';

class BackendSelection {
  final RendererBackendKind kind;
  final bool explicit;
  final bool automatic;

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
    'rejected': rejected,
    'aliasUsed': aliasUsed,
    if (rejectionReason != null) 'rejectionReason': rejectionReason,
    if (aliasReason != null) 'aliasReason': aliasReason,
  };
}

class BackendSelector {
  const BackendSelector();

  BackendSelection select(String? rendererQuery) {
    final value = rendererQuery?.trim().toLowerCase();
    if (value == null || value.isEmpty) {
      return const BackendSelection(
        RendererBackendKind.pixeldart,
        explicit: false,
      );
    }
    if (value == 'pixeldart') {
      return const BackendSelection(
        RendererBackendKind.pixeldart,
        explicit: true,
      );
    }
    final alias = value == 'next' || value == 'auto' || value == 'legacy';
    final reason = alias
        ? 'renderer query "$value" is retired; use pixeldart'
        : 'unsupported renderer query "$value"; use pixeldart';
    return BackendSelection(
      RendererBackendKind.pixeldart,
      explicit: false,
      rejected: true,
      rejectionReason: reason,
      aliasUsed: alias,
      aliasReason: alias ? reason : null,
    );
  }
}
