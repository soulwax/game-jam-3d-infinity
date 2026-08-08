import 'dart:convert';

class DomainSnapshot {
  static const sections = <String>{
    'calendar',
    'economy',
    'journal',
    'house',
    'content',
    'features',
    'secondRun',
  };

  final Map<String, dynamic> calendar;
  final Map<String, dynamic> economy;
  final Map<String, dynamic> journal;
  final Map<String, dynamic> house;
  final Map<String, dynamic> content;
  final Map<String, dynamic> features;
  final Map<String, dynamic> secondRun;

  DomainSnapshot({
    required Map<String, dynamic> calendar,
    required Map<String, dynamic> economy,
    required Map<String, dynamic> journal,
    required Map<String, dynamic> house,
    required Map<String, dynamic> content,
    required Map<String, dynamic> features,
    required Map<String, dynamic> secondRun,
  }) : calendar = _canonicalMap(calendar),
       economy = _canonicalMap(economy),
       journal = _canonicalMap(journal),
       house = _canonicalMap(house),
       content = _canonicalMap(content),
       features = _canonicalMap(features),
       secondRun = _canonicalMap(secondRun);

  factory DomainSnapshot.fromJson(Object? raw) {
    if (raw is! Map) {
      throw const FormatException('domain snapshot must be an object');
    }
    final input = _stringMap(raw);
    if (!input.keys.toSet().containsAll(sections) ||
        input.length != sections.length) {
      throw const FormatException('domain snapshot sections are incomplete');
    }
    return DomainSnapshot(
      calendar: _section(input, 'calendar'),
      economy: _section(input, 'economy'),
      journal: _section(input, 'journal'),
      house: _section(input, 'house'),
      content: _section(input, 'content'),
      features: _section(input, 'features'),
      secondRun: _section(input, 'secondRun'),
    );
  }

  Map<String, dynamic> toJson() => _canonicalMap({
    'calendar': calendar,
    'economy': economy,
    'journal': journal,
    'house': house,
    'content': content,
    'features': features,
    'secondRun': secondRun,
  });

  String encode() => jsonEncode(toJson());
}

Map<String, dynamic> _section(Map<String, dynamic> input, String key) {
  final value = input[key];
  if (value is! Map) {
    throw FormatException('domain snapshot section $key must be an object');
  }
  return _stringMap(value);
}

Map<String, dynamic> _stringMap(Map value) {
  final result = <String, dynamic>{};
  for (final entry in value.entries) {
    if (entry.key is! String) {
      throw const FormatException('domain snapshot keys must be strings');
    }
    result[entry.key as String] = entry.value;
  }
  return result;
}

Map<String, dynamic> _canonicalMap(Map<String, dynamic> value) {
  final keys = value.keys.toList()..sort();
  return Map.unmodifiable({
    for (final key in keys) key: _canonicalValue(value[key]),
  });
}

dynamic _canonicalValue(dynamic value) {
  if (value is Map) return _canonicalMap(_stringMap(value));
  if (value is List) {
    return List.unmodifiable(value.map(_canonicalValue));
  }
  if (value == null || value is bool || value is String) return value;
  if (value is num) {
    if (!value.isFinite) {
      throw const FormatException('domain snapshot contains a non-finite number');
    }
    return value;
  }
  throw FormatException(
    'domain snapshot contains unsupported value ${value.runtimeType}',
  );
}
