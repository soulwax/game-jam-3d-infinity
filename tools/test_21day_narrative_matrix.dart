import 'package:quarantine/story/narrative_state.dart';
import 'package:quarantine/story/narrative_encounter_director.dart';
import 'package:quarantine/story/physical_aftermath_manager.dart';
import 'package:quarantine/story/ending_texture_synthesizer.dart';

Never _fail(String message) =>
    throw StateError('21-Day Narrative Matrix test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('Testing complete 21-day narrative encounter matrix...');

  final state = NarrativeState();
  final director = NarrativeEncounterDirector(state: state);
  final aftermath = PhysicalAftermathManager(state: state);
  final synthesizer = EndingTextureSynthesizer(state: state);

  // 1. Verify all 21 days have authored encounters
  for (var day = 1; day <= 21; day++) {
    final encounter = director.resolveEncounter(day);
    _expect(encounter != null, 'Day $day must resolve a non-null active encounter');
    _expect(encounter!.day == day, 'Encounter day must match $day');
    _expect(encounter.promptLine.isNotEmpty, 'Day $day promptLine must not be empty');
    _expect(encounter.choices.isNotEmpty, 'Day $day must have at least one choice option');
    _expect(encounter.choices.length >= 2, 'Day $day must offer at least 2 branching choices');
  }

  // 2. Simulate Compliance playthrough (Accepting all community/official choices)
  for (var day = 1; day <= 21; day++) {
    final encounter = director.resolveEncounter(day)!;
    // Pick choice 0 (compliant/accommodating option)
    director.commitChoice(encounter, encounter.choices[0]);
  }

  _expect(state.hasFlag('ashworth.compact', 'accepted'), 'Day 1 broth compact accepted');
  _expect(state.hasFlag('denise.pears', 'taken'), 'Day 2 pears taken in');
  _expect(state.hasFlag('sylvia.certificate', 'granted'), 'Day 3 mill certificate granted');
  _expect(state.hasFlag('ending.choice', 'emerged'), 'Day 21 emerged into world');

  // Verify Physical Aftermath items generated
  final residues = aftermath.getActiveResidues();
  _expect(residues.isNotEmpty, 'Residues must be populated after choices');
  _expect(residues.any((r) => r.id == 'residue-broth'), 'Broth jug present in hall');
  _expect(residues.any((r) => r.id == 'residue-pears-sideboard'), 'Pears on sideboard');
  _expect(residues.any((r) => r.id == 'residue-certificate'), 'Certificate in living room');

  // Verify Compliance Ending synthesis
  final complianceEnding = synthesizer.synthesizeEnding();
  _expect(complianceEnding.endingType == 'compliance', 'Expected compliance ending archetype');
  _expect(complianceEnding.measuredFacts.length >= 4, 'Compliance ending contains measured facts');
  _expect(complianceEnding.closingTextureText.contains('Ministry ledger'), 'Closing texture text valid');

  // 3. Simulate Rupture playthrough in a fresh state
  final ruptureState = NarrativeState();
  final ruptureDirector = NarrativeEncounterDirector(state: ruptureState);
  final ruptureSynthesizer = EndingTextureSynthesizer(state: ruptureState);

  for (var day = 1; day <= 21; day++) {
    final encounter = ruptureDirector.resolveEncounter(day)!;
    // Pick choice 1 (defiant/reclusive option)
    ruptureDirector.commitChoice(encounter, encounter.choices[1]);
  }

  final ruptureEnding = ruptureSynthesizer.synthesizeEnding();
  _expect(ruptureEnding.endingType == 'rupture', 'Expected rupture ending archetype');
  _expect(ruptureEnding.closingTextureText.contains('quiet, cold street'), 'Rupture texture valid');

  print('All 21-day narrative matrix, physical aftermath, and ending synthesis tests passed!');
}
