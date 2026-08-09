import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/engine/vertex_format.dart';

Never _fail(String message) => throw StateError(message);

void main() {
  final house = House(42);
  final cellarWallFloats = buildRoomGeometry(
    house,
    house.byId('cellar')!,
  ).walls.length;
  for (final room in house.rooms) {
    final geometry = buildRoomGeometry(house, room);
    if (geometry.floor.isEmpty || geometry.ceiling.isEmpty) {
      _fail('room ${room.id} has no floor or ceiling geometry');
    }
    if (geometry.walls.isEmpty ||
        geometry.walls.any((value) => !value.isFinite)) {
      _fail('room ${room.id} has invalid wall geometry');
    }
    if (geometry.walls.length % floatsPerQuad != 0) {
      _fail('room ${room.id} detail geometry is not quad-aligned');
    }
    if (room.id != 'cellar' && geometry.walls.length <= cellarWallFloats) {
      _fail('room ${room.id} is missing its visual trim/detail layer');
    }
    if (geometry.doors.isEmpty &&
        house.portalsFor(room.id).any((portal) => !portal.stair)) {
      _fail('room ${room.id} has a door portal but no door model');
    }
    final size = house.effectiveSize(room);
    const epsilon = 0.0001;
    var hasStructuralThickness = false;
    for (var i = 0; i < geometry.walls.length; i += vertexStride) {
      final x = geometry.walls[i];
      final y = geometry.walls[i + 1];
      final z = geometry.walls[i + 2];
      if (x < room.origin.x - epsilon ||
          x > room.origin.x + size.x + epsilon ||
          z < room.origin.z - epsilon ||
          z > room.origin.z + size.z + epsilon) {
        hasStructuralThickness = true;
      }
      if (x < room.origin.x - 0.43 - epsilon ||
          x > room.origin.x + size.x + 0.43 + epsilon ||
          y < room.origin.y - epsilon ||
          y > room.origin.y + size.y + epsilon ||
          z < room.origin.z - 0.43 - epsilon ||
          z > room.origin.z + size.z + 0.43 + epsilon) {
        _fail('room ${room.id} detail escaped canonical room bounds');
      }
    }
    if (room.id != 'cellar' && !hasStructuralThickness) {
      _fail('room ${room.id} wall mesh has no structural thickness');
    }
  }
  final frontDoor = house.portalById('front-door')!;
  final hall = house.byId('hall')!;
  final openLeaf = buildDoorLeafGeometry(house, hall, frontDoor);
  final openStatic = buildDoorStaticGeometry(house, hall);
  frontDoor.open = false;
  final closedLeaf = buildDoorLeafGeometry(house, hall, frontDoor);
  final closedStatic = buildDoorStaticGeometry(house, hall);
  if (openStatic.length != closedStatic.length) {
    _fail('static door shell changed length with portal state');
  }
  for (var i = 0; i < openStatic.length; i++) {
    if (openStatic[i] != closedStatic[i]) {
      _fail('static door shell changed with portal state at $i');
    }
  }
  var changed = openLeaf.length != closedLeaf.length;
  for (var i = 0; !changed && i < openLeaf.length; i++) {
    changed = openLeaf[i] != closedLeaf[i];
  }
  if (!changed) {
    _fail('door leaf geometry does not change with portal state');
  }
  print('room geometry: shared legacy/Pixeldart openings and fixture pass');
}
