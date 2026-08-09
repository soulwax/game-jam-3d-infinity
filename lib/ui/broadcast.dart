import 'package:web/web.dart' as web;

import 'panel.dart';
import 'accessibility_presentation.dart';
import 'accessibility_settings.dart';

class Broadcast {
  final web.HTMLElement root;
  String? _shownText;
  AccessibilityAnnouncementPolicy _announcementPolicy =
      const AccessibilityAnnouncementPolicy(
        AccessibilityScreenReaderVerbosity.standard,
      );

  Broadcast(web.Document document)
    : root = buildElement(document, 'div', cls: 'broadcast') {
    root
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    document.body!.appendChild(root);
  }

  void setAccessibilityProfile(AccessibilitySettingsProfile profile) {
    _announcementPolicy = AccessibilityAnnouncementPolicy(
      profile.screenReaderVerbosity ??
          AccessibilityScreenReaderVerbosity.standard,
    );
  }

  void update(String? text, bool inLivingRoom) {
    final shown = inLivingRoom ? text : null;
    if (shown == _shownText) return;
    _shownText = shown;
    root.textContent = shown == null
        ? ''
        : _announcementPolicy.format(channel: 'broadcast', text: shown);
    root.className = shown == null ? 'broadcast' : 'broadcast visible';
  }
}
