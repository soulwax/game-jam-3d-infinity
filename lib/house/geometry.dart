import 'dart:typed_data';

import '../config.dart';
import '../engine/math3.dart';
import '../engine/mesh.dart';
import 'house.dart';
import 'room.dart';

/// Runtime MVP shell thicknesses: authored 0.28 m exterior / 0.12 m
/// partition sections, uniformly expanded by the 1.5x house scale.
const double houseExteriorWallThickness = 0.42;
const double housePartitionWallThickness = 0.18;

/// CPU-only retained geometry shared by the legacy emitter and presentation
/// adapters. It reads authored house facts but owns no renderer handles.
final class RoomGeometry {
  final Float32List floor;
  final Float32List ceiling;
  final Float32List walls;
  final Float32List doors;

  const RoomGeometry({
    required this.floor,
    required this.ceiling,
    required this.walls,
    required this.doors,
  });

  Float32List get combined =>
      Float32List.fromList([...floor, ...ceiling, ...walls, ...doors]);
}

RoomGeometry buildRoomGeometry(House house, Room room) {
  final floor = StaticMeshBuilder();
  final ceiling = StaticMeshBuilder();
  final walls = StaticMeshBuilder();
  final doors = StaticMeshBuilder();
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
  _addFloorFinish(floor, room, s);
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
  for (final portal in house.portalsFor(room.id)) {
    if (portal.doorKit == null || portal.stair) continue;
    _addDoorFrame(doors, room, s, portal);
  }
  _addCeilingOrnament(walls, room, s);
  _addRoomFixtures(walls, house, room, s);
  return RoomGeometry(
    floor: floor.build(),
    ceiling: ceiling.build(),
    walls: walls.build(),
    doors: doors.build(),
  );
}

/// Builds only the stateful leaf for a portal. The frame and its hardware stay
/// in the room shell; this mesh is replaced when [Portal.open] changes so a
/// door never remains baked in the wrong pose.
Float32List buildDoorLeafGeometry(House house, Room room, Portal portal) {
  if (portal.doorKit == null || portal.stair) return Float32List(0);
  final builder = StaticMeshBuilder();
  _addDoorLeaf(
    builder,
    room,
    house.effectiveSize(room),
    portal,
    _doorFrameColor(portal),
  );
  return builder.build();
}

void _addFloorFinish(StaticMeshBuilder builder, Room room, Vec3 size) {
  final x = room.origin.x;
  final y = room.origin.y;
  final z = room.origin.z;
  if (room.surfaceFloor == 'floor-wood') {
    const boardDepth = 0.15;
    final boardCount = (size.z / 0.22).floor();
    for (var i = 0; i < boardCount; i++) {
      final z0 = z + i * 0.22 + 0.018;
      final tone = i.isEven ? 0x795A43 : 0x6B4B37;
      _box(
        builder,
        Vec3(x, y + 0.004, z0),
        Vec3(x + size.x, y + 0.014, z0 + boardDepth),
        tone,
      );
    }
    if (room.id == 'hall' || room.id == 'landing') {
      final runnerWidth = room.id == 'hall' ? 1.0 : 0.82;
      final runnerX = x + (size.x - runnerWidth) * 0.5;
      _box(
        builder,
        Vec3(runnerX, y + 0.016, z + 0.18),
        Vec3(runnerX + runnerWidth, y + 0.026, z + size.z - 0.18),
        0x62535A,
      );
      _box(
        builder,
        Vec3(runnerX + 0.08, y + 0.027, z + 0.22),
        Vec3(runnerX + runnerWidth - 0.08, y + 0.033, z + size.z - 0.22),
        0x82706C,
      );
    }
    if (room.id == 'living-room') {
      _box(
        builder,
        Vec3(x + 1.15, y + 0.018, z + 2.15),
        Vec3(x + 4.70, y + 0.030, z + 4.35),
        0x554A4A,
      );
      _box(
        builder,
        Vec3(x + 1.28, y + 0.031, z + 2.28),
        Vec3(x + 4.57, y + 0.037, z + 4.22),
        0x77656A,
      );
    }
    return;
  }
  if (room.surfaceFloor == 'floor-linoleum') {
    for (var i = 0; i < 5; i++) {
      final z0 = z + 0.18 + i * 0.62;
      _box(
        builder,
        Vec3(x + 0.08, y + 0.004, z0),
        Vec3(x + size.x - 0.08, y + 0.012, z0 + 0.50),
        i.isEven ? 0x76796C : 0x686B61,
      );
    }
    return;
  }
  if (room.surfaceFloor == 'floor-tiles') {
    for (var ix = 0; ix < 4; ix++) {
      for (var iz = 0; iz < 3; iz++) {
        final x0 = x + 0.08 + ix * 0.86;
        final z0 = z + 0.08 + iz * 0.86;
        _box(
          builder,
          Vec3(x0, y + 0.004, z0),
          Vec3(x0 + 0.78, y + 0.012, z0 + 0.78),
          (ix + iz).isEven ? 0xB9B4A8 : 0xA29D94,
        );
      }
    }
    return;
  }
  if (room.surfaceFloor == 'floor-concrete') {
    _box(
      builder,
      Vec3(x + 0.08, y + 0.004, z + 0.08),
      Vec3(x + size.x - 0.08, y + 0.014, z + size.z - 0.08),
      0x77736B,
    );
    _box(
      builder,
      Vec3(x + 2.20, y + 0.015, z + 2.45),
      Vec3(x + 2.68, y + 0.021, z + 2.93),
      0x4A4944,
    );
  }
}

