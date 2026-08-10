import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';
import 'audio_settings.dart';
import 'accessibility_settings.dart';
import 'brush_components.dart';
import 'brush_theme.dart';
import 'pause_settings_contract.dart';
import 'settings_registry.dart';
import 'gameplay_settings.dart';

class SettingsPanel extends Panel {
  final PauseSettingsCategory? page;
  void Function(String key, double value)? onLevel;
  void Function(bool muted)? onMute;
  void Function(bool mono)? onMono;
  void Function(String key, double value)? onDisplay;
  void Function(bool highContrast)? onHighContrast;
  void Function(bool strongHighlights)? onStrongHighlights;
  void Function(SettingCategory category)? onResetCategory;
  void Function()? onResetAll;
  void Function()? onBack;
  void Function(AudioSettingsProfile profile)? onAudioOptions;
  void Function(GameplaySettingsProfile profile)? onGameplayOptions;
  void Function(AccessibilitySettingsProfile profile)? onAccessibilityProfile;
  void Function()? onResetAccessibilityProfile;
  final Map<String, web.HTMLInputElement> _levels = {};
  final Map<String, web.HTMLElement> _values = {};
  final Map<String, (double, double)> _ranges = {};
  web.HTMLInputElement? _mute;
  web.HTMLInputElement? _mono;
  web.HTMLInputElement? _highContrast;
  web.HTMLInputElement? _strongHighlights;
  final Map<String, web.HTMLSelectElement> _gameplaySelects = {};
  web.HTMLInputElement? _contextualReminders;
  GameplaySettingsProfile _gameplayOptions = GameplaySettingsProfile.firstRun;

  SettingsPanel(web.Document document, {this.page}) : super(document) {
    final pageLabel = page == null
        ? 'House settings'
        : '${PauseSettingsContract.labels[page]} settings';
    root
      ..className = '${root.className} brush-page-frame'
      ..setAttribute('aria-label', pageLabel)
      ..setAttribute('data-brush-kind', 'frame')
      ..setAttribute('data-brush-state', 'normal');
    root.appendChild(
      BrushComponents.heading(
        document,
        BrushComponentContract(
          id: 'settings.${page?.name ?? 'root'}.heading',
          kind: BrushComponentKind.heading,
          label: pageLabel,
        ),
        level: 2,
      ),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'settings-copy',
        text:
            'Change presentation without changing what happened in the house.',
      ),
    );
    final levels = buildElement(document, 'div', cls: 'settings-grid');
    for (final definition in SettingsRegistry.definitions.where(
      (definition) =>
          definition.kind == SettingKind.level && _includes(definition),
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
      (definition) =>
          definition.kind == SettingKind.toggle && _includes(definition),
    )) {
      toggles.appendChild(_toggleRow(document, definition));
    }
    root.appendChild(toggles);

    if (page == PauseSettingsCategory.audio) {
      root.appendChild(_buildAudioOptions(document));
    }
    if (page == PauseSettingsCategory.accessibility) {
      root.appendChild(_buildAccessibilityOptions(document));
    }
    if (page == PauseSettingsCategory.gameplay) {
      root.appendChild(_buildGameplayOptions(document));
    }

    final resets = buildElement(document, 'div', cls: 'settings-grid');
    for (final category in SettingCategory.values.where(_includesCategory)) {
      final button = BrushComponents.button(
        document,
        BrushComponentContract(
          id: 'settings.${page?.name ?? 'root'}.reset.${category.name}',
          kind: BrushComponentKind.button,
          label: 'reset ${category.name}',
          description: 'restore ${category.name} settings to defaults',
        ),
        onPressed: () => onResetCategory?.call(category),
      );
      resets.appendChild(button);
    }
    final resetAll = BrushComponents.button(
      document,
      BrushComponentContract(
        id: 'settings.${page?.name ?? 'root'}.reset.all',
        kind: BrushComponentKind.button,
        label: 'reset all settings',
        description: 'restore all settings to defaults',
        state: BrushComponentState.destructive,
      ),
      onPressed: () => onResetAll?.call(),
    );
    resets.appendChild(resetAll);
    root.appendChild(resets);

