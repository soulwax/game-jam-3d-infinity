import 'dart:math' as math;

import 'math3.dart';

/// Footstep floor material classification for audio triggers.
enum FootstepSurface {
  hardwood,
  carpet,
  dampStone,
  porchPlank,
  snow,
}

/// Critically damped spring solver for camera height smoothing over stairs.
class DampedSpring1D {
  double position;
  double velocity;
  final double omega; // Natural frequency (rad/s)
  final double zeta; // Damping ratio (1.0 = critically damped)

  DampedSpring1D({
    this.position = 0.0,
    this.velocity = 0.0,
    this.omega = 12.5, // tau = 0.08s -> omega = 1/0.08 = 12.5
    this.zeta = 1.0,
  });

  double advance(double target, double dt) {
    if (dt <= 0.0 || !dt.isFinite) return position;
    // Critically damped spring integration:
    // x''(t) + 2*zeta*omega*x'(t) + omega^2*(x(t) - target) = 0
    final displacement = position - target;
    final f = 1.0 + 2.0 * dt * zeta * omega;
    final oo = omega * omega;
    final hoo = dt * oo;
    final hhoo = dt * hoo;
    final detInv = 1.0 / (f + hhoo);
    final detPos = f * position + dt * velocity + hhoo * target;
    final detVel = velocity - hoo * displacement;

    position = detPos * detInv;
    velocity = detVel * detInv;
    return position;
  }

  void snapTo(double value) {
    position = value;
    velocity = 0.0;
  }
}

/// Locomotion feel controller governing head-bob, strafe tilt, and footstep audio cadence.
class LocomotionController {
  final DampedSpring1D _stairSpring = DampedSpring1D();
  double _bobPhase = 0.0;
  double _lastSinBob = 0.0;
  bool _footstepTriggeredThisCycle = false;

  static const double walkFrequency = 1.8; // Hz
  static const double sprintFrequency = 2.4; // Hz
  static const double verticalBobAmplitude = 0.025; // meters
  static const double horizontalBobAmplitude = 0.012; // meters
  static const double maxStrafeRollDegrees = 0.8; // degrees

  bool _initialized = false;

  /// Returns smooth camera vertical position over steps.
  double smoothStepHeight(double currentEyeY, double rawEyeY, double dt) {
    if (!_initialized) {
      _stairSpring.snapTo(currentEyeY);
      _initialized = true;
    } else if ((currentEyeY - rawEyeY).abs() > 1.5) {
      // Teleport/floor switch: snap immediately
      _stairSpring.snapTo(rawEyeY);
      return rawEyeY;
    }
    return _stairSpring.advance(rawEyeY, dt);
  }

  /// Advances head-bob phase and computes camera displacement vector.
  Vec3 advanceHeadBob({
    required double moveSpeedFraction,
    required double dt,
    bool isSprinting = false,
  }) {
    if (moveSpeedFraction <= 0.01 || dt <= 0.0) {
      // Decay bob smoothly towards zero
      _bobPhase = 0.0;
      _footstepTriggeredThisCycle = false;
      return Vec3(0.0, 0.0, 0.0);
    }

    final freq = isSprinting ? sprintFrequency : walkFrequency;
    _bobPhase += 2.0 * math.pi * freq * dt;
    if (_bobPhase > 2.0 * math.pi * 1000.0) {
      _bobPhase = _bobPhase % (2.0 * math.pi);
    }

    final sinBob = math.sin(_bobPhase);
    final cosBob = math.cos(_bobPhase * 0.5);

    final yOffset = sinBob * verticalBobAmplitude * moveSpeedFraction;
    final xOffset = cosBob * horizontalBobAmplitude * moveSpeedFraction;

    _lastSinBob = sinBob;
    return Vec3(xOffset, yOffset, 0.0);
  }

  /// Checks if a footstep audio cue should fire this frame at bob wave minima.
  bool checkFootstepTrigger(double moveSpeedFraction) {
    if (moveSpeedFraction <= 0.05) {
      _footstepTriggeredThisCycle = false;
      return false;
    }
    // Footstep triggers when vertical bob crosses trough (sinBob < -0.85)
    if (_lastSinBob < -0.85 && !_footstepTriggeredThisCycle) {
      _footstepTriggeredThisCycle = true;
      return true;
    }
    if (_lastSinBob > 0.0) {
      _footstepTriggeredThisCycle = false;
    }
    return false;
  }

  /// Computes camera roll (radians) for strafe inertia feel.
  double computeStrafeRoll(double strafeFraction) {
    final clamped = strafeFraction.clamp(-1.0, 1.0);
    return clamped * (maxStrafeRollDegrees * math.pi / 180.0);
  }
}
