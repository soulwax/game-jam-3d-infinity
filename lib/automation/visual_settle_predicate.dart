import '../engine/math3.dart';

/// Settle predicate for T-11 visual capture automation.
/// Ensures pose position movement, view angles, and clock stability window
/// have settled within tolerance before a visual screenshot is captured.
class VisualSettlePredicate {
  final double maxMoveTolerance;
  final double maxLookTolerance;
  final int requiredStableTicks;

  Vec3? _lastPosition;
  double? _lastYaw;
  double? _lastPitch;
  int _consecutiveStableTicks = 0;

  VisualSettlePredicate({
    this.maxMoveTolerance = 0.001, // 1 millimeter
    this.maxLookTolerance = 0.001, // 0.001 radians
    this.requiredStableTicks = 5,
  }) {
    if (maxMoveTolerance <= 0 || maxLookTolerance <= 0 || requiredStableTicks <= 0) {
      throw ArgumentError('settle predicate tolerances must be positive');
    }
  }

  bool get isSettled => _consecutiveStableTicks >= requiredStableTicks;
  int get stableTicks => _consecutiveStableTicks;

  bool evaluate({
    required Vec3 position,
    required double yaw,
    required double pitch,
  }) {
    final lastPos = _lastPosition;
    final lastY = _lastYaw;
    final lastP = _lastPitch;

    _lastPosition = position;
    _lastYaw = yaw;
    _lastPitch = pitch;

    if (lastPos == null || lastY == null || lastP == null) {
      _consecutiveStableTicks = 1;
      return isSettled;
    }

    final moveDist = (position - lastPos).length;
    final yawDiff = (yaw - lastY).abs();
    final pitchDiff = (pitch - lastP).abs();

    if (moveDist <= maxMoveTolerance && yawDiff <= maxLookTolerance && pitchDiff <= maxLookTolerance) {
      _consecutiveStableTicks++;
    } else {
      _consecutiveStableTicks = 0;
    }

    return isSettled;
  }

  void reset() {
    _lastPosition = null;
    _lastYaw = null;
    _lastPitch = null;
    _consecutiveStableTicks = 0;
  }
}
