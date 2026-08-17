import 'dart:io';

import 'package:quarantine/story/game_event_orchestrator.dart';
import 'package:quarantine/story/screenplay.dart';

void main() {
  final screenplay = StoryScreenplay.fromJson(
    File('web/res/story_script.json').readAsStringSync(),
  );
  final plan = GameEventOrchestrator(screenplay);
  final genericLabels = {'required beat', 'placeholder', 'todo', 'tbd'};
  for (final event in screenplay.events) {
    final label = event.label.trim().toLowerCase();
    if (label.length < 8 || genericLabels.contains(label)) {
      throw StateError(
        'event ${event.id} has placeholder semantics: ${event.label}',
      );
    }
  }
  final cursor = GameEventCursor(plan, runSeed: 42017);
  final first = cursor.advance(day: 1, hour: 24);
  if (first.isEmpty) throw StateError('day 1 has no authored events');
  if (cursor.advance(day: 1, hour: 24).isNotEmpty) {
    throw StateError('delivered event was emitted twice');
  }
  final restored = GameEventCursor.fromJson(
    plan,
    cursor.toJson(),
    runSeed: 42017,
  );
  if (restored.advance(day: 1, hour: 24).isNotEmpty) {
    throw StateError('save/reload replayed a delivered event');
  }
  final dayTwo = restored.advance(day: 2, hour: 24);
  if (dayTwo.isEmpty) throw StateError('day 2 has no authored events');
  for (var day = 3; day <= 21; day++) {
    if (restored.advance(day: day, hour: 24).isEmpty) {
      throw StateError('day $day has no authored event');
    }
  }
  stdout.writeln(
    'story event schedule: all 21 days deliver authored events exactly once',
  );
}
