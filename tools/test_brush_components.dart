import 'package:quarantine/ui/brush_theme.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  BrushStateSheet.validate();
  const kinds = BrushComponentKind.values;
  check(kinds.length == 8, 'all PF-01 component families remain registered');
  const focus = BrushComponentContract(
    id: 'pause.settings',
    kind: BrushComponentKind.button,
    label: 'settings',
    state: BrushComponentState.focus,
  );
  focus.validate();
  check(focus.focusable, 'focus state stays keyboard reachable');

  const disabled = BrushComponentContract(
    id: 'pause.save',
    kind: BrushComponentKind.button,
    label: 'save now',
    state: BrushComponentState.disabled,
  );
  check(!disabled.focusable, 'disabled state is not keyboard reachable');

  const error = BrushComponentContract(
    id: 'settings.controls.bind.interact',
    kind: BrushComponentKind.keybind,
    label: 'interact',
    description: 'press a key to remap',
    state: BrushComponentState.error,
  );
  error.validate();
  check(error.accessibleName.contains('press a key'),
      'error/keybind status retains its accessible description');
  check(
    BrushStateSheet.statesFor(BrushComponentKind.keybind)
        .contains(BrushComponentState.remapping),
    'keybind state sheet includes remapping',
  );
  check(
    !BrushStateSheet.statesFor(BrushComponentKind.button)
        .contains(BrushComponentState.remapping),
    'ordinary action state sheet excludes remapping',
  );
  check(
    BrushStateSheet.statesFor(BrushComponentKind.button)
            .contains(BrushComponentState.selected) &&
        BrushStateSheet.statesFor(BrushComponentKind.button)
            .contains(BrushComponentState.destructive),
    'ordinary action state sheet includes selected and destructive states',
  );
  print('brush components: semantic families and state reachability pass');
}
