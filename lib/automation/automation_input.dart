import 'dart:math' as math;

import 'automation_movement.dart';

/// CI/semantic adapter. Frames are consumed exactly once at their declared
/// tick; it cannot silently reuse a previous action or skip an edge.
final class DeterministicInputAdapter {
  final Map<int, PlayerActionFrame> _frames = <int, PlayerActionFrame>{};

  void enqueue(PlayerActionFrame frame) {
    if (_frames.containsKey(frame.tick)) {
      throw StateError('duplicate input frame for tick ${frame.tick}');
    }
    _validate(frame);
    _frames[frame.tick] = frame;
  }

  PlayerActionFrame consume(int tick) {
    final frame = _frames.remove(tick);
    if (frame == null) return PlayerActionFrame.neutral(tick);
    return frame;
  }

  void assertDrained() {
    if (_frames.isNotEmpty) {
      throw StateError(
        'unconsumed input frames: ${_frames.keys.toList()..sort()}',
      );
    }
  }
}

/// Browser-event normalizer used by the physical keyboard/mouse adapter.
/// It contains no DOM dependency, so Playwright and the real web listener can
/// be compared against the same semantic result.
final class PhysicalInputNormalizer {
  final Set<String> _held = <String>{};
  final Set<String> _pressed = <String>{};
  final Set<String> _released = <String>{};
  double _mouseDx = 0;
  double _mouseDy = 0;
  bool _pointerLocked = false;
  bool _enabled = true;

  void keyDown(String code, {bool repeat = false}) {
    if (!_enabled || repeat) return;
    if (_held.add(code)) _pressed.add(code);
  }

  void keyUp(String code) {
    if (_held.remove(code)) _released.add(code);
  }

  void pointerLockChanged(bool locked) {
    _pointerLocked = locked;
    _mouseDx = 0;
    _mouseDy = 0;
  }

  void mouseMove(double dx, double dy) {
    if (!_enabled || !_pointerLocked) return;
    if (!dx.isFinite || !dy.isFinite) return;
    _mouseDx += dx;
    _mouseDy += dy;
  }

  void mouseDown(int button) {
    if (!_enabled) return;
    final token = _mouseButtonToken(button);
    if (token != null && _held.add(token)) {
      _pressed.add(token);
    }
  }

  void mouseUp(int button) {
    if (!_enabled) return;
    final token = _mouseButtonToken(button);
    if (token != null && _held.remove(token)) {
      _released.add(token);
    }
  }

  void wheel(double deltaY) {
    if (!_enabled || deltaY == 0) return;
    final token = deltaY < 0 ? 'WheelUp' : 'WheelDown';
    _pressed.add(token);
    _released.add(token);
  }

  static String? _mouseButtonToken(int button) => switch (button) {
        0 => 'Mouse0',
        1 => 'Mouse1',
        2 => 'Mouse2',
        3 => 'Mouse3',
        4 => 'Mouse4',
        _ => null,
      };

  void suspend() {
    _enabled = false;
    clear();
  }

  void resume() {
    clear();
    _enabled = true;
  }

  PlayerActionFrame consume(int tick) {
    var x = 0.0;
    var z = 0.0;
    if (_held.contains('KeyA')) x -= 1;
    if (_held.contains('KeyD')) x += 1;
    if (_held.contains('KeyW')) z += 1;
    if (_held.contains('KeyS')) z -= 1;
    final length = math.sqrt(x * x + z * z);
    if (length > 1) {
      x /= length;
      z /= length;
    }
    final frame = PlayerActionFrame(
      tick: tick,
      forward: z,
      strafe: x,
      lookDeltaX: _mouseDx,
      lookDeltaY: _mouseDy,
      pressed: Set.unmodifiable(_pressed.where(_isSemanticAction).toSet()),
      held: Set.unmodifiable(_held),
      released: Set.unmodifiable(_released.where(_isSemanticAction).toSet()),
    );
    _pressed.clear();
    _released.clear();
    _mouseDx = 0;
    _mouseDy = 0;
    return frame;
  }

  void clear() {
    _held.clear();
    _pressed.clear();
    _released.clear();
    _mouseDx = 0;
    _mouseDy = 0;
  }
}

bool _isSemanticAction(String code) =>
    code == 'KeyE' ||
    code == 'Space' ||
    code == 'Escape' ||
    code.startsWith('Mouse') ||
    code.startsWith('Wheel');

void _validate(PlayerActionFrame frame) {
  if (frame.tick < 0 ||
      !frame.forward.isFinite ||
      !frame.strafe.isFinite ||
      !frame.lookDeltaX.isFinite ||
      !frame.lookDeltaY.isFinite ||
      frame.forward.abs() > 1 ||
      frame.strafe.abs() > 1) {
    throw ArgumentError('input frame is outside normalized bounds');
  }
}
