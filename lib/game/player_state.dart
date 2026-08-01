import 'dart:math' as math;

import '../config.dart';
import '../engine/math3.dart';
import '../house/collision.dart';
import '../house/house.dart';

/// Resumable, collision-checked player placement. UI and active dialogue are
/// intentionally excluded: a reload returns to a stable world state.
class PlayerState {
  const PlayerState({
    required this.roomId,
    required this.eye,
    required this.yaw,
    required this.pitch,
  });

  final String roomId;
  final Vec3 eye;
  final double yaw;
  final double pitch;

  Map<String, dynamic> toJson() => {
    'roomId': roomId,
    'eye': {'x': eye.x, 'y': eye.y, 'z': eye.z},
    'yaw': yaw,
    'pitch': pitch,
  };

  static PlayerState? tryFromJson(Object? raw) {
    if (raw is! Map) return null;
    final roomId = raw['roomId'];
    final eye = raw['eye'];
    final yaw = raw['yaw'];
    final pitch = raw['pitch'];
    if (roomId is! String || eye is! Map || yaw is! num || pitch is! num) {
      return null;
    }
    final x = eye['x'];
    final y = eye['y'];
    final z = eye['z'];
    if (x is! num || y is! num || z is! num) return null;
    final state = PlayerState(
      roomId: roomId,
      eye: Vec3(x.toDouble(), y.toDouble(), z.toDouble()),
      yaw: yaw.toDouble(),
      pitch: pitch.toDouble(),
    );
    return state.isFinite ? state : null;
  }

  bool get isFinite =>
      eye.x.isFinite &&
      eye.y.isFinite &&
      eye.z.isFinite &&
      yaw.isFinite &&
      pitch.isFinite &&
      pitch.abs() <= math.pi / 2;

  bool isCollisionSafe(House house) {
    if (house.byId(roomId) == null) return false;
    final base = eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);
    final capsule = Capsule(
      base: base,
      tip: base + Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
    );
    return !capsule.intersectsStaticGeometry(house, roomId);
  }
}
