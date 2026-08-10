import 'dart:math' as math;

/// Single frame performance telemetry sample for V-03.
class FrameTelemetrySample {
  final int frameIndex;
  final double cpuTimeMs;
  final double gpuTimeMs;
  final double transitionHitchMs;
  final int workingSetBytes;
  final int resourceChurnCount;

  const FrameTelemetrySample({
    required this.frameIndex,
    required this.cpuTimeMs,
    required this.gpuTimeMs,
    required this.transitionHitchMs,
    required this.workingSetBytes,
    required this.resourceChurnCount,
  });
}

/// Machine-readable performance measurement report for V-03.
class VisualPerformanceReport {
  final double coldLoadMs;
  final double warmLoadMs;
  final double shaderWarmupMs;
  final double p50CpuMs;
  final double p95CpuMs;
  final double p99CpuMs;
  final double p50GpuMs;
  final double p95GpuMs;
  final double p99GpuMs;
  final double maxHitchMs;
  final int peakWorkingSetBytes;
  final int totalResourceChurn;

  const VisualPerformanceReport({
    required this.coldLoadMs,
    required this.warmLoadMs,
    required this.shaderWarmupMs,
    required this.p50CpuMs,
    required this.p95CpuMs,
    required this.p99CpuMs,
    required this.p50GpuMs,
    required this.p95GpuMs,
    required this.p99GpuMs,
    required this.maxHitchMs,
    required this.peakWorkingSetBytes,
    required this.totalResourceChurn,
  });

  bool isWithinBudget({double targetFps = 60.0}) {
    final maxAllowedFrameTimeMs = 1000.0 / targetFps; // 16.67ms for 60fps
    return p95CpuMs <= maxAllowedFrameTimeMs && p95GpuMs <= maxAllowedFrameTimeMs && maxHitchMs <= 100.0;
  }

  Map<String, dynamic> toJson() => {
        'coldLoadMs': coldLoadMs,
        'warmLoadMs': warmLoadMs,
        'shaderWarmupMs': shaderWarmupMs,
        'p50CpuMs': p50CpuMs,
        'p95CpuMs': p95CpuMs,
        'p99CpuMs': p99CpuMs,
        'p50GpuMs': p50GpuMs,
        'p95GpuMs': p95GpuMs,
        'p99GpuMs': p99GpuMs,
        'maxHitchMs': maxHitchMs,
        'peakWorkingSetBytes': peakWorkingSetBytes,
        'totalResourceChurn': totalResourceChurn,
      };
}

/// V-03 Visual Performance & Telemetry Harness.
class VisualPerformanceHarness {
  double coldLoadMs = 0.0;
  double warmLoadMs = 0.0;
  double shaderWarmupMs = 0.0;

  final List<FrameTelemetrySample> _samples = [];

  void recordColdLoad(double durationMs) => coldLoadMs = durationMs;
  void recordWarmLoad(double durationMs) => warmLoadMs = durationMs;
  void recordShaderWarmup(double durationMs) => shaderWarmupMs = durationMs;

  void recordSample(FrameTelemetrySample sample) {
    _samples.add(sample);
  }

  /// Generates a machine-readable performance report with p50/p95/p99 percentiles.
  VisualPerformanceReport generateReport() {
    if (_samples.isEmpty) {
      return const VisualPerformanceReport(
        coldLoadMs: 0,
        warmLoadMs: 0,
        shaderWarmupMs: 0,
        p50CpuMs: 0,
        p95CpuMs: 0,
        p99CpuMs: 0,
        p50GpuMs: 0,
        p95GpuMs: 0,
        p99GpuMs: 0,
        maxHitchMs: 0,
        peakWorkingSetBytes: 0,
        totalResourceChurn: 0,
      );
    }

    final cpus = _samples.map((s) => s.cpuTimeMs).toList()..sort();
    final gpus = _samples.map((s) => s.gpuTimeMs).toList()..sort();
    final hitches = _samples.map((s) => s.transitionHitchMs).toList()..sort();

    var peakBytes = 0;
    var churn = 0;
    for (final s in _samples) {
      peakBytes = math.max(peakBytes, s.workingSetBytes);
      churn += s.resourceChurnCount;
    }

    return VisualPerformanceReport(
      coldLoadMs: coldLoadMs,
      warmLoadMs: warmLoadMs,
      shaderWarmupMs: shaderWarmupMs,
      p50CpuMs: _percentile(cpus, 0.50),
      p95CpuMs: _percentile(cpus, 0.95),
      p99CpuMs: _percentile(cpus, 0.99),
      p50GpuMs: _percentile(gpus, 0.50),
      p95GpuMs: _percentile(gpus, 0.95),
      p99GpuMs: _percentile(gpus, 0.99),
      maxHitchMs: hitches.last,
      peakWorkingSetBytes: peakBytes,
      totalResourceChurn: churn,
    );
  }

  double _percentile(List<double> sorted, double pct) {
    if (sorted.isEmpty) return 0.0;
    final idx = ((sorted.length - 1) * pct).round().clamp(0, sorted.length - 1);
    return sorted[idx];
  }

  void reset() {
    _samples.clear();
  }
}
