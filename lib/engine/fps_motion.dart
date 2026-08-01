import 'dart:math' as math;

import 'math3.dart';

/// Small, frame-rate-independent acceleration and release drag for FPS controls.
class FpsMotion {
  Vec3 velocity = Vec3(0, 0, 0);

  Vec3 advance(
    Vec3 desiredVelocity,
    double dt, {
    required double acceleration,
    required double drag,
  }) {
    if (!dt.isFinite || dt < 0) {
      throw ArgumentError.value(dt, 'dt', 'must be finite and non-negative');
    }
    final moving = desiredVelocity.x != 0 || desiredVelocity.z != 0;
    final rate = moving ? acceleration : drag;
    if (!rate.isFinite || rate <= 0) {
      throw ArgumentError.value(rate, 'rate', 'must be finite and positive');
    }
    final blend = 1 - math.exp(-rate * dt);
    velocity = velocity + (desiredVelocity - velocity) * blend;
    return velocity;
  }

  void stop() {
    velocity = Vec3(0, 0, 0);
  }
}
