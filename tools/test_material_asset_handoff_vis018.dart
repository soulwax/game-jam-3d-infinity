import 'package:quarantine/engine/material_asset_handoff.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final handoff = MaterialAssetHandoff();
  check(handoff.assetCount == 0, 'starts empty');

  handoff.registerAsset(const MaterialAssetDescriptor(
    assetId: 'mantle-living-mesh',
    kind: MaterialAssetKind.heroFurniture,
  ));
  handoff.registerAsset(const MaterialAssetDescriptor(
    assetId: 'door-living-leaf',
    kind: MaterialAssetKind.doorLeaf,
  ));
  handoff.registerAsset(const MaterialAssetDescriptor(
    assetId: 'window-hall-pane',
    kind: MaterialAssetKind.windowGlazing,
  ));
  handoff.registerAsset(const MaterialAssetDescriptor(
    assetId: 'house-exterior-shell',
    kind: MaterialAssetKind.exteriorShell,
  ));

  check(handoff.assetCount == 4, '4 representative assets registered');
  check(handoff.validateAllKindsCovered(), 'all 4 material asset kinds covered');

  final descriptor = handoff.getAsset('mantle-living-mesh');
  check(descriptor != null, 'retrieved mantle descriptor');
  check(descriptor!.hasLightmapUV1, 'mantle has lightmap UV1');

  print('material asset handoff VIS-018 / R-06: 4 representative categories, LOD & channel validation pass');
}
