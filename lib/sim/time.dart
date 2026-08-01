import 'dart:math' as math;

import '../config.dart';

class GameTime {
  int dayNumber;
  double _hour;
  final double dayLengthSeconds;

  GameTime({required this.dayNumber, required this.dayLengthSeconds})
    : _hour = 6.0;

  double get currentHour => _hour;

  int get currentHourInt => _hour.toInt();

  double get sunAngle {
    if (_hour < sunriseHour || _hour > sunsetHour) return 0.0;
    return ((_hour - sunriseHour) / (sunsetHour - sunriseHour)).clamp(0.0, 1.0);
  }

  double get daylight => math.sin(math.pi * sunAngle);

  void advance(double dt) {
    final hoursPerSecond = 24.0 / dayLengthSeconds;
    _hour = math.min(_hour + dt * hoursPerSecond, 24.0 - 1e-6);
  }

  void skipToHour(int h) {
    _hour = h.toDouble();
  }

  void restoreHour(double hour) {
    if (!hour.isFinite || hour < 0 || hour >= 24) {
      throw FormatException('saved hour must be finite and in [0, 24)');
    }
    _hour = hour;
  }
}
