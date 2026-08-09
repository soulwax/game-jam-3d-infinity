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
