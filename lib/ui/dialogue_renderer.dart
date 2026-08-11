/// Handles dialogue text rendering, typewriter effects, and CSS styling tokens.
library dialogue_renderer;

/// State of the typewriter text reveal effect.
class TypewriterRevealState {
  /// The visible portion of the text at the current time.
  final String visibleText;

  /// Whether the text reveal is complete.
  final bool isComplete;

  /// Reveal progress from 0.0 to 1.0 based on characters, excluding pauses.
  final double progress01;

  /// Remaining pause time in milliseconds from punctuation, if currently paused.
  final int currentPunctuationPauseMs;

  /// Creates a new typewriter reveal state.
  const TypewriterRevealState({
    required this.visibleText,
    required this.isComplete,
    required this.progress01,
    required this.currentPunctuationPauseMs,
  });

  /// Serializes the state to JSON for diagnostics.
  Map<String, dynamic> toJson() => {
        'visibleText': visibleText,
        'isComplete': isComplete,
        'progress01': progress01,
        'currentPunctuationPauseMs': currentPunctuationPauseMs,
      };
}

/// Engine to calculate typewriter progression over time.
class DialogueTypewriterEngine {
  /// Calculates the visible text and progress given the full text and elapsed time.
  /// Punctuation causes pauses in the character progression.
  static TypewriterRevealState calculateProgress({
    required String fullText,
    required int elapsedMs,
    double charsPerSecond = 40.0,
    double textPacingMultiplier = 1.0,
    bool instantComplete = false,
  }) {
    if (instantComplete || fullText.isEmpty) {
      return TypewriterRevealState(
        visibleText: fullText,
        isComplete: true,
        progress01: 1.0,
        currentPunctuationPauseMs: 0,
      );
    }

    final double effectiveCharsPerSecond = charsPerSecond * textPacingMultiplier;
    final int msPerChar = (1000.0 / effectiveCharsPerSecond).round();

    int totalMs = 0;
    int index = 0;
    int currentPause = 0;
    
    while (index < fullText.length) {
      if (totalMs + msPerChar > elapsedMs) break;
      totalMs += msPerChar;
      index++;
      
      // Check pause AFTER index has advanced
      int pause = 0;
      if (index < fullText.length) {
        String justTyped = fullText[index - 1];
        if (justTyped == ',') {
          pause = 120;
        } else if (justTyped == '—') {
          pause = 180;
        } else if (justTyped == ':' || justTyped == ';') {
          pause = 150;
        } else if (justTyped == '.') {
          // Are we in an ellipsis?
          // Count consecutive dots ending at index-1
          int dotStart = index - 1;
          while (dotStart > 0 && fullText[dotStart - 1] == '.') {
            dotStart--;
          }
          
          // Look ahead to see if more dots are coming
          int dotEnd = index - 1;
          while (dotEnd + 1 < fullText.length && fullText[dotEnd + 1] == '.') {
            dotEnd++;
          }
          int totalDots = dotEnd - dotStart + 1;
          
          if (totalDots >= 3) {
            // It's an ellipsis. Only pause at the LAST dot.
            if (index - 1 == dotEnd) {
              pause = 400;
            } else {
              pause = 0;
            }
          } else {
            pause = 240; // normal period
          }
        }
      }
      
      if (pause > 0) {
        if (totalMs + pause > elapsedMs) {
          currentPause = (totalMs + pause) - elapsedMs;
          break;
        }
        totalMs += pause;
      }
    }
    
    bool isComplete = index == fullText.length && currentPause == 0;
    double progress = fullText.isEmpty ? 1.0 : (index / fullText.length);
    
    return TypewriterRevealState(
      visibleText: fullText.substring(0, index),
      isComplete: isComplete,
      progress01: progress,
      currentPunctuationPauseMs: currentPause,
    );
  }

  /// Returns the CSS classes for dialogue styling.
  static String generateCss() {
    return '''
.dialogue-container {
  background: rgba(7, 7, 10, 0.75);
  backdrop-filter: blur(4px);
  border-top: 1px solid var(--iron);
  padding: 16px;
}
.dialogue-speaker {
  font-family: 'Courier Prime', monospace;
  color: var(--bone-dim);
  font-weight: bold;
  margin-bottom: 8px;
}
.dialogue-body {
  font-family: 'EB Garamond', serif;
  color: var(--bone);
  font-size: 1.1rem;
  line-height: 1.5;
}
''';
  }
}
