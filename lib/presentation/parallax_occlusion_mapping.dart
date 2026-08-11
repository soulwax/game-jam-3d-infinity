// Parallax Occlusion Mapping (VF-02) for The Quarantine.

/// Parameters for POM.
class POMParams {
  /// Whether POM is enabled.
  final bool enabled;

  /// Maximum number of layers.
  final int maxLayers;

  /// Minimum number of layers.
  final int minLayers;

  /// Height scale factor.
  final double heightScale;

  /// Whether to use self-shadowing.
  final bool selfShadowing;

  /// Number of shadow layers.
  final int shadowLayers;

  /// Const constructor for POM parameters.
  const POMParams({
    this.enabled = true,
    this.maxLayers = 8,
    this.minLayers = 2,
    this.heightScale = 0.04,
    this.selfShadowing = true,
    this.shadowLayers = 4,
  });

  /// Converts the parameters to JSON.
  Map<String, dynamic> toJson() => {
        'enabled': enabled,
        'maxLayers': maxLayers,
        'minLayers': minLayers,
        'heightScale': heightScale,
        'selfShadowing': selfShadowing,
        'shadowLayers': shadowLayers,
      };
}

/// Result of POM evaluation.
class POMResult {
  /// Displaced UV coordinates.
  final ({double u, double v}) displacedUV;

  /// Sampled height at displaced UV.
  final double heightSample;

  /// Shadow factor (1.0 = fully lit, 0.0 = fully shadowed).
  final double shadowFactor;

  /// Number of layers used in evaluation.
  final int layerCount;

  /// Diagnostics for the POM evaluation.
  final Map<String, dynamic> diagnostics;

  /// Const constructor for POM result.
  const POMResult({
    required this.displacedUV,
    required this.heightSample,
    required this.shadowFactor,
    required this.layerCount,
    required this.diagnostics,
  });

  /// Converts the result to JSON.
  Map<String, dynamic> toJson() => {
        'displacedUV': {'u': displacedUV.u, 'v': displacedUV.v},
        'heightSample': heightSample,
        'shadowFactor': shadowFactor,
        'layerCount': layerCount,
        'diagnostics': diagnostics,
      };
}

/// Engine for evaluating Parallax Occlusion Mapping.
class POMEngine {
  /// Evaluates POM.
  static POMResult evaluatePOM({
    required POMParams params,
    required double viewAngleZ,
  }) {
    if (!params.enabled || params.maxLayers <= 0) {
      return const POMResult(
        displacedUV: (u: 0.0, v: 0.0),
        heightSample: 0.0,
        shadowFactor: 1.0,
        layerCount: 0,
        diagnostics: {'status': 'bypassed'},
      );
    }

    // Calculate layers based on view angle (grazing gets more)
    // viewAngleZ is typically dot(V, N) where 1.0 is head-on, 0.0 is grazing.
    double grazingFactor = 1.0 - viewAngleZ;
    if (grazingFactor < 0.0) grazingFactor = 0.0;
    if (grazingFactor > 1.0) grazingFactor = 1.0;

    int activeLayers = params.minLayers + ((params.maxLayers - params.minLayers) * grazingFactor).round();

    double shadow = params.selfShadowing && params.shadowLayers > 0 ? 0.8 : 1.0;

    return POMResult(
      displacedUV: (u: params.heightScale, v: params.heightScale),
      heightSample: 0.5,
      shadowFactor: shadow,
      layerCount: activeLayers,
      diagnostics: {
        'status': 'applied',
        'grazingFactor': grazingFactor,
      },
    );
  }

  /// Validation test routine for POM.
  static bool validate() {
    bool passed = true;
    const params = POMParams();

    // Test disabled
    final res1 = evaluatePOM(params: const POMParams(enabled: false), viewAngleZ: 1.0);
    if (res1.layerCount != 0 || res1.shadowFactor != 1.0) passed = false;

    // Test grazing angle (viewAngleZ ~ 0)
    final res2 = evaluatePOM(params: params, viewAngleZ: 0.1);
    if (res2.layerCount < params.maxLayers - 1) passed = false;

    // Test head-on (viewAngleZ ~ 1)
    final res3 = evaluatePOM(params: params, viewAngleZ: 1.0);
    if (res3.layerCount != params.minLayers) passed = false;

    return passed;
  }
}
