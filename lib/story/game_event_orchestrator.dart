import 'screenplay.dart';

/// Runtime read-model for the event plan authored by the screenplay editor.
///
/// It deliberately does not mutate the game or narrative state. The game loop
/// asks which authored events are due, then commits their effects through its
/// existing authoritative systems.
class GameEventOrchestrator {
  GameEventOrchestrator(StoryScreenplay screenplay)
      : _events = List<ScreenplayEvent>.unmodifiable(
          [...screenplay.events]
            ..sort((a, b) {
              final day = a.day.compareTo(b.day);
              if (day != 0) return day;
              final hour = a.hour.compareTo(b.hour);
              return hour != 0 ? hour : a.id.compareTo(b.id);
            }),
        );

  final List<ScreenplayEvent> _events;

  List<ScreenplayEvent> eventsForDay(int day) => [
        for (final event in _events)
          if (event.day == day) event,
      ];

  /// Returns events crossed between two clock readings, including the event
  /// at [fromHour] and excluding the event at [toHour].
  List<ScreenplayEvent> crossed({
    required int day,
    required double fromHour,
    required double toHour,
  }) {
    if (toHour < fromHour) return const [];
    return [
      for (final event in eventsForDay(day))
        if (event.hour >= fromHour && event.hour < toHour) event,
    ];
  }

  ScreenplayEvent? byId(String id) {
    for (final event in _events) {
      if (event.id == id) return event;
    }
    return null;
  }
}

/// Save-friendly delivery cursor for the game loop.
///
/// The editor owns the schedule; this cursor only remembers which authored
/// records have already been handed to the authoritative game session.
class GameEventCursor {
  GameEventCursor(this.plan, {Iterable<String> delivered = const []})
      : _delivered = {...delivered};

  final GameEventOrchestrator plan;
  final Set<String> _delivered;

  List<ScreenplayEvent> advance({required int day, required double hour}) {
    final due = <ScreenplayEvent>[];
    for (final event in plan.eventsForDay(day)) {
      if (event.hour <= hour && _delivered.add(event.id)) due.add(event);
    }
    return due;
  }

  bool get isEmpty => _delivered.isEmpty;

  List<String> get deliveredIds => _delivered.toList()..sort();

  Map<String, dynamic> toJson() => {'delivered': deliveredIds};

  static GameEventCursor fromJson(
    GameEventOrchestrator plan,
    Object? raw,
  ) {
    if (raw is! Map || raw['delivered'] is! List) {
      return GameEventCursor(plan);
    }
    final delivered = (raw['delivered'] as List)
        .whereType<String>()
        .where((id) => plan.byId(id) != null);
    return GameEventCursor(plan, delivered: delivered);
  }
}
