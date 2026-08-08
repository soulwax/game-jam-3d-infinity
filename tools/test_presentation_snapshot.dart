import 'dart:convert';

import 'package:quarantine/game/presentation_snapshot.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void _reject(Object? value, String message) {
  var rejected = false;
  try {
    PresentationSnapshot(values: {'value': value});
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, message);
}

void main() {
  final a = PresentationSnapshot(
    values: {
      'roomId': 'hall',
      'weights': {'rain': 0.25, 'gas': 1},
      'visible': ['door', 'mantle'],
    },
  );
  final b = PresentationSnapshot(
    values: {
      'visible': ['door', 'mantle'],
      'weights': {'gas': 1, 'rain': 0.25},
      'roomId': 'hall',
    },
  );
  _expect(a.encode() == b.encode(), 'presentation ordering is canonical');
  _expect(jsonDecode(a.encode()) is Map<String, dynamic>, 'valid JSON');

  var immutable = false;
  try {
    (a.values['visible'] as List<dynamic>)[0] = 'window';
  } catch (error) {
    immutable = error is UnsupportedError;
  }
  _expect(immutable, 'nested presentation values are immutable');

  _reject(double.nan, 'non-finite values reject');
  _reject(DateTime.utc(2026), 'runtime objects reject');
  _reject(() {}, 'closures reject');
  _reject({1: 'not-an-id'}, 'non-string keys reject');
  _expect(
    PresentationSnapshot.fromJson(jsonDecode(a.encode())).encode() ==
        a.encode(),
    'JSON round trip is byte-identical',
  );
  print('presentation snapshot: immutable renderer boundary passes');
}
