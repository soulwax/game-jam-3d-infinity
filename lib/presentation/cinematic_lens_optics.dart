import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';

/// Single optical lens ghost element reflected through internal lens barrel.
class LensFlareGhost {
  final double positionOnRay; // [-1.0, 1.0] along vector from screen center to light
  final double scale;
  final double intensity;
  final Vec3 colorTint;

  const LensFlareGhost({
    required this.positionOnRay,
    required this.scale,
    required this.intensity,
    required this.colorTint,
  });
}

/// Evaluated composite lens flare and optical glare result.
class LensFlareResult {
  final Vec3 totalFlareRadiance;
  final double anamorphicStreakIntensity;
  final double haloRingIntensity;
  final int ghostCount;

  const LensFlareResult({
    required this.totalFlareRadiance,
    required this.anamorphicStreakIntensity,
    required this.haloRingIntensity,
    required this.ghostCount,
  });

  Map<String, dynamic> toJson() => {
        'totalFlareRadiance': [totalFlareRadiance.x, totalFlareRadiance.y, totalFlareRadiance.z],
        'anamorphicStreakIntensity': anamorphicStreakIntensity,
        'haloRingIntensity': haloRingIntensity,
        'ghostCount': ghostCount,
      };
}

/// Cinematic Lens Optics & Flare Synthesizer.
/// Simulates internal barrel reflections, chromatic ring dispersion,
/// horizontal anamorphic glare streaks, and polygonal aperture bokeh.
class CinematicLensOpticsEngine {
  /// Canonical 6-element optical flare prescription.
  static final List<LensFlareGhost> defaultLensPrescription = [
    LensFlareGhost(positionOnRay: -0.6, scale: 0.15, intensity: 0.45, colorTint: Vec3(0.3, 0.4, 0.9)),
    LensFlareGhost(positionOnRay: -0.3, scale: 0.08, intensity: 0.60, colorTint: Vec3(0.4, 0.7, 0.8)),
    LensFlareGhost(positionOnRay: 0.1, scale: 0.25, intensity: 0.20, colorTint: Vec3(0.8, 0.5, 0.3)),
    LensFlareGhost(positionOnRay: 0.35, scale: 0.12, intensity: 0.50, colorTint: Vec3(0.9, 0.8, 0.4)),
    LensFlareGhost(positionOnRay: 0.65, scale: 0.30, intensity: 0.25, colorTint: Vec3(0.4, 0.8, 0.5)),
    LensFlareGhost(positionOnRay: 0.90, scale: 0.05, intensity: 0.80, colorTint: Vec3(0.9, 0.4, 0.3)),
  ];

  /// Evaluates polygonal bokeh aperture intensity at polar coordinate (r, theta).
  static double evaluateBokehAperture({
    required double radius,
    required double theta,
    int bladeCount = 6,
    double roundness = 0.4,
  }) {
    if (radius <= 0.0) return 1.0;
    if (radius > 1.0) return 0.0;

    final segmentAngle = (2.0 * math.pi) / bladeCount;
    final halfSegment = segmentAngle * 0.5;
    final localTheta = ((theta % segmentAngle) + segmentAngle) % segmentAngle - halfSegment;

    // Distance from center to regular polygon edge
    final polygonMaxRadius = math.cos(halfSegment) / math.cos(localTheta);
    final effectiveMaxRadius = 1.0 * roundness + polygonMaxRadius * (1.0 - roundness);

    if (radius <= effectiveMaxRadius) {
      return (1.0 - radius * radius).clamp(0.0, 1.0);
    }
    return 0.0;
  }

  /// Synthesizes complete lens flare and anamorphic optical glare for a screen-space light source.
  static LensFlareResult synthesizeLensFlare({
    required double screenLightX,      // Normalized screen coordinate X [-1.0, 1.0], 0 is center
    required double screenLightY,      // Normalized screen coordinate Y [-1.0, 1.0], 0 is center
    required Vec3 lightColor,
    required double lightLuminance,
    required double flareThreshold,
    double anamorphicStreakWeight = 0.65,
    double haloRadius = 0.55,
    double haloThickness = 0.06,
    List<LensFlareGhost>? prescription,
  }) {
    final activePrescription = prescription ?? defaultLensPrescription;
    final excessLuminance = math.max(0.0, lightLuminance - flareThreshold);
    if (excessLuminance <= 0.001) {
      return LensFlareResult(
        totalFlareRadiance: Vec3(0.0, 0.0, 0.0),
        anamorphicStreakIntensity: 0.0,
        haloRingIntensity: 0.0,
        ghostCount: 0,
      );
    }

    final lightDistFromCenter = math.sqrt(screenLightX * screenLightX + screenLightY * screenLightY);
    // Edge falloff: flare fades as light goes far off-screen
    final visibility = (1.0 - (lightDistFromCenter / 1.5)).clamp(0.0, 1.0);

    // 1. Ghost Elements Accumulation
    var ghostRadiance = Vec3(0.0, 0.0, 0.0);
    for (final ghost in activePrescription) {
      final ghostFactor = ghost.intensity * visibility * excessLuminance * 0.15;
      ghostRadiance = Vec3(
        ghostRadiance.x + lightColor.x * ghost.colorTint.x * ghostFactor,
        ghostRadiance.y + lightColor.y * ghost.colorTint.y * ghostFactor,
        ghostRadiance.z + lightColor.z * ghost.colorTint.z * ghostFactor,
      );
    }

    // 2. Anamorphic Horizontal Glare Streak
    final streakFactor = excessLuminance * anamorphicStreakWeight * visibility * 0.35;

    // 3. Chromatic Halo Ring
    final ringDistDiff = (lightDistFromCenter - haloRadius).abs();
    final haloFactor = (1.0 - (ringDistDiff / haloThickness)).clamp(0.0, 1.0) * visibility * excessLuminance * 0.25;

    final totalRadiance = Vec3(
      ghostRadiance.x + lightColor.x * (streakFactor + haloFactor),
      ghostRadiance.y + lightColor.y * (streakFactor * 0.9 + haloFactor * 0.95),
      ghostRadiance.z + lightColor.z * (streakFactor * 1.2 + haloFactor * 1.1),
    );

    return LensFlareResult(
      totalFlareRadiance: totalRadiance,
      anamorphicStreakIntensity: streakFactor,
      haloRingIntensity: haloFactor,
      ghostCount: activePrescription.length,
    );
  }
}
