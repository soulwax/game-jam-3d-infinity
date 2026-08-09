import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';

class SettingsPanel extends Panel {
  void Function(String key, double value)? onLevel;
  void Function(bool muted)? onMute;
  final Map<String, web.HTMLInputElement> _levels = {};
  final Map<String, web.HTMLElement> _values = {};

  SettingsPanel(web.Document document) : super(document) {
    root.setAttribute('aria-label', 'House settings');
    root.appendChild(
      buildElement(
        document,
        'h2',
        cls: 'journal-title',
        text: 'House settings',
      ),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'settings-copy',
        text: 'Set the house voice without changing what happened in it.',
      ),
    );
    final levels = buildElement(document, 'div', cls: 'settings-grid');
    for (final setting in const [
      ('master', 'Master', 1.0),
      ('voice', 'Visitor voice', 1.0),
      ('effects', 'Effects', 1.0),
      ('ambience', 'House ambience', 1.0),
      ('music', 'Music', 1.0),
    ]) {
      levels.appendChild(_levelRow(document, setting.$1, setting.$2));
    }
    root.appendChild(levels);

    final muteRow = buildElement(document, 'label', cls: 'setting-toggle');
    final mute = document.createElement('input') as web.HTMLInputElement;
    mute.type = 'checkbox';
    mute.addEventListener(
      'change',
      ((web.Event _) => onMute?.call(mute.checked)).toJS,
    );
    muteRow.appendChild(mute);
    muteRow.appendChild(
      buildElement(document, 'span', text: 'Mute house audio'),
    );
    root.appendChild(muteRow);

    final close =
        buildElement(document, 'button', cls: 'door-continue', text: 'return')
            as web.HTMLButtonElement;
    close.setAttribute('type', 'button');
    close.addEventListener('click', ((web.Event _) => this.close()).toJS);
    root.appendChild(close);
  }

  web.HTMLElement _levelRow(web.Document document, String key, String label) {
    final row = buildElement(document, 'label', cls: 'setting-row');
    final title = buildElement(document, 'span', text: label);
    final input = document.createElement('input') as web.HTMLInputElement;
    input
      ..type = 'range'
      ..min = '0'
      ..max = '1'
      ..step = '0.05'
      ..value = '1';
    final id = 'setting-$key';
    input.id = id;
    title.setAttribute('for', id);
    final value = buildElement(document, 'output', text: '100%');
    input.addEventListener(
      'input',
      ((web.Event _) {
        final level = double.tryParse(input.value) ?? 1.0;
        value.textContent = '${(level * 100).round()}%';
        onLevel?.call(key, level);
      }).toJS,
    );
    row.appendChild(title);
    row.appendChild(input);
    row.appendChild(value);
    _levels[key] = input;
    _values[key] = value;
    return row;
  }

  void setLevel(String key, double value) {
    final input = _levels[key];
    final output = _values[key];
    if (input == null || output == null) return;
    final clamped = value.clamp(0.0, 1.0).toDouble();
    input.value = clamped.toString();
    output.textContent = '${(clamped * 100).round()}%';
  }
}
