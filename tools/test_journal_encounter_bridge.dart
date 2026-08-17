import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/entry.dart';

void main() {
  final vocabulary = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['parcel'],
    'place': ['threshold'],
    'time': ['morning'],
  });
  final session = GameSession.create(vocabulary: vocabulary, daySeconds: 24);
  final entry = session.writeVisitorJournal('warden', {
    'who': 'warden',
    'verb': 'called',
    'object': 'parcel',
    'place': 'threshold',
    'time': 'morning',
  }, 0.0);
  if (entry == null || entry.corroborator != 'visitor:warden') {
    throw StateError('visitor journal provenance was not retained');
  }
  final restored = GameSession.restore(
    vocabulary: vocabulary,
    snapshot: session.toSaveSnapshot(),
  );
  if (restored.journal.entries.single.corroborator != 'visitor:warden') {
    throw StateError('visitor journal provenance was lost on save/reload');
  }
  print(
    'journal encounter bridge: authored visitor provenance survives save/reload',
  );
}
