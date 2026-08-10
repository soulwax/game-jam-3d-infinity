import 'package:web/web.dart' as web;

import 'panel.dart';
import 'pause_settings_contract.dart';
import 'brush_components.dart';
import 'brush_theme.dart';

/// Accessible category index for the settings surface.
class SettingsIndexPanel extends Panel {
  void Function(PauseSettingsCategory category)? onCategory;
  void Function()? onBack;

  SettingsIndexPanel(web.Document document) : super(document) {
    root
      ..className = '${root.className} brush-page-frame'
      ..setAttribute('aria-label', 'Settings categories')
      ..setAttribute('data-brush-kind', 'frame')
      ..setAttribute('data-brush-state', 'normal');
    root.appendChild(
      BrushComponents.heading(
        document,
        const BrushComponentContract(
          id: 'settings.heading',
          kind: BrushComponentKind.heading,
          label: 'Settings',
        ),
        level: 1,
      ),
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
      final label = PauseSettingsContract.labels[category]!;
      final button = BrushComponents.button(
        document,
        BrushComponentContract(
          id: PauseSettingsContract.ids[category]!,
          kind: BrushComponentKind.button,
          label: label,
          description: '$label settings',
        ),
        onPressed: () => onCategory?.call(category),
      );
      nav.appendChild(button);
    }
    final back = BrushComponents.button(
      document,
      const BrushComponentContract(
        id: 'settings.back',
        kind: BrushComponentKind.button,
        label: 'back',
        description: 'back to pause menu',
      ),
      onPressed: () => onBack?.call(),
    );
    nav.appendChild(back);
    root.appendChild(nav);
  }
}
