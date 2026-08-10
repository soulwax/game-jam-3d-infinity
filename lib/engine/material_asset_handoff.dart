enum MaterialAssetKind {
  heroFurniture,
  doorLeaf,
  windowGlazing,
  exteriorShell,
}

class MaterialAssetDescriptor {
  final String assetId;
  final MaterialAssetKind kind;
  final int lodCount;
  final bool hasLightmapUV1;
  final bool hasNormalMap;
  final bool hasOrmMap;

  const MaterialAssetDescriptor({
    required this.assetId,
    required this.kind,
    this.lodCount = 3,
    this.hasLightmapUV1 = true,
    this.hasNormalMap = true,
    this.hasOrmMap = true,
  }) : assert(assetId.length > 0, 'assetId must be non-empty'),
       assert(lodCount > 0, 'lodCount must be positive');

  Map<String, Object> toJson() => {
        'assetId': assetId,
        'kind': kind.name,
        'lodCount': lodCount,
        'hasLightmapUV1': hasLightmapUV1,
        'hasNormalMap': hasNormalMap,
        'hasOrmMap': hasOrmMap,
      };
}

/// Deterministic material asset mesh handoff & converter validator for VIS-018 / R-06.
class MaterialAssetHandoff {
  final Map<String, MaterialAssetDescriptor> _assets = {};

  int get assetCount => _assets.length;

  void registerAsset(MaterialAssetDescriptor descriptor) {
    _assets[descriptor.assetId] = descriptor;
  }

  MaterialAssetDescriptor? getAsset(String assetId) => _assets[assetId];

  bool validateAllKindsCovered() {
    final coveredKinds = _assets.values.map((a) => a.kind).toSet();
    return coveredKinds.length == MaterialAssetKind.values.length;
  }
}
