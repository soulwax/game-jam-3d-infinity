enum PauseGateState {
  unpaused,
  pauseRoot,
  settingsIndex,
  settingsCategory,
  journal,
  help,
  credits,
}

/// Modal pause shortcut gate & escape ledger coordinator for VIS-020/021/022/027.
class ModalPauseGate {
  final List<PauseGateState> _backStack = [];
  bool _inputsCleared = false;

  PauseGateState get currentState =>
      _backStack.isEmpty ? PauseGateState.unpaused : _backStack.last;

  bool get isPaused => currentState != PauseGateState.unpaused;
  bool get inputsCleared => _inputsCleared;

  void pushState(PauseGateState state) {
    if (state == PauseGateState.unpaused) {
      _backStack.clear();
      _inputsCleared = false;
      return;
    }
    if (_backStack.isEmpty) {
      _inputsCleared = true; // Clear held inputs on pause enter
    }
    _backStack.add(state);
  }

  PauseGateState handleEscape() {
    if (_backStack.isEmpty) {
      pushState(PauseGateState.pauseRoot);
      return currentState;
    }

    _backStack.removeLast();
    if (_backStack.isEmpty) {
      _inputsCleared = false;
    }
    return currentState;
  }

  bool isShortcutAllowed(String actionToken) {
    if (isPaused) {
      // In-game interaction shortcuts (e.g. KeyE, Mouse0, Space) are blocked during pause
      if (actionToken == 'KeyE' || actionToken == 'Mouse0' || actionToken == 'Space') {
        return false;
      }
    }
    return true;
  }
}
