import 'gameplay_settings.dart';

/// Runtime-facing presentation decisions derived from [GameplaySettingsProfile].
///
/// This is deliberately a projection, not a second settings authority. It
/// contains no action, cost, inventory, or story output and is safe for UI,
/// pause, save-feedback, and accessibility consumers to share.
final class GameplayPresentationPolicy {
  final bool interactionUsesHold;
  final bool showDetailedPrompts;
  final double textPacingMultiplier;
  final bool compactJournal;
  final bool confirmRoutineActions;
  final bool detailedSaveFeedback;
  final GameplayFocusLossBehavior focusLossBehavior;
  final bool contextualReminders;

  const GameplayPresentationPolicy({
    required this.interactionUsesHold,
    required this.showDetailedPrompts,
    required this.textPacingMultiplier,
    required this.compactJournal,
    required this.confirmRoutineActions,
    required this.detailedSaveFeedback,
    required this.focusLossBehavior,
    required this.contextualReminders,
  });

  factory GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile profile,
  ) => GameplayPresentationPolicy(
    interactionUsesHold:
        profile.interactionMode == GameplayInteractionMode.hold,
    showDetailedPrompts:
        profile.promptDensity == GameplayPromptDensity.detailed,
    textPacingMultiplier: switch (profile.textPacing) {
      GameplayTextPacing.instant => 0,
      GameplayTextPacing.readable => 1,
      GameplayTextPacing.slow => 1.75,
    },
    compactJournal: profile.journalLayout == GameplayJournalLayout.compact,
    confirmRoutineActions:
        profile.confirmations == GameplayConfirmationLevel.always,
    detailedSaveFeedback: profile.saveFeedback == GameplaySaveFeedback.detailed,
    focusLossBehavior: profile.focusLossBehavior,
    contextualReminders: profile.contextualReminders,
  );

  /// Guardrail consumed by tests and future adapters: this policy is never a
  /// source of simulation or story outcomes.
  bool get affectsDomainOutcome => false;
}
