import 'dart:math' as math;

/// State descriptor for a live thunderstorm flash & audio event.
class LightningFlashState {
  final bool active;
  final double intensity; // 0.0 to 1.0 strobe brightness multiplier
  final double colorR;
  final double colorG;
  final double colorB;

  const LightningFlashState({
    this.active = false,
    this.intensity = 0.0,
    this.colorR = 0.85,
    this.colorG = 0.92,
    this.colorB = 1.0, // Crisp atmospheric lightning blue-white
  });
}

/// Realistic Thunderstorm & Dynamic Rain Simulation Engine.
class RealisticThunderstormEngine {
  final math.Random _rng = math.Random(0x7F18C);
  
  double _timeUntilNextStrikeSeconds = 8.0;
  double _currentFlashTimerSeconds = 0.0;
  double _flashDurationSeconds = 0.40;
  double _thunderAudioDelaySeconds = -1.0;
  
  LightningFlashState _flashState = const LightningFlashState();
  
  LightningFlashState get flashState => _flashState;
  double get thunderAudioDelaySeconds => _thunderAudioDelaySeconds;

  /// Updates thunderstorm simulation clock and generates dynamic lightning strobes.
  void update(double dt, {required double rainIntensity}) {
    // Only generate lightning strikes if rain intensity indicates a thunderstorm (>= 0.35)
    if (rainIntensity < 0.35) {
      _flashState = const LightningFlashState();
      _thunderAudioDelaySeconds = -1.0;
      return;
    }

    // 1. Advance active lightning flash decay
    if (_currentFlashTimerSeconds > 0.0) {
      _currentFlashTimerSeconds -= dt;
      if (_currentFlashTimerSeconds <= 0.0) {
        _flashState = const LightningFlashState();
      } else {
        final progress = 1.0 - (_currentFlashTimerSeconds / _flashDurationSeconds);
        
        // Multi-burst strobe curve: Peak at t=0, sub-burst at t=0.20, decay to 0
        double strobe = 0.0;
        if (progress < 0.15) {
          strobe = math.sin((progress / 0.15) * math.pi * 0.5); // Initial sharp burst
        } else if (progress < 0.35) {
          final subProg = (progress - 0.15) / 0.20;
          strobe = 0.35 + 0.45 * math.sin(subProg * math.pi); // Secondary sub-burst
        } else {
          strobe = (1.0 - progress) * 0.35; // Exponential tail decay
        }
        
        _flashState = LightningFlashState(
          active: true,
          intensity: (strobe * (0.6 + rainIntensity * 0.6)).clamp(0.0, 1.0),
          colorR: 0.82 + _rng.nextDouble() * 0.1,
          colorG: 0.90 + _rng.nextDouble() * 0.08,
          colorB: 1.0,
        );
      }
    }

    // 2. Advance pending thunder audio delay countdown
    if (_thunderAudioDelaySeconds > 0.0) {
      _thunderAudioDelaySeconds -= dt;
    }

    // 3. Countdown to next lightning strike
    _timeUntilNextStrikeSeconds -= dt;
    if (_timeUntilNextStrikeSeconds <= 0.0) {
      // Trigger new lightning strike!
      _currentFlashTimerSeconds = 0.35 + _rng.nextDouble() * 0.15;
      _flashDurationSeconds = _currentFlashTimerSeconds;
      
      // Calculate realistic speed-of-sound thunder delay (343m/s)
      final distanceKm = 0.6 + _rng.nextDouble() * 2.8; // 600m to 3.4km away
      _thunderAudioDelaySeconds = distanceKm / 0.343; // Seconds until thunder rumble hits
      
      // Next strike interval frequency scales inversely with rain intensity
      final baseInterval = 16.0 - (rainIntensity * 11.0); // 5s to 16s between strikes
      _timeUntilNextStrikeSeconds = baseInterval + _rng.nextDouble() * 6.0;
    }
  }

  /// Resets engine state.
  void reset() {
    _timeUntilNextStrikeSeconds = 8.0;
    _currentFlashTimerSeconds = 0.0;
    _thunderAudioDelaySeconds = -1.0;
    _flashState = const LightningFlashState();
  }
}
