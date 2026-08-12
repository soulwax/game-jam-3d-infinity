import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';

/// Physical coefficients for atmospheric Rayleigh and Mie scattering.
class AtmosphericCoefficients {
  /// Rayleigh scattering coefficients for standard sea-level air at wavelengths (680nm, 550nm, 440nm).
  static final Vec3 rayleighScattering = Vec3(5.802e-6, 13.558e-6, 33.100e-6);

  /// Rayleigh scale height in meters.
  static const double rayleighScaleHeight = 8000.0;

  /// Mie scattering coefficient for aerosols.
  static const double mieScattering = 3.996e-6;

  /// Mie absorption coefficient.
  static const double mieAbsorption = 4.400e-6;

  /// Mie extinction = scattering + absorption.
  static const double mieExtinction = mieScattering + mieAbsorption;

  /// Mie scale height in meters.
  static const double mieScaleHeight = 1200.0;

  /// Earth radius in meters.
  static const double earthRadius = 6360000.0;

  /// Atmosphere radius in meters.
  static const double atmosphereRadius = 6420000.0;

  /// Default Henyey-Greenstein asymmetry parameter for forward aerosol scattering.
  static const double defaultMieAsymmetry = 0.76;
}

/// Evaluated atmospheric sky radiance and environmental irradiance result.
class PhysicalSkyResult {
  final Vec3 zenithRadiance;
  final Vec3 horizonRadiance;
  final Vec3 sunDiskRadiance;
  final Vec3 ambientSkyColor;
  final Vec3 sunTransmittance;
  final double sunAngularRadiusRad;
  final double turbidity;

  const PhysicalSkyResult({
    required this.zenithRadiance,
    required this.horizonRadiance,
    required this.sunDiskRadiance,
    required this.ambientSkyColor,
    required this.sunTransmittance,
    required this.sunAngularRadiusRad,
    required this.turbidity,
  });

  Map<String, dynamic> toJson() => {
        'zenithRadiance': [zenithRadiance.x, zenithRadiance.y, zenithRadiance.z],
        'horizonRadiance': [horizonRadiance.x, horizonRadiance.y, horizonRadiance.z],
        'sunDiskRadiance': [sunDiskRadiance.x, sunDiskRadiance.y, sunDiskRadiance.z],
        'ambientSkyColor': [ambientSkyColor.x, ambientSkyColor.y, ambientSkyColor.z],
        'sunTransmittance': [sunTransmittance.x, sunTransmittance.y, sunTransmittance.z],
        'sunAngularRadiusRad': sunAngularRadiusRad,
        'turbidity': turbidity,
      };
}

/// Physical Sky & Atmospheric Scattering Pipeline.
/// Evaluates Rayleigh (blue sky) and Mie (sun haze/glow) scattering with
/// analytical spherical geometry and wavelength-dependent optical depth.
class PhysicalSkyAtmosphericEngine {
  /// Evaluates the Rayleigh phase function for scattering angle cosTheta.
  static double rayleighPhase(double cosTheta) {
    return (3.0 / (16.0 * math.pi)) * (1.0 + cosTheta * cosTheta);
  }

