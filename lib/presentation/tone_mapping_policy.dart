import 'dart:math' as math;

enum ToneMappingOperator {
  reinhard,
  acesFilmic,
  ldrPassThrough,
}

/// Tone mapping and HDR/LDR color transformation policy for VIS-011 / R-02.
final class ToneMappingPolicy {
  final ToneMappingOperator operator;
  final double exposureMultiplier;
  final double vignetteStrength;
  final double gamma;

  const ToneMappingPolicy({
    this.operator = ToneMappingOperator.acesFilmic,
    this.exposureMultiplier = 1.0,
    this.vignetteStrength = 0.3,
    this.gamma = 2.2,
  }) : assert(exposureMultiplier > 0, 'exposureMultiplier must be positive'),
       assert(vignetteStrength >= 0, 'vignetteStrength must be non-negative'),
       assert(gamma > 0, 'gamma must be positive');

  /// Transforms an HDR RGB color triple (r, g, b in >= 0) to a tonemapped LDR RGB triple in [0, 1].
  (double, double, double) mapColor(double r, double g, double b) {
    // 1. Exposure scaling
    var er = r * exposureMultiplier;
    var eg = g * exposureMultiplier;
    var eb = b * exposureMultiplier;

    // 2. Operator application
    double tmR, tmG, tmB;
    switch (operator) {
      case ToneMappingOperator.reinhard:
        tmR = er / (1.0 + er);
        tmG = eg / (1.0 + eg);
        tmB = eb / (1.0 + eb);
      case ToneMappingOperator.acesFilmic:
        tmR = _acesFit(er);
        tmG = _acesFit(eg);
        tmB = _acesFit(eb);
      case ToneMappingOperator.ldrPassThrough:
        tmR = er.clamp(0.0, 1.0);
        tmG = eg.clamp(0.0, 1.0);
        tmB = eb.clamp(0.0, 1.0);
    }

    // 3. Gamma correction
    final invGamma = 1.0 / gamma;
    final gcR = math.pow(tmR.clamp(0.0, 1.0), invGamma).toDouble();
    final gcG = math.pow(tmG.clamp(0.0, 1.0), invGamma).toDouble();
    final gcB = math.pow(tmB.clamp(0.0, 1.0), invGamma).toDouble();

    return (gcR, gcG, gcB);
  }

  static double _acesFit(double x) {
    const a = 2.51;
    const b = 0.03;
    const c = 2.43;
    const d = 0.59;
    const e = 0.14;
    return ((x * (a * x + b)) / (x * (c * x + d) + e)).clamp(0.0, 1.0);
  }

  Map<String, Object> toJson() => {
        'operator': operator.name,
        'exposureMultiplier': exposureMultiplier,
        'vignetteStrength': vignetteStrength,
        'gamma': gamma,
      };
}
