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
    a.days.asMap().entries.any(
      (entry) => entry.value.rainIntensity != c.days[entry.key].rainIntensity,
    ),
    'different seed changes generated rain intensities',
  );
  _expect(
    a.forDay(1).daylightHours > a.forDay(21).daylightHours,
    'daylight shortens monotonically',
  );
  _expect(
    a.days.every((day) => day.rainIntensity >= 0 && day.rainIntensity <= 1),
    'rain intensity remains bounded',
  );
  _expect(
    a.days.every(
      (day) =>
          day.windSpeedMps.isFinite &&
          day.windSpeedMps >= 0 &&
          day.windDirectionRadians.isFinite &&
          day.outsideTemperatureCelsius.isFinite,
    ),
    'wind and outside temperature facts remain finite',
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
  var rejectedDaylight = false;
  try {
    WeatherSchedule(
      seed: 1,
      days: [
        for (var day = 1; day <= WeatherSchedule.authoredDays; day++)
          WeatherDay(
            day: day,
            rain: false,
            rainIntensity: 0,
            daylightHours: day == 1 ? 25 : 12,
          ),
      ],
    );
  } on FormatException {
    rejectedDaylight = true;
  }
  _expect(rejectedDaylight, 'daylight hours above one full day reject');
  final legacy = <String, dynamic>{
    'seed': 1,
    'days': [
      for (var day = 1; day <= WeatherSchedule.authoredDays; day++)
        {'day': day, 'rain': false, 'rainIntensity': 0, 'daylightHours': 12},
    ],
  };
  final legacySchedule = WeatherSchedule.fromJson(legacy);
  _expect(
    legacySchedule.forDay(1).windSpeedMps == 0,
    'legacy saves default wind',
  );
  _expect(
    legacySchedule.forDay(1).effectivePrecipitationKind ==
        PrecipitationKind.none,
    'legacy clear saves default precipitation phase',
  );
  var rejectedPhase = false;
  try {
    WeatherSchedule.fromJson({
      'seed': 1,
      'days': [
        for (var day = 1; day <= WeatherSchedule.authoredDays; day++)
          {
            'day': day,
            'rain': false,
            'rainIntensity': 0,
            'daylightHours': 12,
            'precipitationKind': 'ice-needles',
          },
      ],
    });
  } on FormatException {
    rejectedPhase = true;
  }
  _expect(rejectedPhase, 'unknown precipitation phases reject');
  print('weather: deterministic 21-day schedule and resume fixture pass');
}