/// Adds authored, view-only furnishing and architectural anchors to the room
/// mesh. These pieces deliberately stay in the render stream: collision,
/// focus queries and portal traversal continue to use the simulation facts.
void _addRoomFixtures(
  StaticMeshBuilder builder,
  House house,
  Room room,
  Vec3 size,
) {
  final x = room.origin.x;
  final y = room.origin.y;
  final z = room.origin.z;
  const wood = 0x5A3B2A;
  const darkWood = 0x38271F;
  const iron = 0x343330;
  const stone = 0xB5AA98;
  const ceramic = 0xD1CCC1;
  const fabric = 0x6A6470;
  const soot = 0x211E1C;

  switch (room.id) {
    case 'living-room':
      final fireX = x + size.x - 0.48;
      final fireZ = z + size.z * 0.40;
      _box(
        builder,
        Vec3(fireX, y, fireZ - 0.85),
        Vec3(x + size.x, y + 2.55, fireZ + 0.85),
        0x776554,
      );
      _box(
        builder,
        Vec3(fireX - 0.38, y + 0.02, fireZ - 0.72),
        Vec3(x + size.x + 0.05, y + 0.16, fireZ + 0.72),
        stone,
      );
      _box(
        builder,
        Vec3(fireX - 0.52, y + 2.18, fireZ - 0.94),
        Vec3(x + size.x + 0.08, y + 2.34, fireZ + 0.94),
        wood,
      );
      _box(
        builder,
        Vec3(fireX - 0.02, y + 0.45, fireZ - 0.48),
        Vec3(x + size.x + 0.03, y + 1.48, fireZ + 0.48),
        soot,
      );
      for (var i = 0; i < 3; i++) {
        _box(
          builder,
          Vec3(fireX - 0.08 + i * 0.18, y + 0.28, fireZ - 0.42),
          Vec3(fireX - 0.02 + i * 0.18, y + 1.35, fireZ - 0.34),
          iron,
        );
      }
      // Tile slips, mantel brackets and two small domestic objects keep the
      // fireplace from reading as a single procedural block.
      for (var i = 0; i < 4; i++) {
        _box(
          builder,
          Vec3(fireX - 0.01, y + 1.55, fireZ - 0.34 + i * 0.20),
          Vec3(fireX + 0.04, y + 1.70, fireZ - 0.18 + i * 0.20),
          stone,
        );
      }
      for (final bracketZ in [fireZ - 0.68, fireZ + 0.56]) {
        _box(
          builder,
          Vec3(fireX - 0.42, y + 2.00, bracketZ),
          Vec3(fireX - 0.26, y + 2.20, bracketZ + 0.16),
          darkWood,
        );
      }
      _box(
        builder,
        Vec3(fireX - 0.27, y + 2.34, fireZ - 0.58),
        Vec3(fireX - 0.07, y + 2.52, fireZ - 0.38),
        ceramic,
      );
      _box(
        builder,
        Vec3(fireX - 0.25, y + 2.34, fireZ + 0.34),
        Vec3(fireX - 0.06, y + 2.49, fireZ + 0.52),
        wood,
      );
    case 'hall':
      _addStairRun(builder, house, room, size, darkWood, iron);
      // A narrow hall table and a framed clock sit outside the circulation
      // route, giving the entrance a believable domestic landmark.
      _box(
        builder,
        Vec3(x + 0.28, y + 0.78, z + 0.52),
        Vec3(x + 0.68, y + 0.88, z + 2.15),
        darkWood,
      );
      for (final legZ in [z + 0.66, z + 2.01]) {
        _box(
          builder,
          Vec3(x + 0.34, y, legZ),
          Vec3(x + 0.42, y + 0.8, legZ + 0.08),
          wood,
        );
      }
      final clockX = x + 1.22;
      _box(
        builder,
        Vec3(clockX - 0.28, y + 2.35, z + 0.02),
        Vec3(clockX + 0.28, y + 3.02, z + 0.10),
        darkWood,
      );
      _box(
        builder,
        Vec3(clockX - 0.13, y + 2.48, z + 0.10),
        Vec3(clockX + 0.13, y + 2.72, z + 0.15),
        stone,
      );
      _box(
        builder,
        Vec3(clockX - 0.025, y + 1.82, z + 0.08),
        Vec3(clockX + 0.025, y + 2.36, z + 0.13),
        iron,
      );
      for (var i = 0; i < 3; i++) {
        _box(
          builder,
          Vec3(x + 1.70 + i * 0.36, y + 1.74, z + 0.08),
          Vec3(x + 1.78 + i * 0.36, y + 1.84, z + 0.16),
          iron,
        );
      }
      _box(
        builder,
        Vec3(x + 0.86, y, z + 0.62),
        Vec3(x + 1.10, y + 0.72, z + 0.90),
        ceramic,
      );
      _box(
        builder,
        Vec3(x + 0.91, y + 0.72, z + 0.68),
        Vec3(x + 1.05, y + 0.82, z + 0.84),
        darkWood,
      );
    case 'kitchen':
      final rangeX = x + size.x - 0.62;
      _box(
        builder,
        Vec3(rangeX, y, z + 0.72),
        Vec3(x + size.x, y + 1.28, z + 2.18),
        iron,
      );
      _box(
        builder,
        Vec3(rangeX - 0.08, y + 1.28, z + 0.62),
        Vec3(x + size.x + 0.04, y + 1.38, z + 2.28),
        stone,
      );
      for (var i = 0; i < 3; i++) {
        _box(
          builder,
          Vec3(rangeX + 0.12, y + 1.39, z + 0.88 + i * 0.40),
          Vec3(rangeX + 0.40, y + 1.45, z + 1.16 + i * 0.40),
          soot,
        );
      }
      _box(
        builder,
        Vec3(x + 1.05, y + 0.82, z + 1.15),
        Vec3(x + 3.10, y + 0.94, z + 2.35),
        wood,
      );
      for (final tableX in [x + 1.18, x + 2.94]) {
        _box(
          builder,
          Vec3(tableX, y, z + 1.28),
          Vec3(tableX + 0.10, y + 0.82, z + 1.38),
          darkWood,
        );
      }
      _box(
        builder,
        Vec3(x + 0.48, y + 1.72, z + 2.74),
        Vec3(x + 2.55, y + 1.84, z + 2.88),
        darkWood,
      );
      _box(
        builder,
        Vec3(x + 3.38, y + 0.94, z + 1.26),
        Vec3(x + 4.48, y + 1.02, z + 2.22),
        ceramic,
      );
      _box(
        builder,
        Vec3(x + 3.82, y + 1.02, z + 1.66),
        Vec3(x + 3.90, y + 1.34, z + 1.74),
        iron,
      );
      _box(
        builder,
        Vec3(x + 3.72, y + 1.30, z + 1.66),
        Vec3(x + 4.00, y + 1.36, z + 1.74),
        iron,
      );
      for (var i = 0; i < 2; i++) {
        _box(
          builder,
          Vec3(x + 1.38 + i * 0.55, y + 0.95, z + 1.48),
          Vec3(x + 1.78 + i * 0.55, y + 1.05, z + 1.88),
          ceramic,
        );
      }
    case 'cellar':
      for (var i = 0; i < 4; i++) {
        _box(
          builder,
          Vec3(x + 0.35 + i * 0.28, y, z + 1.05),
          Vec3(x + 0.58 + i * 0.28, y + 0.55 + (i % 2) * 0.18, z + 2.0),
          darkWood,
        );
      }
      _box(
        builder,
        Vec3(x + 2.55, y + 0.15, z + 0.38),
        Vec3(x + 2.72, y + 1.55, z + 0.56),
        iron,
      );
      _box(
        builder,
        Vec3(x + 2.42, y + 1.28, z + 0.32),
        Vec3(x + 2.86, y + 1.38, z + 0.65),
        ceramic,
      );
      _box(
        builder,
        Vec3(x + 0.40, y + 1.72, z + 0.45),
        Vec3(x + 3.40, y + 1.82, z + 0.58),
        iron,
      );
      _box(
        builder,
        Vec3(x + 1.90, y + 1.58, z + 0.42),
        Vec3(x + 2.06, y + 1.76, z + 0.61),
        iron,
      );
      _box(
        builder,
        Vec3(x + 1.84, y + 1.62, z + 0.55),
        Vec3(x + 2.12, y + 1.70, z + 0.64),
        iron,
      );
    case 'bedroom':
      final bedX = x + 0.85;
      final bedZ = z + 2.08;
      _box(
        builder,
        Vec3(bedX, y + 0.42, bedZ),
        Vec3(bedX + 3.65, y + 0.72, bedZ + 2.05),
        fabric,
      );
      _box(
        builder,
        Vec3(bedX - 0.10, y + 0.72, bedZ - 0.12),
        Vec3(bedX + 3.75, y + 1.28, bedZ + 0.10),
        wood,
      );
      _box(
        builder,
        Vec3(bedX + 0.22, y + 0.74, bedZ + 1.35),
        Vec3(bedX + 1.05, y + 0.90, bedZ + 1.82),
        ceramic,
      );
      _box(
        builder,
        Vec3(x + size.x - 0.95, y + 0.78, z + 0.58),
        Vec3(x + size.x - 0.18, y + 1.48, z + 1.42),
        wood,
      );
      _box(
        builder,
        Vec3(x + size.x - 1.04, y + 1.48, z + 0.48),
        Vec3(x + size.x - 0.10, y + 1.57, z + 1.52),
        darkWood,
      );
      for (final pillowZ in [bedZ + 0.22, bedZ + 0.78]) {
        _box(
          builder,
          Vec3(bedX + 0.36, y + 0.75, pillowZ),
          Vec3(bedX + 1.12, y + 0.92, pillowZ + 0.42),
          ceramic,
        );
      }
      for (final legX in [bedX + 0.12, bedX + 3.45]) {
        for (final legZ in [bedZ + 0.12, bedZ + 1.72]) {
          _box(
            builder,
            Vec3(legX, y + 0.08, legZ),
            Vec3(legX + 0.10, y + 0.44, legZ + 0.10),
            darkWood,
          );
        }
      }
    case 'landing':
      _box(
        builder,
        Vec3(x + 0.34, y + 0.02, z + 1.62),
        Vec3(x + 0.48, y + 1.06, z + 2.70),
        darkWood,
      );
      for (var i = 0; i < 4; i++) {
        _box(
          builder,
          Vec3(x + 0.48, y + 0.82 + i * 0.20, z + 1.68 + i * 0.22),
          Vec3(x + 2.14, y + 0.90 + i * 0.20, z + 1.76 + i * 0.22),
          wood,
        );
      }
      for (var i = 0; i < 3; i++) {
        _box(
          builder,
          Vec3(x + 0.62 + i * 0.46, y + 1.02, z + 1.74 + i * 0.22),
          Vec3(x + 0.70 + i * 0.46, y + 1.78, z + 1.82 + i * 0.22),
          darkWood,
        );
      }
    case 'bathroom':
      _box(
        builder,
        Vec3(x + 0.30, y + 0.04, z + 0.38),
        Vec3(x + 2.15, y + 0.62, z + 1.22),
        ceramic,
      );
      _box(
        builder,
        Vec3(x + 0.42, y + 0.62, z + 0.48),
        Vec3(x + 2.03, y + 0.72, z + 1.12),
        stone,
      );
      _box(
        builder,
        Vec3(x + size.x - 0.78, y + 0.12, z + size.z - 0.88),
        Vec3(x + size.x - 0.18, y + 1.75, z + size.z - 0.28),
        ceramic,
      );
      _box(
        builder,
        Vec3(x + size.x - 0.86, y + 1.68, z + size.z - 0.98),
        Vec3(x + size.x - 0.10, y + 1.82, z + size.z - 0.18),
        iron,
      );
      _box(
        builder,
        Vec3(x + 0.86, y + 0.72, z + 0.68),
        Vec3(x + 0.96, y + 1.18, z + 0.78),
        iron,
      );
      _box(
        builder,
        Vec3(x + 0.70, y + 1.12, z + 0.68),
        Vec3(x + 1.12, y + 1.18, z + 0.78),
        iron,
      );
    case 'spare-room':
      _box(
        builder,
        Vec3(x + 1.0, y, z + 0.70),
        Vec3(x + 3.25, y + 1.65, z + 2.0),
        fabric,
      );
      _box(
        builder,
        Vec3(x + 0.80, y + 1.60, z + 0.52),
        Vec3(x + 3.45, y + 1.74, z + 2.18),
        wood,
      );
      _box(
        builder,
        Vec3(x + size.x - 1.05, y, z + size.z - 1.02),
        Vec3(x + size.x - 0.25, y + 0.72, z + size.z - 0.24),
        darkWood,
      );
      for (var i = 0; i < 3; i++) {
        _box(
          builder,
          Vec3(x + size.x - 0.98, y + 0.18 + i * 0.16, z + size.z - 1.12),
          Vec3(x + size.x - 0.28, y + 0.24 + i * 0.16, z + size.z - 1.04),
          iron,
        );
      }
  }
}

