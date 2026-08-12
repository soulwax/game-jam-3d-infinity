import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';

/// Screen-space velocity vector (in normalized viewport units [-1, 1] per frame).
class ScreenSpaceVelocity {
  final double vx;
  final double vy;

  ScreenSpaceVelocity(this.vx, this.vy);

  double get magnitude => math.sqrt(vx * vx + vy * vy);
}

/// Evaluated motion blur sample result.
class MotionBlurResult {
  final Vec3 blurredColor;
  final double blurLengthPixels;
  final int validSamples;

  MotionBlurResult({
    required this.blurredColor,
    required this.blurLengthPixels,
    required this.validSamples,
  });

  Map<String, dynamic> toJson() => {
        'blurredColor': [blurredColor.x, blurredColor.y, blurredColor.z],
        'blurLengthPixels': blurLengthPixels,
        'validSamples': validSamples,
      };
}

/// Motion Blur & Camera Velocity Reconstruction Engine.
/// Reconstructs screen velocity from previous view-projection matrices and
/// gathers samples along directional motion paths with depth-aware occlusion weighting.
class MotionBlurEngine {
  /// Reconstructs 2D screen-space velocity vector from world position and projection matrices.
  static ScreenSpaceVelocity reconstructScreenVelocity({
    required Vec3 worldPosition,
    required Mat4 currentViewProj,
    required Mat4 previousViewProj,
  }) {
    final curClip = currentViewProj.transformPoint(worldPosition);
    final prevClip = previousViewProj.transformPoint(worldPosition);

    final curNdcX = curClip.x / math.max(1e-4, curClip.z);
    final curNdcY = curClip.y / math.max(1e-4, curClip.z);

    final prevNdcX = prevClip.x / math.max(1e-4, prevClip.z);
    final prevNdcY = prevClip.y / math.max(1e-4, prevClip.z);

    return ScreenSpaceVelocity(curNdcX - prevNdcX, curNdcY - prevNdcY);
  }

  /// Convolves color samples along the velocity vector using depth-aware weighting.
  static MotionBlurResult gatherDirectionalMotionBlur({
    required Vec3 centerColor,
    required double centerDepth,
    required ScreenSpaceVelocity velocity,
    required List<Vec3> pathColorSamples,
    required List<double> pathDepthSamples,
    double maxBlurRadiusPixels = 24.0,
    double shutterFraction = 0.5,
  }) {
    final speed = velocity.magnitude;
    final effectiveRadius = (speed * maxBlurRadiusPixels * shutterFraction).clamp(0.0, maxBlurRadiusPixels);

    if (effectiveRadius <= 0.5 || pathColorSamples.isEmpty) {
      return MotionBlurResult(
        blurredColor: centerColor,
        blurLengthPixels: effectiveRadius,
        validSamples: 1,
      );
    }

    var totalWeight = 1.0;
    var accumulated = Vec3(centerColor.x, centerColor.y, centerColor.z);
    var validCount = 1;

    final n = pathColorSamples.length;
    for (var i = 0; i < n; i++) {
      final sampleCol = pathColorSamples[i];
      final sampleDepth = pathDepthSamples[i];

      // Depth comparison: if sample is in background, reject background bleeding onto foreground
      final depthDifference = sampleDepth - centerDepth;
      var depthWeight = 1.0;
      if (depthDifference > 0.05) {
        depthWeight = math.exp(-depthDifference * 10.0);
      }

      final sampleWeight = ((1.0 - (i / n)) * depthWeight).clamp(0.0, 1.0);
      if (sampleWeight <= 1e-3) continue;

      accumulated = Vec3(
        accumulated.x + sampleCol.x * sampleWeight,
        accumulated.y + sampleCol.y * sampleWeight,
        accumulated.z + sampleCol.z * sampleWeight,
      );
      totalWeight += sampleWeight;
      validCount++;
    }

    final finalColor = Vec3(
      accumulated.x / totalWeight,
      accumulated.y / totalWeight,
      accumulated.z / totalWeight,
    );

    return MotionBlurResult(
      blurredColor: finalColor,
      blurLengthPixels: effectiveRadius,
      validSamples: validCount,
    );
  }
}
