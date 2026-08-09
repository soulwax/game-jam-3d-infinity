import 'dart:convert';
import 'dart:io';

import 'package:quarantine/house/inventory.dart';

void main() {
  final inventory = HouseInventory.decode(
    File('assets/house/inventory.json').readAsStringSync(),
  );
  final routes =
      jsonDecode(
            File('assets/house/verification/routes.json').readAsStringSync(),
          )
          as Map<String, dynamic>;
  final required = (routes['requiredTargets'] as List<dynamic>).cast<String>();
  const aliases = {'hall-clock': 'front-door-clock'};
  const domainTargets = {
    'front-door',
    'mantle-living',
    'mantle-kitchen',
    'previous-tenant-post',
    'ration-book',
  };
  final missing = <String>[];
  for (final target in required) {
    if (inventory.pickableForFocusId(target) == null &&
        !aliases.containsKey(target) &&
        !domainTargets.contains(target)) {
      missing.add(target);
    }
    final alias = aliases[target];
    if (alias != null && inventory.pickableForFocusId(alias) == null) {
      missing.add('$target->$alias');
    }
  }
  if (missing.isNotEmpty) {
    throw StateError('verification targets lack an authored focus: $missing');
  }
  stdout.writeln(
    'inventory target alignment: ${required.length} canonical targets mapped',
  );
}
