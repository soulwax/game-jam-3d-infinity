import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';

/// Temporal Anti-Aliasing (TAA) sample point with normalized pixel offsets.
class TAASampleOffset {
  final double x;
  final double y;

  const TAASampleOffset(this.x, this.y);
}

/// Evaluated TAA history accumulation frame result.
class TAAFrameResult {
  final Vec3 resolvedColor;
  final Vec3 historyColor;
  final double blendFactor;
  final bool historyClamped;

  const TAAFrameResult({
    required this.resolvedColor,
    required this.historyColor,
    required this.blendFactor,
    required this.historyClamped,
  });
}

/// Temporal Anti-Aliasing (TAA) & Subpixel Camera Jitter Engine.
/// Provides Halton sequence subpixel jitter, YCoCg color space bounding box
/// clipping for ghosting elimination, and exponential history accumulation.
class TemporalAntiAliasingEngine {
  /// Generates the n-th value of the Halton sequence with base b.
  static double halton(int index, int base) {
    var result = 0.0;
    var f = 1.0 / base;
    var i = index;
    while (i > 0) {
      result += f * (i % base);
      i = (i / base).floor();
      f /= base;
    }
    return result;
  }

  /// Generates a cycle of N 2D Halton subpixel jitter offsets in range [-0.5, 0.5].
  static List<TAASampleOffset> generateHaltonSequence(int sampleCount) {
    final list = <TAASampleOffset>[];
    for (var i = 1; i <= sampleCount; i++) {
      final x = halton(i, 2) - 0.5;
      final y = halton(i, 3) - 0.5;
      list.add(TAASampleOffset(x, y));
    }
    return List.unmodifiable(list);
  }

  /// Converts RGB color to YCoCg color space.
  static Vec3 rgbToYCoCg(Vec3 rgb) {
    final y = 0.25 * rgb.x + 0.5 * rgb.y + 0.25 * rgb.z;
    final co = 0.5 * rgb.x - 0.5 * rgb.z;
    final cg = -0.25 * rgb.x + 0.5 * rgb.y - 0.25 * rgb.z;
    return Vec3(y, co, cg);
  }

  /// Converts YCoCg color to RGB color space.
  static Vec3 yCoCgToRGB(Vec3 ycocg) {
    final y = ycocg.x;
    final co = ycocg.y;
    final cg = ycocg.z;
    final r = y + co - cg;
    final g = y + cg;
    final b = y - co - cg;
    return Vec3(r, g, b);
  }

  /// Clips history color to the 3x3 neighborhood AABB in YCoCg color space.
  static Vec3 clipHistoryYCoCg({
    required Vec3 historyColor,
    required Vec3 currentColor,
    required Vec3 neighborhoodMin,
    required Vec3 neighborhoodMax,
  }) {
    final hYCoCg = rgbToYCoCg(historyColor);
    final nMinYCoCg = rgbToYCoCg(neighborhoodMin);
    final nMaxYCoCg = rgbToYCoCg(neighborhoodMax);

    // Box bounds
    final minBox = Vec3(
      math.min(nMinYCoCg.x, nMaxYCoCg.x),
      math.min(nMinYCoCg.y, nMaxYCoCg.y),
      math.min(nMinYCoCg.z, nMaxYCoCg.z),
    );
    final maxBox = Vec3(
      math.max(nMinYCoCg.x, nMaxYCoCg.x),
      math.max(nMinYCoCg.y, nMaxYCoCg.y),
      math.max(nMinYCoCg.z, nMaxYCoCg.z),
    );

    // Line segment from center (currentColor) to history (historyColor)
    final pClip = Vec3(
      hYCoCg.x.clamp(minBox.x, maxBox.x),
      hYCoCg.y.clamp(minBox.y, maxBox.y),
      hYCoCg.z.clamp(minBox.z, maxBox.z),
    );

    return yCoCgToRGB(pClip);
  }

  /// Resolves current and history samples with anti-ghosting clamping and exponential blend.
  static TAAFrameResult resolveTAA({
    required Vec3 currentSample,
    required Vec3 historySample,
    required Vec3 neighborhoodMin,
    required Vec3 neighborhoodMax,
    double historyWeight = 0.90,
    double cameraVelocityMag = 0.0,
  }) {
    // Velocity-guided weight: reduce history weight during rapid camera snaps
    final effectiveHistoryWeight = (historyWeight * math.exp(-cameraVelocityMag * 4.0)).clamp(0.10, 0.96);

    // Clip history sample to current spatial neighborhood
    final clampedHistory = clipHistoryYCoCg(
      historyColor: historySample,
      currentColor: currentSample,
      neighborhoodMin: neighborhoodMin,
      neighborhoodMax: neighborhoodMax,
    );

    final diff = clampedHistory - historySample;
    final wasClamped = diff.length > 1e-4;

    // Exponential moving blend
    final resolved = Vec3(
      currentSample.x * (1.0 - effectiveHistoryWeight) + clampedHistory.x * effectiveHistoryWeight,
      currentSample.y * (1.0 - effectiveHistoryWeight) + clampedHistory.y * effectiveHistoryWeight,
      currentSample.z * (1.0 - effectiveHistoryWeight) + clampedHistory.z * effectiveHistoryWeight,
    );

    return TAAFrameResult(
      resolvedColor: resolved,
      historyColor: clampedHistory,
      blendFactor: effectiveHistoryWeight,
      historyClamped: wasClamped,
    );
  }
}
