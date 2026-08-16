import 'dart:math' as math;

import '../config.dart';

class GameTime {
  int dayNumber;
  double _hour;
  final double dayLengthSeconds;

  GameTime({required this.dayNumber, required this.dayLengthSeconds})
    : _hour = sunriseHour.toDouble();

  double get currentHour => _hour;

  int get currentHourInt => _hour.toInt();

  double get sunAngle {
    if (_hour < sunriseHour || _hour > sunsetHour) return 0.0;
    return ((_hour - sunriseHour) / (sunsetHour - sunriseHour)).clamp(0.0, 1.0);
  }

  /// Civil-light factor used by the legacy presentation path. It begins
  /// before the geometric sunrise and lingers after sunset, so dawn and dusk
  /// are not hard black/white switches even though [sunAngle] remains the
  /// geometric solar arc.
  double get daylight {
    const civilTwilightHours = 1.5;
    final start = sunriseHour - civilTwilightHours;
    final end = sunsetHour + civilTwilightHours;
    if (_hour <= start || _hour >= end) return 0.0;
    final progress = ((_hour - start) / (end - start)).clamp(0.0, 1.0);
    return math.sin(math.pi * progress);
  }

  void advance(double dt) {
    final hoursPerSecond = 24.0 / dayLengthSeconds;
    _hour = math.min(_hour + dt * hoursPerSecond, 24.0 - 1e-6);
  }

  /// Places the clock at an exact fractional hour, preserving minute
  /// precision for debug controls and deterministic test fixtures.
  void skipToHour(num hour) {
    final value = hour.toDouble();
    if (!value.isFinite || value < 0 || value >= 24) {
      throw FormatException('skipped hour must be finite and in [0, 24)');
    }
    _hour = value;
  }

  void restoreHour(double hour) {
    if (!hour.isFinite || hour < 0 || hour >= 24) {
      throw FormatException('saved hour must be finite and in [0, 24)');
    }
    _hour = hour;
  }
}
