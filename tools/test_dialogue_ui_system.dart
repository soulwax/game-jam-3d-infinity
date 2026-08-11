import 'package:quarantine/ui/dialogue_renderer.dart';
import 'package:quarantine/ui/dialogue_silence_timer.dart';
import 'package:quarantine/ui/dialogue_choice_presenter.dart';

void main() {
  print('Running Dialogue UI System Tests...');

  // Test DialogueTypewriterEngine
  print('Testing DialogueTypewriterEngine...');
  
  // Instant complete
  final instantState = DialogueTypewriterEngine.calculateProgress(
    fullText: 'Hello',
    elapsedMs: 0,
    instantComplete: true,
  );
  assert(instantState.isComplete == true, 'Instant complete should be true');
  assert(instantState.visibleText == 'Hello', 'Visible text should be full text');
  assert(instantState.progress01 == 1.0, 'Progress should be 1.0');

  // Punctuation delays
  // "Hi..." -> H(25) i(25) .(25) .(25) .(25+400)
  // At 40 chars/sec, msPerChar = 1000/40 = 25ms
  final text = 'Hi...';
  final state1 = DialogueTypewriterEngine.calculateProgress(fullText: text, elapsedMs: 50); // "Hi"
  assert(state1.visibleText == 'Hi');
  
  final state2 = DialogueTypewriterEngine.calculateProgress(fullText: text, elapsedMs: 125); // "Hi..."
  assert(state2.visibleText == 'Hi...');
  assert(!state2.isComplete);
  
  final state3 = DialogueTypewriterEngine.calculateProgress(fullText: text, elapsedMs: 600); // "Hi..." + pause
  assert(state3.isComplete);

  final text2 = 'No, wait.';
  // N(25) o(25) ,(25+120)  (25) w(25) a(25) i(25) t(25) .(25+240)
  // total = 9*25 + 120 + 240 = 225 + 360 = 585
  final state4 = DialogueTypewriterEngine.calculateProgress(fullText: text2, elapsedMs: 100);
  assert(state4.visibleText == 'No,');
  assert(state4.currentPunctuationPauseMs > 0);
  
  // CSS Generation
  final css = DialogueTypewriterEngine.generateCss();
  assert(css.contains('--bone-dim'));
  assert(css.contains('--bone'));

  // Test DialogueSilenceTimerEngine
  print('Testing DialogueSilenceTimerEngine...');
  final timerState = DialogueSilenceTimerEngine.update(
    durationMs: 8000,
    elapsedMs: 2500,
    reducedMotion: true,
  );
  assert(timerState.remainingMs == 5500);
  assert(timerState.progress01 == 2500 / 8000);
  assert(!timerState.isExpired);
  assert(timerState.reducedMotion == true);
  assert(timerState.announcementText == 'Silence: 6 seconds remaining');
  
  final expiredState = DialogueSilenceTimerEngine.update(durationMs: 8000, elapsedMs: 8000);
  assert(expiredState.isExpired);

  // Test DialogueChoicePresenter
  print('Testing DialogueChoicePresenter...');
  final rawOptions = [
    DialogueResponseOption(id: 'opt1', text: 'Yes'),
    DialogueResponseOption(id: 'opt2', text: 'No'),
    DialogueResponseOption(id: 'opt3', text: '...', isSilence: true),
  ];
  
  final formatted = DialogueChoicePresenter.formatOptions(rawOptions);
  assert(formatted.length == 3);
  assert(formatted[0].index == 1);
  assert(formatted[0].shortcutKey == 'Digit1');
  assert(formatted[2].isSilence == true);
  assert(formatted[2].shortcutKey == 'Space');
  
  // Shortcut resolution
  assert(DialogueChoicePresenter.resolveShortcut('Digit2', formatted) == 'opt2');
  assert(DialogueChoicePresenter.resolveShortcut('Space', formatted) == 'opt3');
  assert(DialogueChoicePresenter.resolveShortcut('Digit9', formatted) == null);

  // HTML Rendering
  final html = DialogueChoicePresenter.renderOptionsHtml(formatted, selectedId: 'opt1');
  assert(html.contains('data-selected="true"'));
  assert(html.contains('--brass'));
  assert(html.contains('--focus'));

  print('All tests passed!');
}
