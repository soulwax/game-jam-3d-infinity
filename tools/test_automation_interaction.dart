import 'dart:io';

import 'package:quarantine/automation/automation_interaction.dart';

void main() {
  final controller = AutomationInteractionController(
    targetId: 'mantle-living',
    expectedEvent: 'mantle-lit',
    expectedState: 'lit',
    initialCostCount: 0,
    settleTicks: 2,
  );
  _expect(
    controller.next(_observation(1)).phase ==
        AutomationInteractionPhase.settling,
    'focus enters settling',
  );
  _expect(
    controller.next(_observation(2)).action.neutral,
    'settling has no action edge',
  );
  final press = controller.next(_observation(3));
  _expect(press.action.pressed.contains('KeyE'), 'press edge');
  final result = controller.next(
    _observation(4, events: const {'mantle-lit'}, state: 'lit', cost: 1),
  );
  _expect(
    result.phase == AutomationInteractionPhase.completed,
    'single effect completes',
  );
  _expect(result.action.neutral, 'completion releases input');

  final hold = AutomationInteractionController(
    targetId: 'door',
    expectedEvent: 'door-open',
    expectedState: 'open',
    initialCostCount: 2,
    hold: true,
    settleTicks: 1,
  );
  hold.next(_observation(1, target: 'door'));
  final holdPress = hold.next(_observation(2, target: 'door'));
  _expect(holdPress.action.held.contains('KeyE'), 'hold action');
  hold.next(_observation(3, target: 'door'));
  final release = hold.next(_observation(4, target: 'door'));
  _expect(release.action.released.contains('KeyE'), 'hold release');

  final badCost = AutomationInteractionController(
    targetId: 'clock',
    expectedEvent: 'clock-used',
    expectedState: 'used',
    initialCostCount: 0,
    settleTicks: 1,
  );
  badCost.next(_observation(1, target: 'clock'));
  badCost.next(_observation(2, target: 'clock'));
  final failed = badCost.next(
    _observation(
      3,
      target: 'clock',
      events: const {'clock-used'},
      state: 'used',
      cost: 0,
    ),
  );
  _expect(
    failed.phase == AutomationInteractionPhase.failed,
    'duplicate/missing cost fails',
  );
  stdout.writeln(
    'automation interaction: focus settle, press/hold, effect and cost guards pass',
  );
}

AutomationInteractionObservation _observation(
  int tick, {
  String target = 'mantle-living',
  Set<String> events = const {},
  String? state,
  int cost = 0,
}) => AutomationInteractionObservation(
  tick: tick,
  focusId: target,
  semanticEvents: events,
  stateValue: state,
  costCount: cost,
);

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
