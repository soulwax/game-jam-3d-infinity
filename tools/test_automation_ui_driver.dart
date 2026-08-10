import 'package:quarantine/automation/automation_movement.dart';
import 'package:quarantine/automation/automation_ui_driver.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final driver = AutomationUiDriver();
  check(!driver.isModalActive, 'starts with no active modal');
  check(driver.currentRoute == AutomationUiRoute.none, 'initial route is none');

  // 1. Open settings index
  final openFrame = driver.openRoute(AutomationUiRoute.settingsIndex, tick: 1);
  check(driver.isModalActive, 'modal is active');
  check(driver.currentRoute == AutomationUiRoute.settingsIndex, 'currentRoute is settingsIndex');
  check(openFrame.pressed.contains('Escape'), 'open settings emits Escape key frame');

  // 2. Push child panel
  driver.pushChild(AutomationUiRoute.audioSettings, tick: 2);
  check(driver.currentRoute == AutomationUiRoute.audioSettings, 'pushed audioSettings');
  check(driver.backStack.length == 2, 'backStack has 2 entries');

  // 3. Pop child back to settings index
  final popFrame = driver.pop(tick: 3);
  check(driver.currentRoute == AutomationUiRoute.settingsIndex, 'popped back to settingsIndex');
  check(popFrame.pressed.contains('Escape'), 'pop emits Escape key frame');

  // 4. Pop settings index to close
  driver.pop(tick: 4);
  check(!driver.isModalActive, 'modal closed');
  check(driver.currentRoute == AutomationUiRoute.none, 'route is none');

  // 5. Open journal and close all
  driver.openRoute(AutomationUiRoute.journal, tick: 5);
  check(driver.currentRoute == AutomationUiRoute.journal, 'journal opened');
  driver.closeAll(tick: 6);
  check(!driver.isModalActive, 'closeAll closes modal');

  print('automation UI driver T-10: route navigation, back stack push/pop, key frames, and closeAll pass');
}
