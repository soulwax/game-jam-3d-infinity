import 'package:quarantine/ui/accessibility_presentation.dart';
import 'package:quarantine/ui/accessibility_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  // S-07: Accessibility UI Policy projection contract.
  final resolvedStandard = const AccessibilitySettingsProfile(
    reducedMotion: false,
    photosensitivitySafe: false,
    uiScale: 1.25,
    captions: true,
    screenReaderVerbosity: AccessibilityScreenReaderVerbosity.standard,
  ).resolve(
    systemReducedMotion: false,
    systemPhotosensitivitySafe: false,
  );

  final uiPolicyNormal = AccessibilityUiPolicy.fromResolved(
    resolvedStandard,
    highContrast: false,
    strongHighlights: false,
  );
  check(!uiPolicyNormal.reducedEffects, 'reducedEffects false when motion and photosafety are off');
  check(!uiPolicyNormal.highContrast, 'highContrast false when not set');
  check(!uiPolicyNormal.focusVisible, 'focusVisible false when contrast & highlights are off');
  check(uiPolicyNormal.essentialCues, 'essentialCues always true');

  final uiPolicyHighContrast = AccessibilityUiPolicy.fromResolved(
    resolvedStandard,
    highContrast: true,
    strongHighlights: false,
  );
  check(uiPolicyHighContrast.highContrast, 'highContrast true');
  check(uiPolicyHighContrast.focusVisible, 'highContrast enables focusVisible');

  final uiPolicyHighlights = AccessibilityUiPolicy.fromResolved(
    resolvedStandard,
    highContrast: false,
    strongHighlights: true,
  );
  check(uiPolicyHighlights.focusVisible, 'strongHighlights enables focusVisible');

  final resolvedReduced = const AccessibilitySettingsProfile(
    reducedMotion: true,
    photosensitivitySafe: false,
  ).resolve(
    systemReducedMotion: false,
    systemPhotosensitivitySafe: false,
  );

  final uiPolicyReduced = AccessibilityUiPolicy.fromResolved(
    resolvedReduced,
    highContrast: false,
    strongHighlights: false,
  );
  check(uiPolicyReduced.reducedEffects, 'reducedEffects true when reducedMotion is on');

  // S-07: Announcement policy verbosity formatting contract.
  final concisePolicy = const AccessibilityAnnouncementPolicy(
    AccessibilityScreenReaderVerbosity.concise,
  );
  check(
    concisePolicy.format(channel: 'noticed', text: 'door opens') == 'door opens',
    'concise verbosity strips channel prefix for non-essential cues',
  );
  check(
    concisePolicy.format(channel: 'noticed', text: 'door opens', essential: true) ==
        'noticed: door opens',
    'concise verbosity retains channel prefix for essential cues',
  );

  final verbosePolicy = const AccessibilityAnnouncementPolicy(
    AccessibilityScreenReaderVerbosity.verbose,
  );
  check(
    verbosePolicy.format(channel: 'noticed', text: 'door opens') == 'noticed: door opens',
    'verbose verbosity retains channel prefix',
  );

  final standardPolicy = const AccessibilityAnnouncementPolicy(
    AccessibilityScreenReaderVerbosity.standard,
  );
  check(
    standardPolicy.format(channel: 'noticed', text: 'door opens') == 'noticed: door opens',
    'standard verbosity retains channel prefix when non-empty',
  );
  check(
    standardPolicy.format(channel: '', text: 'door opens') == 'door opens',
    'empty channel formats cleanly without colon prefix',
  );

  print('accessibility S-07: UI policy projection, verbosity, and essential cue contracts pass');
}
