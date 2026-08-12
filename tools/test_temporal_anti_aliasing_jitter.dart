import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/temporal_anti_aliasing_jitter.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — TEMPORAL ANTI-ALIASING (TAA) & JITTER TEST SUITE');
  print('========================================================================');

  // 1. Test Halton Sequence Distribution & Bounds
  print('Testing Halton Subpixel Sequence Generator...');
  final jitterOffsets = TemporalAntiAliasingEngine.generateHaltonSequence(16);
  if (jitterOffsets.length != 16) {
    throw StateError('Expected 16 jitter samples, got ${jitterOffsets.length}');
  }
  for (final offset in jitterOffsets) {
    if (offset.x < -0.5 || offset.x > 0.5 || offset.y < -0.5 || offset.y > 0.5) {
      throw StateError('Subpixel jitter out of [-0.5, 0.5] pixel bounds: (${offset.x}, ${offset.y})');
    }
  }
  print('✓ Halton 16-sample subpixel distribution certified in unit pixel box');

  // 2. Test YCoCg Color Space Reversibility
  print('Testing RGB <-> YCoCg Color Space Conversion...');
  final testColors = [
    Vec3(1.0, 0.0, 0.0),
    Vec3(0.0, 1.0, 0.0),
    Vec3(0.0, 0.0, 1.0),
    Vec3(0.8, 0.5, 0.2),
    Vec3(0.1, 0.9, 0.4),
  ];
  for (final col in testColors) {
    final ycocg = TemporalAntiAliasingEngine.rgbToYCoCg(col);
    final reconstructed = TemporalAntiAliasingEngine.yCoCgToRGB(ycocg);
    final error = (reconstructed - col).length;
    if (error > 1e-5) {
      throw StateError('YCoCg conversion round-trip error too large ($error) for color $col');
    }
  }
  print('✓ RGB <-> YCoCg reversible color transformation certified');

  // 3. Test History Color Neighborhood Clipping (Anti-Ghosting)
  print('Testing Anti-Ghosting Bounding Box Clipping...');
  final currentSample = Vec3(0.5, 0.5, 0.5);
  final neighborhoodMin = Vec3(0.4, 0.4, 0.4);
  final neighborhoodMax = Vec3(0.6, 0.6, 0.6);
  final staleHistoryGhost = Vec3(1.0, 0.0, 0.0); // Extreme red ghost from previous object

  final clipped = TemporalAntiAliasingEngine.clipHistoryYCoCg(
    historyColor: staleHistoryGhost,
    currentColor: currentSample,
    neighborhoodMin: neighborhoodMin,
    neighborhoodMax: neighborhoodMax,
  );

  // Clipped color must be pulled into local neighborhood
  if (clipped.x > 0.65 || clipped.y < 0.35) {
    throw StateError('History clipping failed to constrain ghost sample into local neighborhood: $clipped');
  }
  print('✓ YCoCg neighborhood bounding box clipping prevented ghosting artifacts');

  // 4. Test Full TAA Frame Resolution
  print('Testing Full TAA Frame Resolution...');
  final taaResult = TemporalAntiAliasingEngine.resolveTAA(
    currentSample: currentSample,
    historySample: staleHistoryGhost,
    neighborhoodMin: neighborhoodMin,
    neighborhoodMax: neighborhoodMax,
    historyWeight: 0.90,
    cameraVelocityMag: 0.2,
  );

  if (!taaResult.historyClamped) {
    throw StateError('Expected history sample to be clamped');
  }
  if (taaResult.resolvedColor.x < 0.3 || taaResult.resolvedColor.x > 0.7) {
    throw StateError('Resolved color out of expected range: ${taaResult.resolvedColor}');
  }
  print('✓ Full TAA temporal accumulation resolved smoothly');

  print('========================================================================');
  print('✓ TEMPORAL ANTI-ALIASING & JITTER CERTIFIED (4/4 SUB-SYSTEMS)');
  print('========================================================================');
}
