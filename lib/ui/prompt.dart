import 'package:web/web.dart' as web;

import '../config.dart';
import 'panel.dart';
import 'accessibility_presentation.dart';
import 'accessibility_settings.dart';

class Prompt {
  final web.HTMLElement root;
  String? _shown;
  AccessibilityAnnouncementPolicy _announcementPolicy =
      const AccessibilityAnnouncementPolicy(
        AccessibilityScreenReaderVerbosity.standard,
      );

  Prompt(web.Document document)
    : root = buildElement(document, 'div', cls: 'prompt') {
    root
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    root.style.setProperty('transition-duration', '${promptFadeSeconds}s');
    document.body!.appendChild(root);
  }

  void setAccessibilityProfile(AccessibilitySettingsProfile profile) {
    _announcementPolicy = AccessibilityAnnouncementPolicy(
      profile.screenReaderVerbosity ??
          AccessibilityScreenReaderVerbosity.standard,
    );
  }

  void show(String? text) {
    if (text == _shown) return;
    _shown = text;
    root.textContent = text == null
        ? ''
        : _announcementPolicy.format(channel: '', text: text, essential: true);
    root.className = text == null ? 'prompt' : 'prompt visible';
  }
}
