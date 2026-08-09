import 'package:quarantine/ui/gameplay_presentation_policy.dart';
import 'package:quarantine/ui/gameplay_settings.dart';

void main() {
  final first = GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile.firstRun,
  );
  check(!first.interactionUsesHold, 'press is the default interaction mode');
  check(first.textPacingMultiplier == 1, 'readable pacing is neutral');
  check(!first.affectsDomainOutcome, 'policy cannot author domain outcomes');

  final detailed = GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile.firstRun.copyWith(
      interactionMode: GameplayInteractionMode.hold,
      promptDensity: GameplayPromptDensity.detailed,
      textPacing: GameplayTextPacing.slow,
      journalLayout: GameplayJournalLayout.compact,
      confirmations: GameplayConfirmationLevel.always,
      saveFeedback: GameplaySaveFeedback.detailed,
      focusLossBehavior: GameplayFocusLossBehavior.pauseOnly,
      contextualReminders: false,
    ),
  );
  check(detailed.interactionUsesHold, 'hold preference projects to policy');
  check(detailed.showDetailedPrompts, 'prompt preference projects to policy');
  check(detailed.textPacingMultiplier == 1.75,
      'slow pacing projects to policy');
  check(detailed.compactJournal, 'journal preference projects to policy');
  check(detailed.confirmRoutineActions,
      'confirmation preference projects to policy');
  check(detailed.detailedSaveFeedback,
      'save feedback preference projects to policy');
  check(
    detailed.focusLossBehavior == GameplayFocusLossBehavior.pauseOnly,
    'focus-loss preference projects to policy',
  );
  check(!detailed.contextualReminders,
      'reminder preference projects to policy');
  check(!detailed.affectsDomainOutcome,
      'alternate presentation policy remains outcome-neutral');
  print('gameplay presentation policy: projection and outcome guard pass');
}

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}
