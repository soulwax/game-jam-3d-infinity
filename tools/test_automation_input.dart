import 'dart:io';

import 'package:quarantine/automation/automation_input.dart';
import 'package:quarantine/automation/automation_movement.dart';

void main() {
  final physical = PhysicalInputNormalizer();
  physical.pointerLockChanged(true);
  physical.keyDown('KeyW');
  physical.keyDown('KeyD');
  physical.keyDown('KeyE');
  physical.mouseMove(3, -2);
  final physicalFrame = physical.consume(7);

  final deterministic = DeterministicInputAdapter();
  deterministic.enqueue(
    PlayerActionFrame(
      tick: 7,
      forward: 0.7071067811865475,
      strafe: 0.7071067811865475,
      lookDeltaX: 3,
      lookDeltaY: -2,
      pressed: const {'KeyE'},
      held: const {'KeyW', 'KeyD', 'KeyE'},
    ),
  );
  final semanticFrame = deterministic.consume(7);
  _expect(
    (physicalFrame.forward - semanticFrame.forward).abs() < 1e-9 &&
        (physicalFrame.strafe - semanticFrame.strafe).abs() < 1e-9 &&
        physicalFrame.lookDeltaX == semanticFrame.lookDeltaX &&
        physicalFrame.pressed.length == semanticFrame.pressed.length,
    'physical and deterministic adapters agree',
  );
  deterministic.assertDrained();
  final heldFrame = physical.consume(8);
  _expect(
    heldFrame.forward > 0 &&
        heldFrame.pressed.isEmpty &&
        heldFrame.lookDeltaX == 0,
    'edges and mouse deltas are single tick',
  );

  physical.keyDown('KeyW');
  physical.suspend();
  physical.resume();
  _expect(physical.consume(9).neutral, 'suspend clears held input');
  _expectThrows(
    () => deterministic.enqueue(const PlayerActionFrame(tick: 10, forward: 2)),
    'out-of-range deterministic input rejected',
  );
  stdout.writeln(
    'automation input: adapter parity, one-shot edges, suspension, bounds pass',
  );
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void _expectThrows(void Function() action, String message) {
  try {
    action();
  } catch (_) {
    return;
  }
  throw StateError(message);
}
