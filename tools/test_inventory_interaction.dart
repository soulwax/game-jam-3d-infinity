import 'dart:convert';
import 'dart:io';

import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/house/inventory_interaction.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/game/save.dart';

void main() {
  final inventory = HouseInventory.decode(
    File('assets/house/inventory.json').readAsStringSync(),
  );
  final clock = inventory.placements.firstWhere(
    (placement) => placement.id == 'placement-hall-clock',
  );
  final ledger = InventoryInspectionLedger();
  final first = ledger.inspect(clock);
  _expect(first.semanticId == 'inventory-inspected:front-door-clock');
  _expect(first.count == 1);
  _expect(ledger.inspect(clock).count == 2);

  final restored = InventoryInspectionLedger()..restore(ledger.toJson());
  _expect(restored.countFor(clock.id) == 2);
  _expect(restored.toJson().keys.toList().single == clock.id);
  final snapshot = SaveSnapshot(
    run: const {'seed': 42},
    meta: {'inventoryInspections': ledger.toJson()},
  );
  final decoded = const SaveCodec().decode(const SaveCodec().encode(snapshot));
  final saveRestored = InventoryInspectionLedger()
    ..restore(decoded.meta['inventoryInspections']);
  _expect(saveRestored.countFor(clock.id) == 2);

  final nonPickable = inventory.placements.firstWhere(
    (placement) => !placement.pickable,
  );
  _expectThrows(() => ledger.inspect(nonPickable));
  _expectThrows(() => restored.restore({'bad': -1}));

  final raw =
      jsonDecode(File('assets/house/inventory.json').readAsStringSync())
          as Map<String, dynamic>;
  final placements = raw['placements'] as List<dynamic>;
  final secondPickable =
      placements.firstWhere(
            (value) =>
                value is Map<String, dynamic> &&
                value['interaction'] is Map<String, dynamic> &&
                (value['interaction'] as Map<String, dynamic>)['pickable'] ==
                    true &&
                value['id'] != clock.id,
          )
          as Map<String, dynamic>;
  (secondPickable['interaction'] as Map<String, dynamic>)['focusId'] =
      'front-door-clock';
  final duplicate = HouseInventory.fromJson(raw);
  _expectThrows(() => duplicate.validateAgainst(House(42)));
  stdout.writeln(
    'inventory interaction: event identity, persistence, and pickable guard pass',
  );
}

void _expect(bool condition) {
  if (!condition) throw StateError('inventory interaction assertion failed');
}

void _expectThrows(void Function() action) {
  try {
    action();
  } catch (_) {
    return;
  }
  throw StateError('expected inventory interaction failure');
}