    final close = BrushComponents.button(
      document,
      BrushComponentContract(
        id: 'settings.${page?.name ?? 'root'}.back',
        kind: BrushComponentKind.button,
        label: 'return',
        description: 'return to settings categories',
      ),
      onPressed: () {
        final back = onBack;
        if (back != null) {
          back();
        } else {
          closePanel();
        }
      },
    );
    root.appendChild(close);
  }

  web.HTMLElement _buildAccessibilityOptions(web.Document document) {
    final grid = buildElement(document, 'div', cls: 'settings-grid');
    final reduced = _addAccessibilityToggle(
      document,
      grid,
      'reducedMotion',
      'reduced motion (system default)',
    );
    final photosafe = _addAccessibilityToggle(
      document,
      grid,
      'photosensitivitySafe',
      'photosensitivity-safe effects (system default)',
    );
    final captions = _addAccessibilityToggle(
      document,
      grid,
      'captions',
      'non-speech captions',
    );
    final row = buildElement(document, 'label', cls: 'setting-row');
    row.appendChild(buildElement(document, 'span', text: 'UI scale'));
    final scale = document.createElement('input') as web.HTMLInputElement
      ..type = 'range'
      ..min = '0.8'
      ..max = '2.0'
      ..step = '0.1'
      ..value = '1.0';
    scale.addEventListener(
      'input',
      ((web.Event _) {
        _accessibilityProfile = _accessibilityProfile.copyWith(
          uiScale: double.tryParse(scale.value) ?? 1.0,
        );
        onAccessibilityProfile?.call(_accessibilityProfile);
      }).toJS,
    );
    row.appendChild(scale);
    grid.appendChild(row);
    final verbosityRow = buildElement(document, 'label', cls: 'setting-row');
    verbosityRow.appendChild(
      buildElement(document, 'span', text: 'screen-reader verbosity'),
    );
    final verbosity = document.createElement('select') as web.HTMLSelectElement
      ..id = 'settings.accessibility.screen-reader-verbosity';
    for (final value in AccessibilityScreenReaderVerbosity.values) {
      verbosity.appendChild(
        document.createElement('option') as web.HTMLOptionElement
          ..value = value.name
          ..textContent = value.name,
      );
    }
    verbosity.addEventListener(
      'change',
      ((web.Event _) {
        _accessibilityProfile = _accessibilityProfile.copyWith(
          screenReaderVerbosity: AccessibilityScreenReaderVerbosity.values
              .firstWhere((value) => value.name == verbosity.value),
        );
        onAccessibilityProfile?.call(_accessibilityProfile);
      }).toJS,
    );
    verbosityRow.appendChild(verbosity);
    grid.appendChild(verbosityRow);
    final reset =
        buildElement(
                document,
                'button',
                cls: 'door-continue',
                text: 'follow system accessibility defaults',
              )
              as web.HTMLButtonElement
          ..setAttribute('type', 'button')
          ..setAttribute('aria-label', 'follow system accessibility defaults');
    reset.addEventListener(
      'click',
      ((web.Event _) => onResetAccessibilityProfile?.call()).toJS,
    );
    grid.appendChild(reset);
    _accessibilityInputs.addAll({
      'reducedMotion': reduced,
      'photosensitivitySafe': photosafe,
      'captions': captions,
      'uiScale': scale,
    });
    _accessibilitySelects['screenReaderVerbosity'] = verbosity;
    return grid;
  }

  web.HTMLInputElement _addAccessibilityToggle(
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
        _accessibilityProfile = switch (key) {
          'reducedMotion' => _accessibilityProfile.copyWith(
            reducedMotion: value,
          ),
          'photosensitivitySafe' => _accessibilityProfile.copyWith(
            photosensitivitySafe: value,
          ),
          _ => _accessibilityProfile.copyWith(captions: value),
        };
        onAccessibilityProfile?.call(_accessibilityProfile);
      }).toJS,
    );
    row
      ..appendChild(input)
      ..appendChild(buildElement(document, 'span', text: label));
    parent.appendChild(row);
    return input;
  }

  AccessibilitySettingsProfile _accessibilityProfile =
      const AccessibilitySettingsProfile();
  final Map<String, web.HTMLInputElement> _accessibilityInputs = {};
  final Map<String, web.HTMLSelectElement> _accessibilitySelects = {};

  void setAccessibilityProfile(AccessibilitySettingsProfile profile) {
    _accessibilityProfile = profile;
    _accessibilityInputs['reducedMotion']?.checked =
        profile.reducedMotion ?? false;
    _accessibilityInputs['photosensitivitySafe']?.checked =
        profile.photosensitivitySafe ?? false;
    _accessibilityInputs['captions']?.checked = profile.captions ?? false;
    _accessibilityInputs['uiScale']?.value = profile.resolvedUiScale.toString();
    _accessibilitySelects['screenReaderVerbosity']?.value =
        (profile.screenReaderVerbosity ??
                AccessibilityScreenReaderVerbosity.standard)
            .name;
  }

  web.HTMLElement _buildGameplayOptions(web.Document document) {
    final grid = buildElement(document, 'div', cls: 'settings-grid');
    _addGameplaySelect(
      document,
      grid,
      'interactionMode',
      'interaction mode',
      GameplayInteractionMode.values,
    );
    _addGameplaySelect(
      document,
      grid,
      'promptDensity',
      'prompt density',
      GameplayPromptDensity.values,
    );
    _addGameplaySelect(
      document,
      grid,
      'textPacing',
      'dialogue text pacing',
      GameplayTextPacing.values,
    );
    _addGameplaySelect(
      document,
      grid,
      'journalLayout',
      'journal layout',
      GameplayJournalLayout.values,
    );
    _addGameplaySelect(
      document,
      grid,
      'confirmations',
      'confirmations',
      GameplayConfirmationLevel.values,
    );
    _addGameplaySelect(
      document,
      grid,
      'saveFeedback',
      'save feedback',
      GameplaySaveFeedback.values,
    );
    _addGameplaySelect(
      document,
      grid,
      'focusLossBehavior',
      'when the window loses focus',
      GameplayFocusLossBehavior.values,
    );
    final row = buildElement(document, 'label', cls: 'setting-toggle');
    final reminders = document.createElement('input') as web.HTMLInputElement
      ..type = 'checkbox'
      ..checked = _gameplayOptions.contextualReminders;
    reminders.addEventListener(
      'change',
      ((web.Event _) {
        _gameplayOptions = _gameplayOptions.copyWith(
          contextualReminders: reminders.checked,
        );
        onGameplayOptions?.call(_gameplayOptions);
      }).toJS,
    );
    row
      ..appendChild(reminders)
      ..appendChild(
        buildElement(document, 'span', text: 'contextual reminders'),
      );
    grid.appendChild(row);
    _contextualReminders = reminders;
    return grid;
  }

  void _addGameplaySelect<T extends Enum>(
    web.Document document,
    web.HTMLElement parent,
    String key,
    String label,
    List<T> values,
  ) {
    final row = buildElement(document, 'label', cls: 'setting-row');
    row.appendChild(buildElement(document, 'span', text: label));
    final select = document.createElement('select') as web.HTMLSelectElement
      ..id = 'settings.gameplay.$key';
    for (final value in values) {
      select.appendChild(
        document.createElement('option') as web.HTMLOptionElement
          ..value = value.name
          ..textContent = value.name,
      );
    }
    select.addEventListener(
      'change',
      ((web.Event _) {
        _gameplayOptions = switch (key) {
          'interactionMode' => _gameplayOptions.copyWith(
            interactionMode: GameplayInteractionMode.values.firstWhere(
              (value) => value.name == select.value,
            ),
          ),
          'promptDensity' => _gameplayOptions.copyWith(
            promptDensity: GameplayPromptDensity.values.firstWhere(
              (value) => value.name == select.value,
            ),
          ),
          'textPacing' => _gameplayOptions.copyWith(
            textPacing: GameplayTextPacing.values.firstWhere(
              (value) => value.name == select.value,
            ),
          ),
          'journalLayout' => _gameplayOptions.copyWith(
            journalLayout: GameplayJournalLayout.values.firstWhere(
              (value) => value.name == select.value,
            ),
          ),
          'confirmations' => _gameplayOptions.copyWith(
            confirmations: GameplayConfirmationLevel.values.firstWhere(
              (value) => value.name == select.value,
            ),
          ),
          'saveFeedback' => _gameplayOptions.copyWith(
            saveFeedback: GameplaySaveFeedback.values.firstWhere(
              (value) => value.name == select.value,
            ),
          ),
          _ => _gameplayOptions.copyWith(
            focusLossBehavior: GameplayFocusLossBehavior.values.firstWhere(
              (value) => value.name == select.value,
            ),
          ),
        };
        onGameplayOptions?.call(_gameplayOptions);
      }).toJS,
    );
    row.appendChild(select);
    parent.appendChild(row);
    _gameplaySelects[key] = select;
  }

  void setGameplayProfile(GameplaySettingsProfile profile) {
    _gameplayOptions = profile;
    for (final entry in _gameplaySelects.entries) {
      entry.value.value = switch (entry.key) {
        'interactionMode' => profile.interactionMode.name,
        'promptDensity' => profile.promptDensity.name,
        'textPacing' => profile.textPacing.name,
        'journalLayout' => profile.journalLayout.name,
        'confirmations' => profile.confirmations.name,
        'saveFeedback' => profile.saveFeedback.name,
        _ => profile.focusLossBehavior.name,
      };
    }
    _contextualReminders?.checked = profile.contextualReminders;
  }

  web.HTMLElement _buildAudioOptions(web.Document document) {
    final grid = buildElement(document, 'div', cls: 'settings-grid');
    _addAudioSelect(document, grid, 'output', 'output', {
      for (final value in AudioOutputMode.values) value.name: value.name,
    });
    _addAudioSelect(document, grid, 'dynamicRange', 'dynamic range', {
      for (final value in AudioDynamicRange.values) value.name: value.name,
    });
    _addAudioSelect(document, grid, 'reverb', 'room effect', {
      for (final value in AudioReverbMode.values) value.name: value.name,
    });
    _addAudioSelect(document, grid, 'ducking', 'voice intelligibility', {
      for (final value in AudioDuckingMode.values) value.name: value.name,
    });
    return grid;
  }

  void _addAudioSelect(
    web.Document document,
    web.HTMLElement parent,
    String key,
    String label,
    Map<String, String> options,
  ) {
    final row = buildElement(document, 'label', cls: 'setting-row');
    row.appendChild(buildElement(document, 'span', text: label));
    final select = document.createElement('select') as web.HTMLSelectElement
      ..id = 'settings.audio.$key';
    for (final option in options.entries) {
      select.appendChild(
        document.createElement('option') as web.HTMLOptionElement
          ..value = option.key
          ..textContent = option.value,
      );
    }
    select.addEventListener(
      'change',
      ((web.Event _) {
        final current = _audioOptions;
        final next = switch (key) {
          'output' => current.copyWith(
            output: AudioOutputMode.values.firstWhere(
              (item) => item.name == select.value,
            ),
          ),
          'dynamicRange' => current.copyWith(
            dynamicRange: AudioDynamicRange.values.firstWhere(
              (item) => item.name == select.value,
            ),
          ),
          'reverb' => current.copyWith(
            reverb: AudioReverbMode.values.firstWhere(
              (item) => item.name == select.value,
            ),
          ),
          _ => current.copyWith(
            ducking: AudioDuckingMode.values.firstWhere(
              (item) => item.name == select.value,
            ),
          ),
        };
        _audioOptions = next;
        onAudioOptions?.call(next);
      }).toJS,
    );
    row.appendChild(select);
    parent.appendChild(row);
    _audioSelects[key] = select;
  }

  AudioSettingsProfile _audioOptions = const AudioSettingsProfile();
  final Map<String, web.HTMLSelectElement> _audioSelects = {};

  void setAudioOptions(AudioSettingsProfile profile) {
    _audioOptions = profile;
    for (final entry in _audioSelects.entries) {
      entry.value.value = switch (entry.key) {
        'output' => profile.output.name,
        'dynamicRange' => profile.dynamicRange.name,
        'reverb' => profile.reverb.name,
        _ => profile.ducking.name,
      };
    }
  }

  void closePanel() => close();

  bool _includes(SettingDefinition definition) {
    return switch (page) {
      null => true,
      PauseSettingsCategory.visual =>
        definition.category == SettingCategory.display,
      PauseSettingsCategory.accessibility =>
        definition.category == SettingCategory.accessibility,
      PauseSettingsCategory.audio =>
        definition.category == SettingCategory.audio,
      _ => false,
    };
  }

  bool _includesCategory(SettingCategory category) {
    return switch (page) {
      null => true,
      PauseSettingsCategory.visual => category == SettingCategory.display,
      PauseSettingsCategory.accessibility =>
        category == SettingCategory.accessibility,
      PauseSettingsCategory.audio => category == SettingCategory.audio,
      _ => false,
    };
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
