import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';
import 'settings_registry.dart';

class SettingsPanel extends Panel {
  void Function(String key, double value)? onLevel;
  void Function(bool muted)? onMute;
  void Function(bool mono)? onMono;
  void Function(String key, double value)? onDisplay;
  void Function(bool highContrast)? onHighContrast;
  void Function(bool strongHighlights)? onStrongHighlights;
  final Map<String, web.HTMLInputElement> _levels = {};
  final Map<String, web.HTMLElement> _values = {};
  final Map<String, (double, double)> _ranges = {};
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
    for (final definition in SettingsRegistry.definitions.where(
      (definition) => definition.kind == SettingKind.level,
    )) {
      levels.appendChild(
        _levelRow(
          document,
          definition.key,
          definition.label,
          min: definition.min ?? 0,
          max: definition.max ?? 1,
        ),
      );
    }
    root.appendChild(levels);
    final toggles = buildElement(document, 'div', cls: 'settings-grid');
    for (final definition in SettingsRegistry.definitions.where(
      (definition) => definition.kind == SettingKind.toggle,
    )) {
      toggles.appendChild(_toggleRow(document, definition));
    }
    root.appendChild(toggles);

    final close =
        buildElement(document, 'button', cls: 'door-continue', text: 'return')
            as web.HTMLButtonElement;
    close.setAttribute('type', 'button');
    close.addEventListener('click', ((web.Event _) => this.close()).toJS);
    root.appendChild(close);
  }

  web.HTMLElement _toggleRow(
    web.Document document,
    SettingDefinition definition,
  ) {
    final row = buildElement(document, 'label', cls: 'setting-toggle');
    final input = document.createElement('input') as web.HTMLInputElement;
    input.type = 'checkbox';
    switch (definition.key) {
      case 'muted':
        _mute = input;
      case 'mono':
        _mono = input;
      case 'high-contrast':
        _highContrast = input;
      case 'strong-highlights':
        _strongHighlights = input;
    }
    input.addEventListener(
      'change',
      ((web.Event _) {
        switch (definition.key) {
          case 'muted':
            onMute?.call(input.checked);
          case 'mono':
            onMono?.call(input.checked);
          case 'high-contrast':
            onHighContrast?.call(input.checked);
          case 'strong-highlights':
            onStrongHighlights?.call(input.checked);
        }
      }).toJS,
    );
    row
      ..appendChild(input)
      ..appendChild(buildElement(document, 'span', text: definition.label));
    return row;
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
        // Display controls share the same range-row renderer as audio levels,
        // but must stay on the display preference path. Keeping the routing
        // decision here makes programmatic rows and browser events agree.
        if (key == 'brightness') {
          onDisplay?.call(key, level);
        } else {
          onLevel?.call(key, level);
        }
      }).toJS,
    );
    row.appendChild(title);
    row.appendChild(input);
    row.appendChild(value);
    _levels[key] = input;
    _values[key] = value;
    _ranges[key] = (min, max);
    return row;
  }

  void setLevel(String key, double value) {
    final input = _levels[key];
    final output = _values[key];
    if (input == null || output == null) return;
    final range = _ranges[key] ?? (0.0, 1.0);
    final clamped = value.clamp(range.$1, range.$2).toDouble();
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
