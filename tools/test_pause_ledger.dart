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

  // Multi-tier category stack test: root -> settings -> visual -> back -> back -> back -> resumed
  final multiLedger = PauseLedger();
  multiLedger.openRoot(restoreFocusId: 'gameplay.viewport');
  multiLedger.push(PausePage.settings, triggerFocusId: 'pause.settings');
  multiLedger.push(PausePage.visual, triggerFocusId: 'settings.visual');

  final backVisual = multiLedger.back();
  check(
    backVisual.kind == PauseTransitionKind.backed,
    'visual back pops to settings',
  );
  check(
    backVisual.focusTargetId == 'settings.visual',
    'visual back restores trigger focus',
  );
  check(
    multiLedger.state.current?.page == PausePage.settings,
    'settings page is current',
  );

  final backSettings = multiLedger.back();
  check(
    backSettings.kind == PauseTransitionKind.backed,
    'settings back pops to root',
  );
  check(
    backSettings.focusTargetId == 'pause.settings',
    'settings back restores trigger focus',
  );
  check(multiLedger.state.atRoot, 'root page is current');

  final backRoot = multiLedger.back();
  check(
    backRoot.kind == PauseTransitionKind.resumed,
    'root back resumes gameplay',
  );
  check(
    backRoot.focusTargetId == 'gameplay.viewport',
    'resume restores gameplay viewport focus',
  );
  check(!multiLedger.state.isPaused, 'pause stack is empty');

  print(
    'pause ledger: root/nested back, visual multi-tier stack, focus restoration, modal gating pass',
  );

  // Credits page: root -> credits -> back -> root -> resume
  final creditsLedger = PauseLedger();
  creditsLedger.openRoot(restoreFocusId: 'gameplay.viewport');
  final creditsOpen = creditsLedger.push(
    PausePage.credits,
    triggerFocusId: 'pause.credits',
  );
  check(
    creditsOpen.kind == PauseTransitionKind.pushed,
    'credits page pushes onto root',
  );
  check(
    creditsOpen.focusTargetId == 'credits.close',
    'credits default focus is credits.close',
  );
  check(
    creditsLedger.state.current?.page == PausePage.credits,
    'current page is credits',
  );

  final creditsBack = creditsLedger.back();
  check(
    creditsBack.kind == PauseTransitionKind.backed,
    'credits back returns to root',
  );
  check(
    creditsBack.focusTargetId == 'pause.credits',
    'credits back restores trigger focus on root',
  );
  check(creditsLedger.state.atRoot, 'root is current after credits back');

  final creditsResume = creditsLedger.back();
  check(
    creditsResume.kind == PauseTransitionKind.resumed,
    'root back after credits resumes gameplay',
  );
  check(
    creditsResume.focusTargetId == 'gameplay.viewport',
    'resume restores gameplay viewport focus',
  );
  check(!creditsLedger.state.isPaused, 'pause stack is empty after credits flow');

  print('pause ledger: credits push/back/resume flow pass');
}
