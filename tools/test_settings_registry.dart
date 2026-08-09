import 'package:quarantine/ui/settings_registry.dart';

void main() {
  final defaults = SettingsProfile();
  _expect(SettingsRegistry.definitions.length == 10);
  _expect(defaults.valueFor('brightness') == 1.0);
  _expect(defaults.valueFor('muted') == false);

  final custom = SettingsProfile(
    values: const {'brightness': 1.25, 'mono': true},
  );
  final restored = SettingsProfile.fromJson(custom.toJson());
  _expect(restored.valueFor('brightness') == 1.25);
  _expect(restored.valueFor('mono') == true);
  _expect(restored.valueFor('master') == 1.0);
  _expectThrows(() => SettingsRegistry.definitionFor('missing'));
  _expectThrows(() => SettingsProfile(values: const {'brightness': 2.0}));
  _expectThrows(() => SettingsProfile(values: const {'mono': 1}));
  _expectThrows(() => SettingsProfile.fromJson({'version': 99, 'values': {}}));
  print(
    'settings registry: typed defaults, ranges, categories, and round-trip pass',
  );
}

void _expect(bool condition) {
  if (!condition) throw StateError('settings registry assertion failed');
}

void _expectThrows(void Function() action) {
  try {
    action();
  } catch (_) {
    return;
  }
  throw StateError('expected settings registry failure');
}
