import 'dart:io';

import 'package:quarantine/house/inventory.dart';

void main() {
  final inventory = HouseInventory.decode(
    File('assets/house/inventory.json').readAsStringSync(),
  );
  final missing = inventory.missingProductionPackages({'living-room'});
  if (missing.any((id) => id == 'living-room')) {
    throw StateError('promoted living-room package was still reported missing');
  }
  if (missing.any((id) => inventory.assetFor(id).status != 'production')) {
    throw StateError('proxy or anchor asset crossed the production gate');
  }
  print('inventory promotion gate: only production assets require packages');
}
