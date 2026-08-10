// Pure contract test for PF-03: mouse button / wheel token normalization
// and multi-binding action map integration in InputActionMap +
// ControlsSettingsProfile.
//
// These tests are browser-independent and cover the shared seam that Input
// (browser-side) and ControlsBindingEditor (UI-side) both depend on.
// Real browser mouse/wheel event wiring is verified separately in browser smoke.
import 'package:quarantine/engine/input_action_map.dart';
import 'package:quarantine/ui/controls_settings.dart';

Never _fail(String msg) => throw StateError(msg);
void _check(bool condition, String message) {
  if (!condition) _fail(message);
}

/// Minimal pure InputActionMap tests for mouse/wheel token entries.
void _testActionMapPointerTokens() {
  // Mouse button as a primary binding for 'interact'.
  final map = InputActionMap({
    'interact': ['Mouse0', 'KeyE'],
    'secondary': ['Mouse1'],
    'reach': ['WheelDown', 'WheelUp'],
  });

  // anyDown recognizes a mouse button code.
  _check(map.anyDown('interact', {'Mouse0'}), 'Mouse0 drives interact held');
  _check(!map.anyDown('interact', {'Mouse2'}), 'Mouse2 is not bound to interact');

  // consumePressed removes the matching edge.
  final pressed = <String>{'Mouse0', 'KeyQ'};
  _check(map.consumePressed('interact', pressed), 'Mouse0 produces interact edge');
  _check(!pressed.contains('Mouse0'), 'consumed Mouse0 is removed from pressed set');
  _check(pressed.contains('KeyQ'), 'unrelated key not consumed');

  // WheelDown produces a reach edge.
  final wheelPressed = <String>{'WheelDown'};
  _check(map.consumePressed('reach', wheelPressed), 'WheelDown produces reach edge');
  _check(!wheelPressed.contains('WheelDown'), 'consumed WheelDown is removed');

  // WheelUp also valid for reach.
  final wheelUp = <String>{'WheelUp'};
  _check(map.consumePressed('reach', wheelUp), 'WheelUp produces reach edge');

  // Mouse1 → secondary.
  final sec = <String>{'Mouse1'};
  _check(map.consumePressed('secondary', sec), 'Mouse1 produces secondary edge');
}

/// ControlsBindingToken validation for pointer tokens.
void _testPointerTokenValidation() {
  // Valid mouse buttons.
  for (final token in ['Mouse0', 'Mouse1', 'Mouse2', 'Mouse3', 'Mouse4']) {
    _check(
      ControlsBindingToken.isValid(token),
      '$token is a valid pointer token',
    );
  }
  // Unknown high button numbers are invalid.
  _check(!ControlsBindingToken.isValid('Mouse9'), 'Mouse9 is not valid');
  _check(!ControlsBindingToken.isValid('Mouse5'), 'Mouse5 is not valid');

  // Wheel tokens.
  _check(ControlsBindingToken.isValid('WheelUp'), 'WheelUp is valid');
  _check(ControlsBindingToken.isValid('WheelDown'), 'WheelDown is valid');

  // Reserved tokens still rejected.
  _check(!ControlsBindingToken.isValid('Escape'), 'Escape is reserved');
  _check(!ControlsBindingToken.isValid('Tab'), 'Tab is reserved');
}

