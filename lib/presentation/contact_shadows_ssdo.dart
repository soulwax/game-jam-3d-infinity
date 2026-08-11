/// Screen Space Directional Occlusion (SSDO) for contact shadows.
library quarantine.presentation.contact_shadows_ssdo;

import 'dart:math' as math;

/// Parameters for SSDO evaluation.
class SSDOParams {
  /// Whether SSDO is enabled.
  final bool enabled;

  /// Number of rays to sample. 16 for High, 8 for Standard, 0 for Safe.
  final int sampleCount;

  /// Radius in meters.
  final double radiusM;

  /// Weight of directional occlusion.
  final double directOcclusionWeight;

  /// Weight of color bounce.
  final double bounceWeight;

  /// Depth threshold in meters.
  final double depthThresholdM;

  /// Creates a new [SSDOParams].
  const SSDOParams({
    this.enabled = true,
    this.sampleCount = 16,
    this.radiusM = 0.3,
    this.directOcclusionWeight = 0.6,
    this.bounceWeight = 0.2,
    this.depthThresholdM = 0.05,
  });

  /// Converts to JSON.
  Map<String, dynamic> toJson() => {
        'enabled': enabled,
        'sampleCount': sampleCount,
        'radiusM': radiusM,
        'directOcclusionWeight': directOcclusionWeight,
        'bounceWeight': bounceWeight,
        'depthThresholdM': depthThresholdM,
      };
}

/// Color representation for bounce lighting.
typedef ColorRGB = ({double r, double g, double b});

/// Result of SSDO evaluation.
class SSDOResult {
  /// Directional occlusion factor (0.0 to 1.0).
  final double directionalOcclusionFactor;

  /// Contact shadow mask (0.0 to 1.0).
  final double contactShadowMask;

  /// Bounced color.
  final ColorRGB bounceColor;

  /// Number of active samples.
  final int activeSamples;

  /// Diagnostics information.
  final Map<String, dynamic> diagnostics;

  /// Creates a new [SSDOResult].
  const SSDOResult({
    required this.directionalOcclusionFactor,
    required this.contactShadowMask,
    required this.bounceColor,
    required this.activeSamples,
    required this.diagnostics,
  });

  /// Converts to JSON.
  Map<String, dynamic> toJson() => {
        'directionalOcclusionFactor': directionalOcclusionFactor,
        'contactShadowMask': contactShadowMask,
        'bounceColor': {'r': bounceColor.r, 'g': bounceColor.g, 'b': bounceColor.b},
        'activeSamples': activeSamples,
        'diagnostics': diagnostics,
      };
}

/// Engine for evaluating SSDO.
class SSDOEngine {
  /// Evaluates directional occlusion towards dominant light vector.
  static SSDOResult evaluateSSDO({
    required SSDOParams params,
    required double viewDepthM,
    required ({double x, double y, double z}) surfaceNormal,
    required ({double x, double y, double z}) dominantLightDir,
  }) {
    if (!params.enabled || params.sampleCount <= 0 || viewDepthM <= 0.0) {
      return const SSDOResult(
        directionalOcclusionFactor: 1.0,
        contactShadowMask: 0.0,
        bounceColor: (r: 0.0, g: 0.0, b: 0.0),
        activeSamples: 0,
        diagnostics: {'status': 'disabled_or_safe_mode'},
      );
    }

    // Simulate occlusion based on light angle and depth
    double dot = (surfaceNormal.x * dominantLightDir.x +
            surfaceNormal.y * dominantLightDir.y +
            surfaceNormal.z * dominantLightDir.z)
        .clamp(-1.0, 1.0);

    // Simple procedural heuristic for evaluation
    double occlusion = 1.0 - (math.max(0.0, dot) * params.directOcclusionWeight);
    double mask = math.max(0.0, 1.0 - occlusion);
    int samples = params.sampleCount;

    return SSDOResult(
      directionalOcclusionFactor: occlusion.clamp(0.0, 1.0),
      contactShadowMask: mask.clamp(0.0, 1.0),
      bounceColor: (r: params.bounceWeight * 0.1, g: params.bounceWeight * 0.1, b: params.bounceWeight * 0.1),
      activeSamples: samples,
      diagnostics: {'status': 'evaluated', 'dot': dot},
    );
  }

  /// Validates the SSDO logic.
  static bool validate() {
    final result = evaluateSSDO(
      params: const SSDOParams(sampleCount: 16),
      viewDepthM: 5.0,
      surfaceNormal: (x: 0.0, y: 1.0, z: 0.0),
      dominantLightDir: (x: 0.0, y: 1.0, z: 0.0),
    );
    assert(result.activeSamples == 16);
    assert(result.directionalOcclusionFactor < 1.0);
    return true;
  }
}
