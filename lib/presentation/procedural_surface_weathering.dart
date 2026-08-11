/// Procedural surface weathering.
library quarantine.presentation.procedural_surface_weathering;

import 'dart:math' as math;

/// Parameters for procedural weathering evaluation.
class WeatheringParams {
  /// Game day index (1..21).
  final int dayIndex;

  /// Room temperature in Celsius.
  final double roomTemperatureCelsius;

  /// Dew point in Celsius.
  final double dewPointCelsius;

  /// Whether there is a fireplace nearby.
  final bool isFireplaceNearby;

  /// Distance to the flue in meters.
  final double flueDistanceM;

  /// Whether the surface has been cleaned.
  final bool isSurfaceCleaned;

  /// Creates a new [WeatheringParams].
  const WeatheringParams({
    required this.dayIndex,
    required this.roomTemperatureCelsius,
    required this.dewPointCelsius,
    required this.isFireplaceNearby,
    required this.flueDistanceM,
    this.isSurfaceCleaned = false,
  });

  /// Converts to JSON.
  Map<String, dynamic> toJson() => {
        'dayIndex': dayIndex,
        'roomTemperatureCelsius': roomTemperatureCelsius,
        'dewPointCelsius': dewPointCelsius,
        'isFireplaceNearby': isFireplaceNearby,
        'flueDistanceM': flueDistanceM,
        'isSurfaceCleaned': isSurfaceCleaned,
      };
}

/// Result of procedural weathering.
class WeatheringResult {
  /// Dust opacity (0.0 to 0.40).
  final double dustOpacity;

  /// Condensation factor (0.0 to 1.0).
  final double condensationFactor;

  /// Soot darkening (0.0 to 0.60).
  final double sootDarkening;

  /// Diagnostics information.
  final Map<String, dynamic> diagnostics;

  /// Creates a new [WeatheringResult].
  const WeatheringResult({
    required this.dustOpacity,
    required this.condensationFactor,
    required this.sootDarkening,
    required this.diagnostics,
  });

  /// Converts to JSON.
  Map<String, dynamic> toJson() => {
        'dustOpacity': dustOpacity,
        'condensationFactor': condensationFactor,
        'sootDarkening': sootDarkening,
        'diagnostics': diagnostics,
      };
}

/// Engine for evaluating procedural surface weathering.
class ProceduralWeatheringEngine {
  /// Evaluates surface weathering.
  static WeatheringResult evaluateSurface({
    required WeatheringParams params,
  }) {
    // Dust
    double dust = 0.0;
    if (!params.isSurfaceCleaned) {
      dust = (params.dayIndex * 0.02).clamp(0.0, 0.40);
    }

    // Condensation
    double condensation = 0.0;
    if (params.roomTemperatureCelsius <= params.dewPointCelsius) {
      double diff = params.dewPointCelsius - params.roomTemperatureCelsius;
      condensation = (diff * 0.1).clamp(0.0, 1.0);
    }

    // Soot
    double soot = 0.0;
    if (params.isFireplaceNearby && params.flueDistanceM > 0) {
      soot = (0.60 * math.exp(-params.flueDistanceM * 0.5)).clamp(0.0, 0.60);
    }

    return WeatheringResult(
      dustOpacity: dust,
      condensationFactor: condensation,
      sootDarkening: soot,
      diagnostics: {
        'status': 'evaluated',
        'clean': params.isSurfaceCleaned,
        'day': params.dayIndex,
      },
    );
  }

  /// Validates the weathering logic.
  static bool validate() {
    final res = evaluateSurface(
      params: const WeatheringParams(
        dayIndex: 10,
        roomTemperatureCelsius: 10.0,
        dewPointCelsius: 12.0,
        isFireplaceNearby: true,
        flueDistanceM: 1.0,
      ),
    );
    assert(res.dustOpacity == 0.20);
    assert(res.condensationFactor > 0.0);
    assert(res.sootDarkening > 0.0);
    return true;
  }
}
