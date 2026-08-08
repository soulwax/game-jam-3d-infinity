import 'dart:convert';

class SaveSnapshot {
  static const int legacyVersion = 1;
  static const int currentVersion = 2;

  final int version;
  final Map<String, dynamic> run;
  final Map<String, dynamic> meta;

  SaveSnapshot({
    this.version = currentVersion,
    required Map<String, dynamic> run,
    required Map<String, dynamic> meta,
  }) : run = _canonicalMap(run),
       meta = _canonicalMap(meta) {
    if (version != currentVersion) {
      throw ArgumentError.value(version, 'version', 'unsupported save version');
    }
  }

  Map<String, dynamic> toJson() => {
    'version': version,
    'run': run,
    'meta': meta,
  };

  static SaveSnapshot fromJson(Map<String, dynamic> json) {
    final version = json['version'];
    if (version is! int ||
        (version != legacyVersion && version != currentVersion)) {
      throw FormatException('unsupported save version $version');
    }
    final run = json['run'];
    final meta = json['meta'];
    if (run is! Map || meta is! Map) {
      throw const FormatException('save run and meta must be objects');
    }
    return SaveSnapshot(
      version: currentVersion,
      run: Map<String, dynamic>.from(run),
      meta: Map<String, dynamic>.from(meta),
    );
  }
}

class SaveCodec {
  const SaveCodec();

  String encode(SaveSnapshot snapshot) => jsonEncode(snapshot.toJson());

  SaveSnapshot decode(String source) {
    final value = jsonDecode(source);
    if (value is! Map) {
      throw const FormatException('save root must be an object');
    }
    return SaveSnapshot.fromJson(Map<String, dynamic>.from(value));
  }
}

Map<String, dynamic> _canonicalMap(Map<String, dynamic> value) {
  final keys = value.keys.toList()..sort();
  return Map.unmodifiable({
    for (final key in keys) key: _canonicalValue(value[key]),
  });
}

dynamic _canonicalValue(dynamic value) {
  if (value is Map) {
    final converted = <String, dynamic>{};
    for (final entry in value.entries) {
      if (entry.key is! String) {
        throw const FormatException('save map keys must be strings');
      }
      converted[entry.key as String] = entry.value;
    }
    return _canonicalMap(converted);
  }
  if (value is List) {
    return List.unmodifiable(value.map(_canonicalValue));
  }
  if (value == null || value is bool || value is String) {
    return value;
  }
  if (value is num) {
    if (!value.isFinite) {
      throw const FormatException('save contains a non-finite number');
    }
    return value;
  }
  throw FormatException('save contains unsupported value ${value.runtimeType}');
}
