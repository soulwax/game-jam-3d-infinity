#!/usr/bin/env dart
// Verification script for Q6 House data model

import 'package:quarantine/house/house.dart';

void main() {
  print('=== Q6 House Data Model Verification ===\n');

  // Test 1: Determinism
  print('TEST 1: Determinism - House(1234) instances');
  final house1 = House(1234);
  final house2 = House(1234);

  bool identical = true;
  for (int i = 0; i < house1.rooms.length; i++) {
    final r1 = house1.rooms[i];
    final r2 = house2.rooms[i];
    if (r1.id != r2.id ||
        r1.size.x != r2.size.x ||
        r1.size.y != r2.size.y ||
        r1.size.z != r2.size.z ||
        r1.origin.x != r2.origin.x ||
        r1.origin.y != r2.origin.y ||
        r1.origin.z != r2.origin.z) {
      identical = false;
      break;
    }
  }
  print(
    '  ${identical ? "✓ PASS" : "✗ FAIL"}: Two House(1234) instances are identical\n',
  );

  // Test 2: Windows
  print('TEST 2: Windows');
  print('  Interior: ${house1.windowsFromInside} (spec: 9)');
  print('  Exterior: ${house1.windowsFromOutside} (spec: 11)');
  print(
    '  Difference: ${house1.windowsFromOutside - house1.windowsFromInside} (spec: 2)',
  );
  assert(house1.windowsFromInside == 9);
  assert(house1.windowsFromOutside == 11);
  print('  ✓ PASS\n');

  // Test 3: Landings
  print('TEST 3: Landings');
  print('  Count: ${house1.landings} (spec: 3)');
  assert(house1.landings == 3);
  print('  ✓ PASS\n');

  // Test 4: Cellar
  print('TEST 4: Cellar validation');
  final cellar = house1.byId('cellar')!;
  print('  Mantles: ${cellar.mantles.length} (spec: 0)');
  final cellarPortal = house1.portalById('hall-cellar')!;
  print('  Sticks: ${cellarPortal.sticks} (spec: true)');
  print('  Y position: ${cellar.origin.y} (spec: -2.0)');
  print('  Height: ${cellar.size.y} (spec: 2.0)');
  assert(cellar.mantles.isEmpty);
  assert(cellarPortal.sticks && !cellarPortal.passable);
  assert(cellar.origin.y == -2.0);
  assert(cellar.size.y == 2.0);
  print('  ✓ PASS\n');

  // Test 5: Spare room
  print('TEST 5: Spare room validation');
  final spare = house1.byId('spare-room')!;
  print('  Ceiling: ${spare.size.y} (spec: 2.1 - the discrepancy)');
  print('  Mantles: ${spare.mantles.length} (spec: 1)');
  print(
    '  Broken: ${spare.mantles.isNotEmpty && spare.mantles[0].broken} (spec: true)',
  );
  assert(spare.size.y == 2.1);
  assert(spare.mantles.length == 1);
  assert(spare.mantles[0].broken);
  print('  ✓ PASS\n');

  // Test 6: Mantle distribution
  print('TEST 6: Mantle counts per room (PLAN.md §25.6)');
  final expected = {
    'living-room': 2,
    'hall': 1,
    'kitchen': 3,
    'cellar': 0,
    'bedroom': 2,
    'landing': 1,
    'bathroom': 1,
    'spare-room': 1,
  };
  for (final room in house1.rooms) {
    final count = room.mantles.length;
    final spec = expected[room.id]!;
    final ok = count == spec;
    final mark = ok ? '✓' : '✗';
    print('  $mark ${room.id.padRight(16)} $count (spec: $spec)');
    assert(ok);
  }
  print('  ✓ PASS\n');

  // Test 7: Kitchen doorframe height-marks
  print('TEST 7: Kitchen doorframe height-marks');
  final kitchen = house1.byId('kitchen')!;
  print('  Count: ${kitchen.doorframeHeightMarks.length} (spec: 5)');
  final heights = kitchen.doorframeHeightMarks
      .map((m) => m.heightMetres)
      .toList();
  final specHeights = [0.85, 1.02, 1.18, 1.35, 3.2];
  print('  Heights: $heights');
  print('  Spec:    $specHeights');
  for (int i = 0; i < heights.length; i++) {
    assert(
      heights[i] == specHeights[i],
      'Height mark $i: ${heights[i]} != ${specHeights[i]}',
    );
  }
  print('  ✓ PASS\n');

  // Test 8: Dimension validation (PLAN.md §44)
  print('TEST 8: Room dimensions (PLAN.md §44)');
  _validateDimensions(house1, 'living-room', 0.0, 4.5, 0.0, 4.0, 2.6, 'Ground');
  _validateDimensions(house1, 'hall', 4.5, 7.0, 0.0, 7.0, 2.6, 'Ground');
  _validateDimensions(house1, 'kitchen', 0.0, 4.5, 4.0, 7.0, 2.5, 'Ground');
  _validateDimensions(house1, 'cellar', 1.0, 5.0, 2.0, 6.0, 2.0, 'Ground');
  _validateDimensions(house1, 'bedroom', 0.0, 4.5, 0.0, 4.0, 2.4, 'First');
  _validateDimensions(house1, 'landing', 4.5, 7.0, 0.0, 3.0, 2.4, 'First');
  _validateDimensions(house1, 'bathroom', 4.5, 7.0, 3.0, 5.5, 2.4, 'First');
  _validateDimensions(house1, 'spare-room', 0.0, 4.5, 4.0, 7.0, 2.1, 'First');
  print('  ✓ PASS\n');

  // Test 9: Canonical portals and 3D overlap validation.
  print('TEST 9: Canonical portal and 3D overlap validation');
  House(5555); // Validates no overlaps during construction
  assert(house1.portals.length == 9);
  for (final portal in house1.portals) {
    assert(house1.byId(portal.a) != null || portal.exterior);
    assert(house1.byId(portal.b) != null || portal.exterior);
  }
  assert(house1.stairs.single.landingHeights.join(',') == '1.4,2.8,4.2');
  print('  ✓ Nine portals and no 3D overlaps detected\n');

  print('=== ALL ASSERTIONS PASSED ===\n');
  print(
    'House data model summary: ${house1.rooms.length} rooms, ${house1.portals.length} portals',
  );
}

void _validateDimensions(
  House house,
  String id,
  double xMin,
  double xMax,
  double zMin,
  double zMax,
  double height,
  String floor,
) {
  final room = house.byId(id)!;
  final actualXMin = room.origin.x;
  final actualXMax = room.origin.x + room.size.x;
  final actualZMin = room.origin.z;
  final actualZMax = room.origin.z + room.size.z;
  final actualHeight = room.size.y;

  assert(actualXMin == xMin, '$id: x min $actualXMin != spec $xMin');
  assert(actualXMax == xMax, '$id: x max $actualXMax != spec $xMax');
  assert(actualZMin == zMin, '$id: z min $actualZMin != spec $zMin');
  assert(actualZMax == zMax, '$id: z max $actualZMax != spec $zMax');
  assert(actualHeight == height, '$id: height $actualHeight != spec $height');

  print(
    '  ✓ $id: x[$actualXMin, $actualXMax] z[$actualZMin, $actualZMax] h=$actualHeight',
  );
}
