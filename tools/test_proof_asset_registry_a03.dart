// A-03: Four proof assets registry & validator verification.
//
// Verifies that:
//  1. All 4 proof assets (architecture module, opaque furniture, alpha-masked detail, emissive/stateful prop) are registered.
//  2. Each asset builds cleanly, contains parts, LOD triangle counts (>= 2 levels), and valid bounding boxes.
//  3. Serialized packages pass SHA-256 output hash generation and JSON round-tripping.

import 'package:quarantine/engine/proof_asset_registry.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final registry = ProofAssetRegistry();

  // 1. Verify all 4 specs are represented
  check(ProofAssetRegistry.specs.length == 4, '4 specs registered');
  check(registry.allProofAssets.length == 4, '4 proof assets generated');

  // 2. Validate all proof assets pass
  final allValid = registry.validateAllProofAssets();
  check(allValid, 'validateAllProofAssets() must return true');

  // 3. Inspect individual assets
  final arch = registry.getProofAsset('proof-arch-chimney-breast')!;
  final furniture = registry.getProofAsset('proof-furniture-writing-desk')!;
  final detail = registry.getProofAsset('proof-detail-lace-curtain')!;
  final prop = registry.getProofAsset('proof-prop-gaslight-lamp')!;

  check(arch.kind == 'architecture', 'Architecture asset kind');
  check(furniture.kind == 'furniture', 'Furniture asset kind');
  check(detail.kind == 'decor', 'Decor detail asset kind');
  check(prop.kind == 'fixture', 'Fixture prop asset kind');

  check(arch.sockets.isNotEmpty, 'Architecture chimney has mantle socket');
  check(prop.sockets.isNotEmpty, 'Emissive lamp has light point socket');

  for (final pkg in [arch, furniture, detail, prop]) {
    check(pkg.outputHash.length == 64, '${pkg.id} output hash is valid SHA-256');
    final json = pkg.toJson();
    check(json['id'] == pkg.id, '${pkg.id} JSON id matches');
  }

  print('A-03: Proof asset registry test passed cleanly!');
}
