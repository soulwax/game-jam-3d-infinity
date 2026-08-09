import 'dart:math' as math;

import '../engine/math3.dart';
import 'automation_route.dart';

final class PlayerObservation {
  final int tick;
  final Vec3 position;
  final double yaw;
  final double pitch;
  final Vec3 velocity;
  final bool grounded;
  final String room;
  final Set<String> nearbyPortalIds;
  final String? focusId;
  final bool modal;
  final bool inputEnabled;

  const PlayerObservation({
    required this.tick,
    required this.position,
    required this.yaw,
    required this.pitch,
    required this.velocity,
    required this.grounded,
    required this.room,
    this.nearbyPortalIds = const {},
    this.focusId,
    this.modal = false,
    this.inputEnabled = true,
  });

  bool get finite =>
      position.x.isFinite &&
      position.y.isFinite &&
      position.z.isFinite &&
      velocity.x.isFinite &&
      velocity.y.isFinite &&
      velocity.z.isFinite &&
      yaw.isFinite &&
      pitch.isFinite;
}

final class PlayerActionFrame {
  final int tick;
  final double forward;
  final double strafe;
  final double lookDeltaX;
  final double lookDeltaY;
  final Set<String> pressed;
  final Set<String> held;
  final Set<String> released;

  const PlayerActionFrame({
    required this.tick,
    this.forward = 0,
    this.strafe = 0,
    this.lookDeltaX = 0,
    this.lookDeltaY = 0,
    this.pressed = const {},
    this.held = const {},
    this.released = const {},
  });

  bool get neutral =>
      forward == 0 &&
      strafe == 0 &&
      lookDeltaX == 0 &&
      lookDeltaY == 0 &&
      pressed.isEmpty &&
      held.isEmpty &&
      released.isEmpty;

  factory PlayerActionFrame.neutral(int tick) => PlayerActionFrame(tick: tick);
}

enum AutomationMovementStatus { running, reached, failed }

final class AutomationMovementOutput {
  final AutomationMovementStatus status;
  final PlayerActionFrame action;
  final String? failure;
  final int waypointIndex;

  const AutomationMovementOutput({
    required this.status,
    required this.action,
    required this.waypointIndex,
    this.failure,
  });
}

/// Steering-only route controller. It emits action frames; the production
/// motion/collision system remains the only authority that changes the pose.
final class AutomationMovementController {
  final AutomationRoutePlan plan;
  final double waypointTolerance;
  final double headingTolerance;
  final double maxLookDelta;
  final int stuckWindow;
  final double progressEpsilon;

  int _waypointIndex = 0;
  AutomationMovementStatus _status = AutomationMovementStatus.running;
  String? _failure;
  final List<Vec3> _recentPositions = <Vec3>[];
  double? _previousHeadingError;
  int _headingReversals = 0;

  AutomationMovementController({
    required this.plan,
    this.waypointTolerance = 0.35,
    this.headingTolerance = 0.12,
    this.maxLookDelta = 0.18,
    this.stuckWindow = 30,
    this.progressEpsilon = 0.03,
  }) {
    if (waypointTolerance <= 0 || headingTolerance <= 0 || maxLookDelta <= 0) {
      throw ArgumentError('movement tolerances must be positive');
    }
    if (stuckWindow < 2 || progressEpsilon <= 0) {
      throw ArgumentError('movement watchdog bounds are invalid');
    }
  }

  int get waypointIndex => _waypointIndex;
  AutomationMovementStatus get status => _status;
  String? get failure => _failure;

