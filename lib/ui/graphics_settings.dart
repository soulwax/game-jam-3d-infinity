/// Typed Graphics settings and capability negotiation, independent of WebGL.
enum GraphicsPreset { high, standard, safe, custom }

class GraphicsSettingsProfile {
  final int version;
  final GraphicsPreset preset;
  final String renderScale;
  final bool dynamicResolution;
  final String frameTarget;
  final String antialiasing;
  final String textureQuality;

  const GraphicsSettingsProfile({
    this.version = 1,
    this.preset = GraphicsPreset.standard,
    this.renderScale = 'auto',
    this.dynamicResolution = false,
    this.frameTarget = 'display',
    this.antialiasing = 'off',
    this.textureQuality = 'high',
  });

  GraphicsSettingsProfile copyWith({
    GraphicsPreset? preset,
    String? renderScale,
    bool? dynamicResolution,
    String? frameTarget,
    String? antialiasing,
    String? textureQuality,
  }) => GraphicsSettingsProfile(
    version: version,
    preset: preset ?? this.preset,
    renderScale: renderScale ?? this.renderScale,
    dynamicResolution: dynamicResolution ?? this.dynamicResolution,
    frameTarget: frameTarget ?? this.frameTarget,
    antialiasing: antialiasing ?? this.antialiasing,
    textureQuality: textureQuality ?? this.textureQuality,
  );

  static GraphicsSettingsProfile forPreset(GraphicsPreset preset) => switch (preset) {
    GraphicsPreset.high => const GraphicsSettingsProfile(
      preset: GraphicsPreset.high,
      renderScale: '1.00',
      dynamicResolution: false,
      frameTarget: 'display',
      antialiasing: 'msaa4',
      textureQuality: 'high',
    ),
    GraphicsPreset.standard => const GraphicsSettingsProfile(
      preset: GraphicsPreset.standard,
      renderScale: '1.00',
      dynamicResolution: false,
      frameTarget: 'display',
      antialiasing: 'fxaa',
      textureQuality: 'high',
    ),
    GraphicsPreset.safe => const GraphicsSettingsProfile(
      preset: GraphicsPreset.safe,
      renderScale: '0.75',
      dynamicResolution: false,
      frameTarget: '60',
      antialiasing: 'off',
      textureQuality: 'medium',
    ),
    GraphicsPreset.custom => const GraphicsSettingsProfile(
      preset: GraphicsPreset.custom,
    ),
  };

  GraphicsSettingsProfile copyWithOption({
    String? renderScale,
    bool? dynamicResolution,
    String? frameTarget,
    String? antialiasing,
    String? textureQuality,
  }) {
    final updated = copyWith(
      renderScale: renderScale,
      dynamicResolution: dynamicResolution,
      frameTarget: frameTarget,
      antialiasing: antialiasing,
      textureQuality: textureQuality,
    );
    for (final candidate in [
      GraphicsPreset.high,
      GraphicsPreset.standard,
      GraphicsPreset.safe,
    ]) {
      final p = forPreset(candidate);
      if (p.renderScale == updated.renderScale &&
          p.dynamicResolution == updated.dynamicResolution &&
          p.frameTarget == updated.frameTarget &&
          p.antialiasing == updated.antialiasing &&
          p.textureQuality == updated.textureQuality) {
        return updated.copyWith(preset: candidate);
      }
    }
    return updated.copyWith(preset: GraphicsPreset.custom);
  }

  void validate() {
    if (!const [
      'auto',
      '0.50',
      '0.67',
      '0.75',
      '0.85',
      '1.00',
    ].contains(renderScale)) {
      throw FormatException('unsupported graphics render scale: $renderScale');
    }
    if (!const ['30', '60', 'display'].contains(frameTarget)) {
      throw FormatException('unsupported graphics frame target: $frameTarget');
    }
    if (!const ['off', 'fxaa', 'msaa2', 'msaa4'].contains(antialiasing)) {
      throw FormatException('unsupported graphics antialiasing: $antialiasing');
    }
    if (!const ['high', 'medium', 'low'].contains(textureQuality)) {
      throw FormatException(
        'unsupported graphics texture quality: $textureQuality',
      );
    }
  }

