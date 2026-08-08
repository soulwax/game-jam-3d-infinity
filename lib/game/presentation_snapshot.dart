import 'dart:convert';

/// Renderer/audio input shared by every presentation backend.
///
/// The payload is intentionally structural: only finite JSON-like scalars,
/// string-keyed maps, and ordered lists may cross this boundary. Runtime
/// objects (including engine handles, timers, and callbacks) are rejected at
/// construction time.
class PresentationSnapshot {
  final Map<String, dynamic> values;

  PresentationSnapshot({required Map<String, dynamic> values})
    : values = _canonicalMap(values);

  factory PresentationSnapshot.fromJson(Object? raw) {
    if (raw is! Map) {
      throw const FormatException('presentation snapshot must be an object');
    }
    return PresentationSnapshot(values: _stringMap(raw));
  }

  Map<String, dynamic> toJson() => _canonicalMap(values);

  String encode() => jsonEncode(toJson());
}

Map<String, dynamic> _stringMap(Map value) {
  final result = <String, dynamic>{};
  for (final entry in value.entries) {
    if (entry.key is! String) {
      throw const FormatException('presentation keys must be strings');
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
  if (value is List) return List.unmodifiable(value.map(_canonicalValue));
  if (value == null || value is bool || value is String) return value;
  if (value is num) {
    if (!value.isFinite) {
      throw const FormatException(
        'presentation snapshot contains a non-finite number',
      );
    }
    return value;
  }
  throw FormatException(
    'presentation snapshot contains unsupported value ${value.runtimeType}',
  );
}
