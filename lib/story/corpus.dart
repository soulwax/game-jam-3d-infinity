import 'dart:convert' show jsonDecode;

const List<String> textCorpusSections = [
  'broadcasts',
  'visitors',
  'vocabulary',
  'documents',
  'street',
  'unverifiables',
  'nights',
  'endings',
  'records',
  'cues',
  'claims',
];

/// Converts dynamic JSON maps into the runtime's stable string-keyed boundary.
///
/// `jsonDecode` may return implementation-specific generic map types on the web.
/// No browser-facing code should depend on those erased generic arguments.
Map<String, Map<String, dynamic>> decodeTextCorpus(String source) {
  final raw = jsonDecode(source);
  if (raw is! Map) {
    throw const FormatException('text.json root must be an object');
  }
  final root = Map<String, dynamic>.from(raw);
  final result = <String, Map<String, dynamic>>{};
  for (final section in textCorpusSections) {
    final value = root[section];
    if (value == null) {
      result[section] = <String, dynamic>{};
    } else if (value is Map) {
      result[section] = Map<String, dynamic>.from(value);
    } else {
      throw FormatException('text.json section "$section" must be an object');
    }
  }
  return result;
}
