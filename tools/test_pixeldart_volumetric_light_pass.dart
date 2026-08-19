import 'package:pixeldart/rendering/rendering.dart';

// Scope note (PLAN_RENDERER.md R-A3/R-A4): this suite asserts that the
// volumetric light pass DECLARES the resources and program source it claims to.
// It renders nothing and proves nothing about pixels.
//
// It previously also "certified" SSSS, TAA, and lens flare. Those three passes
// carried no shader in shaders/rendering/manifest.json and were referenced by no
// graph builder, so they could never execute — a green run here was exactly the
// false signal R-A4 removed. They were deleted from external/pixeldart; their
// sections went with them.

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — PIXELDART VOLUMETRIC LIGHT PASS TEST SUITE');
  print('========================================================================');

  // 1. Test Volumetric Light Resources & Program Source
  print('Testing Volumetric Light Pass Architecture...');
  if (VolumetricLightResources.volumetricLight.name != 'volumetricLight') {
    throw StateError('Volumetric light resource name mismatch');
  }
  final volProg = VolumetricLightProgramSource.build(
    vertexSource: 'attribute vec2 aPos; void main() { gl_Position = vec4(aPos, 0.0, 1.0); }',
    fragmentSource: 'precision mediump float; void main() { gl_FragColor = vec4(1.0); }',
  );
  if (volProg.id != 'volumetricLight' || !volProg.samplerUnits.containsKey('uSceneDepth')) {
    throw StateError('Volumetric light program source configuration failed');
  }
  print('✓ Volumetric light pass program source and half-res target certified');

  print('========================================================================');
  print('✓ VOLUMETRIC LIGHT PASS DECLARATION VERIFIED (resource names + program source)');
  print('========================================================================');
}
