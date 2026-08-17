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
  if (missing.isNotEmpty)
    throw StateError('release preflight missing: $missing');
  final index = jsonDecode(
    File('web/res/models/index.json').readAsStringSync(),
  );
  if (index is! Map || index['schema'] != 'quarantine-promoted-models-v1') {
    throw StateError('release preflight has invalid model index');
  }
  // Automation may prove contracts; it must never certify human review.
  stdout.writeln(
    'release preflight: required authored resources present; HUMAN gates remain pending',
  );
}
