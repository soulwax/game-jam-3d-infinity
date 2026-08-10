library;

import 'validate.dart' show validateStory, checkLine;

class TextError implements Exception {
  final String message;
  TextError(this.message);
  @override
  String toString() => message;
}

const int maxLineLength = 100;
const int maxDriftDiff = 3;

const List<String> broadcastParts = [
  'date',
  'status',
  'sighting',
  'instructions',
  'closing',
];

const List<String> vocabularyFields = [
  'who',
  'verb',
  'object',
  'place',
  'time',
];

const int minVocabularyValues = 8;
const int maxVocabularyValues = 20;
const int maxUnverifiablesPerDay = 2;

const List<String> requiredDocuments = [
  'residue-shopping-list',
  'residue-calendar',
  'residue-letter',
  'residue-task',
  'journal-seed',
];

const int maxCueLength = 40;
const int maxVisitorArrivalsPerDay = 4;

class StoryText {
  final Map<int, Map<String, String>> broadcasts = {};
  final Map<String, Map<int, Map<String, String>>> visitors = {};
  final Map<String, Map<int, VisitorArrivalMetadata>> visitorArrivals = {};
  final Map<String, Map<int, VisitorAmbientMetadata>> visitorAmbient = {};
  final Map<String, List<String>> vocabulary = {};
  final Map<String, List<String>> documents = {};
  final Map<int, List<String>> street = {};
  final Map<int, List<String>> unverifiables = {};
  final Map<int, List<String>> nights = {};
  final Map<String, List<String>> endings = {};
  final Map<String, List<String>> records = {};
  final Map<String, List<String>> cues = {};
  final Map<String, List<VisitorClaim>> claims = {};
  final Map<String, VisitorReaction> reactions = {};
  final Map<String, VisitorVariant> variants = {};
  final Map<String, String> residues = {};

  int lineCount = 0;

  Map<String, dynamic> toJson() => {
    'broadcasts': _byDay(broadcasts),
    'visitors': {
      for (final v in visitors.entries) v.key: _visitorJson(v.key, v.value),
    },
    'vocabulary': vocabulary,
    'documents': documents,
    'street': _byDay(street),
    'unverifiables': _byDay(unverifiables),
    'nights': _byDay(nights),
    'endings': endings,
    'records': records,
    'cues': cues,
    'claims': {
      for (final c in claims.entries)
        c.key: [for (final claim in c.value) claim.toJson()],
    },
    'reactions': {
      for (final reaction in reactions.entries)
        reaction.key: reaction.value.toJson(),
    },
    'variants': {
      for (final variant in variants.entries)
        variant.key: variant.value.toJson(),
    },
    'residues': residues,
  };

  static Map<String, dynamic> _byDay(Map<int, dynamic> m) => {
    for (final e in m.entries) e.key.toString(): e.value,
  };

  Map<String, dynamic> _visitorJson(
    String visitor,
    Map<int, Map<String, String>> days,
  ) {
    final result = _byDay(days);
    final arrivals = visitorArrivals[visitor];
    if (arrivals != null && arrivals.isNotEmpty) {
      result['_arrival'] = _byDay(
        arrivals.map((day, arrival) => MapEntry(day, arrival.toJson())),
      );
    }
    final ambient = visitorAmbient[visitor];
    if (ambient != null && ambient.isNotEmpty) {
      result['_ambient'] = _byDay(
        ambient.map((day, event) => MapEntry(day, event.toJson())),
      );
    }
    return result;
  }
}

class VisitorArrivalMetadata {
  final int hour;
  final int order;

  const VisitorArrivalMetadata({required this.hour, required this.order});

  Map<String, int> toJson() => {'hour': hour, 'order': order};
}

class VisitorAmbientMetadata {
  final int hour;
  final String channel;
  final String lineKey;

  const VisitorAmbientMetadata({
    required this.hour,
    required this.channel,
    required this.lineKey,
  });

  Map<String, dynamic> toJson() => {
    'hour': hour,
    'channel': channel,
    'lineKey': lineKey,
  };
}

class VisitorClaim {
  final String field;
  final String value;

  const VisitorClaim({required this.field, required this.value});

  Map<String, String> toJson() => {'field': field, 'value': value};
}

/// A small authored choice at a specific line. Reactions are deliberately
/// keyed by the compiled tier and ordinal so compressed/stand-in dialogue can
/// omit a beat without accidentally inheriting the full version's intent.
class VisitorReaction {
  final String id;
  final String visitor;
  final int day;
  final String tier;
  final int ordinal;
  final List<ReactionOption> options;

