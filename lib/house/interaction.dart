import 'dart:math' as math;

import '../config.dart';
import '../engine/camera.dart';
import '../engine/math3.dart';
import 'house.dart';
import 'room.dart';

class ExamineState {
  Mantle? current;
  double timeRemaining = 0;

  void update(double dt) {
    if (current != null) {
      timeRemaining -= dt;
      if (timeRemaining <= 0) {
        current = null;
      }
    }
  }

  bool get active => current != null && timeRemaining > 0;

  void startExamine(Mantle mantle) {
    current = mantle;
    timeRemaining = 2.0;
    if (mantle.examineTag != null) {
      mantle.examined = true;
    }
  }

  void breakExamine() {
    current = null;
    timeRemaining = 0;
  }
}

class ShutterState {
  bool shutterOpen(House house, String roomId) {
    final room = house.byId(roomId);
    return room != null &&
        room.windows.isNotEmpty &&
        room.windows.every((window) => window.shutterOpen);
  }

  void setShutterOpen(House house, String roomId, bool open) {
    final room = house.byId(roomId);
    if (room == null) return;
    for (final window in room.windows) {
      window.shutterOpen = open;
    }
  }
}

Mantle? raycastMantle(
  Camera camera,
  House house,
  String currentRoom, {
  double distance = raycastDistance,
  double coneAngle = raycastCone,
}) {
  final room = house.byId(currentRoom);
  if (room == null) return null;

  Mantle? nearest;
  double nearestDist = distance;

  for (final mantle in room.mantles) {
    final toMantle = room.toWorld(mantle.localAt) - camera.eye;
    final distToMantle = toMantle.length;

    if (distToMantle < 0.01 || distToMantle > distance) continue;

    final normMantle = toMantle.normalized;
    final angle = math.acos(normMantle.dot(camera.fwd).clamp(-1.0, 1.0));

    if (angle <= coneAngle && distToMantle < nearestDist) {
      nearest = mantle;
      nearestDist = distToMantle;
    }
  }

  return nearest;
}

Portal? raycastPortal(
  Camera camera,
  House house,
  String currentRoom, {
  double distance = raycastDistance,
  double coneAngle = raycastCone,
}) {
  Portal? nearest;
  var nearestDistance = distance;
  for (final portal in house.portalsFor(currentRoom)) {
    final toPortal = house.portalCenter(currentRoom, portal) - camera.eye;
    final portalDistance = toPortal.length;
    if (!_inCone(toPortal, portalDistance, camera, distance, coneAngle) ||
        portalDistance >= nearestDistance) {
      continue;
    }
    nearest = portal;
    nearestDistance = portalDistance;
  }
  return nearest;
}

Window? raycastWindow(
  Camera camera,
  House house,
  String currentRoom, {
  double distance = raycastDistance,
  double coneAngle = raycastCone,
}) {
  final room = house.byId(currentRoom);
  if (room == null) return null;
  Window? nearest;
  var nearestDistance = distance;
  for (final window in room.windows) {
    final toWindow = _windowCenter(house, room, window) - camera.eye;
    final windowDistance = toWindow.length;
    if (!_inCone(toWindow, windowDistance, camera, distance, coneAngle) ||
        windowDistance >= nearestDistance) {
      continue;
    }
    nearest = window;
    nearestDistance = windowDistance;
  }
  return nearest;
}

bool _inCone(
  Vec3 toTarget,
  double targetDistance,
  Camera camera,
  double maxDistance,
  double cone,
) {
  if (targetDistance < 0.01 || targetDistance > maxDistance) return false;
  final angle = math.acos(toTarget.normalized.dot(camera.fwd).clamp(-1.0, 1.0));
  return angle <= cone;
}

Vec3 _windowCenter(House house, Room room, Window window) {
  final size = house.effectiveSize(room);
  final along = window.offset + window.w * 0.5;
  final y = room.origin.y + window.sill + window.h * 0.5;
  return switch (window.facing) {
    Facing.north => Vec3(room.origin.x + along, y, room.origin.z),
    Facing.south => Vec3(room.origin.x + along, y, room.origin.z + size.z),
    Facing.east => Vec3(room.origin.x + size.x, y, room.origin.z + along),
    Facing.west => Vec3(room.origin.x, y, room.origin.z + along),
  };
}
