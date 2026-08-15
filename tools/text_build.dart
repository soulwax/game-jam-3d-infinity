import 'dart:io';
import 'dart:convert';

import 'package:quarantine/story/drift_resolve.dart';
import 'package:quarantine/story/schema.dart';

void main(List<String> args) {
  final partial = args.contains('--partial');
  final textDir = Directory('text');
  final outputFile = File('web/res/text.json');
  final choicesFile = File('web/res/text_choices.json');

  if (!textDir.existsSync()) {
    stderr.writeln('Error: text/ directory not found');
    exit(1);
  }
  if (!Directory('web/res').existsSync()) {
    stderr.writeln('Error: web/res/ directory not found');
    exit(1);
  }

  final sources = <String, String>{};
  for (final f in textDir.listSync(recursive: true).whereType<File>()) {
    if (f.path.endsWith('.txt')) {
      sources[f.path.replaceAll(r'\', '/')] = f.readAsStringSync();
    }
  }

  final StoryText story;
  try {
    story = parseStory(sources, complete: !partial);
  } on TextError catch (e) {
    stderr.writeln('Build failed: $e');
    exit(1);
  }

  if (!partial) {
    final screenplay = Process.runSync(
      Platform.executable,
      ['run', 'tools/story_build.dart'],
    );
    if (screenplay.exitCode != 0) {
      stderr.write(screenplay.stderr);
      exit(1);
    }
  }

  if (partial) {
    stdout.writeln('Parsed ${sources.length} files, ${story.lineCount} lines '
        '(--partial: completeness not checked)');
    return;
  }

  final Map<String, int> choices;
  try {
    choices = resolveDriftSpans(story);
  } on TextError catch (e) {
    stderr.writeln('Build failed: $e');
    exit(1);
  }

  final jsonStr = jsonEncode(story.toJson());
  final choicesStr = '${jsonEncode(_sortedChoices(choices))}\n';
  var wrote = false;
  if (!outputFile.existsSync() || outputFile.readAsStringSync() != jsonStr) {
    outputFile.writeAsStringSync(jsonStr);
    wrote = true;
  }
  if (!choicesFile.existsSync() || choicesFile.readAsStringSync() != choicesStr) {
    choicesFile.writeAsStringSync(choicesStr);
    wrote = true;
  }
  stdout.writeln(
    wrote ? 'Generated ${outputFile.path} and ${choicesFile.path}'
        : 'No changes to text.json or text_choices.json',
  );
}

Map<String, dynamic> _sortedChoices(Map<String, int> choices) {
  final keys = choices.keys.toList()..sort();
  return {for (final key in keys) key: choices[key]};
}
