import 'dart:io';

import 'package:quarantine/story/game_event_orchestrator.dart';
import 'package:quarantine/story/screenplay.dart';

void main() {
  final screenplay = StoryScreenplay.fromJson(
    File('web/res/story_script.json').readAsStringSync(),
  );
  final plan = GameEventOrchestrator(screenplay);
  final seen = <AuthoredEventConsumer>{};
  for (final event in screenplay.events) {
    seen.add(authoredEventConsumerFor(event.kind));
  }
  if (seen.length != AuthoredEventConsumer.values.length) {
    throw StateError(
      'authored schedule does not exercise every runtime consumer',
    );
  }
  if (plan.eventsForDay(1).length < 2) {
    throw StateError('day 1 consumer handoff is incomplete');
  }
  stdout.writeln(
    'story event consumers: every authored kind has a runtime destination',
  );
}
