import 'package:quarantine/engine/interaction_press_policy.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final tap = InteractionPressPolicy();
  check(tap.keyDown(), 'tap mode emits immediately');
  check(!tap.keyDown(), 'duplicate keydown does not repeat');
  tap.keyUp();

  final hold = InteractionPressPolicy(holdToInteract: true);
  check(!hold.keyDown(), 'hold mode waits for threshold');
  check(!hold.step(0.2), 'short hold does not emit');
  check(hold.step(0.15), 'threshold emits one edge');
  check(!hold.step(1), 'held interaction does not repeat');
  hold.keyUp();
  check(!hold.step(1), 'released interaction is quiet');
  print('interaction press policy: tap/hold threshold and no-repeat pass');
}
