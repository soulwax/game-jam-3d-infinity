import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';

/// Diffusion profile parameters for subsurface scattering.
class SSSDiffusionProfile {
  final String name;
  final Vec3 scatterRadius;    // Mean free path length per channel (R, G, B) in mm
  final Vec3 surfaceAlbedo;
  final double maxRadiusMm;

  SSSDiffusionProfile({
    required this.name,
    required this.scatterRadius,
    required this.surfaceAlbedo,
    required this.maxRadiusMm,
  });

  /// Pre-calibrated material profiles.
  static final SSSDiffusionProfile humanSkin = SSSDiffusionProfile(
    name: 'Human Skin',
    scatterRadius: Vec3(3.67, 1.37, 0.68), // Red scatters deepest
    surfaceAlbedo: Vec3(0.85, 0.60, 0.45),
    maxRadiusMm: 6.0,
  );

  static final SSSDiffusionProfile alabasterMarble = SSSDiffusionProfile(
    name: 'Alabaster / Marble',
    scatterRadius: Vec3(2.50, 2.30, 2.10),
    surfaceAlbedo: Vec3(0.92, 0.90, 0.88),
    maxRadiusMm: 5.0,
  );

  static final SSSDiffusionProfile candleWax = SSSDiffusionProfile(
    name: 'Candle Wax',
    scatterRadius: Vec3(4.20, 3.80, 2.20),
    surfaceAlbedo: Vec3(0.95, 0.90, 0.70),
    maxRadiusMm: 8.0,
  );
}

/// Evaluated SSSS sample result.
class SSSSResult {
  final Vec3 scatteredColor;
  final double depthWeight;
  final int sampleCount;

  SSSSResult({
    required this.scatteredColor,
    required this.depthWeight,
    required this.sampleCount,
  });
}

/// Screen-Space Subsurface Scattering (SSSS) Engine.
/// Implements separable cross-bilateral depth-guided diffusion convolution
/// using the normalized Burley dipole approximation.
class ScreenSpaceSubsurfaceEngine {
  /// Evaluates normalized Burley diffusion profile kernel at radial distance r (in mm).
  /// R(r) = s * (exp(-s*r) + exp(-s*r/3)) / (8*pi*r)
  static double burleyKernel(double rMm, double scatterRadiusMm) {
    final r = math.max(1e-4, rMm);
    final d = math.max(1e-3, scatterRadiusMm);
    final s = 1.0 / d;
    final term1 = math.exp(-s * r);
    final term2 = math.exp(-s * r / 3.0);
    return (s * (term1 + term2)) / (8.0 * math.pi * r);
  }

  /// Convolves screen-space color with depth-guided cross-bilateral SSSS kernel.
  static SSSSResult convolveSSSS({
    required Vec3 centerColor,
    required double centerDepth,
    required List<Vec3> sampleColors,
    required List<double> sampleDepths,
    required List<double> sampleOffsetsMm,
    required SSSDiffusionProfile profile,
    double depthThreshold = 0.08,
  }) {
    if (sampleColors.isEmpty || sampleColors.length != sampleDepths.length) {
      return SSSSResult(
        scatteredColor: centerColor,
        depthWeight: 1.0,
        sampleCount: 0,
      );
    }

    var totalWeightR = 0.0;
    var totalWeightG = 0.0;
    var totalWeightB = 0.0;
    var accumulatedR = 0.0;
    var accumulatedG = 0.0;
    var accumulatedB = 0.0;

    for (var i = 0; i < sampleColors.length; i++) {
      final sampleCol = sampleColors[i];
      final sampleDepth = sampleDepths[i];
      final offsetMm = sampleOffsetsMm[i];

      // Depth bilateral rejection: reject samples across geometric occlusions
      final depthDelta = (sampleDepth - centerDepth).abs();
      final depthBilateralFactor = math.exp(-depthDelta * depthDelta / (2.0 * depthThreshold * depthThreshold));

      if (depthBilateralFactor < 1e-3) continue;

      // Evaluate channel-specific diffusion weights
      final wR = burleyKernel(offsetMm, profile.scatterRadius.x) * depthBilateralFactor;
      final wG = burleyKernel(offsetMm, profile.scatterRadius.y) * depthBilateralFactor;
      final wB = burleyKernel(offsetMm, profile.scatterRadius.z) * depthBilateralFactor;

      accumulatedR += sampleCol.x * wR;
      accumulatedG += sampleCol.y * wG;
      accumulatedB += sampleCol.z * wB;

      totalWeightR += wR;
      totalWeightG += wG;
      totalWeightB += wB;
    }

    final finalR = totalWeightR > 1e-6 ? (accumulatedR / totalWeightR) : centerColor.x;
    final finalG = totalWeightG > 1e-6 ? (accumulatedG / totalWeightG) : centerColor.y;
    final finalB = totalWeightB > 1e-6 ? (accumulatedB / totalWeightB) : centerColor.z;

    return SSSSResult(
      scatteredColor: Vec3(finalR, finalG, finalB),
      depthWeight: (totalWeightR + totalWeightG + totalWeightB) / 3.0,
      sampleCount: sampleColors.length,
    );
  }
}
