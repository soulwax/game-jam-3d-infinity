import 'dart:io';

import 'package:quarantine/automation/automation_movement.dart';
import 'package:quarantine/automation/automation_route.dart';
import 'package:quarantine/engine/math3.dart';

void main() {
  final plan = AutomationRoutePlan(
    id: 'corridor',
    rooms: ['hall'],
    portals: [],
    waypoints: [
      AutomationRouteWaypoint(
        id: 'target',
        room: 'hall',
        eye: Vec3(0, 1.65, 2),
        radius: 0.3,
      ),
    ],
  );
  final controller = AutomationMovementController(plan: plan);
  final first = controller.next(_observation(tick: 1, z: 0));
  _expect(
    first.status == AutomationMovementStatus.running,
    'controller starts',
  );
  _expect(
    first.action.forward > 0 && first.action.lookDeltaX == 0,
    'forward frame',
  );
  final reached = controller.next(_observation(tick: 2, z: 2));
  _expect(
    reached.status == AutomationMovementStatus.reached,
    'waypoint arrival',
  );
  _expect(reached.action.neutral, 'arrival releases input');

  final stuckController = AutomationMovementController(
    plan: plan,
    stuckWindow: 3,
  );
  for (var tick = 1; tick <= 3; tick++) {
    final output = stuckController.next(_observation(tick: tick, z: 0));
    if (tick == 3) {
      _expect(
        output.status == AutomationMovementStatus.failed,
        'stuck watchdog',
      );
    }
  }
  final modal = AutomationMovementController(
    plan: plan,
  ).next(_observation(tick: 1, z: 0, modal: true));
  _expect(modal.status == AutomationMovementStatus.failed, 'modal route guard');
  stdout.writeln(
    'automation movement: action frames, arrival, release, stuck and modal guards pass',
  );
}

PlayerObservation _observation({
  required int tick,
  required double z,
  bool modal = false,
}) => PlayerObservation(
  tick: tick,
  position: Vec3(0, 1.65, z),
  yaw: 0,
  pitch: 0,
  velocity: Vec3(0, 0, 0),
  grounded: true,
  room: 'hall',
  modal: modal,
);

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
