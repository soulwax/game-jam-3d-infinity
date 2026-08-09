import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';
import 'accessibility_presentation.dart';
import 'accessibility_settings.dart';

class AmbientNotice {
  AmbientNotice(web.Document document)
    : root = buildElement(document, 'div', cls: 'ambient-notice'),
      _captionRoot = buildElement(document, 'div', cls: 'caption-cue') {
    root
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    _captionRoot
      ..setAttribute('aria-hidden', 'true')
      ..setAttribute('data-caption-kind', 'non-speech');
    document.body!.appendChild(root);
    document.body!.appendChild(_captionRoot);
  }

  final web.HTMLElement root;
  final web.HTMLElement _captionRoot;
  bool _captionsEnabled = false;
  int _captionSequence = 0;
  AccessibilityAnnouncementPolicy _announcementPolicy =
      const AccessibilityAnnouncementPolicy(
        AccessibilityScreenReaderVerbosity.standard,
      );

  void setAccessibilityProfile(AccessibilitySettingsProfile profile) {
    _announcementPolicy = AccessibilityAnnouncementPolicy(
      profile.screenReaderVerbosity ??
          AccessibilityScreenReaderVerbosity.standard,
    );
  }

  void setCaptionsEnabled(bool enabled) {
    _captionsEnabled = enabled;
    if (!enabled) {
      _captionRoot
        ..textContent = ''
        ..className = 'caption-cue';
    }
  }

  void show(String channel, String text) {
    final announcement = _announcementPolicy.format(
      channel: channel,
      text: text,
    );
    if (announcement.isEmpty) return;
    root.textContent = announcement;
    root.className = 'ambient-notice visible';
    showCaption(announcement);
    web.window.setTimeout(
      ((JSAny? _) => root.className = 'ambient-notice').toJS,
      7000.toJS,
    );
  }

  /// Displays a short non-speech cue when captions are enabled.
  void showCaption(String text) {
    if (!_captionsEnabled || text.trim().isEmpty) return;
    final sequence = ++_captionSequence;
    _captionRoot
      ..textContent = '[ $text ]'
      ..className = 'caption-cue visible';
    web.window.setTimeout(
      ((JSAny? _) {
        if (sequence != _captionSequence) return;
        _captionRoot
          ..textContent = ''
          ..className = 'caption-cue';
      }).toJS,
      4200.toJS,
    );
  }
}
