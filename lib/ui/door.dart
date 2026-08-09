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

  final web.HTMLElement root;
  late final web.HTMLElement _speaker;
  late final web.HTMLElement _line;
  late final web.HTMLButtonElement _continueButton;
  late final web.HTMLElement _citeList;
  late final web.HTMLElement _citeResult;
  final List<web.HTMLButtonElement> _choiceButtons = [];
  JSFunction? _keyHandler;
  void Function(String choice)? onChoice;
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
    _citeList = buildElement(document, 'div', cls: 'door-cite-list');
    _citeResult = buildElement(document, 'div', cls: 'door-cite-result');
    root.appendChild(_citeList);
    root.appendChild(_citeResult);
    for (final choice in choices) {
      final btn =
          buildElement(document, 'button', cls: 'door-choice', text: choice)
              as web.HTMLButtonElement;
      btn.setAttribute('type', 'button');
      btn.addEventListener(
        'click',
        ((web.Event _) => onChoice?.call(choice)).toJS,
      );
      root.appendChild(btn);
      _choiceButtons.add(btn);
    }
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
        for (final button in _choiceButtons)
          if (button.style.display != 'none') button,
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
    _keyHandler = handler;
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
    for (final button in _choiceButtons) {
      button.style.display = '';
    }
    _continueButton.style.display = 'none';
    _citeList.textContent = '';
    _citeResult.textContent = '';
    root.className = 'door visible';
    root.removeAttribute('hidden');
    _choiceButtons.first.focus();
  }

  void showConversation(String line) {
    _line.textContent = _announcementPolicy.format(
      channel: '',
      text: line,
      essential: true,
    );
    for (final button in _choiceButtons) {
      button.style.display = 'none';
    }
    _continueButton.style.display = '';
    _citeResult.textContent = '';
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
    _citeList.textContent = '';
    _citeResult.textContent = '';
    root.className = 'door';
    root.setAttribute('hidden', '');
    final handler = _keyHandler;
    if (handler != null) {
      root.removeEventListener('keydown', handler);
      _keyHandler = null;
    }
  }
}