void _addStairRun(
  StaticMeshBuilder builder,
  House house,
  Room room,
  Vec3 size,
  int wood,
  int iron,
) {
  if (house.stairs.isEmpty) return;
  const darkWood = 0x38271F;
  final stair = house.stairs.first;
  final min = stair.min;
  final max = stair.max;
  const stepCount = 18;
  final x0 = min.x + 0.12;
  final x1 = max.x - 0.12;
  final topY = _min(max.y, room.origin.y + size.y - 0.18);
  final runHeight = _max(0.1, topY - room.origin.y - 0.10);
  final runFraction = _min(1, runHeight / (max.y - min.y));
  final endZ = max.z - runFraction * (max.z - min.z);
  for (var i = 0; i < stepCount; i++) {
    final t = i / (stepCount - 1) * runFraction;
    final stepY = room.origin.y + 0.10 + t * (max.y - min.y);
    final stepZ = max.z - t * (max.z - min.z);
    _box(
      builder,
      Vec3(x0, stepY, stepZ - 0.18),
      Vec3(x1, stepY + 0.11, stepZ + 0.18),
      wood,
    );
  }
  _box(
    builder,
    Vec3(x0 - 0.10, room.origin.y + 0.08, endZ),
    Vec3(x0, room.origin.y + 0.34, max.z),
    darkWood,
  );
  _box(
    builder,
    Vec3(x1, room.origin.y + 0.08, endZ),
    Vec3(x1 + 0.10, room.origin.y + 0.34, max.z),
    darkWood,
  );
  _box(
    builder,
    Vec3(x1 + 0.16, room.origin.y + 1.42, endZ + 0.25),
    Vec3(x1 + 0.25, _min(room.origin.y + 1.52, topY), max.z - 0.25),
    iron,
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
  _addWallDetails(builder, room, size, facing, width, openings);
}

void _addWallDetails(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Facing facing,
  double width,
  List<_Opening> openings,
) {
  if (room.id == 'cellar') return;

  final publicRoom = room.id == 'living-room' || room.id == 'hall';
  final privateRoom =
      room.id == 'bedroom' || room.id == 'landing' || room.id == 'spare-room';
  final trimColor = publicRoom
      ? 0xC8BDA6
      : privateRoom
      ? 0xBEB5A3
      : 0xB2AC9F;

  _addClippedBand(
    builder,
    room,
    size,
    facing,
    width,
    openings,
    0.02,
    0.17,
    0.032,
    trimColor,
  );
  if (publicRoom || room.id == 'landing') {
    _addClippedBand(
      builder,
      room,
      size,
      facing,
      width,
      openings,
      0.88,
      0.94,
      0.022,
      trimColor,
    );
  }
  if (publicRoom || room.id == 'bedroom') {
    final railBottom = size.y - 0.58;
    _addClippedBand(
      builder,
      room,
      size,
      facing,
      width,
      openings,
      railBottom,
      railBottom + 0.055,
      0.022,
      trimColor,
    );
  }
  _addClippedBand(
    builder,
    room,
    size,
    facing,
    width,
    openings,
    size.y - (publicRoom ? 0.13 : 0.09),
    size.y - 0.012,
    publicRoom ? 0.055 : 0.038,
    trimColor,
  );

  for (final opening in openings) {
    _addOpeningTrim(builder, room, size, facing, width, opening, trimColor);
  }
  for (final window in room.windows.where(
    (window) => window.facing == facing,
  )) {
    _addWindowSashDetail(builder, room, size, facing, window, trimColor);
  }
}

/// Adds the visible working parts of a period sash without filling the
/// opening with opaque geometry. The bars and projecting sill remain render
/// detail only; the authored wall opening is still the collision authority.
void _addWindowSashDetail(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Facing facing,
  Window window,
  int trimColor,
) {
  final u0 = window.offset;
  final u1 = window.offset + window.w;
  final v0 = window.sill;
  final v1 = window.sill + window.h;
  final barColor = window.frosted ? 0xA49D90 : trimColor;
  const bar = 0.035;
  _wallBox(
    builder,
    room,
    size,
    facing,
    (u0 + u1) * 0.5 - bar * 0.5,
    (u0 + u1) * 0.5 + bar * 0.5,
    v0,
    v1,
    0.032,
    barColor,
  );
  _wallBox(
    builder,
    room,
    size,
    facing,
    u0,
    u1,
    (v0 + v1) * 0.5 - bar * 0.5,
    (v0 + v1) * 0.5 + bar * 0.5,
    0.032,
    barColor,
  );
  final sillDepth = facing == Facing.north || facing == Facing.south
      ? 0.11
      : 0.14;
  _wallBox(
    builder,
    room,
    size,
    facing,
    _max(0, u0 - 0.07),
    _min(
      facing == Facing.north || facing == Facing.south ? size.x : size.z,
      u1 + 0.07,
    ),
    _max(0.018, v0 - 0.055),
    v0,
    sillDepth,
    trimColor,
  );
  if (window.frosted) {
    // A narrow lower glazing rail makes the bathroom window read as frosted
    // rather than a missing pane while keeping the opening traversable.
    _wallBox(
      builder,
      room,
      size,
      facing,
      u0 + 0.05,
      u1 - 0.05,
      v0 + 0.06,
      v0 + 0.09,
      0.025,
      0xD0CCC0,
    );
  }
  _addWindowDressing(builder, room, size, facing, window, trimColor);
}

/// Adds restrained period curtains without turning the glazing into an opaque
/// wall. The rod, side drops, and tie-backs are authored as view-only pieces;
/// the canonical opening remains unchanged for light, focus, and traversal.
void _addWindowDressing(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Facing facing,
  Window window,
  int trimColor,
) {
  if (room.id == 'hall' || window.frosted || window.h < 1.0) return;
  final wallWidth = facing == Facing.north || facing == Facing.south
      ? size.x
      : size.z;
  final u0 = window.offset;
  final u1 = window.offset + window.w;
  final rodBottom = _min(size.y - 0.16, window.sill + window.h + 0.08);
  final rodTop = _min(size.y - 0.11, rodBottom + 0.045);
  final rodColor = room.id == 'spare-room' ? 0x4D4036 : 0x6D5745;
  final fabric = room.id == 'kitchen' ? 0xA79B89 : 0x756879;
  _wallBox(
    builder,
    room,
    size,
    facing,
    _max(0, u0 - 0.13),
    _min(wallWidth, u1 + 0.13),
    rodBottom,
    rodTop,
    0.055,
    rodColor,
  );
  final panelBottom = _max(0.24, window.sill - 0.18);
  final panelTop = _min(size.y - 0.20, window.sill + window.h + 0.03);
  final left0 = _max(0, u0 - 0.11);
  final left1 = _min(wallWidth, u0 + 0.10);
  final right0 = _max(0, u1 - 0.10);
  final right1 = _min(wallWidth, u1 + 0.11);
  if (panelTop > panelBottom) {
    _wallBox(
      builder,
      room,
      size,
      facing,
      left0,
      left1,
      panelBottom,
      panelTop,
      0.045,
      fabric,
    );
    _wallBox(
      builder,
      room,
      size,
      facing,
      right0,
      right1,
      panelBottom,
      panelTop,
      0.045,
      fabric,
    );
    final tieY = panelBottom + (panelTop - panelBottom) * 0.55;
    const tie = 0.035;
    _wallBox(
      builder,
      room,
      size,
      facing,
      _max(left0, left1 - tie),
      left1,
      tieY - tie,
      tieY + tie,
      0.065,
      trimColor,
    );
    _wallBox(
      builder,
      room,
      size,
      facing,
      right0,
      _min(right1, right0 + tie),
      tieY - tie,
      tieY + tie,
      0.065,
      trimColor,
    );
  }
}

void _addClippedBand(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Facing facing,
  double wallWidth,
  List<_Opening> openings,
  double v0,
  double v1,
  double depth,
  int color,
) {
  if (v0 < 0 || v1 > size.y || v1 <= v0) return;
  for (final span in _uncoveredSpans(wallWidth, openings, v0, v1)) {
    if (span.u1 - span.u0 < 0.025) continue;
    _wallBox(
      builder,
      room,
      size,
      facing,
      span.u0,
      span.u1,
      v0,
      v1,
      depth,
      color,
    );
  }
}

List<_Span> _uncoveredSpans(
  double width,
  List<_Opening> openings,
  double v0,
  double v1,
) {
  var spans = <_Span>[_Span(0, width)];
  for (final opening in openings) {
    if (opening.v1 <= v0 || opening.v0 >= v1) continue;
    final next = <_Span>[];
    for (final span in spans) {
      if (opening.u1 <= span.u0 || opening.u0 >= span.u1) {
        next.add(span);
        continue;
      }
      if (opening.u0 > span.u0) {
        next.add(_Span(span.u0, opening.u0));
      }
      if (opening.u1 < span.u1) {
        next.add(_Span(opening.u1, span.u1));
      }
    }
    spans = next;
  }
  return spans;
}

void _addOpeningTrim(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Facing facing,
  double wallWidth,
  _Opening opening,
  int color,
) {
  const frame = 0.075;
  const depth = 0.04;
  final left = _max(0, opening.u0 - frame);
  final right = _min(wallWidth, opening.u1 + frame);
  final bottom = _max(0.018, opening.v0);
  final top = _min(size.y - 0.012, opening.v1 + frame);
  if (opening.u0 > 0) {
    _wallBox(
      builder,
      room,
      size,
      facing,
      left,
      opening.u0,
      bottom,
      top,
      depth,
      color,
    );
  }
  if (opening.u1 < wallWidth) {
    _wallBox(
      builder,
      room,
      size,
      facing,
      opening.u1,
      right,
      bottom,
      top,
      depth,
      color,
    );
  }
  if (opening.v1 < size.y) {
    _wallBox(
      builder,
      room,
      size,
      facing,
      left,
      right,
      opening.v1,
      top,
      depth,
      color,
    );
  }
  if (opening.v0 > 0) {
    _wallBox(
      builder,
      room,
      size,
      facing,
      left,
      right,
      _max(0, opening.v0 - frame),
      opening.v0,
      depth + 0.025,
      color,
    );
  }
}

void _addCeilingOrnament(StaticMeshBuilder builder, Room room, Vec3 size) {
  final centerX = room.origin.x + size.x * 0.5;
  final centerZ = room.origin.z + size.z * 0.5;
  final ceilingY = room.origin.y + size.y;
  if (room.id != 'living-room' && room.id != 'hall' && room.id != 'bedroom') {
    if (!const {
      'kitchen',
      'landing',
      'bathroom',
      'spare-room',
    }.contains(room.id)) {
      return;
    }
    final fixtureX = room.id == 'kitchen'
        ? room.origin.x + size.x * 0.58
        : centerX;
    final fixtureZ = room.id == 'bathroom'
        ? room.origin.z + size.z * 0.42
        : centerZ;
    final stemBottom = _max(room.origin.y + 1.55, ceilingY - 0.58);
    _box(
      builder,
      Vec3(fixtureX - 0.025, stemBottom, fixtureZ - 0.025),
      Vec3(fixtureX + 0.025, ceilingY - 0.08, fixtureZ + 0.025),
      0x403B34,
    );
    _box(
      builder,
      Vec3(fixtureX - 0.14, stemBottom - 0.10, fixtureZ - 0.14),
      Vec3(fixtureX + 0.14, stemBottom, fixtureZ + 0.14),
      room.id == 'bathroom' ? 0xC4BFB3 : 0x746051,
    );
    _box(
      builder,
      Vec3(fixtureX - 0.09, stemBottom - 0.16, fixtureZ - 0.09),
      Vec3(fixtureX + 0.09, stemBottom - 0.10, fixtureZ + 0.09),
      0xB8AA93,
    );
    return;
  }
  final color = room.id == 'living-room' ? 0xD1C7B4 : 0xC6BDAA;
  _box(
    builder,
    Vec3(centerX - 0.24, ceilingY - 0.018, centerZ - 0.24),
    Vec3(centerX + 0.24, ceilingY, centerZ + 0.24),
    color,
  );
  _box(
    builder,
    Vec3(centerX - 0.15, ceilingY - 0.034, centerZ - 0.15),
    Vec3(centerX + 0.15, ceilingY - 0.018, centerZ + 0.15),
    color,
  );
  _box(
    builder,
    Vec3(centerX - 0.055, ceilingY - 0.048, centerZ - 0.055),
    Vec3(centerX + 0.055, ceilingY - 0.034, centerZ + 0.055),
    color,
  );
}

void _wallBox(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Facing facing,
  double u0,
  double u1,
  double v0,
  double v1,
  double depth,
  int color,
) {
  final x = room.origin.x;
  final y = room.origin.y;
  final z = room.origin.z;
  switch (facing) {
    case Facing.north:
      _box(
        builder,
        Vec3(x + u0, y + v0, z),
        Vec3(x + u1, y + v1, z + depth),
        color,
      );
      return;
    case Facing.south:
      _box(
        builder,
        Vec3(x + u0, y + v0, z + size.z - depth),
        Vec3(x + u1, y + v1, z + size.z),
        color,
      );
      return;
    case Facing.east:
      _box(
        builder,
        Vec3(x + size.x - depth, y + v0, z + u0),
        Vec3(x + size.x, y + v1, z + u1),
        color,
      );
      return;
    case Facing.west:
      _box(
        builder,
        Vec3(x, y + v0, z + u0),
        Vec3(x + depth, y + v1, z + u1),
        color,
      );
      return;
  }
}

void _box(StaticMeshBuilder builder, Vec3 min, Vec3 max, int color) {
  final p000 = Vec3(min.x, min.y, min.z);
  final p100 = Vec3(max.x, min.y, min.z);
  final p110 = Vec3(max.x, max.y, min.z);
  final p010 = Vec3(min.x, max.y, min.z);
  final p001 = Vec3(min.x, min.y, max.z);
  final p101 = Vec3(max.x, min.y, max.z);
  final p111 = Vec3(max.x, max.y, max.z);
  final p011 = Vec3(min.x, max.y, max.z);
  builder
    ..quad(p100, p000, p010, p110, color)
    ..quad(p001, p101, p111, p011, color)
    ..quad(p000, p001, p011, p010, color)
    ..quad(p101, p100, p110, p111, color)
    ..quad(p000, p100, p101, p001, color)
    ..quad(p010, p011, p111, p110, color);
}

double _min(double a, double b) => a < b ? a : b;
double _max(double a, double b) => a > b ? a : b;

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
  // Keep an authored UV-bearing interior face on top of the structural wall
  // volume. The tiny room-side offset avoids z-fighting with the box cap while
  // leaving the collision plane and exterior thickness unchanged.
  const inset = 0.003;
  final roomSide = switch (facing) {
    Facing.north => Vec3(0, 0, inset),
    Facing.south => Vec3(0, 0, -inset),
    Facing.east => Vec3(-inset, 0, 0),
    Facing.west => Vec3(inset, 0, 0),
  };
  builder.quad(
    a + roomSide,
    b + roomSide,
    c + roomSide,
    d + roomSide,
    0x8B8B8B,
    uScale: (u1 - u0) / texWorldSize,
    vScale: (v1 - v0) / texWorldSize,
  );
  // Keep the canonical interior face at the room boundary, then cap a real
  // structural section outward. This gives every wall visible reveal/contact
  // thickness while preserving the collision planes used by simulation.
  final thickness = _wallThickness(room, facing);
  final min = switch (facing) {
    Facing.north => Vec3(a.x, a.y, a.z - thickness),
    Facing.south => Vec3(b.x, a.y, a.z),
    Facing.east => Vec3(a.x, a.y, d.z),
    Facing.west => Vec3(a.x - thickness, a.y, a.z),
  };
  final max = switch (facing) {
    Facing.north => Vec3(b.x, c.y, a.z),
    Facing.south => Vec3(a.x, c.y, a.z + thickness),
    Facing.east => Vec3(a.x + thickness, c.y, b.z),
    Facing.west => Vec3(d.x, c.y, b.z),
  };
  _box(builder, min, max, 0x8B8B8B);
}

