// Unit test for NarrativeEncounterDirector (NAR-03..05 / Section 21.8).
//
// Verifies:
//  1. Encounter resolution for Days 2, 3, and 5 with canonical prompts and choices.
//  2. Choice commitment atomically updates NarrativeState flags and residue facts.
//  3. Callback line replacement resolves conditional variants correctly.

import 'package:quarantine/story/narrative_encounter_director.dart';
import 'package:quarantine/story/narrative_state.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final state = NarrativeState();
  final director = NarrativeEncounterDirector(state: state);

  // 1. Resolve Day 2 Encounter (Denise Pears)
  final encDay2 = director.resolveEncounter(2);
  check(encDay2 != null, 'Day 2 encounter resolved');
  check(encDay2!.visitor == VisitorId.denise, 'Visitor is Denise');
  check(encDay2.choices.length == 2, 'Day 2 has 2 choices');

  // Choose to take pears
  final takeChoice = encDay2.choices.firstWhere((c) => c.choiceId == 'take');
  director.commitChoice(encDay2, takeChoice);

  check(state.hasFlag('denise.pears', 'taken'), 'Denise pears fact committed');
  check(
    state.hasFlag('residue.pears', 'sideboard'),
    'Pear residue placed on sideboard',
  );

  // The next domestic visit should remember the choice without changing the
  // underlying day matrix or inventing a new branch.
  final callbackDay9 = director.resolveEncounter(9);
  check(callbackDay9 != null, 'Day 9 callback encounter resolved');
  check(
    callbackDay9!.callbackSource == 'denise.pears=taken',
    'Day 9 exposes the pear callback source',
  );
  check(
    callbackDay9.promptLine.contains('pears were good'),
    'Day 9 prompt carries the ordinary pear memory',
  );

  // 2. Test Callback Line Replacement for Day 19
  final day19Line = director.resolveCallbackLine(
    defaultLine: 'I brought no pears today.',
    flagKey: 'denise.pears',
    expectedValue: 'taken',
    replacementLine:
        'I brought none today. You had the last before they turned.',
  );
  check(
    day19Line == 'I brought none today. You had the last before they turned.',
    'Callback replacement line resolved cleanly from committed narrative fact',
  );

  final lateState = NarrativeState(
    flags: {
      'ashworth.compact': 'accepted',
      'ashworth.taps': 'confirmed',
      'sylvia.spare_room': 'accessible',
      'hallow.tremor': 'normal',
      'ashworth.rhythm': 'checked_comfort',
      'denise.docket': 'betrayed',
    },
  );
  final lateDirector = NarrativeEncounterDirector(state: lateState);
  const callbackExpectations = <int, String>{
    7: 'ashworth.compact=accepted',
    14: 'ashworth.taps=confirmed',
    17: 'sylvia.spare_room=accessible',
    18: 'hallow.tremor=normal',
    20: 'ashworth.rhythm=checked_comfort',
    21: 'denise.docket=betrayed',
  };
  for (final entry in callbackExpectations.entries) {
    final callback = lateDirector.resolveEncounter(entry.key);
    check(callback != null, 'Day ${entry.key} callback encounter resolved');
    check(
      callback!.callbackSource == entry.value,
      'Day ${entry.key} callback source is ${entry.value}',
    );
  }

  // 3. Resolve Day 3 Encounter (Sylvia Certificate)
  final encDay3 = director.resolveEncounter(3);
  check(encDay3 != null, 'Day 3 encounter resolved');
  check(encDay3!.visitor == VisitorId.sylvia, 'Visitor is Sylvia');

  // 4. Resolve Day 5 Encounter (Sowerby Coal)
  final encDay5 = director.resolveEncounter(5);
  check(encDay5 != null, 'Day 5 encounter resolved');
  check(encDay5!.visitor == VisitorId.sowerby, 'Visitor is Sowerby');

  // The opening threshold is an authored encounter too; the old test used to
  // describe it as absent and silently under-tested the first human bid.
  final opening = director.resolveEncounter(1);
  check(opening != null, 'Day 1 opening encounter resolved');
  check(opening!.visitor == VisitorId.mrsAshworth, 'Day 1 is Mrs Ashworth');

  print('NarrativeEncounterDirector test passed cleanly!');
}
