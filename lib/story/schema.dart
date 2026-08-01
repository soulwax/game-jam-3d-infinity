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

StoryText parseStory(Map<String, String> sources, {bool complete = true}) {
  final story = StoryText();
  final paths = sources.keys.toList()..sort();

  for (final path in paths) {
    int? day;
    String? part, visitor, tier, vocab, doc, ending, record, lastKey;
    var mode = _Mode.none;
    var lineNum = 0;

    for (final raw in sources[path]!.split('\n')) {
      lineNum++;
      final line = raw.trim();
      if (line.isEmpty || line.startsWith('#')) continue;
      final at = '$path:$lineNum';

      if (line.startsWith('@')) {
        final space = line.indexOf(' ');
        if (space < 0) throw TextError('Directive needs a value at $at: $line');
        final name = line.substring(1, space);
        final value = line.substring(space + 1).trim();

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
      }
    }
  }

  if (complete) validateStory(story);
  return story;
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
