import 'dart:convert';

import 'domain_event.dart';
import 'presentation_snapshot.dart';
import 'gaslight_state.dart';
import 'tape_state.dart';
import '../sim/rupture.dart';
import '../sim/temperature.dart';
import '../sim/weather.dart';

/// Serial join output for pure simulation features. It is the only object a
/// later adapter needs; feature update order cannot alter its canonical bytes.
class FeatureSnapshot {
  final PresentationSnapshot facts;
  final List<DomainEvent> events;

  FeatureSnapshot({
    required Map<String, dynamic> facts,
    required Iterable<DomainEvent> events,
  }) : facts = PresentationSnapshot(values: facts),
       events = List.unmodifiable(
         events.toList()..sort((a, b) {
           final sequence = a.sequence.compareTo(b.sequence);
           return sequence == 0 ? a.kind.compareTo(b.kind) : sequence;
         }),
       );

  factory FeatureSnapshot.compose({
    required WeatherDay weather,
    required TemperatureSnapshot temperature,
    required GaslightState gaslight,
    required RuptureState rupture,
    required TapeState tape,
    Iterable<DomainEvent> events = const [],
  }) => FeatureSnapshot(
    facts: {
      'weather': weather.toJson(),
      'temperature': temperature.toJson(),
      'gaslight': gaslight.toJson(),
      'rupture': rupture.toJson(),
      'tape': tape.toJson(),
    },
    events: [
      ...gaslight.events,
      if (tape.trackingEvent != null) tape.trackingEvent!,
      ...events,
    ],
  );

  Map<String, dynamic> toJson() => {
    'facts': facts.toJson(),
    'events': [for (final event in events) event.toJson()],
  };

  String encode() => jsonEncode(toJson());
}
