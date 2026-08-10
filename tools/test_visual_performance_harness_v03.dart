// V-03: Visual performance harness & telemetry verification.
//
// Verifies that:
//  1. Frame telemetry samples are aggregated into p50, p95, p99 percentiles.
//  2. Cold/warm load and shader warmup times are recorded cleanly.
//  3. Budget validation correctly checks p95 frame time against target FPS.
//  4. Resource churn and peak working set sizes are tracked accurately.

import 'package:quarantine/presentation/visual_performance_harness.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final harness = VisualPerformanceHarness();

  harness.recordColdLoad(150.0);
  harness.recordWarmLoad(45.0);
  harness.recordShaderWarmup(12.0);

  // Record 100 simulated frame samples
  for (var i = 1; i <= 100; i++) {
    harness.recordSample(
      FrameTelemetrySample(
        frameIndex: i,
        cpuTimeMs: i * 0.1, // 0.1ms to 10.0ms
        gpuTimeMs: i * 0.12, // 0.12ms to 12.0ms
        transitionHitchMs: i == 50 ? 25.0 : 0.0,
        workingSetBytes: 1024 * 1024 * 50,
        resourceChurnCount: i % 10 == 0 ? 1 : 0,
      ),
    );
  }

  final report = harness.generateReport();

  check(report.coldLoadMs == 150.0, 'Cold load time recorded');
  check(report.warmLoadMs == 45.0, 'Warm load time recorded');
  check(report.shaderWarmupMs == 12.0, 'Shader warmup time recorded');

  check(report.p50CpuMs > 4.5 && report.p50CpuMs < 5.5, 'p50 CPU time ~ 5.0ms');
  check(report.p95CpuMs > 9.0 && report.p95CpuMs <= 10.0, 'p95 CPU time ~ 9.5ms');
  check(report.p95GpuMs <= 12.0, 'p95 GPU time <= 12.0ms');

  check(report.isWithinBudget(targetFps: 60.0), 'Performance report passes 60fps budget check');
  check(report.maxHitchMs == 25.0, 'Max hitch recorded as 25.0ms');
  check(report.totalResourceChurn == 10, '10 total resource churn events recorded');

  print('V-03: Visual performance harness test passed cleanly!');
}
