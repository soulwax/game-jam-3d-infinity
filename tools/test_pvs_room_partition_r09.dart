import 'package:quarantine/engine/pvs_room_partition.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

class TestSceneItem {
  final String id;
  final String roomId;
  TestSceneItem(this.id, this.roomId);
}

void main() {
  final pvs = PvsRoomPartition();

  // Hall sees kitchen, living, cellar, exterior
  final hallVisible = pvs.getVisibleRooms(currentRoomId: 'hall');
  check(hallVisible.contains('hall'), 'hall contains hall');
  check(hallVisible.contains('kitchen'), 'hall contains kitchen');
  check(hallVisible.contains('living'), 'hall contains living');
  check(hallVisible.contains('cellar'), 'hall contains cellar');

  // Kitchen sees kitchen and hall only
  final kitchenVisible = pvs.getVisibleRooms(currentRoomId: 'kitchen');
  check(kitchenVisible.contains('kitchen'), 'kitchen contains kitchen');
  check(kitchenVisible.contains('hall'), 'kitchen contains hall');
  check(!kitchenVisible.contains('living'), 'kitchen does not contain living directly');
  check(!kitchenVisible.contains('cellar'), 'kitchen does not contain cellar directly');

  // Item filtering
  final items = [
    TestSceneItem('table', 'kitchen'),
    TestSceneItem('bed', 'living'),
    TestSceneItem('pipe', 'cellar'),
  ];

  final filteredForKitchen = pvs.filterItems(
    items: items,
    getRoomId: (i) => i.roomId,
    visibleRooms: kitchenVisible,
  );

  check(filteredForKitchen.length == 1, 'kitchen PVS selects 1 item');
  check(filteredForKitchen.first.id == 'table', 'kitchen PVS selects table');

  print('pvs room partition VIS-009 / R-09: room graph, adjacency visibility, and item filtering pass');
}
