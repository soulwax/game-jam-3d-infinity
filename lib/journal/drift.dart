import 'dart:math';

import '../config.dart';
import '../story/schema.dart';
import 'entry.dart';
import 'journal.dart';

extension DriftEngine on Journal {
  void driftNight(
    int day, {
    List<int> verifiedToday = const [],
    int extraDrifts = 0,
    int runSeed = 0,
  }) {
    final extra = extraDrifts < 0
        ? 0
        : (extraDrifts > maxScrutinyExtraDrifts
              ? maxScrutinyExtraDrifts
              : extraDrifts);
    final verifiedSet = verifiedToday.toSet();
    final rng = Random(_seedFor(day, runSeed));

    switch (day) {
      case 1:
        return;
      case 2:
        _applyDrifts(rng, 2, verifiedSet, driftCountDay2 + extra, {'time'});
      case 3:
        _applyDrifts(rng, 3, verifiedSet, driftCountDay3 + extra, {'place'});
      case 4:
        _applyDrifts(rng, 4, verifiedSet, driftCountDay4 + extra, null);
        if (insertionOnDay4) _insertEntry(rng, 4);
      case 5:
        _applyDrifts(rng, 5, verifiedSet, extra, null);
        if (contradictionOnDay5) _createContradiction(rng, 5);
      case 6:
        _applyDrifts(rng, 6, verifiedSet, extra, null);
        if (deletionOnDay6) _deleteEntry(rng);
        _overrideLock(rng, 6);
      case 7:
        _insertFutureEntry(rng, 7);
      default:
        if (extra > 0) {
          _applyDrifts(rng, day, verifiedSet, extra, null);
        }
    }
  }

  bool _canDrift(Entry entry, int nightOfDay, Set<int> verified) {
    if (entry.lastReadDay == nightOfDay) return false;

    if (entry.corroborator != null && entry.locked) return false;
    if (entry.corroborator != null && verified.contains(entry.ordinal)) {
      return false;
    }

    if (_isDecisiveFor(entry, nightOfDay)) return false;

    return true;
  }

  void _applyDrifts(
    Random rng,
    int day,
    Set<int> verified,
    int count,
    Set<String>? fieldFilter,
  ) {
    final candidates = [
      for (final entry in entries)
        if (_canDrift(entry, day, verified)) entry,
    ];

    if (candidates.isEmpty) return;

    candidates.shuffle(rng);
    final limit = count < candidates.length ? count : candidates.length;
    for (int i = 0; i < limit; i++) {
      _driftEntry(rng, candidates[i], fieldFilter);
    }
  }

  void _driftEntry(Random rng, Entry entry, Set<String>? fieldFilter) {
    final fields = Map<String, String>.from(entry.current.fields);
    final validFields = fieldFilter == null
        ? vocabularyFields.toList()
        : vocabularyFields.where((f) => fieldFilter.contains(f)).toList();

    if (validFields.isEmpty) return;

    final field = validFields[rng.nextInt(validFields.length)];
    final currentValue = fields[field] ?? '';
    final siblings = vocabulary.siblings(field, currentValue);

    if (siblings.isEmpty) {
      fields[field] = currentValue;
    } else {
      fields[field] = siblings[rng.nextInt(siblings.length)];
    }

    correct(entry.ordinal, fields, entry.current.shakiness);
  }

  void _insertEntry(Random rng, int day) {
    final fields = _generateInsertionFields(rng, day);
    if (!composes(fields)) return;

    insert(day, fields, corroborator: null);
  }

  Map<String, String> _generateInsertionFields(Random rng, int day) {
    final fields = <String, String>{};

    for (final field in vocabularyFields) {
      final values = vocabulary[field];
      if (values.isEmpty) {
        fields[field] = '';
      } else {
        fields[field] = values[rng.nextInt(values.length)];
      }
    }

    return fields;
  }

  void _createContradiction(Random rng, int day) {
    final candidates = [
      for (final entry in entries)
        if (entry.day < day && !entry.locked) entry,
    ];

    if (candidates.length < 2) return;

    candidates.shuffle(rng);
    final e1 = candidates[0];
    final e2 = candidates[1];

    final f1 = Map<String, String>.from(e1.current.fields);
    final f2 = Map<String, String>.from(e2.current.fields);

    for (final field in vocabularyFields) {
      final siblings = vocabulary.siblings(field, f1[field] ?? '');
      if (siblings.isNotEmpty) {
        f1[field] = siblings[rng.nextInt(siblings.length)];
      }
    }

    correct(e1.ordinal, f1, e1.current.shakiness);
    correct(e2.ordinal, f2, e2.current.shakiness);
  }

  void _deleteEntry(Random rng) {
    final candidates = [for (final entry in entries) entry];
    if (candidates.isEmpty) return;

    final toDelete = candidates[rng.nextInt(candidates.length)];
    tearOut(toDelete.ordinal);
  }

  void _overrideLock(Random rng, int day) {
    final lockedCandidates = [
      for (final entry in entries)
        if (entry.locked) entry,
    ];

    if (lockedCandidates.isEmpty) return;

    final target = lockedCandidates[rng.nextInt(lockedCandidates.length)];
    _driftEntry(rng, target, null);
  }

  void _insertFutureEntry(Random rng, int day) {
    final futureDay = day + 1;
    final fields = _generateInsertionFields(rng, futureDay);
    if (!composes(fields)) return;

    insert(futureDay, fields, corroborator: null);
  }

  bool _isDecisiveFor(Entry entry, int nightOfDay) {
    if (nightOfDay == 7) {
      return entry.day >= 1 &&
          entry.day <= 6 &&
          entry.current.hand == Hand.player;
    }
    if (nightOfDay == 14) {
      return entry.day >= 1 &&
          entry.day <= 13 &&
          entry.current.hand == Hand.player;
    }
    if (nightOfDay == 21) {
      return entry.locked;
    }
    return false;
  }

  int _seedFor(int day, int runSeed) => runSeed ^ (31337 + day * 7919);
}
