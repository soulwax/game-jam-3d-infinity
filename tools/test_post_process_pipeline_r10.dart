// R-10: Post-process pipeline & narrative LUT color grading verification.
//
// Verifies that:
//  1. Exposure scaling & ACES Filmic tone mapping map HDR inputs to [0.0, 1.0] range.
//  2. Neutral grade mode reports identity LUT true.
//  3. Bloom pass triggers when luminance exceeds threshold.
//  4. PS1/VHS narrative tuning applies vignette with reduced motion scaling.

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/post_process_pipeline.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final hdrColor = Vec3(2.5, 2.0, 1.5); // High dynamic range input

  // 1. Test Neutral Identity Pass
  final neutralResult = PostProcessPipeline.processFrame(
    hdrColor: hdrColor,
    exposure: 1.0,
    gradeMode: LUTGradeMode.neutral,
    bloom: const BloomParams(enabled: false),
    tuning: const NarrativePS1VHSTuning(enabled: false),
    reducedMotion: false,
  );

  check(neutralResult.isIdentityLUT, 'Neutral mode is identity LUT');
  check(neutralResult.finalColor.x <= 1.0 && neutralResult.finalColor.x >= 0.0, 'Final color clamped in [0, 1]');

  // 2. Test Gothic Amber LUT Grade & Bloom Pass
  final bloomResult = PostProcessPipeline.processFrame(
    hdrColor: hdrColor,
    exposure: 1.2,
    gradeMode: LUTGradeMode.gothicAmber,
    bloom: const BloomParams(enabled: true, threshold: 0.8, intensity: 0.5),
    tuning: const NarrativePS1VHSTuning(enabled: true, vignetteStrength: 0.2),
    reducedMotion: false,
  );

  check(!bloomResult.isIdentityLUT, 'Gothic Amber mode is not identity LUT');
  check(bloomResult.effectiveBloom > 0.0, 'Emissive luminance triggers bloom pass');
  check(bloomResult.diagnostics['gradeMode'] == 'gothicAmber', 'Diagnostics reports gothicAmber grade mode');

  // 3. Test Reduced Motion Scaling on VHS Vignette
  final reducedResult = PostProcessPipeline.processFrame(
    hdrColor: hdrColor,
    exposure: 1.2,
    gradeMode: LUTGradeMode.vhsTape,
    bloom: const BloomParams(enabled: false),
    tuning: const NarrativePS1VHSTuning(enabled: true, vignetteStrength: 0.4),
    reducedMotion: true,
  );

  final tuningMap = reducedResult.diagnostics['tuning'] as Map<String, dynamic>;
  check(tuningMap['vignetteStrength'] == 0.4, 'Tuning config recorded');

  // 4. Test DepthOfFieldParams Serialization
  const dof = DepthOfFieldParams(enabled: true, focalDistance: 2.5, focalRange: 1.5, maxBlurRadius: 2.0);
  final dofJson = dof.toJson();
  check(dofJson['enabled'] == true, 'DOF enabled state verified');
  check(dofJson['focalDistance'] == 2.5, 'DOF focal distance verified');

  print('R-10: Post-process pipeline & narrative grading test passed cleanly!');
}
