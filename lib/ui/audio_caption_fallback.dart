/// Resolves a spoken cue to text when a clip is unavailable or muted.
final class AudioCaptionFallback {
  const AudioCaptionFallback({required this.cueId, required this.caption});

  final String cueId;
  final String caption;

  String resolve({required bool clipAvailable, required bool captionsEnabled}) {
    if (!captionsEnabled) return '';
    if (clipAvailable) return caption;
    return caption.isEmpty ? '[unavailable voice cue: $cueId]' : caption;
  }
}
