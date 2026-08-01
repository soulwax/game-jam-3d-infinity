import 'package:quarantine/story/schema.dart';
import 'package:quarantine/story/unverifiable_notice.dart';
import 'package:quarantine/visitors/ambient.dart';

Never _fail(String message) =>
    throw StateError('ambient visit test failed: $message');
void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final story = parseStory({
    'visitor.txt': '''
@visitor ragman
@day 13
@ambient 17 street full.1
@tier full.1
The cart passes after dark.
''',
  }, complete: false);
  final director = AmbientDirector.build(story);
  _expect(
    director.due(13, 16.9).isEmpty,
    'ambient event waits for authored hour',
  );
  final due = director.due(13, 17);
  _expect(
    due.single.channel == 'street' &&
        due.single.text == 'The cart passes after dark.',
    'ambient event uses explicit authored channel and line',
  );
  director.markDelivered(due.single);
  _expect(director.due(13, 23).isEmpty, 'delivered event does not repeat');
  final restored = AmbientDirector.build(story)
    ..restoreDelivered(director.deliveredIds);
  _expect(restored.due(13, 23).isEmpty, 'delivered state survives restore');
  print('ambient visitor delivery is explicit, timed, and non-repeating');

  _expect(
    pickUnverifiable(const [], 12345, 16) == null,
    'a day with no authored line surfaces nothing',
  );
  _expect(
    pickUnverifiable(const ['only line'], 12345, 16) == 'only line',
    'a single-line day never needs the seed',
  );
  final twoLines = const ['first line', 'second line'];
  final pickA = pickUnverifiable(twoLines, 111, 15);
  final pickAAgain = pickUnverifiable(twoLines, 111, 15);
  _expect(pickA == pickAAgain, 'the same seed and day always pick the same line');
  var sawBothLines = false;
  for (var seed = 0; seed < 50; seed++) {
    final picked = pickUnverifiable(twoLines, seed, 15);
    if (picked == 'second line') sawBothLines = true;
  }
  _expect(sawBothLines, 'a seed sweep must eventually pick the other line');
  print('unverifiable notice picking is deterministic and seed-varied');
}
