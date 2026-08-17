import 'dart:io';

import 'package:quarantine/story/game_event_orchestrator.dart';
import 'package:quarantine/story/screenplay.dart';

void main() {
  final screenplay = StoryScreenplay.fromJson(
    File('web/res/story_script.json').readAsStringSync(),
  );
  final plan = GameEventOrchestrator(screenplay);
  for (final range in [(2, 7), (8, 14), (15, 20)]) {
    final events = [
      for (var day = range.$1; day <= range.$2; day++)
        ...plan.eventsForDay(day),
    ];
    if (events.isEmpty ||
        events.any((event) => event.day < range.$1 || event.day > range.$2)) {
      throw StateError(
        'story act batch ${range.$1}-${range.$2} is not bounded',
      );
    }
    if (!events.any((event) => event.kind == 'visitor')) {
      throw StateError(
        'story act batch ${range.$1}-${range.$2} has no embodied visitor beat',
      );
    }
    final cursor = GameEventCursor(plan, runSeed: 7);
    final delivered = <String>{};
    for (var day = range.$1; day <= range.$2; day++) {
      for (final event in cursor.advance(day: day, hour: 24)) {
        if (!delivered.add(event.id)) {
          throw StateError('event ${event.id} delivered twice in act batch');
        }
      }
    }
    if (delivered.length != events.length) {
      throw StateError(
        'act batch ${range.$1}-${range.$2} did not deliver exactly once',
      );
    }
  }
  print(
    'story act batches: days 2-7, 8-14, and 15-20 are bounded and scheduled',
  );
}
