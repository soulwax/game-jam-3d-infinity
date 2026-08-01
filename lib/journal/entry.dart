import '../story/schema.dart';

enum Hand { player, inserted, warden }

class Vocabulary {
  final Map<String, List<String>> _values;

  Vocabulary(Map<String, List<String>> values)
      : _values = {
          for (final field in vocabularyFields)
            field: List.unmodifiable(values[field] ?? const <String>[]),
        };

  factory Vocabulary.loaded(List<String> Function(String field) source) {
    final values = {for (final field in vocabularyFields) field: source(field)};
    if (values.values.every((v) => v.isEmpty)) {
      throw TextError(
        'Journal vocabulary is empty. TextLibrary.load() must complete '
        'before a Journal is constructed.',
      );
    }
    return Vocabulary(values);
  }

  List<String> operator [](String field) => _values[field] ?? const [];

  bool holds(String field, String value) => this[field].contains(value);

  List<String> siblings(String field, String value) =>
      [for (final v in this[field]) if (v != value) v];
}

class Line {
  final Map<String, String> fields;
  final double shakiness;
  final Hand hand;

  Line(Map<String, String> fields, this.shakiness, this.hand)
      : fields = Map.unmodifiable({
          for (final field in vocabularyFields) field: fields[field] ?? '',
        });

  Map<String, dynamic> toJson() => {
        'fields': {for (final field in vocabularyFields) field: fields[field]},
        'shakiness': shakiness,
        'hand': hand.name,
      };

  static Line fromJson(Map<String, dynamic> json) => Line(
        (json['fields'] as Map<String, dynamic>)
            .map((k, v) => MapEntry(k, v as String)),
        (json['shakiness'] as num).toDouble(),
        Hand.values.byName(json['hand'] as String),
      );

  @override
  String toString() =>
      vocabularyFields.map((field) => fields[field]).join(' · ');
}

class Entry {
  final int ordinal;
  final int day;
  final List<Line> revisions;
  final String? corroborator;
  bool locked;
  int? lastReadDay;
  Line? margin;

  Entry({
    required this.ordinal,
    required this.day,
    required this.revisions,
    this.corroborator,
    this.locked = false,
    this.lastReadDay,
    this.margin,
  });

  Line get current => revisions.last;

  Line get original => revisions.first;

  bool get corrected => revisions.length > 1;

  Map<String, dynamic> toJson() => {
        'ordinal': ordinal,
        'day': day,
        'revisions': [for (final line in revisions) line.toJson()],
        'corroborator': corroborator,
        'locked': locked,
        'lastReadDay': lastReadDay,
        'margin': margin?.toJson(),
      };

  static Entry fromJson(Map<String, dynamic> json) {
    final margin = json['margin'];
    return Entry(
      ordinal: json['ordinal'] as int,
      day: json['day'] as int,
      revisions: [
        for (final line in json['revisions'] as List)
          Line.fromJson(line as Map<String, dynamic>),
      ],
      corroborator: json['corroborator'] as String?,
      locked: json['locked'] as bool,
      lastReadDay: json['lastReadDay'] as int?,
      margin: margin == null
          ? null
          : Line.fromJson(margin as Map<String, dynamic>),
    );
  }
}
