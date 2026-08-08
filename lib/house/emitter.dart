import '../engine/math3.dart';
import '../engine/renderer.dart';
import 'geometry.dart';
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
    final geometry = buildRoomGeometry(house, room);
    return [
      renderer.addStaticMesh(geometry.floor, materialIndex: 1),
      renderer.addStaticMesh(geometry.ceiling, materialIndex: 2),
      renderer.addStaticMesh(geometry.walls, materialIndex: 0),
    ];
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
