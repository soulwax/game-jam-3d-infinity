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

/// Runtime-facing presentation decisions derived from [AudioSettingsProfile].
final class AudioPresentationPolicy {
  final bool isMono;
  final double stereoSpread;
  final double dynamicRangeScale;
  final double quietBoostDb;
  final double compressionThresholdDb;
  final double wetReverbScale;
  final double duckingAmountDb;

  const AudioPresentationPolicy({
    required this.isMono,
    required this.stereoSpread,
    required this.dynamicRangeScale,
    required this.quietBoostDb,
    required this.compressionThresholdDb,
    required this.wetReverbScale,
    required this.duckingAmountDb,
  });

  factory AudioPresentationPolicy.fromProfile(AudioSettingsProfile profile) {
    final isMono = profile.output == AudioOutputMode.mono;
    final stereoSpread = switch (profile.output) {
      AudioOutputMode.mono => 0.0,
      AudioOutputMode.speakers => 0.8,
      AudioOutputMode.auto || AudioOutputMode.headphones => 1.0,
    };
    final (drScale, quietBoost, thresh) = switch (profile.dynamicRange) {
      AudioDynamicRange.wide => (1.0, 0.0, 0.0),
      AudioDynamicRange.standard => (0.8, 0.0, -6.0),
      AudioDynamicRange.night => (0.5, 3.0, -12.0),
    };
    final wetReverb = switch (profile.reverb) {
      AudioReverbMode.full => 1.0,
      AudioReverbMode.reduced => 0.4,
    };
    final duckingDb = switch (profile.ducking) {
      AudioDuckingMode.defaultMix => -6.0,
      AudioDuckingMode.strong => -14.0,
    };
    return AudioPresentationPolicy(
      isMono: isMono,
      stereoSpread: stereoSpread,
      dynamicRangeScale: drScale,
      quietBoostDb: quietBoost,
      compressionThresholdDb: thresh,
      wetReverbScale: wetReverb,
      duckingAmountDb: duckingDb,
    );
  }
}

/// Store maintaining requested vs effective audio profiles for transactional UI settings.
class AudioSettingsStore {
  AudioSettingsProfile requested;
  AudioSettingsProfile effective;

  AudioSettingsStore([AudioSettingsProfile? profile])
      : requested = profile ?? const AudioSettingsProfile(),
        effective = profile ?? const AudioSettingsProfile();

  void updateRequested(AudioSettingsProfile profile) {
    requested = profile;
  }

  void commit() {
    effective = requested;
  }

  void revert() {
    requested = effective;
  }

  void reset() {
    requested = const AudioSettingsProfile();
    effective = const AudioSettingsProfile();
  }

  Map<String, Object> toJson() => {
        'version': 1,
        'requested': requested.toJson(),
        'effective': effective.toJson(),
      };

  factory AudioSettingsStore.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != 1) {
      throw const FormatException('unsupported audio store');
    }
    final store = AudioSettingsStore(
      AudioSettingsProfile.fromJson(raw['requested']),
    );
    store.effective = AudioSettingsProfile.fromJson(raw['effective']);
    return store;
  }
}
