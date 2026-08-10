import 'package:quarantine/engine/engine_orchestrator.dart';
import 'package:quarantine/game/presentation_snapshot.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final orchestrator = EngineOrchestrator(simTickRateHz: 60);
  check(orchestrator.currentTick == 0, 'starts at tick 0');
  check(!orchestrator.isPaused, 'starts unpaused');

  int simTicksCount = 0;
  // Step 1 frame (~16.67ms)
  final ticksDone = orchestrator.step(
    deltaSec: 0.017,
    onSimTick: (t) => simTicksCount++,
    onBuildSnapshot: (t) => PresentationSnapshot(values: {'tick': t}),
  );

  check(ticksDone == 1, '1 tick performed for 17ms step');
  check(orchestrator.currentTick == 1, 'currentTick advanced to 1');
  check(simTicksCount == 1, 'sim tick callback fired once');
  check(orchestrator.lastSnapshot.values['tick'] == 1, 'presentation snapshot built');

  // Pause freeze test
  orchestrator.setPaused(true);
  check(orchestrator.isPaused, 'paused set');
  final pausedTicks = orchestrator.step(
    deltaSec: 0.017,
    onSimTick: (t) => simTicksCount++,
    onBuildSnapshot: (t) => PresentationSnapshot(values: {'tick': t}),
  );
  check(pausedTicks == 0, '0 ticks performed when paused');
  check(orchestrator.currentTick == 1, 'currentTick frozen when paused');

  // Resume test
  orchestrator.setPaused(false);
  orchestrator.step(
    deltaSec: 0.017,
    onSimTick: (t) => simTicksCount++,
    onBuildSnapshot: (t) => PresentationSnapshot(values: {'tick': t}),
  );
  check(orchestrator.currentTick == 2, 'resumed tick advances to 2');

  print('engine orchestrator PF-07: fixed-tick stepping, pause freeze, and presentation snapshot pass');
}
