import 'dart:io';

import 'package:quarantine/automation/automation_scenario.dart';

void main() {
  final authored = AutomationScenario.decode(
    File(
      'assets/house/verification/scenarios/ground-circuit.json',
    ).readAsStringSync(),
  );
  _expect(authored.id == 'ground-circuit', 'authored scenario decodes');

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
