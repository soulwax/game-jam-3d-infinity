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
    'Open the front door and let them in',
    'Keep the chain on and speak through the gap',
    'Answer them without opening the door',
    'Pass a message through the letterbox',
    'Do not answer; let the knock fade',
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

  // Spring-damper rotational door physics simulation
  double doorAngleRad = 0.0;
  double targetDoorAngleRad = 0.0;
  double angularVelocityRad = 0.0;
  bool isChainEngaged = false;

  static const double maxUnchainedAngleRad = 1.309; // ~75 degrees
  static const double maxChainedAngleRad = 0.209; // ~12 degrees
  static const double doorSpringStiffness = 32.0;
  static const double doorDampingCoeff = 11.5;

  AccessibilityAnnouncementPolicy _announcementPolicy =
      const AccessibilityAnnouncementPolicy(
        AccessibilityScreenReaderVerbosity.standard,
      );

  Door(web.Document document)
    : root = buildElement(document, 'div', cls: 'door') {
    root
      ..setAttribute('role', 'region')
      ..setAttribute('aria-modal', 'false')
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

  void updatePhysics(double dt) {
    if (dt <= 0) return;
    final maxAngle = isChainEngaged ? maxChainedAngleRad : maxUnchainedAngleRad;
    final clampedTarget = targetDoorAngleRad.clamp(0.0, maxAngle);
    final accel =
        (clampedTarget - doorAngleRad) * doorSpringStiffness -
        angularVelocityRad * doorDampingCoeff;
    angularVelocityRad += accel * dt;
    doorAngleRad += angularVelocityRad * dt;
    if (doorAngleRad < 0.0) {
      doorAngleRad = 0.0;
      angularVelocityRad = 0.0;
    } else if (doorAngleRad > maxAngle) {
      doorAngleRad = maxAngle;
      angularVelocityRad =
          -angularVelocityRad * 0.35; // elastic chain/frame bounce
    }
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
    // The renderer canvas owns focus and pointer interaction.
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
    // Continue is rendered by CanvasP5GuiEngine.
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
    // Choice focus remains on the game canvas.
  }

  void showReactionReply(String line, String reply) {
    _line.textContent = _announcementPolicy.format(
      channel: '',
      text: '$line\n\n$reply',
      essential: true,
    );
    _choiceStatus.textContent = '';
    _continueButton.style.display = '';
    // The visible continue control is renderer-owned.
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
