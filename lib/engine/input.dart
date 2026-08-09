import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart' as web;

import 'interaction_press_policy.dart';
import 'input_action_map.dart';
import 'math3.dart';

class Input {
  final web.Document _document;
  final Set<String> _held = <String>{};
  final Set<String> _pressed = <String>{};

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

  Input(web.Window window) : _document = window.document {
    window.addEventListener('keydown', _onKeyDown.toJS);
    window.addEventListener('keyup', _onKeyUp.toJS);
    window.addEventListener('mousemove', _onMouseMove.toJS);
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

  Vec3 get moveVector {
    var x = 0.0;
    var z = 0.0;
    if (_isActionDown('moveLeft')) x -= 1;
    if (_isActionDown('moveRight')) x += 1;
    if (_isActionDown('moveForward')) z += 1;
    if (_isActionDown('moveBack')) z -= 1;
    final v = Vec3(x, 0, z);
    _moveThisFrame = x != 0 || z != 0;
    return v.length > 1 ? v.normalized : v;
  }

  bool get movePressed => _moveThisFrame;

  bool get interactPressed => _wasActionPressed('interact');

  /// Advances the optional hold interaction without generating repeat edges.
  /// A held interaction becomes one action after the comfort threshold; a
  /// normal interaction remains an immediate key edge.
  void step(double dt) {
    if (_interactPolicy.step(dt)) {
      final held = _bindings.codesFor('interact');
      if (held.isNotEmpty) _pressed.add(held.first);
    }
  }

  bool isDown(String code) => _held.contains(code);

  bool wasPressed(String code) => _pressed.remove(code);

  void endFrame() {
    _mouseDx = 0;
    _mouseDy = 0;
    _pressed.clear();
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

  bool _isActionDown(String action) => _bindings.anyDown(action, _held);

  bool _wasActionPressed(String action) {
    return _bindings.consumePressed(action, _pressed);
  }

  void _clearGameplayState() {
    _held.clear();
    _pressed.clear();
    _mouseDx = 0;
    _mouseDy = 0;
    _moveThisFrame = false;
    _interactPolicy.reset();
  }
}
