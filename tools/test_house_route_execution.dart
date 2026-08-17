import 'package:quarantine/automation/automation_route.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/collision.dart';
import 'house_fixture.dart';

void main() {
  final house = loadAuthoredHouse(seed: 42);
  final validator = AutomationRouteValidator(house: house);
  final routes = [
    AutomationRoutePlan.fromTopology(
      id: 'ground-circuit',
      house: house,
      rooms: const ['hall', 'living-room', 'kitchen'],
      portals: const ['hall-living', 'kitchen-living'],
    ),
    AutomationRoutePlan.upperCircuit(house),
  ];
  for (final route in routes) {
    final issues = validator.validate(route);
    if (issues.isNotEmpty) {
      throw StateError('${route.id} is not executable: $issues');
    }
  }

  final stair = house.stairs.single;
  final capsule = Capsule(
    base: stair.lowerEye - Vec3(0, 1.35, 0),
    tip: stair.lowerEye - Vec3(0, 0.15, 0),
  );
  final first = capsule.move(
    house,
    'hall',
    stair.lowerEye,
    stair.upperEye - stair.lowerEye,
  );
  if (first.roomId != 'landing' || capsule.activeStairId != null) {
    throw StateError('authored stair route did not reach the landing');
  }
  capsule.restoreActiveStair(
    house: house,
    stairId: stair.id,
    progress: 0.5,
    currentRoom: 'hall',
    eye: stair.lowerEye,
  );
  if (capsule.activeStairId != stair.id || capsule.activeStairProgress != 0.5) {
    throw StateError('stair save/restore did not preserve traversal state');
  }
  print('house route execution: ground/upper topology and stair restore pass');
}
