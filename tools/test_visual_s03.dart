import 'package:quarantine/ui/visual_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  // 1. Profile defaults and bounds clamping
  const profile = VisualSettingsProfile.firstRun;
  check(profile.brightness == 1.0, 'default brightness is 1.0');
  check(profile.exposure == 0.0, 'default exposure is 0.0');
  check(profile.fov == 75.0, 'default fov is 75.0');
  check(profile.cameraMotion == 1.0, 'default cameraMotion is 1.0');
  check(profile.reticleMode == VisualReticleMode.dot, 'default reticleMode is dot');
  check(profile.colorGrade == VisualColorGrade.neutral, 'default colorGrade is neutral');

  // 2. JSON round-trip & clamping
  final custom = profile.copyWith(
    exposure: 0.5,
    fov: 90.0,
    cameraMotion: 0.8,
    reticleMode: VisualReticleMode.crosshair,
    colorGrade: VisualColorGrade.filmic,
  );
  final json = custom.toJson();
  final restored = VisualSettingsProfile.fromJson(json);
  check(restored.exposure == 0.5, 'exposure restored');
  check(restored.fov == 90.0, 'fov restored');
  check(restored.cameraMotion == 0.8, 'cameraMotion restored');
  check(restored.reticleMode == VisualReticleMode.crosshair, 'reticleMode restored');
  check(restored.colorGrade == VisualColorGrade.filmic, 'colorGrade restored');

  // Clamping check
  final clamped = VisualSettingsProfile.fromJson(const {
    'brightness': 5.0,
    'exposure': -10.0,
    'fov': 200.0,
    'cameraMotion': -2.0,
  });
  check(clamped.brightness == 1.4, 'brightness clamped to max 1.4');
  check(clamped.exposure == -1.0, 'exposure clamped to min -1.0');
  check(clamped.fov == 110.0, 'fov clamped to max 110.0');
  check(clamped.cameraMotion == 0.0, 'cameraMotion clamped to min 0.0');

  // 3. Policy projection
  final policyZero = VisualPresentationPolicy.fromProfile(profile);
  check(policyZero.exposureMultiplier == 1.0, 'exposure 0 -> multiplier 1.0');
  check(policyZero.fovDegrees == 75.0, 'fov 75');
  check(policyZero.cameraBreathScale == 1.0, 'breath scale 1.0');

  final policyPlusOne = VisualPresentationPolicy.fromProfile(
    profile.copyWith(exposure: 1.0, fov: 90.0, cameraMotion: 0.5),
  );
  check(policyPlusOne.exposureMultiplier == 2.0, 'exposure +1 -> multiplier 2.0');
  check(policyPlusOne.fovDegrees == 90.0, 'fov 90');
  check(policyPlusOne.cameraBreathScale == 0.5, 'breath scale 0.5');

  final policyMinusOne = VisualPresentationPolicy.fromProfile(
    profile.copyWith(exposure: -1.0),
  );
  check(policyMinusOne.exposureMultiplier == 0.5, 'exposure -1 -> multiplier 0.5');

  // 4. Store transactional lifecycle
  final store = VisualSettingsStore();
  store.updateRequested(custom);
  check(store.requested.exposure == 0.5, 'requested updated');
  check(store.effective.exposure == 0.0, 'effective unchanged before commit');

  store.revert();
  check(store.requested.exposure == 0.0, 'reverted to effective');

  store.updateRequested(custom);
  store.commit();
  check(store.effective.exposure == 0.5, 'committed effective updated');

  store.reset();
  check(store.requested.exposure == 0.0, 'reset restores default');
  check(store.effective.exposure == 0.0, 'reset effective default');

  print('visual S-03: profile, JSON round-trip, policy exposure/FOV projection, and store transaction pass');
}
