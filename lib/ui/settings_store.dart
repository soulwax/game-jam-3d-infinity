import 'settings_registry.dart';

/// Pure requested/effective settings state. Requested values are the user's
/// intent; effective values are what installed capabilities currently allow.
final class SettingsStore {
  SettingsProfile requested;
  SettingsProfile effective;

  SettingsStore({SettingsProfile? requested, SettingsProfile? effective})
    : requested = requested ?? SettingsProfile(),
      effective = effective ?? SettingsProfile();

  factory SettingsStore.fromLegacy({
    Map<String, String?> audio = const {},
    Map<String, String?> display = const {},
  }) {
    final values = <String, Object>{};
    for (final definition in SettingsRegistry.definitions) {
      final raw = definition.persistenceNamespace == 'audio'
          ? audio[definition.key]
          : display[definition.key];
      if (raw == null) continue;
      final value = switch (definition.kind) {
        SettingKind.level => double.tryParse(raw),
        SettingKind.toggle =>
          raw == 'true'
              ? true
              : raw == 'false'
              ? false
              : null,
      };
      if (value != null) {
        try {
          definition.validate(value);
          values[definition.key] = value;
        } on FormatException {
          // A malformed legacy preference falls back to its typed default.
        }
      }
    }
    final profile = SettingsProfile(values: values);
    return SettingsStore(requested: profile, effective: profile);
  }

  void setRequested(String key, Object value) {
    SettingsRegistry.definitionFor(key).validate(value);
    requested = SettingsProfile(values: {...requested.values, key: value});
  }

  void setEffective(String key, Object value) {
    SettingsRegistry.definitionFor(key).validate(value);
    effective = SettingsProfile(values: {...effective.values, key: value});
  }

  void resetCategory(SettingCategory category) {
    final values = {...requested.values};
    for (final definition in SettingsRegistry.definitions) {
      if (definition.category == category) {
        values[definition.key] = definition.defaultValue;
      }
    }
    requested = SettingsProfile(values: values);
    _resetEffectiveCategory(category);
  }

  void resetAll() {
    requested = SettingsProfile();
    effective = SettingsProfile();
  }

  Map<String, Object> toJson() => {
    'version': SettingsRegistry.schemaVersion,
    'requested': requested.toJson(),
    'effective': effective.toJson(),
  };

  factory SettingsStore.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != SettingsRegistry.schemaVersion) {
      throw const FormatException('unsupported settings store');
    }
    final requested = SettingsProfile.fromJson(raw['requested']);
    final effective = SettingsProfile.fromJson(raw['effective']);
    return SettingsStore(requested: requested, effective: effective);
  }

  void _resetEffectiveCategory(SettingCategory category) {
    final values = {...effective.values};
    for (final definition in SettingsRegistry.definitions) {
      if (definition.category == category) {
        values[definition.key] = definition.defaultValue;
      }
    }
    effective = SettingsProfile(values: values);
  }
}
