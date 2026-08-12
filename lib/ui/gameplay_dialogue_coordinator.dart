import 'dart:math' as math;

import 'p5_gui_models.dart';

/// Coordinates in-game dialogue flow, typewriter text animation, and numeric choice routing.
class GameplayDialogueCoordinator {
  String? speakerName;
  String fullText = '';
  double textRevealProgress = 1.0;
  double charsPerSecond = 35.0;

  List<String> choices = [];
  int? selectedIndex;
  int? hoveredIndex;
  bool isVisitorPresent = false;
  double activeTime = 0.0;

  void Function(int index, String choice)? onChoiceSelected;
  void Function()? onDialogueAdvanced;

  /// Starts or updates dialogue encounter display.
  void setDialogue({
    required String? speaker,
    required String text,
    List<String> responseChoices = const [],
    bool isVisitor = true,
  }) {
    speakerName = speaker;
    fullText = text;
    choices = List.from(responseChoices);
    textRevealProgress = 0.0;
    selectedIndex = null;
    hoveredIndex = null;
    isVisitorPresent = isVisitor;
    activeTime = 0.0;
  }

  /// Clears active dialogue.
  void clear() {
    speakerName = null;
    fullText = '';
    choices = [];
    textRevealProgress = 1.0;
    selectedIndex = null;
    hoveredIndex = null;
    isVisitorPresent = false;
    activeTime = 0.0;
  }

  /// Advances typewriter reveal and animations.
  void update(double dt) {
    if (!isVisitorPresent && fullText.isEmpty && choices.isEmpty) return;

    activeTime += dt;
    if (fullText.isNotEmpty && textRevealProgress < 1.0) {
      final totalChars = fullText.length;
      final addedChars = charsPerSecond * dt;
      textRevealProgress = math.min(1.0, textRevealProgress + (addedChars / totalChars));
    }
  }

  /// Handles keyboard shortcuts (Digit1..Digit9, Numpad1..Numpad9, or Space for silence).
  /// Returns true if the key was consumed as a choice selection.
  bool handleKey(String code) {
    if (choices.isEmpty) return false;

    if (code == 'Space') {
      final silenceIndex = choices.indexWhere((c) => c.toLowerCase().contains('silent') || c.contains('...'));
      if (silenceIndex != -1) {
        selectChoice(silenceIndex);
        return true;
      }
    }

    int? choiceIndex;
    if (code.startsWith('Digit')) {
      final num = int.tryParse(code.substring(5));
      if (num != null && num >= 1 && num <= choices.length) {
        choiceIndex = num - 1;
      }
    } else if (code.startsWith('Numpad')) {
      final num = int.tryParse(code.substring(6));
      if (num != null && num >= 1 && num <= choices.length) {
        choiceIndex = num - 1;
      }
    }

    if (choiceIndex != null) {
      selectChoice(choiceIndex);
      return true;
    }
    return false;
  }

  /// Selects the choice at [index] and invokes callbacks.
  void selectChoice(int index) {
    if (index < 0 || index >= choices.length) return;
    selectedIndex = index;
    onChoiceSelected?.call(index, choices[index]);
  }

  /// Tests mouse position against choice hit boxes on the canvas.
  void handleMouseMove(double mouseX, double mouseY, List<CanvasHitBox> hitBoxes) {
    hoveredIndex = null;
    for (final box in hitBoxes) {
      if (box.contains(mouseX, mouseY)) {
        hoveredIndex = box.index;
        break;
      }
    }
  }

  /// Handles canvas click on choice hit boxes.
  bool handleMouseClick(double mouseX, double mouseY, List<CanvasHitBox> hitBoxes) {
    for (final box in hitBoxes) {
      if (box.contains(mouseX, mouseY)) {
        selectChoice(box.index);
        return true;
      }
    }
    return false;
  }

  /// Produces the snapshot for Persona 5 Canvas rendering.
  P5DialogueState toRenderState() {
    return P5DialogueState(
      speakerName: speakerName,
      fullText: fullText,
      revealFraction: textRevealProgress,
      choices: choices,
      selectedIndex: selectedIndex,
      hoveredIndex: hoveredIndex,
      isVisitorPresent: isVisitorPresent,
      timeInState: activeTime,
    );
  }
}
