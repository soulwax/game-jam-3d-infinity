import '../config.dart';
import '../story/schema.dart';
import 'entry.dart';

class Journal {
  final Vocabulary vocabulary;
  final Map<int, Entry> _entries = {};
  final Set<String> _tags = {};
  final List<int> _verifiedToday = [];

  int _nextOrdinal = 1;
  int locksRemaining = journalLockSupply;

  Journal(this.vocabulary);

  Iterable<Entry> get entries => _entries.values;

  List<int> get ordinals => _entries.keys.toList();

  Set<String> get unlockedTags => Set.unmodifiable(_tags);

  Entry? operator [](int ordinal) => _entries[ordinal];

  bool composes(Map<String, String> fields) =>
      fields.length == vocabularyFields.length &&
      vocabularyFields.every((f) => vocabulary.holds(f, fields[f] ?? ''));

  List<String> siblings(String field, String value) =>
      vocabulary.siblings(field, value);

  Entry? write(
    int day,
    Map<String, String> fields,
    double shakiness, {
    String? corroborator,
  }) => _append(day, fields, shakiness, Hand.player, corroborator);

  Entry? insert(int day, Map<String, String> fields, {String? corroborator}) =>
      _append(day, fields, journalSteadyHand, Hand.inserted, corroborator);

  Entry? _append(
    int day,
    Map<String, String> fields,
    double shakiness,
    Hand hand,
    String? corroborator,
  ) {
    if (!composes(fields)) return null;
    final entry = Entry(
      ordinal: _nextOrdinal++,
      day: day,
      revisions: [Line(fields, shakiness, hand)],
      corroborator: corroborator,
    );
    _entries[entry.ordinal] = entry;
    return entry;
  }

  bool correct(int ordinal, Map<String, String> fields, double shakiness) {
    final entry = _entries[ordinal];
    if (entry == null || !composes(fields)) return false;
    entry.revisions.add(Line(fields, shakiness, Hand.player));
    return true;
  }

  bool annotate(int ordinal, Map<String, String> fields) {
    final entry = _entries[ordinal];
    if (entry == null || entry.margin != null || !composes(fields)) {
      return false;
    }
    entry.margin = Line(fields, journalSteadyHand, Hand.warden);
    return true;
  }

  bool addWardenAnnotation(int ordinal, Map<String, String> correction) {
    final entry = _entries[ordinal];
    if (entry == null || entry.margin != null) return false;
    if (!composes(correction)) return false;
    entry.margin = Line(correction, journalSteadyHand, Hand.warden);
    return true;
  }

  bool lock(int ordinal) {
    final entry = _entries[ordinal];
    if (entry == null || entry.locked || locksRemaining <= 0) return false;
    entry.locked = true;
    locksRemaining--;
    return true;
  }

  void read(int ordinal, int day) => _entries[ordinal]?.lastReadDay = day;

  bool tearOut(int ordinal) => _entries.remove(ordinal) != null;

  void unlock(String tag) => _tags.add(tag);

  void setVerifiedToday(List<int> ordinals) {
    _verifiedToday.clear();
    for (final ordinal in ordinals) {
      if (_entries.containsKey(ordinal) && !_verifiedToday.contains(ordinal)) {
        _verifiedToday.add(ordinal);
      }
    }
  }

  /// Records one explicit consultation without discarding earlier citations.
  bool verifyToday(int ordinal) {
    if (!_entries.containsKey(ordinal)) return false;
    if (!_verifiedToday.contains(ordinal)) {
      _verifiedToday.add(ordinal);
    }
    return true;
  }

  List<int> getVerifiedToday() => List.unmodifiable(_verifiedToday);

  Map<String, dynamic> toJson() => {
    'nextOrdinal': _nextOrdinal,
    'locksRemaining': locksRemaining,
    'tags': _tags.toList()..sort(),
    'entries': [for (final entry in _entries.values) entry.toJson()],
  };

  static Journal fromJson(Vocabulary vocabulary, Map<String, dynamic> json) {
    final journal = Journal(vocabulary);
    journal._nextOrdinal = json['nextOrdinal'] as int;
    journal.locksRemaining = json['locksRemaining'] as int;
    journal._tags.addAll((json['tags'] as List).cast<String>());
    for (final raw in json['entries'] as List) {
      final entry = Entry.fromJson(raw as Map<String, dynamic>);
      journal._entries[entry.ordinal] = entry;
    }
    return journal;
  }
}
