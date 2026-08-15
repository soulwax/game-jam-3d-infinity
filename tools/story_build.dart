import 'dart:convert';
import 'dart:io';

import 'package:quarantine/story/screenplay.dart';

void main() {
  final input = File('text/story.screenplay');
  final output = File('web/res/story_script.json');
  if (!input.existsSync()) _fail('missing ${input.path}');
  final parsed = _parse(input.readAsLinesSync());
  final knownSources = {
    for (final file in Directory(
      'text',
    ).listSync(recursive: true).whereType<File>())
      if (file.path.endsWith('.txt')) file.path.replaceAll('\\', '/'),
  };
  for (final source in parsed.sources) {
    if (!knownSources.contains(source))
      _fail('screenplay references missing source $source');
  }
  for (final scene in parsed.scenes) {
    for (final source in scene.sources) {
      if (!knownSources.contains(source))
        _fail('${scene.id} links missing source $source');
    }
  }
  final days = parsed.scenes.map((scene) => scene.day).toList()..sort();
  if (days.length != 21 ||
      days.join(',') != List.generate(21, (i) => i + 1).join(',')) {
    _fail('screenplay must contain exactly one scene for every day 1..21');
  }
  final sceneIds = {for (final scene in parsed.scenes) scene.id};
  if (sceneIds.length != parsed.scenes.length)
    _fail('scene ids must be unique');
  final eventIds = {for (final event in parsed.events) event.id};
  if (eventIds.length != parsed.events.length)
    _fail('event ids must be unique');
  for (final event in parsed.events) {
    if (!const {
      'broadcast',
      'visitor',
      'choice',
      'aftermath',
      'ending',
    }.contains(event.kind)) {
      _fail('${event.id} has unknown kind ${event.kind}');
    }
    if (event.day < 1 || event.day > 21 || event.hour < 0 || event.hour >= 24) {
      _fail('${event.id} has an invalid day or hour');
    }
    if (event.source.isNotEmpty && !parsed.sources.contains(event.source)) {
      _fail(
        '${event.id} references source ${event.source}, which is not declared',
      );
    }
    for (final effect in event.effects) {
      if (!effect.contains('=') ||
          effect.startsWith('=') ||
          effect.endsWith('=')) {
        _fail('${event.id} has malformed effect $effect');
      }
    }
    if (event.nextScene.isNotEmpty &&
        event.nextScene != 'END' &&
        !sceneIds.contains(event.nextScene)) {
      _fail('${event.id} points to ${event.nextScene}, which does not exist');
    }
  }
  for (final scene in parsed.scenes) {
    for (final branch in scene.branches) {
      if (branch.options.length < 2)
        _fail('${scene.id}/${branch.id} needs at least two options');
      for (final option in branch.options) {
        if (!sceneIds.contains(option.next) && option.next != 'END') {
          _fail(
            '${scene.id}/${branch.id}/${option.id} points to ${option.next}, which does not exist',
          );
        }
      }
    }
  }
  final json = <String, Object?>{
    'version': 1,
    'sources': parsed.sources,
    'events': [
      for (final event in parsed.events)
        {
          'id': event.id,
          'kind': event.kind,
          'day': event.day,
          'hour': event.hour,
          'label': event.label,
          if (event.source.isNotEmpty) 'source': event.source,
          if (event.speaker.isNotEmpty) 'speaker': event.speaker,
          if (event.cue.isNotEmpty) 'cue': event.cue,
          if (event.effects.isNotEmpty) 'effects': event.effects,
          if (event.nextScene.isNotEmpty) 'nextScene': event.nextScene,
        },
    ],
    'scenes': [
      for (final scene in parsed.scenes)
        {
          'id': scene.id,
          'day': scene.day,
          'title': scene.title,
          'sources': scene.sources,
          'beats': [
            for (final beat in scene.beats)
              {
                'kind': beat.kind,
                'text': beat.text,
                if (beat.speaker != null) 'speaker': beat.speaker,
              },
          ],
          'branches': [
            for (final branch in scene.branches)
              {
                'id': branch.id,
                'prompt': branch.prompt,
                'options': [
                  for (final option in branch.options)
                    {
                      'id': option.id,
                      'label': option.label,
                      'next': option.next,
                    },
                ],
              },
          ],
        },
    ],
  };
  final encoded = '${const JsonEncoder.withIndent('  ').convert(json)}\n';
  if (!output.existsSync() || output.readAsStringSync() != encoded)
    output.writeAsStringSync(encoded);
  stdout.writeln(
    'Generated ${output.path} (${parsed.scenes.length} scenes, ${parsed.sources.length} sources)',
  );
}

