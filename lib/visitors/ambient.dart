import '../story/schema.dart';

class AmbientVisit {
  const AmbientVisit({
    required this.id,
    required this.day,
    required this.hour,
    required this.channel,
    required this.text,
  });

  final String id;
  final int day;
  final int hour;
  final String channel;
  final String text;
}

/// A non-door delivery path for authored scenes deliberately excluded from the
/// daily knock cap. It can only use explicit `@ambient` metadata.
class AmbientDirector {
  AmbientDirector._(this._events);

  final List<AmbientVisit> _events;
  final Set<String> _delivered = {};

  List<String> get deliveredIds => _delivered.toList()..sort();

  void restoreDelivered(Object? raw) {
    if (raw is! List) return;
    final known = _events.map((event) => event.id).toSet();
    _delivered
      ..clear()
      ..addAll(raw.whereType<String>().where(known.contains));
  }

  List<AmbientVisit> due(int day, double hour) => [
    for (final event in _events)
      if (event.day == day &&
          event.hour <= hour &&
          !_delivered.contains(event.id))
        event,
  ];

  void markDelivered(AmbientVisit event) => _delivered.add(event.id);

  static AmbientDirector build(StoryText story) {
    final events = <AmbientVisit>[];
    for (final visitorEntry in story.visitorAmbient.entries) {
      final dialogueDays = story.visitors[visitorEntry.key]!;
      for (final eventEntry in visitorEntry.value.entries) {
        final metadata = eventEntry.value;
        final text = dialogueDays[eventEntry.key]![metadata.lineKey]!;
        events.add(
          AmbientVisit(
            id: '${visitorEntry.key}:${eventEntry.key}:${metadata.lineKey}',
            day: eventEntry.key,
            hour: metadata.hour,
            channel: metadata.channel,
            text: text,
          ),
        );
      }
    }
    events.sort(
      (a, b) =>
          a.day != b.day ? a.day.compareTo(b.day) : a.hour.compareTo(b.hour),
    );
    return AmbientDirector._(List.unmodifiable(events));
  }
}
