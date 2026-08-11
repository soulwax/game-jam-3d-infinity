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

/// Computes the effective raycast range bounded to the size of the room at most.
double effectiveRoomRaycastDistance(
  House house,
  Room room, {
  double maxDistance = raycastDistance,
}) {
  final size = house.effectiveSize(room);
  final roomDiagonal = math.sqrt(size.x * size.x + size.z * size.z);
  return math.min(maxDistance, roomDiagonal);
}

/// Checks whether a ray from [from] to [to] has unobstructed line-of-sight
/// within [currentRoom] and does not intersect any solid walls or closed portals/shutters.
bool hasLineOfSight(House house, String currentRoom, Vec3 from, Vec3 to) {
  final room = house.byId(currentRoom);
  if (room == null) return false;
  return !_isSegmentBlockedByRoomWalls(house, room, from, to);
}

bool _isSegmentBlockedByRoomWalls(House house, Room room, Vec3 from, Vec3 to) {
  final size = house.effectiveSize(room);
  final dir = to - from;
  final totalDist = dir.length;
  if (totalDist < 1e-6) return false;

  // Check the 4 wall planes:
  // 1. North wall: z = room.origin.z
  if (_checkWallHit(house, room, size, Facing.north, room.origin.z, from.z, to.z, from, dir, totalDist)) {
    return true;
  }
  // 2. South wall: z = room.origin.z + size.z
  if (_checkWallHit(house, room, size, Facing.south, room.origin.z + size.z, from.z, to.z, from, dir, totalDist)) {
    return true;
  }
  // 3. West wall: x = room.origin.x
  if (_checkWallHit(house, room, size, Facing.west, room.origin.x, from.x, to.x, from, dir, totalDist)) {
    return true;
  }
  // 4. East wall: x = room.origin.x + size.x
  if (_checkWallHit(house, room, size, Facing.east, room.origin.x + size.x, from.x, to.x, from, dir, totalDist)) {
    return true;
  }

  return false;
}

bool _checkWallHit(
  House house,
  Room room,
  Vec3 size,
  Facing facing,
  double planeCoord,
  double fromCoord,
  double toCoord,
  Vec3 from,
  Vec3 dir,
  double totalDist,
) {
  final denom = toCoord - fromCoord;
  if (denom.abs() < 1e-6) return false; // Parallel to wall plane

  final t = (planeCoord - fromCoord) / denom;
  // Strictly between from and to (avoid self-occlusion at endpoints)
  if (t <= 0.002 || t >= 0.998) return false;

  final hit = from + dir * t;

  // Check if hit point is within the vertical bounds of the room wall
  if (hit.y < room.origin.y - 0.05 || hit.y > room.origin.y + size.y + 0.05) {
    return false;
  }

  // Check if hit point is within horizontal span of this wall
  final isNorthSouth = facing == Facing.north || facing == Facing.south;
  if (isNorthSouth) {
    if (hit.x < room.origin.x - 0.05 || hit.x > room.origin.x + size.x + 0.05) {
      return false;
    }
  } else {
    if (hit.z < room.origin.z - 0.05 || hit.z > room.origin.z + size.z + 0.05) {
      return false;
    }
  }

  // The ray intersects this wall plane within the room's wall boundaries.
  // Check if this hit point passes through an open aperture (passable portal or open window):

  // 1. Check portals on this wall
  for (final portal in house.portalsFor(room.id)) {
    if (portal.facingFor(room.id) == facing) {
      final offset = portal.offsetFor(room.id);
      final along = isNorthSouth ? (hit.x - room.origin.x) : (hit.z - room.origin.z);
      if (along >= offset - 0.05 && along <= offset + portal.width + 0.05) {
        final heightFromFloor = hit.y - room.origin.y;
        if (heightFromFloor >= -0.05 && heightFromFloor <= portal.height + 0.05) {
          // Inside portal opening
          if (portal.passable) {
            return false; // Passable doorway allows ray through
          } else {
            return true; // Closed/locked/stuck door blocks ray
          }
        }
      }
    }
  }

  // 2. Check windows on this wall
  for (final window in room.windows) {
    if (window.facing == facing) {
      final along = isNorthSouth ? (hit.x - room.origin.x) : (hit.z - room.origin.z);
      if (along >= window.offset - 0.05 && along <= window.offset + window.w + 0.05) {
        final heightFromFloor = hit.y - room.origin.y;
        if (heightFromFloor >= window.sill - 0.05 && heightFromFloor <= window.sill + window.h + 0.05) {
          // Inside window opening
          if (window.shutterOpen) {
            return false; // Open shutter allows ray through
          } else {
            return true; // Closed shutter blocks ray
          }
        }
      }
    }
  }

  // Not inside any open portal or window -> hits solid wall!
  return true;
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

  final effectiveDist = effectiveRoomRaycastDistance(house, room, maxDistance: distance);
  Mantle? nearest;
  double nearestDist = effectiveDist;

  for (final mantle in room.mantles) {
    final worldPos = room.toWorld(mantle.localAt);
    final toMantle = worldPos - camera.eye;
    final distToMantle = toMantle.length;

    if (distToMantle < 0.01 || distToMantle > effectiveDist) continue;

    final normMantle = toMantle.normalized;
    final angle = math.acos(normMantle.dot(camera.fwd).clamp(-1.0, 1.0));

    if (angle <= coneAngle && distToMantle < nearestDist) {
      // Ensure ray does not pass through solid walls
      if (!hasLineOfSight(house, currentRoom, camera.eye, worldPos)) {
        continue;
      }
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
  final room = house.byId(currentRoom);
  final effectiveDist = room != null
      ? effectiveRoomRaycastDistance(house, room, maxDistance: distance)
      : distance;

  Portal? nearest;
  var nearestDistance = effectiveDist;
  for (final portal in house.portalsFor(currentRoom)) {
    final targetPos = house.portalCenter(currentRoom, portal);
    final toPortal = targetPos - camera.eye;
    final portalDistance = toPortal.length;
    if (!_inCone(toPortal, portalDistance, camera, effectiveDist, coneAngle) ||
        portalDistance >= nearestDistance) {
      continue;
    }
    if (!hasLineOfSight(house, currentRoom, camera.eye, targetPos)) {
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

  final effectiveDist = effectiveRoomRaycastDistance(house, room, maxDistance: distance);
  Window? nearest;
  var nearestDistance = effectiveDist;
  for (final window in room.windows) {
    final targetPos = _windowCenter(house, room, window);
    final toWindow = targetPos - camera.eye;
    final windowDistance = toWindow.length;
    if (!_inCone(toWindow, windowDistance, camera, effectiveDist, coneAngle) ||
        windowDistance >= nearestDistance) {
      continue;
    }
    if (!hasLineOfSight(house, currentRoom, camera.eye, targetPos)) {
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
