import 'dart:convert';

import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/journal/journal.dart';
import 'package:quarantine/story/schema.dart';

const _vocab = {
  'who': ['Adler', 'the warden', 'I', 'the broadcast'],
  'verb': ['came to', 'said', 'saw'],
  'object': ['the door', 'something at the window'],
  'place': ['hallway', 'kitchen', 'bedroom'],
  'time': ['morning', 'afternoon', 'night'],
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
  final journal = Journal(vocabulary);

  print('=== vocabularyFields (imported, not retyped) ===');
  print(vocabularyFields);

  print('\n=== 1. compose: accepted and rejected ===');
  final good = _line('Adler', 'came to', 'the door', 'hallway', 'afternoon');
  final bad = _line('Adler', 'came to', 'the door', 'attic', 'afternoon');
  print('inside  vocabulary -> composes=${journal.composes(good)}');
  print('outside vocabulary -> composes=${journal.composes(bad)}  (place=attic)');
  final e1 = journal.write(1, good, 0.2);
  final rejected = journal.write(1, bad, 0.2);
  print('write(good) -> ordinal ${e1!.ordinal}');
  print('write(bad)  -> $rejected');

  print('\n=== 2. ordering requirement stated in the API ===');
  try {
    Vocabulary.loaded((_) => const []);
  } on TextError catch (e) {
    print('unloaded library -> ${e.message.split('.').first}.');
  }

  print('\n=== 3. correction appends, original stays retrievable ===');
  journal.correct(
      e1.ordinal, _line('Adler', 'came to', 'the door', 'kitchen', 'afternoon'), 0.5);
  journal.correct(
      e1.ordinal, _line('Adler', 'came to', 'the door', 'kitchen', 'night'), 0.6);
  for (var i = 0; i < e1.revisions.length; i++) {
    print('  revision $i: ${e1.revisions[i]}');
  }
  print('original == revisions[0]: ${identical(e1.original, e1.revisions[0])}');
  print('current  == revisions.last: ${identical(e1.current, e1.revisions.last)}');

  print('\n=== 4. shakiness is stamped, not computed ===');
  final inserted = journal.insert(4, good)!;
  print('player  line shakiness=${e1.original.shakiness} hand=${e1.original.hand.name}');
  print('inserted line shakiness=${inserted.current.shakiness} '
      'hand=${inserted.current.hand.name}');
  print('correction kept its own stamp: ${e1.revisions[2].shakiness}');

  print('\n=== 5. margin: one warden annotation, no remover ===');
  final first = journal.annotate(
      e1.ordinal, _line('the warden', 'said', 'the door', 'bedroom', 'morning'));
  final second = journal.annotate(e1.ordinal, good);
  print('annotate first=$first second=$second');
  print('margin=${e1.margin} hand=${e1.margin!.hand.name} '
      'shakiness=${e1.margin!.shakiness}');

  print('\n=== 6. siblings ===');
  print("siblings('place','kitchen') -> ${journal.siblings('place', 'kitchen')}");
  print("siblings('time','night')    -> ${journal.siblings('time', 'night')}");

  print('\n=== 7. locks: finite supply, no refund ===');
  final e2 = journal.write(2, good, 0.1)!;
  final e3 = journal.write(3, good, 0.1)!;
  final e4 = journal.write(3, good, 0.1)!;
  final e5 = journal.write(3, good, 0.1)!;
  for (final e in [e1, e2, e3, e4, e5]) {
    print('lock(${e.ordinal})=${journal.lock(e.ordinal)} '
        'entry.locked=${e.locked} remaining=${journal.locksRemaining}');
  }

  print('\n=== 8. deletion leaves a hole in the numbering ===');
  print('ordinals before      : ${journal.ordinals}');
  journal.tearOut(e3.ordinal);
  print('after tearOut(${e3.ordinal}) : ${journal.ordinals}');
  final next = journal.write(6, good, 0.4)!;
  print('next write -> ordinal ${next.ordinal}  (hole at ${e3.ordinal} stays)');
  print('ordinals after       : ${journal.ordinals}');

  print('\n=== 9. an entry dated after the current day ===');
  const currentDay = 7;
  final future = journal.write(8, good, 0.7);
  print('currentDay=$currentDay  write(day: 8) -> ordinal ${future!.ordinal} '
      'day=${future.day}');

  print('\n=== 10. examine seam ===');
  journal.unlock('mantle-kitchen');
  journal.unlock('mantle-bedroom');
  print('unlockedTags=${journal.unlockedTags}');

  journal.read(e2.ordinal, 5);

  print('\n=== 11. save / load round-trip ===');
  final a = jsonEncode(journal.toJson());
  final reloaded = Journal.fromJson(vocabulary, jsonDecode(a) as Map<String, dynamic>);
  final b = jsonEncode(reloaded.toJson());
  print('bytes a=${a.length} b=${b.length}');
  print('byte-identical: ${a == b}');
  var diff = 0;
  for (var i = 0; i < a.length && i < b.length; i++) {
    if (a.codeUnitAt(i) != b.codeUnitAt(i)) diff++;
  }
  print('mismatched bytes: $diff');
  print('ordinals preserved: ${reloaded.ordinals}');
  print('revisions of ${e1.ordinal} preserved in order: '
      '${reloaded[e1.ordinal]!.revisions.map((r) => r.fields['place']).toList()}');
  print('locksRemaining=${reloaded.locksRemaining} '
      'locked(${e1.ordinal})=${reloaded[e1.ordinal]!.locked} '
      'lastReadDay(${e2.ordinal})=${reloaded[e2.ordinal]!.lastReadDay}');
  print('margin preserved: ${reloaded[e1.ordinal]!.margin} '
      'shakiness=${reloaded[e1.ordinal]!.margin!.shakiness}');
  print('stamped shakiness preserved: '
      '${reloaded[e1.ordinal]!.revisions.map((r) => r.shakiness).toList()}');
  print('tags preserved: ${reloaded.unlockedTags}');
  print('next ordinal continues: ${reloaded.write(9, good, 0.1)!.ordinal}');
}
