import 'dart:convert';

import 'package:quarantine/game/save.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void _reject(Object value, String message) {
  var rejected = false;
  try {
    SaveCodec().decode(value as String);
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, message);
}

void main() {
  const codec = SaveCodec();
  const v1 = '{"version":1,"run":{"z":2,"a":1},"meta":{"legacy":true}}';
  final migrated = codec.decode(v1);
  _expect(migrated.version == SaveSnapshot.currentVersion, 'v1 migrates to v2');
  _expect(
    codec.encode(migrated) ==
        '{"version":2,"run":{"a":1,"z":2},"meta":{"legacy":true}}',
    'migration emits canonical v2 bytes',
  );
  _expect(
    codec.encode(codec.decode(codec.encode(migrated))) ==
        codec.encode(migrated),
    'v2 encode/decode is idempotent',
  );

  _reject('{"version":3,"run":{},"meta":{}}', 'future version rejects');
  _reject(
    '{"version":2,"run":{"bad":NaN},"meta":{}}',
    'non-finite JSON rejects',
  );

  var runtimeRejected = false;
  try {
    codec.encode(
      SaveSnapshot(run: {'bad': DateTime.utc(2026)}, meta: const {}),
    );
  } on FormatException {
    runtimeRejected = true;
  }
  _expect(runtimeRejected, 'runtime handles reject during encoding');

  var nonFiniteRejected = false;
  try {
    codec.encode(SaveSnapshot(run: {'bad': double.nan}, meta: const {}));
  } on FormatException {
    nonFiniteRejected = true;
  }
  _expect(nonFiniteRejected, 'non-finite values reject during encoding');

  _expect(
    jsonDecode(codec.encode(migrated)) is Map<String, dynamic>,
    'encoded v2 remains valid JSON',
  );
  print(
    'save v2 codec: migration, canonicalization, and fail-closed checks pass',
  );
}
