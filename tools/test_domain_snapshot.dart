import 'dart:convert';

import 'package:quarantine/game/domain_snapshot.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void _reject(Object? value, String message) {
  var rejected = false;
  try {
    DomainSnapshot.fromJson(value);
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, message);
}

Map<String, dynamic> _sections({Map<String, dynamic>? calendar}) => {
  'calendar': calendar ?? {'hour': 8, 'day': 2},
  'economy': {'gas': 4, 'hours': 9},
  'journal': {'entries': ['door', 'rain']},
  'house': {'seed': 77, 'overrides': <String>[]},
  'content': {'delivered': ['broadcast-day-02']},
  'features': {'difficulty': 'normal'},
  'secondRun': {'carryover': null},
};

void main() {
  final a = DomainSnapshot.fromJson(_sections());
  final b = DomainSnapshot.fromJson({
    'secondRun': {'carryover': null},
    'features': {'difficulty': 'normal'},
    'content': {'delivered': ['broadcast-day-02']},
    'house': {'overrides': <String>[], 'seed': 77},
    'journal': {'entries': ['door', 'rain']},
    'economy': {'hours': 9, 'gas': 4},
    'calendar': {'day': 2, 'hour': 8},
  });
  _expect(a.encode() == b.encode(), 'section and field ordering is canonical');
  _expect(
    jsonDecode(a.encode()) is Map<String, dynamic>,
    'snapshot encoding is valid JSON',
  );

  var immutable = false;
  try {
    a.calendar['day'] = 9;
  } on UnsupportedError {
    immutable = true;
  }
  _expect(immutable, 'snapshot sections are immutable');

  _reject({'calendar': {}}, 'missing sections reject');
  final extra = _sections()..['unexpected'] = {};
  _reject(extra, 'unknown sections reject');
  final nonFinite = _sections(calendar: {'hour': double.nan});
  _reject(nonFinite, 'non-finite values reject');
  final runtime = _sections(calendar: {'now': DateTime.utc(2026)});
  _reject(runtime, 'runtime values reject');
  print('domain snapshot: canonical immutable section boundary passes');
}
