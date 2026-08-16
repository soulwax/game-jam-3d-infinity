import 'dart:io';

import 'package:quarantine/game/session.dart';
import 'package:quarantine/house/authored_manifest.dart';
import 'package:quarantine/journal/entry.dart';

Never fail(String message) => throw StateError('house session: $message');

void expectValue(bool value, String message) {
  if (!value) fail(message);
}

void main() {
  final blueprint = AuthoredHouseManifest.decode(
    File('assets/house/house.json').readAsStringSync(),
  );
  final vocabulary = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['yesterday'],
    'place': ['hall'],
    'time': ['dawn'],
  });
  final created = GameSession.create(
    vocabulary: vocabulary,
    houseSeed: 42,
    houseBlueprint: blueprint,
  );
  expectValue(created.house.byId('living-room') != null, 'create injects blueprint');
  expectValue(created.house.byId('living-room')!.floor.name == 'ground', 'authored floor survives create');

  final restored = GameSession.restore(
    vocabulary: vocabulary,
    snapshot: created.toSaveSnapshot(),
    houseBlueprint: blueprint,
  );
  expectValue(restored.house.byId('cellar') != null, 'restore injects blueprint');
  expectValue(restored.house.rooms.length == 8, 'restore keeps authored room count');
  print('house session blueprint injection passed');
}
