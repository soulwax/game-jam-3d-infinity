import 'dart:math' as math;

/// Dynamic Resolution Scaler (DRS) for adaptive 60 FPS frame pacing.
class DynamicResolutionScaler {
  final double targetFrameTimeMs;
  final double minRenderScale;
  final double maxRenderScale;
  final double scaleStep;
  final int windowSize;

  final List<double> _frameTimes = [];
  double _currentRenderScale;

  DynamicResolutionScaler({
    this.targetFrameTimeMs = 16.666, // 60 FPS target
    this.minRenderScale = 0.65,
    this.maxRenderScale = 1.0,
    this.scaleStep = 0.05,
    this.windowSize = 30,
  }) : _currentRenderScale = maxRenderScale;

  double get currentRenderScale => _currentRenderScale;

  /// Registers a frame duration in milliseconds and computes updated render scale.
  double recordFrame(double frameTimeMs) {
    _frameTimes.add(frameTimeMs);
    if (_frameTimes.length > windowSize) {
      _frameTimes.removeAt(0);
    }

    if (_frameTimes.length >= 10) {
      final avg = _frameTimes.reduce((a, b) => a + b) / _frameTimes.length;

      // Hysteresis bands to prevent scale thrashing
      final highThreshold = targetFrameTimeMs * 1.15; // > 19.1ms -> scale down
      final lowThreshold = targetFrameTimeMs * 0.80;  // < 13.3ms -> scale up

      if (avg > highThreshold) {
        _currentRenderScale = math.max(minRenderScale, _currentRenderScale - scaleStep);
      } else if (avg < lowThreshold) {
        _currentRenderScale = math.min(maxRenderScale, _currentRenderScale + scaleStep * 0.5);
      }
    }

    return _currentRenderScale;
  }

  /// Resets history to full resolution.
  void reset() {
    _frameTimes.clear();
    _currentRenderScale = maxRenderScale;
  }

  /// Self-validation for unit tests.
  static bool validate() {
    final drs = DynamicResolutionScaler(targetFrameTimeMs: 16.666);

    // Simulate heavy frame load (25ms per frame)
    for (var i = 0; i < 20; i++) {
      drs.recordFrame(25.0);
    }
    if (drs.currentRenderScale >= 1.0) return false;

    // Simulate light frame load (10ms per frame)
    for (var i = 0; i < 40; i++) {
      drs.recordFrame(10.0);
    }
    if (drs.currentRenderScale <= drs.minRenderScale) return false;

    return true;
  }
}
