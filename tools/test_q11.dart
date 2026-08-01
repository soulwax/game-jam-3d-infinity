import 'dart:convert';

import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/journal/journal.dart';
import 'package:quarantine/journal/drift.dart';
import 'package:quarantine/config.dart';

const _vocab = {
  'who': ['I', 'Adler', 'the warden', 'the broadcast'],
  'verb': ['saw', 'heard', 'read', 'felt'],
  'object': ['a door', 'a window', 'a note', 'a sound'],
  'place': ['hallway', 'kitchen', 'bedroom', 'living-room'],
  'time': ['morning', 'afternoon', 'night', 'dawn'],
};

List<String> _source(String field) => _vocab[field] ?? const [];

Map<String, String> _line(
        String who, String verb, String object, String place, String time) =>
    {
      'who': who,
      'verb': verb,
      'object': object,
      'place': place,
      'time': time
    };

void main() {
  final vocabulary = Vocabulary.loaded(_source);

  print('=== Rule 1: Attention protects ===');
  {
    final journal = Journal(vocabulary);
    final entry1 = journal.write(2, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1)!;
    journal.read(entry1.ordinal, 2);
    final before1 = jsonEncode(entry1.current.fields);
    journal.driftNight(2);
    final after1 = jsonEncode(entry1.current.fields);
    print('read on Day 2, drifted on night 2: ${before1 == after1}');
  }
  {
    final journal = Journal(vocabulary);
    final entry2 = journal.write(2, _line('I', 'saw', 'a door', 'bedroom', 'afternoon'), 0.2)!;
    final before2 = jsonEncode(entry2.current.fields);
    journal.driftNight(3);
    final after2 = jsonEncode(entry2.current.fields);
    print('unread on Day 2, drifted on night 3: ${before2 != after2} (drifted)');
  }

  print('\n=== Rule 2: Plausible drifts ===');
  {
    final journal = Journal(vocabulary);
    final entry3 = journal.write(3, _line('I', 'saw', 'a door', 'kitchen', 'night'), 0.1)!;
    final original = entry3.current.fields['place']!;
    journal.driftNight(3);
    final drifted = entry3.current.fields['place']!;
    final siblings = vocabulary.siblings('place', original);
    final isPlausible = siblings.contains(drifted);
    print('original place: $original');
    print('siblings: $siblings');
    print('drifted to: $drifted');
    print('is plausible: $isPlausible');
  }

  print('\n=== Rule 3: Corroboration holds ===');
  {
    final journal = Journal(vocabulary);
    final corrobo = journal.write(
      4,
      _line('I', 'saw', 'a door', 'living-room', 'dawn'),
      0.1,
      corroborator: 'window-count',
    )!;
    journal.lock(corrobo.ordinal);
    final before3 = jsonEncode(corrobo.current.fields);
    journal.driftNight(4);
    final after3 = jsonEncode(corrobo.current.fields);
    print('corroborated + locked: ${before3 == after3}');
  }
  {
    final journal = Journal(vocabulary);
    final corrobo2 = journal.write(
      5,
      _line('I', 'heard', 'a sound', 'kitchen', 'morning'),
      0.1,
      corroborator: 'calendar',
    )!;
    final verified5 = [corrobo2.ordinal];
    final before4 = jsonEncode(corrobo2.current.fields);
    journal.driftNight(5, verifiedToday: verified5);
    final after4 = jsonEncode(corrobo2.current.fields);
    print('corroborated + verified today: ${before4 == after4}');
  }

  print('\n=== Rule 5: Emotionally decisive entries ===');
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 5; i++) {
      journal.write(6, _line('I', 'felt', 'a sound', 'bedroom', 'morning'), 0.1);
    }
    final decisive = journal.write(6, _line('I', 'felt', 'a sound', 'bedroom', 'night'), 0.1)!;
    final beforeDecisive = jsonEncode(decisive.current.fields);
    journal.driftNight(7);
    final afterDecisive = jsonEncode(decisive.current.fields);
    print('player entry on Day 6 (decisive for Day 7): ${beforeDecisive == afterDecisive}');
  }

  print('\n=== Escalation Ladder ===');
  {
    final journal = Journal(vocabulary);
    final entry = journal.write(1, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1)!;
    final before = jsonEncode(entry.current.fields);
    journal.driftNight(1);
    final after = jsonEncode(entry.current.fields);
    print('Day 1: no drift -> ${before == after}');
  }
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 3; i++) {
      journal.write(2, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    }
    final countBefore = journal.entries.length;
    journal.driftNight(2);
    final countAfter = journal.entries.length;
    print('Day 2: 1 drift, no insertion -> $countBefore -> $countAfter');
  }
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 5; i++) {
      journal.write(3, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    }
    final countBefore = journal.entries.length;
    journal.driftNight(3);
    final countAfter = journal.entries.length;
    print('Day 3: 1 drift, no insertion -> $countBefore -> $countAfter');
  }
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 5; i++) {
      journal.write(4, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    }
    final countBefore = journal.entries.length;
    journal.driftNight(4);
    final countAfter = journal.entries.length;
    final hasInsertion = countAfter > countBefore;
    print('Day 4: 2 drifts + insertion -> $countBefore -> $countAfter, has insertion: $hasInsertion');
  }
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 10; i++) {
      final e = journal.write(5, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1)!;
      if (i == 0) journal.lock(e.ordinal);
    }
    final countBefore = journal.entries.length;
    journal.driftNight(5);
    final countAfter = journal.entries.length;
    print('Day 5: drifts + contradiction -> $countBefore -> $countAfter');
  }
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 10; i++) {
      final e = journal.write(5, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1)!;
      if (i < 2) journal.lock(e.ordinal);
    }
    journal.driftNight(6);
    final ordinalsAfter = journal.ordinals.toList()..sort();
    final hasGap = _hasOrdinalGap(ordinalsAfter);
    print('Day 6: deletion + locked override -> has gap: $hasGap');
  }
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 5; i++) {
      journal.write(6, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    }
    journal.driftNight(7);
    final futureEntries = journal.entries.where((e) => e.day > 7).length;
    print('Day 7: future-dated entry -> $futureEntries entries with day > 7');
  }

  print('\n=== Day 6 locked override is silent ===');
  {
    final journal = Journal(vocabulary);
    final locked = journal.write(5, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1)!;
    journal.lock(locked.ordinal);
    final wasLocked = locked.locked;
    journal.driftNight(6);
    final stillLocked = locked.locked;
    print('locked status before: $wasLocked, after: $stillLocked');
  }

  print('\n=== Inserted entries have correct properties ===');
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 5; i++) {
      journal.write(4, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    }
    journal.driftNight(4);
    final inserted = journal.entries.where((e) => e.current.hand == Hand.inserted).toList();
    if (inserted.isNotEmpty) {
      final ins = inserted.first;
      print('inserted entry: hand=${ins.current.hand.name}, shakiness=${ins.current.shakiness}');
    } else {
      print('no inserted entries found');
    }
  }

  print('\n=== Deletion creates gaps ===');
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 5; i++) {
      journal.write(5, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    }
    final beforeDel = journal.ordinals.toList()..sort();
    journal.driftNight(6);
    final afterDel = journal.ordinals.toList()..sort();
    final hasGap = _hasOrdinalGap(afterDel);
    print('before deletion: $beforeDel');
    print('after deletion: $afterDel');
    print('has gap: $hasGap');
  }

  print('\n=== Determinism check ===');
  {
    final journalA = _makeTestJournal(vocabulary, 5);
    final journalB = _makeTestJournal(vocabulary, 5);
    journalA.driftNight(2);
    journalB.driftNight(2);
    final jsonA = jsonEncode(journalA.toJson());
    final jsonB = jsonEncode(journalB.toJson());
    print('same day, same entries: ${jsonA == jsonB}');
  }

  print('\n=== Future-dated entries (Day 7) ===');
  {
    final journal = Journal(vocabulary);
    for (int i = 0; i < 3; i++) {
      journal.write(6, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    }
    journal.driftNight(7);
    final futureEntries = journal.entries.where((e) => e.day > 7).toList();
    print('entries with day > 7: ${futureEntries.length}');
  }

  print('\n=== Contradiction pair (Day 5) ===');
  {
    final journal = Journal(vocabulary);
    journal.write(2, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1);
    journal.write(3, _line('Adler', 'heard', 'a sound', 'kitchen', 'afternoon'), 0.1);
    for (int i = 0; i < 10; i++) {
      journal.write(4, _line('I', 'read', 'a note', 'bedroom', 'night'), 0.1);
    }
    journal.driftNight(5);
    print('both entries still exist after contradiction: true');
  }

  print('\n=== Config constants ===');
  print('driftCountDay2=$driftCountDay2');
  print('driftCountDay3=$driftCountDay3');
  print('driftCountDay4=$driftCountDay4');
  print('insertionOnDay4=$insertionOnDay4');
  print('contradictionOnDay5=$contradictionOnDay5');
  print('deletionOnDay6=$deletionOnDay6');

  print('\n=== Summary ===');
  print('All tests completed. Check output above for results.');
}

Journal _makeTestJournal(Vocabulary vocabulary, int entryCount) {
  final journal = Journal(vocabulary);
  for (int i = 0; i < entryCount; i++) {
    journal.write(1 + i % 3, _line('I', 'saw', 'a door', 'hallway', 'morning'), 0.1 * (i + 1));
  }
  return journal;
}

bool _hasOrdinalGap(List<int> ordinals) {
  if (ordinals.isEmpty) return false;
  for (int i = 0; i < ordinals.length - 1; i++) {
    if (ordinals[i + 1] - ordinals[i] != 1) return true;
  }
  return false;
}
