import 'package:quarantine/house/inventory.dart';

import 'model_package_registry.dart';

/// Presentation-only resolution result. Collision, focus and story systems
/// continue to consume the authored [placement] independently.
final class PresentationInventoryResolution {
  final InventoryAsset authoredAsset;
  final InventoryPlacement placement;
  final PresentationModelPackageRecord package;

  const PresentationInventoryResolution({
    required this.authoredAsset,
    required this.placement,
    required this.package,
  });
}

/// Resolves an authored inventory placement to a promoted package by stable ID.
/// The inventory's source path is intentionally never inspected.
final class PresentationInventoryAdapter {
  final PresentationModelPackageRegistry registry;

  const PresentationInventoryAdapter(this.registry);

  PresentationInventoryResolution resolve(
    HouseInventory inventory,
    InventoryPlacement placement,
  ) {
    final asset = inventory.assetFor(placement.assetId);
    return PresentationInventoryResolution(
      authoredAsset: asset,
      placement: placement,
      package: registry.resolve(asset.id),
    );
  }

  List<String> missingPackages(HouseInventory inventory) => [
    for (final asset in inventory.assets)
      if (asset.status == 'production' && !registry.contains(asset.id)) asset.id,
  ];

  /// Build/promotion gate: production inventory may not ship with unresolved
  /// package IDs that would silently become proxy geometry. Explicit proxies
  /// and invisible anchors remain valid until their promotion packet exists.
  void requireAllPackages(HouseInventory inventory) {
    final missing = missingPackages(inventory);
    if (missing.isNotEmpty) {
      throw FormatException(
        'inventory has no promoted package for: ${missing.join(', ')}',
      );
    }
  }
}