double _wallThickness(Room room, Facing facing) {
  final atOuterEdge = switch (facing) {
    Facing.west => room.origin.x == 0,
    Facing.north => room.origin.z == 0,
    Facing.east => (room.origin.x + room.size.x - 10.5).abs() < 0.001,
    Facing.south => (room.origin.z + room.size.z - 10.5).abs() < 0.001,
  };
  return atOuterEdge ? houseExteriorWallThickness : housePartitionWallThickness;
}

void _addDoorFrame(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Portal portal,
) {
  final facing = portal.facingFor(room.id);
  final u0 = portal.offsetFor(room.id);
  final u1 = u0 + portal.width;
  final y = room.origin.y;
  final frame = 0.075;
  final depth = 0.12;
  final frameColor = _doorFrameColor(portal);
  final top = _min(size.y, portal.height);
  switch (facing) {
    case Facing.north:
      _box(
        builder,
        Vec3(room.origin.x + _max(0, u0 - frame), y, room.origin.z),
        Vec3(room.origin.x + u0, y + top, room.origin.z + depth),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x + u1, y, room.origin.z),
        Vec3(
          room.origin.x + _min(size.x, u1 + frame),
          y + top,
          room.origin.z + depth,
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(
          room.origin.x + _max(0, u0 - frame),
          y + _max(0, top - frame),
          room.origin.z,
        ),
        Vec3(
          room.origin.x + _min(size.x, u1 + frame),
          y + top,
          room.origin.z + depth,
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x + u0, y, room.origin.z),
        Vec3(room.origin.x + u1, y + 0.05, room.origin.z + depth),
        frameColor,
      );
    case Facing.south:
      _box(
        builder,
        Vec3(
          room.origin.x + _max(0, u0 - frame),
          y,
          room.origin.z + size.z - depth,
        ),
        Vec3(room.origin.x + u0, y + top, room.origin.z + size.z),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x + u1, y, room.origin.z + size.z - depth),
        Vec3(
          room.origin.x + _min(size.x, u1 + frame),
          y + top,
          room.origin.z + size.z,
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(
          room.origin.x + _max(0, u0 - frame),
          y + _max(0, top - frame),
          room.origin.z + size.z - depth,
        ),
        Vec3(
          room.origin.x + _min(size.x, u1 + frame),
          y + top,
          room.origin.z + size.z,
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x + u0, y, room.origin.z + size.z - depth),
        Vec3(room.origin.x + u1, y + 0.05, room.origin.z + size.z),
        frameColor,
      );
    case Facing.east:
      _box(
        builder,
        Vec3(
          room.origin.x + size.x - depth,
          y,
          room.origin.z + _max(0, u0 - frame),
        ),
        Vec3(room.origin.x + size.x, y + top, room.origin.z + u0),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x + size.x - depth, y, room.origin.z + u1),
        Vec3(
          room.origin.x + size.x,
          y + top,
          room.origin.z + _min(size.z, u1 + frame),
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(
          room.origin.x + size.x - depth,
          y + _max(0, top - frame),
          room.origin.z + _max(0, u0 - frame),
        ),
        Vec3(
          room.origin.x + size.x,
          y + top,
          room.origin.z + _min(size.z, u1 + frame),
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x + size.x - depth, y, room.origin.z + u0),
        Vec3(room.origin.x + size.x, y + 0.05, room.origin.z + u1),
        frameColor,
      );
    case Facing.west:
      _box(
        builder,
        Vec3(room.origin.x, y, room.origin.z + _max(0, u0 - frame)),
        Vec3(room.origin.x + depth, y + top, room.origin.z + u0),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x, y, room.origin.z + u1),
        Vec3(
          room.origin.x + depth,
          y + top,
          room.origin.z + _min(size.z, u1 + frame),
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(
          room.origin.x,
          y + _max(0, top - frame),
          room.origin.z + _max(0, u0 - frame),
        ),
        Vec3(
          room.origin.x + depth,
          y + top,
          room.origin.z + _min(size.z, u1 + frame),
        ),
        frameColor,
      );
      _box(
        builder,
        Vec3(room.origin.x, y, room.origin.z + u0),
        Vec3(room.origin.x + depth, y + 0.05, room.origin.z + u1),
        frameColor,
      );
  }
  // Legacy geometry still receives the complete door in `RoomGeometry.doors`;
  // Pixeldart extracts the leaf through [buildDoorLeafGeometry] instead.
  _addDoorLeaf(builder, room, size, portal, frameColor);
  _addDoorHardware(builder, room, size, portal);
}

