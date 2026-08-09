import 'package:quarantine/ui/controls_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final profile = ControlsSettingsProfile(
    horizontalSensitivity: 1.5,
    invertY: true,
  );
  final restored = ControlsSettingsProfile.fromJson(profile.toJson());
  check(restored.horizontalSensitivity == 1.5, 'sensitivity round trips');
  check(restored.invertY, 'inversion round trips');
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

  editor.begin('moveRight');
  final cancelled = editor.capture('Escape');
  check(cancelled.status == BindingCaptureStatus.cancelled, 'Escape cancels');
  print('controls settings: typed profile, reference bindings, and guard pass');
}
