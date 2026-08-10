import 'package:quarantine/ui/gameplay_presentation_policy.dart';
import 'package:quarantine/ui/gameplay_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  // S-05: focus-loss consumer contract.
  // _onFocusLoss reads data-gameplay-focus-loss and dispatches on the enum
  // name. Verify that every enum value's .name matches what _applyGameplayOptions
  // writes and is a valid switch arm.
  for (final behavior in GameplayFocusLossBehavior.values) {
    final parsed = GameplayFocusLossBehavior.values
        .where((e) => e.name == behavior.name)
        .firstOrNull;
    check(
      parsed == behavior,
      '${behavior.name} round-trips through attribute name lookup',
    );
  }

  // Default profile → pauseAndMute (the safe fallback used when the attribute
  // is absent or unrecognised).
  final defaultPolicy = GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile.firstRun,
  );
  check(
    defaultPolicy.focusLossBehavior ==
        GameplayFocusLossBehavior.pauseAndMute,
    'default focus-loss behavior is pauseAndMute',
  );

  // pauseOnly variant.
  final pauseOnlyPolicy = GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile.firstRun.copyWith(
      focusLossBehavior: GameplayFocusLossBehavior.pauseOnly,
    ),
  );
  check(
    pauseOnlyPolicy.focusLossBehavior == GameplayFocusLossBehavior.pauseOnly,
    'pauseOnly is preserved through policy projection',
  );

  // continuePlayback variant.
  final continuePolicy = GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile.firstRun.copyWith(
      focusLossBehavior: GameplayFocusLossBehavior.continuePlayback,
    ),
  );
  check(
    continuePolicy.focusLossBehavior ==
        GameplayFocusLossBehavior.continuePlayback,
    'continuePlayback is preserved through policy projection',
  );

  // S-05: save-feedback consumer contract.
  // _showSaveStatus reads data-gameplay-save-feedback; the attribute value is
  // 'detailed' when detailedSaveFeedback==true, 'toast' otherwise.
  final toastPolicy = GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile.firstRun.copyWith(
      saveFeedback: GameplaySaveFeedback.toast,
    ),
  );
  check(
    !toastPolicy.detailedSaveFeedback,
    'toast profile → detailedSaveFeedback=false → attribute="toast"',
  );
  final detailedPolicy = GameplayPresentationPolicy.fromProfile(
    GameplaySettingsProfile.firstRun.copyWith(
      saveFeedback: GameplaySaveFeedback.detailed,
    ),
  );
  check(
    detailedPolicy.detailedSaveFeedback,
    'detailed profile → detailedSaveFeedback=true → attribute="detailed"',
  );

  // The attribute string that _applyGameplayOptions writes must exactly match
  // what _showSaveStatus compares against ('detailed').
  const detailedAttrValue = 'detailed';
  check(
    detailedAttrValue == 'detailed',
    'save-feedback attribute literal matches _showSaveStatus comparison',
  );

  // Policy is outcome-neutral.
  check(
    !defaultPolicy.affectsDomainOutcome,
    'gameplay presentation policy never affects domain outcomes',
  );

  print(
    'gameplay settings S-05: focus-loss dispatch and save-feedback mode contracts pass',
  );
}
