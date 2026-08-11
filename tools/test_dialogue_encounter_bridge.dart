import 'package:quarantine/ui/dialogue_controller.dart';
import 'package:quarantine/ui/dialogue_encounter_bridge.dart';
import 'package:quarantine/story/character_roster_registry.dart';
import 'package:quarantine/story/narrative_state.dart';

void main() {
  print('Testing DialogueEncounterBridge...');

  final controller = DialogueController();
  final registry = CharacterRosterRegistry();
  final bridge = DialogueEncounterBridge(
    controller: controller,
    registry: registry,
  );

  assert(!bridge.isEncounterActive, 'Encounter should not be active initially.');

  // Test Visitor Encounter Start
  bridge.startVisitorEncounter(
    visitorId: 'iris',
    openingLine: 'Are you there?',
    doorX: 5.0,
    doorY: 0.0,
    doorZ: 5.0,
    playerX: 0.0,
    playerY: 0.0,
    playerZ: 0.0,
    playerYawDeg: 45.0,
  );

  assert(bridge.isEncounterActive, 'Encounter should be active after start.');
  assert(bridge.controllerState.currentLine?.text == 'Are you there?', 'Current line should match opening.');
  
  // Test Audio Spatialization Settings
  final audioSettings = bridge.currentAudioSettings;
  assert(audioSettings.lowpassCutoffHz == 1100.0, 'Default transmission mode should be throughDoorClosed with lowpass 1100.');
  assert(audioSettings.isDirect == false, 'Should not be direct transmission.');
  
  // Test Response Submission
  final narrativeState = NarrativeState();
  bridge.submitPlayerResponse(
    'response_1',
    narrativeState: narrativeState,
    reactionId: 'reaction_123',
  );
  
  assert(bridge.controllerState.selectedResponseId == 'response_1', 'Response ID should be selected in controller.');
  assert(narrativeState.choiceFor('reaction_123') == 'response_1', 'Narrative state should record choice.');
  assert(narrativeState.hasFlag('last-reaction', 'reaction_123'), 'Narrative state should record last reaction.');

  // Test Walk Away
  bridge.handlePlayerWalkAway(
    narrativeState: narrativeState,
    currentDay: 4,
  );
  assert(bridge.controllerState.walkAwayRecorded == true, 'Controller should record walk away.');
  assert(narrativeState.hasFlag('ignored.iris.4'), 'Narrative state should record ignored visit for day 4.');
  
  // Test toJson
  final jsonMap = bridge.toJson();
  assert(jsonMap.containsKey('controllerState'), 'JSON should contain controllerState.');
  assert(jsonMap.containsKey('audioSettings'), 'JSON should contain audioSettings.');
  
  // Test class level validation
  assert(DialogueEncounterBridge.validate(), 'Static validate method should pass.');

  print('All tests passed for DialogueEncounterBridge.');
}
