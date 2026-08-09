import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'panel.dart';
import 'pause_root_contract.dart';

/// The first semantic surface of the pause ledger.
///
/// Actions are native buttons with stable IDs so keyboard and screen-reader
/// drivers do not need to know the panel's visual layout.
class PauseRootPanel extends Panel {
  static const actionIds = PauseRootContract.actionIds;

  void Function()? onResume;
  void Function()? onSettings;
  void Function()? onControls;
  void Function()? onSave;
  void Function()? onHelp;
  void Function()? onBack;

  PauseRootPanel(web.Document document) : super(document) {
    root.setAttribute('aria-label', 'Pause menu');
    root.appendChild(
      buildElement(document, 'h1', cls: 'journal-title', text: 'Paused'),
    );
    root.appendChild(
      buildElement(
        document,
        'p',
        cls: 'settings-copy',
        text: 'The house waits. Choose what to do next.',
      ),
    );
    final actions = buildElement(document, 'nav', cls: 'pause-actions');
    actions.setAttribute('aria-label', 'Pause actions');
    _addAction(document, actions, PauseRootAction.resume, 'resume');
    _addAction(document, actions, PauseRootAction.settings, 'settings');
    _addAction(document, actions, PauseRootAction.controls, 'controls');
    _addAction(document, actions, PauseRootAction.save, 'save now');
    _addAction(document, actions, PauseRootAction.help, 'help');
    _addAction(document, actions, PauseRootAction.back, 'back');
    root.appendChild(actions);
  }

  void _addAction(
    web.Document document,
    web.HTMLElement parent,
    PauseRootAction action,
    String label,
  ) {
    final button =
        buildElement(document, 'button', cls: 'door-continue', text: label)
              as web.HTMLButtonElement
          ..setAttribute('type', 'button')
          ..id = actionIds[action]!
          ..setAttribute('aria-label', label);
    button.addEventListener(
      'click',
      ((web.Event _) {
        switch (action) {
          case PauseRootAction.resume:
            onResume?.call();
          case PauseRootAction.settings:
            onSettings?.call();
          case PauseRootAction.controls:
            onControls?.call();
          case PauseRootAction.save:
            onSave?.call();
          case PauseRootAction.help:
            onHelp?.call();
          case PauseRootAction.back:
            onBack?.call();
        }
      }).toJS,
    );
    parent.appendChild(button);
  }
}
