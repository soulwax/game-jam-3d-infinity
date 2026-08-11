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
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) skewX(-2deg);
  width: min(92vw, 44rem);
  background:
    repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.4) 2px, transparent 2px, transparent 6px),
    rgba(10, 10, 14, 0.92);
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid var(--iron);
  border-left: 5px solid var(--official-red);
  border-right: 3px solid var(--brass);
  box-shadow: 6px 6px 0px #000000, 0 16px 40px rgba(0, 0, 0, 0.85);
  clip-path: polygon(0.6rem 0%, 100% 0%, calc(100% - 0.6rem) 100%, 0% 100%);
  padding: 1.25rem 1.75rem;
  z-index: 25;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dialogue-speaker {
  display: inline-block;
  font-family: 'font-official', 'Courier Prime', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  color: #07070a;
  background: var(--amber);
  padding: 0.2rem 0.75rem;
  margin-bottom: 0.75rem;
  clip-path: polygon(0.35rem 0%, 100% 0%, calc(100% - 0.35rem) 100%, 0% 100%);
  box-shadow: 3px 3px 0px #000000;
  transform: skewX(-4deg);
}

.dialogue-body {
  font-family: 'EB Garamond', Georgia, serif;
  color: var(--bone);
  font-size: 1.15rem;
  line-height: 1.55;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  min-height: 2.4rem;
}

.dialogue-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px dashed rgba(183, 137, 76, 0.3);
}

.dialogue-choice-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(20, 22, 28, 0.85);
  border: 1px solid var(--iron);
  border-left: 3px solid var(--brass);
  color: var(--bone);
  padding: 0.5rem 1rem;
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1rem;
  cursor: pointer;
  clip-path: polygon(0.4rem 0%, 100% 0%, calc(100% - 0.4rem) 100%, 0% 100%);
  box-shadow: 3px 3px 0px #000000;
  transition: all 0.18s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dialogue-choice-btn:hover {
  background: rgba(183, 137, 76, 0.25);
  border-color: var(--amber);
  border-left-color: var(--official-red);
  color: #ffffff;
  transform: translateX(6px) scale(1.015);
  box-shadow: 5px 5px 0px #000000, 0 0 12px rgba(255, 179, 71, 0.3);
}

.dialogue-choice-btn:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
  transform: translateX(4px);
}

.choice-shortcut {
  font-family: 'font-official', 'Courier Prime', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.6);
  color: var(--amber);
  padding: 0.15rem 0.45rem;
  border: 1px solid rgba(183, 137, 76, 0.5);
  border-radius: 2px;
}
''';
  }
}