  const VisitorReaction({
    required this.id,
    required this.visitor,
    required this.day,
    required this.tier,
    required this.ordinal,
    required this.options,
  });

  String get key => '$visitor:$day:$tier:$ordinal';

  Map<String, dynamic> toJson() => {
    'id': id,
    'visitor': visitor,
    'day': day,
    'tier': tier,
    'ordinal': ordinal,
    'options': [for (final option in options) option.toJson()],
  };
}

class ReactionOption {
  final String id;
  final String label;
  final String reply;
  final Map<String, String> effects;

  const ReactionOption({
    required this.id,
    required this.label,
    required this.reply,
    this.effects = const {},
  });

  Map<String, dynamic> toJson() => {
    'id': id,
    'label': label,
    'reply': reply,
    if (effects.isNotEmpty) 'effects': effects,
  };
}

/// A deterministic replacement for one already-authored visitor line. The
/// condition language is intentionally equality-only; missing flags simply
/// leave the original line in place.
class VisitorVariant {
  final String id;
  final String targetKey;
  final String replacement;
  final Map<String, String> conditions;

  const VisitorVariant({
    required this.id,
    required this.targetKey,
    required this.replacement,
    required this.conditions,
  });

  String get key => id;

  Map<String, dynamic> toJson() => {
    'id': id,
    'target': targetKey,
    'replacement': replacement,
    if (conditions.isNotEmpty) 'when': conditions,
  };
}

