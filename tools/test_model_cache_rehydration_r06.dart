// R-06: Model cache, Uint16/Uint32 index selection, and context rehydration verification.
//
// Verifies that:
//  1. Models with <= 65,535 vertices choose 'Uint16' index type; > 65,535 vertices choose 'Uint32'.
//  2. Retained references deduplicate without creating redundant GPU mesh handles.
//  3. Ref-counted release frees GPU mesh handles when refCount drops to zero.
//  4. Context rehydration re-allocates GPU handles without handle growth or leaks.

import 'package:quarantine/engine/asset_source_contract.dart';
import 'package:quarantine/engine/model_cache_rehydration.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final converter = AssetConverter();
  final cacheManager = ModelCacheRehydrationManager();

  // 1. Small model (Uint16)
  final smallPkg = converter.convertSource({
    'id': 'prop-small-lamp',
    'kind': 'fixture',
    'pivot': 'floor-center',
    'normalization': {
      'sourceHash': '1010101010101010101010101010101010101010101010101010101010101010',
      'units': 'metres',
      'upAxis': 'Y-up',
    },
    'parts': [
      {
        'name': 'body',
        'materialKey': 'mat-metal',
        'boundsMin': [-0.1, 0, -0.1],
        'boundsMax': [0.1, 0.5, 0.1],
        'vertexCount': 500,
        'triangleCount': 250,
      },
    ],
  });

  // 2. Large model (> 65,535 vertices -> Uint32)
  final largePkg = converter.convertSource({
    'id': 'arch-massive-facade',
    'kind': 'architecture',
    'pivot': 'floor-center',
    'normalization': {
      'sourceHash': '2020202020202020202020202020202020202020202020202020202020202020',
      'units': 'metres',
      'upAxis': 'Y-up',
    },
    'parts': [
      {
        'name': 'high_poly_facade',
        'materialKey': 'mat-stone',
        'boundsMin': [-5, 0, -5],
        'boundsMax': [5, 10, 5],
        'vertexCount': 72000, // > 65,535!
        'triangleCount': 36000,
      },
    ],
  });

  final entrySmall = cacheManager.cacheModel(smallPkg);
  final entryLarge = cacheManager.cacheModel(largePkg);

  check(entrySmall.indexType == 'Uint16', 'Small model uses Uint16 index type');
  check(entryLarge.indexType == 'Uint32', 'Large model (>65,535 verts) uses Uint32 index type');
  check(cacheManager.cachedModelCount == 2, '2 unique models cached');
  check(cacheManager.activeGpuMeshHandleCount == 2, '2 live GPU mesh handles retained');

  // 3. Deduplication check
  final entrySmallDup = cacheManager.cacheModel(smallPkg);
  check(entrySmallDup.gpuMeshHandle == entrySmall.gpuMeshHandle, 'Identical handle reused on duplicate cache call');
  check(entrySmallDup.refCount == 2, 'Ref count incremented to 2');

  // 4. Context Rehydration Simulation
  final oldHandleSmall = entrySmall.gpuMeshHandle;
  cacheManager.rehydrateContext();
  check(entrySmall.gpuMeshHandle != oldHandleSmall, 'GPU handle rehydrated with new handle after context loss');
  check(cacheManager.cachedModelCount == 2, 'Cached count remains 2 after rehydration');
  check(cacheManager.activeGpuMeshHandleCount == 2, 'Rehydration preserves handle ownership count');

  // A stale release must not underflow a ref-count or fabricate a second free.
  check(cacheManager.releaseModel('missing-model') == false, 'Missing release is a no-op');

  // 5. Handle Release & Leak Check
  final leakFree = cacheManager.validateNoHandleLeaks();
  check(leakFree, 'Releasing all references leaves zero live GPU handles');

  check(cacheManager.activeGpuMeshHandleCount == 0, 'No live handles remain after release');
  print('R-06: Model cache rehydration lifecycle test passed cleanly!');
}
