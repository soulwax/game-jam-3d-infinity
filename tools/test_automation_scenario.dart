import 'dart:io';

import 'package:quarantine/automation/automation_route.dart';
import 'package:quarantine/automation/automation_scenario.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/house.dart';

void main() {
  final authored = AutomationScenario.decode(
    File(
      'assets/house/verification/scenarios/ground-circuit.json',
    ).readAsStringSync(),
  );
  _expect(authored.id == 'ground-circuit', 'authored scenario decodes');
  final authoredUpper = AutomationScenario.decode(
    File(
      'assets/house/verification/scenarios/upper-circuit.json',
    ).readAsStringSync(),
  );
  const upperCatalog = AutomationScenarioCatalog(
    rooms: {'hall', 'landing', 'bedroom', 'bathroom', 'spare-room'},
    portals: {
      'hall-landing',
      'landing-bedroom',
      'landing-bathroom',
      'landing-spare',
    },
    targets: {},
    cameras: {},
    routes: {},
  );
  _expect(
    const AutomationScenarioCompiler(
      upperCatalog,
    ).validate(authoredUpper).isEmpty,
    'authored upper scenario validates structurally',
  );

  final scenario = AutomationScenario.decode('''
{
  "schemaVersion": 1,
  "id": "ground-circuit",
  "tags": ["smoke", "embodied-route"],
  "fixture": {"seed": 42017, "startPose": "hall-entry"},
  "runtime": {"fixedDt": 0.0166666667, "maxTicks": 120},
  "poses": [{"id":"hall-entry","position":[0,1.6,0],"yaw":0,"pitch":0,"room":"hall"}],
  "routes": [{"id":"hall-to-living","rooms":["hall","living-room"],"portals":["hall-living"],"tickBudget":30}],
  "steps": [
    {"id":"ready","do":"awaitReady","phase":"fixture"},
    {"id":"fixture","do":"loadFixture","phase":"fixture"},
    {"id":"move","do":"moveRoute","route":"hall-to-living","tickBudget":30},
    {"id":"aim","do":"lookAt","target":"mantle-living"},
    {"id":"light","do":"interact","target":"mantle-living","mode":"press"},
    {"id":"capture","do":"capture","camera":"hero-night"}
  ]
}
''');
  const catalog = AutomationScenarioCatalog(
    rooms: {'hall', 'living-room', 'kitchen'},
    portals: {'hall-living', 'kitchen-living'},
    targets: {'mantle-living'},
    cameras: {'hero-night'},
    routes: {},
  );
  const compiler = AutomationScenarioCompiler(catalog);
  _expect(compiler.validate(authored).isEmpty, 'authored scenario validates');
  _expect(compiler.validate(scenario).isEmpty, 'valid scenario compiles');
  final draftRegistry = AutomationScenarioRegistry.build(
    scenarios: [authored, scenario],
    compiler: compiler,
  );
  final authoredDraft = draftRegistry.find('ground-circuit');
  _expect(
    authoredDraft?.readiness == AutomationScenarioReadiness.draft,
    'unregistered scenario is reported as a draft',
  );
  _expect(
    authoredDraft?.issues.any((issue) => issue.contains('not registered')) ==
        true,
    'draft explains missing registration',
  );
  final runnableRegistry = AutomationScenarioRegistry.build(
    scenarios: [authored],
    compiler: compiler,
    registeredScenarioIds: {'ground-circuit'},
  );
  _expect(
    runnableRegistry.find('ground-circuit')?.readiness ==
        AutomationScenarioReadiness.runnable,
    'registered waypoint-complete scenario is runnable',
  );
  _expect(
    runnableRegistry.toJson().single['readiness'] == 'runnable',
    'registry emits machine-readable readiness',
  );
  final incompleteRegistry = AutomationScenarioRegistry.build(
    scenarios: [scenario],
    compiler: compiler,
    registeredScenarioIds: {'ground-circuit'},
  );
  _expect(
    incompleteRegistry
            .find('ground-circuit')
            ?.issues
            .any((issue) => issue.contains('no executable waypoints')) ==
        true,
    'registered waypoint-free scenario remains a draft',
  );
  final authoredGround = authored.routes.firstWhere(
    (route) => route.id == 'hall-to-living',
  );
  _expect(
    authoredGround.waypoints.length == 3,
    'ground route has a clearance-aware start/portal chain',
  );
  final house = House(authored.fixture.seed);
  final routePlan = AutomationRoutePlan(
    id: authoredGround.id,
    rooms: authoredGround.rooms,
    portals: authoredGround.portals,
    waypoints: [
      for (final waypoint in authoredGround.waypoints)
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
  _expect(
    AutomationRouteValidator(house: house).validate(routePlan).isEmpty,
    'authored ground waypoints clear canonical capsule geometry',
  );
  final authoredKitchen = authored.routes.firstWhere(
    (route) => route.id == 'living-to-kitchen',
  );
  _expect(
    authoredKitchen.waypoints.length == 2,
    'ground route has a clearance-aware kitchen crossing',
  );
  final kitchenPlan = AutomationRoutePlan(
    id: authoredKitchen.id,
    rooms: authoredKitchen.rooms,
    portals: authoredKitchen.portals,
    waypoints: [
      for (final waypoint in authoredKitchen.waypoints)
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
  _expect(
    AutomationRouteValidator(house: house).validate(kitchenPlan).isEmpty,
    'authored kitchen waypoints clear canonical capsule geometry',
  );

  final badWaypoint = AutomationScenario.decode('''
{
  "schemaVersion": 1,
  "id": "bad-waypoint",
  "fixture": {"seed": 1, "startPose": "hall-entry"},
  "runtime": {"fixedDt": 0.016, "maxTicks": 10},
  "poses": [{"id":"hall-entry","position":[7,1.6,1],"yaw":0,"pitch":0,"room":"hall"}],
  "routes": [{"id":"r","rooms":["hall","living-room"],"portals":["hall-living"],"tickBudget":5,
    "waypoints":[{"id":"dup","room":"hall","position":[7,1.6,1],"radius":0.35},
    {"id":"dup","room":"cellar","position":[7,1.6,2],"radius":0}]}],
  "steps": []
}
''');
  final badWaypointErrors = compiler.validate(badWaypoint);
  _expect(
    badWaypointErrors.any((error) => error.contains('waypoint')),
    'invalid waypoint identity/room/clearance is reported',
  );

  final unknownInteract = AutomationScenario.decode('''
{"schemaVersion":1,"id":"bad-interact","fixture":{"seed":1,"startPose":"hall-entry"},
"runtime":{"fixedDt":0.016,"maxTicks":10},
"poses":[{"id":"hall-entry","position":[0,1.6,0],"yaw":0,"pitch":0,"room":"hall"}],
"routes":[],"steps":[{"id":"use","do":"interact","target":"missing","mode":"press"}]}
''');
  _expect(
    compiler
        .validate(unknownInteract)
        .any(
          (error) => error.contains('use') && error.contains('unknown target'),
        ),
    'interact rejects unknown target',
  );

  final invalid = AutomationScenario.decode('''
{"schemaVersion":1,"id":"bad","fixture":{"seed":1,"startPose":"missing"},
"runtime":{"fixedDt":0,"maxTicks":1},"poses":[],"routes":[],
"steps":[{"id":"x","do":"interact","target":"unknown","mode":"tap"}]}
''');
  final errors = compiler.validate(invalid);
  _expect(errors.length >= 3, 'invalid scenario has semantic errors');
  _expectThrows(
    () => compiler.compile(invalid),
    'compile rejects invalid scenario',
  );
  stdout.writeln(
    'automation scenario: decode, topology, IDs, references, budgets pass',
  );
}

void _expect(bool value, String message) {
  if (!value) throw StateError(message);
}

void _expectThrows(void Function() action, String message) {
  try {
    action();
  } catch (_) {
    return;
  }
  throw StateError(message);
}
