import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/screen_space_subsurface_scattering.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — SCREEN-SPACE SUBSURFACE SCATTERING (SSSS) TEST SUITE');
  print('========================================================================');

  // 1. Test Burley Dipole Diffusion Kernel Properties
  print('Testing Normalized Burley Diffusion Kernel...');
  final skinProfile = SSSDiffusionProfile.humanSkin;
  final rWeight0 = ScreenSpaceSubsurfaceEngine.burleyKernel(0.5, skinProfile.scatterRadius.x);
  final rWeight1 = ScreenSpaceSubsurfaceEngine.burleyKernel(3.0, skinProfile.scatterRadius.x);
  if (rWeight0 <= rWeight1) {
    throw StateError('Burley kernel must decay with radial distance: $rWeight0 <= $rWeight1');
  }

  // Red light penetrates deeper in skin and has higher tail energy at r = 4.0mm
  final redWeightAtDistance = ScreenSpaceSubsurfaceEngine.burleyKernel(4.0, skinProfile.scatterRadius.x);
  final blueWeightAtDistance = ScreenSpaceSubsurfaceEngine.burleyKernel(4.0, skinProfile.scatterRadius.z);
  if (redWeightAtDistance <= blueWeightAtDistance) {
    throw StateError('Red light must scatter further than blue light in human tissue: $redWeightAtDistance vs $blueWeightAtDistance');
  }
  print('✓ Burley spectral diffusion profile verified (red: ${redWeightAtDistance.toStringAsFixed(4)}, blue: ${blueWeightAtDistance.toStringAsFixed(4)})');

  // 2. Test Cross-Bilateral Depth-Guided Convolution
  print('Testing Depth-Guided Bilateral Convolution...');
  final centerColor = Vec3(0.8, 0.5, 0.4);
  final centerDepth = 2.0;

  final sampleColors = [
    Vec3(1.0, 0.0, 0.0), // Deep red scatter
    Vec3(0.0, 1.0, 0.0), // Background green (different depth)
    Vec3(0.9, 0.6, 0.5), // Surface flesh
  ];
  final sampleDepths = [
    2.01,  // Continuous surface
    5.50,  // Far background (must be rejected by bilateral filter)
    1.99,  // Continuous surface
  ];
  final sampleOffsets = [
    1.0,
    2.0,
    1.5,
  ];

  final ssssResult = ScreenSpaceSubsurfaceEngine.convolveSSSS(
    centerColor: centerColor,
    centerDepth: centerDepth,
    sampleColors: sampleColors,
    sampleDepths: sampleDepths,
    sampleOffsetsMm: sampleOffsets,
    profile: skinProfile,
    depthThreshold: 0.10,
  );

  // Background green should not bleed into scattered color
  if (ssssResult.scatteredColor.y > 0.65) {
    throw StateError('Background green incorrectly bled across depth discontinuity: ${ssssResult.scatteredColor}');
  }
  if (ssssResult.scatteredColor.x < 0.70) {
    throw StateError('Subsurface red scattering not accumulated: ${ssssResult.scatteredColor}');
  }
  print('✓ Cross-bilateral edge-preserving SSSS convolution certified');

  // 3. Test Alabaster Marble Material Profile
  print('Testing Alabaster Marble Diffusion Profile...');
  final marble = SSSDiffusionProfile.alabasterMarble;
  final marbleResult = ScreenSpaceSubsurfaceEngine.convolveSSSS(
    centerColor: Vec3(0.9, 0.9, 0.9),
    centerDepth: 1.5,
    sampleColors: [Vec3(0.8, 0.8, 0.8), Vec3(0.95, 0.95, 0.95)],
    sampleDepths: [1.51, 1.49],
    sampleOffsetsMm: [1.0, 1.5],
    profile: marble,
  );

  if (marbleResult.scatteredColor.x < 0.80) {
    throw StateError('Marble SSSS color out of expected range: ${marbleResult.scatteredColor}');
  }
  print('✓ Alabaster marble subsurface profile certified');

  print('========================================================================');
  print('✓ SCREEN-SPACE SUBSURFACE SCATTERING CERTIFIED (3/3 SUB-SYSTEMS)');
  print('========================================================================');
}
