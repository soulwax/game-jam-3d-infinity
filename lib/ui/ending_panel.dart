import 'dart:js_interop';

import 'package:web/web.dart' as web;

import '../game/ending.dart';
import 'panel.dart';

class EndingPanel extends Panel {
  EndingPanel(super.document) {
    root.setAttribute('aria-label', 'Ending record');
    _title = buildElement(document, 'h1', cls: 'journal-title');
    _body = buildElement(document, 'div', cls: 'ending-copy');
    root.appendChild(_title);
    root.appendChild(_body);
    final close =
        buildElement(
              document,
              'button',
              cls: 'door-continue',
              text: 'close record',
            )
            as web.HTMLButtonElement;
    close.setAttribute('type', 'button');
    close.addEventListener('click', ((JSAny? _) => closeRecord()).toJS);
    root.appendChild(close);
  }

  late final web.HTMLElement _title;
  late final web.HTMLElement _body;
  void Function()? onDismiss;

  void showEnding(EndingState ending, List<String> lines) {
    _title.textContent = ending.kind.name;
    _body.textContent = '';
    for (final line in lines) {
      _body.appendChild(
        buildElement(document, 'p', cls: 'ending-line', text: line),
      );
    }
    open();
  }

  void closeRecord() {
    close();
    onDismiss?.call();
  }
}
