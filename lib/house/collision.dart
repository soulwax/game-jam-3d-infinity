import 'dart:math' as math;

import '../config.dart';
import '../engine/math3.dart';
import 'house.dart';
import 'room.dart';

class Capsule {
  Vec3 base;
  Vec3 tip;
  double radius;
  _ActiveStair? _activeStair;

  Capsule({
    required this.base,
    required this.tip,
    this.radius = playerCapsuleRadius,
  });

  MovementResult move(House house, String currentRoom, Vec3 eye, Vec3 delta) {
    final active = _activeStair;
    if (active != null) {
      return _moveOnStair(active, eye, delta);
    }
    final stair = _enterStair(house, currentRoom, eye, delta);
    if (stair != null) {
      _activeStair = stair;
      return _moveOnStair(stair, eye, delta);
    }
    var position = eye;
    var roomId = currentRoom;
    var blocked = false;
    final distance = math.sqrt(delta.x * delta.x + delta.z * delta.z);
    final steps = math.max(1, (distance / playerSweepStep).ceil());
    final step = delta * (1 / steps);
    for (var i = 0; i < steps; i++) {
      final x = _tryAxis(house, roomId, position, Vec3(step.x, 0, 0));
      blocked = blocked || x.blocked;
      position = x.eye;
      roomId = _crossPortal(house, roomId);
      final z = _tryAxis(house, roomId, position, Vec3(0, 0, step.z));
      blocked = blocked || z.blocked;
      position = z.eye;
      roomId = _crossPortal(house, roomId);
    }
    _setEye(position);
    return MovementResult(eye: position, roomId: roomId, blocked: blocked);
  }

  _ActiveStair? _enterStair(House house, String roomId, Vec3 eye, Vec3 delta) {
    for (final stair in house.stairs) {
      final ascending =
          roomId == 'hall' && _near(eye, stair.lowerEye) && delta.z < 0;
      final descending =
          roomId == 'landing' && _near(eye, stair.upperEye) && delta.z > 0;
      if (ascending || descending) {
        return _ActiveStair(stair, ascending ? 0 : 1);
      }
    }
    return null;
  }

  MovementResult _moveOnStair(_ActiveStair active, Vec3 eye, Vec3 delta) {
    final path = active.stair.upperEye - active.stair.lowerEye;
    final horizontalLength = math.sqrt(path.x * path.x + path.z * path.z);
    final along = horizontalLength < 1e-9
        ? 0.0
        : (delta.x * path.x + delta.z * path.z) / horizontalLength;
    active.progress = (active.progress + along / horizontalLength).clamp(
      0.0,
      1.0,
    );
    final position = Vec3.lerp(
      active.stair.lowerEye,
      active.stair.upperEye,
      active.progress,
    );
    final atLower = active.progress <= 0;
    final atUpper = active.progress >= 1;
    if (atLower || atUpper) {
      _activeStair = null;
    }
    _setEye(position);
    return MovementResult(
      eye: position,
      roomId: atUpper
          ? 'landing'
          : atLower
          ? 'hall'
          : active.progress < 0.5
          ? 'hall'
          : 'landing',
      blocked: false,
    );
  }

  bool _near(Vec3 a, Vec3 b) {
    final delta = a - b;
    return delta.x * delta.x + delta.y * delta.y + delta.z * delta.z <=
        0.8 * 0.8;
  }

  _AxisResult _tryAxis(House house, String roomId, Vec3 eye, Vec3 delta) {
    if (delta.x == 0 && delta.z == 0) return _AxisResult(eye, false);
    final candidate = eye + delta;
    _setEye(candidate);
    if (intersectsStaticGeometry(house, roomId)) {
      _setEye(eye);
      return _AxisResult(eye, true);
    }
    return _AxisResult(candidate, false);
  }

  String _crossPortal(House house, String roomId) =>
      portalCross(house, roomId) ?? roomId;

  void _setEye(Vec3 eye) {
    base = eye - Vec3(0, playerEyeHeight - radius, 0);
    tip = base + Vec3(0, playerCapsuleHeight - radius * 2, 0);
  }

  bool intersectsStaticGeometry(House house, String currentRoom) {
    final room = house.byId(currentRoom);
    if (room == null) {
      return true;
    }
    final size = house.effectiveSize(room);
    if (base.y - radius < room.origin.y ||
        tip.y + radius > room.origin.y + size.y) {
      return true;
    }
    if (_insideHorizontalBounds(room, size)) {
      return false;
    }
    return !_throughPassablePortal(house, room, size);
  }

  String? portalCross(House house, String currentRoom) {
    final room = house.byId(currentRoom);
    if (room == null) {
      return null;
    }
    final size = house.effectiveSize(room);
    for (final portal in house.portalsFor(room.id)) {
      final next = portal.other(room.id);
      if (next != null &&
          house.byId(next) != null &&
          !portal.stair &&
          portal.passable &&
          _withinPortal(room, portal, size) &&
          _crossedPortalPlane(room, portal, size)) {
        return next;
      }
    }
    return null;
  }

  bool _insideHorizontalBounds(Room room, Vec3 size) {
    return base.x >= room.origin.x + radius &&
        base.x <= room.origin.x + size.x - radius &&
        base.z >= room.origin.z + radius &&
        base.z <= room.origin.z + size.z - radius;
  }

  bool _throughPassablePortal(House house, Room room, Vec3 size) {
    for (final portal in house.portalsFor(room.id)) {
      if (portal.passable && _withinPortal(room, portal, size)) {
        return true;
      }
    }
    return false;
  }

  bool _withinPortal(Room room, Portal portal, Vec3 size) {
    final facing = portal.facingFor(room.id);
    final offset = portal.offsetFor(room.id);
    final along = facing == Facing.north || facing == Facing.south
        ? base.x - room.origin.x
        : base.z - room.origin.z;
    if (along < offset + radius || along > offset + portal.width - radius) {
      return false;
    }
    if (base.y - radius < room.origin.y ||
        tip.y + radius > room.origin.y + portal.height) {
      return false;
    }
    return switch (facing) {
      Facing.north => base.z <= room.origin.z + radius,
      Facing.south => base.z >= room.origin.z + size.z - radius,
      Facing.east => base.x >= room.origin.x + size.x - radius,
      Facing.west => base.x <= room.origin.x + radius,
    };
  }

  bool _crossedPortalPlane(Room room, Portal portal, Vec3 size) =>
      switch (portal.facingFor(room.id)) {
        Facing.north => base.z < room.origin.z,
        Facing.south => base.z > room.origin.z + size.z,
        Facing.east => base.x > room.origin.x + size.x,
        Facing.west => base.x < room.origin.x,
      };
}

class MovementResult {
  final Vec3 eye;
  final String roomId;
  final bool blocked;

  const MovementResult({
    required this.eye,
    required this.roomId,
    required this.blocked,
  });
}

class _AxisResult {
  final Vec3 eye;
  final bool blocked;

  const _AxisResult(this.eye, this.blocked);
}

class _ActiveStair {
  final StairTransition stair;
  double progress;

  _ActiveStair(this.stair, this.progress);
}