StoryText parseStory(Map<String, String> sources, {bool complete = true}) {
  final story = StoryText();
  final paths = sources.keys.toList()..sort();

  for (final path in paths) {
    int? day;
    String? part, visitor, tier, vocab, doc, ending, record, lastKey;
    _ReactionBuilder? reaction;
    _ReactionOptionBuilder? reactionOption;
    _VariantBuilder? variant;
    String? residueKey;
    var mode = _Mode.none;
    var lineNum = 0;

    for (final raw in sources[path]!.split('\n')) {
      lineNum++;
      final line = raw.trim();
      if (line.isEmpty || line.startsWith('#')) continue;
      final at = '$path:$lineNum';

      if (line.startsWith('@')) {
        final space = line.indexOf(' ');
        if (space < 0 && line != '@reply') {
          throw TextError('Directive needs a value at $at: $line');
        }
        final name = line.substring(1, space < 0 ? line.length : space);
        final value = space < 0 ? '' : line.substring(space + 1).trim();

        if (name == 'option') {
          if (reaction == null) {
            throw TextError('@option needs @reaction at $at');
          }
          _finishReactionOption(reaction, reactionOption, at);
          reactionOption = _ReactionOptionBuilder(value, at);
          mode = _Mode.reactionLabel;
          continue;
        }
        if (name == 'reply') {
          if (reactionOption == null) {
            throw TextError('@reply needs @option at $at');
          }
          mode = _Mode.reactionReply;
          continue;
        }
        if (name == 'effect') {
          if (reactionOption == null) {
            throw TextError('@effect needs @option at $at');
          }
          final separator = value.indexOf('=');
          if (separator <= 0 || separator == value.length - 1) {
            throw TextError('@effect needs key=value at $at');
          }
          reactionOption.effects[value.substring(0, separator).trim()] = value
              .substring(separator + 1)
              .trim();
          continue;
        }
        if (name == 'reaction') {
          _finishReactionOption(reaction, reactionOption, at);
          _finishReaction(story, reaction, at);
          final parts = value.split(RegExp(r'\s+'));
          if (parts.length != 5) {
            throw TextError(
              '@reaction needs visitor day tier ordinal id at $at',
            );
          }
          final reactionDay = int.tryParse(parts[1]);
          final ordinal = int.tryParse(parts[3]);
          if (reactionDay == null ||
              ordinal == null ||
              reactionDay < 1 ||
              ordinal < 1) {
            throw TextError('@reaction has malformed day/ordinal at $at');
          }
          reaction = _ReactionBuilder(
            visitor: parts[0],
            day: reactionDay,
            tier: parts[2],
            ordinal: ordinal,
            id: parts[4],
            at: at,
          );
          reactionOption = null;
          mode = _Mode.reactionLabel;
          continue;
        }

        if (name == 'variant') {
          _finishReactionOption(reaction, reactionOption, at);
          _finishReaction(story, reaction, at);
          reaction = null;
          reactionOption = null;
          _finishVariant(story, variant, at);
          final id = value.trim();
          if (id.isEmpty) throw TextError('@variant needs an id at $at');
          variant = _VariantBuilder(id, at);
          mode = _Mode.variantTarget;
          continue;
        }
        if (name == 'residue') {
          _finishReactionOption(reaction, reactionOption, at);
          _finishReaction(story, reaction, at);
          reaction = null;
          reactionOption = null;
          _finishVariant(story, variant, at);
          variant = null;
          _finishResidue(story, residueKey, at);
          final residueParts = value.split(RegExp(r'\s+'));
          if (residueParts.length != 2 || !residueParts.first.contains('=')) {
            throw TextError('@residue needs flag=value focus-id at $at');
          }
          residueKey = '${residueParts.first}:${residueParts.last}';
          mode = _Mode.residue;
          continue;
        }
        if (name == 'when') {
          if (variant == null) {
            throw TextError('@when needs @variant at $at');
          }
          final separator = value.indexOf('=');
          if (separator <= 0 || separator == value.length - 1) {
            throw TextError('@when needs key=value at $at');
          }
          final key = value.substring(0, separator).trim();
          final conditionValue = value.substring(separator + 1).trim();
          if (variant.conditions.containsKey(key)) {
            throw TextError('Duplicate @when $key at $at');
          }
          variant.conditions[key] = conditionValue;
          continue;
        }
        if (name == 'replace') {
          if (variant == null) {
            throw TextError('@replace needs @variant at $at');
          }
          if (variant.targetKey != null) {
            throw TextError('Duplicate @replace at $at');
          }
          final target = value.trim();
          if (!target.startsWith('visitor:') || target.length <= 8) {
            throw TextError('@replace needs a visitor line key at $at');
          }
          variant.targetKey = target;
          mode = _Mode.variantContent;
          continue;
        }

        _finishReactionOption(reaction, reactionOption, at);
        reactionOption = null;
        _finishReaction(story, reaction, at);
        reaction = null;
        _finishVariant(story, variant, at);
        variant = null;
        _finishResidue(story, residueKey, at);
        residueKey = null;

        switch (name) {
          case 'day':
            day = _day(value, at);
          case 'part':
            part = value;
            mode = _Mode.broadcast;
          case 'visitor':
            visitor = value;
            day = null;
            part = null;
            mode = _Mode.visitor;
          case 'tier':
            tier = value;
            mode = _Mode.visitor;
          case 'arrival':
            if (visitor == null || day == null || mode != _Mode.visitor) {
              throw TextError('@arrival needs @visitor and @day at $at');
            }
            final arrival = _arrival(value, at);
            final days = story.visitorArrivals.putIfAbsent(visitor, () => {});
            if (days.containsKey(day)) {
              throw TextError(
                'Duplicate @arrival for $visitor day $day at $at',
              );
            }
            days[day] = arrival;
          case 'ambient':
            if (visitor == null || day == null || mode != _Mode.visitor) {
              throw TextError('@ambient needs @visitor and @day at $at');
            }
            final ambient = _ambient(value, at);
            final days = story.visitorAmbient.putIfAbsent(visitor, () => {});
            if (days.containsKey(day)) {
              throw TextError(
                'Duplicate @ambient for $visitor day $day at $at',
              );
            }
            days[day] = ambient;
          case 'vocab':
            vocab = value;
            mode = _Mode.vocab;
            story.vocabulary.putIfAbsent(value, () => []);
          case 'doc':
            doc = value;
            mode = _Mode.doc;
            if (story.documents.containsKey(value)) {
              throw TextError('Duplicate @doc $value at $at');
            }
            story.documents[value] = [];
          case 'street':
            day = _day(value, at);
            mode = _Mode.street;
            story.street.putIfAbsent(day, () => []);
          case 'unverifiable':
            day = _day(value, at);
            mode = _Mode.unverifiable;
            story.unverifiables.putIfAbsent(day, () => []);
          case 'night':
            day = _day(value, at);
            mode = _Mode.night;
            story.nights.putIfAbsent(day, () => []);
          case 'ending':
            ending = value;
            mode = _Mode.ending;
            story.endings.putIfAbsent(value, () => []);
          case 'record':
            record = value;
            mode = _Mode.record;
            story.records.putIfAbsent(value, () => []);
          case 'cue':
            if (lastKey == null) {
              throw TextError('@cue with no preceding line at $at');
            }
            if (value.length > maxCueLength) {
              throw TextError('@cue longer than $maxCueLength chars at $at');
            }
            final on = story.cues.putIfAbsent(lastKey, () => []);
            if (on.contains(value)) {
              throw TextError('"$lastKey" already has cue $value at $at');
            }
            on.add(value);
          case 'claim':
            if (lastKey == null || mode != _Mode.visitor) {
              throw TextError('@claim needs a preceding visitor line at $at');
            }
            final claim = _claim(value, at);
            story.claims.putIfAbsent(lastKey, () => []).add(claim);
          default:
            throw TextError('Unknown directive @$name at $at');
        }
        continue;
      }

      checkLine(line, at);
      story.lineCount++;

      switch (mode) {
        case _Mode.none:
          throw TextError('Content before any directive at $at');
        case _Mode.broadcast:
          if (day == null) throw TextError('@part without @day at $at');
          _put(story.broadcasts.putIfAbsent(day, () => {}), part!, line, at);
          lastKey = 'broadcast:$day:$part';
        case _Mode.visitor:
          if (visitor == null || day == null || tier == null) {
            throw TextError('@tier needs @visitor and @day at $at');
          }
          final days = story.visitors.putIfAbsent(visitor, () => {});
          _put(days.putIfAbsent(day, () => {}), tier, line, at);
          lastKey = 'visitor:$visitor:$day:$tier';
        case _Mode.vocab:
          final values = story.vocabulary[vocab]!;
          if (values.contains(line)) {
            throw TextError('Duplicate value in @vocab $vocab at $at: $line');
          }
          values.add(line);
        case _Mode.doc:
          story.documents[doc]!.add(line);
        case _Mode.street:
          story.street[day]!.add(line);
        case _Mode.unverifiable:
          story.unverifiables[day]!.add(line);
        case _Mode.night:
          story.nights[day]!.add(line);
        case _Mode.ending:
          story.endings[ending]!.add(line);
        case _Mode.record:
          story.records[record]!.add(line);
        case _Mode.reactionLabel:
          if (reactionOption == null) {
            throw TextError('Reaction option missing at $at');
          }
          reactionOption.label = line;
          mode = _Mode.reactionReply;
        case _Mode.reactionReply:
          if (reactionOption == null) {
            throw TextError('Reaction option missing at $at');
          }
          if (reactionOption.reply != null) {
            throw TextError('Reaction option has multiple replies at $at');
          }
          reactionOption.reply = line;
        case _Mode.variantTarget:
          throw TextError('Variant ${variant?.id} needs @replace at $at');
        case _Mode.variantContent:
          if (variant == null || variant.targetKey == null) {
            throw TextError('Variant replacement is missing at $at');
          }
          if (variant.replacement != null) {
            throw TextError('Variant has multiple replacement lines at $at');
          }
          variant.replacement = line;
        case _Mode.residue:
          if (residueKey == null) {
            throw TextError('Residue key is missing at $at');
          }
          if (story.residues.containsKey(residueKey)) {
            throw TextError('Duplicate residue $residueKey at $at');
          }
          story.residues[residueKey] = line;
          mode = _Mode.residueDone;
        case _Mode.residueDone:
          throw TextError('Residue $residueKey has multiple lines at $at');
      }
    }
    _finishReactionOption(reaction, reactionOption, '$path:$lineNum');
    _finishReaction(story, reaction, '$path:$lineNum');
    _finishVariant(story, variant, '$path:$lineNum');
    _finishResidue(story, residueKey, '$path:$lineNum');
  }

  if (complete) validateStory(story);
  return story;
}

