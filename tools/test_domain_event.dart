import 'dart:convert';

import 'package:quarantine/game/domain_event.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void _reject(Object? raw, String message) {
  var rejected = false;
  try {
    DomainEvent.fromJson(raw);
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, message);
}

Map<String, dynamic> _event({Object? position = const [1, 2, 3]}) => {
  'selectionSeed': 19,
  'position': position,
  'roomId': 'hall',
  'sequence': 7,
  'kind': 'door.opened',
};

void main() {
  final first = DomainEvent.fromJson(_event());
  final second = DomainEvent.fromJson({
    'kind': 'door.opened',
    'sequence': 7,
    'roomId': 'hall',
    'position': [1.0, 2.0, 3.0],
    'selectionSeed': 19,
  });
  _expect(first.encode() == second.encode(), 'event ordering is canonical');
  _expect(jsonDecode(first.encode()) is Map<String, dynamic>, 'valid JSON');
  _expect(
    first.position != null && first.position![1] == 2,
    'position round trip',
  );

  var immutable = false;
  try {
    first.position![0] = 9;
  } catch (error) {
    immutable = error is UnsupportedError;
  }
  _expect(immutable, 'event position is immutable');
  _expect(
    DomainEvent.fromJson(jsonDecode(first.encode())).encode() == first.encode(),
    'event JSON round trip is byte-identical',
  );

  _reject({..._event(), 'sequence': -1}, 'negative sequence rejects');
  _reject({
    ..._event(),
    'position': [1, 2],
  }, 'wrong position shape rejects');
  _reject({
    ..._event(),
    'position': [1, double.nan, 3],
  }, 'non-finite position rejects');
  _reject({..._event(), 'timer': 1}, 'unknown fields reject');
  _reject({..._event()}..remove('kind'), 'missing fields reject');
  _reject({..._event(), 'selectionSeed': () {}}, 'runtime values reject');
  print('domain event: canonical immutable event boundary passes');
}
