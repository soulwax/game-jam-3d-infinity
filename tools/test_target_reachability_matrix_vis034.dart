import 'package:quarantine/automation/target_reachability_matrix.dart';
import 'package:quarantine/engine/vec3.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  check(TargetReachabilityMatrix.totalCount == 14, 'all 14 target descriptors exist');

  final mantle = TargetReachabilityMatrix.getTarget('mantle-living');
  check(mantle != null, 'mantle-living exists');
  check(mantle!.roomId == 'living', 'mantle is in living room');
  check(mantle.actionToken == 'KeyE', 'mantle actionToken is KeyE');

  // Close approach position (within 2m)
  final closePos = Vec3(12.1, 1.2, 3.5);
  check(TargetReachabilityMatrix.isReachable(targetId: 'mantle-living', playerPosition: closePos), 'close position is reachable');

  // Far approach position (5m away)
  final farPos = Vec3(0.0, 1.2, 0.0);
  check(!TargetReachabilityMatrix.isReachable(targetId: 'mantle-living', playerPosition: farPos), 'far position is not reachable');

  final json = mantle.toJson();
  check(json['targetId'] == 'mantle-living', 'JSON carries targetId');

  print('target reachability matrix VIS-034 / T-09: 14 targets, reachability evaluation, and JSON pass');
}
