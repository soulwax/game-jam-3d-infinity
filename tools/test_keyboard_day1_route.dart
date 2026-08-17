import 'package:quarantine/automation/automation_input.dart';
import 'package:quarantine/automation/automation_ui_driver.dart';

void main() {
  final input = PhysicalInputNormalizer();
  input.keyDown('KeyW');
  input.keyDown('KeyE');
  final gameplay = input.consume(1);
  if (!gameplay.held.contains('KeyW') ||
      !gameplay.pressed.contains('KeyE') ||
      gameplay.forward <= 0) {
    throw StateError('keyboard movement/journal edge was not preserved');
  }
  input.suspend();
  if (!input.consume(2).neutral) {
    throw StateError('modal suspend leaked held keyboard input');
  }
  input.resume();
  final ui = AutomationUiDriver();
  final journal = ui.openRoute(AutomationUiRoute.journal, tick: 3);
  if (!journal.pressed.contains('KeyJ') || !ui.isModalActive) {
    throw StateError('journal keyboard route did not open semantically');
  }
  final close = ui.closeAll(tick: 4);
  if (!close.pressed.contains('Escape') || ui.isModalActive) {
    throw StateError('journal keyboard route did not restore gameplay');
  }
  print(
    'keyboard Day 1 route: movement edge, modal clearing, and journal focus pass',
  );
}
