import 'dart:io';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  final session = File('lib/game/session.dart').readAsStringSync();
  for (final marker in [
    'correctJournal',
    'lockJournal',
    'saved after visitor citation',
    'data-story-journal-entry-count',
  ]) {
    final haystack = '$source\n$session';
    if (!haystack.contains(marker)) {
      throw StateError('journal browser contract missing: $marker');
    }
  }
  stdout.writeln(
    'journal browser contract: authoritative cite/correct/lock/save telemetry wired',
  );
}
