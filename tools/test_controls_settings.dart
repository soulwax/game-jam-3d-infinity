import 'package:quarantine/ui/controls_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  check(ControlsBindingToken.isValid('Mouse0'), 'mouse button token is valid');
  check(ControlsBindingToken.isValid('WheelDown'), 'wheel token is valid');
  check(
    ControlsBindingToken.label('Mouse2') == 'Mouse button 2',
    'mouse token has an accessible label',
  );
  check(!ControlsBindingToken.isValid('Mouse9'), 'unknown mouse token rejected');
  final profile = ControlsSettingsProfile(
    horizontalSensitivity: 1.5,
    invertY: true,
  );
  final restored = ControlsSettingsProfile.fromJson(profile.toJson());
  check(restored.horizontalSensitivity == 1.5, 'sensitivity round trips');
  check(restored.invertY, 'inversion round trips');
  check(restored.bindingsByAction.containsKey('run'),
      'profile includes the complete action vocabulary');
  check(controlsActionLabels.containsKey('rotate') &&
      controlsActionLabels.containsKey('reach'),
      'tactile action labels remain discoverable');
  final multi = ControlsSettingsProfile(
    bindingsByAction: {
      'interact': ['KeyE', 'Mouse0'],
    },
  );
  final multiRestored = ControlsSettingsProfile.fromJson(multi.toJson());
  check(
    multiRestored.bindingsByAction['interact']!.length == 2,
    'multiple action bindings round trip',
  );
  final migrated = ControlsSettingsProfile.fromJson({
    'version': 1,
    'horizontalSensitivity': 1.0,
    'verticalSensitivity': 1.0,
    'invertX': false,
    'invertY': false,
    'holdToInteract': false,
    'bindings': {'interact': 'KeyE'},
  });
  check(migrated.bindings['interact'] == 'KeyE',
      'v1 single-binding profile migrates to primary list');
  var rejected = false;
  try {
    ControlsSettingsProfile(bindings: {'moveForward': 'Escape'});
  } on FormatException {
    rejected = true;
  }
  check(rejected, 'reserved pause key is rejected');

  final editor = ControlsBindingEditor(ControlsSettingsProfile());
  check(
    editor.begin('moveForward').status == BindingCaptureStatus.capturing,
    'capture requires explicit begin',
  );
  final conflict = editor.capture('KeyA');
  check(conflict.status == BindingCaptureStatus.conflict, 'conflict is staged');
  check(
    editor.profile.bindings['moveForward'] == 'KeyW',
    'conflict does not mutate before resolution',
  );
  editor.resolve(BindingConflictResolution.swap);
  check(editor.profile.bindings['moveForward'] == 'KeyA', 'swap applies');
  check(
    editor.profile.bindings['moveLeft'] == 'KeyW',
    'swap preserves old key',
  );
  final added = ControlsBindingEditor(ControlsSettingsProfile());
  added.begin('interact');
  check(added.capture('Mouse0').status == BindingCaptureStatus.applied,
      'non-conflicting second binding applies');
  check(added.profile.bindingsByAction['interact']!.first == 'Mouse0',
      'new binding becomes the primary action edge');
  check(added.profile.bindingsByAction['interact']!.contains('KeyE'),
      'existing binding remains available');

  final pointer = ControlsBindingEditor(
    ControlsSettingsProfile(
      bindingsByAction: {
        'interact': ['Mouse0', 'KeyE'],
      },
    ),
  );
  pointer.begin('secondary');
  check(
    pointer.captureToken('WheelUp').status == BindingCaptureStatus.applied,
    'wheel capture applies through the same transaction seam',
  );
  check(
    pointer.profile.bindingsByAction['secondary']!.first == 'WheelUp',
    'pointer capture becomes the primary action edge',
  );

  pointer.begin('run');
  check(
    pointer.captureToken('Mouse0').status == BindingCaptureStatus.conflict,
    'pointer conflicts are staged like keyboard conflicts',
  );
  check(
    pointer.resolve(BindingConflictResolution.replace).status ==
        BindingCaptureStatus.applied,
    'pointer conflict can be resolved transactionally',
  );

  editor.begin('moveRight');
  final cancelled = editor.capture('Escape');
  check(cancelled.status == BindingCaptureStatus.cancelled, 'Escape cancels');
  print('controls settings: typed profile, reference bindings, and guard pass');
}