  Map<String, Object> toJson() => {
    'version': version,
    'preset': preset.name,
    'renderScale': renderScale,
    'dynamicResolution': dynamicResolution,
    'frameTarget': frameTarget,
    'antialiasing': antialiasing,
    'textureQuality': textureQuality,
  };

  factory GraphicsSettingsProfile.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != 1) {
      throw const FormatException('unsupported graphics profile');
    }
    final preset = GraphicsPreset.values.firstWhere(
      (value) => value.name == raw['preset'],
      orElse: () => throw const FormatException('unsupported graphics preset'),
    );
    final profile = GraphicsSettingsProfile(
      preset: preset,
      renderScale: raw['renderScale'] as String,
      dynamicResolution: raw['dynamicResolution'] as bool,
      frameTarget: raw['frameTarget'] as String,
      antialiasing: raw['antialiasing'] as String,
      textureQuality: raw['textureQuality'] as String,
    );
    profile.validate();
    return profile;
  }
}

class GraphicsSettingsStore {
  GraphicsSettingsProfile requested;
  GraphicsSettingsProfile effective;

  GraphicsSettingsStore({
    GraphicsSettingsProfile? requested,
    GraphicsSettingsProfile? effective,
  }) : requested = requested ?? const GraphicsSettingsProfile(),
       effective = effective ?? const GraphicsSettingsProfile();

  void updateRequested(GraphicsSettingsProfile profile) {
    requested = profile;
  }

  void commit() {
    effective = requested;
  }

  void revert() {
    requested = effective;
  }

  void reset() {
    requested = const GraphicsSettingsProfile();
    effective = const GraphicsSettingsProfile();
  }

  GraphicsNegotiation commitWithNegotiation(
    GraphicsCapabilitySnapshot capabilities,
  ) {
    final negotiation = negotiateGraphics(requested, capabilities);
    effective = negotiation.effective;
    return negotiation;
  }

  Map<String, Object> toJson() => {
    'version': 1,
    'requested': requested.toJson(),
    'effective': effective.toJson(),
  };

  factory GraphicsSettingsStore.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != 1) {
      throw const FormatException('unsupported graphics store');
    }
    return GraphicsSettingsStore(
      requested: GraphicsSettingsProfile.fromJson(raw['requested']),
      effective: GraphicsSettingsProfile.fromJson(raw['effective']),
    );
  }
}

class GraphicsCapabilitySnapshot {
  final int maxSamples;
  final bool disjointTimerQuery;

  const GraphicsCapabilitySnapshot({
    required this.maxSamples,
    required this.disjointTimerQuery,
  });

  static const safe = GraphicsCapabilitySnapshot(
    maxSamples: 1,
    disjointTimerQuery: false,
  );
}

class GraphicsNegotiation {
  final GraphicsSettingsProfile effective;
  final List<String> downgradeReasons;

  const GraphicsNegotiation(this.effective, this.downgradeReasons);

  bool get downgraded => downgradeReasons.isNotEmpty;
}

GraphicsNegotiation negotiateGraphics(
  GraphicsSettingsProfile requested,
  GraphicsCapabilitySnapshot capabilities,
) {
  requested.validate();
  var effective = requested;
  final reasons = <String>[];
  if (effective.antialiasing == 'msaa4' && capabilities.maxSamples < 4) {
    effective = effective.copyWith(
      antialiasing: capabilities.maxSamples >= 2 ? 'msaa2' : 'off',
    );
    reasons.add('requested MSAA 4x is unavailable');
  } else if (effective.antialiasing == 'msaa2' && capabilities.maxSamples < 2) {
    effective = effective.copyWith(antialiasing: 'off');
    reasons.add('requested MSAA 2x is unavailable');
  }
  if (effective.dynamicResolution && !capabilities.disjointTimerQuery) {
    effective = effective.copyWith(dynamicResolution: false);
    reasons.add('dynamic resolution timing is unavailable');
  }
  if (effective.preset == GraphicsPreset.high && capabilities.maxSamples < 2) {
    effective = effective.copyWith(preset: GraphicsPreset.standard);
    reasons.add('High preset was reduced to Standard');
  }
  return GraphicsNegotiation(effective, List.unmodifiable(reasons));
}
