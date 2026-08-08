import 'dart:convert';
import 'dart:math' as math;

import '../engine/math3.dart';

class WeatherDay {
  final int day;
  final bool rain;
  final double rainIntensity;
  final double daylightHours;

  const WeatherDay({
    required this.day,
    required this.rain,
    required this.rainIntensity,
    required this.daylightHours,
  });

  Map<String, dynamic> toJson() => {
    'day': day,
    'rain': rain,
    'rainIntensity': rainIntensity,
    'daylightHours': daylightHours,
  };
}

/// Seeded, renderer-neutral weather facts for one authored run.
class WeatherSchedule {
  static const authoredDays = 21;

  final int seed;
  final List<WeatherDay> days;

  WeatherSchedule({required this.seed, List<WeatherDay>? days})
    : days = days == null
          ? List.unmodifiable(_generate(seed))
          : List.unmodifiable(_validate(days));

  WeatherDay forDay(int day) {
    if (day < 1 || day > days.length) {
      throw RangeError.range(day, 1, days.length, 'day');
    }
    return days[day - 1];
  }

  String encode() => jsonEncode({
    'seed': seed,
    'days': [for (final day in days) day.toJson()],
  });

  factory WeatherSchedule.fromJson(Object? raw) {
    if (raw is String) raw = jsonDecode(raw);
    if (raw is! Map || raw['seed'] is! int || raw['days'] is! List) {
      throw const FormatException('weather schedule is malformed');
    }
    final rawDays = raw['days'] as List;
    final decoded = <WeatherDay>[];
    for (final value in rawDays) {
      if (value is! Map ||
          value['day'] is! int ||
          value['rain'] is! bool ||
          value['rainIntensity'] is! num ||
          value['daylightHours'] is! num) {
        throw const FormatException('weather day is malformed');
      }
      decoded.add(
        WeatherDay(
          day: value['day'] as int,
          rain: value['rain'] as bool,
          rainIntensity: (value['rainIntensity'] as num).toDouble(),
          daylightHours: (value['daylightHours'] as num).toDouble(),
        ),
      );
    }
    return WeatherSchedule(seed: raw['seed'] as int, days: decoded);
  }
}

List<WeatherDay> _generate(int seed) => [
  for (var day = 1; day <= WeatherSchedule.authoredDays; day++)
    () {
      final value = _mix(seed, day);
      final rain = value % 5 == 0 || value % 7 == 0;
      final intensity = rain ? 0.35 + (value % 66) / 100.0 : 0.0;
      final daylight = 12.0 - (day - 1) * (2.0 / 20.0);
      return WeatherDay(
        day: day,
        rain: rain,
        rainIntensity: intensity,
        daylightHours: daylight,
      );
    }(),
];

List<WeatherDay> _validate(List<WeatherDay> days) {
  if (days.length != WeatherSchedule.authoredDays) {
    throw const FormatException('weather schedule must cover 21 days');
  }
  for (var index = 0; index < days.length; index++) {
    final day = days[index];
    if (day.day != index + 1 ||
        !day.rainIntensity.isFinite ||
        day.rainIntensity < 0 ||
        day.rainIntensity > 1 ||
        !day.daylightHours.isFinite ||
        day.daylightHours <= 0) {
      throw const FormatException('weather day is out of bounds');
    }
  }
  return days;
}

int _mix(int seed, int day) {
  var value = (seed ^ (day * 0x45d9f3b)) & 0x7fffffff;
  value = (value ^ (value >> 16)) * 0x45d9f3b & 0x7fffffff;
  return (value ^ (value >> 16)) & 0x7fffffff;
}

int sunColor(double angle) {
  final t = angle.clamp(0.0, 1.0).toDouble();
  if (t <= 0.5) {
    return _lerpColor(0x4488CC, 0xFFFFFF, t * 2.0);
  }
  return _lerpColor(0xFFFFFF, 0xFFBB55, (t - 0.5) * 2.0);
}

Vec3 sunDirection(double angle) {
  final t = angle.clamp(0.0, 1.0).toDouble();
  final azimuth = (t - 0.5) * math.pi;
  return Vec3(math.cos(azimuth), math.sin(math.pi * t), -0.5).normalized;
}

int _lerpColor(int a, int b, double t) {
  int channel(int shift) =>
      (((a >> shift) & 0xff) +
              ((((b >> shift) & 0xff) - ((a >> shift) & 0xff)) * t))
          .round()
          .clamp(0, 255);
  return (channel(16) << 16) | (channel(8) << 8) | channel(0);
}
