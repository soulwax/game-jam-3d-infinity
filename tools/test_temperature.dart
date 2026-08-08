import 'package:quarantine/sim/temperature.dart';
import 'package:quarantine/sim/weather.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final weather = WeatherSchedule(seed: 4).forDay(10);
  final model = TemperatureModel(
    weather: weather,
    hour: 6,
    roomOffsets: const {'cellar': -5.0, 'hall': 0.0, 'kitchen': -1.0},
  );
  final dawn = model.evaluate();
  _expect(
    dawn.roomsCelsius['cellar']! < dawn.outsideCelsius,
    'room offset is applied',
  );
  _expect(
    dawn.breathRooms.contains('cellar'),
    'cold room triggers breath fact',
  );
  final noon = TemperatureModel(
    weather: weather,
    hour: 12,
    roomOffsets: const {'cellar': -5.0, 'hall': 0.0, 'kitchen': -1.0},
  ).evaluate();
  _expect(
    noon.outsideCelsius > dawn.outsideCelsius,
    'daylight warms outside deterministically',
  );
  _expect(
    noon.toJson()['roomsCelsius'] is Map<String, double>,
    'snapshot is structural',
  );
  var rejected = false;
  try {
    TemperatureModel(
      weather: weather,
      hour: 24,
      roomOffsets: const {},
    ).evaluate();
  } catch (error) {
    rejected = error is ArgumentError;
  }
  _expect(rejected, 'invalid simulation hour rejects');
  print('temperature: deterministic room/outside and breath facts pass');
}
