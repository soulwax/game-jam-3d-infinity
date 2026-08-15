import 'dart:js_interop';
import 'package:web/web.dart' as web;

import 'corpus.dart';
import 'game_event_orchestrator.dart';
import 'screenplay.dart';
import 'schema.dart'
    show
        StoryText,
        VisitorArrivalMetadata,
        VisitorAmbientMetadata,
        VisitorClaim,
        VisitorReaction,
        ReactionOption,
        VisitorVariant;

class TextLibrary {
  static TextLibrary? _instance;

  late Map<String, dynamic> _broadcasts;
  late Map<String, dynamic> _visitors;
  late Map<String, dynamic> _vocabulary;
  late Map<String, dynamic> _documents;
  late Map<String, dynamic> _street;
  late Map<String, dynamic> _unverifiables;
  late Map<String, dynamic> _nights;
  late Map<String, dynamic> _endings;
  late Map<String, dynamic> _records;
  late Map<String, dynamic> _cues;
  late Map<String, dynamic> _claims;
  late Map<String, dynamic> _reactions;
  late Map<String, dynamic> _variants;
  late Map<String, dynamic> _residues;
  StoryScreenplay? _screenplay;
  GameEventOrchestrator? _eventOrchestrator;

  TextLibrary._();

  static TextLibrary get instance => _instance ??= TextLibrary._();

  Future<void> load() async {
    try {
      final resp = await web.window.fetch('res/text.json'.toJS).toDart;
      final jsonText = (await resp.text().toDart).toString();
      final decoded = decodeTextCorpus(jsonText);
      _broadcasts = decoded['broadcasts']!;
      _visitors = decoded['visitors']!;
      _vocabulary = decoded['vocabulary']!;
      _documents = decoded['documents']!;
      _street = decoded['street']!;
      _unverifiables = decoded['unverifiables']!;
      _nights = decoded['nights']!;
      _endings = decoded['endings']!;
      _records = decoded['records']!;
      _cues = decoded['cues']!;
      _claims = decoded['claims']!;
      _reactions = decoded['reactions'] is Map
          ? Map<String, dynamic>.from(decoded['reactions'] as Map)
          : <String, dynamic>{};
      _variants = decoded['variants'] is Map
          ? Map<String, dynamic>.from(decoded['variants'] as Map)
          : <String, dynamic>{};
      _residues = decoded['residues'] is Map
          ? Map<String, dynamic>.from(decoded['residues'] as Map)
          : <String, dynamic>{};
      final screenplayResp = await web.window.fetch('res/story_script.json'.toJS).toDart;
      // Older checked-in web bundles may predate the screenplay artifact. The
      // content build produces it; keep those bundles playable while exposing
      // the absence to callers through a null screenplay.
      if (screenplayResp.ok) {
      _screenplay = StoryScreenplay.fromJson(
        (await screenplayResp.text().toDart).toString(),
      );
      _eventOrchestrator = GameEventOrchestrator(_screenplay!);
      }
    } catch (e) {
      throw 'Failed to load text.json: $e';
    }
  }

  Map<String, String>? getBroadcast(int day) {
    final parts = _broadcasts[day.toString()];
    if (parts is Map) {
      return Map<String, String>.fromEntries(
        parts.entries
            .where((entry) => entry.key is String && entry.value is String)
            .map(
              (entry) => MapEntry(entry.key as String, entry.value as String),
            ),
      );
    }
    return null;
  }

  String? getBroadcastPart(int day, String part) {
    final broadcast = getBroadcast(day);
    return broadcast?[part];
  }

  Map<int, Map<String, dynamic>>? getVisitor(String name) {
    final visitor = _visitors[name];
    if (visitor is Map) {
      final result = <int, Map<String, dynamic>>{};
      for (final entry in visitor.entries) {
        final dayNum = entry.key is String
            ? int.tryParse(entry.key as String)
            : null;
        if (dayNum != null && entry.value is Map) {
          result[dayNum] = Map<String, dynamic>.from(entry.value as Map);
        }
      }
      return result.isNotEmpty ? result : null;
    }
    return null;
  }

  String? getVisitorDialogue(String visitorName, int day, String tier) {
    final visitor = getVisitor(visitorName);
    final dayData = visitor?[day];
    final value = dayData?[tier];
    return value is String ? value : null;
  }

