import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/sim/interaction.dart';
import 'package:quarantine/sim/time.dart';

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
  final engine = InteractionEngine(
    journal: session.journal,
    time: GameTime(dayNumber: 2, dayLengthSeconds: 96 * 60),
    runSeed: session.runSeed,
    verifyEntry: session.verifyJournal,
  );
  final consultation = engine.processVisitorConsultation(
    entry.ordinal,
    true,
    'warden',
    'The warden called about the parcel.',
  );
  if (consultation.selectedOrdinal != entry.ordinal ||
      !session.journal.getVerifiedToday().contains(entry.ordinal)) {
    throw StateError(
      'browser consultation callback bypassed session authority',
    );
  }
  print(
    'journal mutation bridge: write, correct, lock, and consultation route through session',
  );
}
