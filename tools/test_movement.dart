import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/house.dart';
import 'house_fixture.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) {
    _fail(message);
  }
}

({Vec3 eye, String room}) _move(
  House house,
  Vec3 start,
  String room,
  Vec3 delta, {
  int frames = 1,
}) {
  final capsule = Capsule(
    base: start - Vec3(0, 1.35, 0),
    tip: start - Vec3(0, 0.15, 0),
  );
  var eye = start;
  var currentRoom = room;
  for (var frame = 0; frame < frames; frame++) {
    final result = capsule.move(house, currentRoom, eye, delta * (1 / frames));
    eye = result.eye;
    currentRoom = result.roomId;
  }
  return (eye: eye, room: currentRoom);
}

void main() {
  final stableHouse = loadAuthoredHouse(seed: 42);
  final hall = stableHouse.byId('hall')!;
  final hallSize = stableHouse.effectiveSize(hall);
  final hallStart = Vec3(
    hall.origin.x + hallSize.x * 0.4,
    hall.origin.y + 1.65,
    hall.origin.z + hallSize.z * 0.35,
  );
  final at30 = _move(
    stableHouse,
    hallStart,
    'hall',
    Vec3(0, 0, 0.4),
    frames: 30,
  );
  final at60 = _move(loadAuthoredHouse(seed: 42), hallStart, 'hall', Vec3(0, 0, 0.4), frames: 60);
  final at120 = _move(
    loadAuthoredHouse(seed: 42),
    hallStart,
    'hall',
    Vec3(0, 0, 0.4),
    frames: 120,
  );
  _expect(
    (at30.eye - at60.eye).length < 1e-9 && (at60.eye - at120.eye).length < 1e-9,
    'swept movement must be frame-rate independent',
  );

  final wallStart = Vec3(
    hall.origin.x + hallSize.x - 0.1,
    hallStart.y,
    hallStart.z,
  );
  final wall = _move(loadAuthoredHouse(seed: 42), wallStart, 'hall', Vec3(1, 0, 0));
  _expect(wall.eye.x <= wallStart.x, 'a solid wall must reject movement');

  final closedHouse = loadAuthoredHouse(seed: 42);
  closedHouse.portalById('hall-living')!.open = false;
  final livingPortal = closedHouse.portalById('hall-living')!;
  final livingPortalZ =
      hall.origin.z + livingPortal.offsetFor('hall') + livingPortal.width * 0.5;
  final closed = _move(
    closedHouse,
    Vec3(hall.origin.x + 0.2, hallStart.y, livingPortalZ),
    'hall',
    Vec3(-1, 0, 0),
  );
  _expect(
    closed.room == 'hall' && closed.eye.x >= hall.origin.x - 0.1,
    'a closed canonical portal must block crossing',
  );

  final open = _move(
    loadAuthoredHouse(seed: 42),
    Vec3(hall.origin.x + 0.2, hallStart.y, livingPortalZ),
    'hall',
    Vec3(-1, 0, 0),
  );
  _expect(
    open.room == 'living-room' && open.eye.x < hall.origin.x,
    'an open canonical portal must allow crossing',
  );

  final stairHouse = loadAuthoredHouse(seed: 42);
  final stair = stairHouse.stairs.single;
  final upstairs = _move(
    stairHouse,
    stair.lowerEye,
    'hall',
    Vec3(0, 0, -8.1),
    frames: 90,
  );
  _expect(
    upstairs.room == 'landing' && (upstairs.eye - stair.upperEye).length < 1e-9,
    'stairs must carry the player smoothly from hall to landing',
  );
  final downstairs = _move(
    loadAuthoredHouse(seed: 42),
    stair.upperEye,
    'landing',
    Vec3(0, 0, 8.1),
    frames: 90,
  );
  _expect(
    downstairs.room == 'hall' &&
        (downstairs.eye - stair.lowerEye).length < 1e-9,
    'stairs must carry the player smoothly from landing to hall',
  );

  print('sweep, walls, portals, and bidirectional stair traversal pass');
}
