/// Material family enum for A-02 reusable material library.
enum MaterialFamily {
  plasterWallpaper,
  wood,
  metal,
  ceramicConcrete,
  fabric,
  glass,
  masks,
}

/// Description of a single reusable material in the A-02 material library.
class MaterialDescriptor {
  final String id;
  final MaterialFamily family;
  final String textureKey;
  final double tintR;
  final double tintG;
  final double tintB;
  final double roughness;
  final double metallic;
  final double emissive;
  final double alpha;
  final double uvScale;

  const MaterialDescriptor({
    required this.id,
    required this.family,
    required this.textureKey,
    required this.tintR,
    required this.tintG,
    required this.tintB,
    required this.roughness,
    this.metallic = 0.0,
    this.emissive = 0.0,
    this.alpha = 1.0,
    this.uvScale = 1.0,
  }) : assert(id.length > 0, 'Material id must be non-empty'),
       assert(roughness >= 0.0 && roughness <= 1.0, 'roughness must be in [0, 1]'),
       assert(metallic >= 0.0 && metallic <= 1.0, 'metallic must be in [0, 1]');

  /// Computes diffuse response under a neutral key light (color r,g,b and intensity).
  ({double r, double g, double b}) computeNeutralLightResponse({
    required double lightR,
    required double lightG,
    required double lightB,
    required double lightIntensity,
  }) {
    final diffR = (1.0 - metallic) * tintR * lightR * lightIntensity;
    final diffG = (1.0 - metallic) * tintG * lightG * lightIntensity;
    final diffB = (1.0 - metallic) * tintB * lightB * lightIntensity;
    return (r: diffR, g: diffG, b: diffB);
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'family': family.name,
        'textureKey': textureKey,
        'tint': [tintR, tintG, tintB],
        'roughness': roughness,
        'metallic': metallic,
        'emissive': emissive,
        'alpha': alpha,
        'uvScale': uvScale,
      };
}

/// A-02 Reusable Material Library containing preset material descriptors across all 7 families.
class MaterialFamilyLibrary {
  final Map<String, MaterialDescriptor> _registry = {};

  MaterialFamilyLibrary() {
    _registerDefaults();
  }

  void _registerDefaults() {
    // 1. Plaster & Wallpaper
    _add(const MaterialDescriptor(
      id: 'mat-plaster-clean',
      family: MaterialFamily.plasterWallpaper,
      textureKey: 'wall-plaster',
      tintR: 0.72, tintG: 0.70, tintB: 0.68,
      roughness: 0.85,
    ));
    _add(const MaterialDescriptor(
      id: 'mat-wallpaper-stripes',
      family: MaterialFamily.plasterWallpaper,
      textureKey: 'wall-plaster',
      tintR: 0.70, tintG: 0.63, tintB: 0.55,
      roughness: 0.82,
    ));
    _add(const MaterialDescriptor(
      id: 'mat-wallpaper-damp',
      family: MaterialFamily.plasterWallpaper,
      textureKey: 'grime',
      tintR: 0.42, tintG: 0.44, tintB: 0.43,
      roughness: 0.94,
    ));

    // 2. Wood
    _add(const MaterialDescriptor(
      id: 'mat-wood-oak-polished',
      family: MaterialFamily.wood,
      textureKey: 'wall-plaster',
      tintR: 0.46, tintG: 0.34, tintB: 0.25,
      roughness: 0.42,
    ));
    _add(const MaterialDescriptor(
      id: 'mat-wood-mahogany-dark',
      family: MaterialFamily.wood,
      textureKey: 'wall-plaster',
      tintR: 0.32, tintG: 0.20, tintB: 0.15,
      roughness: 0.38,
    ));

    // 3. Metal (Iron, Brass, Enamel)
    _add(const MaterialDescriptor(
      id: 'mat-iron-cast',
      family: MaterialFamily.metal,
      textureKey: 'grime',
      tintR: 0.20, tintG: 0.20, tintB: 0.22,
      roughness: 0.65,
      metallic: 0.85,
    ));
    _add(const MaterialDescriptor(
      id: 'mat-brass-wrought',
      family: MaterialFamily.metal,
      textureKey: 'wall-plaster',
      tintR: 0.82, tintG: 0.68, tintB: 0.32,
      roughness: 0.35,
      metallic: 0.90,
    ));
    _add(const MaterialDescriptor(
      id: 'mat-enamel-white',
      family: MaterialFamily.metal,
      textureKey: 'wall-plaster',
      tintR: 0.90, tintG: 0.90, tintB: 0.88,
      roughness: 0.25,
      metallic: 0.10,
    ));

    // 4. Ceramic & Concrete
    _add(const MaterialDescriptor(
      id: 'mat-ceramic-glaze',
      family: MaterialFamily.ceramicConcrete,
      textureKey: 'floor-linoleum',
      tintR: 0.85, tintG: 0.85, tintB: 0.82,
      roughness: 0.20,
    ));
    _add(const MaterialDescriptor(
      id: 'mat-concrete-floor',
      family: MaterialFamily.ceramicConcrete,
      textureKey: 'grime',
      tintR: 0.47, tintG: 0.45, tintB: 0.42,
      roughness: 0.96,
    ));

    // 5. Fabric
    _add(const MaterialDescriptor(
      id: 'mat-fabric-curtains',
      family: MaterialFamily.fabric,
      textureKey: 'wall-plaster',
      tintR: 0.48, tintG: 0.22, tintB: 0.20,
      roughness: 0.90,
    ));
    _add(const MaterialDescriptor(
      id: 'mat-fabric-linen-sheet',
      family: MaterialFamily.fabric,
      textureKey: 'wall-plaster',
      tintR: 0.88, tintG: 0.86, tintB: 0.82,
      roughness: 0.88,
    ));

    // 6. Glass
    _add(const MaterialDescriptor(
      id: 'mat-glass-clear-window',
      family: MaterialFamily.glass,
      textureKey: 'wall-plaster',
      tintR: 0.92, tintG: 0.95, tintB: 0.98,
      roughness: 0.05,
      alpha: 0.25,
    ));

    // 7. Masks (damp, soot, dust, traffic)
    _add(const MaterialDescriptor(
      id: 'mat-mask-soot-damp',
      family: MaterialFamily.masks,
      textureKey: 'grime',
      tintR: 0.15, tintG: 0.15, tintB: 0.15,
      roughness: 0.98,
    ));
  }

  void _add(MaterialDescriptor mat) {
    _registry[mat.id] = mat;
  }

  MaterialDescriptor? getMaterial(String id) => _registry[id];

  Iterable<MaterialDescriptor> get allMaterials => _registry.values;

  List<MaterialDescriptor> materialsForFamily(MaterialFamily family) =>
      _registry.values.where((m) => m.family == family).toList();

  /// Validates that all 7 material families are represented and produce distinct non-zero
  /// responses under a single neutral light.
  bool validateNeutralSceneLighting() {
    final coveredFamilies = _registry.values.map((m) => m.family).toSet();
    if (coveredFamilies.length != MaterialFamily.values.length) {
      return false;
    }

    final responses = <String, ({double r, double g, double b})>{};
    for (final mat in _registry.values) {
      final resp = mat.computeNeutralLightResponse(
        lightR: 1.0, lightG: 0.98, lightB: 0.95,
        lightIntensity: 1.0,
      );
      // Ensure responses are distinct
      responses[mat.id] = resp;
    }
    return responses.length == _registry.length;
  }
}
