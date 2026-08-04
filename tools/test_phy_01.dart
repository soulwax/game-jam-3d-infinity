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
    (a.x - b.x).abs() < 1e-6 &&
        (a.y - b.y).abs() < 1e-6 &&
        (a.z - b.z).abs() < 1e-6,
    '$label: expected (${b.x}, ${b.y}, ${b.z}) but got (${a.x}, ${a.y}, ${a.z})',
  );
}

void main() {
  final house = House(42);
  final stair = house.stairs.single;

  // Start at lower stair endpoint and move up deterministically.
  final path = stair.upperEye - stair.lowerEye;
  final axis = path.length < 1e-9 ? Vec3(0, 0, 0) : path.normalized;
  final startEye = stair.lowerEye;
  final initialBase =
      startEye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);

  final capsuleA = Capsule(
    base: initialBase,
    tip:
        initialBase + Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
  );

  _expectVec(axis, axis, 'axis sanity');

  // Upward stair traversal in this house is negative Z from hall.
  const double stepScale = 0.08;
  final delta = axis * -stepScale;

  Vec3 eye = startEye;
  String room = 'hall';

  // Enter stair mode and move a few fixed steps.
  const firstSteps = 5;
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
    decoded.activeStairId == savedState.activeStairId,
    'stair id preserved',
  );

  Vec3 eyeA = eye;
  String roomA = room;

  const remainingSteps = 4;
  for (int i = 0; i < remainingSteps; i++) {
    final move = capsuleA.move(house, roomA, eyeA, delta);
    eyeA = move.eye;
    roomA = move.roomId;
  }

  // Restore into a fresh capsule and replay same remaining steps.
  final capsuleB = Capsule(
    base: decoded.eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0),
    tip:
        (decoded.eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0)) +
        Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
  );

  capsuleB.restoreActiveStair(
    house: house,
    stairId: decoded.activeStairId,
    progress: decoded.activeStairProgress,
    currentRoom: decoded.roomId,
    eye: decoded.eye,
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
