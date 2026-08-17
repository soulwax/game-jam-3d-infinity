import 'package:quarantine/sim/pacing.dart';

void main() {
  const policy = CampaignPacingPolicy(readingMultiplier: 0.5, maxWaitHours: 2);
  if (policy.waitUntilCue(8, 9.5) != 1.5) {
    throw StateError('pacing did not wait to the authored cue');
  }
  if (policy.waitUntilCue(8, 20) != 2) {
    throw StateError('pacing exceeded the bounded wait window');
  }
  if (policy.waitUntilCue(10, 9) != 0) {
    throw StateError('pacing rewound the clock');
  }
  if (policy.scaledReadingSeconds(10) != 5) {
    throw StateError('reading pacing multiplier was not applied');
  }
  print('campaign pacing: bounded cue waits and reading scaling pass');
}
