import 'package:quarantine/ui/accessibility_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  const followSystem = AccessibilitySettingsProfile.firstRun;
  for (final systemMotion in [false, true]) {
    for (final systemPhotosafe in [false, true]) {
      final resolved = followSystem.resolve(
        systemReducedMotion: systemMotion,
        systemPhotosensitivitySafe: systemPhotosafe,
      );
      check(
        resolved.reducedMotion == systemMotion,
        'first-run motion follows every system state',
      );
      check(
        resolved.photosensitivitySafe == systemPhotosafe,
        'first-run photosafety follows every system state',
      );
      check(resolved.uiScale == 1, 'system UI scale defaults to 100%');
      check(!resolved.captions, 'captions are opt-in on first run');
    }
  }

  const override = AccessibilitySettingsProfile(
    reducedMotion: false,
    photosensitivitySafe: true,
    uiScale: 1.5,
    captions: true,
  );
  final explicit = override.resolve(
    systemReducedMotion: true,
    systemPhotosensitivitySafe: false,
  );
  check(!explicit.reducedMotion, 'explicit motion override wins');
  check(explicit.photosensitivitySafe, 'explicit photosafety wins');
  check(explicit.uiScale == 1.5 && explicit.captions, 'explicit values apply');
  final explicitFalse = const AccessibilitySettingsProfile(
    reducedMotion: false,
    photosensitivitySafe: false,
  ).resolve(systemReducedMotion: true, systemPhotosensitivitySafe: true);
  check(!explicitFalse.reducedMotion, 'explicit false motion wins');
  check(!explicitFalse.photosensitivitySafe, 'explicit false photosafety wins');
  final returnedToSystem = override.copyWith(
    clearReducedMotion: true,
    clearPhotosensitivitySafe: true,
  );
  final returned = returnedToSystem.resolve(
    systemReducedMotion: true,
    systemPhotosensitivitySafe: false,
  );
  check(returned.reducedMotion && !returned.photosensitivitySafe,
      'clearing overrides returns to system');
  final restored = AccessibilitySettingsProfile.fromJson(override.toJson());
  check(restored.uiScale == 1.5, 'accessibility profile round trips');
  print('accessibility settings: precedence, resolution, and round-trip pass');
}
