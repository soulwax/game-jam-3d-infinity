import 'package:quarantine/engine/lod_mesh_pipeline.dart';

void main() {
  print('Running test_lod_mesh_pipeline...');

  const LODMeshDescriptor descriptor = LODMeshDescriptor(
    meshId: 'test_mesh',
    lod0Triangles: 1000,
    lod1Triangles: 500,
    lod2Triangles: 250,
    switchDistance0to1M: 2.0,
    switchDistance1to2M: 5.0,
    hysteresisMarginM: 0.25,
  );

  // Test: Distance < 2.0m selects LOD0 with 0% reduction
  LODEvaluationResult r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 1.5,
  );
  assert(r.selectedLod == LODLevel.lod0, 'Expected lod0');
  assert(r.triangleReductionRatio == 0.0, 'Expected 0% reduction');

  // Test: Distance 2.5m selects LOD1 with ~50% reduction
  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 2.5,
  );
  assert(r.selectedLod == LODLevel.lod1, 'Expected lod1');
  assert(r.triangleReductionRatio == 0.5, 'Expected 50% reduction');

  // Test: Distance 6.0m selects LOD2 with ~75% reduction
  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 6.0,
  );
  assert(r.selectedLod == LODLevel.lod2, 'Expected lod2');
  assert(r.triangleReductionRatio == 0.75, 'Expected 75% reduction');

  // Test: Hysteresis margin prevents rapid flip-flopping at boundaries
  // Currently at LOD0
  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 2.1,
    previousLod: LODLevel.lod0,
  );
  assert(r.selectedLod == LODLevel.lod0, 'Hysteresis should keep it at lod0 at 2.1m');
  
  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 2.3,
    previousLod: LODLevel.lod0,
  );
  assert(r.selectedLod == LODLevel.lod1, 'Past hysteresis margin, should switch to lod1');

  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 1.9,
    previousLod: LODLevel.lod1,
  );
  assert(r.selectedLod == LODLevel.lod1, 'Hysteresis should keep it at lod1 at 1.9m');

  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 1.7,
    previousLod: LODLevel.lod1,
  );
  assert(r.selectedLod == LODLevel.lod0, 'Past hysteresis margin, should switch to lod0');

  // Test: Cross-fade weight calculation is smooth in [0.0, 1.0]
  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 1.5,
    crossFadeFramesRemaining: 30,
  );
  assert(r.isCrossFading == true, 'Expected cross-fading to be true');
  assert(r.crossFadeWeight01 == 0.5, 'Expected crossFadeWeight to be 0.5');

  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 1.5,
    crossFadeFramesRemaining: 90, // over 60 clamps to 1.0
  );
  assert(r.crossFadeWeight01 == 1.0, 'Expected crossFadeWeight to be clamped to 1.0');

  r = LODMeshPipeline.evaluateLOD(
    descriptor: descriptor,
    cameraDistanceM: 1.5,
    crossFadeFramesRemaining: 0,
  );
  assert(r.isCrossFading == false, 'Expected cross-fading to be false');
  assert(r.crossFadeWeight01 == 0.0, 'Expected crossFadeWeight to be 0.0');

  // Test: Invalid descriptors fail validation
  bool validationFailed = false;
  try {
    LODMeshDescriptor(
      meshId: 'invalid',
      lod0Triangles: 100,
      lod1Triangles: 200, // Invalid: lod1 > lod0
      lod2Triangles: 50,
    );
  } catch (e) {
    validationFailed = true;
  }
  assert(validationFailed, 'Expected validation to fail for invalid triangles');

  validationFailed = false;
  try {
    LODMeshDescriptor(
      meshId: 'invalid',
      lod0Triangles: 100,
      lod1Triangles: 50,
      lod2Triangles: 10,
      switchDistance0to1M: 5.0,
      switchDistance1to2M: 2.0, // Invalid: d1to2 < d0to1
    );
  } catch (e) {
    validationFailed = true;
  }
  assert(validationFailed, 'Expected validation to fail for invalid distances');

  assert(LODMeshPipeline.validate(), 'Built-in self-test should pass');

  print('All tests passed for LOD Mesh Pipeline.');
}
