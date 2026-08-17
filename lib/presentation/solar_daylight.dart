import 'dart:math' as math;

/// Converts an authored day length into a physically plausible solar
/// declination for the house latitude used by the presentation host.
///
/// The renderer still receives the resulting declination as a host fact. This
/// adapter owns the game-specific choice of latitude and the authored
/// daylight curve; it does not turn Pixeldart into a calendar or weather
/// simulator.
final class SolarDaylightModel {
  static const latitudeRadians = 51.5 * math.pi / 180.0;
  static const apparentHorizonRadians = -0.833 * math.pi / 180.0;

  static double declinationForDaylightHours(double daylightHours) {
    final target = daylightHours.clamp(7.0, 17.0).toDouble();

    double dayLength(double declination) {
      final denominator = math.cos(latitudeRadians) * math.cos(declination);
      if (denominator.abs() < 1e-12) return 0.0;
      final cosineHour =
          (math.sin(apparentHorizonRadians) -
              math.sin(latitudeRadians) * math.sin(declination)) /
          denominator;
      if (cosineHour <= -1.0) return 24.0;
      if (cosineHour >= 1.0) return 0.0;
      return math.acos(cosineHour) * 24.0 / math.pi;
    }

    var low = -23.44 * math.pi / 180.0;
    var high = 23.44 * math.pi / 180.0;
    for (var i = 0; i < 40; i++) {
      final middle = (low + high) * 0.5;
      if (dayLength(middle) < target) {
        low = middle;
      } else {
        high = middle;
      }
    }
    return (low + high) * 0.5;
  }

  static double daylightHoursForDeclination(double declination) {
    if (!declination.isFinite ||
        declination < -23.44 * math.pi / 180.0 ||
        declination > 23.44 * math.pi / 180.0) {
      throw ArgumentError.value(declination, 'declination');
    }
    final denominator = math.cos(latitudeRadians) * math.cos(declination);
    final cosineHour =
        (math.sin(apparentHorizonRadians) -
            math.sin(latitudeRadians) * math.sin(declination)) /
        denominator;
    if (cosineHour <= -1.0) return 24.0;
    if (cosineHour >= 1.0) return 0.0;
    return math.acos(cosineHour) * 24.0 / math.pi;
  }
}
