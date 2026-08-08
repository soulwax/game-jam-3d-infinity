import 'domain_event.dart';
import '../sim/tape.dart';

class TapeState {
  final TapeWeights weights;
  final DomainEvent? trackingEvent;

  const TapeState({required this.weights, this.trackingEvent});

  TapeState afterDrift({required int sequence, required int day}) {
    if (trackingEvent != null) return this;
    return TapeState(
      weights: weights,
      trackingEvent: DomainEvent(
        kind: 'tape.tracking-after-drift',
        sequence: sequence,
        selectionSeed: day,
      ),
    );
  }

  Map<String, dynamic> toJson() => {
    'weights': weights.toJson(),
    'trackingEvent': trackingEvent?.toJson(),
  };
}
