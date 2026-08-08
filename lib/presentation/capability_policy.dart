import 'renderer_diagnostics.dart';

final class CapabilityDecision {
  final String profile;
  final List<String> capabilities;
  final bool fallback;
  final String? reason;

  CapabilityDecision({
    required this.profile,
    required Iterable<String> capabilities,
    this.fallback = false,
    this.reason,
  }) : capabilities = List.unmodifiable(capabilities.toSet().toList()..sort());

  RendererDiagnostics diagnostics({
    required String backend,
    required String buildId,
  }) => RendererDiagnostics(
    backend: backend,
    profile: profile,
    buildId: buildId,
    capabilities: capabilities,
    fallback: fallback,
    fallbackReason: reason,
  );
}

final class CapabilityPolicy {
  const CapabilityPolicy();

  CapabilityDecision choose({required Iterable<String> available}) {
    final set = available.toSet();
    if (!set.contains('webgl2')) {
      return CapabilityDecision(
        profile: 'legacy-safe',
        capabilities: ['webgl1'],
        fallback: true,
        reason: 'webgl2 unavailable',
      );
    }
    final profile = set.contains('float-textures') && set.contains('msaa')
        ? 'standard'
        : 'safe';
    return CapabilityDecision(profile: profile, capabilities: set);
  }
}
