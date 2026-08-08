import 'package:quarantine/game/tape_state.dart';
import 'package:quarantine/sim/tape.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final clean = TapeWeights.derive(day: 1, exhaustion: 0, isolation: 0);
  final pressured = TapeWeights.derive(day: 21, exhaustion: 1, isolation: 1);
  _expect(pressured.noise > clean.noise, 'pressure increases degradation');
  final reduced = TapeWeights.derive(
    day: 21,
    exhaustion: 1,
    isolation: 1,
    reducedMotion: true,
  );
  _expect(
    reduced.jitter < pressured.jitter && reduced.noise == pressured.noise,
    'reduced motion changes motion channels only',
  );
  final first = TapeState(weights: pressured).afterDrift(sequence: 4, day: 18);
  final second = first.afterDrift(sequence: 9, day: 19);
  _expect(
    first.trackingEvent?.sequence == 4,
    'tracking event has stable sequence',
  );
  _expect(identical(second, first), 'tracking event is emitted exactly once');
  _expect(
    first.toJson()['trackingEvent'] is Map<String, dynamic>,
    'tape save contains semantic event',
  );
  print(
    'tape: deterministic weights, reduced-motion, and tracking fixture pass',
  );
}