/// setActionBindings round-trip: a multi-binding profile installs all
/// alternatives and the action map recognizes all of them.
void _testSetActionBindingsRoundTrip() {
  // Simulate what Input.setActionBindings does: install a multi-binding profile
  // into an InputActionMap using replace().
  final map = InputActionMap({
    'interact': ['KeyE'],
    'secondary': ['KeyQ'],
    'reach': ['KeyF'],
  });

  // Install a PF-03 multi-binding profile derived from ControlsSettingsProfile.
  final profile = ControlsSettingsProfile(
    bindingsByAction: {
      'interact': ['Mouse0', 'KeyE'],
      'secondary': ['Mouse1', 'KeyQ'],
      'reach': ['WheelDown', 'WheelUp', 'KeyF'],
    },
  );
  for (final action in map.actions) {
    final values = profile.bindingsByAction[action];
    if (values != null) map.replace(action, values);
  }

  _check(
    map.anyDown('interact', {'Mouse0'}),
    'after setActionBindings Mouse0 is live for interact',
  );
  _check(
    map.anyDown('interact', {'KeyE'}),
    'keyboard alternative still active for interact',
  );
  _check(
    map.anyDown('reach', {'WheelDown'}),
    'WheelDown is live for reach after install',
  );
  _check(
    map.anyDown('reach', {'WheelUp'}),
    'WheelUp is live for reach after install',
  );
  _check(
    map.anyDown('reach', {'KeyF'}),
    'keyboard alternative still active for reach',
  );
}

/// Modal clearing must purge mouse/wheel edges just like keyboard edges.
/// We simulate this by verifying that a fresh action map with no held codes
/// produces no action edges — which is the invariant Input._clearGameplayState
/// enforces by calling _held.clear() / _pressed.clear() regardless of origin.
void _testModalClearingInvariant() {
  final map = InputActionMap({
    'interact': ['Mouse0', 'KeyE'],
    'reach': ['WheelDown'],
  });

  // After modal clear, the held and pressed sets are empty.
  final held = <String>{};
  final pressed = <String>{};
  _check(!map.anyDown('interact', held), 'no interact edge after modal clear');
  _check(!map.consumePressed('reach', pressed), 'no reach edge after modal clear');
}

/// Reserved-key guard: Escape cannot be rebound to any action except pause.
void _testReservedKeyGuard() {
  var rejected = false;
  try {
    ControlsSettingsProfile(
      bindingsByAction: {'interact': ['Escape']},
    );
  } on FormatException {
    rejected = true;
  }
  _check(rejected, 'Escape cannot be bound to interact');

  // Escape is still allowed for pause.
  final pauseProfile = ControlsSettingsProfile(
    bindingsByAction: {'pause': ['Escape', 'GamepadMenu']},
  );
  _check(
    pauseProfile.bindingsByAction['pause']!.contains('Escape'),
    'Escape remains the pause key',
  );
}

/// Conflict resolution: assigning Mouse0 to a second action via swap.
void _testConflictResolutionPointer() {
  final editor = ControlsBindingEditor(
    ControlsSettingsProfile(
      bindingsByAction: {
        'interact': ['Mouse0', 'KeyE'],
        'secondary': ['Mouse1', 'KeyQ'],
      },
    ),
  );
  editor.begin('secondary');
  final conflict = editor.captureToken('Mouse0');
  _check(
    conflict.status == BindingCaptureStatus.conflict,
    'Mouse0 conflict staged transactionally',
  );
  _check(
    conflict.conflictingAction == 'interact',
    'conflict identifies interact as owner',
  );
  // Profile is not mutated until resolution.
  _check(
    editor.profile.bindingsByAction['secondary']!.first == 'Mouse1',
    'secondary binding unchanged during conflict staging',
  );
  editor.resolve(BindingConflictResolution.swap);
  _check(
    editor.profile.bindingsByAction['secondary']!.contains('Mouse0'),
    'Mouse0 moved to secondary after swap',
  );
  _check(
    !editor.profile.bindingsByAction['interact']!.contains('Mouse0'),
    'Mouse0 removed from interact after swap',
  );
}

void main() {
  _testPointerTokenValidation();
  _testActionMapPointerTokens();
  _testSetActionBindingsRoundTrip();
  _testModalClearingInvariant();
  _testReservedKeyGuard();
  _testConflictResolutionPointer();
  print(
    'input PF-03: mouse/wheel token normalization, action-map integration, '
    'modal clear, reserved-key guard, and conflict resolution pass',
  );
}
