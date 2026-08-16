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

      // A few shallow, camera-relative droplets give the window plane a
      // readable wet surface without pretending to simulate fluid motion.
      // The primary wetness/refraction work remains in the renderer shader.
      const droplets = [
        (x: -0.28, y: 0.18, z: 1.06, radius: 0.055, opacity: 0.24),
        (x: 0.09, y: 0.34, z: 1.08, radius: 0.040, opacity: 0.18),
        (x: 0.31, y: -0.02, z: 1.04, radius: 0.048, opacity: 0.21),
      ];
      for (final droplet in droplets) {
        items.add(
          TransientDepthItem(
            id: nextId++,
            type: TransientType.glass,
            position: cameraPosition +
                Vec3(droplet.x, droplet.y, droplet.z),
            boundsRadius: droplet.radius,
            depthDistance: droplet.z,
            baseOpacity: droplet.opacity * weather.rainIntensity,
          ),
        );
      }
    }

    // 2. Breath Fog (if ambient temperature < 5°C and player inside)
    if (room.ambientTemperatureCelsius < 5.0 && room.playerInside) {
      // A short, deterministic plume reads as exhalation better than one
      // opaque billboard. Keep the offsets camera-relative and bounded so the
      // host can animate/fade them without introducing simulation state.
      const offsets = [
        (x: -0.06, y: -0.15, z: 0.42, opacity: 0.45),
        (x: 0.05, y: -0.13, z: 0.45, opacity: 0.38),
        (x: -0.02, y: -0.08, z: 0.49, opacity: 0.30),
        (x: 0.04, y: -0.03, z: 0.54, opacity: 0.22),
      ];
      for (final offset in offsets) {
        items.add(
          TransientDepthItem(
            id: nextId++,
            type: TransientType.breath,
            position: cameraPosition +
                Vec3(offset.x, offset.y, offset.z),
            boundsRadius: 0.16,
            depthDistance: offset.z,
            baseOpacity: offset.opacity,
          ),
        );
      }
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
