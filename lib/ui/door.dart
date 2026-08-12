import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';
import 'accessibility_presentation.dart';
import 'accessibility_settings.dart';

class Door {
  static const List<String> choices = [
    'open',
    'chain',
    'through-door',
    'letterbox',
    'ignore',
  ];

  static const List<String> choiceLabels = [
    'Open the door',
    'Keep the chain on',
    'Answer through the door',
    'Use the letterbox',
    'Ignore the knock',
  ];

  final web.HTMLElement root;
  late final web.HTMLElement _speaker;
  late final web.HTMLElement _line;
  late final web.HTMLElement _choiceStatus;
  late final web.HTMLButtonElement _continueButton;
  late final web.HTMLElement _citeList;
  late final web.HTMLElement _citeResult;
  void Function()? onContinue;
  void Function(int ordinal)? onCite;
  bool visitorPresent = false;
  AccessibilityAnnouncementPolicy _announcementPolicy =
      const AccessibilityAnnouncementPolicy(
        AccessibilityScreenReaderVerbosity.standard,
      );

  Door(web.Document document)
    : root = buildElement(document, 'div', cls: 'door') {
    root
      ..setAttribute('role', 'dialog')
      ..setAttribute('aria-modal', 'true')
      ..setAttribute('aria-label', 'Front door visitor')
      ..setAttribute('tabindex', '-1')
      ..setAttribute('hidden', '');
    _speaker = buildElement(document, 'div', cls: 'door-speaker');
    _line = buildElement(document, 'div', cls: 'door-line');
    _line
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    root.appendChild(_speaker);
    root.appendChild(_line);
    _choiceStatus = buildElement(document, 'div', cls: 'door-choice-status');
    _choiceStatus
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    root.appendChild(_choiceStatus);
    _citeList = buildElement(document, 'div', cls: 'door-cite-list');
    _citeResult = buildElement(document, 'div', cls: 'door-cite-result');
    root.appendChild(_citeList);
    root.appendChild(_citeResult);
    _continueButton =
        buildElement(document, 'button', cls: 'door-continue', text: 'continue')
            as web.HTMLButtonElement;
    _continueButton.setAttribute('type', 'button');
    _continueButton.addEventListener(
      'click',
      ((web.Event _) => onContinue?.call()).toJS,
    );
    root.appendChild(_continueButton);
    final handler = ((web.KeyboardEvent event) {
      if (!visitorPresent || event.code != 'Tab') return;
      final focusable = <web.HTMLElement>[
        if (_continueButton.style.display != 'none') _continueButton,
      ];
      final citeButtons = _citeList.querySelectorAll('button');
      for (var i = 0; i < citeButtons.length; i++) {
        final node = citeButtons.item(i);
        if (node is web.HTMLElement) focusable.add(node);
      }
      if (focusable.isEmpty) return;
      final active = document.activeElement;
      if (event.shiftKey) {
        if (active == focusable.first || !focusable.contains(active)) {
          event.preventDefault();
          focusable.last.focus();
        }
      } else if (active == focusable.last || !focusable.contains(active)) {
        event.preventDefault();
        focusable.first.focus();
      }
    }).toJS;
    root.addEventListener('keydown', handler);
    document.body!.appendChild(root);
  }

  void setAccessibilityProfile(AccessibilitySettingsProfile profile) {
    _announcementPolicy = AccessibilityAnnouncementPolicy(
      profile.screenReaderVerbosity ??
          AccessibilityScreenReaderVerbosity.standard,
    );
  }

  void showArrival(String visitor, String line) {
    visitorPresent = true;
    _speaker.textContent = visitor;
    _line.textContent = _announcementPolicy.format(
      channel: '',
      text: line,
      essential: true,
    );
    _choiceStatus.textContent = _choiceAnnouncement(choiceLabels);
    _continueButton.style.display = 'none';
    _citeList.textContent = '';
    _citeResult.textContent = '';
    root.className = 'door visible';
    root.removeAttribute('hidden');
    root.focus();
  }

  void showConversation(String line, {bool requiresReaction = false}) {
    _line.textContent = _announcementPolicy.format(
      channel: '',
      text: line,
      essential: true,
    );
    _choiceStatus.textContent = '';
    _continueButton.style.display = requiresReaction ? 'none' : '';
    _citeResult.textContent = '';
    if (!requiresReaction) _continueButton.focus();
  }

  void showReactionChoices(
    List<(String id, String label)> choices, {
    String? selectedId,
  }) {
    _continueButton.style.display = selectedId == null ? 'none' : '';
    final labels = [
      for (final (id, label) in choices)
        selectedId == id ? '$label, selected' : label,
    ];
    _choiceStatus.textContent = _choiceAnnouncement(labels);
    if (selectedId == null) root.focus();
  }

  void showReactionReply(String line, String reply) {
    _line.textContent = _announcementPolicy.format(
      channel: '',
      text: '$line\n\n$reply',
      essential: true,
    );
    _choiceStatus.textContent = '';
    _continueButton.style.display = '';
    _continueButton.focus();
  }

  void showCitableEntries(web.Document document, List<(int, String)> entries) {
    _citeList.textContent = '';
    for (final (ordinal, text) in entries) {
      final btn =
          buildElement(document, 'button', cls: 'door-cite-entry', text: text)
              as web.HTMLButtonElement;
      btn.setAttribute('type', 'button');
      btn.addEventListener(
        'click',
        ((web.Event _) => onCite?.call(ordinal)).toJS,
      );
      _citeList.appendChild(btn);
    }
  }

  void showCiteResult(String message) {
    _citeResult.textContent = _announcementPolicy.format(
      channel: '',
      text: message,
      essential: true,
    );
  }

  void hide() {
    visitorPresent = false;
    _choiceStatus.textContent = '';
    _citeList.textContent = '';
    _citeResult.textContent = '';
    root.className = 'door';
    root.setAttribute('hidden', '');
  }

  static String _choiceAnnouncement(List<String> labels) {
    if (labels.isEmpty) return '';
    final entries = [
      for (var i = 0; i < labels.length; i++) '${i + 1}: ${labels[i]}',
    ].join('; ');
    return 'Choices are rendered in the game view. Press number keys or click '
        'the in-game choice: $entries.';
  }
}
