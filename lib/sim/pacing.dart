/// Named pacing rules shared by the browser clock and non-visual tests.
/// Waiting never jumps beyond the next authored cue or the end of a day.
final class CampaignPacingPolicy {
  const CampaignPacingPolicy({
    this.readingMultiplier = 0.0,
    this.maxWaitHours = 3.0,
  });

  final double readingMultiplier;
  final double maxWaitHours;

  double clockMultiplier({required bool storyMode}) => storyMode ? 1.0 : 20.0;

  double waitUntilCue(double now, double cue) {
    if (!now.isFinite || !cue.isFinite || !maxWaitHours.isFinite) {
      throw ArgumentError('pacing values must be finite');
    }
    if (cue <= now) return 0.0;
    return (cue - now).clamp(0.0, maxWaitHours).toDouble();
  }

  double scaledReadingSeconds(double seconds) {
    if (!seconds.isFinite || seconds < 0) {
      throw ArgumentError.value(seconds, 'seconds');
    }
    return seconds * readingMultiplier;
  }
}
