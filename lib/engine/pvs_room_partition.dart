/// Room PVS (Potentially Visible Set) partition and visibility filter for VIS-009 / R-09.
class PvsRoomPartition {
  final Map<String, Set<String>> _adjacencyGraph = {};

  PvsRoomPartition() {
    // Default house room topology
    addConnection('hall', 'kitchen');
    addConnection('hall', 'living');
    addConnection('hall', 'cellar');
    addConnection('hall', 'exterior');
  }

  void addConnection(String roomA, String roomB) {
    _adjacencyGraph.putIfAbsent(roomA, () => <String>{}).add(roomB);
    _adjacencyGraph.putIfAbsent(roomB, () => <String>{}).add(roomA);
  }

  /// Calculates visible rooms for a camera in [currentRoomId].
  /// Includes the current room and connected rooms unless blocked by a closed portal.
  Set<String> getVisibleRooms({
    required String currentRoomId,
    Set<String> closedPortalRooms = const {},
  }) {
    final visible = <String>{currentRoomId};
    final neighbors = _adjacencyGraph[currentRoomId] ?? const <String>{};

    for (final neighbor in neighbors) {
      if (!closedPortalRooms.contains(neighbor)) {
        visible.add(neighbor);
      }
    }
    return visible;
  }

  /// Filters a list of scene items by room visibility.
  List<T> filterItems<T>({
    required List<T> items,
    required String Function(T item) getRoomId,
    required Set<String> visibleRooms,
  }) => items.where((item) => visibleRooms.contains(getRoomId(item))).toList();
}
