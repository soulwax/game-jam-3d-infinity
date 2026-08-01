import '../config.dart';
import '../engine/math3.dart';
import '../engine/renderer.dart';
import 'house.dart';
import 'lighting.dart';
import 'room.dart';

class RoomEmitter {
  final House house;
  final Renderer renderer;
  late final HouseLighting _lighting;
  final Map<String, List<int>> _meshHandles = {};

  RoomEmitter(this.house, this.renderer) {
    _lighting = HouseLighting(house);
    for (final room in house.rooms) {
      _meshHandles[room.id] = _buildRoom(room);
    }
  }

  void rebuildRoom(String roomId) {
    final room = house.byId(roomId);
    if (room == null) {
      return;
    }
    final old = _meshHandles[roomId];
    if (old != null) {
      for (final handle in old) {
        renderer.freeStatic(handle);
      }
    }
    _meshHandles[roomId] = _buildRoom(room);
  }

  List<int> _buildRoom(Room room) {
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
      _addWall(walls, room, s, facing);
    }
    return [
      renderer.addStaticMesh(floor.build(), materialIndex: 1),
      renderer.addStaticMesh(ceiling.build(), materialIndex: 2),
      renderer.addStaticMesh(walls.build(), materialIndex: 0),
    ];
  }

  void _addWall(
    StaticMeshBuilder builder,
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

  Set<String> getVisibleRooms(String currentRoomId) {
    final current = house.byId(currentRoomId);
    if (current == null) {
      return const {};
    }
    final visible = <String>{current.id};
    for (final portal in house.portalsFor(current.id)) {
      final adjacentId = portal.other(current.id);
      if (!portal.passable ||
          adjacentId == null ||
          house.byId(adjacentId) == null) {
        continue;
      }
      visible.add(adjacentId);
    }
    return visible;
  }

  void draw(String currentRoomId, Vec3 simulationEye) {
    final visible = getVisibleRooms(currentRoomId);
    renderer.setPointLights(_lighting.visibleMantles(visible, simulationEye));
    for (final roomId in visible) {
      final handles = _meshHandles[roomId];
      if (handles == null) {
        continue;
      }
      for (final handle in handles) {
        renderer.drawStatic(handle);
      }
    }
  }
}

class _Opening {
  final double u0;
  final double u1;
  final double v0;
  final double v1;

  const _Opening(this.u0, this.u1, this.v0, this.v1);

  bool contains(double u, double v) => u > u0 && u < u1 && v > v0 && v < v1;
}
