import 'package:quarantine/game/save.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/drift.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/journal/journal.dart';
import 'package:quarantine/visitors/stand_ins.dart';

Never _fail(String message) =>
    throw StateError('stand-in test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

final _vocabulary = Vocabulary({
  'who': ['warden'],
  'verb': ['called'],
  'object': ['yesterday'],
  'place': ['hall'],
  'time': ['dawn'],
});

void main() {
  // eligibleStandIns: only visitors carrying an authored `off.N` tier.
  final visitors = {
    'neighbour': {
      1: {'full.1': 'a', 'off.1': 'b'},
    },
    'sibling': {
      2: {'full.1': 'c', 'compressed.1': 'd'},
    },
    'ayling': {
      1: {'full.1': 'e'},
      9: {'full.1': 'f', 'off.1': 'g'},
    },
  };
  _expect(
    eligibleStandIns(visitors).join(',') == 'ayling,neighbour',
    'only visitors with at least one off tier are eligible, sorted',
  );
  _expect(
    eligibleStandIns(const {}).isEmpty,
    'an empty corpus has no eligible stand-ins',
  );

  // §57.1: zero is the sentinel — no draw, ever, regardless of pool size.
  final eligible = ['ayling', 'caller', 'clerk', 'gas-man', 'neighbour', 'postman'];
  _expect(
    drawStandIns(0, eligible).isEmpty,
    'runSeed 0 must draw nobody',
  );
  _expect(
    drawStandIns(12345, const []).isEmpty,
    'an empty eligible pool must draw nobody regardless of seed',
  );

  // Determinism: the same seed over the same pool always draws the same set.
  final first = drawStandIns(918273, eligible);
  final second = drawStandIns(918273, eligible);
  _expect(
    first.join(',') == second.join(',') && first.toSet().length == first.length,
    'the same seed must draw the same, duplicate-free set every time',
  );

  // Distribution: K is always 0, 2, or 3 (never 1), and lands near 25/50/25
  // over a wide seed sweep.
  final counts = <int, int>{0: 0, 2: 0, 3: 0};
  const sweep = 4000;
  for (var seed = 1; seed <= sweep; seed++) {
    final drawn = drawStandIns(seed, eligible);
    _expect(
      drawn.isEmpty || drawn.length == 2 || drawn.length == 3,
      'K must be 0, 2, or 3, got ${drawn.length} for seed $seed',
    );
    counts[drawn.length] = (counts[drawn.length] ?? 0) + 1;
  }
  final zeroShare = counts[0]! / sweep;
  final twoShare = counts[2]! / sweep;
  final threeShare = counts[3]! / sweep;
  _expect(
    zeroShare > 0.15 && zeroShare < 0.35,
    'K=0 should land near 25%, got ${(zeroShare * 100).toStringAsFixed(1)}%',
  );
  _expect(
    twoShare > 0.40 && twoShare < 0.60,
    'K=2 should land near 50%, got ${(twoShare * 100).toStringAsFixed(1)}%',
  );
  _expect(
    threeShare > 0.15 && threeShare < 0.35,
    'K=3 should land near 25%, got ${(threeShare * 100).toStringAsFixed(1)}%',
  );

  // §57.2: journal drift seeds are runSeed XOR the existing per-day formula,
  // so different run seeds pick different candidates on the same night.
  {
    final driftVocabulary = Vocabulary({
      'who': ['warden'],
      'verb': ['called'],
      'object': ['yesterday'],
      'place': ['hall'],
      'time': ['dawn', 'noon', 'dusk', 'midnight'],
    });
    final fields = {
      'who': 'warden',
      'verb': 'called',
      'object': 'yesterday',
      'place': 'hall',
      'time': 'dawn',
    };
    Journal freshJournalAt(int day) {
      final journal = Journal(driftVocabulary);
      for (var i = 0; i < 6; i++) {
        journal.write(day, fields, 0.0);
      }
      return journal;
    }

    final atZero = freshJournalAt(1)..driftNight(2, runSeed: 0);
    final atZeroAgain = freshJournalAt(1)..driftNight(2, runSeed: 0);
    _expect(
      atZero.entries.map((e) => e.current.toString()).join('|') ==
          atZeroAgain.entries.map((e) => e.current.toString()).join('|'),
      'runSeed 0 must reproduce the pre-seed drift deterministically',
    );

    var sawDifference = false;
    final baseline = atZero.entries.map((e) => e.current.toString()).join('|');
    for (final seed in [1, 2, 3, 5, 8, 13, 21, 34]) {
      final withSeed = freshJournalAt(1)..driftNight(2, runSeed: seed);
      final rendered = withSeed.entries.map((e) => e.current.toString()).join('|');
      if (rendered != baseline) sawDifference = true;
    }
    _expect(
      sawDifference,
      'at least one nonzero runSeed must pick a different drift target than seed 0',
    );
  }

  // GameSession: runSeed persists through a save/restore round trip, and an
  // old save with no `runSeed` key restores to the zero sentinel.
  {
    final session = GameSession.create(
      vocabulary: _vocabulary,
      houseSeed: 5,
      runSeed: 918273,
      daySeconds: 24.0,
    );
    _expect(session.runSeed == 918273, 'create() must carry the given runSeed');

    final snapshot = session.toSaveSnapshot();
    final restored = GameSession.restore(vocabulary: _vocabulary, snapshot: snapshot);
    _expect(
      restored.runSeed == 918273,
      'runSeed must round-trip through a save/restore boundary',
    );

    final legacyRun = Map<String, dynamic>.from(snapshot.run)..remove('runSeed');
    final legacySnapshot = SaveSnapshot(run: legacyRun, meta: const {});
    final legacyRestored = GameSession.restore(
      vocabulary: _vocabulary,
      snapshot: legacySnapshot,
    );
    _expect(
      legacyRestored.runSeed == 0,
      'a save with no runSeed key must restore to the zero sentinel',
    );
  }

  print('stand-in draw tests passed: ${counts[0]}/${counts[2]}/${counts[3]} '
      'over $sweep seeds');
}
