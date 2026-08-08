import 'dart:convert';

import 'package:quarantine/sim/mantle_history.dart';

Never _fail(String message) =>
    throw StateError('mantle history test failed: $message');
void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void _reject(Object? value, String message) {
  try {
    MantleHistoryState.fromJson(value);
  } on FormatException {
    return;
  }
  _fail(message);
}

void main() {
  var state = MantleHistoryState(const []);
  final first = state.light('mantle-hall');
  state = first.state;
  final second = state.light('mantle-living');
  state = second.state;
  final duplicate = state.light('mantle-hall');

  _expect(first.event.kind == 'mantle.firstLit', 'first light emits an event');
  _expect(
    duplicate.state.firstLitMantleIds.join(',') == 'mantle-hall,mantle-living',
    'duplicate lighting is idempotent',
  );
  _expect(
    duplicate.event.kind == 'mantle.alreadyRecorded',
    'duplicate is reported',
  );

  final restored = MantleHistoryState.fromJson(
    jsonDecode(jsonEncode(state.toJson())),
  );
  _expect(
    restored.firstLitMantleIds.join(',') == 'mantle-hall,mantle-living',
    'save and restore preserve append order',
  );
  _reject({
    'firstLitMantleIds': ['mantle-hall', 'mantle-hall'],
  }, 'duplicates reject');
  _reject({
    'firstLitMantleIds': [3],
  }, 'non-string IDs reject');
  _reject({'firstLitMantleIds': [], 'extra': false}, 'unknown fields reject');
  print('mantle history: append-only, idempotent, canonical save/restore pass');
}
