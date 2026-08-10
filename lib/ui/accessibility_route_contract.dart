enum AccessibilityTargetKind { navigation, control, status }

final class AccessibilityRouteTarget {
  final String id;
  final String accessibleName;
  final AccessibilityTargetKind kind;
  final bool essential;

  const AccessibilityRouteTarget({
    required this.id,
    required this.accessibleName,
    required this.kind,
    this.essential = false,
  });
}

/// Browser-independent acceptance contract for a keyboard/screen-reader route.
/// A browser snapshot can serialize these same IDs without creating a second
/// accessibility authority.
final class AccessibilityRouteContract {
  final List<AccessibilityRouteTarget> targets;

  AccessibilityRouteContract(Iterable<AccessibilityRouteTarget> targets)
    : targets = List.unmodifiable(targets) {
    validate();
  }

  Iterable<AccessibilityRouteTarget> get essentialTargets =>
      targets.where((target) => target.essential);

  void validate({
    Iterable<String> requiredIds = const [],
    double uiScale = 1,
    bool narrow = false,
    bool highContrast = false,
  }) {
    if (uiScale < 0.8 || uiScale > 2.0) {
      throw const FormatException('accessibility route scale is outside 0.8–2.0');
    }
    final ids = targets.map((target) => target.id).toList();
    if (ids.any((id) => id.trim().isEmpty) ||
        ids.toSet().length != ids.length) {
      throw const FormatException('accessibility route IDs must be unique');
    }
    if (targets.any((target) => target.accessibleName.trim().isEmpty)) {
      throw const FormatException('accessibility target needs a name');
    }
    if (essentialTargets.isEmpty) {
      throw const FormatException('accessibility route needs an essential cue');
    }
    if (!requiredIds.every(ids.contains)) {
      throw const FormatException('accessibility route is missing a target');
    }
    if (highContrast && !targets.any(
      (target) => target.kind == AccessibilityTargetKind.control,
    )) {
      throw const FormatException(
        'high-contrast route needs a focusable control target',
      );
    }
    // Narrow layouts may wrap; required IDs still have to be present. The
    // [narrow] flag is retained in the contract for snapshot/report parity.
  }
}
