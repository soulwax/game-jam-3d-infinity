import 'mat4.dart';

enum LodLevel { lod0, lod1, lod2 }

/// Authoritative LOD distance selector with hysteresis for VIS-010 / R-09.
class InstanceLodSelector {
  final double lod0MaxDistance;
  final double lod1MaxDistance;
  final double hysteresisMargin;

  const InstanceLodSelector({
    this.lod0MaxDistance = 10.0,
    this.lod1MaxDistance = 25.0,
    this.hysteresisMargin = 0.5,
  }) : assert(lod0MaxDistance > 0, 'lod0MaxDistance must be positive'),
       assert(lod1MaxDistance > lod0MaxDistance, 'lod1MaxDistance must be > lod0MaxDistance');

  LodLevel selectLod({
    required double distanceMetres,
    LodLevel previousLod = LodLevel.lod0,
  }) {
    // Apply hysteresis margin based on previous LOD level
    final lod0Boundary = lod0MaxDistance + (previousLod == LodLevel.lod0 ? hysteresisMargin : -hysteresisMargin);
    final lod1Boundary = lod1MaxDistance + (previousLod == LodLevel.lod1 ? hysteresisMargin : -hysteresisMargin);

    if (distanceMetres <= lod0Boundary) {
      return LodLevel.lod0;
    } else if (distanceMetres <= lod1Boundary) {
      return LodLevel.lod1;
    } else {
      return LodLevel.lod2;
    }
  }
}

/// Bounded 16-instance transform stream for VIS-010 / R-09.
class InstancedMeshStream {
  final int maxCapacity;
  final List<Mat4> _transforms = [];

  InstancedMeshStream({this.maxCapacity = 16}) {
    if (maxCapacity <= 0) {
      throw ArgumentError('maxCapacity must be positive');
    }
  }

  List<Mat4> get transforms => List.unmodifiable(_transforms);
  int get instanceCount => _transforms.length;

  bool addInstance(Mat4 transform) {
    if (_transforms.length >= maxCapacity) {
      return false; // Bounded capacity cap reached
    }
    _transforms.add(transform);
    return true;
  }

  void clear() {
    _transforms.clear();
  }
}
