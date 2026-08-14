import '../config.dart';
import '../engine/math3.dart';
import 'house.dart';

class PointLight {
  final Vec3 position;

  /// Authored fixture direction. Mantles aim toward the room's visual centre
  /// instead of every spotlight sharing a global down vector.
  final Vec3? direction;
  final int color;
  final double radius;
  final double intensity;
  final double flicker;

  const PointLight({
    required this.position,
    this.direction,
    required this.color,
    required this.radius,
    required this.intensity,
    required this.flicker,
  });
}

class HouseLighting {
  final House house;
  HouseLighting(this.house);

  List<PointLight> visibleMantles(Set<String> roomIds, Vec3 eye) {
    final lights = <PointLight>[];
    for (final roomId in roomIds) {
      final room = house.byId(roomId);
      if (room == null) continue;
      for (final mantle in room.mantles) {
        if (!mantle.lit || mantle.broken) continue;
        final position = room.toWorld(mantle.localAt);
        final size = house.effectiveSize(room);
        final target = Vec3(
          room.origin.x + size.x * 0.5,
          room.origin.y + size.y * 0.55,
          room.origin.z + size.z * 0.5,
        );
        final delta = target - position;
        final length = delta.length;
        final direction = length > 0.0001
            ? delta * (1.0 / length)
            : Vec3(0, -1, 0);
        lights.add(
          PointLight(
            position: position,
            direction: direction,
            color: mantleLightColor,
            radius: mantleLightRadius,
            intensity: mantleLightIntensity * _roomGain(room.id),
            flicker: mantleLightFlicker,
          ),
        );
      }
    }
    lights.sort(
      (a, b) => (a.position - eye).length.compareTo((b.position - eye).length),
    );
    return lights.take(maxMantlePointLights).toList();
  }

  double _roomGain(String roomId) => switch (roomId) {
    'kitchen' => 1.0,
    'living-room' => 0.85,
    'bathroom' => 0.8,
    'bedroom' => 0.55,
    'hall' => 0.5,
    'landing' => 0.35,
    // Showcase chambers are intentionally unnamed by the old domestic gain
    // table; they still need a neutral practical response for light tests.
    _ => 0.65,
  };
}
