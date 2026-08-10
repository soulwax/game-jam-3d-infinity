import 'renderer_diagnostics.dart';

/// Performance budget ledger for VIS-017 / R-08.
/// Monitors CPU/GPU frame times, draw call counts, triangle counts,
/// and computes rolling p50/p95/p99 percentiles and budget violation stats.
class PerformanceBudgetLedger {
  final double targetFrameTimeMs;
  final int maxDrawCalls;
  final int maxTriangles;
  final int sampleCapacity;

  final List<double> _frameTimesMs = [];
  int _cpuOverrunCount = 0;
  int _drawCallOverrunCount = 0;
  int _triangleOverrunCount = 0;
  int _totalRecordedFrames = 0;

  PerformanceBudgetLedger({
    this.targetFrameTimeMs = 16.67,
    this.maxDrawCalls = 150,
    this.maxTriangles = 100000,
    this.sampleCapacity = 60,
  }) {
    if (targetFrameTimeMs <= 0 || maxDrawCalls <= 0 || maxTriangles <= 0 || sampleCapacity <= 0) {
      throw ArgumentError('performance budget parameters must be positive');
    }
  }

  int get totalRecordedFrames => _totalRecordedFrames;
  int get cpuOverrunCount => _cpuOverrunCount;
  int get drawCallOverrunCount => _drawCallOverrunCount;
  int get triangleOverrunCount => _triangleOverrunCount;

  void recordFrame({
    required double frameTimeMs,
    required RendererFrameTelemetry telemetry,
  }) {
    _totalRecordedFrames++;
    if (frameTimeMs > targetFrameTimeMs) _cpuOverrunCount++;
    if (telemetry.drawCallCount > maxDrawCalls) _drawCallOverrunCount++;
    if (telemetry.triangleCount > maxTriangles) _triangleOverrunCount++;

    _frameTimesMs.add(frameTimeMs);
    if (_frameTimesMs.length > sampleCapacity) {
      _frameTimesMs.removeAt(0);
    }
  }

  /// Calculates percentile from current sample window.
  double getPercentile(double percentile) {
    if (_frameTimesMs.isEmpty) return 0.0;
    final sorted = List<double>.from(_frameTimesMs)..sort();
    final index = ((sorted.length - 1) * (percentile.clamp(0.0, 1.0))).round();
    return sorted[index];
  }

  double get p50 => getPercentile(0.50);
  double get p95 => getPercentile(0.95);
  double get p99 => getPercentile(0.99);

  Map<String, Object> toJson() => {
        'totalRecordedFrames': totalRecordedFrames,
        'cpuOverrunCount': cpuOverrunCount,
        'drawCallOverrunCount': drawCallOverrunCount,
        'triangleOverrunCount': triangleOverrunCount,
        'p50Ms': p50,
        'p95Ms': p95,
        'p99Ms': p99,
      };

  void reset() {
    _frameTimesMs.clear();
    _cpuOverrunCount = 0;
    _drawCallOverrunCount = 0;
    _triangleOverrunCount = 0;
    _totalRecordedFrames = 0;
  }
}
