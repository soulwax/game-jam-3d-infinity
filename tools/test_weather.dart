import 'package:quarantine/sim/weather.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final a = WeatherSchedule(seed: 17);
  final b = WeatherSchedule(seed: 17);
  final c = WeatherSchedule(seed: 18);
  _expect(a.days.length == 21, 'schedule covers every authored day');
  _expect(a.encode() == b.encode(), 'same seed is byte-identical');
  _expect(a.encode() != c.encode(), 'different seed changes weather facts');
  _expect(
    a.forDay(1).daylightHours > a.forDay(21).daylightHours,
    'daylight shortens monotonically',
  );
  _expect(
    a.days.every((day) => day.rainIntensity >= 0 && day.rainIntensity <= 1),
    'rain intensity remains bounded',
  );
  _expect(
    WeatherSchedule.fromJson(a.encode()).encode() == a.encode(),
    'save/resume preserves exact schedule',
  );
  var rejected = false;
  try {
    WeatherSchedule.fromJson({'seed': 1, 'days': []});
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, 'incomplete schedules reject');
  print('weather: deterministic 21-day schedule and resume fixture pass');
}
