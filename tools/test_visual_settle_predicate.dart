import 'package:quarantine/automation/visual_settle_predicate.dart';
import 'package:quarantine/engine/math3.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final predicate = VisualSettlePredicate(requiredStableTicks: 3);
  check(!predicate.isSettled, 'starts unsettled');

  final pos = Vec3(0, 1.65, 0);

  // Tick 1: initial observation
  predicate.evaluate(position: pos, yaw: 0.0, pitch: 0.0);
  check(predicate.stableTicks == 1, 'tick 1 stable');
  check(!predicate.isSettled, '3 ticks required');

  // Tick 2: identical pose
  predicate.evaluate(position: pos, yaw: 0.0, pitch: 0.0);
  check(predicate.stableTicks == 2, 'tick 2 stable');

  // Tick 3: identical pose -> settled!
  final settled = predicate.evaluate(position: pos, yaw: 0.0, pitch: 0.0);
  check(settled && predicate.isSettled, 'tick 3 settled!');

  // Movement resets stability
  predicate.evaluate(position: Vec3(0.5, 1.65, 0), yaw: 0.0, pitch: 0.0);
  check(!predicate.isSettled, 'movement resets settlement');
  check(predicate.stableTicks == 0, 'stableTicks reset to 0');

  predicate.reset();
  check(predicate.stableTicks == 0, 'reset clears ticks');

  print('visual settle predicate T-11: initial observation, stability ticks, movement reset, and settled status pass');
}
