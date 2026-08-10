import 'dart:math' as math;

/// Continuous portal state and acoustic transmission mapper for VIS-007.
/// Maps door/shutter animation opening fraction [0.0, 1.0] to visual pivot angle,
/// collision capsule clearance, and log-frequency acoustic muffle curves.
final class PortalStateFacts {
  final String portalId;
  final double openFraction;
  final bool isOpen;
  final bool isFullyOpen;
  final bool passableCapsuleClearance;
  final double visualPivotDegrees;
  final double acousticCutoffHz;
  final double acousticGainDb;

  const PortalStateFacts({
    required this.portalId,
    required this.openFraction,
    required this.isOpen,
    required this.isFullyOpen,
    required this.passableCapsuleClearance,
    required this.visualPivotDegrees,
    required this.acousticCutoffHz,
    required this.acousticGainDb,
  });

  factory PortalStateFacts.calculate({
    required String portalId,
    required double openFraction,
    double maxPivotDegrees = 90.0,
    double closedCutoffHz = 350.0,
    double openCutoffHz = 18000.0,
    double closedGainDb = -24.0,
    double openGainDb = 0.0,
  }) {
    final frac = openFraction.clamp(0.0, 1.0);
    final isOpen = frac > 0.05;
    final isFullyOpen = frac >= 0.95;
    final passable = frac >= 0.40;
    final pivotDeg = frac * maxPivotDegrees;

    // Log-frequency cutoff curve
    final logMin = math.log(closedCutoffHz);
    final logMax = math.log(openCutoffHz);
    final cutoffHz = math.exp(logMin + (logMax - logMin) * frac);

    // Linear dB gain curve
    final gainDb = closedGainDb + (openGainDb - closedGainDb) * frac;

    return PortalStateFacts(
      portalId: portalId,
      openFraction: frac,
      isOpen: isOpen,
      isFullyOpen: isFullyOpen,
      passableCapsuleClearance: passable,
      visualPivotDegrees: pivotDeg,
      acousticCutoffHz: cutoffHz,
      acousticGainDb: gainDb,
    );
  }

  Map<String, Object> toJson() => {
        'portalId': portalId,
        'openFraction': openFraction,
        'isOpen': isOpen,
        'isFullyOpen': isFullyOpen,
        'passableCapsuleClearance': passableCapsuleClearance,
        'visualPivotDegrees': visualPivotDegrees,
        'acousticCutoffHz': acousticCutoffHz,
        'acousticGainDb': acousticGainDb,
      };
}
