import 'package:pixeldart/rendering/rendering.dart' as pixeldart;

import 'capability_policy.dart';

/// Isolates the Pixeldart capability type at the renderer adapter edge.
/// Neutral game/presentation contracts never import Pixeldart types.
final class PixeldartCapabilityBridge {
  const PixeldartCapabilityBridge();

  CapabilityDecision decide(pixeldart.RenderCapabilities capabilities) {
    capabilities.validate();
    final available = <String>{'webgl2'};
    if (capabilities.maxSamples > 1) available.add('msaa');
    if (capabilities.floatRenderTarget || capabilities.halfFloatRenderTarget) {
      available.add('float-textures');
    }
    if (capabilities.anisotropicFiltering) available.add('anisotropy');
    return const CapabilityPolicy().choose(available: available);
  }

  Map<String, Object?> serialize(pixeldart.RenderCapabilities capabilities) =>
      capabilities.toMap();

  pixeldart.RenderCapabilities deserialize(Map<String, Object?> value) =>
      pixeldart.RenderCapabilities.fromMap(value);

  pixeldart.QualityProfile qualityProfile(
    pixeldart.RenderCapabilities capabilities,
  ) => const pixeldart.CapabilityProfileSelector().select(capabilities);

  bool supportsContextRecovery(pixeldart.RenderCapabilities capabilities) =>
      capabilities.contextLossExtension;

  CapabilityDecision diagnostics(pixeldart.RenderCapabilities capabilities) =>
      decide(capabilities);
}
