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

  /// Canonical front threshold route plan (hall <-> porch threshold).
  factory AutomationRoutePlan.frontThreshold(House house) {
    return AutomationRoutePlan.fromTopology(
      id: 'front-threshold',
      house: house,
      rooms: const ['hall', 'living-room', 'hall'],
      portals: const ['hall-living', 'hall-living'],
      requiredOpenPortals: const {'hall-living'},
    );
  }

  /// Canonical hero reveal route plan (hall -> living-room -> kitchen hero prop sweep).
  factory AutomationRoutePlan.heroReveal(House house) {
    return AutomationRoutePlan.fromTopology(
      id: 'hero-reveal',
      house: house,
      rooms: const ['hall', 'living-room', 'kitchen'],
      portals: const ['hall-living', 'kitchen-living'],
      requiredOpenPortals: const {'hall-living', 'kitchen-living'},
    );
  }

  /// Canonical target sweep route plan (full-house key target inspection sweep).
  factory AutomationRoutePlan.targetSweep(House house) {
    return AutomationRoutePlan.fromTopology(
      id: 'target-sweep',
      house: house,
      rooms: const ['hall', 'living-room', 'kitchen', 'hall', 'landing', 'bedroom', 'landing'],
      portals: const ['hall-living', 'kitchen-living', 'hall-kitchen', 'hall-landing', 'landing-bedroom', 'landing-bedroom'],
    );
  }
}

enum AutomationRouteIssueCode {
  topology,
  unknownPortal,
  blockedPortal,
  unknownRoom,
  nonFiniteWaypoint,
  invalidRadius,
  blockedWaypoint,
  segmentClearance,
}

/// Structured route failure data for reports and world-space debug overlays.
/// `message` remains human-readable, while the IDs and sample coordinates are
/// stable enough for a replay to point at the same failure again.
final class AutomationRouteValidationIssue {
  final AutomationRouteIssueCode code;
  final String routeId;
  final String message;
  final String? roomId;
  final String? waypointId;
  final String? fromWaypointId;
  final String? toWaypointId;
  final int? sampleIndex;
  final int? sampleCount;
  final Vec3? position;
  final String? nearestObstruction;

  const AutomationRouteValidationIssue({
    required this.code,
    required this.routeId,
    required this.message,
    this.roomId,
    this.waypointId,
    this.fromWaypointId,
    this.toWaypointId,
    this.sampleIndex,
    this.sampleCount,
    this.position,
    this.nearestObstruction,
  });

  Map<String, Object?> toJson() => {
    'code': code.name,
    'route': routeId,
    'message': message,
    if (roomId != null) 'room': roomId,
    if (waypointId != null) 'waypoint': waypointId,
    if (fromWaypointId != null) 'fromWaypoint': fromWaypointId,
    if (toWaypointId != null) 'toWaypoint': toWaypointId,
    if (sampleIndex != null) 'sampleIndex': sampleIndex,
    if (sampleCount != null) 'sampleCount': sampleCount,
    if (position != null) 'position': [position!.x, position!.y, position!.z],
    if (nearestObstruction != null) 'nearestObstruction': nearestObstruction,
  };
}

final class AutomationRouteValidator {
  final House house;
  final double sampleStep;

  const AutomationRouteValidator({
    required this.house,
    this.sampleStep = playerSweepStep,
  });

  List<String> validate(AutomationRoutePlan plan) => [
    for (final issue in diagnose(plan)) issue.message,
  ];