class _ReactionBuilder {
  _ReactionBuilder({
    required this.visitor,
    required this.day,
    required this.tier,
    required this.ordinal,
    required this.id,
    required this.at,
  });
  final String visitor;
  final int day;
  final String tier;
  final int ordinal;
  final String id;
  final String at;
  final List<ReactionOption> options = [];

  String get key => '$visitor:$day:$tier:$ordinal';
}

class _ReactionOptionBuilder {
  _ReactionOptionBuilder(this.id, this.at);
  final String id;
  final String at;
  String? label;
  String? reply;
  final Map<String, String> effects = {};
}

class _VariantBuilder {
  _VariantBuilder(this.id, this.at);
  final String id;
  final String at;
  String? targetKey;
  String? replacement;
  final Map<String, String> conditions = {};
}

void _finishReactionOption(
  _ReactionBuilder? reaction,
  _ReactionOptionBuilder? option,
  String at,
) {
  if (reaction == null || option == null) return;
  if (option.label == null || option.reply == null) {
    throw TextError(
      'Reaction option ${option.id} needs label and reply at $at',
    );
  }
  if (reaction.options.any((candidate) => candidate.id == option.id)) {
    throw TextError('Duplicate reaction option ${option.id} at $at');
  }
  reaction.options.add(
    ReactionOption(
      id: option.id,
      label: option.label!,
      reply: option.reply!,
      effects: Map.unmodifiable(option.effects),
    ),
  );
}

