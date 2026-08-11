/// Cascaded Shadow Maps (CSM).
library quarantine.presentation.cascaded_shadow_maps;

import 'dart:math' as math;

/// Parameters for CSM evaluation.
class CSMParams {
  /// Number of cascades (2 High, 1 Standard, 0 Safe).
  final int cascadeCount;

  /// Split distances in meters.
  final List<double> splitDistancesM;

  /// Shadow map resolution.
  final int shadowMapResolution;

  /// Slope scaled bias.
  final double slopeScaledBias;

  /// Normal offset bias.
  final double normalOffsetBias;

  /// Translucent shadows.
  final bool translucentShadows;

  /// Creates a new [CSMParams].
  const CSMParams({
    this.cascadeCount = 2,
    this.splitDistancesM = const [4.0, 12.0],
    this.shadowMapResolution = 1024,
    this.slopeScaledBias = 0.002,
    this.normalOffsetBias = 0.001,
    this.translucentShadows = true,
  });

  /// Converts to JSON.
  Map<String, dynamic> toJson() => {
        'cascadeCount': cascadeCount,
        'splitDistancesM': splitDistancesM,
        'shadowMapResolution': shadowMapResolution,
        'slopeScaledBias': slopeScaledBias,
        'normalOffsetBias': normalOffsetBias,
        'translucentShadows': translucentShadows,
      };
}

/// Result of CSM evaluation.
class CSMResult {
  /// Active cascade index.
  final int activeCascadeIndex;

  /// Shadow factor (0.0 fully shadowed, 1.0 unshadowed).
  final double shadowFactor;

  /// Applied bias to eliminate acne.
  final double appliedBias;

  /// Whether the shadow is translucent.
  final bool isTranslucent;

  /// Diagnostics.
  final Map<String, dynamic> diagnostics;

  /// Creates a new [CSMResult].
  const CSMResult({
    required this.activeCascadeIndex,
    required this.shadowFactor,
    required this.appliedBias,
    required this.isTranslucent,
    required this.diagnostics,
  });

  /// Converts to JSON.
  Map<String, dynamic> toJson() => {
        'activeCascadeIndex': activeCascadeIndex,
        'shadowFactor': shadowFactor,
        'appliedBias': appliedBias,
        'isTranslucent': isTranslucent,
        'diagnostics': diagnostics,
      };
}

/// Engine for evaluating CSM.
class CSMEngine {
  /// Evaluates Cascaded Shadow Maps.
  static CSMResult evaluateCSM({
    required CSMParams params,
    required double viewDepthM,
    required ({double x, double y, double z}) surfaceNormal,
    required ({double x, double y, double z}) lightDir,
    required double alphaMask,
  }) {
    if (params.cascadeCount <= 0 || params.shadowMapResolution <= 0) {
      return const CSMResult(
        activeCascadeIndex: -1,
        shadowFactor: 1.0,
        appliedBias: 0.0,
        isTranslucent: false,
        diagnostics: {'status': 'safe_mode_or_disabled'},
      );
    }

    int cascade = 0;
    for (int i = 0; i < params.splitDistancesM.length && i < params.cascadeCount; i++) {
      if (viewDepthM > params.splitDistancesM[i]) {
        cascade = i + 1;
      }
    }
    cascade = math.min(cascade, params.cascadeCount - 1);

    double dot = (surfaceNormal.x * lightDir.x +
            surfaceNormal.y * lightDir.y +
            surfaceNormal.z * lightDir.z)
        .clamp(-1.0, 1.0);
    double slope = math.sqrt(math.max(0.0, 1.0 - dot * dot));
    double bias = params.normalOffsetBias + slope * params.slopeScaledBias;

    double factor = dot > 0 ? 1.0 : 0.0;
    bool trans = params.translucentShadows && alphaMask < 1.0;
    if (trans) {
      factor = math.max(factor, 1.0 - alphaMask);
    }

    return CSMResult(
      activeCascadeIndex: cascade,
      shadowFactor: factor,
      appliedBias: bias,
      isTranslucent: trans,
      diagnostics: {'cascade': cascade, 'dot': dot, 'bias': bias},
    );
  }

  /// Validates the CSM logic.
  static bool validate() {
    final res = evaluateCSM(
      params: const CSMParams(),
      viewDepthM: 5.0,
      surfaceNormal: (x: 0.0, y: 1.0, z: 0.0),
      lightDir: (x: 0.0, y: 1.0, z: 0.0),
      alphaMask: 1.0,
    );
    assert(res.activeCascadeIndex == 1);
    assert(res.shadowFactor == 1.0);
    return true;
  }
}
