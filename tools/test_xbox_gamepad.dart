import 'package:quarantine/engine/xbox_gamepad.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

StandardGamepadSnapshot frame({
  List<double> axes = const [],
  List<double> buttons = const [],
  bool connected = true,
  String mapping = 'standard',
}) => StandardGamepadSnapshot(
  connected: connected,
  id: 'Xbox Wireless Controller',
  mapping: mapping,
  axes: axes,
  buttons: buttons,
);

void main() {
  final idle = XboxGamepadLayout.map(frame(axes: [0.1, -0.1, 0.1, -0.1]));
  check(idle.move.length == 0, 'stick dead zone suppresses drift');
  check(idle.lookX == 0 && idle.lookY == 0, 'look dead zone suppresses drift');

  final active = XboxGamepadLayout.map(
    frame(
      axes: [0.59, -0.59, 0.5, -0.5],
      buttons: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    ),
  );
  check(active.move.x > 0 && active.move.z > 0, 'left stick moves forward-right');
  check(active.lookX > 0 && active.lookY < 0, 'right stick supplies look axes');
  check(
    active.held.containsAll({
      'GamepadA',
      'GamepadB',
      'GamepadX',
      'GamepadY',
      'GamepadLB',
      'GamepadRB',
      'GamepadLT',
      'GamepadRT',
      'GamepadView',
      'GamepadMenu',
      'GamepadLStick',
      'GamepadRStick',
      'GamepadDpadUp',
      'GamepadDpadRight',
    }),
    'Xbox face, shoulder, trigger, menu, stick, and D-pad tokens map',
  );
  check(
    ['GamepadA', 'GamepadRT'].every(
      (b) => XboxGamepadLayout.buttonBindings['interact']!.contains(b),
    ),
    'A and right trigger are intuitive interact alternatives',
  );
  check(
    XboxGamepadLayout.map(frame(mapping: '')).held.isEmpty,
    'non-standard controller layout is inert',
  );
  print('xbox gamepad: dead zone, standard mapping, and action tokens pass');
}
