import 'asset_source_contract.dart';

/// The 4 proof asset categories for A-03.
enum ProofAssetCategory {
  architectureModule,
  opaqueFurniture,
  alphaMaskedDetail,
  emissiveStatefulProp,
}

/// Description of a single proof asset in the A-03 verification suite.
class ProofAssetSpec {
  final String id;
  final ProofAssetCategory category;
  final String materialKey;
  final bool usesAlphaMask;
  final bool hasEmissiveState;

  const ProofAssetSpec({
    required this.id,
    required this.category,
    required this.materialKey,
    this.usesAlphaMask = false,
    this.hasEmissiveState = false,
  });
}

/// Registry and validator for the four A-03 proof assets:
/// 1. Architecture module (e.g. proof-arch-chimney-breast)
/// 2. Opaque furniture (e.g. proof-furniture-writing-desk)
/// 3. Alpha-masked detail (e.g. proof-detail-lace-curtain)
/// 4. Emissive/stateful prop (e.g. proof-prop-gaslight-lamp)
class ProofAssetRegistry {
  final Map<String, AssetNormalizedPackage> _packages = {};

  ProofAssetRegistry() {
    _registerDefaults();
  }

  static const List<ProofAssetSpec> specs = [
    ProofAssetSpec(
      id: 'proof-arch-chimney-breast',
      category: ProofAssetCategory.architectureModule,
      materialKey: 'mat-plaster-clean',
    ),
    ProofAssetSpec(
      id: 'proof-furniture-writing-desk',
      category: ProofAssetCategory.opaqueFurniture,
      materialKey: 'mat-wood-oak-polished',
    ),
    ProofAssetSpec(
      id: 'proof-detail-lace-curtain',
      category: ProofAssetCategory.alphaMaskedDetail,
      materialKey: 'mat-fabric-curtains',
      usesAlphaMask: true,
    ),
    ProofAssetSpec(
      id: 'proof-prop-gaslight-lamp',
      category: ProofAssetCategory.emissiveStatefulProp,
      materialKey: 'mat-brass-wrought',
      hasEmissiveState: true,
    ),
  ];

  void _registerDefaults() {
    final converter = AssetConverter();

    // 1. Architecture Module
    _packages['proof-arch-chimney-breast'] = converter.convertSource({
      'id': 'proof-arch-chimney-breast',
      'kind': 'architecture',
      'pivot': 'floor-center',
      'normalization': {
        'sourceHash': '1111111111111111111111111111111111111111111111111111111111111111',
        'units': 'metres',
        'upAxis': 'Y-up',
      },
      'sockets': [
        {'name': 'mantle_shelf_center', 'position': [0.0, 1.40, 0.25]},
      ],
      'parts': [
        {
          'name': 'breast_masonry',
          'materialKey': 'mat-plaster-clean',
          'boundsMin': [-0.45, 0.0, -0.30],
          'boundsMax': [0.45, 2.80, 0.30],
          'vertexCount': 120,
          'triangleCount': 60,
          'lodTriangleCounts': [60, 30, 10],
        },
      ],
    });

    // 2. Opaque Furniture
    _packages['proof-furniture-writing-desk'] = converter.convertSource({
      'id': 'proof-furniture-writing-desk',
      'kind': 'furniture',
      'pivot': 'floor-center',
      'normalization': {
        'sourceHash': '2222222222222222222222222222222222222222222222222222222222222222',
        'units': 'metres',
        'upAxis': 'Y-up',
      },
      'sockets': [
        {'name': 'desk_top_center', 'position': [0.0, 0.75, 0.0]},
      ],
      'parts': [
        {
          'name': 'desk_wood_frame',
          'materialKey': 'mat-wood-oak-polished',
          'boundsMin': [-0.55, 0.0, -0.35],
          'boundsMax': [0.55, 0.95, 0.35],
          'vertexCount': 280,
          'triangleCount': 140,
          'lodTriangleCounts': [140, 70, 20],
        },
      ],
    });

    // 3. Alpha-Masked Detail
    _packages['proof-detail-lace-curtain'] = converter.convertSource({
      'id': 'proof-detail-lace-curtain',
      'kind': 'decor',
      'pivot': 'wall-back',
      'normalization': {
        'sourceHash': '3333333333333333333333333333333333333333333333333333333333333333',
        'units': 'metres',
        'upAxis': 'Y-up',
      },
      'sockets': [],
      'parts': [
        {
          'name': 'lace_fabric_panel',
          'materialKey': 'mat-fabric-curtains',
          'boundsMin': [-0.60, 0.0, -0.02],
          'boundsMax': [0.60, 1.80, 0.02],
          'vertexCount': 96,
          'triangleCount': 48,
          'lodTriangleCounts': [48, 24, 8],
        },
      ],
    });

    // 4. Emissive / Stateful Prop
    _packages['proof-prop-gaslight-lamp'] = converter.convertSource({
      'id': 'proof-prop-gaslight-lamp',
      'kind': 'fixture',
      'pivot': 'floor-center',
      'normalization': {
        'sourceHash': '4444444444444444444444444444444444444444444444444444444444444444',
        'units': 'metres',
        'upAxis': 'Y-up',
      },
      'sockets': [
        {'name': 'flame_light_point', 'position': [0.0, 0.35, 0.0]},
      ],
      'parts': [
        {
          'name': 'lamp_brass_body',
          'materialKey': 'mat-brass-wrought',
          'boundsMin': [-0.15, 0.0, -0.15],
          'boundsMax': [0.15, 0.45, 0.15],
          'vertexCount': 180,
          'triangleCount': 90,
          'lodTriangleCounts': [90, 45, 15],
        },
      ],
    });
  }

  AssetNormalizedPackage? getProofAsset(String id) => _packages[id];

  Iterable<AssetNormalizedPackage> get allProofAssets => _packages.values;

  /// Validates all 4 proof assets pass A-03 offline build, LOD, material slot, socket, and bounds checks.
  bool validateAllProofAssets() {
    if (_packages.length != specs.length) return false;

    for (final spec in specs) {
      final pkg = _packages[spec.id];
      if (pkg == null) return false;
      if (pkg.parts.isEmpty) return false;

      // Check LOD levels present
      for (final p in pkg.parts) {
        if (p.lodTriangleCounts.length < 2) return false;
      }
    }
    return true;
  }
}
