import 'dart:math' as math;

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/locomotion_controller.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/interaction.dart';
import 'house_fixture.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — PLAYABILITY & FLUIDITY SUITE (FL-01..03 / SHADERS)');
  print('========================================================================');

  // 1. Locomotion Spring & Camera Smoothing Verification
  print('Testing Locomotion Spring & Camera Smoothing...');
  final locomotion = LocomotionController();
  var eyeY = 1.65;
  final targetY = 2.15;
  for (int i = 0; i < 60; i++) {
    eyeY = locomotion.smoothStepHeight(eyeY, targetY, 0.016);
  }
  if ((eyeY - targetY).abs() > 0.01) {
    throw StateError('Stair spring must converge smoothly to step target: $eyeY vs $targetY');
  }

  // 2. Harmonic Head-Bob & Micro-Tilt Roll
  print('Testing Harmonic Head-Bob & Strafe Camera Roll...');
  final bob = locomotion.advanceHeadBob(moveSpeedFraction: 1.0, dt: 0.016);
  if (bob.y.abs() > LocomotionController.verticalBobAmplitude + 1e-5) {
    throw StateError('Vertical head bob out of bounds: ${bob.y}');
  }
  final roll = locomotion.computeStrafeRoll(1.0);
  if ((roll - 0.8 * math.pi / 180.0).abs() > 1e-5) {
    throw StateError('Strafe camera roll mismatch: $roll');
  }

  // 3. Occluded Raycast Bounding & Room Occlusion
  print('Testing Occluded Raycast Bounding & Range...');
  final house = loadAuthoredHouse(seed: 0);
  final room = house.byId('hall');
  if (room == null) {
    throw StateError('House must contain hall room');
  }
  final effDistance = effectiveRoomRaycastDistance(house, room);
  if (effDistance <= 0.0 || effDistance > raycastDistance) {
    throw StateError('Effective room raycast distance out of bounds: $effDistance');
  }

  // Raycast through solid west wall should be rejected
  final size = house.effectiveSize(room);
  final centerEye = room.origin + Vec3(size.x * 0.5, 1.65, size.z * 0.15);
  final hasLos = hasLineOfSight(
    house,
    'hall',
    centerEye,
    centerEye + Vec3(-100.0, 0, 0),
  );
  if (hasLos) {
    throw StateError('Line of sight must be false through solid room walls');
  }

  print('========================================================================');
  print('✓ PLAYABILITY & FLUIDITY SUITE PASSED (4/4 SUB-SYSTEMS)');
  print('========================================================================');
}
