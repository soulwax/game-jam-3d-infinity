import 'package:quarantine/ui/audio_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  const profile = AudioSettingsProfile(
    output: AudioOutputMode.headphones,
    dynamicRange: AudioDynamicRange.night,
    reverb: AudioReverbMode.reduced,
    ducking: AudioDuckingMode.strong,
  );
  final restored = AudioSettingsProfile.fromJson(profile.toJson());
  check(restored.output == AudioOutputMode.headphones, 'output round trips');
  check(restored.dynamicRange == AudioDynamicRange.night, 'range round trips');
  check(restored.reverb == AudioReverbMode.reduced, 'reverb round trips');
  check(restored.ducking == AudioDuckingMode.strong, 'ducking round trips');

  // S-06: AudioPresentationPolicy projections
  final policyNight = AudioPresentationPolicy.fromProfile(profile);
  check(!policyNight.isMono, 'headphones output is not mono');
  check(policyNight.stereoSpread == 1.0, 'headphones stereoSpread is 1.0');
  check(policyNight.dynamicRangeScale == 0.5, 'night mode dynamicRangeScale is 0.5');
  check(policyNight.quietBoostDb == 3.0, 'night mode quietBoostDb is +3 dB');
  check(policyNight.compressionThresholdDb == -12.0, 'night mode threshold is -12 dB');
  check(policyNight.wetReverbScale == 0.4, 'reduced reverb is 0.4');
  check(policyNight.duckingAmountDb == -14.0, 'strong ducking is -14 dB');

  final policyMono = AudioPresentationPolicy.fromProfile(
    profile.copyWith(output: AudioOutputMode.mono, dynamicRange: AudioDynamicRange.wide),
  );
  check(policyMono.isMono, 'mono output is mono');
  check(policyMono.stereoSpread == 0.0, 'mono output stereoSpread is 0.0');
  check(policyMono.dynamicRangeScale == 1.0, 'wide dynamic range scale is 1.0');

  final policySpeakers = AudioPresentationPolicy.fromProfile(
    profile.copyWith(output: AudioOutputMode.speakers),
  );
  check(policySpeakers.stereoSpread == 0.8, 'speakers stereoSpread is 0.8');

  // S-06: AudioSettingsStore transactional lifecycle
  final store = AudioSettingsStore();
  store.updateRequested(profile);
  check(store.requested.output == AudioOutputMode.headphones, 'requested updated');
  check(store.effective.output == AudioOutputMode.auto, 'effective unchanged before commit');

  store.commit();
  check(store.effective.output == AudioOutputMode.headphones, 'effective updated after commit');

  store.reset();
  check(store.requested.output == AudioOutputMode.auto, 'reset restores default profile');

  final storeRestored = AudioSettingsStore.fromJson(store.toJson());
  check(storeRestored.requested.output == AudioOutputMode.auto, 'store serialization round trips');

  print('audio settings: output, range, reverb, ducking, presentation policy curves, and store pass');
}
