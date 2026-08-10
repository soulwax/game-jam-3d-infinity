import 'package:quarantine/ui/accessibility_presentation.dart';
import 'package:quarantine/ui/accessibility_settings.dart';

void main() {
  final resolved = const AccessibilitySettingsProfile(
    reducedMotion: true,
    photosensitivitySafe: false,
    uiScale: 1.5,
    captions: true,
  ).resolve(
    systemReducedMotion: false,
    systemPhotosensitivitySafe: false,
  );
  final policy = AccessibilityUiPolicy.fromResolved(
    resolved,
    highContrast: false,
    strongHighlights: true,
  );
  check(policy.uiScale == 1.5, 'UI scale reaches the policy');
  check(policy.reducedEffects, 'reduced motion reaches the policy');
  check(policy.captions, 'caption preference reaches the policy');
  check(!policy.highContrast, 'contrast remains independently controlled');
  check(policy.focusVisible, 'strong highlights preserve visible focus');
  check(policy.essentialCues, 'essential cues remain enabled');

  final contrast = AccessibilityUiPolicy.fromResolved(
    resolved,
    highContrast: true,
  );
  check(contrast.focusVisible, 'high contrast guarantees visible focus');
  print('accessibility UI policy: resolved projection and cue guard pass');
}

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}
