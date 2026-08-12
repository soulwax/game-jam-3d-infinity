import 'dart:js_interop';

import 'package:web/web.dart' as web;

import '../sim/day.dart';
import 'panel.dart';

class SleepPanel extends Panel {
  void Function(SleepQuality quality, SleepLocation location)? onSleep;

  SleepPanel(web.Document document) : super(document) {
    root.setAttribute('aria-label', 'Rest');
    root.appendChild(
      buildElement(document, 'h2', cls: 'journal-title', text: 'Rest'),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'consult-label',
        text: 'Sleeping is the only way to end the day.',
      ),
    );
    final choices = buildElement(document, 'div', cls: 'entry-picker');
    for (final quality in SleepQuality.values) {
      for (final location in SleepLocation.values) {
        final button = buildElement(
          document,
          'button',
          cls: 'picker-entry',
          text: '${quality.name} sleep · ${location.name}',
        );
        button.setAttribute('type', 'button');
        button.addEventListener(
          'click',
          ((JSAny? _) {
            onSleep?.call(quality, location);
            close();
          }).toJS,
        );
        choices.appendChild(button);
      }
    }
    root.appendChild(choices);
  }
}
