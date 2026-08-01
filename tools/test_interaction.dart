import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/journal/journal.dart';
import 'package:quarantine/sim/interaction.dart';
import 'package:quarantine/sim/time.dart';

Never _fail(String message) =>
    throw StateError('interaction test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

const _fields = {
  'who': 'warden',
  'verb': 'called',
  'object': 'yesterday',
  'place': 'hall',
  'time': 'dawn',
};

InteractionEngine _engine(String corroborator) {
  final vocabulary = Vocabulary({
    for (final entry in _fields.entries) entry.key: [entry.value, 'other'],
  });
  final journal = Journal(vocabulary);
  journal.write(1, _fields, 0.0, corroborator: corroborator);
  return InteractionEngine(
    journal: journal,
    time: GameTime(dayNumber: 1, dayLengthSeconds: 24),
  );
}

void main() {
  final radio = _engine('broadcast');
  final exact = radio.processRadioConsultation(
    1,
    true,
    'The warden called yesterday in the hall at dawn.',
    fact: WorldFact.radio(
      'The warden called yesterday in the hall at dawn.',
      _fields,
    ),
  );
  _expect(exact.worldConfirms, 'full corroborated radio fact confirms');
  _expect(
    exact.comparison.kind == WorldComparisonKind.exact,
    'full fact is exact',
  );
  _expect(
    radio.journal.getVerifiedToday().single == 1,
    'confirmed citation is recorded',
  );

  final contradictionEngine = _engine('broadcast');
  final contradicted = contradictionEngine.processRadioConsultation(
    1,
    true,
    'The warden called tomorrow in the hall at dawn.',
    fact: WorldFact.radio('The warden called tomorrow in the hall at dawn.', {
      ..._fields,
      'object': 'tomorrow',
    }),
  );
  _expect(!contradicted.worldConfirms, 'conflicting fact is not confirmed');
  _expect(
    contradicted.comparison.kind == WorldComparisonKind.contradiction,
    'field conflict is typed as contradiction',
  );
  _expect(
    contradictionEngine.createHumiliationEvent(
          contradicted,
          InteractionType.radio,
        ) !=
        null,
    'corroborated contradiction creates humiliation',
  );

  final uncorroborated = _engine('broadcast').processVisitorConsultation(
    1,
    true,
    'Mrs Vale',
    'The warden called yesterday.',
    fact: WorldFact.visitor('The warden called yesterday.', {
      'who': 'warden',
      'verb': 'called',
    }),
  );
  _expect(
    !uncorroborated.worldConfirms,
    'uncorroborated visitor cannot confirm',
  );
  _expect(
    uncorroborated.comparison.kind == WorldComparisonKind.partial,
    'partial fact remains weaker',
  );
  _expect(
    _engine(
          'broadcast',
        ).createHumiliationEvent(uncorroborated, InteractionType.visitor) ==
        null,
    'weaker outcome is not humiliation',
  );

  final skipped = _engine(
    'broadcast',
  ).processRadioConsultation(null, false, 'ignored');
  _expect(
    skipped.comparison.kind == WorldComparisonKind.skipped,
    'skipped consultation is typed',
  );
  _expect(!skipped.worldConfirms, 'skipped consultation cannot confirm');
  print('interaction tests passed');
}
