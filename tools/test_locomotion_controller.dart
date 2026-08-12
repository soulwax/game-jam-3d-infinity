import 'dart:math' as math;

import 'package:quarantine/engine/locomotion_controller.dart';

void main() {
  print('Running LocomotionController test fixture...');

  final controller = LocomotionController();

  // Test 1: Damped spring step height smoothing
  var eyeY = 1.65;
  final targetY = 2.15; // +0.5m step up
  var prevEyeY = eyeY;
  for (int i = 0; i < 30; i++) {
    eyeY = controller.smoothStepHeight(eyeY, targetY, 0.016); // 16ms tick
    if (eyeY < prevEyeY) {
      throw StateError('Stair spring must not oscillate backwards during step up');
    }
    prevEyeY = eyeY;
  }
  // After ~0.5s, should be practically at target
  if ((eyeY - targetY).abs() > 0.05) {
    throw StateError('Stair spring should converge to target within 0.5s, got $eyeY vs $targetY');
  }

  // Test 2: Head bob oscillation bounds
  for (double t = 0; t < 2.0; t += 0.016) {
    final bob = controller.advanceHeadBob(moveSpeedFraction: 1.0, dt: 0.016);
    if (bob.y.abs() > LocomotionController.verticalBobAmplitude + 1e-6) {
      throw StateError('Head bob Y exceeded vertical amplitude bound: ${bob.y}');
    }
    if (bob.x.abs() > LocomotionController.horizontalBobAmplitude + 1e-6) {
      throw StateError('Head bob X exceeded horizontal amplitude bound: ${bob.x}');
    }
  }

  // Test 3: Footstep trigger cadence
  int footstepCount = 0;
  for (double t = 0; t < 2.0; t += 0.016) {
    controller.advanceHeadBob(moveSpeedFraction: 1.0, dt: 0.016);
    if (controller.checkFootstepTrigger(1.0)) {
      footstepCount++;
    }
  }
  // Over 2.0s at 1.8Hz, should produce ~3 to 4 footsteps
  if (footstepCount < 2 || footstepCount > 6) {
    throw StateError('Footstep cadence unexpected: $footstepCount footsteps in 2.0s');
  }

  // Test 4: Strafe roll limits
  final rightRoll = controller.computeStrafeRoll(1.0);
  final maxRollRad = 0.8 * math.pi / 180.0;
  if ((rightRoll - maxRollRad).abs() > 1e-6) {
    throw StateError('Strafe roll calculation mismatch: $rightRoll vs $maxRollRad');
  }

  final leftRoll = controller.computeStrafeRoll(-1.0);
  if ((leftRoll - (-maxRollRad)).abs() > 1e-6) {
    throw StateError('Strafe roll negative mismatch: $leftRoll vs ${-maxRollRad}');
  }

  print('✓ LocomotionController tests PASSED (4/4 assertions certified).');
}
