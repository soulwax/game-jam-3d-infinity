import 'dart:math' as math;

import 'package:quarantine/engine/mat4.dart';
import 'package:quarantine/engine/vec3.dart';

void main() {
  _nearVec(Mat4.identity().transformPoint(Vec3(2, -3, 4)), Vec3(2, -3, 4));
  _nearVec(
    Mat4.translation(3, 4, 5).transformPoint(Vec3(1, 2, 3)),
    Vec3(4, 6, 8),
  );
  _nearVec(
    Mat4.rotationZ(math.pi / 2).transformDir(Vec3(1, 0, 0)),
    Vec3(0, 1, 0),
  );
  _nearVec(Mat4.uniformScale(3).transformDir(Vec3(1, -2, 4)), Vec3(3, -6, 12));

  final model = Mat4.translation(3, 0, 0) * Mat4.rotationZ(math.pi / 2);
  _nearVec(model.transformPoint(Vec3(2, 0, 0)), Vec3(3, 2, 0));
  _nearVec(model.transformDir(Vec3(2, 0, 0)), Vec3(0, 2, 0));

  // GLSL's `mat4 * vec4` reads the same column-major values as transformPoint.
  final cpu = model.transformPoint(Vec3(1, 2, 3));
  final shaderFixture = _shaderMultiply(model.m, 1, 2, 3, 1);
  _nearVec(cpu, shaderFixture);
  print('Mat4 fixtures passed.');
}

Vec3 _shaderMultiply(List<double> m, double x, double y, double z, double w) =>
    Vec3(
      m[0] * x + m[4] * y + m[8] * z + m[12] * w,
      m[1] * x + m[5] * y + m[9] * z + m[13] * w,
      m[2] * x + m[6] * y + m[10] * z + m[14] * w,
    );

void _nearVec(Vec3 actual, Vec3 expected) {
  const epsilon = 1e-5;
  if ((actual.x - expected.x).abs() > epsilon ||
      (actual.y - expected.y).abs() > epsilon ||
      (actual.z - expected.z).abs() > epsilon) {
    throw StateError('Expected $expected, got $actual.');
  }
}
