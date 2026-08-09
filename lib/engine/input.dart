import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart' as web;

import 'interaction_press_policy.dart';
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
  final Map<String, String> _bindings = {
    'moveForward': 'KeyW',
    'moveBack': 'KeyS',
    'moveLeft': 'KeyA',
    'moveRight': 'KeyD',
    'interact': 'KeyE',
  };

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
    for (final action in _bindings.keys) {
      final code = bindings[action];
      if (code != null && code.isNotEmpty) _bindings[action] = code;
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
    if (isDown(_bindings['moveLeft']!)) x -= 1;
    if (isDown(_bindings['moveRight']!)) x += 1;
    if (isDown(_bindings['moveForward']!)) z += 1;
    if (isDown(_bindings['moveBack']!)) z -= 1;
    final v = Vec3(x, 0, z);
    _moveThisFrame = x != 0 || z != 0;
    return v.length > 1 ? v.normalized : v;
  }

  bool get movePressed => _moveThisFrame;

  bool get interactPressed => wasPressed(_bindings['interact']!);

  /// Advances the optional hold interaction without generating repeat edges.
  /// A held interaction becomes one action after the comfort threshold; a
  /// normal interaction remains an immediate key edge.
  void step(double dt) {
    if (_interactPolicy.step(dt)) {
      _pressed.add(_bindings['interact']!);
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
      if (e.code == _bindings['interact']) {
        if (_interactPolicy.keyDown()) _pressed.add(e.code);
      } else {
        _pressed.add(e.code);
      }
    }
  }

  void _onKeyUp(web.KeyboardEvent e) {
    _held.remove(e.code);
    if (e.code == _bindings['interact']) {
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

  void _clearGameplayState() {
    _held.clear();
    _pressed.clear();
    _mouseDx = 0;
    _mouseDy = 0;
    _moveThisFrame = false;
    _interactPolicy.reset();
  }
}
