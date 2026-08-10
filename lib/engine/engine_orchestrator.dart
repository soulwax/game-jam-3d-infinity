import '../game/presentation_snapshot.dart';

/// Whole-product game loop orchestrator for PF-07.
/// Coordinates fixed-tick simulation updates, variable render frame interpolation,
/// audio transmission calculation, and modal pause freeze handling.
class EngineOrchestrator {
  final int simTickRateHz;
  int _currentTick = 0;
  double _accumulatorSec = 0.0;
  bool _isPaused = false;
  PresentationSnapshot _lastSnapshot = PresentationSnapshot(values: const {});

  EngineOrchestrator({this.simTickRateHz = 60}) {
    if (simTickRateHz <= 0) {
      throw ArgumentError('simTickRateHz must be positive');
    }
  }

  int get currentTick => _currentTick;
  bool get isPaused => _isPaused;
  PresentationSnapshot get lastSnapshot => _lastSnapshot;

  void setPaused(bool paused) {
    _isPaused = paused;
  }

  /// Advances the loop accumulator by [deltaSec].
  /// Returns the number of fixed simulation ticks performed in this step.
  int step({
    required double deltaSec,
    required void Function(int tick) onSimTick,
    required PresentationSnapshot Function(int tick) onBuildSnapshot,
  }) {
    if (deltaSec < 0 || !deltaSec.isFinite) {
      throw ArgumentError('deltaSec must be finite and non-negative');
    }

    if (_isPaused) {
      // Pause freeze: simulation does not advance
      return 0;
    }

    final tickIntervalSec = 1.0 / simTickRateHz;
    _accumulatorSec += deltaSec;

    int ticksPerformed = 0;
    // Cap maximum catch-up ticks per frame to prevent spiral of death
    while (_accumulatorSec >= tickIntervalSec && ticksPerformed < 4) {
      _currentTick++;
      onSimTick(_currentTick);
      _accumulatorSec -= tickIntervalSec;
      ticksPerformed++;
    }

    // Clamp accumulator if catch-up cap was reached
    if (_accumulatorSec > tickIntervalSec * 2) {
      _accumulatorSec = 0.0;
    }

    _lastSnapshot = onBuildSnapshot(_currentTick);
    return ticksPerformed;
  }

  /// Returns the current frame interpolation factor in [0.0, 1.0].
  double get interpolationFactor {
    final tickIntervalSec = 1.0 / simTickRateHz;
    return (_accumulatorSec / tickIntervalSec).clamp(0.0, 1.0);
  }

  void reset() {
    _currentTick = 0;
    _accumulatorSec = 0.0;
    _isPaused = false;
    _lastSnapshot = PresentationSnapshot(values: const {});
  }
}
