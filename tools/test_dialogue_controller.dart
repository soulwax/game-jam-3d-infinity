import 'package:quarantine/ui/dialogue_controller.dart';

void main() {
  print('Running DialogueController tests...');

  testFullLifecycle();
  testWalkAway();
  testInterrupt();
  testSilenceOption();
  testMultipleLines();
  testIsModalBlocking();
  
  // Also run the built-in validation
  assert(DialogueController.validate());
  print('Built-in validate(): PASS');

  print('All tests passed.');
}

void testFullLifecycle() {
  final controller = DialogueController();
  assert(controller.state.phase == ConversationPhase.idle);

  controller.beginEncounter('npc1', 'Stranger');
  assert(controller.state.phase == ConversationPhase.approaching);

  controller.deliverKnock();
  assert(controller.state.phase == ConversationPhase.approaching);

  const greeting = DialogueLine(
    speakerId: 'npc1',
    speakerName: 'Stranger',
    text: 'Hello?',
    durationMs: 2000,
  );
  controller.deliverGreeting(greeting);
  assert(controller.state.phase == ConversationPhase.greeting);
  assert(controller.state.currentLine == greeting);

  const exchangeLine = DialogueLine(
    speakerId: 'npc1',
    speakerName: 'Stranger',
    text: 'Is anyone home?',
    durationMs: 3000,
  );
  controller.queueLine(exchangeLine);
  assert(controller.state.phase == ConversationPhase.exchange);

  controller.advanceLine();
  assert(controller.state.phase == ConversationPhase.exchange);
  assert(controller.state.currentLine == exchangeLine);

  controller.advanceLine();
  assert(controller.state.phase == ConversationPhase.playerResponse);
  assert(controller.state.currentLine == null);

  const options = [
    DialogueResponseOption(id: 'res1', text: 'Yes, I am here.'),
    DialogueResponseOption(id: 'res2', text: 'Go away.'),
  ];
  controller.presentResponses(options);
  assert(controller.state.responseOptions == options);

  controller.selectResponse('res1');
  assert(controller.state.phase == ConversationPhase.reaction);
  assert(controller.state.selectedResponseId == 'res1');
  assert(controller.getChoiceForNarrative()!.$2 == 'res1');

  const reactionLine = DialogueLine(
    speakerId: 'npc1',
    speakerName: 'Stranger',
    text: 'Good to know.',
    durationMs: 2000,
  );
  controller.deliverReaction(reactionLine);
  assert(controller.state.phase == ConversationPhase.reaction);
  assert(controller.state.currentLine == reactionLine);

  const farewellLine = DialogueLine(
    speakerId: 'npc1',
    speakerName: 'Stranger',
    text: 'Goodbye.',
    durationMs: 1500,
  );
  controller.beginDeparture(farewellLine);
  assert(controller.state.phase == ConversationPhase.departure);
  assert(controller.state.currentLine == farewellLine);

  controller.completeDeparture();
  assert(controller.state.phase == ConversationPhase.lingering);
  assert(controller.state.currentLine == null);

  controller.endEncounter();
  assert(controller.state.phase == ConversationPhase.idle);

  print('testFullLifecycle: PASS');
}

void testWalkAway() {
  final controller = DialogueController();
  controller.beginEncounter('npc1', 'Stranger');
  
  controller.playerWalkAway();
  assert(controller.state.phase == ConversationPhase.departure);
  assert(controller.state.walkAwayRecorded == true);
  
  final walkAwayFlag = controller.getWalkAwayFlag();
  assert(walkAwayFlag != null);
  assert(walkAwayFlag!.$1 == 'npc1');
  
  print('testWalkAway: PASS');
}

void testInterrupt() {
  final controller = DialogueController();
  controller.beginEncounter('npc1', 'Stranger');
  
  assert(controller.getInterruptCount() == 0);
  
  controller.playerInterrupt();
  assert(controller.getInterruptCount() == 1);
  // advanceLine should have transitioned state since there are no pending lines
  assert(controller.state.phase == ConversationPhase.playerResponse);

  print('testInterrupt: PASS');
}

void testSilenceOption() {
  const silenceOpt = DialogueResponseOption(
    id: 'silence',
    text: '...',
    isSilence: true,
    silenceDurationMs: 5000,
  );
  
  assert(silenceOpt.isSilence == true);
  assert(silenceOpt.silenceDurationMs == 5000);
  
  print('testSilenceOption: PASS');
}

void testMultipleLines() {
  final controller = DialogueController();
  controller.beginEncounter('npc1', 'Stranger');
  
  const line1 = DialogueLine(speakerId: 'npc1', speakerName: 'Stranger', text: '1', durationMs: 1000);
  const line2 = DialogueLine(speakerId: 'npc1', speakerName: 'Stranger', text: '2', durationMs: 1000);
  
  controller.queueLine(line1);
  controller.queueLine(line2);
  
  assert(controller.state.pendingLines.length == 2);
  
  controller.advanceLine();
  assert(controller.state.currentLine == line1);
  assert(controller.state.pendingLines.length == 1);
  
  controller.advanceLine();
  assert(controller.state.currentLine == line2);
  assert(controller.state.pendingLines.isEmpty);
  
  controller.advanceLine();
  assert(controller.state.phase == ConversationPhase.playerResponse);
  
  print('testMultipleLines: PASS');
}

void testIsModalBlocking() {
  final controller = DialogueController();
  assert(controller.isModalBlocking == false);
  print('testIsModalBlocking: PASS');
}
