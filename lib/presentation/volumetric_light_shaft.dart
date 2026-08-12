import 'dart:math' as math;

import 'package:quarantine/presentation/day_night_atmosphere.dart';

/// Parameters defining volumetric light shaft physical characteristics.
class VolumetricLightShaftParams {
  /// Base intensity of the light shaft.
  final double shaftIntensity;
  /// Number of raymarch samples for the shaft.
  final int shaftSamples;
  /// Base density of the fog in the room.
  final double fogDensity;
  /// Exponential falloff of fog density by height.
  final double fogHeightFalloff;
  /// Mie-like forward scatter anisotropy.
  final double scatterAnisotropy;
  /// The room identifier this applies to.
  final String roomId;
  /// How open the window aperture is (0.0 to 1.0).
  final double windowApertureFactor;
  /// Dust mote micro-particulate density factor.
  final double dustMoteDensity;
  /// Procedural convection updraft speed in m/s.
  final double convectionSpeed;

  /// Creates a new [VolumetricLightShaftParams].
  const VolumetricLightShaftParams({
    this.shaftIntensity = 0.15,
    required this.shaftSamples,
    this.fogDensity = 0.008,
    this.fogHeightFalloff = 2.0,
    this.scatterAnisotropy = 0.7,
    required this.roomId,
    required this.windowApertureFactor,
    this.dustMoteDensity = 0.40,
    this.convectionSpeed = 0.15,
  });

  /// Serializes parameters to JSON.
  Map<String, dynamic> toJson() => {
        'shaftIntensity': shaftIntensity,
        'shaftSamples': shaftSamples,
        'fogDensity': fogDensity,
        'fogHeightFalloff': fogHeightFalloff,
        'scatterAnisotropy': scatterAnisotropy,
        'roomId': roomId,
        'windowApertureFactor': windowApertureFactor,
        'dustMoteDensity': dustMoteDensity,
        'convectionSpeed': convectionSpeed,
      };
}

/// Static registry of per-room authored fog densities.
class PerRoomFogManifest {
  /// Authored fog densities by room identifier.
  static const Map<String, double> densities = {
    'hall': 0.006,
    'kitchen': 0.010, // cooking steam
    'living-room': 0.012, // fireplace smoke
    'cellar': 0.015, // damp
    'bedroom': 0.005,
    'landing': 0.004,
    'bathroom': 0.018, // steam/condensation
    'spare-room': 0.003,
  };
}

/// Suspended dust particulate glint characteristics.
class DustMoteGlintResult {
  final double glintIntensity;
  final double particleCount;
  final double shimmerPhase;

  const DustMoteGlintResult({
    required this.glintIntensity,
    required this.particleCount,
    required this.shimmerPhase,
  });
}

/// The computed result of a volumetric light shaft evaluation.
class VolumetricLightShaftResult {
  /// The color of the light shaft.
  final Color3 shaftColor;
  /// The resulting intensity of the light shaft.
  final double shaftIntensity;
  /// The computed fog color contribution.
  final Color3 fogContribution;
  /// The overall fog opacity.
  final double fogOpacity;
  /// The number of raymarch samples actually used.
  final int activeSamples;
  /// Dust mote micro-particulate glint intensity.
  final double dustGlint;
  /// Forward Mie scattering phase factor.
  final double forwardPhase;
  /// Additional diagnostic data.
  final Map<String, dynamic> diagnostics;

  /// Creates a [VolumetricLightShaftResult].
  const VolumetricLightShaftResult({
    required this.shaftColor,
    required this.shaftIntensity,
    required this.fogContribution,
    required this.fogOpacity,
    required this.activeSamples,
    this.dustGlint = 0.0,
    this.forwardPhase = 1.0,
    required this.diagnostics,
  });
}

