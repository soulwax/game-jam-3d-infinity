import 'math3.dart';

/// Browser-independent snapshot of the standard Gamepad API layout.
final class StandardGamepadSnapshot {
  final bool connected;
  final String id;
  final String mapping;
  final List<double> axes;
  final List<double> buttons;

  const StandardGamepadSnapshot({
    required this.connected,
    required this.id,
    required this.mapping,
    required this.axes,
    required this.buttons,
  });
}

/// Normalized Xbox-style controller output. Button token names are stable
/// binding identifiers, never localized display strings.
final class XboxGamepadFrame {
  final Vec3 move;
  final double lookX;
  final double lookY;
  final Set<String> held;

  const XboxGamepadFrame({
    required this.move,
    required this.lookX,
    required this.lookY,
    required this.held,
  });

  static final idle = XboxGamepadFrame(
    move: Vec3(0, 0, 0),
    lookX: 0,
    lookY: 0,
    held: <String>{},
  );
}

/// Maps the browser's `standard` layout to familiar Xbox controls.
///
/// Left stick/D-pad move, right stick looks, A/RT interact, B is secondary or
/// menu-back, X rotates, Y/View open Journal, LB runs, LT crouches, RB reaches,
/// D-pad down rests, and Menu pauses. The mapper is pure so browser polling is
/// a thin adapter and every control decision stays testable off-browser.
final class XboxGamepadLayout {
  XboxGamepadLayout._();

  static const deadZone = 0.18;
  static const pressThreshold = 0.5;

  static const buttonBindings = <String, List<String>>{
    'interact': ['GamepadA', 'GamepadRT'],
    'secondary': ['GamepadB'],
    'run': ['GamepadLB', 'GamepadLStick'],
    'crouch': ['GamepadLT', 'GamepadRStick'],
    'rotate': ['GamepadX'],
    'reach': ['GamepadRB'],
    'journal': ['GamepadY', 'GamepadView'],
    'sleep': ['GamepadDpadDown'],
    'pause': ['GamepadMenu'],
    'moveForward': ['GamepadDpadUp'],
    'moveBack': ['GamepadDpadDown'],
    'moveLeft': ['GamepadDpadLeft'],
    'moveRight': ['GamepadDpadRight'],
  };

  static XboxGamepadFrame map(StandardGamepadSnapshot snapshot) {
    if (!snapshot.connected || snapshot.mapping != 'standard') {
      return XboxGamepadFrame.idle;
    }
    final leftX = _axis(snapshot.axes, 0);
    final leftY = _axis(snapshot.axes, 1);
    final rightX = _axis(snapshot.axes, 2);
    final rightY = _axis(snapshot.axes, 3);
    final held = <String>{
      if (_pressed(snapshot.buttons, 0)) 'GamepadA',
      if (_pressed(snapshot.buttons, 1)) 'GamepadB',
      if (_pressed(snapshot.buttons, 2)) 'GamepadX',
      if (_pressed(snapshot.buttons, 3)) 'GamepadY',
      if (_pressed(snapshot.buttons, 4)) 'GamepadLB',
      if (_pressed(snapshot.buttons, 5)) 'GamepadRB',
      if (_pressed(snapshot.buttons, 6)) 'GamepadLT',
      if (_pressed(snapshot.buttons, 7)) 'GamepadRT',
      if (_pressed(snapshot.buttons, 8)) 'GamepadView',
      if (_pressed(snapshot.buttons, 9)) 'GamepadMenu',
      if (_pressed(snapshot.buttons, 10)) 'GamepadLStick',
      if (_pressed(snapshot.buttons, 11)) 'GamepadRStick',
      if (_pressed(snapshot.buttons, 12)) 'GamepadDpadUp',
      if (_pressed(snapshot.buttons, 13)) 'GamepadDpadDown',
      if (_pressed(snapshot.buttons, 14)) 'GamepadDpadLeft',
      if (_pressed(snapshot.buttons, 15)) 'GamepadDpadRight',
    };
    final dpadX = (held.contains('GamepadDpadRight') ? 1.0 : 0.0) -
        (held.contains('GamepadDpadLeft') ? 1.0 : 0.0);
    final dpadZ = (held.contains('GamepadDpadUp') ? 1.0 : 0.0) -
        (held.contains('GamepadDpadDown') ? 1.0 : 0.0);
    final move = Vec3(leftX + dpadX, 0, -leftY + dpadZ);
    return XboxGamepadFrame(
      move: move.length > 1 ? move.normalized : move,
      lookX: rightX,
      lookY: rightY,
      held: Set.unmodifiable(held),
    );
  }

  static double _axis(List<double> axes, int index) =>
      _deadZone(index < axes.length ? axes[index] : 0);

  static bool _pressed(List<double> buttons, int index) =>
      index < buttons.length && buttons[index] >= pressThreshold;

  static double _deadZone(double raw) {
    if (!raw.isFinite || raw.abs() <= deadZone) return 0;
    final magnitude = ((raw.abs() - deadZone) / (1 - deadZone)).clamp(0.0, 1.0);
    return raw.isNegative ? -magnitude : magnitude;
  }
}
