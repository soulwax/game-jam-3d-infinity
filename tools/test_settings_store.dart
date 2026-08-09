import 'package:quarantine/ui/settings_registry.dart';
import 'package:quarantine/ui/settings_store.dart';

void main() {
  final store = SettingsStore();
  store
    ..setRequested('brightness', 1.3)
    ..setEffective('brightness', 1.0)
    ..setRequested('mono', true);
  _expect(store.requested.valueFor('brightness') == 1.3);
  _expect(store.effective.valueFor('brightness') == 1.0);
  _expect(store.requested.valueFor('mono') == true);

  final restored = SettingsStore.fromJson(store.toJson());
  _expect(restored.requested.valueFor('brightness') == 1.3);
  _expect(restored.effective.valueFor('brightness') == 1.0);

  restored.resetCategory(SettingCategory.display);
  _expect(restored.requested.valueFor('brightness') == 1.0);
  _expect(restored.effective.valueFor('brightness') == 1.0);
  _expect(restored.requested.valueFor('mono') == true);
  restored.resetAll();
  _expect(restored.requested.valueFor('mono') == false);
  _expectThrows(() => SettingsStore.fromJson({'version': 1}));
  final migrated = SettingsStore.fromLegacy(
    audio: const {'master': '0.75', 'muted': 'true', 'brightness': '0.2'},
    display: const {'brightness': '1.2', 'high-contrast': 'true'},
  );
  _expect(migrated.requested.valueFor('master') == 0.75);
  _expect(migrated.requested.valueFor('muted') == true);
  _expect(migrated.requested.valueFor('brightness') == 1.2);
  _expect(migrated.requested.valueFor('high-contrast') == true);
  print('settings store: requested/effective, reset, and round-trip pass');
}

void _expect(bool condition) {
  if (!condition) throw StateError('settings store assertion failed');
}

void _expectThrows(void Function() action) {
  try {
    action();
  } catch (_) {
    return;
  }
  throw StateError('expected settings store failure');
}
