import 'dart:js_interop';

import 'package:web/web.dart' as web;

import '../sim/day.dart';
import 'panel.dart';

class SleepPanel extends Panel {
  void Function(SleepQuality quality, SleepLocation location)? onSleep;
  final Map<SleepLocation, List<web.HTMLElement>> _locationButtons = {};
  late final web.HTMLElement _context;

  SleepPanel(web.Document document) : super(document) {
    root.setAttribute('aria-label', 'Rest');
    root.appendChild(
      buildElement(document, 'h2', cls: 'journal-title', text: 'Rest'),
    );
    _context = buildElement(
      document,
      'p',
      cls: 'consult-label',
      text: 'Sleeping is the only way to end the day.',
    );
    root.appendChild(_context);
    final choices = buildElement(document, 'div', cls: 'entry-picker');
    for (final quality in SleepQuality.values) {
      for (final location in SleepLocation.values) {
        final button = buildElement(
          document,
          'button',
          cls: 'picker-entry',
          text: '${quality.name} sleep · ${location.name}',
        );
        _locationButtons.putIfAbsent(location, () => []).add(button);
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

  /// Sofa rest belongs to the authored residence. Other rest choices remain
  /// available from the general rest shortcut in any room.
  void setHomeAvailable(bool available) {
    final buttons = _locationButtons[SleepLocation.sofa] ?? const [];
    for (final button in buttons) {
      if (available) {
        button.removeAttribute('disabled');
        button.setAttribute('aria-disabled', 'false');
      } else {
        button.setAttribute('disabled', '');
        button.setAttribute('aria-disabled', 'true');
      }
    }
    _context.textContent = available
        ? 'The living-room sofa is available for rest.'
        : 'Sleeping is the only way to end the day. Sofa rest is only available at home.';
  }
}
