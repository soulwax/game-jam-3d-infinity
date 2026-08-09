/// Browser-independent edge policy for the Interact action.
///
/// Tap mode emits on key down. Hold mode emits one edge after a short
/// threshold and never repeats while the key remains down.
final class InteractionPressPolicy {
  static const holdThresholdSeconds = 0.35;

  bool holdToInteract;
  bool _held = false;
  bool _triggered = false;
  double _elapsed = 0;

  InteractionPressPolicy({this.holdToInteract = false});

  void configure({required bool holdToInteract}) {
    this.holdToInteract = holdToInteract;
    reset();
  }

  bool keyDown() {
    if (_held) return false;
    _held = true;
    _triggered = false;
    _elapsed = 0;
    return !holdToInteract;
  }

  void keyUp() {
    _held = false;
    _triggered = false;
    _elapsed = 0;
  }

  bool step(double dt) {
    if (!holdToInteract || !_held || _triggered) return false;
    _elapsed += dt.clamp(0, 0.25).toDouble();
    if (_elapsed < holdThresholdSeconds) return false;
    _triggered = true;
    return true;
  }

  void reset() {
    _held = false;
    _triggered = false;
    _elapsed = 0;
  }
}
