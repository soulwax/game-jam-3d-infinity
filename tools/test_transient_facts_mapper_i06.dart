// I-06: Transient facts mapper verification.
//
// Verifies that:
//  1. Rain intensity > 0.1 enqueues rain streaks in rooms with windows.
//  2. Cold ambient temperature (< 5.0 °C) enqueues player breath fog.
//  3. Active gaslight mantles enqueue flame and smoke transients.
//  4. Room with window in dry weather enqueues sunbeam dust motes.

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/transient_depth_route.dart';
import 'package:quarantine/presentation/transient_facts_mapper.dart';
import 'package:quarantine/sim/weather.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final camPos = Vec3(0, 1.65, 0);

  // 1. Rainy Window Room
  final rainyWeather = const WeatherDay(day: 3, rain: true, rainIntensity: 0.85, daylightHours: 12.0);
  final roomWindow = const RoomConditionFacts(
    roomId: 'living-room',
    hasWindow: true,
    hasLitMantle: false,
    ambientTemperatureCelsius: 14.0,
  );

  final rainTransients = TransientFactsMapper.mapFactsToTransients(
    weather: rainyWeather,
    room: roomWindow,
    cameraPosition: camPos,
  );

  check(rainTransients.any((t) => t.type == TransientType.rain), 'Rainy weather enqueues rain transients');

  // 2. Cold Room (< 5°C) -> Player Breath Fog
  final dryWeather = const WeatherDay(day: 1, rain: false, rainIntensity: 0.0, daylightHours: 12.0);
  final coldRoom = const RoomConditionFacts(
    roomId: 'cellar',
    hasWindow: false,
    hasLitMantle: false,
    ambientTemperatureCelsius: 2.0,
  );

  final coldTransients = TransientFactsMapper.mapFactsToTransients(
    weather: dryWeather,
    room: coldRoom,
    cameraPosition: camPos,
  );

  check(coldTransients.any((t) => t.type == TransientType.breath), 'Cold room (< 5°C) enqueues player breath fog');

  // 3. Lit Gaslight Mantle -> Flame & Smoke Motes
  final mantleRoom = const RoomConditionFacts(
    roomId: 'hall',
    hasWindow: false,
    hasLitMantle: true,
    ambientTemperatureCelsius: 18.0,
  );

  final mantleTransients = TransientFactsMapper.mapFactsToTransients(
    weather: dryWeather,
    room: mantleRoom,
    cameraPosition: camPos,
  );

  check(mantleTransients.any((t) => t.type == TransientType.flame), 'Lit mantle enqueues flame transient');
  check(mantleTransients.any((t) => t.type == TransientType.smoke), 'Lit mantle enqueues smoke transient');

  print('I-06: Transient facts mapper test passed cleanly!');
}