  AutomationMovementOutput next(PlayerObservation observation) {
    if (_status != AutomationMovementStatus.running) {
      return AutomationMovementOutput(
        status: _status,
        action: PlayerActionFrame.neutral(observation.tick),
        waypointIndex: _waypointIndex,
        failure: _failure,
      );
    }
    if (!observation.finite) {
      return _fail(observation.tick, 'non-finite player observation');
    }
    if (observation.modal || !observation.inputEnabled) {
      return _fail(
        observation.tick,
        'player input is unavailable during route driving',
      );
    }
    if (_waypointIndex >= plan.waypoints.length) {
      _status = AutomationMovementStatus.reached;
      return _output(
        observation.tick,
        PlayerActionFrame.neutral(observation.tick),
      );
    }
    final waypoint = plan.waypoints[_waypointIndex];
    if (!_allowedRoom(observation.room, waypoint.room)) {
      return _fail(
        observation.tick,
        'unexpected room ${observation.room} at waypoint ${waypoint.id}',
      );
    }
    final distance = _horizontalDistance(observation.position, waypoint.eye);
    if (observation.room == waypoint.room &&
        distance <= waypoint.radius.clamp(waypointTolerance, double.infinity)) {
      _waypointIndex++;
      _recentPositions.clear();
      _previousHeadingError = null;
      _headingReversals = 0;
      if (_waypointIndex >= plan.waypoints.length) {
        _status = AutomationMovementStatus.reached;
        return _output(
          observation.tick,
          PlayerActionFrame.neutral(observation.tick),
        );
      }
      return next(observation);
    }
    _remember(observation.position);
    if (_stuck()) {
      return _fail(
        observation.tick,
        'no progress toward waypoint ${waypoint.id}',
      );
    }
    final dx = waypoint.eye.x - observation.position.x;
    final dz = waypoint.eye.z - observation.position.z;
    final distanceSafe = math.max(distance, 1e-9);
    final desiredYaw = math.atan2(dx, dz);
    final headingError = _angle(desiredYaw - observation.yaw);
    _trackHeading(headingError);
    if (_headingReversals >= 8) {
      return _fail(
        observation.tick,
        'oscillating heading near waypoint ${waypoint.id}',
      );
    }
    final sinYaw = math.sin(observation.yaw);
    final cosYaw = math.cos(observation.yaw);
    final forward = ((dx * sinYaw + dz * cosYaw) / distanceSafe).clamp(
      -1.0,
      1.0,
    );
    final strafe = ((dx * cosYaw - dz * sinYaw) / distanceSafe).clamp(
      -1.0,
      1.0,
    );
    final slow = (distance / 1.2).clamp(0.2, 1.0);
    return _output(
      observation.tick,
      PlayerActionFrame(
        tick: observation.tick,
        forward: forward * slow,
        strafe: strafe * slow,
        lookDeltaX: headingError.clamp(-maxLookDelta, maxLookDelta),
      ),
    );
  }

  AutomationMovementOutput _fail(int tick, String message) {
    _status = AutomationMovementStatus.failed;
    _failure = message;
    return _output(tick, PlayerActionFrame.neutral(tick));
  }

  AutomationMovementOutput _output(int tick, PlayerActionFrame action) =>
      AutomationMovementOutput(
        status: _status,
        action: action,
        waypointIndex: _waypointIndex,
        failure: _failure,
      );

  bool _allowedRoom(String observed, String target) {
    if (observed == target) return true;
    final rooms = plan.rooms;
    final index = rooms.indexOf(target);
    if (index <= 0 || index >= rooms.length) return false;
    return observed == rooms[index - 1] || observed == target;
  }

  void _remember(Vec3 position) {
    _recentPositions.add(position);
    if (_recentPositions.length > stuckWindow) _recentPositions.removeAt(0);
  }

  bool _stuck() {
    if (_recentPositions.length < stuckWindow) return false;
    final first = _recentPositions.first;
    final last = _recentPositions.last;
    return _horizontalDistance(first, last) < progressEpsilon;
  }

  void _trackHeading(double error) {
    final previous = _previousHeadingError;
    if (previous != null &&
        previous.abs() > headingTolerance &&
        error.abs() > headingTolerance &&
        previous.sign != error.sign) {
      _headingReversals++;
    }
    _previousHeadingError = error;
  }
}

double _angle(double value) {
  var result = value;
  while (result > math.pi) {
    result -= math.pi * 2;
  }
  while (result < -math.pi) {
    result += math.pi * 2;
  }
  return result;
}

double _horizontalDistance(Vec3 a, Vec3 b) {
  final x = a.x - b.x;
  final z = a.z - b.z;
  return math.sqrt(x * x + z * z);
}
