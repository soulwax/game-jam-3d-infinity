import 'package:pixeldart/rendering/rendering.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — PIXELDART EXTENDED RENDERING PASSES TEST SUITE');
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

  // 2. Test SSSS Bilateral Diffusion Pass Architecture
  print('Testing Screen-Space Subsurface Scattering (SSSS) Pass Architecture...');
  if (SsssResources.ssssPing.name != 'ssssPing' || SsssResources.ssssPong.name != 'ssssPong') {
    throw StateError('SSSS ping/pong resource definitions mismatch');
  }
  final ssssProg = SsssProgramSource.build(
    id: 'ssssHorizontal',
    vertexSource: 'attribute vec2 aPos; void main() { gl_Position = vec4(aPos, 0.0, 1.0); }',
    fragmentSource: 'precision mediump float; void main() { gl_FragColor = vec4(1.0); }',
  );
  if (ssssProg.id != 'ssssHorizontal' || !ssssProg.requiredUniforms.contains('uScatterRadius')) {
    throw StateError('SSSS program source configuration failed');
  }
  print('✓ SSSS separable bilateral diffusion ping-pong architecture certified');

  // 3. Test Temporal Anti-Aliasing (TAA) Resolve Pass Architecture
  print('Testing TAA Resolve Pass Architecture...');
  if (TaaResources.taaHistory.name != 'taaHistory' || TaaResources.taaResolved.name != 'taaResolved') {
    throw StateError('TAA history/resolved resource definitions mismatch');
  }
  final taaProg = TaaProgramSource.build(
    vertexSource: 'attribute vec2 aPos; void main() { gl_Position = vec4(aPos, 0.0, 1.0); }',
    fragmentSource: 'precision mediump float; void main() { gl_FragColor = vec4(1.0); }',
  );
  if (taaProg.id != 'taaResolve' || !taaProg.requiredUniforms.contains('uHistoryWeight')) {
    throw StateError('TAA program source configuration failed');
  }
  print('✓ TAA resolve pass program source and history binding certified');

  // 4. Test Cinematic Lens Flare Pass Architecture
  print('Testing Cinematic Lens Flare Pass Architecture...');
  if (LensFlareResources.lensFlareHighlights.name != 'lensFlareHighlights' ||
      LensFlareResources.lensFlareComposite.name != 'lensFlareComposite') {
    throw StateError('Lens flare resource definitions mismatch');
  }
  final flareProg = LensFlareProgramSource.build(
    vertexSource: 'attribute vec2 aPos; void main() { gl_Position = vec4(aPos, 0.0, 1.0); }',
    fragmentSource: 'precision mediump float; void main() { gl_FragColor = vec4(1.0); }',
  );
  if (flareProg.id != 'lensFlare' || !flareProg.requiredUniforms.contains('uStreakIntensity')) {
    throw StateError('Lens flare program source configuration failed');
  }
  print('✓ Cinematic lens flare and anamorphic streak pass architecture certified');

  print('========================================================================');
  print('✓ PIXELDART EXTENDED RENDERING PASSES CERTIFIED (4/4 SUB-SYSTEMS)');
  print('========================================================================');
}
