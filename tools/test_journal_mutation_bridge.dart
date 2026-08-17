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
  final session = GameSession.create(vocabulary: vocabulary);
  final fields = <String, String>{
    'who': 'warden',
    'verb': 'called',
    'object': 'parcel',
    'place': 'threshold',
    'time': 'morning',
  };
  final entry = session.writeVisitorJournal('warden', fields, 0);
  if (entry == null || !session.correctJournal(entry.ordinal, fields, 0)) {
    throw StateError('journal correction did not use the session authority');
  }
  if (!session.lockJournal(entry.ordinal) ||
      !session.journal.entries.single.locked) {
    throw StateError('journal lock did not use the session authority');
  }
  print(
    'journal mutation bridge: write, correct, and lock route through session',
  );
}
