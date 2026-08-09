/// Typed output and comfort options for the existing audio buses.
enum AudioOutputMode { auto, headphones, speakers, mono }

enum AudioDynamicRange { wide, standard, night }

enum AudioReverbMode { full, reduced }

enum AudioDuckingMode { defaultMix, strong }

class AudioSettingsProfile {
  final int version;
  final AudioOutputMode output;
  final AudioDynamicRange dynamicRange;
  final AudioReverbMode reverb;
  final AudioDuckingMode ducking;

  const AudioSettingsProfile({
    this.version = 1,
    this.output = AudioOutputMode.auto,
    this.dynamicRange = AudioDynamicRange.standard,
    this.reverb = AudioReverbMode.full,
    this.ducking = AudioDuckingMode.defaultMix,
  });

  AudioSettingsProfile copyWith({
    AudioOutputMode? output,
    AudioDynamicRange? dynamicRange,
    AudioReverbMode? reverb,
    AudioDuckingMode? ducking,
  }) => AudioSettingsProfile(
    output: output ?? this.output,
    dynamicRange: dynamicRange ?? this.dynamicRange,
    reverb: reverb ?? this.reverb,
    ducking: ducking ?? this.ducking,
  );

  Map<String, Object> toJson() => {
    'version': version,
    'output': output.name,
    'dynamicRange': dynamicRange.name,
    'reverb': reverb.name,
    'ducking': ducking.name,
  };

  factory AudioSettingsProfile.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != 1) {
      throw const FormatException('unsupported audio options');
    }
    T read<T>(Iterable<T> values, Object? value) => values.firstWhere(
      (item) => (item as Enum).name == value,
      orElse: () => throw FormatException('unsupported audio option: $value'),
    );
    return AudioSettingsProfile(
      output: read(AudioOutputMode.values, raw['output']),
      dynamicRange: read(AudioDynamicRange.values, raw['dynamicRange']),
      reverb: read(AudioReverbMode.values, raw['reverb']),
      ducking: read(AudioDuckingMode.values, raw['ducking']),
    );
  }
}
