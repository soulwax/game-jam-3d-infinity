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
  print('audio settings: output, range, reverb, and ducking contract pass');
}
