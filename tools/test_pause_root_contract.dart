import 'package:quarantine/ui/pause_root_contract.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final ids = PauseRootContract.actionIds;
  check(ids.length == PauseRootAction.values.length, 'every action has an ID');
  check(ids[PauseRootAction.resume] == 'pause.resume', 'resume ID is stable');
  check(
    ids[PauseRootAction.settings] == 'pause.settings',
    'settings ID is stable',
  );
  check(
    ids[PauseRootAction.controls] == 'pause.controls',
    'controls ID is stable',
  );
  check(ids[PauseRootAction.save] == 'pause.save', 'save ID is stable');
  check(ids[PauseRootAction.help] == 'pause.help', 'help ID is stable');
  check(ids[PauseRootAction.back] == 'pause.back', 'back ID is stable');
  print('pause root contract: six semantic actions have stable IDs');
}
