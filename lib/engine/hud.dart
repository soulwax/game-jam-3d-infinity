import 'package:web/web.dart' as web;

import 'hud_element.dart';

const double _hudHz = 10;






class Hud<T> {
  final List<HudElement<T>> _elements = [];
  double _acc = 0;

  
  
  void add(String id, HudElement<T> Function(web.Element) f) {
    final el = web.document.getElementById(id);
    if (el != null) _elements.add(f(el));
  }

  
  void update(T state, double dt) {
    _acc += dt;
    if (_acc < 1 / _hudHz) return;
    _acc = 0;
    for (final e in _elements) {
      e.update(state);
    }
  }
}
