import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart' as web;

import 'math3.dart';

class Input {
  final web.Document _document;
  final Set<String> _held = <String>{};
  final Set<String> _pressed = <String>{};

  double _mouseDx = 0;
  double _mouseDy = 0;
  bool _locked = false;
  bool _moveThisFrame = false;

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

  double get mouseDx => _mouseDx;
  double get mouseDy => _mouseDy;

  Vec3 get moveVector {
    var x = 0.0;
    var z = 0.0;
    if (_held.contains('KeyA')) x -= 1;
    if (_held.contains('KeyD')) x += 1;
    if (_held.contains('KeyW')) z += 1;
    if (_held.contains('KeyS')) z -= 1;
    final v = Vec3(x, 0, z);
    _moveThisFrame = x != 0 || z != 0;
    return v.length > 1 ? v.normalized : v;
  }

  bool get movePressed => _moveThisFrame;

  bool get interactPressed => wasPressed('KeyE');

  bool isDown(String code) => _held.contains(code);

  bool wasPressed(String code) => _pressed.remove(code);

  void endFrame() {
    _mouseDx = 0;
    _mouseDy = 0;
    _pressed.clear();
  }

  void _onKeyDown(web.KeyboardEvent e) {
    if (e.repeat) return;
    if (_held.add(e.code)) _pressed.add(e.code);
  }

  void _onKeyUp(web.KeyboardEvent e) {
    _held.remove(e.code);
  }

  void _onMouseMove(web.MouseEvent e) {
    if (!_locked) return;
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
}
