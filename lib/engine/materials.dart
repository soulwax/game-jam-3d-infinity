class Material {
  final int atlasLayer;
  final double emissiveStrength;
  final double uvScale;
  final int flags;

  Material(this.atlasLayer, this.emissiveStrength, this.uvScale, this.flags);

  int get _hash {
    int h = 5381;
    h = ((h << 5) + h) ^ atlasLayer;
    h = ((h << 5) + h) ^ emissiveStrength.toStringAsFixed(4).hashCode;
    h = ((h << 5) + h) ^ uvScale.toStringAsFixed(4).hashCode;
    h = ((h << 5) + h) ^ flags;
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
          flags == other.flags;

  @override
  int get hashCode => _hash;
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
