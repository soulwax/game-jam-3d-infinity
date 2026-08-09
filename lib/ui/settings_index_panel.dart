import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';
import 'pause_settings_contract.dart';

/// Accessible category index for the settings surface.
class SettingsIndexPanel extends Panel {
  void Function(PauseSettingsCategory category)? onCategory;
  void Function()? onBack;

  SettingsIndexPanel(web.Document document) : super(document) {
    root.setAttribute('aria-label', 'Settings categories');
    root.appendChild(
      buildElement(document, 'h1', cls: 'journal-title', text: 'Settings'),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'settings-copy',
        text: 'Choose a part of the house experience to adjust.',
      ),
    );
    final nav = buildElement(document, 'nav', cls: 'pause-actions');
    nav.setAttribute('aria-label', 'Settings categories');
    for (final category in PauseSettingsCategory.values) {
      final button =
          buildElement(
                  document,
                  'button',
                  cls: 'door-continue',
                  text: PauseSettingsContract.labels[category]!,
                )
                as web.HTMLButtonElement
            ..setAttribute('type', 'button')
            ..id = PauseSettingsContract.ids[category]!
            ..setAttribute(
              'aria-label',
              '${PauseSettingsContract.labels[category]} settings',
            );
      button.addEventListener(
        'click',
        ((web.Event _) => onCategory?.call(category)).toJS,
      );
      nav.appendChild(button);
    }
    final back =
        buildElement(document, 'button', cls: 'door-continue', text: 'back')
              as web.HTMLButtonElement
          ..setAttribute('type', 'button')
          ..id = 'settings.back'
          ..setAttribute('aria-label', 'back to pause menu');
    back.addEventListener('click', ((web.Event _) => onBack?.call()).toJS);
    nav.appendChild(back);
    root.appendChild(nav);
  }
}
