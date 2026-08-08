import 'dart:typed_data';

import '../config.dart';
import '../engine/math3.dart';
import '../engine/mesh.dart';
import 'house.dart';
import 'room.dart';

/// CPU-only retained geometry shared by the legacy emitter and presentation
/// adapters. It reads authored house facts but owns no renderer handles.
final class RoomGeometry {
  final Float32List floor;
  final Float32List ceiling;
  final Float32List walls;

  const RoomGeometry({
    required this.floor,
    required this.ceiling,
    required this.walls,
  });

  Float32List get combined =>
      Float32List.fromList([...floor, ...ceiling, ...walls]);
}

RoomGeometry buildRoomGeometry(House house, Room room) {
  final floor = StaticMeshBuilder();
  final ceiling = StaticMeshBuilder();
  final walls = StaticMeshBuilder();
  final o = room.origin;
  final s = house.effectiveSize(room);
  floor.quad(
    Vec3(o.x, o.y, o.z),
    Vec3(o.x, o.y, o.z + s.z),
    Vec3(o.x + s.x, o.y, o.z + s.z),
    Vec3(o.x + s.x, o.y, o.z),
    0xA8A8A8,
    uScale: s.x / texWorldSize,
    vScale: s.z / texWorldSize,
  );
  ceiling.quad(
    Vec3(o.x, o.y + s.y, o.z),
    Vec3(o.x + s.x, o.y + s.y, o.z),
    Vec3(o.x + s.x, o.y + s.y, o.z + s.z),
    Vec3(o.x, o.y + s.y, o.z + s.z),
    0xC0C0C0,
    uScale: s.x / texWorldSize,
    vScale: s.z / texWorldSize,
  );
  for (final facing in Facing.values) {
    _addWall(walls, house, room, s, facing);
  }
  return RoomGeometry(
    floor: floor.build(),
    ceiling: ceiling.build(),
    walls: walls.build(),
  );
}

void _addWall(
  StaticMeshBuilder builder,
  House house,
  Room room,
  Vec3 size,
  Facing facing,
) {
  final width = facing == Facing.north || facing == Facing.south
      ? size.x
      : size.z;
  final openings = <_Opening>[
    for (final portal in house.portalsFor(room.id))
      if (!portal.stair && portal.facingFor(room.id) == facing)
        _Opening(
          portal.offsetFor(room.id),
          portal.offsetFor(room.id) + portal.width,
          0,
          portal.height,
        ),
    for (final window in room.windows)
      if (window.facing == facing)
        _Opening(
          window.offset,
          window.offset + window.w,
          window.sill,
          window.sill + window.h,
        ),
  ];
  final horizontal = <double>{
    0,
    width,
    for (final opening in openings) ...[opening.u0, opening.u1],
  }.toList()..sort();
  final vertical = <double>{
    0,
    size.y,
    for (final opening in openings) ...[opening.v0, opening.v1],
  }.toList()..sort();
  for (var u = 0; u + 1 < horizontal.length; u++) {
    for (var v = 0; v + 1 < vertical.length; v++) {
      final u0 = horizontal[u], u1 = horizontal[u + 1];
      final v0 = vertical[v], v1 = vertical[v + 1];
      if (openings.any(
        (opening) => opening.contains((u0 + u1) * 0.5, (v0 + v1) * 0.5),
      )) {
        continue;
      }
      _wallQuad(builder, room, size, facing, u0, u1, v0, v1);
    }
  }
}

void _wallQuad(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Facing facing,
  double u0,
  double u1,
  double v0,
  double v1,
) {
  final x = room.origin.x;
  final y = room.origin.y;
  final z = room.origin.z;
  final a = switch (facing) {
    Facing.north => Vec3(x + u0, y + v0, z),
    Facing.south => Vec3(x + u1, y + v0, z + size.z),
    Facing.east => Vec3(x + size.x, y + v1, z + u1),
    Facing.west => Vec3(x, y + v1, z + u0),
  };
  final b = switch (facing) {
    Facing.north => Vec3(x + u1, y + v0, z),
    Facing.south => Vec3(x + u0, y + v0, z + size.z),
    Facing.east => Vec3(x + size.x, y + v1, z + u0),
    Facing.west => Vec3(x, y + v1, z + u1),
  };
  final c = switch (facing) {
    Facing.north => Vec3(x + u1, y + v1, z),
    Facing.south => Vec3(x + u0, y + v1, z + size.z),
    Facing.east => Vec3(x + size.x, y + v0, z + u0),
    Facing.west => Vec3(x, y + v0, z + u1),
  };
  final d = switch (facing) {
    Facing.north => Vec3(x + u0, y + v1, z),
    Facing.south => Vec3(x + u1, y + v1, z + size.z),
    Facing.east => Vec3(x + size.x, y + v0, z + u1),
    Facing.west => Vec3(x, y + v0, z + u0),
  };
  builder.quad(
    a,
    b,
    c,
    d,
    0x8B8B8B,
    u: u0 / texWorldSize,
    v: v0 / texWorldSize,
    uScale: (u1 - u0) / texWorldSize,
    vScale: (v1 - v0) / texWorldSize,
  );
}

final class _Opening {
  final double u0, u1, v0, v1;

  const _Opening(this.u0, this.u1, this.v0, this.v1);

  bool contains(double u, double v) => u > u0 && u < u1 && v > v0 && v < v1;
}
