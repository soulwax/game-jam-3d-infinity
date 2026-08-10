import 'dart:io';

import 'package:quarantine/automation/automation_clock.dart';

Future<void> main() async {
  var hostTime = DateTime.utc(2026, 1, 1);
  final clock = AutomationClock(
    fixedDelta: 1 / 60,
    maxTicks: 4,
    wallTimeout: const Duration(seconds: 1),
    now: () => hostTime,
  );
  final ticks = <AutomationTick>[];
  await clock.pump(2, ticks.add);
  _expect(clock.tick == 2 && ticks[1].index == 2, 'explicit ticks');
  clock.pause();
  await clock.pump(4, ticks.add);
  _expect(clock.tick == 2 && ticks.length == 2, 'pause has no catch-up');
  hostTime = hostTime.add(const Duration(seconds: 10));

  final randomA = AutomationRandom(42017);
  final randomB = AutomationRandom(42017);
  for (var i = 0; i < 20; i++) {
    _expect(randomA.nextUint32() == randomB.nextUint32(), 'seeded randomness');
  }

  final stable = AutomationStabilityWindow(requiredTicks: 3);
  _expect(!stable.observe('closed'), 'settle waits');
  _expect(!stable.observe('closed'), 'settle requires consecutive ticks');
  _expect(stable.observe('closed'), 'settle after stable ticks');
  stable.observe('open');
  _expect(!stable.settled, 'state change resets settling');

  final wallClock = AutomationClock(
    fixedDelta: 1 / 60,
    maxTicks: 100,
    wallTimeout: const Duration(seconds: 1),
    now: () => hostTime,
  );
  wallClock.start();
  hostTime = hostTime.add(const Duration(seconds: 2));
  await _expectThrowsAsync(
    () => wallClock.pump(1, (_) {}),
    'wall watchdog rejects expired host time',
  );
  await _verifyDeterminismReplay();

  stdout.writeln(
    'automation clock: fixed ticks, pause, seed, settle, watchdog, determinism pass',
  );
}

Future<List<String>> _simulateRun(int seed) async {
  final trace = <String>[];
  var fakeTime = DateTime.utc(2026, 1, 1);
  final clock = AutomationClock(
    fixedDelta: 1 / 60,
    maxTicks: 30,
    wallTimeout: const Duration(seconds: 10),
    now: () => fakeTime,
  );
  final random = AutomationRandom(seed);
  final stability = AutomationStabilityWindow(requiredTicks: 3);

  await clock.pump(15, (tick) async {
    final sample = random.nextInt(3);
    final settled = stability.observe(sample);
    trace.add(
      'tick:${tick.index} elapsed:${tick.elapsed.toStringAsFixed(4)} sample:$sample settled:$settled',
    );
  });

  return trace;
}

Future<void> _verifyDeterminismReplay() async {
  final run1 = await _simulateRun(42017);
  final run2 = await _simulateRun(42017);
  _expect(run1.length == 15, 'run 1 produced 15 ticks');
  _expect(run2.length == 15, 'run 2 produced 15 ticks');
  for (var i = 0; i < run1.length; i++) {
    _expect(
      run1[i] == run2[i],
      'determinism mismatch at tick $i: ${run1[i]} != ${run2[i]}',
    );
  }
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}

Future<void> _expectThrowsAsync(
  Future<void> Function() action,
  String message,
) async {
  try {
    await action();
  } catch (_) {
    return;
  }
  throw StateError(message);
}
