/// Browser-independent contract for Quarantine's original brush-cut UI.
///
/// The visual layer may render these values with CSS, but semantic order,
/// hit-boxes, and accessibility state remain independent of the treatment.
enum BrushComponentKind {
  heading,
  button,
  tab,
  slider,
  toggle,
  keybind,
  dialog,
  toast,
  page,
}

enum BrushComponentState {
  normal,
  hover,
  focus,
  selected,
  pressed,
  disabled,
  error,
  destructive,
  remapping,
}

final class BrushStateSheet {
  static const textScales = <double>[1, 1.5, 2];

  static List<BrushComponentState> statesFor(BrushComponentKind kind) => [
    BrushComponentState.normal,
    BrushComponentState.hover,
    BrushComponentState.focus,
    BrushComponentState.selected,
    BrushComponentState.pressed,
    BrushComponentState.disabled,
    BrushComponentState.error,
    BrushComponentState.destructive,
    if (kind == BrushComponentKind.keybind)
      BrushComponentState.remapping,
  ];

  static void validate() {
    if (textScales.length != 3 || textScales.last != 2) {
      throw const FormatException('brush state sheet must include 100/150/200%');
    }
    for (final kind in BrushComponentKind.values) {
      final states = statesFor(kind);
      if (!states.contains(BrushComponentState.normal) ||
          !states.contains(BrushComponentState.focus) ||
          !states.contains(BrushComponentState.selected) ||
          !states.contains(BrushComponentState.disabled) ||
          !states.contains(BrushComponentState.destructive)) {
        throw FormatException('${kind.name} is missing a required state');
      }
      if (kind != BrushComponentKind.keybind &&
          states.contains(BrushComponentState.remapping)) {
        throw FormatException('${kind.name} cannot expose remapping state');
      }
    }
  }
}

final class BrushPalette {
  final String ink;
  final String bone;
  final String ash;
  final String amber;
  final String rust;
  final String danger;
  final String focus;

  const BrushPalette({
    this.ink = '#07070a',
    this.bone = '#e7dfcf',
    this.ash = '#a9a194',
    this.amber = '#c6ac71',
    this.rust = '#7c4a38',
    this.danger = '#bd6d61',
    this.focus = '#f2c879',
  });
}

final class BrushTheme {
  final int version;
  final BrushPalette palette;
  final double scale;
  final bool highContrast;
  final bool reducedMotion;

  const BrushTheme({
    this.version = 1,
    this.palette = const BrushPalette(),
    this.scale = 1,
    this.highContrast = false,
    this.reducedMotion = false,
  });

  static const defaultTheme = BrushTheme();

  double spacing(double units) {
    if (!units.isFinite || units < 0) {
      throw const FormatException('brush spacing must be finite and non-negative');
    }
    return units * scale;
  }

  Duration motion(Duration normal) => reducedMotion
      ? Duration.zero
      : normal;

  BrushTheme copyWith({
    BrushPalette? palette,
    double? scale,
    bool? highContrast,
    bool? reducedMotion,
  }) {
    final next = BrushTheme(
      version: version,
      palette: palette ?? this.palette,
      scale: scale ?? this.scale,
      highContrast: highContrast ?? this.highContrast,
      reducedMotion: reducedMotion ?? this.reducedMotion,
    );
    next.validate();
    return next;
  }

  void validate() {
    if (!scale.isFinite || scale < 0.8 || scale > 2.0) {
      throw const FormatException('brush scale must be between 0.8 and 2.0');
    }
  }
}

final class BrushComponentContract {
  final String id;
  final BrushComponentKind kind;
  final String label;
  final String? description;
  final BrushComponentState state;

  const BrushComponentContract({
    required this.id,
    required this.kind,
    required this.label,
    this.description,
    this.state = BrushComponentState.normal,
  });

  bool get focusable => state != BrushComponentState.disabled;

  String get accessibleName => description == null || description!.isEmpty
      ? label
      : '$label, $description';

  void validate() {
    if (id.trim().isEmpty || label.trim().isEmpty) {
      throw const FormatException('brush component needs an id and label');
    }
    if (state == BrushComponentState.remapping &&
        kind != BrushComponentKind.keybind) {
      throw const FormatException('only keybinds can be remapping');
    }
  }
}
