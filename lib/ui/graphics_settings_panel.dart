import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'graphics_settings.dart';
import 'panel.dart';

class GraphicsSettingsPanel extends Panel {
  void Function(GraphicsSettingsProfile profile)? onChanged;
  void Function()? onBack;
  final Map<String, web.HTMLSelectElement> _selects = {};
  web.HTMLInputElement? _dynamic;
  web.HTMLElement? _status;
  GraphicsSettingsProfile _profile = const GraphicsSettingsProfile();

  GraphicsSettingsPanel(web.Document document) : super(document) {
    root.setAttribute('aria-label', 'Graphics settings');
    root.appendChild(
      buildElement(document, 'h1', cls: 'journal-title', text: 'Graphics'),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'settings-copy',
        text: 'Choose a visual budget without changing simulation truth.',
      ),
    );
    final grid = buildElement(document, 'div', cls: 'settings-grid');
    _addSelect(document, grid, 'preset', 'quality preset', {
      'high': 'High',
      'standard': 'Standard',
      'safe': 'Safe',
      'custom': 'Custom',
    });
    _addSelect(document, grid, 'renderScale', 'render scale', {
      'auto': 'Auto',
      '0.50': '50%',
      '0.67': '67%',
      '0.75': '75%',
      '0.85': '85%',
      '1.00': '100%',
    });
    _addSelect(document, grid, 'frameTarget', 'frame target', {
      '30': '30 fps',
      '60': '60 fps',
      'display': 'Display rate',
    });
    _addSelect(document, grid, 'antialiasing', 'anti-aliasing', {
      'off': 'Off',
      'fxaa': 'FXAA-like',
      'msaa2': 'MSAA 2x',
      'msaa4': 'MSAA 4x',
    });
    _addSelect(document, grid, 'textureQuality', 'texture quality', {
      'high': 'High',
      'medium': 'Medium',
      'low': 'Low',
    });
    final toggle = buildElement(document, 'label', cls: 'setting-toggle');
    _dynamic = document.createElement('input') as web.HTMLInputElement;
    _dynamic!.type = 'checkbox';
    _dynamic!.addEventListener(
      'change',
      ((JSAny? _) {
        _emit(_profile.copyWith(dynamicResolution: _dynamic!.checked));
      }).toJS,
    );
    toggle
      ..appendChild(_dynamic!)
      ..appendChild(buildElement(document, 'span', text: 'Dynamic resolution'));
    grid.appendChild(toggle);
    root.appendChild(grid);
    _status = buildElement(document, 'p', cls: 'settings-copy');
    _status!.setAttribute('aria-live', 'polite');
    root.appendChild(_status!);
    final back =
        buildElement(document, 'button', cls: 'door-continue', text: 'back')
              as web.HTMLButtonElement
          ..setAttribute('type', 'button')
          ..id = 'settings.graphics.back'
          ..setAttribute('aria-label', 'back to settings categories');
    back.addEventListener(
      'click',
      ((JSAny? _) {
        final callback = onBack;
        if (callback != null) {
          callback();
        } else {
          close();
        }
      }).toJS,
    );
    root.appendChild(back);
  }

  void _addSelect(
    web.Document document,
    web.HTMLElement parent,
    String key,
    String label,
    Map<String, String> options,
  ) {
    final row = buildElement(document, 'label', cls: 'setting-row');
    row.appendChild(buildElement(document, 'span', text: label));
    final select = document.createElement('select') as web.HTMLSelectElement;
    select.id = 'settings.graphics.$key';
    for (final entry in options.entries) {
      final option = document.createElement('option') as web.HTMLOptionElement
        ..value = entry.key
        ..textContent = entry.value;
      select.appendChild(option);
    }
    select.addEventListener(
      'change',
      ((JSAny? _) {
        final value = select.value;
        _emit(switch (key) {
          'preset' => _profile.copyWith(
            preset: GraphicsPreset.values.firstWhere(
              (item) => item.name == value,
            ),
          ),
          'renderScale' => _profile.copyWith(renderScale: value),
          'frameTarget' => _profile.copyWith(frameTarget: value),
          'antialiasing' => _profile.copyWith(antialiasing: value),
          'textureQuality' => _profile.copyWith(textureQuality: value),
          _ => _profile,
        });
      }).toJS,
    );
    row.appendChild(select);
    parent.appendChild(row);
    _selects[key] = select;
  }

  void _emit(GraphicsSettingsProfile profile) {
    profile.validate();
    _profile = profile;
    onChanged?.call(profile);
  }

  void setState(
    GraphicsSettingsProfile requested,
    GraphicsSettingsProfile effective, {
    List<String> downgradeReasons = const [],
  }) {
    _profile = requested;
    _selects['preset']?.value = requested.preset.name;
    _selects['renderScale']?.value = requested.renderScale;
    _selects['frameTarget']?.value = requested.frameTarget;
    _selects['antialiasing']?.value = requested.antialiasing;
    _selects['textureQuality']?.value = requested.textureQuality;
    _dynamic?.checked = requested.dynamicResolution;
    _status?.textContent = downgradeReasons.isEmpty
        ? 'effective graphics match requested settings'
        : 'effective fallback: ${downgradeReasons.join('; ')}';
    if (effective != requested && downgradeReasons.isEmpty) {
      _status?.textContent = 'effective graphics profile differs';
    }
  }
}
