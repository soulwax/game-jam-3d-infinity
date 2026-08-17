import 'dart:io';

import 'package:quarantine/story/game_event_orchestrator.dart';
import 'package:quarantine/story/narrative_state.dart';
import 'package:quarantine/story/screenplay.dart';

void main() {
  final screenplay = StoryScreenplay.fromJson(
    File('web/res/story_script.json').readAsStringSync(),
  );
  final plan = GameEventOrchestrator(screenplay);
  final cursor = GameEventCursor(plan, runSeed: 7);
  final narrative = NarrativeState();

  final wake = cursor.advance(day: 1, hour: 7.1);
  if (wake.length != 1 || wake.single.kind != 'broadcast') {
    throw StateError('day 1 wake did not deliver its broadcast');
  }
  for (final event in wake) {
    if (!narrative.flags.containsKey('event.${event.id}')) {
      narrative.flags['event.${event.id}'] = 'true';
    }
  }
  final threshold = cursor.advance(day: 1, hour: 10.1);
  if (threshold.length != 1 || threshold.single.kind != 'visitor') {
    throw StateError('day 1 threshold did not deliver its visitor beat');
  }
  narrative.flags['event.${threshold.single.id}'] = 'true';
  if (cursor.advance(day: 1, hour: 24).isNotEmpty) {
    throw StateError(
      'day 1 events replayed after the consequence/sleep boundary',
    );
  }
  if (narrative.flags.length != 2) {
    throw StateError('day 1 reference loop did not retain both authored beats');
  }
  stdout.writeln(
    'day 1 reference loop: wake -> threshold -> sleep boundary is exactly-once',
  );
}
