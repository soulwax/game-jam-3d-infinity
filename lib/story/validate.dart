library;

import 'schema.dart'
    show
        StoryText,
        TextError,
        maxLineLength,
        maxDriftDiff,
        broadcastParts,
        vocabularyFields,
        minVocabularyValues,
        maxVocabularyValues,
        maxUnverifiablesPerDay,
        maxVisitorArrivalsPerDay,
        requiredDocuments;

void validateStory(StoryText s) {
  _validateBroadcasts(s);
  _validateVisitorArrivals(s);
  _validateVisitorAmbient(s);
  _validateVisitorTierShape(s);
  _validateStreetAndUnverifiables(s);
  _validateVocabulary(s);
  _validateVisitorClaims(s);
  _validateDocuments(s);
  _validateNights(s);
  _validateEndings(s);
  _validateRecords(s);
}

/// §56.1: a third tier namespace beside `full`/`compressed`. Each namespace
/// must be contiguous from 1, `off` is legal only on days 1-14, and only
/// alongside a `full` tier authored the same day.
final RegExp _tierKeyPattern = RegExp(r'^(full|compressed|off)\.([1-9]\d*)$');

void _validateVisitorTierShape(StoryText s) {
  for (final visitorEntry in s.visitors.entries) {
    for (final dayEntry in visitorEntry.value.entries) {
      final day = dayEntry.key;
      final ordinalsByNamespace = <String, List<int>>{};
      for (final tierKey in dayEntry.value.keys) {
        final match = _tierKeyPattern.firstMatch(tierKey);
        if (match == null) {
          throw TextError(
            '${visitorEntry.key} day $day has malformed tier key "$tierKey"',
          );
        }
        ordinalsByNamespace
            .putIfAbsent(match.group(1)!, () => [])
            .add(int.parse(match.group(2)!));
      }
      for (final namespaceEntry in ordinalsByNamespace.entries) {
        final ordinals = namespaceEntry.value..sort();
        for (var i = 0; i < ordinals.length; i++) {
          if (ordinals[i] != i + 1) {
            throw TextError(
              '${visitorEntry.key} day $day has a non-contiguous '
              '${namespaceEntry.key} tier',
            );
          }
        }
      }
      if (ordinalsByNamespace.containsKey('off')) {
        if (day > 14) {
          throw TextError(
            '${visitorEntry.key} day $day has an off tier past day 14',
          );
        }
        if (!ordinalsByNamespace.containsKey('full')) {
          throw TextError(
            '${visitorEntry.key} day $day has an off tier without a full '
            'tier',
          );
        }
      }
    }
  }
}

void _validateVisitorClaims(StoryText s) {
  for (final entry in s.claims.entries) {
    if (!entry.key.startsWith('visitor:')) {
      throw TextError('@claim on non-visitor line "${entry.key}"');
    }
    for (final claim in entry.value) {
      final values = s.vocabulary[claim.field];
      if (values == null || !values.contains(claim.value)) {
        throw TextError(
          '@claim on "${entry.key}" has ${claim.field}="${claim.value}", '
          'not in @vocab ${claim.field}',
        );
      }
    }
  }
}

void _validateVisitorAmbient(StoryText s) {
  for (final visitorEntry in s.visitorAmbient.entries) {
    final days = s.visitors[visitorEntry.key];
    for (final event in visitorEntry.value.entries) {
      final dialogue = days?[event.key];
      if (dialogue == null || !dialogue.containsKey(event.value.lineKey)) {
        throw TextError(
          '@ambient for ${visitorEntry.key} day ${event.key} needs '
          'existing ${event.value.lineKey} dialogue',
        );
      }
      if (s.visitorArrivals[visitorEntry.key]?.containsKey(event.key) ??
          false) {
        throw TextError(
          '@ambient for ${visitorEntry.key} day ${event.key} cannot also arrive',
        );
      }
    }
  }
}

void _validateVisitorArrivals(StoryText s) {
  for (final visitorEntry in s.visitorArrivals.entries) {
    final authoredDays = s.visitors[visitorEntry.key];
    for (final day in visitorEntry.value.keys) {
      if (authoredDays == null || !authoredDays.containsKey(day)) {
        throw TextError(
          '@arrival for ${visitorEntry.key} day $day has no visitor dialogue',
        );
      }
    }
  }
  validateVisitorArrivalSchedule(s);
}

