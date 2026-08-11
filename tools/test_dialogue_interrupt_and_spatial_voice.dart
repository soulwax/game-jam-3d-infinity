import 'package:quarantine/ui/dialogue_interrupt_engine.dart';
import 'package:quarantine/ui/spatial_voice_coordinator.dart';

void testDialogueInterruptEngine() {
  print('Testing DialogueInterruptEngine...');
  final valid = DialogueInterruptEngine.validate();
  assert(valid, 'DialogueInterruptEngine.validate() failed');

  const policy = DialogueInterruptPolicy(npcBargeInThresholdMs: 3000, playerBargeInMinChars: 3);
  
  // Test NPC impatience
  final npcEvent = DialogueInterruptEngine.evaluateNpcImpatience(
    policy: policy,
    silenceDurationMs: 3500,
    timestampMs: 1000,
    speakerId: 'Sylvia',
    lineId: 'line1',
    currentText: 'hello',
  );
  assert(npcEvent != null);
  assert(npcEvent!.type == InterruptType.npcImpatience);

  // Test player barge in
  final playerEvent = DialogueInterruptEngine.evaluatePlayerBargeIn(
    policy: policy,
    timestampMs: 2000,
    speakerId: 'Marcus',
    lineId: 'line2',
    truncatedText: 'Wait, I...',
    charsShown: 5,
    silenceDurationMs: 500,
  );
  assert(playerEvent.type == InterruptType.playerBargeIn);

  // Export facts
  final facts = DialogueInterruptEngine.exportNarrativeFacts([npcEvent!, playerEvent]);
  assert(facts['dialogue.interrupt.count'] == '2');
  assert(facts['dialogue.interrupted.Marcus'] == 'true');
  assert(facts['dialogue.interrupted.Sylvia'] == null);

  print('DialogueInterruptEngine OK.');
}

void testSpatialVoiceCoordinator() {
  print('Testing SpatialVoiceCoordinator...');
  final valid = SpatialVoiceCoordinator.validate();
  assert(valid, 'SpatialVoiceCoordinator.validate() failed');

  // Test Direct Mode
  final params1 = SpatialVoiceParams(
    doorPositionX: 0.0,
    doorPositionY: 0.0,
    doorPositionZ: 5.0,
    playerCameraX: 0.0,
    playerCameraY: 0.0,
    playerCameraZ: 0.0,
    playerCameraYawDegrees: 0.0,
    transmissionMode: VoiceTransmissionMode.directThreshold,
  );
  final result1 = SpatialVoiceCoordinator.evaluateSpatialVoice(params1);
  assert(result1.isDirect == true);
  assert(result1.lowpassCutoffHz == 20000.0);
  assert((result1.stereoPan).abs() < 0.001); // 0 pan

  // Test Accessibility Bypass
  final params2 = SpatialVoiceParams(
    doorPositionX: 0.0,
    doorPositionY: 0.0,
    doorPositionZ: 5.0,
    playerCameraX: 0.0,
    playerCameraY: 0.0,
    playerCameraZ: 0.0,
    playerCameraYawDegrees: 0.0,
    transmissionMode: VoiceTransmissionMode.throughLetterbox,
    isAccessibilityVoiceClarityEnabled: true,
  );
  final result2 = SpatialVoiceCoordinator.evaluateSpatialVoice(params2);
  assert(result2.lowpassCutoffHz == 20000.0);
  assert(result2.bandpassHighCutoffHz == 20000.0);
  assert(result2.isDirect == false); // Original mode was letterbox

  print('SpatialVoiceCoordinator OK.');
}

void main() {
  testDialogueInterruptEngine();
  testSpatialVoiceCoordinator();
  print('All tests passed!');
}
