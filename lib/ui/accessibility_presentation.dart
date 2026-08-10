import 'accessibility_settings.dart';

/// Pure announcement formatting for live regions and screen-reader status.
/// Essential announcements retain their context at every verbosity level.
final class AccessibilityAnnouncementPolicy {
  final AccessibilityScreenReaderVerbosity verbosity;

  const AccessibilityAnnouncementPolicy(this.verbosity);

  String format({
    required String channel,
    required String text,
    bool essential = false,
  }) {
    final cleanChannel = channel.trim();
    final cleanText = text.trim();
    if (cleanText.isEmpty) return '';
    if (essential || verbosity == AccessibilityScreenReaderVerbosity.verbose) {
      return cleanChannel.isEmpty ? cleanText : '$cleanChannel: $cleanText';
    }
    if (verbosity == AccessibilityScreenReaderVerbosity.concise) {
      return cleanText;
    }
    return cleanChannel.isEmpty ? cleanText : '$cleanChannel: $cleanText';
  }
}

/// Renderer-neutral UI projection for resolved accessibility preferences.
///
/// High contrast and focus visibility are explicit display inputs, while
/// motion/photosensitivity controls are resolved from platform/user settings.
final class AccessibilityUiPolicy {
  final double uiScale;
  final bool reducedEffects;
  final bool captions;
  final bool highContrast;
  final bool focusVisible;
  final bool essentialCues;

  const AccessibilityUiPolicy({
    required this.uiScale,
    required this.reducedEffects,
    required this.captions,
    required this.highContrast,
    required this.focusVisible,
    required this.essentialCues,
  });

  factory AccessibilityUiPolicy.fromResolved(
    AccessibilitySettingsResolved resolved, {
    bool highContrast = false,
    bool strongHighlights = false,
  }) => AccessibilityUiPolicy(
    uiScale: resolved.uiScale,
    reducedEffects: resolved.reducedMotion || resolved.photosensitivitySafe,
    captions: resolved.captions,
    highContrast: highContrast,
    focusVisible: highContrast || strongHighlights,
    essentialCues: resolved.essentialCues,
  );
}
