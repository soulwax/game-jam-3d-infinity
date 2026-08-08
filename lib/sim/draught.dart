enum DraughtOpeningKind { door, window }

class DraughtEdge {
  final String id;
  final String fromRoom;
  final String toRoom;
  final DraughtOpeningKind kind;
  final bool open;
  final double strength;

  const DraughtEdge({
    required this.id,
    required this.fromRoom,
    required this.toRoom,
    required this.kind,
    required this.open,
    this.strength = 1.0,
  }) : assert(strength >= 0);
}

/// Deterministic connected-space draught facts. It contains no geometry or
/// presentation handles; callers provide the authored opening state.
class DraughtGraph {
  final List<DraughtEdge> edges;

  DraughtGraph(Iterable<DraughtEdge> source)
    : edges = List.unmodifiable(
        source.toList()..sort((a, b) => a.id.compareTo(b.id)),
      ) {
    if (edges.any((edge) => !edge.strength.isFinite)) {
      throw const FormatException('draught strengths must be finite');
    }
  }

  Map<String, double> flowFrom(String sourceRoom, {double distance = 0}) {
    if (!distance.isFinite || distance < 0) {
      throw ArgumentError.value(
        distance,
        'distance',
        'must be finite and >= 0',
      );
    }
    final flow = <String, double>{sourceRoom: 1.0};
    final queue = <String>[sourceRoom];
    for (var index = 0; index < queue.length; index++) {
      final room = queue[index];
      final current = flow[room]!;
      for (final edge in edges) {
        if (!edge.open || edge.strength == 0) continue;
        String? next;
        if (edge.fromRoom == room) next = edge.toRoom;
        if (edge.toRoom == room) next = edge.fromRoom;
        if (next == null) continue;
        final attenuation = edge.strength / (1.0 + distance);
        final candidate = (current * attenuation).clamp(0.0, 1.0).toDouble();
        if (candidate <= (flow[next] ?? 0.0)) continue;
        flow[next] = candidate;
        if (!queue.contains(next)) queue.add(next);
      }
    }
    return Map.unmodifiable(flow);
  }
}
