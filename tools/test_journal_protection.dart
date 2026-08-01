import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/journal/journal.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

const _vocabulary = {
  'who': ['I'],
  'verb': ['saw'],
  'object': ['a door'],
  'place': ['hall'],
  'time': ['morning'],
};

void main() {
  final journal = Journal(Vocabulary(_vocabulary));
  final fields = {
    'who': 'I',
    'verb': 'saw',
    'object': 'a door',
    'place': 'hall',
    'time': 'morning',
  };
  final first = journal.write(1, fields, 0)!;
  final second = journal.write(1, fields, 0)!;
  _expect(journal.verifyToday(first.ordinal), 'existing entry must verify');
  _expect(journal.verifyToday(second.ordinal), 'second entry must verify');
  _expect(
    journal.getVerifiedToday().join(',') ==
        '${first.ordinal},${second.ordinal}',
    'citations must accumulate in first-cited order',
  );
  _expect(journal.verifyToday(first.ordinal), 're-citing remains valid');
  _expect(
    journal.getVerifiedToday().length == 2,
    're-citing must not duplicate protection',
  );
  _expect(!journal.verifyToday(999), 'unknown entries must not verify');
  journal.setVerifiedToday([second.ordinal, second.ordinal, 999]);
  _expect(
    journal.getVerifiedToday().join(',') == '${second.ordinal}',
    'restored protection must be unique and valid',
  );
  print('daily journal protection is cumulative, unique, and entry-backed');
}
