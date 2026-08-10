import 'package:quarantine/ui/accessibility_route_contract.dart';

void main() {
  final contract = AccessibilityRouteContract([
    const AccessibilityRouteTarget(
      id: 'pause.resume',
      accessibleName: 'Resume game',
      kind: AccessibilityTargetKind.navigation,
      essential: true,
    ),
    const AccessibilityRouteTarget(
      id: 'settings.accessibility.screen-reader-verbosity',
      accessibleName: 'Screen-reader verbosity',
      kind: AccessibilityTargetKind.control,
    ),
  ]);
  contract.validate(
    requiredIds: const [
      'pause.resume',
      'settings.accessibility.screen-reader-verbosity',
    ],
    uiScale: 2,
    narrow: true,
    highContrast: true,
  );
  check(contract.essentialTargets.length == 1,
      'essential route targets remain discoverable');

  expectThrows(() => AccessibilityRouteContract([
    const AccessibilityRouteTarget(
      id: 'duplicate',
      accessibleName: 'first',
      kind: AccessibilityTargetKind.control,
      essential: true,
    ),
    const AccessibilityRouteTarget(
      id: 'duplicate',
      accessibleName: 'second',
      kind: AccessibilityTargetKind.status,
    ),
  ]));
  expectThrows(() => contract.validate(uiScale: 2.1));
  expectThrows(() => AccessibilityRouteContract([
    const AccessibilityRouteTarget(
      id: 'status',
      accessibleName: 'Status',
      kind: AccessibilityTargetKind.status,
    ),
  ]));
  print('accessibility route contract: IDs, scale, focus, and cue guards pass');
}

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void expectThrows(void Function() action) {
  try {
    action();
  } on FormatException {
    return;
  }
  throw StateError('expected accessibility route validation failure');
}
