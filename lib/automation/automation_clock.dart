import 'dart:async';

final class AutomationTick {
  final int index;
  final double delta;
  final double elapsed;

  const AutomationTick({
    required this.index,
    required this.delta,
    required this.elapsed,
  });
}

final class AutomationTickTimeout implements Exception {
  final String reason;
  final int tick;

  const AutomationTickTimeout(this.reason, this.tick);

  @override
  String toString() => 'AutomationTickTimeout(tick: $tick, reason: $reason)';
}

/// Fixed-step clock for automation. Host frame duration is never accumulated
/// into hidden catch-up ticks; callers explicitly request the number of ticks.
final class AutomationClock {
  final double fixedDelta;
  final int maxTicks;
  final Duration wallTimeout;
  final DateTime Function() now;

  int _tick = 0;
  bool _paused = false;
  DateTime? _startedAt;

  AutomationClock({
    required this.fixedDelta,
    required this.maxTicks,
    required this.wallTimeout,
    DateTime Function()? now,
  }) : now = now ?? DateTime.now {
    if (!fixedDelta.isFinite || fixedDelta <= 0) {
      throw ArgumentError('fixedDelta must be finite and positive');
    }
    if (maxTicks <= 0) throw ArgumentError('maxTicks must be positive');
    if (wallTimeout <= Duration.zero) {
      throw ArgumentError('wallTimeout must be positive');
    }
  }

  int get tick => _tick;
  bool get paused => _paused;
  double get elapsed => _tick * fixedDelta;

  void start() {
    if (_startedAt != null) throw StateError('clock already started');
    _startedAt = now();
  }

  void pause() => _paused = true;
  void resume() => _paused = false;

  Future<void> pump(
    int count,
    FutureOr<void> Function(AutomationTick tick) step,
  ) async {
    if (count < 0) throw ArgumentError('pump count cannot be negative');
    if (_startedAt == null) start();
    for (var i = 0; i < count; i++) {
      _checkWallTimeout();
      if (_paused) continue;
      if (_tick >= maxTicks) {
        throw AutomationTickTimeout('tick budget exhausted', _tick);
      }
      _tick++;
      await step(
        AutomationTick(index: _tick, delta: fixedDelta, elapsed: elapsed),
      );
      _checkWallTimeout();
    }
  }

  void _checkWallTimeout() {
    final started = _startedAt;
    if (started != null && now().difference(started) > wallTimeout) {
      throw AutomationTickTimeout('wall watchdog expired', _tick);
    }
  }
}

/// Stable seeded PRNG for presentation choices. It does not depend on the
/// host VM's `Random` implementation or scheduling.
final class AutomationRandom {
  int _state;

  AutomationRandom(int seed) : _state = _normalize(seed);

  int nextUint32() {
    var value = _state;
    value ^= (value << 13) & 0xFFFFFFFF;
    value ^= value >> 17;
    value ^= (value << 5) & 0xFFFFFFFF;
    _state = value & 0xFFFFFFFF;
    return _state;
  }

  double nextDouble() => nextUint32() / 0x100000000;

  int nextInt(int max) {
    if (max <= 0) throw ArgumentError('max must be positive');
    return nextUint32() % max;
  }

  static int _normalize(int seed) {
    final value = seed & 0xFFFFFFFF;
    return value == 0 ? 0x6D2B79F5 : value;
  }
}

/// Returns true only after the same semantic observation has remained stable
/// for the requested number of consecutive ticks.
final class AutomationStabilityWindow {
  final int requiredTicks;
  Object? _last;
  int _stableTicks = 0;

  AutomationStabilityWindow({this.requiredTicks = 2}) {
    if (requiredTicks <= 0) {
      throw ArgumentError('requiredTicks must be positive');
    }
  }

  bool get settled => _stableTicks >= requiredTicks;

  bool observe(Object? signature) {
    if (signature == _last) {
      _stableTicks++;
    } else {
      _last = signature;
      _stableTicks = 1;
    }
    return settled;
  }

  void reset() {
    _last = null;
    _stableTicks = 0;
  }
}
