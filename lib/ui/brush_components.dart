import 'dart:js_interop';

import 'package:web/web.dart' hide Float32List;
import 'package:web/web.dart' as web;

import 'brush_theme.dart';
import 'panel.dart';

/// Native semantic elements with the brush-cut treatment attached by class.
/// These helpers deliberately keep the browser's element semantics intact.
final class BrushComponents {
  BrushComponents._();

  /// Decorative frame only; it carries no interaction semantics.
  static HTMLElement frame(Document document, {String? id}) {
    final frame = buildElement(document, 'div', cls: 'brush-frame');
    if (id != null && id.isNotEmpty) frame.id = id;
    return frame;
  }

  static HTMLElement heading(
    Document document,
    BrushComponentContract contract, {
    int level = 2,
  }) {
    contract.validate();
    if (level < 1 || level > 6) {
      throw ArgumentError.value(level, 'level', 'must be between 1 and 6');
    }
    final heading = buildElement(
      document,
      'h$level',
      cls: _classes('brush-heading', contract),
      text: contract.label,
    );
    _decorate(heading, contract);
    return heading;
  }

  static HTMLButtonElement button(
    Document document,
    BrushComponentContract contract, {
    void Function()? onPressed,
    String? text,
  }) {
    contract.validate();
    final button =
        buildElement(
              document,
              'button',
              cls: _classes('brush-button', contract),
              text: text ?? contract.label,
            )
            as HTMLButtonElement;
    _decorate(button, contract);
    button
      ..type = 'button'
      ..disabled = !contract.focusable;
    if (onPressed != null) {
      button.addEventListener('click', ((JSAny? _) => onPressed()).toJS);
    }
    return button;
  }

  static HTMLButtonElement tab(
    Document document,
    BrushComponentContract contract, {
    required bool selected,
    void Function()? onPressed,
  }) {
    final tab = button(document, contract, onPressed: onPressed);
    tab
      ..className = '${tab.className} brush-tab'
      ..setAttribute('role', 'tab')
      ..setAttribute('aria-selected', '$selected');
    return tab;
  }

  static HTMLInputElement toggle(
    Document document,
    BrushComponentContract contract, {
    required bool checked,
    void Function(bool value)? onChanged,
  }) {
    contract.validate();
    final input = document.createElement('input') as HTMLInputElement
      ..type = 'checkbox'
      ..checked = checked
      ..className = _classes('brush-toggle', contract)
      ..disabled = !contract.focusable;
    _decorate(input, contract);
    if (onChanged != null) {
      input.addEventListener(
        'change',
        ((JSAny? _) => onChanged(input.checked)).toJS,
      );
    }
    return input;
  }

  static HTMLInputElement slider(
    Document document,
    BrushComponentContract contract, {
    required double value,
    required double min,
    required double max,
    double step = 0.1,
    void Function(double value)? onChanged,
  }) {
    contract.validate();
    final input = document.createElement('input') as HTMLInputElement
      ..type = 'range'
      ..min = '$min'
      ..max = '$max'
      ..step = '$step'
      ..value = '$value'
      ..className = _classes('brush-slider', contract)
      ..disabled = !contract.focusable;
    _decorate(input, contract);
    if (onChanged != null) {
      input.addEventListener(
        'input',
        ((JSAny? _) {
          final next = double.tryParse(input.value);
          if (next != null) onChanged(next);
        }).toJS,
      );
    }
    return input;
  }

  static HTMLButtonElement keybind(
    Document document,
    BrushComponentContract contract, {
    required String binding,
    void Function()? onPressed,
  }) {
    final result = button(
      document,
      contract,
      onPressed: onPressed,
      text: binding,
    );
    result.setAttribute('aria-label', '${contract.accessibleName}: $binding');
    return result;
  }

  /// Updates only visual state metadata; element role, ID, and handlers stay
  /// intact while an interaction such as key capture changes state.
  static void setState(web.HTMLElement element, BrushComponentState state) {
    final classes =
        element.className
            .split(RegExp(r'\s+'))
            .where(
              (value) => value.isNotEmpty && !value.startsWith('brush-state-'),
            )
            .toList()
          ..add('brush-state-${state.name}');
    element.className = classes.join(' ');
    element.setAttribute('data-brush-state', state.name);
  }

  static web.HTMLElement pageFrame(
    web.Document document,
    BrushComponentContract contract,
  ) {
    contract.validate();
    final frame = buildElement(
      document,
      'section',
      cls: _classes('brush-page-frame', contract),
    );
    _decorate(frame, contract);
    return frame;
  }

  static web.HTMLElement dialog(
    web.Document document,
    BrushComponentContract contract,
  ) {
    contract.validate();
    final dialog = buildElement(
      document,
      'div',
      cls: _classes('brush-dialog', contract),
    );
    _decorate(dialog, contract);
    dialog.setAttribute('aria-modal', 'true');
    return dialog;
  }

  static web.HTMLElement toast(
    web.Document document,
    BrushComponentContract contract,
  ) {
    contract.validate();
    final toast = buildElement(
      document,
      'div',
      cls: _classes('brush-toast', contract),
    );
    _decorate(toast, contract);
    toast
      ..setAttribute('role', 'status')
      ..setAttribute('aria-live', 'polite')
      ..setAttribute('aria-atomic', 'true');
    return toast;
  }

  static String _classes(String base, BrushComponentContract contract) =>
      '$base brush-state-${contract.state.name}';

  static void _decorate(web.HTMLElement element, BrushComponentContract c) {
    element
      ..id = c.id
      ..setAttribute('aria-label', c.accessibleName)
      ..setAttribute('data-brush-kind', c.kind.name)
      ..setAttribute('data-brush-state', c.state.name);
    if (!c.focusable) element.setAttribute('aria-disabled', 'true');
  }
}
