import 'dart:convert';

class RendererDiagnostics {
  final String backend;
  final String profile;
  final String buildId;
  final List<String> capabilities;

  RendererDiagnostics({
    required this.backend,
    required this.profile,
    required this.buildId,
    required Iterable<String> capabilities,
  }) : capabilities = List.unmodifiable(capabilities.toSet().toList()..sort()) {
    if (backend.isEmpty || profile.isEmpty || buildId.isEmpty) {
      throw ArgumentError('renderer diagnostics identity must be non-empty');
    }
  }

  Map<String, dynamic> toJson() => {
    'backend': backend,
    'profile': profile,
    'buildId': buildId,
    'capabilities': capabilities,
  };

  String encode() => jsonEncode(toJson());
}
