import 'dart:io';

import 'package:quarantine/house/inventory.dart';
import 'house_fixture.dart';

Never fail(String message) => throw StateError('house inventory: $message');

void main() {
  final path = '${Directory.current.path}/assets/house/inventory.json';
  final file = File(path);
  if (!file.existsSync()) fail('missing $path');
  final inventory = HouseInventory.decode(file.readAsStringSync());
  inventory.validateAgainst(loadAuthoredHouse(seed: 42));
  if (inventory.assets.length < 20) fail('inventory catalog is too small');
  if (inventory.placements.length < 24) {
    fail('inventory needs precise placements for every room');
  }
  final rooms = {
    for (final placement in inventory.placements) placement.roomId,
  };
  if (rooms.length != 8) fail('inventory does not cover all eight rooms');
  final fireplace = inventory.placements.firstWhere(
    (placement) => placement.id == 'placement-living-fireplace',
  );
  if (fireplace.heatOutputWatts != 1800 ||
      fireplace.surfaceTemperatureCelsius != 140 ||
      fireplace.thermalRadiusM != 0.35 ||
      fireplace.thermalOffsetY != 0.75) {
    fail('fireplace thermal source metadata drifted');
  }
  final pickable = inventory.pickablePlacements.length;
  if (pickable < 8) fail('inventory has too few inspectable placements');
  for (final placement in inventory.pickablePlacements) {
    if (placement.focusId != null &&
        inventory.pickableForFocusId(placement.focusId!) != placement) {
      fail('focus index does not return ${placement.id}');
    }
  }
  print(
    'house inventory: ${inventory.assets.length} assets, '
    '${inventory.placements.length} placements, $pickable pickable pass',
  );
}
