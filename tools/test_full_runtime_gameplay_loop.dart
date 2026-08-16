import 'package:quarantine/config.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/story/narrative_state.dart';
import 'package:quarantine/story/narrative_encounter_director.dart';
import 'package:quarantine/story/physical_aftermath_manager.dart';
import 'package:quarantine/story/ending_texture_synthesizer.dart';
import 'package:quarantine/story/timeline_progression_coordinator.dart';
import 'house_fixture.dart';

Never _fail(String message) =>
    throw StateError('Full Runtime Gameplay Loop test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('Running Full Runtime Gameplay Loop End-to-End Simulation...');

  final house = loadAuthoredHouse(seed: 42);
  final narrativeState = NarrativeState();
  final director = NarrativeEncounterDirector(state: narrativeState);
  final aftermath = PhysicalAftermathManager(state: narrativeState);
  final endingSynth = EndingTextureSynthesizer(state: narrativeState);

  final camera = Camera();
  final hall = house.byId('hall')!;
  camera.eye = hall.origin + Vec3(1.0, playerEyeHeight, 1.0);
  camera.fwd = Vec3(0, 0, 1);

  // 1. Simulate 21 Days of Morning Threshold Caller Encounters
  print('Simulating 21 days of gameplay encounters...');
  for (var day = 1; day <= 21; day++) {
    final encounter = director.resolveEncounter(day);
    _expect(encounter != null, 'Day $day encounter must resolve');

    // Choose option 0
    final choice = encounter!.choices.first;
    director.commitChoice(encounter, choice);

    // Verify day job metadata
    final dayJob = TimelineProgressionCoordinator.canonical21Days.firstWhere((j) => j.day == day);
    _expect(dayJob.title.isNotEmpty, 'Day $day must have valid title');
  }

  // 2. Verify Physical Aftermath Focus & Inspection
  print('Verifying physical aftermath focus and inspection...');
  final residues = aftermath.getActiveResidues();
  _expect(residues.isNotEmpty, 'Residues must be active in the house');
  _expect(aftermath.getResiduesForRoom('hall').isNotEmpty, 'Hall must contain active broth aftermath item');

  // Place camera in hall pointing directly at aftermath item
  final hallSize = house.effectiveSize(hall);
  final itemPos = hall.origin + Vec3(hallSize.x * 0.35, 0.6, hallSize.z * 0.35);
  camera.eye = itemPos + Vec3(0, 0.8, 1.2);
  camera.fwd = (itemPos - camera.eye).normalized;

  final focusInHall = resolveFocus(
    camera: camera,
    house: house,
    currentRoom: 'hall',
    aftermathManager: aftermath,
  );
  _expect(focusInHall.kind == FocusKind.aftermath, 'Hall must resolve aftermath focus');
  _expect(focusInHall.prompt?.contains('broth') ?? false, 'Prompt must mention broth jug');

  // 3. Verify Day 21 Ending Texture Synthesis
  print('Verifying Day 21 ending texture synthesis...');
  final ending = endingSynth.synthesizeEnding();
  _expect(ending.endingType == 'compliance', 'Expected compliance ending');
  _expect(ending.measuredFacts.isNotEmpty, 'Measured facts must be recorded');
  _expect(ending.closingTextureText.isNotEmpty, 'Closing texture text must be populated');

  print('Full runtime gameplay loop simulation PASSED with zero errors!');
}
