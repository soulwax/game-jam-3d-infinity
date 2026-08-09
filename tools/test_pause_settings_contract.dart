import 'package:quarantine/ui/pause_settings_contract.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  check(
    PauseSettingsContract.ids.length == PauseSettingsCategory.values.length,
    'every settings category has an ID',
  );
  check(
    PauseSettingsContract.labels.length == PauseSettingsCategory.values.length,
    'every settings category has a label',
  );
  for (final category in PauseSettingsCategory.values) {
    final id = PauseSettingsContract.ids[category]!;
    check(id.startsWith('settings.'), 'category IDs use settings namespace');
    check(
      PauseSettingsContract.labels[category]!.isNotEmpty,
      'category labels are non-empty',
    );
  }
  print('pause settings contract: six categories have stable IDs and labels');
}
