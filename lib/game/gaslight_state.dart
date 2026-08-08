import 'domain_event.dart';

class GaslightFact {
  final String mantleId;
  final String roomId;
  final double flame;
  final double warmth;
  final double shadow;
  final double motes;
  final double hiss;

  const GaslightFact({
    required this.mantleId,
    required this.roomId,
    required this.flame,
    required this.warmth,
    required this.shadow,
    required this.motes,
    required this.hiss,
  });

  Map<String, dynamic> toJson() => {
    'mantleId': mantleId,
    'roomId': roomId,
    'flame': flame,
    'warmth': warmth,
    'shadow': shadow,
    'motes': motes,
    'hiss': hiss,
  };
}

class GaslightState {
  final List<GaslightFact> facts;
  final List<DomainEvent> events;

  GaslightState({
    required Iterable<GaslightFact> facts,
    required Iterable<DomainEvent> events,
  }) : facts = List.unmodifiable(
         facts.toList()..sort((a, b) => a.mantleId.compareTo(b.mantleId)),
       ),
       events = List.unmodifiable(events);

  Map<String, dynamic> toJson() => {
    'facts': [for (final fact in facts) fact.toJson()],
    'events': [for (final event in events) event.toJson()],
  };

  /// Compose one state from simulation facts. No renderer capability is read.
  factory GaslightState.compose({
    required Map<String, String> mantleRooms,
    required Map<String, double> roomFlow,
    required Set<String> litMantles,
    int eventSequence = 1,
  }) {
    if (eventSequence < 1) {
      throw ArgumentError.value(eventSequence, 'eventSequence');
    }
    final facts = <GaslightFact>[];
    final events = <DomainEvent>[];
    final ids = mantleRooms.keys.toList()..sort();
    var sequence = eventSequence;
    for (final id in ids) {
      final room = mantleRooms[id]!;
      final flow = (roomFlow[room] ?? 0.0).clamp(0.0, 1.0).toDouble();
      final lit = litMantles.contains(id);
      final base = lit ? flow : 0.0;
      facts.add(
        GaslightFact(
          mantleId: id,
          roomId: room,
          flame: base,
          warmth: base,
          shadow: base,
          motes: base * 0.5,
          hiss: lit ? (1.0 - flow) : 0.0,
        ),
      );
      if (lit) {
        events.add(
          DomainEvent(
            kind: 'gaslight.mantle-active',
            sequence: sequence++,
            roomId: room,
            selectionSeed: _stableSeed(id),
          ),
        );
      }
    }
    return GaslightState(facts: facts, events: events);
  }
}

int _stableSeed(String value) {
  var seed = 17;
  for (final code in value.codeUnits) {
    seed = (seed * 31 + code) & 0x7fffffff;
  }
  return seed;
}
