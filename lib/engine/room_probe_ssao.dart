import 'math3.dart';

/// Descriptor for a room probe carrying static indirect ambient lighting for R-05.
class RoomProbe {
  final String roomId;
  final Vec3 probePosition;
  final Vec3 ambientColor;
  final double indirectIntensity;
  final Vec3 lightmapUvScaleOffset;

  RoomProbe({
    required this.roomId,
    required this.probePosition,
    required this.ambientColor,
    this.indirectIntensity = 0.5,
    Vec3? lightmapUvScaleOffset,
  }) : lightmapUvScaleOffset = lightmapUvScaleOffset ?? Vec3(1.0, 1.0, 0.0);
}

/// Ambient-only SSAO parameters for R-05.
class AmbientSSAOParams {
  final bool enabled;
  final double radiusMetres;
  final double bias;
  final double intensity;
  final bool affectAmbientOnly;

  const AmbientSSAOParams({
    this.enabled = true,
    this.radiusMetres = 0.45,
    this.bias = 0.02,
    this.intensity = 0.65,
    this.affectAmbientOnly = true, // SSAO affects ambient indirect only; direct key is unoccluded
  });

  Map<String, dynamic> toJson() => {
        'enabled': enabled,
        'radiusMetres': radiusMetres,
        'bias': bias,
        'intensity': intensity,
        'affectAmbientOnly': affectAmbientOnly,
      };
}

/// Evaluated indirect ambient response result for R-05.
class IndirectAmbientResponse {
  final Vec3 finalAmbientColor;
  final double occlusionFactor;
  final bool groundsGeometry;

  const IndirectAmbientResponse({
    required this.finalAmbientColor,
    required this.occlusionFactor,
    required this.groundsGeometry,
  });
}

/// R-05 Static Indirect Ambient & Ambient-Only SSAO Evaluator.
class RoomProbeIndirectComposition {
  /// Computes ambient response integrating room probe indirect lighting and ambient-only SSAO.
  static IndirectAmbientResponse evaluateAmbientResponse({
    required RoomProbe probe,
    required AmbientSSAOParams ssao,
    required Vec3 baseAmbientColor,
    required double baseAmbientIntensity,
    required double depthDistanceMetres,
    required double surfaceNormalY,
  }) {
    // SSAO Occlusion factor calculation (simulated depth contact occlusion)
    double occ = 1.0;
    if (ssao.enabled) {
      final contactOcclusion = (1.0 - (depthDistanceMetres / ssao.radiusMetres).clamp(0.0, 1.0));
      // Occlusion is strongest on upward/corner surfaces
      final cornerFactor = (1.0 - surfaceNormalY.abs() * 0.3);
      final rawOcc = contactOcclusion * ssao.intensity * cornerFactor;
      occ = (1.0 - (rawOcc - ssao.bias)).clamp(0.15, 1.0);
    }

    // Blend probe indirect with base ambient
    final probeContrib = probe.ambientColor * probe.indirectIntensity;
    final combinedAmbient = baseAmbientColor * baseAmbientIntensity + probeContrib;

    // SSAO affects ambient component ONLY (affectAmbientOnly = true)
    final occludedAmbient = combinedAmbient * (ssao.affectAmbientOnly ? occ : 1.0);

    // Hero geometry grounding check: room corners carry occlusion factor < 0.95 without total black-crush (> 0.15)
    final grounded = occ < 0.95 && occ >= 0.15;

    return IndirectAmbientResponse(
      finalAmbientColor: occludedAmbient,
      occlusionFactor: occ,
      groundsGeometry: grounded,
    );
  }
}
