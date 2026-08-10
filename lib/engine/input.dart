import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart' as web;

import 'interaction_press_policy.dart';
import 'input_action_map.dart';
import 'math3.dart';
import 'xbox_gamepad.dart';

class Input {
  final web.Window _window;
  final web.Document _document;
  final Set<String> _held = <String>{};
  final Set<String> _pressed = <String>{};
  Set<String> _gamepadHeld = <String>{};
  final Set<String> _gamepadPressed = <String>{};
  final Set<String> _gamepadSuppressed = <String>{};
  Vec3 _gamepadMove = Vec3(0, 0, 0);
  double _gamepadLookX = 0;
  double _gamepadLookY = 0;
  String? _gamepadId;

  double _mouseDx = 0;
  double _mouseDy = 0;
  bool _locked = false;
  bool _moveThisFrame = false;
  bool _gameplayEnabled = true;
  final InteractionPressPolicy _interactPolicy = InteractionPressPolicy();
  final InputActionMap _bindings = InputActionMap({
    'moveForward': ['KeyW'],
    'moveBack': ['KeyS'],
    'moveLeft': ['KeyA'],
    'moveRight': ['KeyD'],
    'interact': ['KeyE'],
    'secondary': ['KeyQ'],
    'run': ['ShiftLeft'],
    'crouch': ['ControlLeft'],
    'rotate': ['KeyR'],
    'reach': ['KeyF'],
    'journal': ['KeyJ'],
    'sleep': ['KeyL'],
    'pause': ['Escape'],
  });

  bool isActionDown(String action) => _isActionDown(action);

  bool wasActionPressed(String action) => _wasActionPressed(action);

  bool wasControllerActionPressed(String action) =>
      _bindings.consumePressed(action, _gamepadPressed);

  bool wasControllerCodePressed(String code) => _gamepadPressed.remove(code);

  Input(web.Window window) : _window = window, _document = window.document {
    window.addEventListener('keydown', _onKeyDown.toJS);
    window.addEventListener('keyup', _onKeyUp.toJS);
    window.addEventListener('mousemove', _onMouseMove.toJS);
    window.addEventListener('mousedown', _onMouseDown.toJS);
    window.addEventListener('mouseup', _onMouseUp.toJS);
    window.addEventListener('wheel', _onWheel.toJS);
    _document.addEventListener('pointerlockchange', _onLockChange.toJS);
  }

  void requestPointerLock(web.Element canvas) {
    if (_locked) return;
    canvas.callMethod<JSAny?>('requestPointerLock'.toJS);
  }

  bool get locked => _locked;

  bool get gameplayEnabled => _gameplayEnabled;

  void setBindings(Map<String, String> bindings) {
    setActionBindings({
      for (final entry in bindings.entries)
        entry.key: [entry.value],
    });
  }

  /// Installs every binding for an action. Empty alternatives are ignored so
  /// malformed persisted values cannot create a phantom key edge.
  void setActionBindings(Map<String, List<String>> bindings) {
    for (final action in _bindings.actions) {
      final values = bindings[action];
      if (values == null) continue;
      final unique = <String>{
        for (final value in values)
          if (value.isNotEmpty) value,
      };
      _bindings.replace(action, unique);
    }
    _clearGameplayState();
  }

  void setHoldToInteract(bool enabled) {
    _interactPolicy.configure(holdToInteract: enabled);
    _clearGameplayState();
  }

  /// Suspends gameplay input while a modal panel owns focus.
  ///
  /// Clearing all transient state at the boundary prevents a key pressed or
  /// held in a menu from becoming an action when play resumes.
  void suspendGameplay() {
    _gameplayEnabled = false;
    _clearGameplayState();
  }

  /// Resumes gameplay input after a modal panel closes.
  ///
  /// A fresh physical key edge is required after this call; stale held keys
  /// and mouse deltas are deliberately not restored.
  void resumeGameplay() {
    _clearGameplayState();
    _gameplayEnabled = true;
  }

  double get mouseDx => _mouseDx;
  double get mouseDy => _mouseDy;
  double get gamepadLookX => _gameplayEnabled ? _gamepadLookX : 0;
  double get gamepadLookY => _gameplayEnabled ? _gamepadLookY : 0;
  bool get gamepadConnected => _gamepadId != null;
  String? get gamepadId => _gamepadId;

  Vec3 get moveVector {
    var x = 0.0;
    var z = 0.0;
    if (_isActionDown('moveLeft')) x -= 1;
    if (_isActionDown('moveRight')) x += 1;
    if (_isActionDown('moveForward')) z += 1;
    if (_isActionDown('moveBack')) z -= 1;
    final v = Vec3(x, 0, z) +
        (_gameplayEnabled ? _gamepadMove : Vec3(0, 0, 0));
    _moveThisFrame = v.x != 0 || v.z != 0;
    return v.length > 1 ? v.normalized : v;
  }

  bool get movePressed => _moveThisFrame;

  bool get interactPressed => _wasActionPressed('interact');

  /// Advances the optional hold interaction without generating repeat edges.
  /// A held interaction becomes one action after the comfort threshold; a
  /// normal interaction remains an immediate key edge.
  void step(double dt) {
    if (_interactPolicy.step(dt)) {
      for (final code in _bindings.codesFor('interact')) {
        if (_held.contains(code)) {
          _pressed.add(code);
          break;
        }
        if (_gamepadHeld.contains(code) &&
            !_gamepadSuppressed.contains(code)) {
          _gamepadPressed.add(code);
          break;
        }
      }
    }
  }

