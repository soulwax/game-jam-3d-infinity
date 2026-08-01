import 'dart:math' as math;

import '../config.dart';
import 'math3.dart';

final Vec3 _worldUp = Vec3(0, 1, 0);

class Camera {
  Vec3 eye;
  Vec3 fwd;
  Vec3 up;
  Vec3 right;
  double roll;

  double breathScale = 1;

  double _bt = 0;

  Camera()
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
