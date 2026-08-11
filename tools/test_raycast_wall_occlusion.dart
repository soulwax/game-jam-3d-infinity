import 'dart:math' as math;

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/interaction.dart';

Never _fail(String message) =>
    throw StateError('Raycast wall occlusion test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

Camera _facing(Vec3 eye, Vec3 target) {
  final camera = Camera();
  camera.eye = eye;
  camera.fwd = (target - eye).normalized;
  return camera;
}

void main() {
  print('Testing raycast wall occlusion and room-bounded range...');

  final house = House(42);
  final livingRoom = house.byId('living-room')!;
  final hall = house.byId('hall')!;

  // 1. In-room direct line of sight
  final mantle = livingRoom.mantles.first;
  final mantleWorld = livingRoom.toWorld(mantle.localAt);
  final eyeInLiving = mantleWorld + Vec3(0.5, 0, 1.5);
  final camClear = _facing(eyeInLiving, mantleWorld);

  final hitClear = raycastMantle(camClear, house, 'living-room');
  _expect(hitClear != null, 'Raycast should hit mantle when line of sight is clear');
  _expect(hitClear?.id == mantle.id, 'Hit mantle should match target');

  // 2. Solid wall occlusion: Camera in Hall looking at Living Room mantle through solid shared wall
  // Hall origin.x is 4.5 * 1.5 * 1.5 = 10.125.
  // A solid wall separates Hall and Living Room outside the portal door.
  final eyeBehindSolidWall = Vec3(hall.origin.x + 1.0, mantleWorld.y, mantleWorld.z);
  final camThroughWall = _facing(eyeBehindSolidWall, mantleWorld);

  final hitThroughWall = raycastMantle(camThroughWall, house, 'living-room');
  _expect(
    hitThroughWall == null,
    'Raycast must NOT penetrate through solid wall into living room',
  );

  // Line of sight check directly
  final los = hasLineOfSight(house, 'living-room', eyeBehindSolidWall, mantleWorld);
  _expect(!los, 'Line of sight through solid wall must return false');

  // 3. Closed portal door occlusion
  final portal = house.portals.firstWhere((p) => p.id == 'hall-living');
  portal.open = false; // Close the door

  final hallLivingDoorCenter = house.portalCenter('living-room', portal);
  final portalLosClosed = hasLineOfSight(
    house,
    'living-room',
    eyeInLiving,
    hallLivingDoorCenter + Vec3(1.0, 0, 0), // Point behind closed door in hall
  );
  _expect(!portalLosClosed, 'Line of sight through closed door must be blocked');

  // 4. Open portal allows raycast through aperture
  portal.open = true; // Open the door
  final portalLosOpen = hasLineOfSight(
    house,
    'living-room',
    hallLivingDoorCenter - Vec3(1.0, 0, 0),
    hallLivingDoorCenter + Vec3(1.0, 0, 0),
  );
  _expect(portalLosOpen, 'Line of sight through open doorway aperture must pass');

  // 5. Room-bounded range verification
  final roomDiagonal = math.sqrt(livingRoom.size.x * livingRoom.size.x + livingRoom.size.z * livingRoom.size.z);
  final effectiveRange = effectiveRoomRaycastDistance(house, livingRoom);
  _expect(
    effectiveRange <= roomDiagonal + 0.001,
    'Raycast range must be constrained to room scale',
  );
  _expect(
    effectiveRange <= raycastDistance + 0.001,
    'Raycast range must not exceed global raycastDistance',
  );

  // Too far away beyond room range
  final eyeFarAway = mantleWorld + Vec3(0, 0, effectiveRange + 1.0);
  final camFar = _facing(eyeFarAway, mantleWorld);
  final hitFar = raycastMantle(camFar, house, 'living-room');
  _expect(hitFar == null, 'Raycast beyond room range must return null');

  print('All raycast wall occlusion & room-scale range tests passed!');
}
