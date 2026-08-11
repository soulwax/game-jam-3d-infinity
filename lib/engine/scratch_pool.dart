import 'dart:typed_data';
import 'package:quarantine/engine/math3.dart';

/// Pre-allocated struct pool for zero-allocation performance in hot rendering loops.
class ScratchPool {
  static final List<Vec3> _vectorPool = List.generate(64, (_) => Vec3(0, 0, 0));
  static int _vectorIndex = 0;

  static final List<Float32List> _matrixPool = List.generate(16, (_) => Float32List(16));
  static int _matrixIndex = 0;

  /// Acquires a temporary Vec3 from the pre-allocated pool.
  static Vec3 acquireVec3([double x = 0, double y = 0, double z = 0]) {
    final v = _vectorPool[_vectorIndex];
    _vectorIndex = (_vectorIndex + 1) % _vectorPool.length;
    v.x = x;
    v.y = y;
    v.z = z;
    return v;
  }

  /// Acquires a temporary 4x4 matrix buffer.
  static Float32List acquireMatrix() {
    final m = _matrixPool[_matrixIndex];
    _matrixIndex = (_matrixIndex + 1) % _matrixPool.length;
    return m;
  }

  /// Resets allocation indices at the start of each frame.
  static void resetFrame() {
    _vectorIndex = 0;
    _matrixIndex = 0;
  }

  /// Self-validation for unit tests.
  static bool validate() {
    resetFrame();
    final v1 = acquireVec3(1, 2, 3);
    final v2 = acquireVec3(4, 5, 6);
    if (v1.x != 1 || v2.x != 4) return false;

    final m = acquireMatrix();
    if (m.length != 16) return false;

    return true;
  }
}
