import 'dart:convert';

import 'package:quarantine/config.dart';
import 'package:quarantine/difficulty/rules.dart';
import 'package:quarantine/difficulty/state.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/sim/day.dart';
import 'package:quarantine/story/schema.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/state.dart';

Never _fail(String message) => throw StateError('q19 test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

const _vocab = {
  'who': ['I', 'Adler', 'the warden', 'the broadcast'],
  'verb': ['saw', 'heard', 'read', 'felt'],
  'object': ['a door', 'a window', 'a note', 'a sound'],
  'place': ['hallway', 'kitchen', 'bedroom', 'living-room'],
  'time': ['morning', 'afternoon', 'night', 'dawn'],
};

List<String> _source(String field) => _vocab[field] ?? const [];

Map<String, String> _fields(int i) => {
  for (final field in vocabularyFields) field: _vocab[field]![i % 4],
};

void _checkScrutinyDrivesDrifts(Vocabulary vocabulary) {
  print(
    '=== 1. Scrutiny drives drift count, never touches checked entries ===',
  );

  GameSession freshDay2() {
    final session = GameSession.create(
      vocabulary: vocabulary,
      houseSeed: 1,
      startDay: 1,
      daySeconds: 24.0,
    );
    session.sleep(SleepQuality.long, SleepLocation.bed);
    session.drainEvents();
    return session;
  }

  ({int drifted, List<int> checkedThatDrifted}) run(int verifyCount) {
    final session = freshDay2();
    const writeCount = 12;
    final originals = <int, String>{};
    final ordinals = <int>[];
    for (var i = 0; i < writeCount; i++) {
      final entry = session.writeJournal(
        _fields(i),
        0.1,
        corroborator: 'broadcast',
      )!;
      ordinals.add(entry.ordinal);
      originals[entry.ordinal] = jsonEncode(entry.current.fields);
    }
    final checked = ordinals.take(verifyCount).toSet();
    for (final ordinal in checked) {
      session.journal.verifyToday(ordinal);
    }
    session.sleep(SleepQuality.long, SleepLocation.bed);
    var drifted = 0;
    final checkedThatDrifted = <int>[];
    for (final ordinal in ordinals) {
      final entry = session.journal[ordinal]!;
      final changed = jsonEncode(entry.current.fields) != originals[ordinal];
      if (changed) {
        drifted++;
        if (checked.contains(ordinal)) checkedThatDrifted.add(ordinal);
      }
    }
    return (drifted: drifted, checkedThatDrifted: checkedThatDrifted);
  }

  final light = run(0);
  final heavy = run(9);

  print('light-verification night (0 checks): ${light.drifted} drifts');
  print('heavy-verification night (9 checks): ${heavy.drifted} drifts');
  print('checked entries that drifted anyway: ${heavy.checkedThatDrifted}');
  _expect(
    heavy.drifted > light.drifted,
    'a heavy-verification day must produce measurably more drifts',
  );
  _expect(
    heavy.checkedThatDrifted.isEmpty,
    'none of the checked entries may ever drift, regardless of scrutiny',
  );
}

void _checkExhaustionCostsHoursAndShakiness(Vocabulary vocabulary) {
  print('');
  print('=== 2. Exhaustion costs hours and shakes handwriting ===');

  final session = GameSession.create(
    vocabulary: vocabulary,
    houseSeed: 2,
    startDay: 1,
    daySeconds: 24.0,
  );
  final rested = session.writeJournal(_fields(0), 0.1)!;
  final hoursBeforeSleep = session.snapshot.hoursRemaining;
  session.sleep(SleepQuality.short, SleepLocation.chair);
  final hoursAfterShortSleep = session.snapshot.hoursRemaining;
  final tired = session.writeJournal(_fields(1), 0.1)!;

  print(
    'shakiness: rested=${rested.current.shakiness} tired=${tired.current.shakiness}',
  );
  print(
    'hours remaining: before sleep=$hoursBeforeSleep, '
    'right after a short sleep=$hoursAfterShortSleep (budget=$dailyHourBudget)',
  );
  _expect(
    tired.current.shakiness > rested.current.shakiness,
    'exhaustion from a short sleep must shake the next handwriting sample',
  );
  _expect(
    hoursAfterShortSleep < dailyHourBudget,
    'exhaustion must visibly cost hours the next day',
  );
}

void _checkIsolationReducesCorroborators() {
  print('');
  print('=== 3. Isolation reduces available corroborators ===');

  final quiet = DifficultyState();
  final isolated = DifficultyState();
  for (var night = 0; night < 7; night++) {
    quiet.decayOvernight();
    isolated
      ..addDeflectedVisitor()
      ..addShutRooms(3)
      ..addSkippedRation()
      ..decayOvernight();
  }
  print(
    'isolation after a quiet week: ${quiet.isolation.toStringAsFixed(3)}, '
    'after a fully isolated week: ${isolated.isolation.toStringAsFixed(3)} '
    '(cap=$isolationCap, exposure threshold=$isolationExposureThreshold)',
  );
  _expect(
    !quiet.exposesVisitorsToCompression,
    'a quiet week must never elevate exposure',
  );
  _expect(
    isolated.exposesVisitorsToCompression,
    'a fully isolated week must elevate exposure',
  );

  final story = StoryText()
    ..visitors['sample'] = {
      1: {
        'full.1': 'first line',
        'full.2': 'second line',
        'compressed.1': 'short line',
      },
    }
    ..visitorArrivals['sample'] = {
      1: const VisitorArrivalMetadata(hour: 10, order: 0),
    }
    ..claims['visitor:sample:1:full.1'] = const [
      VisitorClaim(field: 'place', value: 'hallway'),
    ]
    ..claims['visitor:sample:1:full.2'] = const [
      VisitorClaim(field: 'time', value: 'morning'),
    ]
    ..claims['visitor:sample:1:compressed.1'] = const [];

  VisitorDirector director() {
    final built = VisitorDirector.build(story);
    final director = visitorDirectorFrom(built);
    _expect(director != null, 'synthetic visitor corpus must build');
    return director!;
  }

  final calm = director()
    ..exposureElevated = quiet.exposesVisitorsToCompression;
  final calmArrival = calm.arrivalsForDay(1).single;
  final calmVisit = calm.begin(calmArrival) as VisitStarted;
  final calmClaims = calmVisit.state.lines.fold<int>(
    0,
    (n, l) => n + l.claims.length,
  );
  _expect(
    calmVisit.state.tier == VisitTier.full,
    'an uncontacted week-1 visitor gets the full tier when exposure is calm',
  );

  final besieged = director()
    ..exposureElevated = isolated.exposesVisitorsToCompression;
  final besiegedArrival = besieged.arrivalsForDay(1).single;
  final besiegedVisit = besieged.begin(besiegedArrival) as VisitStarted;
  final besiegedClaims = besiegedVisit.state.lines.fold<int>(
    0,
    (n, l) => n + l.claims.length,
  );
  _expect(
    besiegedVisit.state.tier == VisitTier.compressed,
    'isolation-elevated exposure forces the compressed tier for the same '
    'visitor',
  );

  print(
    'corroboration claims on offer: calm week=$calmClaims, '
    'isolated week=$besiegedClaims',
  );
  _expect(
    besiegedClaims < calmClaims,
    'a fully isolated week must leave fewer corroborators available',
  );

  final session = GameSession.create(
    vocabulary: Vocabulary.loaded(_source),
    houseSeed: 3,
    startDay: 1,
    daySeconds: 24.0,
  );
  _expect(
    !session.isolationElevatesExposure,
    'a fresh session must not start with exposure elevated',
  );
  for (var i = 0; i < 6; i++) {
    session.recordVisitorFacts([
      const VisitorFact(
        kind: VisitorFactKind.visitorIgnored,
        visitor: 'caller',
        day: 1,
        choice: DoorChoice.ignore,
      ),
    ]);
  }
  print(
    'GameSession.isolationElevatesExposure after 6 deflected visitors: '
    '${session.isolationElevatesExposure}',
  );
  _expect(
    session.isolationElevatesExposure,
    'GameSession must surface the same isolation signal from real visitor '
    'facts, not a duplicated counter',
  );
}

void _checkComplianceFloor(Vocabulary vocabulary) {
  print('');
  print(
    '=== 4. Zero-accuracy floor short-circuits Week 3, exactly once, silently ===',
  );

  final session = GameSession.create(
    vocabulary: vocabulary,
    houseSeed: 4,
    startDay: 1,
    daySeconds: 24.0,
  );
  var trips = 0;
  int? firstTripDay;
  for (var night = 0; night < 25; night++) {
    session.recordVisitorFacts(const [
      VisitorFact(
        kind: VisitorFactKind.visitorIgnored,
        visitor: 'caller',
        day: 1,
        choice: DoorChoice.ignore,
      ),
      VisitorFact(
        kind: VisitorFactKind.visitorIgnored,
        visitor: 'postman',
        day: 1,
        choice: DoorChoice.ignore,
      ),
    ]);
    session.sleep(SleepQuality.long, SleepLocation.bed);
    for (final event in session.drainEvents()) {
      if (event.type == GameSessionEventType.complianceFloorTripped) {
        trips++;
        firstTripDay ??= event.day;
      }
    }
    if (session.snapshot.day > 21) break;
  }
  print(
    'compliance floor tripped $trips time(s), first on day $firstTripDay, '
    'ended on day ${session.snapshot.day}',
  );
  _expect(trips == 1, 'the compliance floor must trip exactly once');
  _expect(
    firstTripDay != null && firstTripDay >= 15,
    'the floor must not fire before Week 3 begins',
  );
  print(
    'journal entries at end (all drift-authored, none from the player): '
    '${session.journal.entries.length}',
  );
  _expect(
    !session.journal.entries.any((entry) => entry.locked),
    'no entry was ever locked, confirming the floor fired without any '
    'protection in place',
  );
}

void main() {
  final vocabulary = Vocabulary.loaded(_source);
  _checkScrutinyDrivesDrifts(vocabulary);
  _checkExhaustionCostsHoursAndShakiness(vocabulary);
  _checkIsolationReducesCorroborators();
  _checkComplianceFloor(vocabulary);
  print('');
  print('q19 tests passed');
}
