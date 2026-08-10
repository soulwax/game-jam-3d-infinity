// I-02: Model placement binding verification.
//
// Verifies that:
//  1. ModelPlacementBinding registers placement IDs, assets, transforms, sockets, material variants, visibility, and state keys.
//  2. Registry validates socket references against ProofAssetRegistry proof assets.
//  3. Save/restore round-trip serializes state losslessly and survives reload.

import 'package:quarantine/engine/model_placement_binding.dart';
import 'package:quarantine/engine/proof_asset_registry.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final proofRegistry = ProofAssetRegistry();
  final bindingRegistry = ModelPlacementBindingRegistry();

  final b1 = ModelPlacementBinding(
    placementId: 'placement-living-hearth-breast',
    assetId: 'proof-arch-chimney-breast',
    roomId: 'living-room',
    position: (x: 1.0, y: 0.0, z: 1.0),
    socketBindings: {'mantle_shelf_center': 'placement-mantle-clock'},
    stateKeys: {'sootLevel': 0.3},
  );

  final b2 = ModelPlacementBinding(
    placementId: 'placement-living-desk',
    assetId: 'proof-furniture-writing-desk',
    roomId: 'living-room',
    position: (x: 3.0, y: 0.0, z: 2.0),
    materialVariantKey: 'mat-wood-mahogany-dark',
    socketBindings: {'desk_top_center': 'placement-table-lamp'},
    stateKeys: {'drawerOpenFraction': 0.4},
  );

  bindingRegistry.bindPlacement(b1);
  bindingRegistry.bindPlacement(b2);

  // 1. Verify lookups
  check(bindingRegistry.getBinding('placement-living-hearth-breast') != null, 'b1 registered');
  check(bindingRegistry.getBinding('placement-living-desk') != null, 'b2 registered');
  check(bindingRegistry.bindingsForRoom('living-room').length == 2, '2 bindings in living-room');

  // 2. Validate against proof assets
  final valid = bindingRegistry.validateAgainstProofAssets(proofRegistry);
  check(valid, 'Placement socket bindings validate against proof assets');

  // 3. Test save / restore round trip
  final serialized = bindingRegistry.serializeState();
  final newRegistry = ModelPlacementBindingRegistry();
  newRegistry.restoreState(serialized);

  check(newRegistry.allBindings.length == 2, 'Restored registry contains 2 bindings');
  final restoredDesk = newRegistry.getBinding('placement-living-desk')!;
  check(restoredDesk.materialVariantKey == 'mat-wood-mahogany-dark', 'Restored material variant key');
  check(restoredDesk.stateKeys['drawerOpenFraction'] == 0.4, 'Restored state key value');
  check(restoredDesk.socketBindings['desk_top_center'] == 'placement-table-lamp', 'Restored socket binding');

  print('I-02: Model placement binding test passed cleanly!');
}
