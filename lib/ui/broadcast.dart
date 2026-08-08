import 'package:web/web.dart' as web;

import 'panel.dart';

class Broadcast {
  final web.HTMLElement root;
  String? _shownText;

  Broadcast(web.Document document)
    : root = buildElement(document, 'div', cls: 'broadcast') {
    root
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    document.body!.appendChild(root);
  }

  void update(String? text, bool inLivingRoom) {
    final shown = inLivingRoom ? text : null;
    if (shown == _shownText) return;
    _shownText = shown;
    root.textContent = shown ?? '';
    root.className = shown == null ? 'broadcast' : 'broadcast visible';
  }
}