int _doorFrameColor(Portal portal) =>
    portal.doorKit == 'kit-front-door-recessed'
    ? 0x4D3024
    : portal.doorKit == 'kit-cellar-door-grille'
    ? 0x57534A
    : 0x6A5141;

void _addDoorHardware(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Portal portal,
) {
  final u0 = portal.offsetFor(room.id);
  final u1 = u0 + portal.width;
  final handleU = u0 + portal.width * 0.72;
  final handleY = _min(size.y - 0.34, _min(portal.height, 1.02));
  final facing = portal.facingFor(room.id);
  const iron = 0x403C37;
  _wallBox(
    builder,
    room,
    size,
    facing,
    _max(0, handleU - 0.035),
    _min(
      facing == Facing.north || facing == Facing.south ? size.x : size.z,
      handleU + 0.035,
    ),
    _max(0.12, handleY - 0.035),
    _min(size.y - 0.05, handleY + 0.035),
    0.16,
    iron,
  );
  final hingeU = portal.hingeAtStart ? u0 + 0.11 : u1 - 0.11;
  final hingeHeight = _min(size.y - 0.20, _min(portal.height, size.y));
  for (final hingeY in [0.46, hingeHeight * 0.50, hingeHeight - 0.46]) {
    if (hingeY <= 0.12 || hingeY >= size.y - 0.08) continue;
    _wallBox(
      builder,
      room,
      size,
      facing,
      _max(0, hingeU - 0.026),
      _min(
        facing == Facing.north || facing == Facing.south ? size.x : size.z,
        hingeU + 0.026,
      ),
      hingeY - 0.075,
      hingeY + 0.075,
      0.11,
      iron,
    );
  }
  if (portal.doorKit == 'kit-front-door-recessed') {
    _wallBox(
      builder,
      room,
      size,
      facing,
      u0 + 0.08,
      _max(u0 + 0.10, u1 - 0.08),
      0.16,
      0.25,
      0.13,
      iron,
    );
    _wallBox(
      builder,
      room,
      size,
      facing,
      u0 + portal.width * 0.34,
      u0 + portal.width * 0.66,
      _min(size.y - 0.36, 1.46),
      _min(size.y - 0.30, 1.52),
      0.15,
      0x8B7655,
    );
  }
}

