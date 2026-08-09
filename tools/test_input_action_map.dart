import 'package:quarantine/engine/input_action_map.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final map = InputActionMap({
    'moveForward': ['KeyW', 'ArrowUp'],
    'interact': ['KeyE', 'Mouse0'],
  });
  check(map.codesFor('moveForward').length == 2,
      'action map retains alternatives');
  check(map.anyDown('moveForward', {'ArrowUp'}),
      'any alternative drives held action');
  final pressed = {'KeyE', 'KeyQ'};
  check(map.consumePressed('interact', pressed),
      'any alternative produces one pressed edge');
  check(!pressed.contains('KeyE'), 'consumed edge is removed');
  map.replace('interact', ['Mouse0', 'Mouse0', '']);
  check(map.codesFor('interact').length == 1,
      'replacement deduplicates empty alternatives');
  print('input action map: alternatives, held lookup, and edge consumption pass');
}
