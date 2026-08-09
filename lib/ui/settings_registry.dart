/// Typed, renderer-neutral settings authority. UI widgets and persistence
/// adapters consume these definitions; the registry owns no browser handles.
enum SettingCategory { audio, display, accessibility }

enum SettingKind { level, toggle }

final class SettingDefinition {
  final String key;
  final String label;
  final SettingCategory category;
  final SettingKind kind;
  final Object defaultValue;
  final double? min;
  final double? max;
  final String persistenceNamespace;
  final bool restartRequired;

  const SettingDefinition({
    required this.key,
    required this.label,
    required this.category,
    required this.kind,
    required this.defaultValue,
    required this.persistenceNamespace,
    this.min,
    this.max,
    this.restartRequired = false,
  });

  void validate(Object? value) {
    switch (kind) {
      case SettingKind.level:
        if (value is! num || !value.isFinite) {
          throw FormatException('$key must be a finite number');
        }
        if (min != null && value < min! || max != null && value > max!) {
          throw FormatException('$key is outside its allowed range');
        }
      case SettingKind.toggle:
        if (value is! bool) throw FormatException('$key must be boolean');
    }
  }
}

final class SettingsRegistry {
  SettingsRegistry._();

  static const int schemaVersion = 1;

  static const List<SettingDefinition> definitions = [
    SettingDefinition(
      key: 'master',
      label: 'Master',
      category: SettingCategory.audio,
      kind: SettingKind.level,
      defaultValue: 1.0,
      persistenceNamespace: 'audio',
      min: 0,
      max: 1,
    ),
    SettingDefinition(
      key: 'voice',
      label: 'Visitor voice',
      category: SettingCategory.audio,
      kind: SettingKind.level,
      defaultValue: 1.0,
      persistenceNamespace: 'audio',
      min: 0,
      max: 1,
    ),
    SettingDefinition(
      key: 'effects',
      label: 'Effects',
      category: SettingCategory.audio,
      kind: SettingKind.level,
      defaultValue: 1.0,
      persistenceNamespace: 'audio',
      min: 0,
      max: 1,
    ),
    SettingDefinition(
      key: 'ambience',
      label: 'House ambience',
      category: SettingCategory.audio,
      kind: SettingKind.level,
      defaultValue: 1.0,
      persistenceNamespace: 'audio',
      min: 0,
      max: 1,
    ),
    SettingDefinition(
      key: 'music',
      label: 'Music',
      category: SettingCategory.audio,
      kind: SettingKind.level,
      defaultValue: 1.0,
      persistenceNamespace: 'audio',
      min: 0,
      max: 1,
    ),
    SettingDefinition(
      key: 'brightness',
      label: 'Display brightness',
      category: SettingCategory.display,
      kind: SettingKind.level,
      defaultValue: 1.0,
      persistenceNamespace: 'display',
      min: 0.6,
      max: 1.4,
    ),
    SettingDefinition(
      key: 'muted',
      label: 'Mute house audio',
      category: SettingCategory.audio,
      kind: SettingKind.toggle,
      defaultValue: false,
      persistenceNamespace: 'audio',
    ),
    SettingDefinition(
      key: 'mono',
      label: 'Mono-compatible mix',
      category: SettingCategory.accessibility,
      kind: SettingKind.toggle,
      defaultValue: false,
      persistenceNamespace: 'audio',
    ),
    SettingDefinition(
      key: 'high-contrast',
      label: 'High-contrast interface',
      category: SettingCategory.accessibility,
      kind: SettingKind.toggle,
      defaultValue: false,
      persistenceNamespace: 'display',
    ),
    SettingDefinition(
      key: 'strong-highlights',
      label: 'Strong focus highlights',
      category: SettingCategory.accessibility,
      kind: SettingKind.toggle,
      defaultValue: false,
      persistenceNamespace: 'display',
    ),
  ];

  static SettingDefinition definitionFor(String key) => definitions.firstWhere(
    (definition) => definition.key == key,
    orElse: () => throw StateError('unknown setting: $key'),
  );

  static Map<String, Object> get defaults => {
    for (final definition in definitions)
      definition.key: definition.defaultValue,
  };
}

final class SettingsProfile {
  final int version;
  final Map<String, Object> values;

  SettingsProfile({Map<String, Object>? values, this.version = 1})
    : values = Map.unmodifiable({...SettingsRegistry.defaults, ...?values}) {
    if (version != SettingsRegistry.schemaVersion) {
      throw ArgumentError('unsupported settings version $version');
    }
    for (final entry in this.values.entries) {
      SettingsRegistry.definitionFor(entry.key).validate(entry.value);
    }
  }

  factory SettingsProfile.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != SettingsRegistry.schemaVersion) {
      throw const FormatException('unsupported settings profile');
    }
    final rawValues = raw['values'];
    if (rawValues is! Map) {
      throw const FormatException('settings values must be an object');
    }
    return SettingsProfile(
      values: Map<String, Object>.from(rawValues),
      version: raw['version'] as int,
    );
  }

  Object valueFor(String key) =>
      values[key] ?? (throw StateError('setting missing from profile: $key'));

  Map<String, Object> toJson() => {'version': version, 'values': values};
}
