import 'package:quarantine/ui/pause_ledger.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final ledger = PauseLedger();
  check(!ledger.state.isPaused, 'fresh ledger must be playing');

  final opened = ledger.openRoot(restoreFocusId: 'gameplay.interact');
  check(opened.kind == PauseTransitionKind.opened, 'root opens');
  check(ledger.state.atRoot, 'root is marked as root');
  check(opened.focusTargetId == 'pause.resume', 'root focuses Resume');
  check(
    ledger.state.restoreFocusId == 'gameplay.interact',
    'focus is retained',
  );

  final settings = ledger.push(
    PausePage.settings,
    triggerFocusId: 'pause.settings',
  );
  check(settings.kind == PauseTransitionKind.pushed, 'settings pushes');
  check(
    settings.focusTargetId == 'settings.visual',
    'settings has first focus',
  );
  ledger.push(
    PausePage.accessibility,
    reason: PauseReason.settings,
    triggerFocusId: 'settings.accessibility',
  );
  final back = ledger.back();
  check(back.kind == PauseTransitionKind.backed, 'nested back pops one page');
  check(
    back.focusTargetId == 'settings.accessibility',
    'back restores trigger',
  );
  check(ledger.state.current?.page == PausePage.settings, 'parent remains');

  final toRoot = ledger.back();
  check(
    toRoot.kind == PauseTransitionKind.backed,
    'settings back reaches root',
  );
  final resumed = ledger.back();
  check(resumed.kind == PauseTransitionKind.resumed, 'root back resumes');
  check(!ledger.state.isPaused, 'resume clears the pause stack');
  check(
    resumed.focusTargetId == 'gameplay.interact',
    'resume restores gameplay focus',
  );

  ledger.openRoot();
  ledger.openModal(PauseReason.visitor);
  final blocked = ledger.resume();
  check(blocked.kind == PauseTransitionKind.unchanged, 'modal prevents resume');
  check(ledger.state.isPaused, 'modal remains active');
  final dismissed = ledger.dismissModal(PauseReason.visitor);
  check(dismissed.kind == PauseTransitionKind.dismissed, 'modal dismisses');
  check(ledger.state.atRoot, 'underlying root is preserved');
  check(
    ledger.back().kind == PauseTransitionKind.resumed,
    'root resumes after modal',
  );

  final json = ledger.state.toJson();
  check(json['pages'] is List, 'state has serializable pages');
  print('pause ledger: root/nested back, focus restoration, modal gating pass');
}
