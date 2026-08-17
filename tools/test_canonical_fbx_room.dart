import 'dart:convert';
import 'dart:io';

import 'package:quarantine/automation/automation_route.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/house/inventory_interaction.dart';
import 'package:quarantine/sim/day.dart';

import 'house_fixture.dart';

Never fail(String message) => throw StateError('canonical FBX room: $message');

void expectThat(bool condition, String message) {
  if (!condition) fail(message);
}

Map<String, dynamic> readObject(String path) {
  final decoded = jsonDecode(File(path).readAsStringSync());
  if (decoded is! Map) fail('$path is not a JSON object');
  return Map<String, dynamic>.from(decoded);
}

void main() {
  final houseJson = readObject('assets/house/house.json');
  expectThat(
    houseJson['presentationScope'] == 'provisional-visible-place',
    'house must remain a visitable presentation place, not a story endpoint',
  );
  expectThat(
    houseJson['storyAuthority'] == 'external-story-data',
    'story authority must remain outside the house manifest',
  );
  final residence = (houseJson['residence'] as Map?)?.cast<String, dynamic>();
  expectThat(residence != null, 'house must declare a residence anchor');
  expectThat(
    residence!['roomId'] == 'living-room',
    'new sessions must begin in the canonical living-room residence',
  );
  expectThat(
    residence['restAnchor'] == 'placement-living-sofa',
    'residence must name its authored rest anchor',
  );
  for (final key in const ['storyEvents', 'storySchedule', 'screenplay']) {
    expectThat(!houseJson.containsKey(key), 'house owns no $key');
  }

  final rooms = (houseJson['rooms'] as List).cast<Map>();
  final livingRoom = rooms.where((room) => room['id'] == 'living-room');
  expectThat(
    livingRoom.length == 1,
    'living-room must have one authored identity',
  );
  final living = livingRoom.single;
  expectThat(
    living['floor'] == 'ground',
    'living-room must be on the ground floor',
  );
  expectThat(
    (living['portalIds'] as List)
        .map((id) => id.toString())
        .toSet()
        .containsAll(const ['hall-living', 'kitchen-living']),
    'living-room must connect to hall and kitchen',
  );

  final inventory = readObject('assets/house/inventory.json');
  final assets = (inventory['assets'] as List).cast<Map>();
  final packageAsset = assets.where((asset) => asset['id'] == 'living-room');
  expectThat(
    packageAsset.length == 1,
    'inventory must contain one living-room package asset',
  );
  final asset = packageAsset.single;
  expectThat(
    asset['status'] == 'production',
    'living-room package must be production',
  );
  expectThat(
    asset['source'] == 'res/models/living-room/manifest.json',
    'production asset must resolve through the browser package manifest',
  );

  final placements = (inventory['placements'] as List).cast<Map>();
  final roomPlacements = placements.where(
    (placement) =>
        placement['roomId'] == 'living-room' &&
        placement['assetId'] == 'living-room',
  );
  expectThat(
    roomPlacements.length == 1,
    'package must have one canonical living-room placement',
  );
  final placement = roomPlacements.single;
  expectThat(
    placement['role'] == 'renderer-reference',
    'FBX package placement must remain presentation-owned',
  );
  final transform = (placement['transform'] as Map).cast<String, dynamic>();
  final scale = (transform['scale'] as List).map(
    (value) => (value as num).toDouble(),
  );
  expectThat(
    scale.every((value) => value.isFinite && value > 0),
    'package scale must be finite and positive',
  );
  final sofa = placements.where(
    (placement) => placement['id'] == 'placement-living-sofa',
  );
  expectThat(sofa.length == 1, 'residence must have one authored sofa anchor');
  final sofaInteraction = (sofa.single['interaction'] as Map)
      .cast<String, dynamic>();
  expectThat(
    sofaInteraction['pickable'] == true &&
        sofaInteraction['focusId'] == 'living-sofa',
    'residence sofa must be focusable by the player',
  );
  final sofaPlacement = InventoryPlacement.fromJson(sofa.single);
  final sofaInspection = inventoryInspectionContract(sofaPlacement);
  expectThat(
    sofaInspection.targetId == 'living-sofa' &&
        sofaInspection.eventId == 'inventory-inspected:living-sofa',
    'residence sofa focus must have a stable interaction contract',
  );
  final statuette = placements.where(
    (placement) => placement['id'] == 'placement-living-porcelain-reference',
  );
  expectThat(
    statuette.length == 1,
    'living room must place the statuette once',
  );
  final statuettePhysics = (statuette.single['physics'] as Map)
      .cast<String, dynamic>();
  expectThat(
    statuettePhysics['bodyType'] == 'static' &&
        statuettePhysics['collision'] == true &&
        statuettePhysics['massKg'] == 18.0 &&
        statuettePhysics['volumeM3'] == 0.01 &&
        statuettePhysics['densityKgM3'] == 1800.0,
    'statuette must have a supported, heavy, density-consistent body',
  );

  final index = readObject('web/res/models/index.json');
  final entries = (index['entries'] as List).cast<Map>();
  final indexed = entries.where((entry) => entry['assetId'] == 'living-room');
  expectThat(
    indexed.length == 1,
    'living-room must have one promoted index entry',
  );
  expectThat(
    indexed.single['manifestPath'] == 'living-room/manifest.json',
    'promoted index path must match the package identity',
  );

  final packageManifest = readObject(
    'web/res/models/living-room/manifest.json',
  );
  final parts = (packageManifest['parts'] as List).cast<Map>();
  expectThat(
    parts.isNotEmpty,
    'promoted living-room package must contain parts',
  );
  for (final part in parts) {
    final lodFiles = (part['lodFiles'] as Map).cast<String, dynamic>();
    final lod0 = lodFiles['LOD0'];
    expectThat(lod0 is String, 'every living-room part must declare LOD0');
    expectThat(
      File('web/res/models/living-room/$lod0').existsSync(),
      'every living-room LOD0 payload must exist: $lod0',
    );
  }

  final house = loadAuthoredHouse(seed: 42);
  expectThat(
    house.residenceRoomId == 'living-room',
    'runtime house must retain the living-room residence identity',
  );
  expectThat(
    house.residenceRestAnchor == 'placement-living-sofa',
    'runtime house must retain the living-room rest anchor',
  );
  expectThat(
    SleepLocation.values.contains(SleepLocation.sofa),
    'sleep system must support sofa rest at the residence',
  );
  expectThat(
    house.residenceSpawn != null &&
        house.roomAt(house.residenceSpawn!)?.id == 'living-room',
    'residence spawn must land inside living-room',
  );
  final route = AutomationRoutePlan.fromTopology(
    id: 'canonical-living-room',
    house: house,
    rooms: const ['hall', 'living-room', 'kitchen'],
    portals: const ['hall-living', 'kitchen-living'],
    requiredOpenPortals: const {'hall-living', 'kitchen-living'},
  );
  final issues = AutomationRouteValidator(house: house).validate(route);
  expectThat(
    issues.isEmpty,
    'hall/living/kitchen route is not clearance-safe: $issues',
  );
  expectThat(
    route.waypoints.any((waypoint) => waypoint.room == 'living-room'),
    'route must enter living-room',
  );

  // Prove the game-owned focus resolver can actually select the authored
  // residence target from the real residence eye, without renderer handles or
  // a browser-only camera teleport. The angle sweep is only a deterministic
  // fixture for the bounded interaction cone; gameplay still uses live input.
  final houseInventory = HouseInventory.fromJson(inventory);
  final camera = Camera();
  final residenceEye = house.residencePlayerEye(1.65)!;
  var sofaCanBeFocused = false;
  for (var yawStep = -64; yawStep <= 64 && !sofaCanBeFocused; yawStep++) {
    final yaw = yawStep * 0.05;
    for (var pitchStep = -8; pitchStep <= 8 && !sofaCanBeFocused; pitchStep++) {
      camera.lookFrom(residenceEye, yaw, pitchStep * 0.04);
      final focus = resolveFocus(
        camera: camera,
        house: house,
        currentRoom: 'living-room',
        inventory: houseInventory,
      );
      sofaCanBeFocused =
          focus.kind == FocusKind.inventory && focus.id == 'living-sofa';
    }
  }
  expectThat(
    sofaCanBeFocused,
    'residence sofa must be reachable by the game-owned focus resolver',
  );

  print(
    'canonical FBX room: identity, production package, topology, route, and story boundary pass',
  );
}
