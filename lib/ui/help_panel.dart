import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';

class HelpPanel extends Panel {
  HelpPanel(super.document) {
    root.setAttribute('aria-label', 'House notes');
    root.appendChild(
      buildElement(document, 'h1', cls: 'journal-title', text: 'house notes'),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'help-copy',
        text: 'WASD moves. Mouse looks. E uses what you face.',
      ),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'help-copy',
        text:
            'J opens the journal. L rests. O opens settings. K saves. The final door waits until Day 21.',
      ),
    );
    final close =
        buildElement(document, 'button', cls: 'door-continue', text: 'return')
            as web.HTMLButtonElement;
    close.setAttribute('type', 'button');
    close.addEventListener('click', ((web.Event _) => this.close()).toJS);
    root.appendChild(close);
  }
}
