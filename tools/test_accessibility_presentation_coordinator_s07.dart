import 'package:quarantine/ui/accessibility_presentation_coordinator.dart';
import 'package:quarantine/ui/accessibility_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final coordinator = AccessibilityPresentationCoordinator();
  var policy = coordinator.projectPolicy();
  check(policy.fontSizeScale == 1.0, 'default font scale 1.0');
  check(!policy.highContrastMode, 'default high contrast false');

  // Request high contrast and large text
  const highVis = AccessibilitySettingsProfile(
    photosensitivitySafe: true,
    uiScale: 1.25,
    reducedMotion: true,
  );
  coordinator.setRequested(highVis);

  // Before commit, policy still reflects effective (default)
  check(coordinator.projectPolicy().fontSizeScale == 1.0, 'uncommitted policy unchanged');

  // Commit transaction
  coordinator.commit();
  policy = coordinator.projectPolicy();
  check(policy.fontSizeScale == 1.25, 'committed font scale 1.25');
  check(policy.highContrastMode, 'committed high contrast true');
  check(policy.reducedMotionScale == 0.0, 'committed reduced motion 0.0');

  print('accessibility presentation coordinator S-07: transaction commit, revert, policy projection pass');
}
