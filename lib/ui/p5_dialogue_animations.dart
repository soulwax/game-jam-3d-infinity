import 'dart:math' as math;

/// Easing curves and animation progress helpers for Persona 5 dialogue UI per MASTERPLAN §40.3.C.
class P5DialogueAnimations {
  /// Cubic-bezier ease-out curve (0.22, 1.0, 0.36, 1.0)
  static double easeOutCubic(double t) {
    final clamped = t.clamp(0.0, 1.0);
    return 1.0 - math.pow(1.0 - clamped, 3).toDouble();
  }

  /// Calculates staggered slide-in translation offset X for choice panel [index].
  /// [staggerDelayMs] = 120ms stagger per item.
  static double computeStaggeredOffsetX({
    required int index,
    required double elapsedMs,
    required double totalWidth,
    double staggerDelayMs = 120.0,
    double animationDurationMs = 250.0,
  }) {
    final startMs = index * staggerDelayMs;
    final itemElapsed = elapsedMs - startMs;
    if (itemElapsed <= 0.0) {
      return totalWidth + 200.0; // Off-screen right
    }
    final progress = (itemElapsed / animationDurationMs).clamp(0.0, 1.0);
    final eased = easeOutCubic(progress);
    return (1.0 - eased) * (totalWidth + 200.0);
  }

  /// Calculates hover breathe scale (1.0 -> 1.03 -> 1.0) over a 1.2s cycle.
  static double computeHoverBreatheScale(double animTimeSeconds) {
    return 1.0 + math.sin(animTimeSeconds * 5.0) * 0.015;
  }
}
