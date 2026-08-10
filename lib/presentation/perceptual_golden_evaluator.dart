import 'dart:math' as math;

/// Evaluated perceptual metric result for V-04 cross-GPU golden comparison.
class PerceptualGoldenMetric {
  final double changedPixelRatio;
  final double meanChannelDelta;
  final double histogramIntersection;
  final bool isPass;
  final String diagnostic;

  const PerceptualGoldenMetric({
    required this.changedPixelRatio,
    required this.meanChannelDelta,
    required this.histogramIntersection,
    required this.isPass,
    required this.diagnostic,
  });

  Map<String, dynamic> toJson() => {
        'changedPixelRatio': changedPixelRatio,
        'meanChannelDelta': meanChannelDelta,
        'histogramIntersection': histogramIntersection,
        'isPass': isPass,
        'diagnostic': diagnostic,
      };
}

/// V-04 Perceptual Reference-Golden Evaluator & Cross-GPU Invariant Checker.
class PerceptualGoldenEvaluator {
  /// Evaluates two image channel buffers against perceptual thresholds.
  /// Tolerates cross-GPU floating point subpixel differences while flagging gross visual regressions.
  static PerceptualGoldenMetric compareBuffers({
    required List<int> referenceRgbBytes,
    required List<int> candidateRgbBytes,
    required int width,
    required int height,
    double maxChangedRatio = 0.75,
    double maxMeanDelta = 0.05,
    double minHistogramIntersection = 0.70,
  }) {
    if (referenceRgbBytes.length != candidateRgbBytes.length) {
      return const PerceptualGoldenMetric(
        changedPixelRatio: 1.0,
        meanChannelDelta: 1.0,
        histogramIntersection: 0.0,
        isPass: false,
        diagnostic: 'Buffer length mismatch',
      );
    }

    final totalPixels = width * height;
    if (totalPixels == 0) {
      return const PerceptualGoldenMetric(
        changedPixelRatio: 0.0,
        meanChannelDelta: 0.0,
        histogramIntersection: 1.0,
        isPass: true,
        diagnostic: 'Empty image buffer',
      );
    }

    var changedPixels = 0;
    var totalChannelDelta = 0.0;

    final histRef = List<int>.filled(8, 0);
    final histCand = List<int>.filled(8, 0);

    for (var i = 0; i < referenceRgbBytes.length; i += 3) {
      final r1 = referenceRgbBytes[i];
      final g1 = referenceRgbBytes[i + 1];
      final b1 = referenceRgbBytes[i + 2];

      final r2 = candidateRgbBytes[i];
      final g2 = candidateRgbBytes[i + 1];
      final b2 = candidateRgbBytes[i + 2];

      final dr = (r1 - r2).abs() / 255.0;
      final dg = (g1 - g2).abs() / 255.0;
      final db = (b1 - b2).abs() / 255.0;

      final pixelDelta = (dr + dg + db) / 3.0;
      totalChannelDelta += pixelDelta;

      if (pixelDelta > 0.02) { // 2% per-pixel threshold
        changedPixels++;
      }

      final lum1 = (((r1 * 299 + g1 * 587 + b1 * 114) / 1000).round().clamp(0, 255)) ~/ 32;
      final lum2 = (((r2 * 299 + g2 * 587 + b2 * 114) / 1000).round().clamp(0, 255)) ~/ 32;

      histRef[lum1.clamp(0, 7)]++;
      histCand[lum2.clamp(0, 7)]++;
    }

    final changedRatio = changedPixels / totalPixels;
    final meanDelta = totalChannelDelta / totalPixels;

    // 8-Bin Histogram Intersection metric
    var histOverlap = 0;
    for (var k = 0; k < 8; k++) {
      histOverlap += math.min(histRef[k], histCand[k]);
    }
    final histIntersection = histOverlap / totalPixels;

    final pass = changedRatio <= maxChangedRatio &&
        meanDelta <= maxMeanDelta &&
        histIntersection >= minHistogramIntersection;

    final diag = pass
        ? 'Golden check PASSED (changedRatio=${changedRatio.toStringAsFixed(4)}, meanDelta=${meanDelta.toStringAsFixed(4)})'
        : 'Golden check FAILED (changedRatio=${changedRatio.toStringAsFixed(4)} vs max $maxChangedRatio, meanDelta=${meanDelta.toStringAsFixed(4)} vs max $maxMeanDelta)';

    return PerceptualGoldenMetric(
      changedPixelRatio: changedRatio,
      meanChannelDelta: meanDelta,
      histogramIntersection: histIntersection,
      isPass: pass,
      diagnostic: diag,
    );
  }
}
