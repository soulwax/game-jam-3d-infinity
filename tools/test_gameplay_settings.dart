import 'package:quarantine/ui/gameplay_settings.dart';

void main() {
  final firstRun = GameplaySettingsProfile.firstRun;
  check(
    firstRun.focusLossBehavior == GameplayFocusLossBehavior.pauseAndMute,
    'focus loss pauses and mutes by default',
  );
  check(firstRun.contextualReminders, 'reminders are enabled by default');

  final customized = firstRun.copyWith(
    interactionMode: GameplayInteractionMode.hold,
    promptDensity: GameplayPromptDensity.detailed,
    textPacing: GameplayTextPacing.slow,
    journalLayout: GameplayJournalLayout.compact,
    confirmations: GameplayConfirmationLevel.always,
    saveFeedback: GameplaySaveFeedback.detailed,
    focusLossBehavior: GameplayFocusLossBehavior.pauseOnly,
    contextualReminders: false,
  );
  final restored = GameplaySettingsProfile.fromJson(customized.toJson());
  check(restored.interactionMode == GameplayInteractionMode.hold,
      'interaction mode round trips');
  check(restored.promptDensity == GameplayPromptDensity.detailed,
      'prompt density round trips');
  check(restored.textPacing == GameplayTextPacing.slow,
      'text pacing round trips');
  check(restored.journalLayout == GameplayJournalLayout.compact,
      'journal layout round trips');
  check(restored.confirmations == GameplayConfirmationLevel.always,
      'confirmation level round trips');
  check(restored.saveFeedback == GameplaySaveFeedback.detailed,
      'save feedback round trips');
  check(restored.focusLossBehavior == GameplayFocusLossBehavior.pauseOnly,
      'focus behavior round trips');
  check(!restored.contextualReminders, 'reminders round trip');

  expectThrows(() => GameplaySettingsProfile.fromJson({
    'version': 1,
    ...customized.toJson(),
    'promptDensity': 'invented',
  }));
  expectThrows(() => GameplaySettingsProfile.fromJson({
    'version': 1,
    ...customized.toJson(),
    'contextualReminders': 'yes',
  }));
  expectThrows(() => GameplaySettingsProfile.fromJson({'version': 2}));

  final store = GameplaySettingsStore(
    requested: customized,
    effective: firstRun,
  );
  final restoredStore = GameplaySettingsStore.fromJson(store.toJson());
  check(
    restoredStore.requested.textPacing == GameplayTextPacing.slow,
    'requested gameplay profile round trips through its store',
  );
  check(
    restoredStore.effective == GameplaySettingsProfile.firstRun ||
        restoredStore.effective.textPacing == GameplayTextPacing.readable,
    'effective gameplay profile remains independent',
  );
  restoredStore.reset();
  check(
    restoredStore.requested.interactionMode ==
        GameplayInteractionMode.press,
    'gameplay reset restores presentation defaults',
  );
  print('gameplay settings: presentation-only profile and round-trip pass');
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
  throw StateError('expected gameplay settings validation failure');
}
