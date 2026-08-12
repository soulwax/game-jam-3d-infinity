import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';

/// Participating media fog volume definition.
class FogVolume {
  final Vec3 minBounds;
  final Vec3 maxBounds;
  final double density;
  final Vec3 albedo;
  final double phaseAnisotropy; // g in Henyey-Greenstein [-1.0, 1.0]

  FogVolume({
    required this.minBounds,
    required this.maxBounds,
    required this.density,
    required this.albedo,
    this.phaseAnisotropy = 0.65,
  });
}

/// Evaluated volumetric in-scattering result along a camera ray.
class VolumetricInScatteringResult {
  final Vec3 inScatteredRadiance;
  final double transmittance;
  final double opticalDepth;

  VolumetricInScatteringResult({
    required this.inScatteredRadiance,
    required this.transmittance,
    required this.opticalDepth,
  });

  Map<String, dynamic> toJson() => {
        'inScatteredRadiance': [inScatteredRadiance.x, inScatteredRadiance.y, inScatteredRadiance.z],
        'transmittance': transmittance,
        'opticalDepth': opticalDepth,
      };
}

/// Volumetric Fog & Light Shaft In-Scattering Engine.
/// Computes analytical point-light in-scattering integrals and numerical
/// raymarched height-decay fog along camera rays.
class VolumetricFogInScatteringEngine {
  /// Henyey-Greenstein phase function for scattering angle cosTheta.
  static double henyeyGreensteinPhase(double cosTheta, double g) {
    final g2 = g * g;
    final denom = math.pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5);
    if (denom <= 1e-7) return 0.0;
    return (1.0 / (4.0 * math.pi)) * ((1.0 - g2) / denom);
  }

  /// Evaluates analytical in-scattering from an omni point-light source along ray segment [0, rayLength].
  static Vec3 evaluatePointLightInScattering({
    required Vec3 rayOrigin,
    required Vec3 rayDirection,
    required double rayLength,
    required Vec3 lightPosition,
    required Vec3 lightColor,
    required double lightIntensity,
    double scatteringCoefficient = 0.04,
    double phaseG = 0.65,
  }) {
    final rayDir = rayDirection.normalized;
    final toLight = lightPosition - rayOrigin;

    // Project light onto ray line: t_closest = dot(toLight, rayDir)
    final tClosest = toLight.dot(rayDir);
    // Closest point on line
    final pClosest = rayOrigin + rayDir * tClosest;
    // Perpendicular distance d from light to ray line
    final d = (lightPosition - pClosest).length;

    if (d < 1e-4) {
      // Ray passes directly through light center
      return lightColor * (lightIntensity * scatteringCoefficient / 1e-4 * 0.1);
    }

    // Angular integration limits: theta = atan((t - tClosest) / d)
    final theta0 = math.atan((0.0 - tClosest) / d);
    final theta1 = math.atan((rayLength - tClosest) / d);
    final deltaTheta = (theta1 - theta0).abs();

    // Average phase evaluation at midpoint
    final midT = (0.0 + rayLength) * 0.5;
    final midPoint = rayOrigin + rayDir * midT;
    final midToLight = (lightPosition - midPoint).normalized;
    final cosTheta = rayDir.dot(midToLight);
    final phase = henyeyGreensteinPhase(cosTheta, phaseG);

    // Analytical integral: (I * sigma_s / (4 * pi * d)) * (theta1 - theta0) * phase
    final factor = (lightIntensity * scatteringCoefficient / (4.0 * math.pi * d)) * deltaTheta * phase;

    return Vec3(
      lightColor.x * factor,
      lightColor.y * factor,
      lightColor.z * factor,
    );
  }

  /// Computes raymarched height-decay exponential fog along view ray.
  static VolumetricInScatteringResult evaluateHeightFog({
    required Vec3 rayOrigin,
    required Vec3 rayDirection,
    required double rayLength,
    required Vec3 ambientLight,
    double baseDensity = 0.05,
    double heightFalloff = 0.6,
    double groundHeight = 0.0,
    int stepCount = 16,
  }) {
    if (rayLength <= 0.0) {
      return VolumetricInScatteringResult(
        inScatteredRadiance: Vec3(0.0, 0.0, 0.0),
        transmittance: 1.0,
        opticalDepth: 0.0,
      );
    }

    final rayDir = rayDirection.normalized;
    final stepSize = rayLength / stepCount;
    var accumulatedOpticalDepth = 0.0;
    var accumulatedRadiance = Vec3(0.0, 0.0, 0.0);

    for (var i = 0; i < stepCount; i++) {
      final t = (i + 0.5) * stepSize;
      final samplePos = rayOrigin + rayDir * t;
      final heightAboveGround = math.max(0.0, samplePos.y - groundHeight);

      // Height decay: rho(y) = baseDensity * exp(-heightFalloff * y)
      final localDensity = baseDensity * math.exp(-heightFalloff * heightAboveGround);
      final stepOpticalDepth = localDensity * stepSize;
      accumulatedOpticalDepth += stepOpticalDepth;

      final stepTransmittance = math.exp(-accumulatedOpticalDepth);

      // In-scattering from ambient room illumination
      accumulatedRadiance = Vec3(
        accumulatedRadiance.x + ambientLight.x * localDensity * stepTransmittance * stepSize,
        accumulatedRadiance.y + ambientLight.y * localDensity * stepTransmittance * stepSize,
        accumulatedRadiance.z + ambientLight.z * localDensity * stepTransmittance * stepSize,
      );
    }

    final totalTransmittance = math.exp(-accumulatedOpticalDepth);

    return VolumetricInScatteringResult(
      inScatteredRadiance: accumulatedRadiance,
      transmittance: totalTransmittance,
      opticalDepth: accumulatedOpticalDepth,
    );
  }
}
