import 'dart:math' as math;

import '../config.dart';
import 'math3.dart';

final Vec3 _worldUp = Vec3(0, 1, 0);

/// Camera lens values are presentation configuration, not gameplay state.
/// Profiles can be swapped without changing camera pose, focus, or movement.
final class CameraLens {
  final double fovYRadians;
  final double near;
  final double far;

  const CameraLens({
    required this.fovYRadians,
    required this.near,
    required this.far,
  });

  static const standard = CameraLens(
    fovYRadians: 1.0471975511965976,
    near: 0.1,
    far: 60.0,
  );
  static const wide = CameraLens(
    fovYRadians: 1.3089969389957472,
    near: 0.1,
    far: 60.0,
  );
  static const intimate = CameraLens(
    fovYRadians: 0.8726646259971648,
    near: 0.08,
    far: 45.0,
  );

  CameraLens withFovDegrees(double degrees) =>
      CameraLens(fovYRadians: degrees * math.pi / 180, near: near, far: far);
}

class Camera {
  Vec3 eye;
  Vec3 fwd;
  Vec3 up;
  Vec3 right;
  double roll;
  CameraLens lens;

  double breathScale = 1;

  double _bt = 0;

  Camera({this.lens = CameraLens.standard})
    : eye = Vec3(0, 0, 0),
      fwd = Vec3(0, 0, 1),
      up = Vec3(0, 1, 0),
      right = Vec3(1, 0, 0),
      roll = 0.0;

  static const double pitchLimit = math.pi / 2 - 0.01;

  void lookFrom(Vec3 pos, double yaw, double pitch) {
    final p = pitch < -pitchLimit
        ? -pitchLimit
        : (pitch > pitchLimit ? pitchLimit : pitch);
    final cosP = math.cos(p);
    fwd = Vec3(math.sin(yaw) * cosP, math.sin(p), math.cos(yaw) * cosP);

    // In right-handed forward-Z coordinate systems (+X right, +Y up, +Z forward):
    // world-up × forward is screen-right (+X).
    right = _worldUp.cross(fwd).normalized;
    up = fwd.cross(right).normalized;
    eye = pos;
  }

  void breathe(double dt) {
    _bt += dt;
    final a = breathAmplitude * breathScale;
    eye =
        eye +
        right * ((smoothNoise(_bt * breathRate, 0x51D) * 2 - 1) * a) +
        up * ((smoothNoise(_bt * breathRate, 0xB17) * 2 - 1) * a);
  }
}
