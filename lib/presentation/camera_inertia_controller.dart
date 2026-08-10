import 'package:quarantine/engine/math3.dart';

/// Camera inertia state and micro-sway parameters for high-fidelity presentation.
class CameraInertiaState {
  final Vec3 targetPosition;
  final Vec3 currentPosition;
  final double targetYaw;
  final double currentYaw;
  final double targetPitch;
  final double currentPitch;
  final double rollTilt;
  final double bobPhase;

  const CameraInertiaState({
    required this.targetPosition,
    required this.currentPosition,
    required this.targetYaw,
    required this.currentYaw,
    required this.targetPitch,
    required this.currentPitch,
    required this.rollTilt,
    required this.bobPhase,
  });

  Map<String, dynamic> toJson() => {
        'targetPosition': {'x': targetPosition.x, 'y': targetPosition.y, 'z': targetPosition.z},
        'currentPosition': {'x': currentPosition.x, 'y': currentPosition.y, 'z': currentPosition.z},
        'targetYaw': targetYaw,
        'currentYaw': currentYaw,
        'targetPitch': targetPitch,
        'currentPitch': currentPitch,
        'rollTilt': rollTilt,
        'bobPhase': bobPhase,
      };
}

/// Evaluates smooth camera inertia, strafe roll tilt, and head-bob dynamics.
class CameraInertiaController {
  final double stiffness;
  final double damping;
  final double strafeRollScale;
  final double bobFrequency;
  final double bobAmplitude;

  const CameraInertiaController({
    this.stiffness = 18.0,
    this.damping = 0.85,
    this.strafeRollScale = 0.035,
    this.bobFrequency = 8.0,
    this.bobAmplitude = 0.025,
  });

  /// Evaluates next camera pose frame using exponential smoothing and velocity.
  CameraInertiaState step({
    required CameraInertiaState previousState,
    required Vec3 desiredPosition,
    required double desiredYaw,
    required double desiredPitch,
    required Vec3 moveVelocity,
    required double dt,
    required bool reducedMotion,
  }) {
    if (reducedMotion) {
      return CameraInertiaState(
        targetPosition: desiredPosition,
        currentPosition: desiredPosition,
        targetYaw: desiredYaw,
        currentYaw: desiredYaw,
        targetPitch: desiredPitch,
        currentPitch: desiredPitch,
        rollTilt: 0.0,
        bobPhase: 0.0,
      );
    }

    // 1. Exponential position smoothing
    final alphaPos = (stiffness * dt).clamp(0.0, 1.0);
    final smoothedPos = previousState.currentPosition + (desiredPosition - previousState.currentPosition) * alphaPos;

    // 2. Exponential rotation smoothing
    final alphaRot = (stiffness * 1.2 * dt).clamp(0.0, 1.0);
    final smoothedYaw = previousState.currentYaw + (desiredYaw - previousState.currentYaw) * alphaRot;
    final smoothedPitch = previousState.currentPitch + (desiredPitch - previousState.currentPitch) * alphaRot;

    // 3. Strafe roll tilt calculation (lateral movement component)
    final speed = moveVelocity.length;
    final strafeComponent = moveVelocity.x;
    final targetRoll = -strafeComponent * strafeRollScale;
    final smoothedRoll = previousState.rollTilt + (targetRoll - previousState.rollTilt) * alphaPos;

    // 4. Head bob phase update
    double nextBobPhase = previousState.bobPhase;
    if (speed > 0.1) {
      nextBobPhase += bobFrequency * dt * speed;
    }

    return CameraInertiaState(
      targetPosition: desiredPosition,
      currentPosition: smoothedPos,
      targetYaw: desiredYaw,
      currentYaw: smoothedYaw,
      targetPitch: desiredPitch,
      currentPitch: smoothedPitch,
      rollTilt: smoothedRoll,
      bobPhase: nextBobPhase,
    );
  }
}
