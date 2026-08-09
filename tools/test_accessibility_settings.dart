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
      check(
        resolved.screenReaderVerbosity ==
            AccessibilityScreenReaderVerbosity.standard,
        'screen-reader verbosity follows the standard system default',
      );
      check(resolved.essentialCues, 'essential cues remain available');
    }
  }

  const override = AccessibilitySettingsProfile(
    reducedMotion: false,
    photosensitivitySafe: true,
    uiScale: 1.5,
    captions: true,
    screenReaderVerbosity: AccessibilityScreenReaderVerbosity.verbose,
  );
  final explicit = override.resolve(
    systemReducedMotion: true,
    systemPhotosensitivitySafe: false,
  );
  check(!explicit.reducedMotion, 'explicit motion override wins');
  check(explicit.photosensitivitySafe, 'explicit photosafety wins');
  check(explicit.uiScale == 1.5 && explicit.captions, 'explicit values apply');
  check(
    explicit.screenReaderVerbosity ==
        AccessibilityScreenReaderVerbosity.verbose,
    'explicit verbosity applies',
  );
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
  final systemVerbosity = const AccessibilitySettingsProfile(
    screenReaderVerbosity: null,
  ).resolve(
    systemReducedMotion: false,
    systemPhotosensitivitySafe: false,
    systemScreenReaderVerbosity: AccessibilityScreenReaderVerbosity.concise,
  );
  check(
    systemVerbosity.screenReaderVerbosity ==
        AccessibilityScreenReaderVerbosity.concise,
    'cleared verbosity follows the system',
  );
  final restored = AccessibilitySettingsProfile.fromJson(override.toJson());
  check(restored.uiScale == 1.5, 'accessibility profile round trips');
  check(
    restored.screenReaderVerbosity ==
        AccessibilityScreenReaderVerbosity.verbose,
    'verbosity round trips',
  );
  final store = AccessibilitySettingsStore(
    requested: override,
    effective: AccessibilitySettingsProfile.firstRun,
  );
  final restoredStore = AccessibilitySettingsStore.fromJson(store.toJson());
  check(
    restoredStore.requested.uiScale == 1.5,
    'requested accessibility profile round trips through its store',
  );
  check(
    restoredStore.effective.screenReaderVerbosity == null,
    'effective profile remains independently defaulted',
  );
  restoredStore.reset();
  check(
    restoredStore.requested == AccessibilitySettingsProfile.firstRun ||
        restoredStore.requested.uiScale == null,
    'accessibility reset returns to follow-system defaults',
  );
  print('accessibility settings: precedence, resolution, and round-trip pass');
}
