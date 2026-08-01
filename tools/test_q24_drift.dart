import 'package:quarantine/config.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/house/drift.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/sim/day.dart';

Never _fail(String message) =>
    throw StateError('q24 drift test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

const _schedule = [
  HouseDriftChange(day: 15, roomId: 'kitchen', sizeXDelta: -0.3),
  HouseDriftChange(day: 19, roomId: 'spare-room', sizeYDelta: 0.3),
];

void main() {
  final beforeDue = HouseDrift(schedule: _schedule);
  beforeDue.considerNight(14, sleptInRoom: 'bedroom');
  _expect(
    beforeDue.landedCount == 0,
    'a change must not land before its scheduled day',
  );

  final blockedByRoom = HouseDrift(schedule: _schedule);
  blockedByRoom.considerNight(15, sleptInRoom: 'kitchen');
  _expect(
    blockedByRoom.landedCount == 0,
    'a change must not land in the room the player slept in',
  );
  blockedByRoom.considerNight(16, sleptInRoom: 'bedroom');
  _expect(
    blockedByRoom.landedCount == 1,
    'a blocked change must retry and land on a later, unblocked night',
  );

  final oneAtATime = HouseDrift(schedule: _schedule);
  oneAtATime.considerNight(25, sleptInRoom: 'hall');
  _expect(
    oneAtATime.landedCount == 1,
    'even when every scheduled day is already due, only one change may '
    'land per night',
  );
  oneAtATime.considerNight(25, sleptInRoom: 'hall');
  _expect(
    oneAtATime.landedCount == 2,
    'the second change lands on the following eligible night',
  );
  _expect(
    oneAtATime.isComplete,
    'once every scheduled change has landed the drift is complete',
  );

  final persists = HouseDrift(schedule: _schedule);
  persists.considerNight(15, sleptInRoom: 'hall');
  _expect(
    persists.sizeXDelta('kitchen') == -0.3,
    'a landed change must be reflected immediately',
  );
  persists.considerNight(16, sleptInRoom: 'kitchen');
  persists.considerNight(17, sleptInRoom: 'kitchen');
  _expect(
    persists.sizeXDelta('kitchen') == -0.3,
    'a landed change must persist for the rest of the run, not reset '
    'or reapply on later nights',
  );

  final untouchedRoom = HouseDrift(schedule: _schedule);
  untouchedRoom.considerNight(25, sleptInRoom: 'hall');
  untouchedRoom.considerNight(25, sleptInRoom: 'hall');
  _expect(
    untouchedRoom.sizeXDelta('living-room') == 0.0 &&
        untouchedRoom.sizeYDelta('living-room') == 0.0,
    'a room with no scheduled change must never drift',
  );

  final house = House(42);
  final kitchen = house.byId('kitchen')!;
  final spareRoom = house.byId('spare-room')!;
  final originalKitchenSize = kitchen.size;
  final originalSpareSize = spareRoom.size;
  _expect(
    house.effectiveSize(kitchen).x == originalKitchenSize.x,
    'effectiveSize must equal the authored size before any drift lands',
  );
  house.drift.considerNight(15, sleptInRoom: 'hall');
  _expect(
    house.effectiveSize(kitchen).x == originalKitchenSize.x - 0.3,
    'effectiveSize must reflect a landed kitchen-width change',
  );
  _expect(
    kitchen.size.x == originalKitchenSize.x,
    'the authored Room.size must never be mutated by drift — the plan '
    'stays the truth of what the house was',
  );
  house.drift.considerNight(19, sleptInRoom: 'hall');
  _expect(
    house.effectiveSize(spareRoom).y == originalSpareSize.y + 0.3,
    'effectiveSize must reflect a landed spare-room ceiling change',
  );

  for (final change in houseDriftSchedule) {
    _expect(
      change.sizeXDelta.abs() <= houseDriftMaxMagnitude &&
          change.sizeYDelta.abs() <= houseDriftMaxMagnitude,
      'every authored change must stay within houseDriftMaxMagnitude '
      '(no wall may move three metres)',
    );
  }

  final vocabulary = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['yesterday'],
    'place': ['hall'],
    'time': ['dawn'],
  });
  final session = GameSession.create(
    vocabulary: vocabulary,
    houseSeed: 42,
    startDay: 15,
  );
  session.sleep(SleepQuality.long, SleepLocation.bed, currentRoom: 'hall');
  _expect(
    session.house.drift.landedCount == 1,
    'sleeping away from the scheduled room on the scheduled day must '
    'land the change through GameSession.sleep',
  );
  final kitchenDeltaBeforeSave = session.house.effectiveSize(
    session.house.byId('kitchen')!,
  ).x;

  final restored = GameSession.restore(
    vocabulary: vocabulary,
    snapshot: session.toSaveSnapshot(),
  );
  _expect(
    restored.house.drift.landedCount == session.house.drift.landedCount,
    'a landed drift change must survive a save/restore round trip',
  );
  _expect(
    restored.house.effectiveSize(restored.house.byId('kitchen')!).x ==
        kitchenDeltaBeforeSave,
    'the restored house must apply the same effective geometry as before '
    'the save',
  );

  print('q24 house drift rule engine and House integration tests passed');
}
