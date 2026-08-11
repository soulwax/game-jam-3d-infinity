import 'package:quarantine/config.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/scratch_pool.dart';
import 'package:quarantine/presentation/dynamic_resolution_scaler.dart';
import 'package:quarantine/presentation/pbr_material_shading_pipeline.dart';
import 'package:quarantine/game/save_integrity_validator.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/engine/camera.dart';

Never _fail(String message) =>
    throw StateError('Performance & Frame Pacing test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('Testing Performance Budgets, Frame Pacing & Memory Stabilization...');

  // 1. Engine self-validations
  _expect(DynamicResolutionScaler.validate(), 'DynamicResolutionScaler self-validation failed');
  _expect(ScratchPool.validate(), 'ScratchPool self-validation failed');
  _expect(SaveIntegrityValidator.validate(), 'SaveIntegrityValidator self-validation failed');

  // 2. Dynamic Resolution Scaler Frame Pacing Benchmark
  print('Benchmarking Dynamic Resolution Scaler over 1,000 frames...');
  final drs = DynamicResolutionScaler();
  for (var i = 0; i < 500; i++) {
    drs.recordFrame(22.0); // Simulate lag
  }
  _expect(drs.currentRenderScale == drs.minRenderScale, 'DRS must scale down under prolonged lag');

  for (var i = 0; i < 500; i++) {
    drs.recordFrame(11.0); // Simulate recovery
  }
  _expect(drs.currentRenderScale > drs.minRenderScale, 'DRS must recover render scale when fast');

  // 3. ScratchPool 10,000 allocation stress test
  print('Benchmarking ScratchPool zero-allocation reuse over 10,000 operations...');
  final swScratch = Stopwatch()..start();
  for (var i = 0; i < 10000; i++) {
    final v = ScratchPool.acquireVec3(i.toDouble(), (i * 2).toDouble(), (i * 3).toDouble());
    final m = ScratchPool.acquireMatrix();
    m[0] = v.x;
  }
  swScratch.stop();
  print('  - 10,000 ScratchPool allocations completed in ${swScratch.elapsedMicroseconds} µs');
  _expect(swScratch.elapsedMilliseconds < 50, 'ScratchPool allocation must take < 50ms');

  // 4. Save Integrity Migration Benchmark
  print('Benchmarking Save Integrity Validation over 1,000 save states...');
  final swSave = Stopwatch()..start();
  for (var i = 1; i <= 1000; i++) {
    final raw = {'schemaVersion': 1, 'day': (i % 21) + 1, 'gasSupply': 90.0};
    final validated = SaveIntegrityValidator.validateAndMigrate(raw);
    _expect(validated['schemaVersion'] == 2, 'Migration to v2 must succeed');
  }
  swSave.stop();
  print('  - 1,000 Save migrations completed in ${swSave.elapsedMicroseconds} µs');
  _expect(swSave.elapsedMilliseconds < 50, 'Save migration must take < 50ms');

  // 5. Raycast & Focus Resolution Stress Test (5,000 queries)
  print('Benchmarking Focus Resolver across 5,000 queries...');
  final house = House(42);
  final camera = Camera();
  final hall = house.byId('hall')!;
  camera.eye = hall.origin + Vec3(1.0, playerEyeHeight, 1.0);
  camera.fwd = Vec3(0, 0, 1);

  final swFocus = Stopwatch()..start();
  for (var i = 0; i < 5000; i++) {
    final res = resolveFocus(
      camera: camera,
      house: house,
      currentRoom: 'hall',
    );
    _expect(res.kind != FocusKind.inventory, 'Focus query must resolve');
  }
  swFocus.stop();
  print('  - 5,000 Focus queries completed in ${swFocus.elapsedMicroseconds} µs');
  _expect(swFocus.elapsedMilliseconds < 100, '5,000 Focus queries must take < 100ms');

  // 6. PBR Material Shading Evaluation Stress Test (5,000 surface evaluations)
  print('Benchmarking PBR Material Shading Pipeline across 5,000 evaluations...');
  final surface = PBRSurfaceInput(
    worldPosition: Vec3(0, 1, 0),
    normal: Vec3(0, 1, 0),
    viewDir: Vec3(0, 1, 1).normalized,
    albedo: Vec3(0.6, 0.4, 0.2),
    roughness: 0.4,
    metallic: 0.1,
  );

  final lights = [
    PBRLightSource(
      position: Vec3(0, 3, 0),
      color: Vec3(1.0, 0.9, 0.8),
      intensity: 1.5,
    ),
  ];

  final swPbr = Stopwatch()..start();
  for (var i = 0; i < 5000; i++) {
    final pbrRes = PBRMaterialShadingPipeline.evaluateSurface(
      surface: surface,
      lights: lights,
    );
    _expect(pbrRes.totalRadiance.x > 0, 'PBR output must be positive');
  }
  swPbr.stop();
  print('  - 5,000 PBR evaluations completed in ${swPbr.elapsedMicroseconds} µs');
  _expect(swPbr.elapsedMilliseconds < 100, '5,000 PBR evaluations must take < 100ms');

  print('All Performance Budgets, Frame Pacing & Memory Stabilization tests passed successfully!');
}