/// Keeps the playable arrival cadence legible and rejects ambiguous slots.
void validateVisitorArrivalSchedule(StoryText s) {
  final byDay = <int, List<(String, int, int)>>{};
  for (final visitorEntry in s.visitorArrivals.entries) {
    for (final arrival in visitorEntry.value.entries) {
      byDay.putIfAbsent(arrival.key, () => []).add((
        visitorEntry.key,
        arrival.value.hour,
        arrival.value.order,
      ));
    }
  }
  for (final entry in byDay.entries) {
    if (entry.value.length > maxVisitorArrivalsPerDay) {
      throw TextError(
        'Day ${entry.key} has ${entry.value.length} arrivals, max '
        '$maxVisitorArrivalsPerDay',
      );
    }
    final slots = <String>{};
    for (final (_, hour, order) in entry.value) {
      if (!slots.add('$hour:$order')) {
        throw TextError(
          'Day ${entry.key} has duplicate arrival slot $hour:$order',
        );
      }
    }
  }
}

void _validateBroadcasts(StoryText s) {
  for (var day = 1; day <= 21; day++) {
    final parts = s.broadcasts[day];
    if (parts == null) throw TextError('Missing day $day in broadcasts');
    for (final p in broadcastParts) {
      if (!parts.containsKey(p)) throw TextError('Day $day missing @part $p');
    }
    if (parts.length != broadcastParts.length) {
      final extra = parts.keys.where((k) => !broadcastParts.contains(k));
      throw TextError('Day $day has unknown parts: ${extra.join(", ")}');
    }
  }
}

void _validateStreetAndUnverifiables(StoryText s) {
  for (var day = 1; day <= 21; day++) {
    if (!s.street.containsKey(day)) throw TextError('Missing @street $day');
    if (s.street[day]!.isEmpty) throw TextError('@street $day has no layers');
    final u = s.unverifiables[day]?.length ?? 0;
    if (u > maxUnverifiablesPerDay) {
      throw TextError(
        'Day $day has $u unverifiables, max $maxUnverifiablesPerDay',
      );
    }
  }
}

void _validateVocabulary(StoryText s) {
  for (final field in vocabularyFields) {
    final values = s.vocabulary[field];
    if (values == null) throw TextError('Missing @vocab $field');
    if (values.length < minVocabularyValues ||
        values.length > maxVocabularyValues) {
      throw TextError(
        '@vocab $field has ${values.length} values, needs '
        '$minVocabularyValues-$maxVocabularyValues',
      );
    }
  }
  final unknown = s.vocabulary.keys.where((k) => !vocabularyFields.contains(k));
  if (unknown.isNotEmpty) {
    throw TextError('Unknown @vocab fields: ${unknown.join(", ")}');
  }
}

void _validateDocuments(StoryText s) {
  for (final id in requiredDocuments) {
    if (!s.documents.containsKey(id)) throw TextError('Missing @doc $id');
    if (s.documents[id]!.isEmpty) throw TextError('@doc $id is empty');
  }
}

void _validateNights(StoryText s) {
  for (var day = 1; day <= 21; day++) {
    if (!s.nights.containsKey(day)) throw TextError('Missing @night $day');
    if (s.nights[day]!.isEmpty) throw TextError('@night $day is empty');
  }
}

void _validateEndings(StoryText s) {
  const requiredEndings = ['compliance', 'rupture', 'synchronisation'];
  for (final id in requiredEndings) {
    if (!s.endings.containsKey(id)) throw TextError('Missing @ending $id');
    if (s.endings[id]!.isEmpty) throw TextError('@ending $id is empty');
  }
}

void _validateRecords(StoryText s) {
  const requiredRecords = ['compliance-card', 'ration-book'];
  for (final id in requiredRecords) {
    if (!s.records.containsKey(id)) throw TextError('Missing @record $id');
    if (s.records[id]!.isEmpty) throw TextError('@record $id is empty');
  }
}

void checkLine(String line, String at) {
  if (line.length > maxLineLength) {
    throw TextError('Line is ${line.length} chars, max $maxLineLength, at $at');
  }
  for (final m in RegExp(r'\{([^{}]*)\}').allMatches(line)) {
    final parts = m.group(1)!.split('|');
    if (parts.length != 2) {
      throw TextError(
        'A drift span needs exactly two alternatives at $at: ${m.group(0)}',
      );
    }
    final diff = (parts[0].length - parts[1].length).abs();
    if (diff > maxDriftDiff) {
      throw TextError(
        'Drift span differs by $diff chars, max $maxDriftDiff, '
        'at $at: "${parts[0]}" vs "${parts[1]}"',
      );
    }
  }
}
