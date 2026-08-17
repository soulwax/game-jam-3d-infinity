import 'dart:convert';

/// The human-authored dramatic layer above the granular text corpus.
///
/// The screenplay deliberately contains references to the existing `text/`
/// files rather than copying their lines. This keeps one source for prose while
/// giving writers and runtime systems a chronological scene/branch graph.
class StoryScreenplay {
  StoryScreenplay({
    required this.sources,
    required this.scenes,
    this.events = const [],
  });

  final List<String> sources;
  final List<ScreenplayScene> scenes;
  final List<ScreenplayEvent> events;

  ScreenplayScene? sceneForDay(int day) {
    for (final scene in scenes) {
      if (scene.day == day) return scene;
    }
    return null;
  }

  ScreenplayEvent? eventById(String id) {
    for (final event in events) {
      if (event.id == id) return event;
    }
    return null;
  }

  factory StoryScreenplay.fromJson(String source) {
    final raw = jsonDecode(source);
    if (raw is! Map) {
      throw const FormatException('screenplay root must be an object');
    }
    final sourceList = raw['sources'];
    final sceneList = raw['scenes'];
    final eventList = raw['events'] ?? const [];
    if (raw['version'] != 1 ||
        sourceList is! List ||
        sceneList is! List ||
        eventList is! List) {
      throw const FormatException('screenplay needs sources and scenes arrays');
    }
    final scenes = [
      for (final value in sceneList) ScreenplayScene.fromJson(value),
    ];
    final events = [
      for (final value in eventList) ScreenplayEvent.fromJson(value),
    ];
    final sceneIds = <String>{};
    for (final scene in scenes) {
      if (!sceneIds.add(scene.id)) {
        throw FormatException('duplicate screenplay scene: ${scene.id}');
      }
    }
    final eventIds = <String>{};
    for (final event in events) {
      if (!eventIds.add(event.id)) {
        throw FormatException('duplicate screenplay event: ${event.id}');
      }
    }
    return StoryScreenplay(
      sources: [for (final value in sourceList) _string(value, 'source')],
      scenes: scenes,
      events: events,
    );
  }

  static String _string(Object? value, String field) {
    if (value is! String || value.isEmpty) {
      throw FormatException('$field must be a non-empty string');
    }
    return value;
  }
}

class ScreenplayEvent {
  ScreenplayEvent({
    required this.id,
    required this.kind,
    required this.day,
    required this.hour,
    required this.label,
    this.source = '',
    this.speaker = '',
    this.cue = '',
    Iterable<String> effects = const [],
    this.nextScene = '',
    this.randomFrom,
    this.randomTo,
  }) : effects = List<String>.unmodifiable(effects);

  final String id;
  final String kind;
  final int day;
  final double hour;
  final String label;
  final String source;
  final String speaker;
  final String cue;
  final List<String> effects;
  final String nextScene;
  final double? randomFrom;
  final double? randomTo;

  bool get hasRandomRange => randomFrom != null || randomTo != null;

  factory ScreenplayEvent.fromJson(Object? value) {
    if (value is! Map ||
        value['id'] is! String ||
        (value['id'] as String).isEmpty ||
        value['kind'] is! String ||
        (value['kind'] as String).isEmpty ||
        value['day'] is! num ||
        value['hour'] is! num ||
        value['label'] is! String ||
        (value['label'] as String).isEmpty) {
      throw const FormatException('screenplay event has invalid core fields');
    }
    final rawEffects = value['effects'] ?? const [];
    if (rawEffects is! List || rawEffects.any((item) => item is! String)) {
      throw const FormatException('screenplay event effects are invalid');
    }
    final day = (value['day'] as num).toInt();
    final hour = (value['hour'] as num).toDouble();
    if (day < 1 || day > 21 || !hour.isFinite || hour < 0 || hour >= 24) {
      throw const FormatException('screenplay event day/hour is out of range');
    }
    final randomFrom = value['randomFrom'];
    final randomTo = value['randomTo'];
    if ((randomFrom != null && randomFrom is! num) ||
        (randomTo != null && randomTo is! num) ||
        (randomFrom == null) != (randomTo == null)) {
      throw const FormatException('screenplay event random range is invalid');
    }
    if (randomFrom is num &&
        randomTo is num &&
        (!randomFrom.toDouble().isFinite ||
            !randomTo.toDouble().isFinite ||
            randomFrom < 0 ||
            randomTo >= 24 ||
            randomFrom > randomTo)) {
      throw const FormatException(
        'screenplay event random range is out of range',
      );
    }
    String optionalString(String key) {
      final item = value[key];
      return item == null
          ? ''
          : item is String
          ? item
          : (throw FormatException('screenplay event $key is invalid'));
    }

    return ScreenplayEvent(
      id: value['id'] as String,
      kind: value['kind'] as String,
      day: day,
      hour: hour,
      label: value['label'] as String,
      source: optionalString('source'),
      speaker: optionalString('speaker'),
      cue: optionalString('cue'),
      effects: [for (final item in rawEffects) item as String],
      nextScene: optionalString('nextScene'),
      randomFrom: randomFrom is num ? randomFrom.toDouble() : null,
      randomTo: randomTo is num ? randomTo.toDouble() : null,
    );
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
    if (value is! Map)
      throw const FormatException('screenplay scene must be an object');
    final id = value['id'];
    final day = value['day'];
    final title = value['title'];
    if (id is! String ||
        title is! String ||
        day is! num ||
        day.toInt() != day) {
      throw const FormatException(
        'screenplay scene has invalid id, day, or title',
      );
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
    if (value is! String || value.isEmpty)
      throw const FormatException('screenplay array contains invalid text');
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
  ScreenplayBranch({
    required this.id,
    required this.prompt,
    required this.options,
  });

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
    if (value is! Map ||
        value['id'] is! String ||
        value['prompt'] is! String ||
        value['options'] is! List) {
      throw const FormatException('screenplay branch is invalid');
    }
    return ScreenplayBranch(
      id: value['id'] as String,
      prompt: value['prompt'] as String,
      options: [
        for (final item in value['options']) ScreenplayOption.fromJson(item),
      ],
    );
  }
}

class ScreenplayOption {
  ScreenplayOption({required this.id, required this.label, required this.next});

  final String id;
  final String label;
  final String next;

  factory ScreenplayOption.fromJson(Object? value) {
    if (value is! Map ||
        value['id'] is! String ||
        value['label'] is! String ||
        value['next'] is! String) {
      throw const FormatException('screenplay option is invalid');
    }
    return ScreenplayOption(
      id: value['id'] as String,
      label: value['label'] as String,
      next: value['next'] as String,
    );
  }
}
