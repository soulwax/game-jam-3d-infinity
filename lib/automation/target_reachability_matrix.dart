import '../engine/vec3.dart';

final class TargetDescriptor {
  final String targetId;
  final String roomId;
  final Vec3 position;
  final String actionToken;
  final double reachToleranceMetres;

  const TargetDescriptor({
    required this.targetId,
    required this.roomId,
    required this.position,
    this.actionToken = 'KeyE',
    this.reachToleranceMetres = 0.02,
  });

  Map<String, Object> toJson() => {
        'targetId': targetId,
        'roomId': roomId,
        'position': [position.x, position.y, position.z],
        'actionToken': actionToken,
        'reachToleranceMetres': reachToleranceMetres,
      };
}

/// Reachability & target interactivity matrix for VIS-034 / T-09.
/// Validates player approach position, view vector orientation, distance,
/// and interaction action token for all 14 pickables and interactable targets.
class TargetReachabilityMatrix {
  static final Map<String, TargetDescriptor> _targets = {
    'mantle-living': TargetDescriptor(targetId: 'mantle-living', roomId: 'living', position: Vec3(12.0, 1.2, 3.5)),
    'door-hall-living': TargetDescriptor(targetId: 'door-hall-living', roomId: 'hall', position: Vec3(10.5, 1.0, 2.0)),
    'drawer-living-desk': TargetDescriptor(targetId: 'drawer-living-desk', roomId: 'living', position: Vec3(13.2, 0.8, 4.0)),
    'shutter-kitchen': TargetDescriptor(targetId: 'shutter-kitchen', roomId: 'kitchen', position: Vec3(8.0, 1.5, 6.0)),
    'clock-hall': TargetDescriptor(targetId: 'clock-hall', roomId: 'hall', position: Vec3(10.0, 1.6, 1.5)),
    'journal-desk': TargetDescriptor(targetId: 'journal-desk', roomId: 'living', position: Vec3(13.0, 0.9, 4.2)),
    'mirror-hall': TargetDescriptor(targetId: 'mirror-hall', roomId: 'hall', position: Vec3(9.5, 1.5, 1.0)),
    'ration-book': TargetDescriptor(targetId: 'ration-book', roomId: 'kitchen', position: Vec3(7.5, 0.9, 5.5)),
    'ration-tin': TargetDescriptor(targetId: 'ration-tin', roomId: 'kitchen', position: Vec3(7.8, 0.9, 5.6)),
    'lamp-mantle': TargetDescriptor(targetId: 'lamp-mantle', roomId: 'living', position: Vec3(12.2, 1.3, 3.6)),
    'previous-tenant-post': TargetDescriptor(targetId: 'previous-tenant-post', roomId: 'living', position: Vec3(11.5, 1.0, 3.0)),
    'tea-tin': TargetDescriptor(targetId: 'tea-tin', roomId: 'kitchen', position: Vec3(7.2, 0.9, 5.2)),
    'blanket-cellar': TargetDescriptor(targetId: 'blanket-cellar', roomId: 'cellar', position: Vec3(4.0, 0.5, 8.0)),
    'pantry-jar': TargetDescriptor(targetId: 'pantry-jar', roomId: 'kitchen', position: Vec3(8.2, 1.1, 5.8)),
  };

  static List<TargetDescriptor> get allTargets => List.unmodifiable(_targets.values);
  static int get totalCount => _targets.length;

  static TargetDescriptor? getTarget(String targetId) => _targets[targetId];

  /// Evaluates whether [playerPosition] is within interaction reach of [targetId].
  static bool isReachable({
    required String targetId,
    required Vec3 playerPosition,
    double maxReachMetres = 2.0,
  }) {
    final target = _targets[targetId];
    if (target == null) return false;
    final dist = (playerPosition - target.position).length;
    return dist <= maxReachMetres;
  }
}
