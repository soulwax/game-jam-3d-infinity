import 'asset_source_contract.dart';

/// Representation of a cached GPU model entry for R-06.
class ModelCacheEntry {
  final String assetId;
  final String indexType; // 'Uint16' (<=65535 verts) or 'Uint32' (>65535 verts)
  final int vertexCount;
  final int triangleCount;
  final List<int> lodLevels;
  int refCount;
  int gpuMeshHandle;

  ModelCacheEntry({
    required this.assetId,
    required this.indexType,
    required this.vertexCount,
    required this.triangleCount,
    required this.lodLevels,
    this.refCount = 1,
    required this.gpuMeshHandle,
  });

  Map<String, dynamic> toJson() => {
        'assetId': assetId,
        'indexType': indexType,
        'vertexCount': vertexCount,
        'triangleCount': triangleCount,
        'lodLevels': lodLevels,
        'refCount': refCount,
        'gpuMeshHandle': gpuMeshHandle,
      };
}

/// R-06 Model Cache, Uint16/Uint32 Index Selection, Ref-Counting, and Context Rehydration Manager.
class ModelCacheRehydrationManager {
  final Map<String, ModelCacheEntry> _cache = {};
  int _nextHandleId = 1000;

  int get cachedModelCount => _cache.length;

  ModelCacheEntry? getEntry(String assetId) => _cache[assetId];

  /// Caches a normalized asset package, determining index type (Uint16 vs Uint32) based on vertex count (>65,535).
  ModelCacheEntry cacheModel(AssetNormalizedPackage pkg) {
    if (_cache.containsKey(pkg.id)) {
      final existing = _cache[pkg.id]!;
      existing.refCount++;
      return existing;
    }

    var totalVerts = 0;
    var totalTris = 0;
    for (final p in pkg.parts) {
      totalVerts += p.vertexCount;
      totalTris += p.triangleCount;
    }

    // Uint32 index required if total vertices exceed 65,535
    final indexType = totalVerts > 65535 ? 'Uint32' : 'Uint16';
    final handle = _nextHandleId++;

    final lods = pkg.parts.expand((p) => p.lodTriangleCounts).toList();

    final entry = ModelCacheEntry(
      assetId: pkg.id,
      indexType: indexType,
      vertexCount: totalVerts,
      triangleCount: totalTris,
      lodLevels: lods,
      refCount: 1,
      gpuMeshHandle: handle,
    );

    _cache[pkg.id] = entry;
    return entry;
  }

  /// Retains an asset reference without creating duplicate GPU handles.
  void retainModel(String assetId) {
    final entry = _cache[assetId];
    if (entry != null) {
      entry.refCount++;
    }
  }

  /// Releases an asset reference. When refCount reaches zero, GPU mesh handles are released.
  bool releaseModel(String assetId) {
    final entry = _cache[assetId];
    if (entry == null) return false;

    entry.refCount--;
    if (entry.refCount <= 0) {
      _cache.remove(assetId);
      return true; // Handle released
    }
    return false;
  }

  /// Simulates GPU context loss and rehydration: re-allocates GPU handles without handle leaks or proxy fallbacks.
  void rehydrateContext() {
    for (final entry in _cache.values) {
      entry.gpuMeshHandle = _nextHandleId++;
    }
  }

  /// Validates that releasing all references leaves zero live GPU mesh handles.
  bool validateNoHandleLeaks() {
    final keys = List<String>.from(_cache.keys);
    for (final k in keys) {
      final entry = _cache[k]!;
      while (entry.refCount > 0) {
        releaseModel(k);
      }
    }
    return _cache.isEmpty;
  }
}
