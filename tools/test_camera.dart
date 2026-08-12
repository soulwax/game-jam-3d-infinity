import 'dart:math' as math;

import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';

Never _fail(String message) => throw StateError(message);

/// Mirrors the input-to-world transform in web/main.dart's `_update`. Kept in
/// sync by hand since that function lives outside the package's public API.
Vec3 _worldMoveDir(Vec3 moveDir, double yaw) {
  return Vec3(
    moveDir.x * math.cos(yaw) + moveDir.z * math.sin(yaw),
    0,
    -moveDir.x * math.sin(yaw) + moveDir.z * math.cos(yaw),
  ).normalized;
}

void main() {
  final camera = Camera();
  if (camera.lens != CameraLens.standard) {
    _fail('camera must default to the standard lens profile');
  }
  final wide = Camera(lens: CameraLens.wide);
  if (wide.lens.fovYRadians <= camera.lens.fovYRadians ||
      wide.lens.far != camera.lens.far) {
    _fail('camera lens profiles must vary projection without changing reach');
  }
  final custom = CameraLens.standard.withFovDegrees(72);
  if ((custom.fovYRadians - 72 * math.pi / 180).abs() > 1e-12) {
    _fail('camera FOV degree override must be deterministic');
  }
  final simulationEye = Vec3(5.5, 1.65, 3.5);

  for (final yaw in [0.0, 0.7, -1.3, math.pi / 2, math.pi, 2.4]) {
    camera.lookFrom(simulationEye, yaw, 0);

    final forwardMove = _worldMoveDir(Vec3(0, 0, 1), yaw);
    final expectedForward = Vec3(camera.fwd.x, 0, camera.fwd.z).normalized;
    if ((forwardMove - expectedForward).length > 1e-9) {
      _fail(
        'W must move exactly toward where the camera looks at yaw=$yaw '
        '(got $forwardMove, expected $expectedForward)',
      );
    }

    final rightMove = _worldMoveDir(Vec3(1, 0, 0), yaw);
    final expectedRight = Vec3(camera.right.x, 0, camera.right.z).normalized;
    if ((rightMove - expectedRight).length > 1e-9) {
      _fail(
        'D must strafe exactly along the camera right vector at yaw=$yaw '
        '(got $rightMove, expected $expectedRight)',
      );
    }
  }

  camera.lookFrom(simulationEye, 0, 0);
  if (camera.right.x <= 0 || camera.right.z.abs() > 1e-9) {
    _fail(
      'yaw-zero right vector must be screen-right in world +X, got ${camera.right}',
    );
  }
  if (camera.eye.x != simulationEye.x ||
      camera.eye.y != simulationEye.y ||
      camera.eye.z != simulationEye.z) {
    _fail('lookFrom must not apply cosmetic breathing to simulation position');
  }

  camera.breathe(1 / 60);
  final displacement = (camera.eye - simulationEye).length;
  if (!displacement.isFinite || displacement > 0.04) {
    _fail('breathing displacement must remain finite and centimetre scale');
  }

  camera.lookFrom(simulationEye, 0, 0);
  if (camera.eye.x != simulationEye.x ||
      camera.eye.y != simulationEye.y ||
      camera.eye.z != simulationEye.z) {
    _fail('a new simulation pose must reset cosmetic camera displacement');
  }

  print(
    'camera breathing is single-pass and detached from simulation position',
  );
}
