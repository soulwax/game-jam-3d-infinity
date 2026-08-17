import 'dart:io';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  for (final marker in [
    'data-story-last-event',
    'data-story-last-event-kind',
    'data-story-journal-entry-count',
    "_saveSession('ending recorded')",
    'SleepLocation',
    'GameEventCursor.fromJson',
  ]) {
    if (!source.contains(marker)) {
      throw StateError('Day 1 production route contract missing: $marker');
    }
  }
  stdout.writeln(
    'Day 1 production route contract: event, journal, sleep, and reload seams wired',
  );
}