void _addDoorLeaf(
  StaticMeshBuilder builder,
  Room room,
  Vec3 size,
  Portal portal,
  int color,
) {
  final facing = portal.facingFor(room.id);
  final u0 = portal.offsetFor(room.id);
  final y = room.origin.y;
  final h = _min(size.y, portal.height);
  const leafThickness = 0.055;
  if (portal.open) {
    // A passable door is modelled swung into the room from its hinge edge.
    switch (facing) {
      case Facing.north:
        _box(
          builder,
          Vec3(room.origin.x + u0, y, room.origin.z),
          Vec3(
            room.origin.x + u0 + leafThickness,
            y + h,
            room.origin.z + portal.width,
          ),
          color,
        );
      case Facing.south:
        _box(
          builder,
          Vec3(room.origin.x + u0, y, room.origin.z + size.z - portal.width),
          Vec3(
            room.origin.x + u0 + leafThickness,
            y + h,
            room.origin.z + size.z,
          ),
          color,
        );
      case Facing.east:
        _box(
          builder,
          Vec3(room.origin.x + size.x - portal.width, y, room.origin.z + u0),
          Vec3(
            room.origin.x + size.x,
            y + h,
            room.origin.z + u0 + leafThickness,
          ),
          color,
        );
      case Facing.west:
        _box(
          builder,
          Vec3(room.origin.x, y, room.origin.z + u0),
          Vec3(
            room.origin.x + portal.width,
            y + h,
            room.origin.z + u0 + leafThickness,
          ),
          color,
        );
    }
  } else {
    switch (facing) {
      case Facing.north:
        _box(
          builder,
          Vec3(room.origin.x + u0, y, room.origin.z),
          Vec3(
            room.origin.x + u0 + portal.width,
            y + h,
            room.origin.z + leafThickness,
          ),
          color,
        );
      case Facing.south:
        _box(
          builder,
          Vec3(room.origin.x + u0, y, room.origin.z + size.z - leafThickness),
          Vec3(
            room.origin.x + u0 + portal.width,
            y + h,
            room.origin.z + size.z,
          ),
          color,
        );
      case Facing.east:
        _box(
          builder,
          Vec3(room.origin.x + size.x - leafThickness, y, room.origin.z + u0),
          Vec3(
            room.origin.x + size.x,
            y + h,
            room.origin.z + u0 + portal.width,
          ),
          color,
        );
      case Facing.west:
        _box(
          builder,
          Vec3(room.origin.x, y, room.origin.z + u0),
          Vec3(
            room.origin.x + leafThickness,
            y + h,
            room.origin.z + u0 + portal.width,
          ),
          color,
        );
    }
  }
}

final class _Opening {
  final double u0, u1, v0, v1;

  const _Opening(this.u0, this.u1, this.v0, this.v1);

  bool contains(double u, double v) => u > u0 && u < u1 && v > v0 && v < v1;
}

final class _Span {
  final double u0;
  final double u1;

  const _Span(this.u0, this.u1);
}
