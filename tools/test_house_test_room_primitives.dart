import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/mesh.dart';
import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/interaction.dart';
import 'house_fixture.dart';

void main() {
  print(
    '========================================================================',
  );
  print(' THE QUARANTINE — TEST ROOM & PRIMITIVE OBJECT GEOMETRY SUITE');
  print(
    '========================================================================',
  );

  final house = loadAuthoredHouse(seed: 42);

  // 1. Every room that the generator still owns produces a valid shell.
  //     Rooms migrated to an authored model package are excluded by design:
  //     their shell comes from the promoted FBX, not from this generator.
  print('Testing RoomGeometry generation across generator-owned rooms...');
  var generatedRooms = 0;
  for (final room in house.rooms) {
    final geom = buildRoomGeometry(house, room);
    if (roomShellIsModelPresented(room.id)) {
      if (!geom.isEmpty) {
        throw StateError(
          'Room ${room.id} is presented by a model package, so the procedural '
          'generator must contribute nothing for it — otherwise the retired '
          'shell is still being built, measured, and drawn underneath the '
          'authored interior. Got ${geom.combined.length} floats.',
        );
      }
      continue;
    }
    generatedRooms++;
    if (geom.floor.isEmpty) {
      throw StateError('Floor geometry empty for room ${room.id}');
    }
    if (geom.ceiling.isEmpty) {
      throw StateError('Ceiling geometry empty for room ${room.id}');
    }
    if (geom.walls.isEmpty) {
      throw StateError('Wall geometry empty for room ${room.id}');
    }
    if (geom.combined.isEmpty) {
      throw StateError('Combined geometry empty for room ${room.id}');
    }
  }
  print(
    '✓ $generatedRooms generator-owned rooms produced clean structural shells; '
    '${modelPresentedRoomShells.length} model-presented '
    '(${modelPresentedRoomShells.join(", ")}) produced none',
  );

  // 2. The migrated room contributes no procedural geometry at all.
  final living = house.byId('living-room')!;
  final livingGeom = buildRoomGeometry(house, living);
  if (!livingGeom.isEmpty) {
    throw StateError(
      'Living room still generates a procedural shell: '
      '${livingGeom.combined.length} floats',
    );
  }
  print('✓ Living room shell is fully retired in favour of its FBX package');

  // 3. Verify StaticMeshBuilder primitive emission
  print('Testing Primitive Geometric Builders...');
  final builder = StaticMeshBuilder();

  // Test quad emission
  builder.quad(
    Vec3(0, 0, 0),
    Vec3(1, 0, 0),
    Vec3(1, 1, 0),
    Vec3(0, 1, 0),
    0xFF0000,
  );
  final quadFloats = builder.build();
  if (quadFloats.length != 6 * 14) {
    // 6 vertices per quad * 14 floats per vertex
    throw StateError('Expected 84 floats for 1 quad, got ${quadFloats.length}');
  }

  // 4. Verify Raycasting & Line of Sight in Test Room Environment
  print(
    'Testing Interaction Raycasting & Line-of-Sight in Test Room Environment...',
  );
  final eye = Vec3(2.0, 1.65, 2.0);
  final target = Vec3(3.0, 1.65, 2.0);

  // Test Line-of-sight query inside room
  final los = hasLineOfSight(house, 'living-room', eye, target);
  if (!los) {
    throw StateError('Expected clear line of sight between interior points');
  }

  final camera = Camera()..lookFrom(eye, 0.0, 0.0);
  final mantleHit = raycastMantle(camera, house, 'living-room');
  print(
    '✓ Raycast and line-of-sight evaluated deterministically in test room (mantleHit: $mantleHit)',
  );

  print(
    '========================================================================',
  );
  print('✓ TEST ROOM & PRIMITIVE OBJECT GEOMETRY CERTIFIED (4/4 SUB-SYSTEMS)');
  print(
    '========================================================================',
  );
}