/// Evaluates physical volumetric light shafts and participating atmospheric media.
class VolumetricLightShaftEngine {
  /// Henyey-Greenstein forward phase function for aerosol scattering.
  static double henyeyGreenstein(double cosTheta, double g) {
    final g2 = g * g;
    final denom = math.pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5);
    if (denom <= 1e-7) return 0.0;
    return (1.0 / (4.0 * math.pi)) * ((1.0 - g2) / denom);
  }

  /// Evaluates procedural suspended dust mote glints in the light cone.
  static DustMoteGlintResult evaluateDustMotes({
    required double timeSeconds,
    required double shaftIntensity,
    required double aperture,
    double dustDensity = 0.40,
  }) {
    if (shaftIntensity <= 0.001 || aperture <= 0.05) {
      return const DustMoteGlintResult(
        glintIntensity: 0.0,
        particleCount: 0.0,
        shimmerPhase: 0.0,
      );
    }

    final t = timeSeconds;
    // Multi-frequency sinusoidal micro-particulate shimmering
    final shimmer1 = math.sin(t * 1.7) * math.cos(t * 2.3);
    final shimmer2 = math.sin(t * 3.1 + 1.2) * math.sin(t * 0.8);
    final compositeShimmer = ((shimmer1 + shimmer2) * 0.5 + 0.5).clamp(0.0, 1.0);

    final glintIntensity = shaftIntensity * dustDensity * (0.8 + 0.4 * compositeShimmer);
    final particleCount = (dustDensity * aperture * 120.0).roundToDouble();

    return DustMoteGlintResult(
      glintIntensity: glintIntensity,
      particleCount: particleCount,
      shimmerPhase: compositeShimmer,
    );
  }

  /// Evaluates the volumetric light shaft state for a given room.
  static VolumetricLightShaftResult evaluateShaft({
    required DayNightAtmosphereParams atmosphere,
    required String roomId,
    required int qualitySamples,
    required bool reducedEffects,
    required bool shutterOpen,
    double viewSunCosTheta = 0.65,
    double timeSeconds = 0.0,
  }) {
    if (reducedEffects || qualitySamples <= 0) {
      return const VolumetricLightShaftResult(
        shaftColor: (r: 0.0, g: 0.0, b: 0.0),
        shaftIntensity: 0.0,
        fogContribution: (r: 0.0, g: 0.0, b: 0.0),
        fogOpacity: 0.0,
        activeSamples: 0,
        dustGlint: 0.0,
        forwardPhase: 0.0,
        diagnostics: {'reason': 'disabled or zero samples'},
      );
    }

    final double baseDensity = PerRoomFogManifest.densities[roomId] ?? 0.008;
    final double aperture = shutterOpen ? 1.0 : 0.15;
    final double anisotropy = 0.7; // default scatterAnisotropy
    final double baseIntensity = 0.15; // default shaftIntensity

    final Color3 sunColor = atmosphere.sunColor;
    final Color3 shaftColor = (
      r: sunColor.r * anisotropy,
      g: sunColor.g * anisotropy,
      b: sunColor.b * anisotropy,
    );

    final double heightFalloff = 2.0; // default fogHeightFalloff
    final double fogOpacity = baseDensity * heightFalloff;
    final Color3 fogColor = atmosphere.fogColor;
    final Color3 fogContribution = (
      r: fogColor.r * fogOpacity,
      g: fogColor.g * fogOpacity,
      b: fogColor.b * fogOpacity,
    );

    // Forward scattering phase boost
    final forwardPhase = henyeyGreenstein(viewSunCosTheta.clamp(-1.0, 1.0), anisotropy);

    final double calculatedIntensity =
        baseIntensity * atmosphere.directionalIntensity * aperture;

    // Dust motes calculation
    final dustMoteResult = evaluateDustMotes(
      timeSeconds: timeSeconds,
      shaftIntensity: calculatedIntensity,
      aperture: aperture,
      dustDensity: baseDensity * 40.0,
    );

    return VolumetricLightShaftResult(
      shaftColor: shaftColor,
      shaftIntensity: calculatedIntensity,
      fogContribution: fogContribution,
      fogOpacity: fogOpacity,
      activeSamples: qualitySamples,
      dustGlint: dustMoteResult.glintIntensity,
      forwardPhase: forwardPhase,
      diagnostics: {
        'roomId': roomId,
        'baseDensity': baseDensity,
        'aperture': aperture,
        'dustParticles': dustMoteResult.particleCount,
      },
    );
  }

  /// Validates all 8 rooms produce valid results across quality tiers.
  static bool validate() {
    const atmosphere = DayNightAtmosphereParams(
      phase: TimeOfDayPhase.noon,
      hour: 12.0,
      sunElevationDegrees: 60.0,
      sunAzimuthDegrees: 180.0,
      sunDirection: (x: 0.0, y: 1.0, z: 0.0),
      moonDirection: (x: 0.0, y: 0.0, z: -1.0),
      sunColor: (r: 1.0, g: 1.0, b: 1.0),
      moonColor: (r: 0.0, g: 0.0, b: 0.0),
      skyAmbientColor: (r: 0.5, g: 0.5, b: 0.5),
      horizonColor: (r: 0.5, g: 0.5, b: 0.5),
      fogColor: (r: 0.5, g: 0.5, b: 0.5),
      directionalIntensity: 1.0,
      ambientIntensity: 0.5,
      windowLightLeakFactor: 1.0,
      windowSurfaceWetness: 0.0,
    );

    final rooms = PerRoomFogManifest.densities.keys.toList();
    if (rooms.length != 8) return false;

    for (final room in rooms) {
      final res1 = evaluateShaft(
        atmosphere: atmosphere,
        roomId: room,
        qualitySamples: 12,
        reducedEffects: false,
        shutterOpen: true,
      );
      if (res1.activeSamples != 12 || res1.shaftIntensity <= 0 || res1.fogOpacity <= 0) {
        return false;
      }

      final res2 = evaluateShaft(
        atmosphere: atmosphere,
        roomId: room,
        qualitySamples: 0,
        reducedEffects: false,
        shutterOpen: true,
      );
      if (res2.activeSamples != 0 || res2.shaftIntensity != 0.0) {
        return false;
      }
    }
    return true;
  }
}
