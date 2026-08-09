import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart' as web;

import '../config.dart';

web.HTMLElement buildElement(
  web.Document document,
  String tag, {
  String? cls,
  String? text,
}) {
  final e = document.createElement(tag) as web.HTMLElement;
  if (cls != null) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

List<web.HTMLElement> _focusableIn(web.Element root) {
  final list = root.querySelectorAll(
    'a[href],button,input,select,textarea,[tabindex]',
  );
  final out = <web.HTMLElement>[];
  for (var i = 0; i < list.length; i++) {
    final n = list.item(i);
    if (n is web.HTMLElement) out.add(n);
  }
  return out;
}

abstract class Panel {
  static Panel? _active;

  final web.Document document;
  final web.HTMLElement root;
  void Function()? onClose;

  web.Element? _lastFocus;
  JSFunction? _keyHandler;

  Panel(this.document)
    : root = document.createElement('div') as web.HTMLElement {
    root.className = 'panel';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'Game panel');
    root.setAttribute('tabindex', '-1');
    root.setAttribute('hidden', '');
    root.style.setProperty('--panel-fade', '${panelFadeSeconds}s');
    document.body!.appendChild(root);
  }

  bool get isOpen => root.className.contains('open');

  void open() {
    if (isOpen) return;
    final other = Panel._active;
    if (other != null && other != this) other.close();
    Panel._active = this;
    _lastFocus = document.activeElement;
    document.callMethod<JSAny?>('exitPointerLock'.toJS);
    root.className = 'panel open';
    root.removeAttribute('hidden');
    final handler = _onKeyDown;
    _keyHandler = handler.toJS;
    document.addEventListener('keydown', _keyHandler);
    final f = _focusableIn(root);
    if (f.isNotEmpty) {
      f.first.focus();
    } else {
      root.focus();
    }
  }

  void close() {
    if (!isOpen) return;
    root.className = 'panel';
    root.setAttribute('hidden', '');
    if (Panel._active == this) Panel._active = null;
    final h = _keyHandler;
    if (h != null) {
      document.removeEventListener('keydown', h);
      _keyHandler = null;
    }
    final last = _lastFocus;
    if (last is web.HTMLElement) last.focus();
    onClose?.call();
  }

  void onKeyDown(web.KeyboardEvent e) {}

  void _onKeyDown(web.KeyboardEvent e) {
    onKeyDown(e);
    if (e.defaultPrevented) return;
    if (e.code == 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.code == 'Tab') _trapFocus(e);
  }

  void _trapFocus(web.KeyboardEvent e) {
    final f = _focusableIn(root);
    if (f.isEmpty) return;
    final active = document.activeElement;
    if (e.shiftKey) {
      if (active == f.first || !f.contains(active)) {
        e.preventDefault();
        f.last.focus();
      }
    } else {
      if (active == f.last || !f.contains(active)) {
        e.preventDefault();
        f.first.focus();
      }
    }
  }
}
