import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/sim/day.dart';

Never _fail(String message) =>
    throw StateError('session test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void _expectThrows(void Function() action, String message) {
  try {
    action();
  } catch (error) {
    if (error is ArgumentError) return;
  }
  _fail(message);
}

void main() {
  final vocabulary = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['yesterday'],
    'place': ['hall'],
    'time': ['dawn'],
  });
  final session = GameSession.create(
    vocabulary: vocabulary,
    houseSeed: 17,
    startDay: 1,
    daySeconds: 24.0,
  );

  _expect(session.snapshot.day == 1, 'starts on requested day');
  _expect(session.snapshot.hour == 6.0, 'starts at sunrise');
  _expect(session.house.seed == 17, 'owns deterministic house seed');

  session.advance(1000.0);
  _expect(session.snapshot.day == 1, 'advance must never change a day');
  _expect(
    session.snapshot.hour < 24.0,
    'advance must stop before GameTime rollover',
  );
  final firstEvents = session.drainEvents();
  _expect(
    firstEvents.any(
      (event) => event.type == GameSessionEventType.dayEndReached,
    ),
    'end of day must be an explicit event',
  );
  _expect(session.drainEvents().isEmpty, 'draining events clears the queue');
  final semantic = session.drainDomainEvents();
  _expect(
    semantic.isNotEmpty && semantic.first.kind == 'time.advanced',
    'session exposes stable semantic events',
  );
  _expect(
    session.presentationSnapshot.values['calendar'] is Map,
    'session exposes renderer-neutral presentation facts',
  );

  final entry = session.writeJournal(
    {
      'who': 'warden',
      'verb': 'called',
      'object': 'yesterday',
      'place': 'hall',
      'time': 'dawn',
    },
    0.0,
    corroborator: 'broadcast',
  );
  _expect(entry != null && entry.day == 1, 'journal writes use session day');
  _expect(
    session.snapshot.journalEntryCount == 1,
    'snapshot counts journal writes',
  );
  _expect(
    session.drainEvents().single.type == GameSessionEventType.journalWritten,
    'accepted write emits journalWritten',
  );

  final rejected = session.writeJournal(const {}, 0.0);
  _expect(rejected == null, 'invalid vocabulary write is rejected');
  _expect(
    session.drainEvents().single.type == GameSessionEventType.journalRejected,
    'rejected write emits journalRejected',
  );

  final beforeSleep = session.snapshot;
  session.sleep(SleepQuality.long, SleepLocation.bed);
  final afterSleep = session.snapshot;
  _expect(
    afterSleep.day == beforeSleep.day + 1,
    'sleep advances exactly one day',
  );
  _expect(afterSleep.hour == 6.0, 'sleep resets to sunrise');
  _expect(
    session.drainEvents().single.type == GameSessionEventType.slept,
    'sleep emits one explicit event',
  );

  _expectThrows(() => session.advance(-1), 'negative advance must fail');
  _expectThrows(() => session.spendHours(-1), 'negative hour cost must fail');
  _expectThrows(() => session.spendGas(-1), 'negative gas cost must fail');
  final beforeResources = session.snapshot;
  _expect(session.spendHoursAndGas(1, 1), 'paired resource cost is accepted');
  final afterResources = session.snapshot;
  _expect(
    afterResources.hoursRemaining == beforeResources.hoursRemaining - 1 &&
        afterResources.gasRemaining == beforeResources.gasRemaining - 1,
    'paired resource cost must commit both counters together',
  );
  _expect(
    !session.spendHoursAndGas(afterResources.hoursRemaining + 1, 1) &&
        session.snapshot.gasRemaining == afterResources.gasRemaining,
    'failed paired resource cost must not consume gas',
  );
  _expectThrows(
    () => session.writeJournal(const {}, -0.1),
    'negative shakiness must fail',
  );
  _expectThrows(
    () => GameSession.create(vocabulary: vocabulary, startDay: 0),
    'invalid start day must fail',
  );
  _expectThrows(
    () => GameSession.create(vocabulary: vocabulary, daySeconds: 0),
    'invalid day length must fail',
  );
  final resumed = GameSession.restore(
    vocabulary: vocabulary,
    snapshot: session.toSaveSnapshot(),
    daySeconds: 24.0,
  );
  _expect(
    resumed.domainSnapshot.encode() == session.domainSnapshot.encode(),
    'domain snapshot is stable across save and restore',
  );
  print('session tests passed');
}
