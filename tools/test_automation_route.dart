import 'dart:io';

import 'package:quarantine/automation/automation_route.dart';
import 'package:quarantine/automation/automation_scenario.dart';
import 'package:quarantine/engine/math3.dart';
import 'house_fixture.dart';

void main() {
  final house = loadAuthoredHouse(seed: 42017);
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
  final authoredUpper = AutomationScenario.decode(
    File(
      'assets/house/verification/scenarios/upper-circuit.json',
    ).readAsStringSync(),
  );
  final authoredUpperRoute = authoredUpper.routes.single;
  final authoredUpperPlan = AutomationRoutePlan(
    id: authoredUpperRoute.id,
    rooms: authoredUpperRoute.rooms,
    portals: authoredUpperRoute.portals,
    waypoints: [
      for (final waypoint in authoredUpperRoute.waypoints)
        AutomationRouteWaypoint(
          id: waypoint.id,
          room: waypoint.room,
          eye: Vec3(
            waypoint.position.x,
            waypoint.position.y,
            waypoint.position.z,
          ),
          radius: waypoint.radius,
        ),
    ],
  );
  final authoredUpperErrors = validator.validate(authoredUpperPlan);
  _expect(
    authoredUpperErrors.isEmpty,
    'authored upper route clears canonical geometry: $authoredUpperErrors',
  );
  _expect(
    authoredUpperRoute.waypoints.length == 14,
    'authored upper route has both-way branch checkpoints',
  );

  final cellar = AutomationRoutePlan.fromTopology(
    id: 'cellar-return',
    house: house,
    rooms: const ['hall', 'cellar', 'hall'],
    portals: const ['hall-cellar', 'hall-cellar'],
  );
  final cellarDiagnostics = validator.diagnose(cellar);
  _expect(
    cellarDiagnostics.any(
      (issue) => issue.code == AutomationRouteIssueCode.blockedPortal,
    ),
    'cellar route reports its closed/stuck portal blocker',
  );
  _expect(
    cellarDiagnostics
        .where((issue) => issue.code == AutomationRouteIssueCode.blockedPortal)
        .every((issue) => issue.nearestObstruction == 'portal:hall-cellar'),
    'cellar blocker identifies the canonical portal',
  );

  final bad = AutomationRoutePlan(
    id: 'bad',
    rooms: const ['hall', 'living-room'],
    portals: const ['hall-cellar'],
    waypoints: ground.waypoints.take(1).toList(),
  );
  _expect(
    validator.validate(bad).isNotEmpty,
    'wrong portal topology is rejected',
  );
  final missingCrossing = AutomationRoutePlan(
    id: 'missing-crossing',
    rooms: const ['hall', 'living-room'],
    portals: const ['hall-living'],
    waypoints: ground.waypoints.take(1).toList(),
  );
  final crossingDiagnostics = validator.diagnose(missingCrossing);
  _expect(
    crossingDiagnostics.any(
      (issue) =>
          issue.code == AutomationRouteIssueCode.topology &&
          issue.message.contains('waypoint room sequence'),
    ),
    'missing waypoint room crossing is diagnosed',
  );
  final blocked = AutomationRoutePlan(
    id: 'blocked-waypoint',
    rooms: const ['hall'],
    portals: const [],
    waypoints: [
      AutomationRouteWaypoint(
        id: 'outside-hall',
        room: 'hall',
        eye: Vec3(6.0, 1.65, 1.0),
      ),
    ],
  );
  final diagnostics = validator.diagnose(blocked);
  _expect(
    diagnostics.length == 1 &&
        diagnostics.single.code == AutomationRouteIssueCode.blockedWaypoint,
    'blocked waypoint has a typed diagnostic',
  );
  final diagnosticJson = diagnostics.single.toJson();
  _expect(
    diagnosticJson['waypoint'] == 'outside-hall' &&
        diagnosticJson['nearestObstruction'] == 'room-boundary-x' &&
        diagnosticJson['position'] is List,
    'blocked waypoint diagnostic carries overlay identity and position',
  );

  // T-06: Additional canonical routes
  final frontThreshold = AutomationRoutePlan.frontThreshold(house);
  _expect(validator.validate(frontThreshold).isEmpty, 'front-threshold route clears geometry');

  final heroReveal = AutomationRoutePlan.heroReveal(house);
  _expect(validator.validate(heroReveal).isEmpty, 'hero-reveal route clears geometry');

  final targetSweep = AutomationRoutePlan.targetSweep(house);
  _expect(validator.validate(targetSweep).isEmpty, 'target-sweep route clears geometry');

  stdout.writeln(
    'automation route: canonical approaches, capsule clearance, topology, front-threshold, hero-reveal, target-sweep, and diagnostics pass',
  );
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
