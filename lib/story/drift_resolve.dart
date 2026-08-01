library;

import 'dart:convert';

import 'schema.dart';

/// §57.3 / §37.1: every `{a|b}` drift span is resolved exactly once, at
/// build time, so the same corpus always builds the same bytes and the voice
/// pipeline can speak the words the screen shows. Never `Random`, never the
/// clock — a stable hash of the span's address (broadcast/visitor stem,
/// part, and index within the line) picks the alternative.
final RegExp _spanPattern = RegExp(r'\{([^{}]*)\}');
final RegExp _bracePattern = RegExp(r'[{}]');

Map<String, int> resolveDriftSpans(StoryText story) {
  final choices = <String, int>{};

  for (final dayEntry in story.broadcasts.entries) {
    final stem = 'broadcast-day${dayEntry.key.toString().padLeft(2, '0')}';
    for (final partEntry in dayEntry.value.entries) {
      dayEntry.value[partEntry.key] = _resolveLine(
        partEntry.value,
        '$stem:${partEntry.key}',
        choices,
      );
    }
  }

  for (final visitorEntry in story.visitors.entries) {
    for (final dayEntry in visitorEntry.value.entries) {
      final day = dayEntry.key.toString().padLeft(2, '0');
      for (final tierEntry in dayEntry.value.entries) {
        final tierStem = tierEntry.key.replaceAll('.', '-');
        final stem = '${visitorEntry.key}-day$day-$tierStem';
        dayEntry.value[tierEntry.key] = _resolveLine(
          tierEntry.value,
          '$stem:line',
          choices,
        );
      }
    }
  }

  _forbidSpansOutsideDialogue(story);
  return choices;
}

String _resolveLine(
  String line,
  String addressPrefix,
  Map<String, int> choices,
) {
  var index = 0;
  return line.replaceAllMapped(_spanPattern, (match) {
    final alternatives = match.group(1)!.split('|');
    final address = '$addressPrefix:${index++}';
    final picked = hashAddress(address) % alternatives.length;
    choices[address] = picked;
    return alternatives[picked];
  });
}

int hashAddress(String input) {
  var hash = 0x811c9dc5;
  for (final byte in utf8.encode(input)) {
    hash ^= byte;
    hash = (hash * 0x01000193) & 0xFFFFFFFF;
  }
  return hash;
}

void _forbidSpansOutsideDialogue(StoryText story) {
  void check(String at, String line) {
    if (_bracePattern.hasMatch(line)) {
      throw TextError('A drift span is only allowed in broadcasts or '
          'visitor dialogue, found one at $at');
    }
  }

  for (final entry in story.nights.entries) {
    for (final line in entry.value) {
      check('@night ${entry.key}', line);
    }
  }
  for (final entry in story.unverifiables.entries) {
    for (final line in entry.value) {
      check('@unverifiable ${entry.key}', line);
    }
  }
  for (final entry in story.street.entries) {
    for (final line in entry.value) {
      check('@street ${entry.key}', line);
    }
  }
  for (final entry in story.documents.entries) {
    for (final line in entry.value) {
      check('@doc ${entry.key}', line);
    }
  }
  for (final entry in story.endings.entries) {
    for (final line in entry.value) {
      check('@ending ${entry.key}', line);
    }
  }
  for (final entry in story.records.entries) {
    for (final line in entry.value) {
      check('@record ${entry.key}', line);
    }
  }
}