  List<String> get visitorNames => _visitors.keys.toList()..sort();

  String? getResidue(String flagKey, String flagValue, String focusId) {
    final value = _residues['$flagKey=$flagValue:$focusId'];
    return value is String ? value : null;
  }

  VisitorReaction? getVisitorReaction(
    String visitor,
    int day,
    String tier,
    int ordinal,
  ) {
    final raw = _reactions['$visitor:$day:$tier:$ordinal'];
    if (raw is! Map) return null;
    final id = raw['id'];
    final rawOptions = raw['options'];
    if (id is! String || rawOptions is! List) return null;
    final options = <ReactionOption>[];
    for (final item in rawOptions) {
      if (item is! Map ||
          item['id'] is! String ||
          item['label'] is! String ||
          item['reply'] is! String) {
        return null;
      }
      final rawEffects = item['effects'];
      final effects = <String, String>{};
      if (rawEffects is Map) {
        for (final entry in rawEffects.entries) {
          if (entry.key is! String || entry.value is! String) return null;
          effects[entry.key as String] = entry.value as String;
        }
      }
      options.add(
        ReactionOption(
          id: item['id'] as String,
          label: item['label'] as String,
          reply: item['reply'] as String,
          effects: Map.unmodifiable(effects),
        ),
      );
    }
    if (options.length < 2) return null;
    return VisitorReaction(
      id: id,
      visitor: visitor,
      day: day,
      tier: tier,
      ordinal: ordinal,
      options: List.unmodifiable(options),
    );
  }

  List<int> visitorDays(String visitor) =>
      (getVisitor(visitor)?.keys.toList() ?? const <int>[])..sort();

  bool hasVisitorTier(String visitor, int day, String tier) =>
      getVisitor(visitor)?[day]?.containsKey(tier) ?? false;

  /// Returns null when the authored corpus deliberately has no arrival timing.
  VisitorArrivalMetadata? getVisitorArrivalMetadata(
    String visitorName,
    int day,
  ) {
    final visitor = _visitors[visitorName];
    final raw = visitor is Map ? visitor['_arrival'] : null;
    final dayData = raw is Map ? raw[day.toString()] : null;
    if (dayData is! Map) return null;
    final hour = dayData['hour'];
    final order = dayData['order'];
    if (hour is! num ||
        order is! num ||
        hour != hour.toInt() ||
        order != order.toInt()) {
      return null;
    }
    return VisitorArrivalMetadata(hour: hour.toInt(), order: order.toInt());
  }

  VisitorAmbientMetadata? getVisitorAmbientMetadata(
    String visitorName,
    int day,
  ) {
    final visitor = _visitors[visitorName];
    final raw = visitor is Map ? visitor['_ambient'] : null;
    final dayData = raw is Map ? raw[day.toString()] : null;
    if (dayData is! Map) return null;
    final hour = dayData['hour'];
    final channel = dayData['channel'];
    final lineKey = dayData['lineKey'];
    if (hour is! num ||
        hour != hour.toInt() ||
        channel is! String ||
        lineKey is! String) {
      return null;
    }
    return VisitorAmbientMetadata(
      hour: hour.toInt(),
      channel: channel,
      lineKey: lineKey,
    );
  }

