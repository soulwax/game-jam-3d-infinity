import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';

class SettingsPanel extends Panel {
  void Function(String key, double value)? onLevel;
  void Function(bool muted)? onMute;
  void Function(bool mono)? onMono;
  void Function(String key, double value)? onDisplay;
  void Function(bool highContrast)? onHighContrast;
  void Function(bool strongHighlights)? onStrongHighlights;
  final Map<String, web.HTMLInputElement> _levels = {};
  final Map<String, web.HTMLElement> _values = {};
  web.HTMLInputElement? _mute;
  web.HTMLInputElement? _mono;
  web.HTMLInputElement? _highContrast;
  web.HTMLInputElement? _strongHighlights;

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

    final display = buildElement(document, 'div', cls: 'settings-grid');
    display.appendChild(
      _levelRow(
        document,
        'brightness',
        'Display brightness',
        min: 0.6,
        max: 1.4,
      ),
    );
    root.appendChild(display);

    final muteRow = buildElement(document, 'label', cls: 'setting-toggle');
    final mute = document.createElement('input') as web.HTMLInputElement;
    mute.type = 'checkbox';
    _mute = mute;
    mute.addEventListener(
      'change',
      ((web.Event _) => onMute?.call(mute.checked)).toJS,
    );
    muteRow.appendChild(mute);
    muteRow.appendChild(
      buildElement(document, 'span', text: 'Mute house audio'),
    );
    root.appendChild(muteRow);

    final monoRow = buildElement(document, 'label', cls: 'setting-toggle');
    final mono = document.createElement('input') as web.HTMLInputElement;
    mono.type = 'checkbox';
    _mono = mono;
    mono.addEventListener(
      'change',
      ((web.Event _) => onMono?.call(mono.checked)).toJS,
    );
    monoRow.appendChild(mono);
    monoRow.appendChild(
      buildElement(document, 'span', text: 'Mono-compatible mix'),
    );
    root.appendChild(monoRow);

    final contrastRow = buildElement(document, 'label', cls: 'setting-toggle');
    final contrast = document.createElement('input') as web.HTMLInputElement;
    contrast.type = 'checkbox';
    _highContrast = contrast;
    contrast.addEventListener(
      'change',
      ((web.Event _) => onHighContrast?.call(contrast.checked)).toJS,
    );
    contrastRow.appendChild(contrast);
    contrastRow.appendChild(
      buildElement(document, 'span', text: 'High-contrast interface'),
    );
    root.appendChild(contrastRow);

    final highlightsRow = buildElement(
      document,
      'label',
      cls: 'setting-toggle',
    );
    final highlights = document.createElement('input') as web.HTMLInputElement;
    highlights.type = 'checkbox';
    _strongHighlights = highlights;
    highlights.addEventListener(
      'change',
      ((web.Event _) => onStrongHighlights?.call(highlights.checked)).toJS,
    );
    highlightsRow.appendChild(highlights);
    highlightsRow.appendChild(
      buildElement(document, 'span', text: 'Strong focus highlights'),
    );
    root.appendChild(highlightsRow);

    final close =
        buildElement(document, 'button', cls: 'door-continue', text: 'return')
            as web.HTMLButtonElement;
    close.setAttribute('type', 'button');
    close.addEventListener('click', ((web.Event _) => this.close()).toJS);
    root.appendChild(close);
  }

  web.HTMLElement _levelRow(
    web.Document document,
    String key,
    String label, {
    double min = 0,
    double max = 1,
  }) {
    final row = buildElement(document, 'label', cls: 'setting-row');
    final title = buildElement(document, 'span', text: label);
    final input = document.createElement('input') as web.HTMLInputElement;
    input
      ..type = 'range'
      ..min = '$min'
      ..max = '$max'
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

  void setMute(bool value) {
    _mute?.checked = value;
  }

  void setMono(bool value) {
    _mono?.checked = value;
  }

  void setHighContrast(bool value) {
    _highContrast?.checked = value;
  }

  void setStrongHighlights(bool value) {
    _strongHighlights?.checked = value;
  }
}
