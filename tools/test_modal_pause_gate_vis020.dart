import 'package:quarantine/ui/modal_pause_gate.dart';

Never _fail(String message) => throw StateError(message);

void main() {
  final gate = ModalPauseGate();
  if (gate.isPaused || gate.currentState != PauseGateState.unpaused) {
    _fail('ModalPauseGate must start unpaused');
  }

  // Test opening pause menu
  gate.pushState(PauseGateState.pauseRoot);
  if (!gate.isPaused || gate.currentState != PauseGateState.pauseRoot || !gate.inputsCleared) {
    _fail('ModalPauseGate must transition to pauseRoot and mark inputsCleared');
  }

  // Test push deeper state
  gate.pushState(PauseGateState.settingsIndex);
  if (gate.currentState != PauseGateState.settingsIndex) {
    _fail('ModalPauseGate pushState failed');
  }

  // Test escape stack popping
  final afterFirstEscape = gate.handleEscape();
  if (afterFirstEscape != PauseGateState.pauseRoot) {
    _fail('handleEscape should pop to pauseRoot');
  }

  final afterSecondEscape = gate.handleEscape();
  if (afterSecondEscape != PauseGateState.unpaused || gate.isPaused) {
    _fail('handleEscape should pop to unpaused');
  }

  // Test shortcut permission
  gate.pushState(PauseGateState.pauseRoot);
  if (gate.isShortcutAllowed('KeyE')) {
    _fail('KeyE shortcut must be blocked when paused');
  }

  print('ModalPauseGate VIS-020 verification passed successfully');
}
