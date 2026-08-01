import 'package:web/web.dart' as web;

import '../config.dart';
import 'panel.dart';

class Prompt {
  final web.HTMLElement root;
  String? _shown;

  Prompt(web.Document document) : root = buildElement(document, 'div', cls: 'prompt') {
    root.style.setProperty('transition-duration', '${promptFadeSeconds}s');
    document.body!.appendChild(root);
  }

  void show(String? text) {
    if (text == _shown) return;
    _shown = text;
    root.textContent = text ?? '';
    root.className = text == null ? 'prompt' : 'prompt visible';
  }
}