void _finishReaction(StoryText story, _ReactionBuilder? reaction, String at) {
  if (reaction == null) return;
  if (reaction.options.length < 2) {
    throw TextError(
      'Reaction ${reaction.id} needs at least two options at $at',
    );
  }
  if (story.reactions.containsKey(reaction.key)) {
    throw TextError('Duplicate reaction ${reaction.key} at $at');
  }
  story.reactions[reaction.key] = VisitorReaction(
    id: reaction.id,
    visitor: reaction.visitor,
    day: reaction.day,
    tier: reaction.tier,
    ordinal: reaction.ordinal,
    options: List.unmodifiable(reaction.options),
  );
}

void _finishVariant(StoryText story, _VariantBuilder? variant, String at) {
  if (variant == null) return;
  final target = variant.targetKey;
  final replacement = variant.replacement;
  if (target == null || replacement == null) {
    throw TextError('Variant ${variant.id} needs @replace and one line at $at');
  }
  if (story.variants.containsKey(variant.id)) {
    throw TextError('Duplicate variant ${variant.id} at $at');
  }
  story.variants[variant.id] = VisitorVariant(
    id: variant.id,
    targetKey: target,
    replacement: replacement,
    conditions: Map.unmodifiable(variant.conditions),
  );
}

void _finishResidue(StoryText story, String? key, String at) {
  if (key == null) return;
  if (!story.residues.containsKey(key)) {
    throw TextError('Residue $key needs one content line at $at');
  }
}

enum _Mode {
  none,
  broadcast,
  visitor,
  vocab,
  doc,
  street,
  unverifiable,
  night,
  ending,
  record,
  reactionLabel,
  reactionReply,
  variantTarget,
  variantContent,
  residue,
  residueDone,
}

int _day(String value, String at) {
  final n = int.tryParse(value);
  if (n == null || n < 1 || n > 21) {
    throw TextError('Day must be 1-21, got "$value" at $at');
  }
  return n;
}

VisitorArrivalMetadata _arrival(String value, String at) {
  final fields = value.split(RegExp(r'\s+'));
  if (fields.length != 2) {
    throw TextError('@arrival needs exactly <hour> <order> at $at');
  }
  final hour = int.tryParse(fields[0]);
  final order = int.tryParse(fields[1]);
  if (hour == null || hour < 0 || hour > 23) {
    throw TextError('@arrival hour must be 0-23 at $at');
  }
  if (order == null || order < 0) {
    throw TextError('@arrival order must be a non-negative integer at $at');
  }
  return VisitorArrivalMetadata(hour: hour, order: order);
}

VisitorAmbientMetadata _ambient(String value, String at) {
  final fields = value.split(RegExp(r'\s+'));
  if (fields.length != 3) {
    throw TextError(
      '@ambient needs <hour> <street|letterbox> <line-key> at $at',
    );
  }
  final hour = int.tryParse(fields[0]);
  if (hour == null || hour < 0 || hour > 23) {
    throw TextError('@ambient hour must be 0-23 at $at');
  }
  if (fields[1] != 'street' && fields[1] != 'letterbox') {
    throw TextError('@ambient channel must be street or letterbox at $at');
  }
  if (!RegExp(r'^(full|compressed)\.[1-9]\d*$').hasMatch(fields[2])) {
    throw TextError('@ambient line-key must be a visitor tier key at $at');
  }
  return VisitorAmbientMetadata(
    hour: hour,
    channel: fields[1],
    lineKey: fields[2],
  );
}

VisitorClaim _claim(String value, String at) {
  final space = value.indexOf(' ');
  if (space < 0) {
    throw TextError('@claim needs <field> <value> at $at');
  }
  final field = value.substring(0, space);
  final claimValue = value.substring(space + 1).trim();
  if (!vocabularyFields.contains(field)) {
    throw TextError('@claim field "$field" is not a vocabulary field at $at');
  }
  if (claimValue.isEmpty) {
    throw TextError('@claim value is empty at $at');
  }
  return VisitorClaim(field: field, value: claimValue);
}

void _put(Map<String, String> target, String key, String line, String at) {
  if (target.containsKey(key)) {
    throw TextError('"$key" already has a line - one line per key - at $at');
  }
  target[key] = line;
}
