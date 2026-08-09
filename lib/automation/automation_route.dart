import 'dart:math' as math;

import '../config.dart';
import '../engine/math3.dart';
import '../house/collision.dart';
import '../house/house.dart';
import '../house/room.dart';

final class AutomationRouteWaypoint {
  final String id;
  final String room;
  final Vec3 eye;
  final double radius;

  const AutomationRouteWaypoint({
    required this.id,
    required this.room,
    required this.eye,
    this.radius = 0.35,
  });
}

final class AutomationRoutePlan {
  final String id;
  final List<String> rooms;
  final List<String> portals;
  final List<AutomationRouteWaypoint> waypoints;

  const AutomationRoutePlan({
    required this.id,
    required this.rooms,
    required this.portals,
    required this.waypoints,
  });

  /// Creates clearance-aware portal approaches from canonical house geometry.
  /// Room sizes, portal offsets, and scale remain owned by [House].
  factory AutomationRoutePlan.fromTopology({
    required String id,
    required House house,
    required List<String> rooms,
    required List<String> portals,
    Set<String> requiredOpenPortals = const {},
  }) {
    if (rooms.length != portals.length + 1) {
      throw ArgumentError('route rooms must equal portals plus one');
    }
    final waypoints = <AutomationRouteWaypoint>[];
    for (var i = 0; i < rooms.length; i++) {
      final room = house.byId(rooms[i]);
      if (room == null) throw ArgumentError('unknown route room ${rooms[i]}');
      final incoming = i == 0 ? null : house.portalById(portals[i - 1]);
      final outgoing = i == portals.length
          ? null
          : house.portalById(portals[i]);
      if (incoming != null) {
        waypoints.add(_approach(house, room, incoming, 'in-$i'));
      }
      if (outgoing != null) {
        waypoints.add(_approach(house, room, outgoing, 'out-$i'));
      }
    }
    for (final portalId in portals) {
      final portal = house.portalById(portalId);
      if (portal == null) throw ArgumentError('unknown route portal $portalId');
      if (requiredOpenPortals.contains(portalId) && !portal.passable) {
        throw StateError('required route portal is not passable: $portalId');
      }
    }
    return AutomationRoutePlan(
      id: id,
      rooms: List.unmodifiable(rooms),
      portals: List.unmodifiable(portals),
      waypoints: List.unmodifiable(waypoints),
    );
  }
}

final class AutomationRouteValidator {
  final House house;
  final double sampleStep;

  const AutomationRouteValidator({
    required this.house,
    this.sampleStep = playerSweepStep,
  });

  List<String> validate(AutomationRoutePlan plan) {
    final errors = <String>[];
    if (plan.rooms.length != plan.portals.length + 1) {
      errors.add('route rooms must equal portals plus one');
    }
    if (plan.waypoints.isEmpty) errors.add('route has no waypoints');
    for (var i = 0; i < plan.portals.length; i++) {
      final portal = house.portalById(plan.portals[i]);
      if (portal == null) {
        errors.add('unknown portal ${plan.portals[i]}');
        continue;
      }
      if (!portal.touches(plan.rooms[i]) ||
          !portal.touches(plan.rooms[i + 1])) {
        errors.add(
          'portal ${portal.id} does not connect route rooms ${plan.rooms[i]} → ${plan.rooms[i + 1]}',
        );
      }
    }
    for (final waypoint in plan.waypoints) {
      final room = house.byId(waypoint.room);
      if (room == null) {
        errors.add('waypoint ${waypoint.id} has unknown room ${waypoint.room}');
        continue;
      }
      if (!waypoint.eye.x.isFinite ||
          !waypoint.eye.y.isFinite ||
          !waypoint.eye.z.isFinite) {
        errors.add('waypoint ${waypoint.id} is non-finite');
        continue;
      }
      if (waypoint.radius <= 0) {
        errors.add('waypoint ${waypoint.id} radius is not positive');
      }
      final capsule = _capsule(waypoint.eye);
      if (capsule.intersectsStaticGeometry(house, room.id)) {
        errors.add('waypoint ${waypoint.id} is blocked in ${room.id}');
      }
    }
    for (var i = 1; i < plan.waypoints.length; i++) {
      final from = plan.waypoints[i - 1];
      final to = plan.waypoints[i];
      if (from.room != to.room) continue;
      final distance = _horizontalDistance(from.eye, to.eye);
      final samples = math.max(1, (distance / sampleStep).ceil());
      for (var sample = 1; sample <= samples; sample++) {
        final t = sample / samples;
        final eye = Vec3.lerp(from.eye, to.eye, t);
        if (_capsule(eye).intersectsStaticGeometry(house, from.room)) {
          errors.add(
            'segment ${from.id} → ${to.id} clips geometry at sample $sample/$samples',
          );
          break;
        }
      }
    }
    return errors;
  }

  AutomationRoutePlan compile(AutomationRoutePlan plan) {
    final errors = validate(plan);
    if (errors.isNotEmpty) throw FormatException(errors.join('; '));
    return plan;
  }

  Capsule _capsule(Vec3 eye) => Capsule(
    base: eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0),
    tip:
        eye -
        Vec3(0, playerEyeHeight - playerCapsuleHeight + playerCapsuleRadius, 0),
    radius: playerCapsuleRadius,
  );
}

AutomationRouteWaypoint _approach(
  House house,
  Room room,
  Portal portal,
  String suffix,
) {
  final center = house.portalCenter(room.id, portal);
  final facing = portal.facingFor(room.id);
  const inset = playerCapsuleRadius + 0.25;
  final eye = switch (facing) {
    Facing.north => Vec3(
      center.x,
      room.origin.y + playerEyeHeight,
      center.z + inset,
    ),
    Facing.south => Vec3(
      center.x,
      room.origin.y + playerEyeHeight,
      center.z - inset,
    ),
    Facing.east => Vec3(
      center.x - inset,
      room.origin.y + playerEyeHeight,
      center.z,
    ),
    Facing.west => Vec3(
      center.x + inset,
      room.origin.y + playerEyeHeight,
      center.z,
    ),
  };
  return AutomationRouteWaypoint(
    id: '${room.id}-${portal.id}-$suffix',
    room: room.id,
    eye: eye,
  );
}

double _horizontalDistance(Vec3 a, Vec3 b) {
  final x = a.x - b.x;
  final z = a.z - b.z;
  return math.sqrt(x * x + z * z);
}
