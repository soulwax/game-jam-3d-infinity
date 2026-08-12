import 'package:quarantine/ui/p5_gui_models.dart';
import 'package:quarantine/ui/gameplay_dialogue_coordinator.dart';
import 'package:quarantine/ui/dialogue_choice_presenter.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — CANVAS P5 GUI & NUMERIC DIALOGUE CHOICES TEST SUITE');
  print('========================================================================');

  // 1. Test Numeric Dialogue Key Routing (1-N)
  print('Testing Numeric Dialogue Key Routing (Digit1..DigitN, Numpad1..NumpadN)...');
  final coordinator = GameplayDialogueCoordinator();
  coordinator.setDialogue(
    speaker: 'Dr. Evans',
    text: 'Please step back from the threshold.',
    responseChoices: ['Open the door', 'Speak through letterbox', 'Remain silent'],
  );

  int? selectedChoiceIndex;
  String? selectedChoiceText;
  coordinator.onChoiceSelected = (index, text) {
    selectedChoiceIndex = index;
    selectedChoiceText = text;
  };

  // Test Digit1 -> 0 ('Open the door')
  final consumed1 = coordinator.handleNumericKey('Digit1');
  if (!consumed1 || selectedChoiceIndex != 0 || selectedChoiceText != 'Open the door') {
    throw StateError('Digit1 failed to select choice 0: $selectedChoiceIndex, $selectedChoiceText');
  }

  // Test Digit3 -> 2 ('Remain silent')
  final consumed3 = coordinator.handleNumericKey('Digit3');
  if (!consumed3 || selectedChoiceIndex != 2 || selectedChoiceText != 'Remain silent') {
    throw StateError('Digit3 failed to select choice 2: $selectedChoiceIndex, $selectedChoiceText');
  }

  // Test Numpad2 -> 1 ('Speak through letterbox')
  final consumedNum2 = coordinator.handleNumericKey('Numpad2');
  if (!consumedNum2 || selectedChoiceIndex != 1 || selectedChoiceText != 'Speak through letterbox') {
    throw StateError('Numpad2 failed to select choice 1: $selectedChoiceIndex, $selectedChoiceText');
  }

  // Test Out-of-bounds Digit (Digit9 when only 3 choices exist) -> false
  final consumedOut = coordinator.handleNumericKey('Digit9');
  if (consumedOut) {
    throw StateError('Digit9 must not be consumed when choice count is 3');
  }

  // 2. Test Typewriter Text Reveal Progression
  print('Testing Typewriter Text Reveal Calculation...');
  coordinator.setDialogue(
    speaker: 'Visitor',
    text: 'A very long dialogue sentence to test typewriter pacing and characters.',
    responseChoices: const [],
  );
  if (coordinator.textRevealProgress != 0.0) {
    throw StateError('Initial textRevealProgress must be 0.0');
  }

  // Advance by 0.5s at 35 chars/sec
  coordinator.update(0.5);
  final renderState1 = coordinator.toRenderState();
  if (renderState1.revealedText.isEmpty || renderState1.revealedText.length >= coordinator.fullText.length) {
    throw StateError('Intermediate revealedText length unexpected: "${renderState1.revealedText}"');
  }

  // Advance to completion (3.0s)
  coordinator.update(3.0);
  final renderStateComplete = coordinator.toRenderState();
  if (renderStateComplete.revealedText != coordinator.fullText) {
    throw StateError('Completed revealed text must match fullText');
  }

  // 3. Test Canvas HitBox Hit-Testing
  print('Testing Canvas Choice HitBox Hit-Testing...');
  const hitBox1 = CanvasHitBox(
    id: 'choice-1',
    index: 0,
    left: 100.0,
    top: 200.0,
    width: 300.0,
    height: 40.0,
    text: 'First Choice',
  );
  if (!hitBox1.contains(150.0, 220.0)) {
    throw StateError('HitBox must contain interior point (150, 220)');
  }
  if (hitBox1.contains(50.0, 220.0) || hitBox1.contains(150.0, 300.0)) {
    throw StateError('HitBox must reject exterior points');
  }

  // 4. Test Formatted Dialogue Option Presenter with Numeric Badges
  print('Testing DialogueChoicePresenter Numeric Option Formatting...');
  const rawOptions = [
    DialogueResponseOption(id: 'opt-agree', text: 'I understand.', isSilence: false),
    DialogueResponseOption(id: 'opt-question', text: 'Who sent you?', isSilence: false),
    DialogueResponseOption(id: 'opt-silence', text: '...', isSilence: true),
  ];
  final formatted = DialogueChoicePresenter.formatOptions(rawOptions);
  if (formatted.length != 3) {
    throw StateError('Formatted options count mismatch: ${formatted.length}');
  }
  if (formatted[0].index != 1 || formatted[0].shortcutKey != 'Digit1') {
    throw StateError('First option must have index 1 and Digit1 shortcut');
  }
  if (formatted[1].index != 2 || formatted[1].shortcutKey != 'Digit2') {
    throw StateError('Second option must have index 2 and Digit2 shortcut');
  }
  if (!formatted[2].isSilence || formatted[2].shortcutKey != 'Space') {
    throw StateError('Silence option must map to Space shortcut');
  }

  print('========================================================================');
  print('✓ CANVAS P5 GUI & NUMERIC DIALOGUE CHOICES CERTIFIED (4/4 SUB-SYSTEMS)');
  print('========================================================================');
}
