/// Handles the countdown timer for dialogue silence choices.
library dialogue_silence_timer;

/// State of the dialogue silence timer.
class DialogueSilenceTimerState {
  /// Total duration of the timer in milliseconds.
  final int durationMs;

  /// Elapsed time in milliseconds.
  final int elapsedMs;

  /// Remaining time in milliseconds.
  final int remainingMs;

  /// Progress from 0.0 to 1.0.
  final double progress01;

  /// Whether the timer has expired.
  final bool isExpired;

  /// Whether reduced motion formatting is preferred.
  final bool reducedMotion;

  /// Screen reader announcement text.
  final String announcementText;

  /// Creates a new silence timer state.
  const DialogueSilenceTimerState({
    this.durationMs = 8000,
    required this.elapsedMs,
    required this.remainingMs,
    required this.progress01,
    required this.isExpired,
    this.reducedMotion = false,
    required this.announcementText,
  });

  /// Serializes the state to JSON for diagnostics.
  Map<String, dynamic> toJson() => {
        'durationMs': durationMs,
        'elapsedMs': elapsedMs,
        'remainingMs': remainingMs,
        'progress01': progress01,
        'isExpired': isExpired,
        'reducedMotion': reducedMotion,
        'announcementText': announcementText,
      };
}

/// Engine to calculate silence timer progression over time.
class DialogueSilenceTimerEngine {
  /// Evaluates the timer state given the duration and elapsed time.
  static DialogueSilenceTimerState update({
    required int durationMs,
    required int elapsedMs,
    bool reducedMotion = false,
  }) {
    final int clampedElapsed = elapsedMs.clamp(0, durationMs);
    final int remaining = durationMs - clampedElapsed;
    final double progress = durationMs > 0 ? clampedElapsed / durationMs : 1.0;
    final bool expired = clampedElapsed >= durationMs;

    final int secondsRemaining = (remaining / 1000).ceil();
    final String announcement = "Silence: $secondsRemaining seconds remaining";

    return DialogueSilenceTimerState(
      durationMs: durationMs,
      elapsedMs: clampedElapsed,
      remainingMs: remaining,
      progress01: progress,
      isExpired: expired,
      reducedMotion: reducedMotion,
      announcementText: announcement,
    );
  }
}
