import 'dart:math' as math;
import 'dart:typed_data';

import 'vec3.dart';

/// Column-major matrix for WebGL's column-vector convention.
class Mat4 {
  final Float32List m = Float32List(16);

  Mat4();

  Mat4.identity() {
    m[0] = 1;
    m[5] = 1;
    m[10] = 1;
    m[15] = 1;
  }

  Mat4.translation(double x, double y, double z) {
    m[0] = 1;
    m[5] = 1;
    m[10] = 1;
    m[15] = 1;
    m[12] = x;
    m[13] = y;
    m[14] = z;
  }

  Mat4.rotationX(double angle) {
    final c = math.cos(angle), s = math.sin(angle);
    m[0] = 1;
    m[5] = c;
    m[6] = s;
    m[9] = -s;
    m[10] = c;
    m[15] = 1;
  }

  Mat4.rotationY(double angle) {
    final c = math.cos(angle), s = math.sin(angle);
    m[0] = c;
    m[2] = -s;
    m[5] = 1;
    m[8] = s;
    m[10] = c;
    m[15] = 1;
  }

  Mat4.rotationZ(double angle) {
    final c = math.cos(angle), s = math.sin(angle);
    m[0] = c;
    m[1] = s;
    m[4] = -s;
    m[5] = c;
    m[10] = 1;
    m[15] = 1;
  }

  Mat4.uniformScale(double scale) {
    m[0] = scale;
    m[5] = scale;
    m[10] = scale;
    m[15] = 1;
  }

  /// Returns [this] × [other], as consumed by `matrix * columnVector` GLSL.
  Mat4 operator *(Mat4 other) {
    final result = Mat4();
    for (var column = 0; column < 4; column++) {
      for (var row = 0; row < 4; row++) {
        var sum = 0.0;
        for (var k = 0; k < 4; k++) {
          sum += m[k * 4 + row] * other.m[column * 4 + k];
        }
        result.m[column * 4 + row] = sum;
      }
    }
    return result;
  }

  Vec3 transformPoint(Vec3 p) {
    final x = p.x * m[0] + p.y * m[4] + p.z * m[8] + m[12];
    final y = p.x * m[1] + p.y * m[5] + p.z * m[9] + m[13];
    final z = p.x * m[2] + p.y * m[6] + p.z * m[10] + m[14];
    final w = p.x * m[3] + p.y * m[7] + p.z * m[11] + m[15];
    return w == 0 || w == 1 ? Vec3(x, y, z) : Vec3(x / w, y / w, z / w);
  }

  Vec3 transformDir(Vec3 d) => Vec3(
    d.x * m[0] + d.y * m[4] + d.z * m[8],
    d.x * m[1] + d.y * m[5] + d.z * m[9],
    d.x * m[2] + d.y * m[6] + d.z * m[10],
  );
}
