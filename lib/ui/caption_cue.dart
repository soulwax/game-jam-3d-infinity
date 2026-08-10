enum CaptionCueKind { speech, nonSpeech, direction }

/// Accessible caption payload independent of Web Audio or browser DOM.
final class CaptionCue {
  final CaptionCueKind kind;
  final String text;
  final String? speaker;
  final String? direction;

  const CaptionCue({
    required this.kind,
    required this.text,
    this.speaker,
    this.direction,
  });

  String get formatted {
    final cleanText = text.trim();
    if (cleanText.isEmpty) return '';
    final prefix = <String>[
      if (speaker != null && speaker!.trim().isNotEmpty) speaker!.trim(),
      if (direction != null && direction!.trim().isNotEmpty)
        '(${direction!.trim()})',
    ];
    return prefix.isEmpty ? cleanText : '${prefix.join(' ')}: $cleanText';
  }

  Map<String, Object?> toJson() => {
    'kind': kind.name,
    'text': text,
    'speaker': speaker,
    'direction': direction,
  };

  factory CaptionCue.fromJson(Object? raw) {
    if (raw is! Map || raw['kind'] is! String || raw['text'] is! String) {
      throw const FormatException('invalid caption cue');
    }
    final kind = CaptionCueKind.values.firstWhere(
      (value) => value.name == raw['kind'],
      orElse: () => throw const FormatException('invalid caption cue kind'),
    );
    String? optionalString(String key) {
      final value = raw[key];
      if (value == null) return null;
      if (value is! String) throw FormatException('invalid caption $key');
      return value;
    }
    return CaptionCue(
      kind: kind,
      text: raw['text'] as String,
      speaker: optionalString('speaker'),
      direction: optionalString('direction'),
    );
  }
}

/// Authored provenance for a caption. It links the visible equivalent to a
/// source/line identity without allowing the caption to select a branch.
final class CaptionCueSource {
  final String sourceId;
  final String? lineId;
  final CaptionCue cue;

  CaptionCueSource({required this.sourceId, this.lineId, required this.cue}) {
    if (sourceId.trim().isEmpty || lineId?.trim() == '') {
      throw const FormatException('caption source identity is required');
    }
  }

  Map<String, Object?> toJson() => {
    'sourceId': sourceId,
    'lineId': lineId,
    'cue': cue.toJson(),
  };

  factory CaptionCueSource.fromJson(Object? raw) {
    if (raw is! Map || raw['sourceId'] is! String) {
      throw const FormatException('invalid caption source');
    }
    final lineId = raw['lineId'];
    if (lineId != null && lineId is! String) {
      throw const FormatException('invalid caption line ID');
    }
    return CaptionCueSource(
      sourceId: raw['sourceId'] as String,
      lineId: lineId as String?,
      cue: CaptionCue.fromJson(raw['cue']),
    );
  }
}

/// Immutable authored caption index. It is lookup/provenance only; it cannot
/// resolve a story branch or advance a simulation clock.
final class CaptionCueCatalog {
  late final Map<String, CaptionCueSource> _sources;

  CaptionCueCatalog(Iterable<CaptionCueSource> sources) {
    final bySource = <String, CaptionCueSource>{};
    final lineIds = <String>{};
    for (final source in sources) {
      final sourceId = source.sourceId.trim();
      if (bySource.containsKey(sourceId)) {
        throw const FormatException('duplicate caption source ID');
      }
      final lineId = source.lineId?.trim();
      if (lineId != null && !lineIds.add(lineId)) {
        throw const FormatException('duplicate caption line ID');
      }
      bySource[sourceId] = source;
    }
    _sources = Map.unmodifiable(bySource);
  }

  Iterable<String> get sourceIds => _sources.keys;

  CaptionCueSource? sourceFor(String sourceId) => _sources[sourceId];

  Map<String, Object> toJson() => {
    'sources': [for (final source in _sources.values) source.toJson()],
  };

  factory CaptionCueCatalog.fromJson(Object? raw) {
    if (raw is! Map || raw['sources'] is! List) {
      throw const FormatException('invalid caption catalog');
    }
    return CaptionCueCatalog(
      (raw['sources'] as List).map(CaptionCueSource.fromJson),
    );
  }
}
