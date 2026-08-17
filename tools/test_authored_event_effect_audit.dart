import 'dart:io';

import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/story/screenplay.dart';

void main() {
  final screenplay = StoryScreenplay.fromJson(
    File('web/res/story_script.json').readAsStringSync(),
  );
  final vocabulary = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['parcel'],
    'place': ['threshold'],
    'time': ['morning'],
  });
  final session = GameSession.create(vocabulary: vocabulary);
  for (final event in screenplay.events.take(4)) {
    if (!session.applyAuthoredEvent(event)) {
      throw StateError('authored event was not applied: ${event.id}');
    }
    if (session.narrative.flag('event.${event.id}.consumer') != event.kind) {
      throw StateError('event consumer was not persisted: ${event.id}');
    }
  }
  print(
    'authored event effect audit: delivered consumers persist in session state',
  );
}
