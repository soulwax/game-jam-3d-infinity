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
  check(state.hasFlag('residue.pears', 'sideboard'), 'Pear residue placed on sideboard');

  // 2. Test Callback Line Replacement for Day 19
  final day19Line = director.resolveCallbackLine(
    defaultLine: 'I brought no pears today.',
    flagKey: 'denise.pears',
    expectedValue: 'taken',
    replacementLine: 'I brought none today. You had the last before they turned.',
  );
  check(
    day19Line == 'I brought none today. You had the last before they turned.',
    'Callback replacement line resolved cleanly from committed narrative fact',
  );

  // 3. Resolve Day 3 Encounter (Sylvia Certificate)
  final encDay3 = director.resolveEncounter(3);
  check(encDay3 != null, 'Day 3 encounter resolved');
  check(encDay3!.visitor == VisitorId.sylvia, 'Visitor is Sylvia');

  // 4. Resolve Day 5 Encounter (Sowerby Coal)
  final encDay5 = director.resolveEncounter(5);
  check(encDay5 != null, 'Day 5 encounter resolved');
  check(encDay5!.visitor == VisitorId.sowerby, 'Visitor is Sowerby');

  // Non-encounter day returns null
  check(director.resolveEncounter(1) == null, 'Day 1 has no threshold encounter');

  print('NarrativeEncounterDirector test passed cleanly!');
}
