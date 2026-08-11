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

  /// Creates a new [VolumetricLightShaftParams].
  const VolumetricLightShaftParams({
    this.shaftIntensity = 0.15,
    required this.shaftSamples,
    this.fogDensity = 0.008,
    this.fogHeightFalloff = 2.0,
    this.scatterAnisotropy = 0.7,
    required this.roomId,
    required this.windowApertureFactor,
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
  /// Additional diagnostic data.
  final Map<String, dynamic> diagnostics;

  /// Creates a [VolumetricLightShaftResult].
  const VolumetricLightShaftResult({
    required this.shaftColor,
    required this.shaftIntensity,
    required this.fogContribution,
    required this.fogOpacity,
    required this.activeSamples,
    required this.diagnostics,
  });
}

/// Evaluates physical volumetric light shafts.
class VolumetricLightShaftEngine {
  /// Evaluates the volumetric light shaft state for a given room.
  static VolumetricLightShaftResult evaluateShaft({
    required DayNightAtmosphereParams atmosphere,
    required String roomId,
    required int qualitySamples,
    required bool reducedEffects,
    required bool shutterOpen,
  }) {
    if (reducedEffects || qualitySamples <= 0) {
      return const VolumetricLightShaftResult(
        shaftColor: (r: 0.0, g: 0.0, b: 0.0),
        shaftIntensity: 0.0,
        fogContribution: (r: 0.0, g: 0.0, b: 0.0),
        fogOpacity: 0.0,
        activeSamples: 0,
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

    final double calculatedIntensity =
        baseIntensity * atmosphere.directionalIntensity * aperture;

    return VolumetricLightShaftResult(
      shaftColor: shaftColor,
      shaftIntensity: calculatedIntensity,
      fogContribution: fogContribution,
      fogOpacity: fogOpacity,
      activeSamples: qualitySamples,
      diagnostics: {
        'roomId': roomId,
        'baseDensity': baseDensity,
        'aperture': aperture,
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
