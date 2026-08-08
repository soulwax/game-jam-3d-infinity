import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';

class AmbientNotice {
  AmbientNotice(web.Document document)
    : root = buildElement(document, 'div', cls: 'ambient-notice') {
    root
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    document.body!.appendChild(root);
  }

  final web.HTMLElement root;

  void show(String channel, String text) {
    root.textContent = '$channel: $text';
    root.className = 'ambient-notice visible';
    web.window.setTimeout(
      ((JSAny? _) => root.className = 'ambient-notice').toJS,
      7000.toJS,
    );
  }
}
