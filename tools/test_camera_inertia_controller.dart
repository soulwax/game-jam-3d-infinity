// Unit test for CameraInertiaController.
//
// Verifies:
//  1. Reduced motion bypasses smoothing and returns exact desired pose.
//  2. Position and rotation exponentially smooth towards targets over steps.
//  3. Lateral strafe velocity induces roll tilt.
//  4. Head bob phase advances when move velocity > 0.1.

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/camera_inertia_controller.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  const controller = CameraInertiaController();

  final initial = CameraInertiaState(
    targetPosition: Vec3(0, 1.65, 0),
    currentPosition: Vec3(0, 1.65, 0),
    targetYaw: 0.0,
    currentYaw: 0.0,
    targetPitch: 0.0,
    currentPitch: 0.0,
    rollTilt: 0.0,
    bobPhase: 0.0,
  );

  // 1. Reduced Motion Test
  final reducedResult = controller.step(
    previousState: initial,
    desiredPosition: Vec3(1, 1.65, 2),
    desiredYaw: 0.5,
    desiredPitch: -0.2,
    moveVelocity: Vec3(1, 0, 0),
    dt: 0.016,
    reducedMotion: true,
  );

  check(reducedResult.currentPosition.x == 1.0, 'Reduced motion updates position instantly');
  check(reducedResult.currentYaw == 0.5, 'Reduced motion updates yaw instantly');
  check(reducedResult.rollTilt == 0.0, 'Reduced motion disables roll tilt');

  // 2. Normal Motion Exponential Smoothing & Strafe Roll Test
  final step1 = controller.step(
    previousState: initial,
    desiredPosition: Vec3(2, 1.65, 0),
    desiredYaw: 0.4,
    desiredPitch: 0.1,
    moveVelocity: Vec3(1.5, 0, 0),
    dt: 0.016,
    reducedMotion: false,
  );

  check(step1.currentPosition.x > 0.0 && step1.currentPosition.x < 2.0, 'Position smoothed exponentially');
  check(step1.currentYaw > 0.0 && step1.currentYaw < 0.4, 'Yaw smoothed exponentially');
  check(step1.rollTilt < 0.0, 'Rightward strafe induces negative roll tilt');
  check(step1.bobPhase > 0.0, 'Movement advances bob phase');

  // 3. Step 2 Convergence Check
  final step2 = controller.step(
    previousState: step1,
    desiredPosition: Vec3(2, 1.65, 0),
    desiredYaw: 0.4,
    desiredPitch: 0.1,
    moveVelocity: Vec3(1.5, 0, 0),
    dt: 0.016,
    reducedMotion: false,
  );

  check(step2.currentPosition.x > step1.currentPosition.x, 'Position converges towards target');
  check(step2.bobPhase > step1.bobPhase, 'Bob phase continues accumulating');

  final json = step2.toJson();
  check(json.containsKey('rollTilt'), 'State serializes rollTilt');
  check(json.containsKey('bobPhase'), 'State serializes bobPhase');

  print('CameraInertiaController test passed cleanly!');
}
