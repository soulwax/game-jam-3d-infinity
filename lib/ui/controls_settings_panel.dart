import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'controls_settings.dart';
import 'panel.dart';

class ControlsSettingsPanel extends Panel {
  void Function(ControlsSettingsProfile profile)? onChanged;
  void Function()? onBack;
  ControlsSettingsProfile _profile = ControlsSettingsProfile();
  late ControlsBindingEditor _editor;
  final Map<String, web.HTMLInputElement> _levels = {};
  final Map<String, web.HTMLInputElement> _toggles = {};
  final Map<String, web.HTMLButtonElement> _bindingButtons = {};
  web.HTMLElement? _status;
  web.HTMLElement? _conflictActions;

  ControlsSettingsPanel(web.Document document) : super(document) {
    _editor = ControlsBindingEditor(_profile);
    root.setAttribute('aria-label', 'Controls settings');
    root.appendChild(
      buildElement(document, 'h1', cls: 'journal-title', text: 'Controls'),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'settings-copy',
        text: 'Keyboard and mouse reference. Escape always returns to pause.',
      ),
    );
    final grid = buildElement(document, 'div', cls: 'settings-grid');
    _addLevel(
      document,
      grid,
      'horizontalSensitivity',
      'Mouse horizontal',
      0.1,
      3,
    );
    _addLevel(document, grid, 'verticalSensitivity', 'Mouse vertical', 0.1, 3);
    _addToggle(document, grid, 'invertX', 'Invert horizontal look');
    _addToggle(document, grid, 'invertY', 'Invert vertical look');
    _addToggle(document, grid, 'holdToInteract', 'Hold to interact');
    root.appendChild(grid);
    final reference = buildElement(document, 'div', cls: 'settings-grid');
    for (final entry in controlsActionLabels.entries) {
      final action = entry.key;
      final bindingValues = ControlsSettingsProfile().bindingsByAction[action];
      final bindingLabel = bindingValues == null || bindingValues.isEmpty
          ? 'unbound'
          : bindingValues.join(' / ');
      final row = buildElement(document, 'div', cls: 'setting-row');
      row.setAttribute('aria-label', '${entry.value}: $bindingLabel');
      row.appendChild(buildElement(document, 'span', text: entry.value));
      final button =
          buildElement(document, 'button', cls: 'door-continue')
                as web.HTMLButtonElement
            ..setAttribute('type', 'button')
            ..id = 'settings.controls.bind.$action';
      button.addEventListener(
        'click',
        ((web.Event _) {
          _beginCapture(action);
        }).toJS,
      );
      row.appendChild(button);
      reference.appendChild(row);
      _bindingButtons[action] = button;
    }
    root.appendChild(reference);
    _status = buildElement(document, 'p', cls: 'settings-copy');
    _status!.setAttribute('aria-live', 'polite');
    root.appendChild(_status!);
    _conflictActions = buildElement(document, 'div', cls: 'pause-actions');
    root.appendChild(_conflictActions!);
    _refreshBindings();
    final back =
        buildElement(document, 'button', cls: 'door-continue', text: 'back')
              as web.HTMLButtonElement
          ..setAttribute('type', 'button')
          ..id = 'settings.controls.back'
          ..setAttribute('aria-label', 'back to settings categories');
    back.addEventListener(
      'click',
      ((web.Event _) {
        onBack?.call();
      }).toJS,
    );
    root.appendChild(back);
  }

  @override
  void onKeyDown(web.KeyboardEvent e) {
    if (_editor.capturingAction == null) return;
    e.preventDefault();
    _finishCapture(_editor.capture(e.code));
  }

  void _beginCapture(String action) {
    final result = _editor.begin(action);
    _status?.textContent =
        result.message ?? 'press a key for $action; Escape cancels';
    _clearConflictActions();
  }

  void _finishCapture(BindingCaptureResult result) {
    _status?.textContent = result.message ?? result.status.name;
    if (result.status == BindingCaptureStatus.conflict) {
      _showConflictActions();
    } else if (result.status == BindingCaptureStatus.applied) {
      _profile = _editor.profile;
      onChanged?.call(_profile);
      _refreshBindings();
    } else {
      _clearConflictActions();
    }
  }

  void _showConflictActions() {
    _clearConflictActions();
    final parent = _conflictActions;
    if (parent == null) return;
    for (final resolution in BindingConflictResolution.values) {
      final button =
          buildElement(
                  parent.ownerDocument!,
                  'button',
                  cls: 'door-continue',
                  text: resolution.name,
                )
                as web.HTMLButtonElement
            ..setAttribute('type', 'button');
      button.addEventListener(
        'click',
        ((web.Event _) {
          _finishCapture(_editor.resolve(resolution));
        }).toJS,
      );
      parent.appendChild(button);
    }
  }

  void _clearConflictActions() {
    final parent = _conflictActions;
    if (parent == null) return;
    while (parent.firstChild != null) {
      parent.removeChild(parent.firstChild!);
    }
  }

  void _refreshBindings() {
    for (final entry in _bindingButtons.entries) {
      entry.value.textContent =
          _editor.profile.bindings[entry.key] ?? 'unbound';
    }
  }

  void _addLevel(
    web.Document document,
    web.HTMLElement parent,
    String key,
    String label,
    double min,
    double max,
  ) {
    final row = buildElement(document, 'label', cls: 'setting-row');
    row.appendChild(buildElement(document, 'span', text: label));
    final input = document.createElement('input') as web.HTMLInputElement
      ..type = 'range'
      ..min = '$min'
      ..max = '$max'
      ..step = '0.1';
    input.addEventListener(
      'input',
      ((web.Event _) {
        final value = double.tryParse(input.value) ?? 1;
        _emit(
          key == 'horizontalSensitivity'
              ? _profile.copyWith(horizontalSensitivity: value)
              : _profile.copyWith(verticalSensitivity: value),
        );
      }).toJS,
    );
    row.appendChild(input);
    parent.appendChild(row);
    _levels[key] = input;
  }

  void _addToggle(
    web.Document document,
    web.HTMLElement parent,
    String key,
    String label,
  ) {
    final row = buildElement(document, 'label', cls: 'setting-toggle');
    final input = document.createElement('input') as web.HTMLInputElement
      ..type = 'checkbox';
    input.addEventListener(
      'change',
      ((web.Event _) {
        final value = input.checked;
        _emit(switch (key) {
          'invertX' => _profile.copyWith(invertX: value),
          'invertY' => _profile.copyWith(invertY: value),
          _ => _profile.copyWith(holdToInteract: value),
        });
      }).toJS,
    );
    row
      ..appendChild(input)
      ..appendChild(buildElement(document, 'span', text: label));
    parent.appendChild(row);
    _toggles[key] = input;
  }

  void _emit(ControlsSettingsProfile profile) {
    _profile = profile;
    onChanged?.call(profile);
  }

  void setProfile(ControlsSettingsProfile profile) {
    _profile = profile;
    _editor = ControlsBindingEditor(profile);
    _levels['horizontalSensitivity']?.value = profile.horizontalSensitivity
        .toString();
    _levels['verticalSensitivity']?.value = profile.verticalSensitivity
        .toString();
    _toggles['invertX']?.checked = profile.invertX;
    _toggles['invertY']?.checked = profile.invertY;
    _toggles['holdToInteract']?.checked = profile.holdToInteract;
    _refreshBindings();
  }
}