  List<AutomationRouteValidationIssue> diagnose(AutomationRoutePlan plan) {
    final issues = <AutomationRouteValidationIssue>[];
    if (plan.rooms.length != plan.portals.length + 1) {
      issues.add(
        _issue(
          plan,
          code: AutomationRouteIssueCode.topology,
          message: 'route rooms must equal portals plus one',
        ),
      );
    }
    if (plan.waypoints.isEmpty) {
      issues.add(
        _issue(
          plan,
          code: AutomationRouteIssueCode.topology,
          message: 'route has no waypoints',
        ),
      );
    }
    final observedRooms = <String>[];
    for (final waypoint in plan.waypoints) {
      if (observedRooms.isEmpty || observedRooms.last != waypoint.room) {
        observedRooms.add(waypoint.room);
      }
    }
    if (observedRooms.length != plan.rooms.length ||
        observedRooms.indexed.any(
          (entry) => entry.$2 != plan.rooms[entry.$1],
        )) {
      issues.add(
        _issue(
          plan,
          code: AutomationRouteIssueCode.topology,
          message:
              'waypoint room sequence ${observedRooms.join(" → ")} does not match declared route ${plan.rooms.join(" → ")}',
          nearestObstruction: 'portal-sequence',
        ),
      );
    }
    for (var i = 0; i < plan.portals.length; i++) {
      final portal = house.portalById(plan.portals[i]);
      if (portal == null) {
        issues.add(
          _issue(
            plan,
            code: AutomationRouteIssueCode.unknownPortal,
            message: 'unknown portal ${plan.portals[i]}',
          ),
        );
        continue;
      }
      if (!portal.passable) {
        issues.add(
          _issue(
            plan,
            code: AutomationRouteIssueCode.blockedPortal,
            message: 'portal ${portal.id} is not passable in authored state',
            nearestObstruction: 'portal:${portal.id}',
          ),
        );
      }
      if (!portal.touches(plan.rooms[i]) ||
          !portal.touches(plan.rooms[i + 1])) {
        issues.add(
          _issue(
            plan,
            code: AutomationRouteIssueCode.topology,
            message:
                'portal ${portal.id} does not connect route rooms ${plan.rooms[i]} → ${plan.rooms[i + 1]}',
            nearestObstruction: 'portal:${portal.id}',
          ),
        );
      }
    }
    for (final waypoint in plan.waypoints) {
      final room = house.byId(waypoint.room);
      if (room == null) {
        issues.add(
          _issue(
            plan,
            code: AutomationRouteIssueCode.unknownRoom,
            message:
                'waypoint ${waypoint.id} has unknown room ${waypoint.room}',
            roomId: waypoint.room,
            waypointId: waypoint.id,
            position: waypoint.eye,
            nearestObstruction: 'unknown-room',
          ),
        );
        continue;
      }
      if (!waypoint.eye.x.isFinite ||
          !waypoint.eye.y.isFinite ||
          !waypoint.eye.z.isFinite) {
        issues.add(
          _issue(
            plan,
            code: AutomationRouteIssueCode.nonFiniteWaypoint,
            message: 'waypoint ${waypoint.id} is non-finite',
            roomId: room.id,
            waypointId: waypoint.id,
            position: waypoint.eye,
            nearestObstruction: 'non-finite-position',
          ),
        );
        continue;
      }
      if (waypoint.radius <= 0) {
        issues.add(
          _issue(
            plan,
            code: AutomationRouteIssueCode.invalidRadius,
            message: 'waypoint ${waypoint.id} radius is not positive',
            roomId: room.id,
            waypointId: waypoint.id,
            position: waypoint.eye,
            nearestObstruction: 'waypoint-tolerance',
          ),
        );
      }
      final capsule = _capsule(waypoint.eye);
      if (capsule.intersectsStaticGeometry(house, room.id)) {
        issues.add(
          _issue(
            plan,
            code: AutomationRouteIssueCode.blockedWaypoint,
            message: 'waypoint ${waypoint.id} is blocked in ${room.id}',
            roomId: room.id,
            waypointId: waypoint.id,
            position: waypoint.eye,
            nearestObstruction: _nearestObstruction(room, waypoint.eye),
          ),
        );
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
          issues.add(
            _issue(
              plan,
              code: AutomationRouteIssueCode.segmentClearance,
              message:
                  'segment ${from.id} → ${to.id} clips geometry at sample $sample/$samples',
              roomId: from.room,
              fromWaypointId: from.id,
              toWaypointId: to.id,
              sampleIndex: sample,
              sampleCount: samples,
              position: eye,
              nearestObstruction: _nearestObstruction(
                house.byId(from.room)!,
                eye,
              ),
            ),
          );
          break;
        }
      }
    }
    return issues;
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

  AutomationRouteValidationIssue _issue(
    AutomationRoutePlan plan, {
    required AutomationRouteIssueCode code,
    required String message,
    String? roomId,
    String? waypointId,
    String? fromWaypointId,
    String? toWaypointId,
    int? sampleIndex,
    int? sampleCount,
    Vec3? position,
    String? nearestObstruction,
  }) => AutomationRouteValidationIssue(
    code: code,
    routeId: plan.id,
    message: message,
    roomId: roomId,
    waypointId: waypointId,
    fromWaypointId: fromWaypointId,
    toWaypointId: toWaypointId,
    sampleIndex: sampleIndex,
    sampleCount: sampleCount,
    position: position,
    nearestObstruction: nearestObstruction,
  );

  String _nearestObstruction(Room room, Vec3 eye) {
    final size = house.effectiveSize(room);
    if (eye.x < room.origin.x || eye.x > room.origin.x + size.x) {
      return 'room-boundary-x';
    }
    if (eye.z < room.origin.z || eye.z > room.origin.z + size.z) {
      return 'room-boundary-z';
    }
    if (eye.y < room.origin.y || eye.y > room.origin.y + size.y) {
      return 'room-boundary-y';
    }
    return 'static-geometry';
  }
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
