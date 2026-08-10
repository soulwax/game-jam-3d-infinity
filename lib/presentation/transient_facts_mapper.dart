import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/transient_depth_route.dart';
import 'package:quarantine/sim/weather.dart';

/// Derived room condition environment facts for I-06.
class RoomConditionFacts {
  final String roomId;
  final bool hasWindow;
  final bool hasLitMantle;
  final double ambientTemperatureCelsius;
  final bool playerInside;

  const RoomConditionFacts({
    required this.roomId,
    required this.hasWindow,
    required this.hasLitMantle,
    this.ambientTemperatureCelsius = 12.0,
    this.playerInside = true,
  });
}

/// I-06 Transient Facts Mapper.
/// Maps weather schedule, gaslight mantles, and room conditions into bounded transient visual items.
class TransientFactsMapper {
  /// Generates transient visual items for a frame given simulation facts.
  static List<TransientDepthItem> mapFactsToTransients({
    required WeatherDay weather,
    required RoomConditionFacts room,
    required Vec3 cameraPosition,
  }) {
    final items = <TransientDepthItem>[];
    var nextId = 1;

    // 1. Rain Streaks (if rain intensity > 0.1)
    if (weather.rainIntensity > 0.1 && room.hasWindow) {
      final count = (weather.rainIntensity * 10).round().clamp(1, 8);
      for (var i = 0; i < count; i++) {
        items.add(
          TransientDepthItem(
            id: nextId++,
            type: TransientType.rain,
            position: cameraPosition + Vec3(0.2 * i - 0.4, 0.5, 1.2),
            boundsRadius: 0.15,
            depthDistance: 1.2,
            baseOpacity: weather.rainIntensity * 0.7,
          ),
        );
      }
    }

    // 2. Breath Fog (if ambient temperature < 5°C and player inside)
    if (room.ambientTemperatureCelsius < 5.0 && room.playerInside) {
      items.add(
        TransientDepthItem(
          id: nextId++,
          type: TransientType.breath,
          position: cameraPosition + Vec3(0.0, -0.15, 0.45),
          boundsRadius: 0.20,
          depthDistance: 0.45,
          baseOpacity: 0.45,
        ),
      );
    }

    // 3. Flame & Smoke Motes (if gaslight mantle is lit)
    if (room.hasLitMantle) {
      items.add(
        TransientDepthItem(
          id: nextId++,
          type: TransientType.flame,
          position: cameraPosition + Vec3(0.5, 0.2, 1.8),
          boundsRadius: 0.10,
          depthDistance: 1.8,
          baseOpacity: 0.85,
        ),
      );
      items.add(
        TransientDepthItem(
          id: nextId++,
          type: TransientType.smoke,
          position: cameraPosition + Vec3(0.5, 0.4, 1.8),
          boundsRadius: 0.25,
          depthDistance: 1.85,
          baseOpacity: 0.35,
        ),
      );
    }

    // 4. Dust Motes in Sunbeam (if room has window and dry/clear weather)
    if (room.hasWindow && weather.rainIntensity <= 0.1) {
      items.add(
        TransientDepthItem(
          id: nextId++,
          type: TransientType.dust,
          position: cameraPosition + Vec3(-0.3, 0.0, 1.0),
          boundsRadius: 0.30,
          depthDistance: 1.0,
          baseOpacity: 0.25,
        ),
      );
    }

    return items;
  }
}
