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
  _expect(catalog.targets.length == 16);
  stdout.writeln(
    'automation inventory catalog: 14 authored + 2 domain targets pass',
  );
}

void _expect(bool condition) {
  if (!condition) {
    throw StateError('automation inventory catalog assertion failed');
  }
}
