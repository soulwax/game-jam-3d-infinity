import 'dart:io';

import 'package:quarantine/automation/automation_input.dart';
import 'package:quarantine/automation/automation_interaction.dart';
import 'package:quarantine/automation/automation_movement.dart';
import 'package:quarantine/automation/automation_route.dart';
import 'package:quarantine/engine/math3.dart';

void main() {
  final route = AutomationRoutePlan(
    id: 'hall-clock-approach',
    rooms: const ['hall'],
    portals: const [],
    waypoints: [
      AutomationRouteWaypoint(
        id: 'hall-clock-approach',
        room: 'hall',
        eye: Vec3(0, 1.65, 2),
        radius: 0.25,
      ),
    ],
  );
  final movement = AutomationMovementController(plan: route);
  final input = DeterministicInputAdapter();

  final approach = movement.next(_observation(tick: 1, z: 0));
  _expect(
    approach.status == AutomationMovementStatus.running &&
        approach.action.forward > 0,
    'movement emits an approach frame',
  );
  input.enqueue(approach.action);
  _expect(input.consume(1).forward > 0, 'approach frame is consumed once');

  final arrival = movement.next(_observation(tick: 2, z: 2));
  _expect(
    arrival.status == AutomationMovementStatus.reached &&
        arrival.action.neutral,
    'movement reaches the interaction waypoint and releases input',
  );
  input.enqueue(arrival.action);
  _expect(input.consume(2).neutral, 'arrival frame is neutral');

  final interaction = AutomationInteractionController(
    targetId: 'front-door-clock',
    expectedEvent: 'inventory-inspected:front-door-clock',
    expectedState: 'inspected',
    initialCostCount: 0,
    settleTicks: 1,
  );
  interaction.next(_focusObservation(3));
  final press = interaction.next(_focusObservation(4));
  _expect(
    press.action.pressed.contains('KeyE'),
    'focused interaction emits one KeyE edge',
  );
  input.enqueue(press.action);
  final consumedPress = input.consume(4);
  _expect(
    consumedPress.pressed.length == 1 && consumedPress.pressed.contains('KeyE'),
    'interaction edge is consumed exactly once',
  );

  final completed = interaction.next(
    _focusObservation(
      5,
      events: const {'inventory-inspected:front-door-clock'},
      state: 'inspected',
      cost: 1,
    ),
  );
  _expect(
    completed.phase == AutomationInteractionPhase.completed &&
        completed.action.neutral,
    'expected inspection completes without a second input edge',
  );
  input.enqueue(completed.action);
  _expect(input.consume(5).neutral, 'completion frame is neutral');
  input.assertDrained();
  stdout.writeln(
    'automation embodied: route arrival, focus settle, interaction edge, and one-cost completion pass',
  );
}

PlayerObservation _observation({required int tick, required double z}) =>
    PlayerObservation(
      tick: tick,
      position: Vec3(0, 1.65, z),
      yaw: 0,
      pitch: 0,
      velocity: Vec3(0, 0, 0),
      grounded: true,
      room: 'hall',
    );

AutomationInteractionObservation _focusObservation(
  int tick, {
  Set<String> events = const {},
  String? state,
  int cost = 0,
}) => AutomationInteractionObservation(
  tick: tick,
  focusId: 'front-door-clock',
  semanticEvents: events,
  stateValue: state,
  costCount: cost,
);

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
