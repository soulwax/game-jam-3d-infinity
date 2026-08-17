import 'dart:io';

void main() {
  final coordinator = File(
    'lib/story/timeline_progression_coordinator.dart',
  ).readAsStringSync();
  if (coordinator.contains('canonical21Days')) {
    throw StateError('timeline coordinator reintroduced canonical21Days');
  }
  if (coordinator.contains('narrative_encounter_director.dart')) {
    throw StateError(
      'timeline coordinator imports the runtime encounter authority',
    );
  }
  final screenplay = File('web/res/story_script.json');
  if (!screenplay.existsSync() || screenplay.lengthSync() == 0) {
    throw StateError('compiled screenplay resource is missing');
  }
  final consumers = <String>[];
  for (final entity in Directory('lib').listSync(recursive: true)) {
    if (entity is! File || !entity.path.endsWith('.dart')) continue;
    final source = entity.readAsStringSync();
    if (source.contains('canonical21Days')) consumers.add(entity.path);
  }
  if (consumers.isNotEmpty) {
    throw StateError(
      'duplicate day authority remains in ${consumers.join(', ')}',
    );
  }
  final coordinatorSource = coordinator;
  if (!coordinatorSource.contains("import 'screenplay.dart';") ||
      !coordinatorSource.contains('StoryScreenplay screenplay')) {
    throw StateError('timeline coordinator is not screenplay-backed');
  }
  stdout.writeln(
    'story authority audit: compiled screenplay is the only day source',
  );
}
