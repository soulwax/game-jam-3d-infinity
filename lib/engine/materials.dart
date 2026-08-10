class Material {
  final int atlasLayer;
  final double emissiveStrength;
  final double uvScale;
  final int flags;
  final double roughness;
  final double metallic;
  final double aoStrength;
  final double normalScale;

  Material(
    this.atlasLayer,
    this.emissiveStrength,
    this.uvScale,
    this.flags, {
    this.roughness = 0.5,
    this.metallic = 0.0,
    this.aoStrength = 1.0,
    this.normalScale = 1.0,
  });

  int get _hash {
    int h = 5381;
    h = ((h << 5) + h) ^ atlasLayer;
    h = ((h << 5) + h) ^ emissiveStrength.toStringAsFixed(4).hashCode;
    h = ((h << 5) + h) ^ uvScale.toStringAsFixed(4).hashCode;
    h = ((h << 5) + h) ^ flags;
    h = ((h << 5) + h) ^ roughness.toStringAsFixed(4).hashCode;
    h = ((h << 5) + h) ^ metallic.toStringAsFixed(4).hashCode;
    h = ((h << 5) + h) ^ aoStrength.toStringAsFixed(4).hashCode;
    h = ((h << 5) + h) ^ normalScale.toStringAsFixed(4).hashCode;
    return h & 0x7FFFFFFF;
  }

  int get id => _hash;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Material &&
          runtimeType == other.runtimeType &&
          atlasLayer == other.atlasLayer &&
          emissiveStrength == other.emissiveStrength &&
          uvScale == other.uvScale &&
          flags == other.flags &&
          roughness == other.roughness &&
          metallic == other.metallic &&
          aoStrength == other.aoStrength &&
          normalScale == other.normalScale;

  @override
  int get hashCode => _hash;

  Map<String, Object> toJson() => {
        'atlasLayer': atlasLayer,
        'emissiveStrength': emissiveStrength,
        'uvScale': uvScale,
        'flags': flags,
        'roughness': roughness,
        'metallic': metallic,
        'aoStrength': aoStrength,
        'normalScale': normalScale,
      };
}

class Materials {
  final List<Material> table;
  final Map<int, int> _hashToIndex = {};

  Materials(this.table) : assert(table.length <= 32) {
    for (int i = 0; i < table.length; i++) {
      _hashToIndex[table[i]._hash] = i;
    }
  }

  int add(Material m) {
    final hash = m._hash;
    if (_hashToIndex.containsKey(hash)) {
      return _hashToIndex[hash]!;
    }
    if (table.length >= 32) {
      throw Exception('Material table overflow: max 32 materials');
    }
    final index = table.length;
    table.add(m);
    _hashToIndex[hash] = index;
    return index;
  }

  int? shaderIndexForId(int id) => _hashToIndex[id];
}
