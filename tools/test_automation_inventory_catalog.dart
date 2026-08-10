import 'dart:io';

import 'package:quarantine/automation/automation_scenario.dart';
import 'package:quarantine/house/inventory.dart';

void main() {
  final inventory = HouseInventory.decode(
    File('assets/house/inventory.json').readAsStringSync(),
  );
  final catalog = AutomationScenarioCatalog.fromInventory(
    rooms: const {'hall', 'living-room', 'kitchen'},
    portals: const {'hall-living'},
    cameras: const {'room-daylight'},
    routes: const {},
    inventory: inventory,
    additionalTargets: const {'front-door', 'mantle-living'},
  );
  _expect(catalog.targets.contains('front-door-clock'));
  _expect(catalog.targets.contains('journal-desk'));
  _expect(catalog.targets.contains('bathroom-mirror'));
  _expect(catalog.targets.contains('front-door'));
  _expect(catalog.targets.contains('mantle-living'));
  _expect(catalog.targets.length == 38);
  _expect(catalog.inventoryContracts.length == 36);
  _expect(catalog.inventoryContractFor('front-door-clock') != null);
  _expect(
    catalog.inventoryContracts['front-door-clock']?.eventId ==
        'inventory-inspected:front-door-clock',
  );
  _expect(
    catalog.inventoryContracts['front-door-clock']?.stateValue == 'inspected',
  );
  stdout.writeln(
    'automation inventory catalog: 36 authored + 2 domain targets pass',
  );
}

void _expect(bool condition) {
  if (!condition) {
    throw StateError('automation inventory catalog assertion failed');
  }
}
