import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';

/// Credits panel: presents third-party asset attribution and licence
/// references reachable from the pause root without a permanent HUD line or
/// boot interruption. Content is injected by [setCreditsText] after the
/// manifest loads; the panel is safe to open before injection (shows a
/// placeholder). A close/back button carries the stable ID `credits.close`
/// so the pause ledger and automation driver can focus it deterministically.
class CreditsPanel extends Panel {
  late final web.HTMLParagraphElement _body;

  CreditsPanel(super.document) {
    root.setAttribute('aria-label', 'Credits and licences');
    root.setAttribute('role', 'dialog');

    root.appendChild(
      buildElement(document, 'h1', cls: 'journal-title', text: 'credits'),
    );

    _body = buildElement(document, 'p', cls: 'credits-body') as web.HTMLParagraphElement;
    _body.textContent = '—';
    root.appendChild(_body);

    final licenceLine = buildElement(
      document,
      'p',
      cls: 'credits-licence-hint',
      text: 'Full licence texts: res/licenses/',
    );
    root.appendChild(licenceLine);

    final close =
        buildElement(document, 'button', cls: 'door-continue', text: 'return')
            as web.HTMLButtonElement;
    close.id = 'credits.close';
    close.setAttribute('type', 'button');
    close.addEventListener('click', ((JSAny? _) => this.close()).toJS);
    root.appendChild(close);
  }

  /// Replace the body text with the resolved credits string from the manifest.
  void setCreditsText(String text) {
    _body.textContent = text;
  }
}
