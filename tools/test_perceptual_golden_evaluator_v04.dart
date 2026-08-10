// V-04: Perceptual reference-golden evaluator verification.
//
// Verifies that:
//  1. Identical candidate and reference image buffers pass perceptual check.
//  2. Minor subpixel floating point channel differences pass golden check.
//  3. Gross visual regressions (e.g. inverted colors) fail perceptual golden check.
//  4. Histogram intersection score reflects image similarity accurately.

import 'package:quarantine/presentation/perceptual_golden_evaluator.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  const width = 10;
  const height = 10;
  final pixelCount = width * height;

  // Reference Buffer (100 pixels, RGB)
  final refBytes = List<int>.filled(pixelCount * 3, 128); // Neutral grey 128

  // Candidate Buffer 1: Slightly noisy (simulating subpixel float differences +/- 1)
  final candSubpixel = List<int>.from(refBytes);
  for (var i = 0; i < candSubpixel.length; i++) {
    candSubpixel[i] = (refBytes[i] + (i % 2 == 0 ? 1 : -1)).clamp(0, 255);
  }

  // Candidate Buffer 2: Gross Visual Regression (inverted to black/white)
  final candRegression = List<int>.filled(pixelCount * 3, 0); // Black 0

  // 1. Compare Identical
  final resIdentical = PerceptualGoldenEvaluator.compareBuffers(
    referenceRgbBytes: refBytes,
    candidateRgbBytes: refBytes,
    width: width,
    height: height,
  );

  check(resIdentical.isPass, 'Identical buffers pass golden check');
  check(resIdentical.meanChannelDelta == 0.0, 'Identical buffers have 0 mean channel delta');
  check(resIdentical.histogramIntersection == 1.0, 'Identical buffers have 1.0 histogram intersection');

  // 2. Compare Subpixel Minor Difference
  final resSubpixel = PerceptualGoldenEvaluator.compareBuffers(
    referenceRgbBytes: refBytes,
    candidateRgbBytes: candSubpixel,
    width: width,
    height: height,
  );

  check(resSubpixel.isPass, 'Subpixel floating point difference passes golden check');
  check(resSubpixel.meanChannelDelta < 0.02, 'Subpixel mean channel delta < 0.02');

  // 3. Compare Gross Regression
  final resRegression = PerceptualGoldenEvaluator.compareBuffers(
    referenceRgbBytes: refBytes,
    candidateRgbBytes: candRegression,
    width: width,
    height: height,
    maxMeanDelta: 0.05,
  );

  check(!resRegression.isPass, 'Gross visual regression fails golden check');
  check(resRegression.meanChannelDelta > 0.40, 'Gross regression has high mean channel delta');

  print('V-04: Perceptual reference-golden evaluator test passed cleanly!');
}
