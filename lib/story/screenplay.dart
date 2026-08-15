import 'dart:convert';

/// The human-authored dramatic layer above the granular text corpus.
///
/// The screenplay deliberately contains references to the existing `text/`
/// files rather than copying their lines. This keeps one source for prose while
/// giving writers and runtime systems a chronological scene/branch graph.
class StoryScreenplay {
  StoryScreenplay({required this.sources, required this.scenes});

  final List<String> sources;
  final List<ScreenplayScene> scenes;

  ScreenplayScene? sceneForDay(int day) {
    for (final scene in scenes) {
      if (scene.day == day) return scene;
    }
    return null;
  }

  factory StoryScreenplay.fromJson(String source) {
    final raw = jsonDecode(source);
    if (raw is! Map) throw const FormatException('screenplay root must be an object');
    final sourceList = raw['sources'];
    final sceneList = raw['scenes'];
    if (raw['version'] != 1 || sourceList is! List || sceneList is! List) {
      throw const FormatException('screenplay needs sources and scenes arrays');
    }
    return StoryScreenplay(
      sources: [for (final value in sourceList) _string(value, 'source')],
      scenes: [
        for (final value in sceneList)
          ScreenplayScene.fromJson(value),
      ],
    );
  }

  static String _string(Object? value, String field) {
    if (value is! String || value.isEmpty) throw FormatException('$field must be a non-empty string');
    return value;
  }
}

class ScreenplayScene {
  ScreenplayScene({
    required this.id,
    required this.day,
    required this.title,
    required this.sources,
    required this.beats,
    required this.branches,
  });

  final String id;
  final int day;
  final String title;
  final List<String> sources;
  final List<ScreenplayBeat> beats;
  final List<ScreenplayBranch> branches;

  ScreenplayBranch? branch(String id) {
    for (final candidate in branches) {
      if (candidate.id == id) return candidate;
    }
    return null;
  }

  factory ScreenplayScene.fromJson(Object? value) {
    if (value is! Map) throw const FormatException('screenplay scene must be an object');
    final id = value['id'];
    final day = value['day'];
    final title = value['title'];
    if (id is! String || title is! String || day is! num || day.toInt() != day) {
      throw const FormatException('screenplay scene has invalid id, day, or title');
    }
    final sources = value['sources'];
    final beats = value['beats'];
    final branches = value['branches'];
    if (sources is! List || beats is! List || branches is! List) {
      throw FormatException('screenplay scene $id has invalid arrays');
    }
    return ScreenplayScene(
      id: id,
      day: day.toInt(),
      title: title,
      sources: [for (final item in sources) _requiredString(item)],
      beats: [for (final item in beats) ScreenplayBeat.fromJson(item)],
      branches: [for (final item in branches) ScreenplayBranch.fromJson(item)],
    );
  }

  static String _requiredString(Object? value) {
    if (value is! String || value.isEmpty) throw const FormatException('screenplay array contains invalid text');
    return value;
  }
}

class ScreenplayBeat {
  ScreenplayBeat({required this.kind, required this.text, this.speaker});

  final String kind;
  final String text;
  final String? speaker;

  factory ScreenplayBeat.fromJson(Object? value) {
    if (value is! Map || value['kind'] is! String || value['text'] is! String) {
      throw const FormatException('screenplay beat has invalid kind or text');
    }
    return ScreenplayBeat(
      kind: value['kind'] as String,
      text: value['text'] as String,
      speaker: value['speaker'] as String?,
    );
  }
}

class ScreenplayBranch {
  ScreenplayBranch({required this.id, required this.prompt, required this.options});

  final String id;
  final String prompt;
  final List<ScreenplayOption> options;

  ScreenplayOption? option(String id) {
    for (final candidate in options) {
      if (candidate.id == id) return candidate;
    }
    return null;
  }

  factory ScreenplayBranch.fromJson(Object? value) {
    if (value is! Map || value['id'] is! String || value['prompt'] is! String || value['options'] is! List) {
      throw const FormatException('screenplay branch is invalid');
    }
    return ScreenplayBranch(
      id: value['id'] as String,
      prompt: value['prompt'] as String,
      options: [for (final item in value['options']) ScreenplayOption.fromJson(item)],
    );
  }
}

class ScreenplayOption {
  ScreenplayOption({required this.id, required this.label, required this.next});

  final String id;
  final String label;
  final String next;

  factory ScreenplayOption.fromJson(Object? value) {
    if (value is! Map || value['id'] is! String || value['label'] is! String || value['next'] is! String) {
      throw const FormatException('screenplay option is invalid');
    }
    return ScreenplayOption(
      id: value['id'] as String,
      label: value['label'] as String,
      next: value['next'] as String,
    );
  }
}