  /// Evaluates the Cornette-Shanks / Henyey-Greenstein phase function for aerosols.
  static double miePhase(double cosTheta, {double g = AtmosphericCoefficients.defaultMieAsymmetry}) {
    final g2 = g * g;
    final denom = math.pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5);
    if (denom <= 1e-7) return 0.0;
    return (3.0 / (8.0 * math.pi)) * ((1.0 - g2) * (1.0 + cosTheta * cosTheta)) / ((2.0 + g2) * denom);
  }

  /// Optical depth approximation through a spherical atmosphere.
  /// At zenith (cosZenith = 1.0), airmass ≈ 1.0 (optical depth ≈ scaleHeight).
  /// At horizon (cosZenith = 0.0), airmass ≈ 38.0 due to planetary curvature.
  static double opticalDepthChapman(double cosZenith, double scaleHeight) {
    final z = cosZenith.clamp(-1.0, 1.0);
    const rEarth = AtmosphericCoefficients.earthRadius;
    final rRatio = scaleHeight / rEarth;
    if (z >= 0.0) {
      final airmass = 1.0 / math.sqrt(z * z + 2.0 * rRatio);
      return scaleHeight * math.min(airmass, 40.0);
    } else {
      final horizonOD = scaleHeight * (1.0 / math.sqrt(2.0 * rRatio));
      return horizonOD * (1.0 - z * 4.0);
    }
  }

  /// Evaluates the sky spectral radiance along a view ray direction.
  static Vec3 evaluateSkyRadiance({
    required Vec3 viewDirection,
    required Vec3 sunDirection,
    required double sunIntensity,
    double turbidity = 2.0,
    double groundAlbedo = 0.15,
  }) {
    final viewDir = viewDirection.normalized;
    final sunDir = sunDirection.normalized;

    final cosTheta = viewDir.dot(sunDir).clamp(-1.0, 1.0);
    final cosZenithView = math.max(0.01, viewDir.y);
    final cosZenithSun = sunDir.y;

    // 1. Calculate Optical Depth along View and Sun Rays
    final rayleighOD = opticalDepthChapman(cosZenithView, AtmosphericCoefficients.rayleighScaleHeight);
    final mieOD = opticalDepthChapman(cosZenithView, AtmosphericCoefficients.mieScaleHeight) * turbidity;

    final sunRayleighOD = opticalDepthChapman(math.max(0.01, cosZenithSun), AtmosphericCoefficients.rayleighScaleHeight);
    final sunMieOD = opticalDepthChapman(math.max(0.01, cosZenithSun), AtmosphericCoefficients.mieScaleHeight) * turbidity;

    // Transmittance along Sun -> Atmospheric Interaction Point -> Eye
    final tauR = Vec3(
      AtmosphericCoefficients.rayleighScattering.x * (rayleighOD + sunRayleighOD),
      AtmosphericCoefficients.rayleighScattering.y * (rayleighOD + sunRayleighOD),
      AtmosphericCoefficients.rayleighScattering.z * (rayleighOD + sunRayleighOD),
    );
    final tauM = (AtmosphericCoefficients.mieExtinction * (mieOD + sunMieOD));

    final transmittance = Vec3(
      math.exp(-tauR.x - tauM),
      math.exp(-tauR.y - tauM),
      math.exp(-tauR.z - tauM),
    );

    // 2. Scattering Phase Evaluations
    final phaseR = rayleighPhase(cosTheta);
    final phaseM = miePhase(cosTheta);

    // 3. Single Scattering In-Scattering Integral Radiance
    final rayleighInscatter = Vec3(
      AtmosphericCoefficients.rayleighScattering.x * phaseR * transmittance.x,
      AtmosphericCoefficients.rayleighScattering.y * phaseR * transmittance.y,
      AtmosphericCoefficients.rayleighScattering.z * phaseR * transmittance.z,
    );

    final mieInscatter = Vec3(
      AtmosphericCoefficients.mieScattering * phaseM * transmittance.x * turbidity,
      AtmosphericCoefficients.mieScattering * phaseM * transmittance.y * turbidity,
      AtmosphericCoefficients.mieScattering * phaseM * transmittance.z * turbidity,
    );

    var totalRadiance = Vec3(
      (rayleighInscatter.x + mieInscatter.x) * sunIntensity,
      (rayleighInscatter.y + mieInscatter.y) * sunIntensity,
      (rayleighInscatter.z + mieInscatter.z) * sunIntensity,
    );

    // 4. Solar Disc Direct Radiance
    final sunAngularRadius = 0.00935 / 2.0; // ~0.27 degrees in radians
    final angleToSun = math.acos(cosTheta);
    if (angleToSun <= sunAngularRadius && cosZenithSun > 0.0) {
      final sunDirectTransmittance = Vec3(
        math.exp(-AtmosphericCoefficients.rayleighScattering.x * sunRayleighOD - AtmosphericCoefficients.mieExtinction * sunMieOD),
        math.exp(-AtmosphericCoefficients.rayleighScattering.y * sunRayleighOD - AtmosphericCoefficients.mieExtinction * sunMieOD),
        math.exp(-AtmosphericCoefficients.rayleighScattering.z * sunRayleighOD - AtmosphericCoefficients.mieExtinction * sunMieOD),
      );
      const sunBaseLuminance = 15000.0;
      totalRadiance = Vec3(
        totalRadiance.x + sunDirectTransmittance.x * sunBaseLuminance,
        totalRadiance.y + sunDirectTransmittance.y * sunBaseLuminance,
        totalRadiance.z + sunDirectTransmittance.z * sunBaseLuminance,
      );
    }

    return totalRadiance;
  }

  /// Evaluates full sky parameters (zenith, horizon, solar transmittance, ambient hemispherical color).
  static PhysicalSkyResult evaluateFullSky({
    required Vec3 sunDirection,
    required double sunIntensity,
    double turbidity = 2.0,
  }) {
    final zenith = evaluateSkyRadiance(
      viewDirection: Vec3(0.0, 1.0, 0.0),
      sunDirection: sunDirection,
      sunIntensity: sunIntensity,
      turbidity: turbidity,
    );

    final horizon = evaluateSkyRadiance(
      viewDirection: Vec3(1.0, 0.05, 0.0),
      sunDirection: sunDirection,
      sunIntensity: sunIntensity,
      turbidity: turbidity,
    );

    final sunDisk = evaluateSkyRadiance(
      viewDirection: sunDirection,
      sunDirection: sunDirection,
      sunIntensity: sunIntensity,
      turbidity: turbidity,
    );

    final sunRayleighOD = opticalDepthChapman(math.max(0.01, sunDirection.y), AtmosphericCoefficients.rayleighScaleHeight);
    final sunMieOD = opticalDepthChapman(math.max(0.01, sunDirection.y), AtmosphericCoefficients.mieScaleHeight) * turbidity;
    final sunTransmittance = Vec3(
      math.exp(-AtmosphericCoefficients.rayleighScattering.x * sunRayleighOD - AtmosphericCoefficients.mieExtinction * sunMieOD),
      math.exp(-AtmosphericCoefficients.rayleighScattering.y * sunRayleighOD - AtmosphericCoefficients.mieExtinction * sunMieOD),
      math.exp(-AtmosphericCoefficients.rayleighScattering.z * sunRayleighOD - AtmosphericCoefficients.mieExtinction * sunMieOD),
    );

    final ambientSkyColor = Vec3(
      zenith.x * 0.6 + horizon.x * 0.4,
      zenith.y * 0.6 + horizon.y * 0.4,
      zenith.z * 0.6 + horizon.z * 0.4,
    );

    return PhysicalSkyResult(
      zenithRadiance: zenith,
      horizonRadiance: horizon,
      sunDiskRadiance: sunDisk,
      ambientSkyColor: ambientSkyColor,
      sunTransmittance: sunTransmittance,
      sunAngularRadiusRad: 0.00935 / 2.0,
      turbidity: turbidity,
    );
  }
}
