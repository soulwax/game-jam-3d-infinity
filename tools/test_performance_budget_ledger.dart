import 'package:quarantine/presentation/performance_budget_ledger.dart';
import 'package:quarantine/presentation/renderer_diagnostics.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final ledger = PerformanceBudgetLedger(
    targetFrameTimeMs: 16.0,
    maxDrawCalls: 50,
    maxTriangles: 10000,
    sampleCapacity: 20,
  );

  check(ledger.totalRecordedFrames == 0, 'starts with 0 recorded frames');

  // Record 10 frames with varying times
  for (int i = 1; i <= 10; i++) {
    ledger.recordFrame(
      frameTimeMs: i * 2.0, // 2.0 to 20.0 ms
      telemetry: RendererFrameTelemetry(
        drawCallCount: i > 8 ? 60 : 30,
        triangleCount: 5000,
        culledInstanceCount: 0,
      ),
    );
  }

  check(ledger.totalRecordedFrames == 10, '10 frames recorded');
  check(ledger.cpuOverrunCount == 2, '2 frames exceeded 16ms target (18ms, 20ms)');
  check(ledger.drawCallOverrunCount == 2, '2 frames exceeded 50 max draw calls');

  // Percentiles
  check(ledger.p50 > 0.0, 'p50 is non-zero');
  check(ledger.p95 >= ledger.p50, 'p95 >= p50');
  check(ledger.p99 >= ledger.p95, 'p99 >= p95');

  final json = ledger.toJson();
  check(json['totalRecordedFrames'] == 10, 'json totalRecordedFrames is 10');

  print('performance budget ledger VIS-017 / R-08: frame recording, percentiles, overrun tracking, and JSON pass');
}
