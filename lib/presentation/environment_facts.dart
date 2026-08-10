import '../sim/temperature.dart';
import '../sim/weather.dart';

/// Renderer-neutral environment values derived from simulation facts.
///
/// This keeps weather, room temperature, and aperture state out of the GPU
/// API while still making their visual effect explicit and deterministic.
final class EnvironmentFrameFacts {
  final double ambientIntensity;
  final double fogDensity;
  final double fogHeightFalloff;
  final double rainIntensity;
  final double roomTemperatureCelsius;
  final bool breathVisible;
  final bool daylightThroughWindow;

  const EnvironmentFrameFacts({
    required this.ambientIntensity,
    required this.fogDensity,
    required this.fogHeightFalloff,
    required this.rainIntensity,
    required this.roomTemperatureCelsius,
    required this.breathVisible,
    required this.daylightThroughWindow,
  });

  factory EnvironmentFrameFacts.derive({
    required WeatherDay weather,
    required TemperatureSnapshot temperature,
    required String roomId,
    required double daylight,
    required bool daylightThroughWindow,
    required double ambientFloor,
    required double ambientPeak,
  }) {
    if (!daylight.isFinite || daylight < 0 || daylight > 1) {
      throw ArgumentError.value(
        daylight,
        'daylight',
        'must be finite in [0, 1]',
      );
    }
    if (!ambientFloor.isFinite ||
        ambientFloor < 0 ||
        !ambientPeak.isFinite ||
        ambientPeak < 0) {
      throw ArgumentError('ambient bounds must be finite and non-negative');
    }
    final roomTemperature =
        temperature.roomsCelsius[roomId] ?? temperature.outsideCelsius;
    final rain = weather.rainIntensity.clamp(0.0, 1.0).toDouble();
    // Closed shutters reduce the daylight component without extinguishing
    // practicals. Rain also cools/desaturates the daylight fill.
    final aperture = daylightThroughWindow ? 1.0 : 0.62;
    final daylightFill = daylight * aperture * (1.0 - rain * 0.24);
    final cold =
        ((TemperatureModel.breathThresholdCelsius - roomTemperature) / 10.0)
            .clamp(0.0, 1.0)
            .toDouble();
    return EnvironmentFrameFacts(
      ambientIntensity: (ambientPeak * daylightFill).clamp(
        ambientFloor,
        double.infinity,
      ),
      fogDensity: 0.0015 + rain * 0.014 + cold * 0.003,
      fogHeightFalloff: 0.04 + rain * 0.08 + cold * 0.02,
      rainIntensity: rain,
      roomTemperatureCelsius: roomTemperature,
      breathVisible: temperature.breathRooms.contains(roomId),
      daylightThroughWindow: daylightThroughWindow,
    );
  }

  Map<String, dynamic> toJson() => {
    'ambientIntensity': ambientIntensity,
    'fogDensity': fogDensity,
    'fogHeightFalloff': fogHeightFalloff,
    'rainIntensity': rainIntensity,
    'roomTemperatureCelsius': roomTemperatureCelsius,
    'breathVisible': breathVisible,
    'daylightThroughWindow': daylightThroughWindow,
  };
}

/// Visual presentation facts mapped to renderer uniforms for PF-05.
final class VisualPresentationFacts {
  final double exposureMultiplier;
  final double fovDegrees;
  final double cameraBreathScale;
  final double surfaceWetness;
  final String colorGradeClass;

  const VisualPresentationFacts({
    required this.exposureMultiplier,
    required this.fovDegrees,
    required this.cameraBreathScale,
    required this.surfaceWetness,
    required this.colorGradeClass,
  });

  factory VisualPresentationFacts.fromSettings({
    required double exposure,
    required double fov,
    required double cameraMotion,
    required double rainIntensity,
    required String colorGrade,
  }) {
    final expMult = (1.0 + exposure).clamp(0.25, 4.0).toDouble();
    final wetness = (rainIntensity * 0.85).clamp(0.0, 1.0);
    return VisualPresentationFacts(
      exposureMultiplier: expMult,
      fovDegrees: fov.clamp(50.0, 120.0),
      cameraBreathScale: cameraMotion.clamp(0.0, 2.0),
      surfaceWetness: wetness,
      colorGradeClass: colorGrade,
    );
  }

  Map<String, dynamic> toJson() => {
        'exposureMultiplier': exposureMultiplier,
        'fovDegrees': fovDegrees,
        'cameraBreathScale': cameraBreathScale,
        'surfaceWetness': surfaceWetness,
        'colorGradeClass': colorGradeClass,
      };
}
