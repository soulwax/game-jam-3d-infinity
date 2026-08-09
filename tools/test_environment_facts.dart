import 'package:quarantine/presentation/environment_facts.dart';
import 'package:quarantine/sim/temperature.dart';
import 'package:quarantine/sim/weather.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final clear = WeatherDay(
    day: 1,
    rain: false,
    rainIntensity: 0,
    daylightHours: 12,
  );
  final rain = WeatherDay(
    day: 2,
    rain: true,
    rainIntensity: 1,
    daylightHours: 11,
  );
  final temperature = TemperatureModel(
    weather: clear,
    hour: 12,
    roomOffsets: const {'hall': 0, 'cellar': -8},
  ).evaluate();
  final open = EnvironmentFrameFacts.derive(
    weather: clear,
    temperature: temperature,
    roomId: 'hall',
    daylight: 1,
    daylightThroughWindow: true,
    ambientFloor: 0.08,
    ambientPeak: 0.30,
  );
  final closed = EnvironmentFrameFacts.derive(
    weather: clear,
    temperature: temperature,
    roomId: 'hall',
    daylight: 1,
    daylightThroughWindow: false,
    ambientFloor: 0.08,
    ambientPeak: 0.30,
  );
  final wet = EnvironmentFrameFacts.derive(
    weather: rain,
    temperature: TemperatureModel(
      weather: rain,
      hour: 6,
      roomOffsets: const {'hall': 0, 'cellar': -8},
    ).evaluate(),
    roomId: 'cellar',
    daylight: 0.5,
    daylightThroughWindow: false,
    ambientFloor: 0.08,
    ambientPeak: 0.30,
  );
  _expect(
    open.ambientIntensity > closed.ambientIntensity,
    'closed aperture reduces daylight fill',
  );
  _expect(
    wet.fogDensity > open.fogDensity,
    'rain/cold conditions increase fog density',
  );
  _expect(wet.breathVisible, 'cold room exposes breath fact');
  _expect(
    wet.toJson()['roomTemperatureCelsius'] == -3.0,
    'room temperature remains deterministic',
  );
  print('environment facts: weather, temperature, and shutters pass');
}