  /// Polls the browser's standard gamepad layout once per visual frame.
  /// Unsupported layouts remain inert rather than guessing vendor indices.
  void pollGamepad() {
    StandardGamepadSnapshot? snapshot;
    for (final pad in _window.navigator.getGamepads().toDart) {
      if (pad == null || !pad.connected || pad.mapping != 'standard') continue;
      snapshot = StandardGamepadSnapshot(
        connected: true,
        id: pad.id,
        mapping: pad.mapping,
        axes: [for (final axis in pad.axes.toDart) axis.toDartDouble],
        buttons: [
          for (final button in pad.buttons.toDart)
            button.pressed ? 1.0 : button.value.toDouble(),
        ],
      );
      break;
    }
    final frame = XboxGamepadLayout.map(
      snapshot ??
          const StandardGamepadSnapshot(
            connected: false,
            id: '',
            mapping: '',
            axes: [],
            buttons: [],
          ),
    );
    final nextHeld = frame.held;
    final hadGamepadInteract = _bindings.anyDown('interact', _gamepadHeld);
    _gamepadSuppressed.removeWhere((code) => !nextHeld.contains(code));
    for (final code in nextHeld) {
      if (!_gamepadHeld.contains(code) && !_gamepadSuppressed.contains(code)) {
        if (_bindings.codesFor('interact').contains(code)) {
          if (_interactPolicy.keyDown()) _gamepadPressed.add(code);
        } else {
          _gamepadPressed.add(code);
        }
      }
    }
    _gamepadHeld = Set<String>.from(nextHeld);
    _gamepadMove = frame.move;
    _gamepadLookX = frame.lookX;
    _gamepadLookY = frame.lookY;
    _gamepadId = snapshot?.id;
    if (hadGamepadInteract &&
        !_bindings.anyDown('interact', nextHeld) &&
        !_bindings.anyDown('interact', _held)) {
      _interactPolicy.keyUp();
    }
  }

  bool isDown(String code) => _held.contains(code);

  bool wasPressed(String code) => _pressed.remove(code);

  void endFrame() {
    _mouseDx = 0;
    _mouseDy = 0;
    // Wheel tokens are one-frame synthetic edges; remove them from _held so the
    // next frame starts clean even if no 'wheel' event fires.
    _held
        ..remove('WheelUp')
        ..remove('WheelDown');
    _pressed.clear();
    _gamepadPressed.clear();
    _moveThisFrame = false;
  }

  void _onKeyDown(web.KeyboardEvent e) {
    if (e.repeat) return;
    if (!_gameplayEnabled) return;
    if (_held.add(e.code)) {
      if (_bindings.codesFor('interact').contains(e.code)) {
        if (_interactPolicy.keyDown()) _pressed.add(e.code);
      } else {
        _pressed.add(e.code);
      }
    }
  }

  void _onKeyUp(web.KeyboardEvent e) {
    _held.remove(e.code);
    if (_bindings.codesFor('interact').contains(e.code) &&
        !_bindings.anyDown('interact', _held)) {
      _interactPolicy.keyUp();
    }
  }

  void _onMouseDown(web.MouseEvent e) {
    if (!_gameplayEnabled) return;
    final code = 'Mouse${e.button}';
    if (_held.add(code)) {
      if (_bindings.codesFor('interact').contains(code)) {
        if (_interactPolicy.keyDown()) _pressed.add(code);
      } else {
        _pressed.add(code);
      }
    }
  }

  void _onMouseUp(web.MouseEvent e) {
    final code = 'Mouse${e.button}';
    _held.remove(code);
    if (_bindings.codesFor('interact').contains(code) &&
        !_bindings.anyDown('interact', _held)) {
      _interactPolicy.keyUp();
    }
  }

  void _onWheel(web.WheelEvent e) {
    if (!_gameplayEnabled) return;
    // Inject a one-frame synthetic edge for wheel direction.
    final code = (e.deltaY < 0) ? 'WheelUp' : 'WheelDown';
    _held.add(code);
    _pressed.add(code);
  }

  void _onMouseMove(web.MouseEvent e) {
    if (!_locked || !_gameplayEnabled) return;
    _mouseDx += _movement(e, 'movementX');
    _mouseDy += _movement(e, 'movementY');
  }

  void _onLockChange(web.Event _) {
    _locked = _document.getProperty<JSAny?>('pointerLockElement'.toJS) != null;
    _mouseDx = 0;
    _mouseDy = 0;
  }

  double _movement(web.MouseEvent e, String name) =>
      e.getProperty<JSNumber?>(name.toJS)?.toDartDouble ?? 0;

  bool _isActionDown(String action) {
    if (!_gameplayEnabled) return false;
    return _bindings.anyDown(action, {
      ..._held,
      for (final code in _gamepadHeld)
        if (!_gamepadSuppressed.contains(code)) code,
    });
  }

  bool _wasActionPressed(String action) {
    return _bindings.consumePressed(action, _pressed) ||
        _bindings.consumePressed(action, _gamepadPressed);
  }

  void _clearGameplayState() {
    _held.clear();
    _pressed.clear();
    _gamepadPressed.clear();
    _gamepadSuppressed.addAll(_gamepadHeld);
    _mouseDx = 0;
    _mouseDy = 0;
    _moveThisFrame = false;
    _interactPolicy.reset();
  }
}