  /// Rehydrates only the visitor data needed by the deterministic runtime
  /// director. The compiled JSON remains the browser's source of text.
  StoryText visitorStory() {
    final story = StoryText();
    for (final entry in _visitors.entries) {
      if (entry.value is! Map) continue;
      final days = <int, Map<String, String>>{};
      final rawVisitor = entry.value as Map;
      for (final dayEntry in rawVisitor.entries) {
        final day = dayEntry.key is String
            ? int.tryParse(dayEntry.key as String)
            : null;
        if (day == null || dayEntry.value is! Map) continue;
        final lines = <String, String>{};
        for (final line in (dayEntry.value as Map).entries) {
          if (line.key is String && line.value is String) {
            lines[line.key as String] = line.value as String;
          }
        }
        if (lines.isNotEmpty) days[day] = lines;
      }
      if (days.isEmpty) continue;
      story.visitors[entry.key] = days;
      final arrivals = <int, VisitorArrivalMetadata>{};
      for (final day in days.keys) {
        final arrival = getVisitorArrivalMetadata(entry.key, day);
        if (arrival != null) arrivals[day] = arrival;
      }
      if (arrivals.isNotEmpty) story.visitorArrivals[entry.key] = arrivals;
      final ambient = <int, VisitorAmbientMetadata>{};
      for (final day in days.keys) {
        final event = getVisitorAmbientMetadata(entry.key, day);
        if (event != null) ambient[day] = event;
      }
      if (ambient.isNotEmpty) story.visitorAmbient[entry.key] = ambient;
    }
    for (final raw in _reactions.values) {
      if (raw is! Map ||
          raw['visitor'] is! String ||
          raw['day'] is! num ||
          raw['tier'] is! String ||
          raw['ordinal'] is! num ||
          raw['id'] is! String) {
        continue;
      }
      final reaction = getVisitorReaction(
        raw['visitor'] as String,
        (raw['day'] as num).toInt(),
        raw['tier'] as String,
        (raw['ordinal'] as num).toInt(),
      );
      if (reaction != null) story.reactions[reaction.key] = reaction;
    }
    for (final raw in _variants.values) {
      if (raw is! Map ||
          raw['id'] is! String ||
          raw['target'] is! String ||
          raw['replacement'] is! String) {
        continue;
      }
      final conditions = <String, String>{};
      final rawConditions = raw['when'];
      if (rawConditions is Map) {
        for (final entry in rawConditions.entries) {
          if (entry.key is! String || entry.value is! String) continue;
          conditions[entry.key as String] = entry.value as String;
        }
      }
      final variant = VisitorVariant(
        id: raw['id'] as String,
        targetKey: raw['target'] as String,
        replacement: raw['replacement'] as String,
        conditions: Map.unmodifiable(conditions),
      );
      story.variants[variant.id] = variant;
    }
    for (final entry in _residues.entries) {
      if (entry.value is String) {
        story.residues[entry.key] = entry.value as String;
      }
    }
    for (final entry in _claims.entries) {
      final raw = entry.value;
      if (raw is! List) continue;
      final claims = <VisitorClaim>[
        for (final item in raw)
          if (item is Map && item['field'] is String && item['value'] is String)
            VisitorClaim(
              field: item['field'] as String,
              value: item['value'] as String,
            ),
      ];
      if (claims.isNotEmpty) story.claims[entry.key] = claims;
    }
    return story;
  }

  List<String> getVocabulary(String field) {
    final values = _vocabulary[field];
    return values is List ? List<String>.from(values) : const [];
  }

  List<String> getDocument(String id) {
    final lines = _documents[id];
    return lines is List ? List<String>.from(lines) : const [];
  }

  List<String> getStreet(int day) {
    final layers = _street[day.toString()];
    return layers is List ? List<String>.from(layers) : const [];
  }

  List<String> getUnverifiables(int day) {
    final lines = _unverifiables[day.toString()];
    return lines is List ? List<String>.from(lines) : const [];
  }

  List<String> getBroadcastCues(int day, String part) {
    final cues = _cues['broadcast:$day:$part'];
    return cues is List ? List<String>.from(cues) : const [];
  }

  List<String> getVisitorCues(String visitorName, int day, String tier) {
    final cues = _cues['visitor:$visitorName:$day:$tier'];
    return cues is List ? List<String>.from(cues) : const [];
  }

  List<String> getNights(int day) {
    final lines = _nights[day.toString()];
    return lines is List ? List<String>.from(lines) : const [];
  }

  List<String> getEnding(String id) {
    final lines = _endings[id];
    return lines is List ? List<String>.from(lines) : const [];
  }

  List<String> getRecord(String id) {
    final lines = _records[id];
    return lines is List ? List<String>.from(lines) : const [];
  }

  /// The chronological dramatic spine. Granular dialogue still comes from the
  /// normal corpus getters; this graph is for scene routing, branch UI, and
  /// editor/runtime diagnostics.
  StoryScreenplay? get screenplay => _screenplay;

  /// Authored event schedule for game-loop adapters. Null only when an older
  /// web bundle has no compiled screenplay artifact.
  GameEventOrchestrator? get gameEvents => _eventOrchestrator;
}

final textLibrary = TextLibrary.instance;
