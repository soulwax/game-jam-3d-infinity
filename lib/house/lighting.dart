import '../config.dart';
import '../engine/math3.dart';
import 'house.dart';

class PointLight {
  final Vec3 position;
  final int color;
  final double radius;
  final double intensity;
  final double flicker;

  const PointLight({
    required this.position,
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
        lights.add(
          PointLight(
            position: position,
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
    _ => 0,
  };
}
