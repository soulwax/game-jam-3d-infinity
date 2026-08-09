import 'dart:math' as math;

import 'weather.dart';

class TemperatureSnapshot {
  final double outsideCelsius;
  final Map<String, double> roomsCelsius;
  final Set<String> breathRooms;

  TemperatureSnapshot({
    required this.outsideCelsius,
    required Map<String, double> roomsCelsius,
    required Iterable<String> breathRooms,
  }) : roomsCelsius = Map.unmodifiable(roomsCelsius),
       breathRooms = Set.unmodifiable(breathRooms);

  Map<String, dynamic> toJson() => {
    'outsideCelsius': outsideCelsius,
    'roomsCelsius': roomsCelsius,
    'breathRooms': breathRooms.toList()..sort(),
  };
}

/// Pure room-temperature and breath facts derived from weather and simulation
/// time. Room offsets are authored inputs, not renderer capabilities.
class TemperatureModel {
  static const breathThresholdCelsius = 6.0;

  final WeatherDay weather;
  final double hour;
  final Map<String, double> roomOffsets;

  TemperatureModel({
    required this.weather,
    required this.hour,
    required Map<String, double> roomOffsets,
  }) : roomOffsets = Map.unmodifiable(roomOffsets) {
    if (!hour.isFinite || hour < 0 || hour >= 24) {
      throw ArgumentError.value(hour, 'hour', 'must be finite in [0, 24)');
    }
    if (roomOffsets.values.any((value) => !value.isFinite)) {
      throw const FormatException('room temperature offsets must be finite');
    }
  }

  TemperatureSnapshot evaluate() {
    // Daylight is authored per weather day (shortening across the run), so
    // derive sunrise/sunset around noon rather than assuming fixed 06:00/18:00
    // bounds. This keeps seasonal coldness and breath facts deterministic.
    final daylightHours = weather.daylightHours.clamp(0.0, 24.0).toDouble();
    final sunrise = 12.0 - daylightHours / 2.0;
    final daylightPhase = math.sin(
      math.pi * ((hour - sunrise) / daylightHours).clamp(0.0, 1.0),
    );
    final outside = 8.0 + daylightPhase * 4.0 - weather.rainIntensity * 3.0;
    final rooms = <String, double>{};
    final breath = <String>{};
    final ids = roomOffsets.keys.toList()..sort();
    for (final id in ids) {
      final value = outside + roomOffsets[id]!;
      rooms[id] = value;
      if (value <= breathThresholdCelsius) breath.add(id);
    }
    return TemperatureSnapshot(
      outsideCelsius: outside,
      roomsCelsius: rooms,
      breathRooms: breath,
    );
  }
}
