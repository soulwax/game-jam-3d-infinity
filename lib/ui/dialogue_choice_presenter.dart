import 'package:quarantine/ui/dialogue_controller.dart';
export 'package:quarantine/ui/dialogue_controller.dart' show DialogueResponseOption;

/// A formatted dialogue option ready for display.
class FormattedDialogueOption {
  /// The unique ID of the option.
  final String id;

  /// The 1-based index of the option (e.g. 1, 2, 3).
  final int index;

  /// The display label of the option.
  final String label;

  /// Whether this option represents silence.
  final bool isSilence;

  /// The keyboard shortcut key to select this option.
  final String shortcutKey;

  /// Creates a new formatted dialogue option.
  const FormattedDialogueOption({
    required this.id,
    required this.index,
    required this.label,
    required this.isSilence,
    required this.shortcutKey,
  });

  /// Serializes the option to JSON for diagnostics.
  Map<String, dynamic> toJson() => {
        'id': id,
        'index': index,
        'label': label,
        'isSilence': isSilence,
        'shortcutKey': shortcutKey,
      };
}

/// Formats and renders dialogue choices.
class DialogueChoicePresenter {
  /// Formats raw options into display options with shortcut keys.
  static List<FormattedDialogueOption> formatOptions(List<DialogueResponseOption> rawOptions) {
    final List<FormattedDialogueOption> result = [];
    int displayIndex = 1;

    for (final option in rawOptions) {
      if (option.isSilence) {
        result.add(FormattedDialogueOption(
          id: option.id,
          index: 0,
          label: option.text,
          isSilence: true,
          shortcutKey: 'Space',
        ));
      } else {
        result.add(FormattedDialogueOption(
          id: option.id,
          index: displayIndex,
          label: option.text,
          isSilence: false,
          shortcutKey: 'Digit$displayIndex',
        ));
        displayIndex++;
      }
    }

    return result;
  }

  /// Resolves a keyboard shortcut to an option ID.
  static String? resolveShortcut(String keyCode, List<FormattedDialogueOption> formatted) {
    for (final option in formatted) {
      if (option.shortcutKey == keyCode) {
        return option.id;
      }
    }
    return null;
  }

  /// Renders the options as inline HTML.
  static String renderOptionsHtml(List<FormattedDialogueOption> options, {String? selectedId}) {
    final buffer = StringBuffer();
    buffer.writeln('<div class="dialogue-options p5-staggered-options">');

    for (final option in options) {
      final isSelected = option.id == selectedId;
      final selectedAttr = isSelected ? ' data-selected="true"' : '';
      
      buffer.writeln('  <button class="dialogue-choice-btn p5-choice-strip" data-id="${option.id}"$selectedAttr tabindex="0">');
      if (!option.isSilence) {
        buffer.writeln('    <span class="choice-shortcut p5-diamond-tag">[${option.index}]</span>');
      } else {
        buffer.writeln('    <span class="choice-shortcut p5-silence-tag">[SPACE]</span>');
      }
      buffer.writeln('    <span class="choice-text p5-choice-label">${option.label}</span>');
      buffer.writeln('  </button>');
    }

    buffer.writeln('</div>');
    // Inject required styles for this component
    buffer.writeln('<style>');
    buffer.writeln('  .dialogue-choice-btn:hover { color: var(--brass); }');
    buffer.writeln('  .dialogue-choice-btn:focus { outline: 2px solid var(--focus); }');
    buffer.writeln('</style>');
    return buffer.toString();
  }
}
