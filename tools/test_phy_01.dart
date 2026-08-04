import 'package:quarantine/config.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/game/player_state.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/house.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void _expectVec(Vec3 a, Vec3 b, String label) {
  _expect(
    (a.x - b.x).abs() < 1e-9 &&
        (a.y - b.y).abs() < 1e-9 &&
        (a.z - b.z).abs() < 1e-9,
    '$label: expected $b but got $a',
  );
}

void main() {
  final house = House(42);
  final stair = house.stairs.single;

  // Start near the lower stair endpoint in hall.
  final startEye = stair.lowerEye;
  final initialBase =
      startEye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);

  final capsuleA = Capsule(
    base: initialBase,
    tip:
        initialBase + Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
  );

  // Restore moved-state explicitly (PHY-01).
  capsuleA.restoreActiveStair(
    house: house,
    stairId: stair.id,
    progress: 0.25,
    currentRoom: 'hall',
  );

  // Deterministic movement delta along the stair axis.
  final path = stair.upperEye - stair.lowerEye;
  final axis = path.length < 1e-9 ? Vec3(0, 0, 0) : path.normalized;
  _expectVec(axis, axis, 'axis sanity');

  const double stepScale = 0.12;
  final delta = axis * stepScale;

  Vec3 eye = startEye;
  String room = 'hall';

  // Run a few deterministic steps, then save sparse moved-state.
  const firstSteps = 8;
  for (int i = 0; i < firstSteps; i++) {
    final move = capsuleA.move(house, room, eye, delta);
    eye = move.eye;
    room = move.roomId;
  }

  final savedState = PlayerState(
    roomId: room,
    eye: eye,
    yaw: 0.0,
    pitch: 0.0,
    activeStairId: capsuleA.activeStairId,
    activeStairProgress: capsuleA.activeStairProgress,
  );

  final decoded = PlayerState.tryFromJson(savedState.toJson());
  _expect(decoded != null, 'saved moved-state round-trips');
  _expect(decoded!.roomId == savedState.roomId, 'room preserved');
  _expect(
    decoded!.activeStairId == savedState.activeStairId,
    'stair id preserved',
  );

  // Continue simulation on A.
  Vec3 eyeA = eye;
  String roomA = room;

  const remainingSteps = 6;
  for (int i = 0; i < remainingSteps; i++) {
    final move = capsuleA.move(house, roomA, eyeA, delta);
    eyeA = move.eye;
    roomA = move.roomId;
  }

  // Restore into a fresh capsule and replay the same remaining steps.
  final capsuleB = Capsule(
    base: (decoded!.eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0)),
    tip:
        (decoded!.eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0)) +
        Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
  );

  capsuleB.restoreActiveStair(
    house: house,
    stairId: decoded.activeStairId,
    progress: decoded.activeStairProgress,
    currentRoom: decoded.roomId,
  );

  Vec3 eyeB = decoded.eye;
  String roomB = decoded.roomId;

  for (int i = 0; i < remainingSteps; i++) {
    final move = capsuleB.move(house, roomB, eyeB, delta);
    eyeB = move.eye;
    roomB = move.roomId;
  }

  _expect(roomA == roomB, 'room preserved after restore + replay');
  _expectVec(eyeA, eyeB, 'eye preserved after restore + replay');
  _expect(
    (capsuleA.activeStairProgress ?? -1) ==
        (capsuleB.activeStairProgress ?? -1),
    'stair progress preserved after restore + replay',
  );

  print('PHY-01: sparse moved-state stair progress is replay/recovery stable');
}
