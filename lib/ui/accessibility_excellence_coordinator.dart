/// Accessibility Excellence Coordinator for WCAG 2.1 AA compliance and player assists.
class AccessibilitySettingsState {
  final bool highContrastMode;
  final double textSpeedMultiplier;
  final bool autoAdvanceDialogue;
  final bool largeSubtitles;
  final bool screenReaderAnnouncements;
  final double cameraShakeIntensity;

  const AccessibilitySettingsState({
    this.highContrastMode = false,
    this.textSpeedMultiplier = 1.0,
    this.autoAdvanceDialogue = false,
    this.largeSubtitles = false,
    this.screenReaderAnnouncements = true,
    this.cameraShakeIntensity = 1.0,
  });

  AccessibilitySettingsState copyWith({
    bool? highContrastMode,
    double? textSpeedMultiplier,
    bool? autoAdvanceDialogue,
    bool? largeSubtitles,
    bool? screenReaderAnnouncements,
    double? cameraShakeIntensity,
  }) {
    return AccessibilitySettingsState(
      highContrastMode: highContrastMode ?? this.highContrastMode,
      textSpeedMultiplier: textSpeedMultiplier ?? this.textSpeedMultiplier,
      autoAdvanceDialogue: autoAdvanceDialogue ?? this.autoAdvanceDialogue,
      largeSubtitles: largeSubtitles ?? this.largeSubtitles,
      screenReaderAnnouncements: screenReaderAnnouncements ?? this.screenReaderAnnouncements,
      cameraShakeIntensity: cameraShakeIntensity ?? this.cameraShakeIntensity,
    );
  }

  Map<String, dynamic> toJson() => {
        'highContrastMode': highContrastMode,
        'textSpeedMultiplier': textSpeedMultiplier,
        'autoAdvanceDialogue': autoAdvanceDialogue,
        'largeSubtitles': largeSubtitles,
        'screenReaderAnnouncements': screenReaderAnnouncements,
        'cameraShakeIntensity': cameraShakeIntensity,
      };
}

/// Coordinator for accessibility presentation and assistive technologies.
class AccessibilityExcellenceCoordinator {
  static AccessibilitySettingsState _state = const AccessibilitySettingsState();

  static AccessibilitySettingsState get state => _state;

  static void updateState(AccessibilitySettingsState newState) {
    _state = newState;
  }

  /// Calculates typewriter delay per character in milliseconds based on user speed preference.
  static int calculateTypewriterDelayMs({int baseDelayMs = 28}) {
    final speed = _state.textSpeedMultiplier.clamp(0.5, 3.0);
    return (baseDelayMs / speed).round();
  }

  /// Formats screen reader announcement message for ARIA live regions.
  static String formatAriaNotice({
    required String channel,
    required String message,
  }) {
    return '[$channel] $message';
  }

  /// Self-validation for unit tests.
  static bool validate() {
    final defaultDelay = calculateTypewriterDelayMs(baseDelayMs: 30);
    updateState(_state.copyWith(textSpeedMultiplier: 2.0));
    final fastDelay = calculateTypewriterDelayMs(baseDelayMs: 30);
    if (fastDelay >= defaultDelay) return false;

    final aria = formatAriaNotice(channel: 'Letterbox', message: 'Telegram arrived');
    if (!aria.contains('Letterbox') || !aria.contains('Telegram')) return false;

    updateState(const AccessibilitySettingsState());
    return true;
  }
}