StoryScreenplay _parse(List<String> lines) {
  final sources = <String>[];
  final events = <ScreenplayEvent>[];
  final scenes = <ScreenplayScene>[];
  ScreenplaySceneBuilder? scene;
  ScreenplayBranchBuilder? branch;
  ScreenplayEventBuilder? event;
  for (var i = 0; i < lines.length; i++) {
    final raw = lines[i].trim();
    if (raw.isEmpty || raw.startsWith('#')) continue;
    final parts = raw.split('|');
    final head = parts.first.trim().split(RegExp(r'\s+'));
    final value = parts.length > 1 ? parts.sublist(1).join('|').trim() : '';
    switch (head.first) {
      case 'SOURCE':
        if (head.length != 2) _fail('line ${i + 1}: SOURCE path');
        sources.add(head[1]);
      case 'EVENT':
        if (head.length != 5 || value.isEmpty) {
          _fail('line ${i + 1}: EVENT id kind day hour | label');
        }
        if (scene != null) {
          scenes.add(scene.build());
          scene = null;
        }
        if (event != null) events.add(event.build());
        event = ScreenplayEventBuilder(
          head[1],
          head[2],
          int.tryParse(head[3]) ?? -1,
          double.tryParse(head[4]) ?? double.nan,
          value,
        );
        scene = null;
        branch = null;
      case 'EVENT_SOURCE':
        if (event == null || head.length != 2)
          _fail('line ${i + 1}: EVENT_SOURCE path');
        event!.source = head[1];
      case 'EVENT_SPEAKER':
        if (event == null || head.length != 2)
          _fail('line ${i + 1}: EVENT_SPEAKER speaker');
        event!.speaker = head[1];
      case 'EVENT_CUE':
        if (event == null || head.length != 2)
          _fail('line ${i + 1}: EVENT_CUE cue');
        event!.cue = head[1];
      case 'EVENT_EFFECT':
        if (event == null || value.isEmpty)
          _fail('line ${i + 1}: EVENT_EFFECT | key=value');
        event!.effects.add(value);
      case 'EVENT_NEXT':
        if (event == null || head.length != 2)
          _fail('line ${i + 1}: EVENT_NEXT scene-id');
        event!.nextScene = head[1];
      case 'LINK':
        if (scene == null || event != null || head.length != 2)
          _fail('line ${i + 1}: LINK path');
        scene.sources.add(head[1]);
      case 'SCENE':
        if (head.length < 4) _fail('line ${i + 1}: SCENE id day title');
        if (event != null) {
          events.add(event.build());
          event = null;
        }
        if (scene != null) scenes.add(scene.build());
        scene = ScreenplaySceneBuilder(
          head[1],
          int.tryParse(head[2]) ?? -1,
          head.sublist(3).join(' '),
        );
        branch = null;
      case 'BEAT':
        if (scene == null || value.isEmpty || head.length < 2)
          _fail('line ${i + 1}: BEAT kind | text');
        scene.beats.add(ScreenplayBeat(kind: head[1], text: value));
      case 'DIALOGUE':
        if (scene == null || value.isEmpty || head.length < 2)
          _fail('line ${i + 1}: DIALOGUE speaker | text');
        scene.beats.add(
          ScreenplayBeat(kind: 'dialogue', speaker: head[1], text: value),
        );
      case 'BRANCH':
        if (scene == null || value.isEmpty || head.length != 2)
          _fail('line ${i + 1}: BRANCH id | prompt');
        branch = ScreenplayBranchBuilder(head[1], value);
        scene.branches.add(branch);
      case 'OPTION':
        if (branch == null || head.length != 3 || value.isEmpty)
          _fail('line ${i + 1}: OPTION id next | label');
        branch.options.add(
          ScreenplayOption(id: head[1], next: head[2], label: value),
        );
      default:
        _fail('line ${i + 1}: unknown record ${head.first}');
    }
  }
  if (event != null) events.add(event.build());
  if (scene != null) scenes.add(scene.build());
  if (scenes.any((scene) => scene.day < 1 || scene.day > 21))
    _fail('scene day must be 1..21');
  return StoryScreenplay(
    sources: [...LinkedHashSet<String>.from(sources)],
    scenes: scenes,
    events: events,
  );
}

class ScreenplayEventBuilder {
  ScreenplayEventBuilder(this.id, this.kind, this.day, this.hour, this.label);
  final String id;
  final String kind;
  final int day;
  final double hour;
  final String label;
  String source = '';
  String speaker = '';
  String cue = '';
  final effects = <String>[];
  String nextScene = '';

  ScreenplayEvent build() => ScreenplayEvent(
    id: id,
    kind: kind,
    day: day,
    hour: hour,
    label: label,
    source: source,
    speaker: speaker,
    cue: cue,
    effects: effects,
    nextScene: nextScene,
  );
}

class ScreenplaySceneBuilder {
  ScreenplaySceneBuilder(this.id, this.day, this.title);
  final String id;
  final int day;
  final String title;
  final sources = <String>[];
  final beats = <ScreenplayBeat>[];
  final branches = <ScreenplayBranchBuilder>[];
  ScreenplayScene build() => ScreenplayScene(
    id: id,
    day: day,
    title: title,
    sources: sources,
    beats: beats,
    branches: [for (final branch in branches) branch.build()],
  );
}

class ScreenplayBranchBuilder {
  ScreenplayBranchBuilder(this.id, this.prompt);
  final String id;
  final String prompt;
  final options = <ScreenplayOption>[];
  ScreenplayBranch build() =>
      ScreenplayBranch(id: id, prompt: prompt, options: options);
}

Never _fail(String message) {
  stderr.writeln('Story screenplay build failed: $message');
  exitCode = 1;
  throw StateError(message);
}

/// Small insertion-ordered set without adding a package dependency.
class LinkedHashSet<T> extends Iterable<T> {
  LinkedHashSet.from(Iterable<T> values) {
    for (final value in values) _values[value] = true;
  }
  final _values = <T, bool>{};
  @override
  Iterator<T> get iterator => _values.keys.iterator;
}
