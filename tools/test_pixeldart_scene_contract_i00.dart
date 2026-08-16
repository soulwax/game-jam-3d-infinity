// I-00: PixeldartSceneContract boundary check.
//
// Verifies that:
//  1. NullPixeldartSceneContract satisfies the interface without any GPU/DOM
//     imports — the boundary is free of Pixeldart internals.
//  2. Every method on the contract can be called with structural game-domain
//     values (House, Camera, WeatherDay, RuptureState) and returns the correct
//     null/identity diagnostics.
//  3. The `setLighting` eye parameter is a plain record — no Vec3 engine type
//     leaks through the contract.
//  4. The NullPixeldartSceneContract is const-constructible (zero cost when
//     the Pixeldart path is absent).

import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/presentation/pixeldart_scene_contract.dart';
import 'package:quarantine/sim/rupture.dart';
import 'package:quarantine/sim/weather.dart';
import 'house_fixture.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() async {
  // 1. Const construction — proves zero GPU handle cost.
  const PixeldartSceneContract contract = NullPixeldartSceneContract();

  // 2. Diagnostics defaults before any frames.
  check(contract.surfaceLabel == null, 'null contract: surfaceLabel is null');
  check(contract.frameStatsLabel == null, 'null contract: frameStatsLabel is null');
  check(contract.frameBudgetWithinLimits == true, 'null contract: budget always within limits');
  check(contract.profileFallbackReason == null, 'null contract: no fallback reason');

  // 3. Build minimal domain stubs.
  final house = loadAuthoredHouse(seed: 0);
  final inventory = HouseInventory.fromJson({
    'schemaVersion': 1,
    'sourceRef': 'test',
    'modelScale': 1.0,
    'assets': <dynamic>[],
    'placements': <dynamic>[],
  });

  contract.attachHouse(house);
  contract.attachHouse(house); // idempotency: no throw
  contract.setInventory(inventory);
  contract.setVisibleRooms(house, 'living');

  // 4. Camera call — structural only, no Pixeldart Mat4.
  final camera = Camera();
  contract.setCamera(camera);

  // 5. setLighting with plain record eye — no Vec3 leak through seam.
  const eye = (x: 3.0, y: 1.65, z: 2.0);
  contract.setLighting(
    house, 'living', eye,
    0.5, // sunAngle
    0.8, // daylight
    WeatherDay(day: 1, rain: false, rainIntensity: 0.0, daylightHours: 12.0),
    true, // daylightThroughWindow
  );

  // 6. setPostProcess — game state mapping without game rules in the contract.
  contract.setPostProcess(
    RuptureState(),
    reducedMotion: false,
    rainIntensity: 0.3,
    rainWindowVisibility: 0.8,
  );

  // 7. setFrameClock — structural values, bounds validated.
  contract.setFrameClock(
    timeSeconds: 12.0,
    historyEpoch: 1,
    noiseSeed: 42,
  );

  // 8. Geometry invalidation — must not throw on valid IDs.
  contract.refreshRoomGeometry(house, 'living');
  contract.refreshPortalGeometry(house, 'living'); // unknown ID: no-op

  // 9. loadTextures — returns completed future, no network call.
  await contract.loadTextures({'wall-plaster': 'assets/tex/plaster.png'});

  print('I-00: PixeldartSceneContract boundary check and null contract pass');
}
