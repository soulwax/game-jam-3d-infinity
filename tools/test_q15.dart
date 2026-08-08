import 'package:quarantine/game/save.dart';
import 'package:quarantine/game/save_store.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/game/ending.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/sim/day.dart';
import 'package:quarantine/story/schema.dart' show vocabularyFields;

Never _fail(String message) => throw StateError(message);

class _ToggleCodec extends SaveCodec {
  bool fail = false;

  @override
  String encode(SaveSnapshot snapshot) {
    if (fail) throw const FormatException('synthetic encode failure');
    return super.encode(snapshot);
  }
}

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const codec = SaveCodec();
  final a = SaveSnapshot(
    run: {'hour': 10, 'day': 3},
    meta: {'seedEntry': 'door'},
  );
  final b = SaveSnapshot(
    run: {'day': 3, 'hour': 10},
    meta: {'seedEntry': 'door'},
  );
  _expect(
    codec.encode(a) == codec.encode(b),
    'canonical ordering must be stable',
  );
  _expect(
    codec.decode(codec.encode(a)).run['day'] == 3,
    'round trip keeps run',
  );
  var rejectedFuture = false;
  try {
    codec.decode('{"version":3,"run":{},"meta":{}}');
  } on FormatException {
    rejectedFuture = true;
  }
  _expect(rejectedFuture, 'future versions must fail closed');
  final store = SaveStore();
  store.write(a);
  store.write(SaveSnapshot(run: {'day': 4}, meta: {'seedEntry': 'door'}));
  store.replaceActiveForTest('{bad');
  final recovered = store.read();
  _expect(
    recovered.snapshot?.run['day'] == 3,
    'invalid active falls back to previous',
  );
  _expect(
    recovered.recovery == 'recovered previous save',
    'recovery is explicit',
  );

  final guardedCodec = _ToggleCodec();
  final guardedStore = SaveStore(codec: guardedCodec);
  guardedStore.write(a);
  guardedCodec.fail = true;
  var writeRejected = false;
  try {
    guardedStore.write(b);
  } on FormatException {
    writeRejected = true;
  }
  _expect(writeRejected, 'failed writes are rejected');
  _expect(
    guardedStore.read().snapshot?.run['day'] == 3,
    'failed writes do not rotate the active save',
  );

  final vocabulary = Vocabulary({
    for (final field in vocabularyFields) field: ['$field-value'],
  });
  final session = GameSession.create(
    vocabulary: vocabulary,
    houseSeed: 77,
    startDay: 2,
    startHour: 9,
  );
  session.advance(10);
  session.spendHours(3);
  session.spendGas(2);
  session.house.portalById('hall-living')!.open = false;
  session.house.byId('kitchen')!.windows.first.shutterOpen = false;
  session.house.byId('living-room')!.mantles.first
    ..lit = true
    ..examined = true;
  session.writeJournal({
    for (final field in vocabularyFields) field: '$field-value',
  }, 0.2);
  session.sleep(SleepQuality.short, SleepLocation.chair);
  session.spendHours(1);
  final restored = GameSession.restore(
    vocabulary: vocabulary,
    snapshot: session.toSaveSnapshot(meta: {'slot': 'test'}),
  );
  _expect(
    restored.snapshot.day == session.snapshot.day &&
        restored.snapshot.hour == session.snapshot.hour &&
        restored.snapshot.hoursRemaining == session.snapshot.hoursRemaining &&
        restored.snapshot.gasRemaining == session.snapshot.gasRemaining &&
        restored.snapshot.journalEntryCount ==
            session.snapshot.journalEntryCount,
    'session snapshot round trip preserves clock, resources, and journal',
  );
  _expect(
    restored.time.currentHour == session.time.currentHour,
    'session restore preserves fractional clock time',
  );
  _expect(
    !restored.house.portalById('hall-living')!.open &&
        !restored.house.byId('kitchen')!.windows.first.shutterOpen &&
        restored.house.byId('living-room')!.mantles.first.lit &&
        restored.house.byId('living-room')!.mantles.first.examined,
    'session restore preserves mutable house state',
  );
  _expect(
    restored.toSaveSnapshot(meta: {'slot': 'test'}).meta['slot'] == 'test',
    'session snapshot preserves caller-owned meta',
  );
  final endingMeta = const EndingState(EndingKind.synchronisation).toJson();
  final endingRoundTrip = codec.decode(
    codec.encode(
      SaveSnapshot(run: {'state': 'finished'}, meta: {'ending': endingMeta}),
    ),
  );
  _expect(
    EndingState.tryFromJson(endingRoundTrip.meta['ending'])?.kind ==
        EndingKind.synchronisation,
    'ending state persists through canonical save metadata',
  );
  print('save codec, recovery store, and session round trip pass');
}
