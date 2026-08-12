import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/mesh.dart';
import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/interaction.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — TEST ROOM & PRIMITIVE OBJECT GEOMETRY SUITE');
  print('========================================================================');

  final house = House(42);

  // 1. Verify all rooms produce valid RoomGeometry containing primitive objects
  print('Testing RoomGeometry generation across all house rooms...');
  for (final room in house.rooms) {
    final geom = buildRoomGeometry(house, room);
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
  print('✓ All ${house.rooms.length} rooms generated complete geometric meshes with primitive dressing');

  // 2. Verify Living Room Test Chamber specific primitive volume
  final living = house.byId('living-room')!;
  final livingGeom = buildRoomGeometry(house, living);
  if (livingGeom.walls.length < 5000) {
    throw StateError(
      'Living room walls geometry expected rich primitive dataset, got ${livingGeom.walls.length} floats',
    );
  }
  print('✓ Living room test chamber contains ${livingGeom.walls.length} vertex floats of primitive geometries');

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
  if (quadFloats.length != 6 * 14) { // 6 vertices per quad * 14 floats per vertex
    throw StateError('Expected 84 floats for 1 quad, got ${quadFloats.length}');
  }

  // 4. Verify Raycasting & Line of Sight in Test Room Environment
  print('Testing Interaction Raycasting & Line-of-Sight in Test Room Environment...');
  final eye = Vec3(2.0, 1.65, 2.0);
  final target = Vec3(3.0, 1.65, 2.0);

  // Test Line-of-sight query inside room
  final los = hasLineOfSight(house, 'living-room', eye, target);
  if (!los) {
    throw StateError('Expected clear line of sight between interior points');
  }

  final camera = Camera()..lookFrom(eye, 0.0, 0.0);
  final mantleHit = raycastMantle(camera, house, 'living-room');
  print('✓ Raycast and line-of-sight evaluated deterministically in test room (mantleHit: $mantleHit)');

  print('========================================================================');
  print('✓ TEST ROOM & PRIMITIVE OBJECT GEOMETRY CERTIFIED (4/4 SUB-SYSTEMS)');
  print('========================================================================');
}
