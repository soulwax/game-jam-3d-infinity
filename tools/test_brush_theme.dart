import 'package:quarantine/ui/brush_theme.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  const base = BrushTheme.defaultTheme;
  check(base.spacing(2) == 2, 'default spacing is stable');
  check(base.motion(const Duration(milliseconds: 180)).inMilliseconds == 180,
      'normal motion is retained');

  final accessible = base.copyWith(
    scale: 2,
    highContrast: true,
    reducedMotion: true,
  );
  check(accessible.spacing(2) == 4, 'scale changes layout tokens');
  check(accessible.motion(const Duration(seconds: 1)) == Duration.zero,
      'reduced motion removes transition duration');
  check(accessible.highContrast, 'contrast state is retained');

  const normal = BrushComponentContract(
    id: 'pause.settings',
    kind: BrushComponentKind.button,
    label: 'settings',
    description: 'open settings categories',
  );
  normal.validate();
  check(normal.focusable, 'normal component is focusable');
  check(normal.accessibleName == 'settings, open settings categories',
      'semantic name includes its description');

  const disabled = BrushComponentContract(
    id: 'pause.save',
    kind: BrushComponentKind.button,
    label: 'save now',
    state: BrushComponentState.disabled,
  );
  disabled.validate();
  check(!disabled.focusable, 'disabled component is not focusable');

  const remapping = BrushComponentContract(
    id: 'settings.controls.bind.interact',
    kind: BrushComponentKind.keybind,
    label: 'interact',
    state: BrushComponentState.remapping,
  );
  remapping.validate();

  var rejected = false;
  try {
    const invalid = BrushComponentContract(
      id: 'bad',
      kind: BrushComponentKind.button,
      label: 'bad',
      state: BrushComponentState.remapping,
    );
    invalid.validate();
  } on FormatException {
    rejected = true;
  }
  check(rejected, 'remapping state is restricted to keybinds');
  print('brush theme: tokens, motion, semantics, and state guards pass');
}
