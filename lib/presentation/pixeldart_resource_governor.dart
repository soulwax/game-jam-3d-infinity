import 'package:quarantine/presentation/pixeldart_capability_matrix.dart';

/// Resource tracking and draw call batch governor for Pixeldart engine.
class PixeldartResourceGovernor {
  final PixeldartCapabilityMatrix matrix;
  int _currentVramUsageMB = 0;
  int _currentDrawCallCount = 0;
  final Map<String, int> _vramTextureCache = {};

  PixeldartResourceGovernor({required this.matrix});

  int get currentVramUsageMB => _currentVramUsageMB;
  int get currentDrawCallCount => _currentDrawCallCount;

  /// Registers a texture asset allocation in VRAM. Evicts LRU if exceeding budget.
  bool allocateTexture(String textureId, int sizeMB) {
    if (_vramTextureCache.containsKey(textureId)) {
      return true; // Already resident
    }

    while (_currentVramUsageMB + sizeMB > matrix.maxVramBudgetMB && _vramTextureCache.isNotEmpty) {
      // LRU eviction
      final evictId = _vramTextureCache.keys.first;
      final evictSize = _vramTextureCache.remove(evictId)!;
      _currentVramUsageMB -= evictSize;
    }

    if (_currentVramUsageMB + sizeMB <= matrix.maxVramBudgetMB) {
      _vramTextureCache[textureId] = sizeMB;
      _currentVramUsageMB += sizeMB;
      return true;
    }
    return false; // Insufficient VRAM budget
  }

  /// Batches draw calls and asserts frame draw call budget.
  int processInstancedBatches(int rawPropCount, {int instanceBatchSize = 10}) {
    if (matrix.supportsInstancedArrays) {
      _currentDrawCallCount = (rawPropCount / instanceBatchSize).ceil();
    } else {
      _currentDrawCallCount = rawPropCount;
    }
    return _currentDrawCallCount;
  }

  /// Checks if current frame draw calls are within budget limit.
  bool isWithinDrawCallBudget() => _currentDrawCallCount <= matrix.maxDrawCallsPerFrame;

  /// Self-validation for unit tests.
  static bool validate() {
    final matrix = PixeldartCapabilityMatrix.negotiate(isWebGL2Available: true);
    final governor = PixeldartResourceGovernor(matrix: matrix);

    // Test texture allocation
    final ok1 = governor.allocateTexture('tex-oak-wood-4k', 64);
    final ok2 = governor.allocateTexture('tex-brick-2k', 64);
    final ok3 = governor.allocateTexture('tex-fabric-2k', 64);
    final ok4 = governor.allocateTexture('tex-brass-2k', 64);
    if (!ok1 || !ok2 || !ok3 || !ok4) return false;

    // Allocate beyond 256MB to test LRU eviction
    final ok5 = governor.allocateTexture('tex-plaster-4k', 64);
    if (!ok5) return false;
    if (governor.currentVramUsageMB > matrix.maxVramBudgetMB) return false;

    // Test instanced draw batching
    final batches = governor.processInstancedBatches(50, instanceBatchSize: 10);
    if (batches != 5) return false;
    if (!governor.isWithinDrawCallBudget()) return false;

    return true;
  }
}
