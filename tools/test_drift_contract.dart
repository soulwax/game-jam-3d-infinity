import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/journal/journal.dart';
import 'package:quarantine/journal/drift.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

const _vocabulary = {
  'who': ['I', 'Adler'],
  'verb': ['saw', 'heard'],
  'object': ['a door', 'a sound'],
  'place': ['hall', 'kitchen'],
  'time': ['morning', 'night'],
};

Map<String, String> _line(int index) => {
  'who': index.isEven ? 'I' : 'Adler',
  'verb': index.isEven ? 'saw' : 'heard',
  'object': index.isEven ? 'a door' : 'a sound',
  'place': index.isEven ? 'hall' : 'kitchen',
  'time': index.isEven ? 'morning' : 'night',
};

void main() {
  final journal = Journal(Vocabulary(_vocabulary));
  final entries = [
    for (var index = 0; index < 4; index++) journal.write(2, _line(index), 0)!,
  ];
  journal.driftNight(4);
  final drifted = entries.where((entry) => entry.revisions.length > 1).toList();
  _expect(drifted.length == 2, 'Day 4 must drift two distinct entries');
  _expect(
    drifted.every((entry) => entry.revisions.length == 2),
    'a nightly pass must not drift one entry twice',
  );
  final protected = entries.first;
  protected.lastReadDay = 4;
  final before = protected.revisions.length;
  journal.driftNight(4);
  _expect(
    protected.revisions.length == before,
    'an entry read today remains absolutely protected',
  );
  print('nightly drifts are distinct, deterministic, and respect attention');
}
