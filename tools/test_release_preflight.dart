import 'dart:convert';
import 'dart:io';

void main() {
  final required = [
    'web/res/house/house.json',
    'web/res/house/inventory.json',
    'web/res/house/soundscape.json',
    'web/res/story_script.json',
    'web/res/models/index.json',
  ];
  final missing = [
    for (final path in required)
      if (!File(path).existsSync()) path,
  ];
  if (missing.isNotEmpty) {
    throw StateError('release preflight missing: $missing');
  }
  final index = jsonDecode(
    File('web/res/models/index.json').readAsStringSync(),
  );
  if (index is! Map || index['schema'] != 'quarantine-promoted-models-v1') {
    throw StateError('release preflight has invalid model index');
  }
  final version = File('VERSION').readAsStringSync().trim();
  if (!RegExp(r'^\d+\.\d+\.\d+\.\d+$').hasMatch(version)) {
    throw StateError('release preflight has invalid VERSION: $version');
  }
  final changelog = File('CHANGELOG.md').readAsStringSync();
  if (!changelog.contains('## Unreleased')) {
    throw StateError('release preflight changelog has no Unreleased section');
  }
  final reviewRoot = Directory('artifacts/human-visual-confirmation');
  if (reviewRoot.existsSync()) {
    final packets = reviewRoot
        .listSync(recursive: true)
        .whereType<File>()
        .where((file) => file.path.endsWith('.json'));
    for (final file in packets) {
      final raw = jsonDecode(file.readAsStringSync());
      if (raw is Map &&
          raw['packet'] == 'human-visual-confirmation' &&
          raw['status'] != 'pending-human-review') {
        throw StateError('human review packet is not pending: ${file.path}');
      }
    }
  }
  // Automation may prove contracts; it must never certify human review.
  stdout.writeln(
    'release preflight: required authored resources present; HUMAN gates remain pending',
  );
}
