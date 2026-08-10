import 'dart:io';

import 'package:quarantine/automation/automation_scenario.dart';
import 'package:quarantine/automation/visual_capture_manifest.dart';
import 'package:quarantine/house/house.dart';

void main() {
  final manifest = VisualCaptureManifest.decode(
    File('assets/house/verification/captures.json').readAsStringSync(),
  );
  final scenario = AutomationScenario.decode(
    File(
      'assets/house/verification/scenarios/ground-circuit.json',
    ).readAsStringSync(),
  );
  final errors = manifest.validateAgainstScenarios(
    house: House(42017),
    scenarios: [scenario],
    expectedHouseId: 'quarantine-house-main',
  );
  _expect(errors.isEmpty, 'authored visual manifest validates: $errors');
  _expect(manifest.captures.length == 12, 'six hero capture pairs exist');
  _expect(
    manifest.captures
            .where((capture) => capture.pairId == 'hero-hall-entry')
            .length ==
        2,
    'hall-entry clean/final pair exists',
  );
  _expect(
    manifest.captures.every((capture) => capture.viewportWidth == 960),
    'hero captures use the declared high viewport',
  );
  _expect(
    manifest.captures
            .where((capture) => capture.pairId == 'hero-living-rain')
            .every((capture) => capture.fixture.weather == 'rain') &&
        manifest.captures
                .where((capture) => capture.pairId == 'hero-living-rain')
                .length ==
            2,
    'rain clean/final pair exists with explicit weather state',
  );
  _expect(
    manifest.captures
        .where((capture) =>
            capture.pairId == 'hero-living-rain' ||
            capture.pairId == 'hero-living-shutter')
        .every((capture) => capture.requiredMetadata.contains('simulation')),
    'rain and shutter pairs require published simulation telemetry',
  );

  final unknownWaypoint = VisualCaptureManifest.decode(
    File(
      'assets/house/verification/captures.json',
    ).readAsStringSync().replaceFirst(
      '"waypoint": "hall-entry"',
      '"waypoint": "missing-waypoint"',
    ),
  );
  final provenanceErrors = unknownWaypoint.validateAgainstScenarios(
    house: House(42017),
    scenarios: [scenario],
    expectedHouseId: 'quarantine-house-main',
  );
  _expect(
    provenanceErrors.any((error) => error.contains('unknown source waypoint')),
    'capture provenance resolves against actual scenario waypoints',
  );

  final driftedPair = VisualCaptureManifest.decode(
    File('assets/house/verification/captures.json')
        .readAsStringSync()
        .replaceFirst('"profile": "high"', '"profile": "standard"'),
  );
  final driftErrors = driftedPair.validateAgainstScenarios(
    house: House(42017),
    scenarios: [scenario],
    expectedHouseId: 'quarantine-house-main',
  );
  _expect(
    driftErrors.any((error) => error.contains('mismatched camera or fixture')),
    'clean/final fixture drift is rejected',
  );

  final malformed = VisualCaptureManifest.decode('''
{
  "schemaVersion": 1,
  "houseId": "quarantine-house-main",
  "captures": [{
    "id": "broken",
    "pairId": "broken",
    "owner": "embodied",
    "mode": "clean",
    "source": {"scenario": "missing", "waypoint": "unknown"},
    "camera": {"position": [0, 1.65, 0], "yaw": 0, "pitch": 0, "fov": 0},
    "viewport": {"width": 0, "height": 540},
    "profile": "unsupported",
    "fixture": {
      "seed": 1, "day": 1, "hour": 25, "weather": "storm",
      "room": "missing", "portals": {"missing": "ajar"},
      "shutters": {}, "mantles": {}
    },
    "requiredMetadata": []
  }]
}
''');
  final malformedErrors = malformed.validate(
    house: House(42017),
    scenarioIds: {'ground-circuit'},
    expectedHouseId: 'quarantine-house-main',
  );
  _expect(
    malformedErrors.length >= 8,
    'malformed camera/state/profile data is rejected with focused errors',
  );
  stdout.writeln(
    'visual manifest: six fixed hero pairs and malformed coverage pass',
  );
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
