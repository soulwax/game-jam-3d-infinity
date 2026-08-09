import 'dart:io';

import 'package:quarantine/automation/automation_route.dart';
import 'package:quarantine/house/house.dart';

void main() {
  final house = House(42017);
  final ground = AutomationRoutePlan.fromTopology(
    id: 'ground-circuit',
    house: house,
    rooms: const ['hall', 'living-room', 'kitchen', 'hall'],
    portals: const ['hall-living', 'kitchen-living', 'hall-kitchen'],
    requiredOpenPortals: const {
      'hall-living',
      'kitchen-living',
      'hall-kitchen',
    },
  );
  final validator = AutomationRouteValidator(house: house);
  final errors = validator.validate(ground);
  _expect(errors.isEmpty, 'ground route clears canonical geometry: $errors');

  final upper = AutomationRoutePlan.fromTopology(
    id: 'upper-circuit',
    house: house,
    rooms: const [
      'hall',
      'landing',
      'bedroom',
      'landing',
      'bathroom',
      'landing',
      'spare-room',
      'landing',
    ],
    portals: const [
      'hall-landing',
      'landing-bedroom',
      'landing-bedroom',
      'landing-bathroom',
      'landing-bathroom',
      'landing-spare',
      'landing-spare',
    ],
  );
  _expect(validator.validate(upper).isEmpty, 'upper route clears geometry');

  final cellar = AutomationRoutePlan.fromTopology(
    id: 'cellar-return',
    house: house,
    rooms: const ['hall', 'cellar', 'hall'],
    portals: const ['hall-cellar', 'hall-cellar'],
  );
  _expect(validator.validate(cellar).isEmpty, 'cellar route clears geometry');

  final bad = AutomationRoutePlan(
    id: 'bad',
    rooms: const ['hall', 'living-room'],
    portals: const ['hall-cellar'],
    waypoints: ground.waypoints.take(2).toList(),
  );
  _expect(
    validator.validate(bad).isNotEmpty,
    'wrong portal topology is rejected',
  );
  stdout.writeln(
    'automation route: canonical approaches, capsule clearance, topology pass',
  );
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
