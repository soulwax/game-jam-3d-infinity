import 'package:quarantine/engine/instanced_mesh_stream.dart';
import 'package:quarantine/engine/mat4.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final stream = InstancedMeshStream(maxCapacity: 16);
  check(stream.instanceCount == 0, 'starts empty');

  // Fill capacity to 16
  for (int i = 0; i < 16; i++) {
    check(stream.addInstance(Mat4.identity()), 'instance $i added');
  }
  check(stream.instanceCount == 16, '16 instances added');

  // 17th instance rejected
  check(!stream.addInstance(Mat4.identity()), '17th instance rejected by maxCapacity (16)');

  // LOD selector tests
  const selector = InstanceLodSelector(lod0MaxDistance: 10.0, lod1MaxDistance: 25.0, hysteresisMargin: 0.5);
  check(selector.selectLod(distanceMetres: 5.0) == LodLevel.lod0, '5m selects lod0');
  check(selector.selectLod(distanceMetres: 15.0) == LodLevel.lod1, '15m selects lod1');
  check(selector.selectLod(distanceMetres: 30.0) == LodLevel.lod2, '30m selects lod2');

  // Hysteresis test: staying at lod0 when distance is 10.3m (below 10.5m upper hysteresis limit)
  final h0 = selector.selectLod(distanceMetres: 10.3, previousLod: LodLevel.lod0);
  check(h0 == LodLevel.lod0, 'hysteresis keeps lod0 at 10.3m when previous is lod0');

  print('instanced mesh stream VIS-010 / R-09: 16-instance capacity cap, LOD distance tiers, and hysteresis pass');
}
