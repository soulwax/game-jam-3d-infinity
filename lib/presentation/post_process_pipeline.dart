import 'package:quarantine/engine/math3.dart';

/// Available narrative color grade LUT modes for R-10.
enum LUTGradeMode {
  neutral,
  gothicAmber,
  indigoNight,
  vhsTape,
}

/// Bloom parameters for R-10 emissive pass.
class BloomParams {
  final bool enabled;
  final double threshold;
  final double intensity;
  final double radius;

  const BloomParams({
    this.enabled = true,
    this.threshold = 0.85,
    this.intensity = 0.40,
    this.radius = 1.2,
  });

  Map<String, dynamic> toJson() => {
        'enabled': enabled,
        'threshold': threshold,
        'intensity': intensity,
        'radius': radius,
      };
}

/// Narrative PS1/VHS aesthetic tuning options for R-10.
class NarrativePS1VHSTuning {
  final bool enabled;
  final double ditherAmount;
  final double scanlinesIntensity;
  final double chromaticAberration;
  final double vignetteStrength;

  const NarrativePS1VHSTuning({
    this.enabled = false,
    this.ditherAmount = 0.05,
    this.scanlinesIntensity = 0.10,
    this.chromaticAberration = 0.002,
    this.vignetteStrength = 0.25,
  });

  Map<String, dynamic> toJson() => {
        'enabled': enabled,
        'ditherAmount': ditherAmount,
        'scanlinesIntensity': scanlinesIntensity,
        'chromaticAberration': chromaticAberration,
        'vignetteStrength': vignetteStrength,
      };
}

/// Depth of field parameters for cinematic camera focus in R-10.
class DepthOfFieldParams {
  final bool enabled;
  final double focalDistance;
  final double focalRange;
  final double maxBlurRadius;

  const DepthOfFieldParams({
    this.enabled = true,
    this.focalDistance = 2.5,
    this.focalRange = 1.5,
    this.maxBlurRadius = 2.0,
  });

  Map<String, dynamic> toJson() => {
        'enabled': enabled,
        'focalDistance': focalDistance,
        'focalRange': focalRange,
        'maxBlurRadius': maxBlurRadius,
      };
}

/// Evaluated composite post-process frame result for R-10.
class PostProcessFrameResult {
  final Vec3 finalColor;
  final double effectiveBloom;
  final bool isIdentityLUT;
  final Map<String, dynamic> diagnostics;

  const PostProcessFrameResult({
    required this.finalColor,
    required this.effectiveBloom,
    required this.isIdentityLUT,
    required this.diagnostics,
  });
}

/// R-10 Post-Process Pipeline & Narrative Grading Engine.
class PostProcessPipeline {
  /// Evaluates the final composite color grading, bloom, and narrative tuning pass.
  static PostProcessFrameResult processFrame({
    required Vec3 hdrColor,
    required double exposure,
    required LUTGradeMode gradeMode,
    required BloomParams bloom,
    required NarrativePS1VHSTuning tuning,
    required bool reducedMotion,
  }) {
    // 1. Exposure & ACES Filmic Tone-mapping
    final exposed = hdrColor * exposure;
    final toneMapped = Vec3(
      _acesToneMap(exposed.x),
      _acesToneMap(exposed.y),
      _acesToneMap(exposed.z),
    );

    // 2. Color Grade LUT Transformation
    final isIdentity = gradeMode == LUTGradeMode.neutral;
    final graded = _applyGrade(toneMapped, gradeMode);

    // 3. Emissive Bloom
    final luminance = 0.2126 * hdrColor.x + 0.7152 * hdrColor.y + 0.0722 * hdrColor.z;
    double bloomFactor = 0.0;
    if (bloom.enabled && luminance > bloom.threshold) {
      bloomFactor = (luminance - bloom.threshold) * bloom.intensity;
    }

    final bloomed = graded + (Vec3(1.0, 0.9, 0.7) * bloomFactor);

    // 4. Narrative PS1/VHS Effect Tuning
    double vignette = 0.0;
    if (tuning.enabled) {
      vignette = reducedMotion ? tuning.vignetteStrength * 0.5 : tuning.vignetteStrength;
    }

    final finalColor = Vec3(
      (bloomed.x * (1.0 - vignette)).clamp(0.0, 1.0),
      (bloomed.y * (1.0 - vignette)).clamp(0.0, 1.0),
      (bloomed.z * (1.0 - vignette)).clamp(0.0, 1.0),
    );

    return PostProcessFrameResult(
      finalColor: finalColor,
      effectiveBloom: bloomFactor,
      isIdentityLUT: isIdentity,
      diagnostics: {
        'gradeMode': gradeMode.name,
        'exposure': exposure,
        'bloom': bloom.toJson(),
        'tuning': tuning.toJson(),
        'isIdentityLUT': isIdentity,
      },
    );
  }

  static double _acesToneMap(double val) {
    const a = 2.51;
    const b = 0.03;
    const c = 2.43;
    const d = 0.59;
    const e = 0.14;
    return ((val * (a * val + b)) / (val * (c * val + d) + e)).clamp(0.0, 1.0);
  }

  static Vec3 _applyGrade(Vec3 color, LUTGradeMode mode) {
    switch (mode) {
      case LUTGradeMode.neutral:
        return color;
      case LUTGradeMode.gothicAmber:
        return Vec3(
          (color.x * 1.15).clamp(0.0, 1.0),
          (color.y * 0.95).clamp(0.0, 1.0),
          (color.z * 0.80).clamp(0.0, 1.0),
        );
      case LUTGradeMode.indigoNight:
        return Vec3(
          (color.x * 0.75).clamp(0.0, 1.0),
          (color.y * 0.85).clamp(0.0, 1.0),
          (color.z * 1.20).clamp(0.0, 1.0),
        );
      case LUTGradeMode.vhsTape:
        return Vec3(
          (color.x * 1.05).clamp(0.0, 1.0),
          (color.y * 1.08).clamp(0.0, 1.0),
          (color.z * 0.90).clamp(0.0, 1.0),
        );
    }
  }
}
