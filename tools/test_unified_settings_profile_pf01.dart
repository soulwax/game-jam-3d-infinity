import 'package:quarantine/ui/unified_settings_profile.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  const profile = SettingsProfileV2();
  check(profile.version == 2, 'default version is 2');
  check(profile.visual.brightness == 1.0, 'default brightness is 1.0');

  // JSON round-trip
  final json = profile.toJson();
  final restored = SettingsProfileV2.fromJson(json);
  check(restored.version == 2, 'restored version is 2');

  // v1 migration test
  final v1Raw = {
    'version': 1,
    'renderScale': '1.00',
    'brightness': 1.2,
    'lookSensitivity': 1.5,
  };
  final migrated = SettingsProfileV2.fromJson(v1Raw);
  check(migrated.version == 2, 'migrated to version 2');
  check(migrated.graphics.renderScale == '1.00', 'migrated renderScale');
  check(migrated.visual.brightness == 1.2, 'migrated brightness');
  check(migrated.gameplay.lookSensitivity == 1.5, 'migrated lookSensitivity');

  print('unified settings profile PF-01 / S-01: v2 serialization, round-trip, and v1-to-v2 migration pass');
}
