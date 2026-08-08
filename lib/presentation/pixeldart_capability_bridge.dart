import 'package:pixeldart/rendering/rendering.dart' as pixeldart;

import 'capability_policy.dart';

/// Isolates the Pixeldart capability type at the renderer adapter edge.
/// Neutral game/presentation contracts never import Pixeldart types.
final class PixeldartCapabilityBridge {
  const PixeldartCapabilityBridge();

  CapabilityDecision decide(pixeldart.RenderCapabilities capabilities) {
    capabilities.validate();
    final profile = runtimeProfile(capabilities);
    return CapabilityDecision(
      profile: profile.kind.name,
      capabilities: capabilityLabels(capabilities, profile: profile),
    );
  }

  Map<String, Object?> serialize(pixeldart.RenderCapabilities capabilities) =>
      capabilities.toMap();

  pixeldart.RenderCapabilities deserialize(Map<String, Object?> value) =>
      pixeldart.RenderCapabilities.fromMap(value);

  pixeldart.QualityProfile qualityProfile(
    pixeldart.RenderCapabilities capabilities,
  ) => const pixeldart.CapabilityProfileSelector().select(capabilities);

  /// Selects the profile that is currently executable by the Pixeldart
  /// renderer. [qualityProfile] intentionally remains available for callers
  /// that need the raw negotiated feature set; the game runtime must use this
  /// method so it cannot accidentally install an unfinished graph profile.
  pixeldart.QualityProfile runtimeProfile(
    pixeldart.RenderCapabilities capabilities,
  ) => const pixeldart.CapabilityProfileSelector().selectRuntimeProfile(
    capabilities,
  );

  /// Returns stable, human-readable capability labels for game diagnostics.
  /// Keep the raw limits here rather than only publishing enabled features:
  /// constrained adapters need to be distinguishable from ordinary safe
  /// fallback on the same machine.
  List<String> capabilityLabels(
    pixeldart.RenderCapabilities capabilities, {
    pixeldart.QualityProfile? profile,
  }) {
    capabilities.validate();
    final selected = profile ?? runtimeProfile(capabilities);
    final negotiated = qualityProfile(capabilities);
    return [
      capabilities.webglVersion ?? 'webgl2',
      'webgl2',
      if (capabilities.vendorString case final vendor?) 'vendor-$vendor',
      if (capabilities.rendererString case final renderer?)
        'renderer-$renderer',
      'max-texture-${capabilities.maxTextureSize}',
      'max-texture-array-layers-${capabilities.maxTextureArrayLayers}',
      'max-samples-${capabilities.maxSamples}',
      'max-vertex-attributes-${capabilities.maxVertexAttributes}',
      'max-color-attachments-${capabilities.maxColorAttachments}',
      'negotiated-profile-${negotiated.kind.name}',
      'profile-${selected.kind.name}',
      for (final feature in (selected.installedFeatures.toList()..sort()))
        'feature-$feature',
      if (capabilities.anisotropicFiltering) 'anisotropic-filtering',
      if (capabilities.disjointTimerQuery) 'disjoint-timer-query',
      if (capabilities.floatRenderTarget) 'float-render-target',
      if (capabilities.halfFloatRenderTarget) 'half-float-render-target',
      if (capabilities.contextLossExtension) 'context-loss',
    ];
  }

  bool supportsContextRecovery(pixeldart.RenderCapabilities capabilities) =>
      capabilities.contextLossExtension;

  CapabilityDecision diagnostics(pixeldart.RenderCapabilities capabilities) =>
      decide(capabilities);
}
