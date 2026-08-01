import 'dart:typed_data';

import '../config.dart';
import 'math3.dart';
import 'vertex_format.dart';

/// CPU-side builder for the renderer's static, interleaved quad mesh format.
class StaticMeshBuilder {
  static const int _floatsPerQuad = vertsPerQuad * vertexStride;
  Float32List _buffer = Float32List(_floatsPerQuad * 64);
  int _used = 0;

  void quad(
    Vec3 a,
    Vec3 b,
    Vec3 c,
    Vec3 d,
    int rgb, {
    bool glow = false,
    double alpha = 1,
    double ao = 1,
    double u = 0,
    double v = 0,
    double effect = 0,
    double uScale = 1,
    double vScale = 1,
  }) {
    if (_used + _floatsPerQuad > _buffer.length) {
      final grown = Float32List(_buffer.length * 2);
      grown.setRange(0, _used, _buffer);
      _buffer = grown;
    }
    final n = (b - a).cross(d - a).normalized;
    final r = ((rgb >> 16) & 0xff) / 255 * ao;
    final g = ((rgb >> 8) & 0xff) / 255 * ao;
    final bl = (rgb & 0xff) / 255 * ao;
    final emissive = glow ? glowScale - 1 : 0.0;
    _used = _put(_buffer, _used, a, n, r, g, bl, emissive, alpha, u, v, effect);
    _used = _put(
      _buffer,
      _used,
      b,
      n,
      r,
      g,
      bl,
      emissive,
      alpha,
      u + uScale,
      v,
      effect,
    );
    _used = _put(
      _buffer,
      _used,
      c,
      n,
      r,
      g,
      bl,
      emissive,
      alpha,
      u + uScale,
      v + vScale,
      effect,
    );
    _used = _put(_buffer, _used, a, n, r, g, bl, emissive, alpha, u, v, effect);
    _used = _put(
      _buffer,
      _used,
      c,
      n,
      r,
      g,
      bl,
      emissive,
      alpha,
      u + uScale,
      v + vScale,
      effect,
    );
    _used = _put(
      _buffer,
      _used,
      d,
      n,
      r,
      g,
      bl,
      emissive,
      alpha,
      u,
      v + vScale,
      effect,
    );
  }

  Float32List build() => _buffer.sublist(0, _used);

  static int _put(
    Float32List out,
    int at,
    Vec3 p,
    Vec3 n,
    double r,
    double g,
    double b,
    double glow,
    double alpha,
    double u,
    double v,
    double material,
  ) {
    out[at] = p.x;
    out[at + 1] = p.y;
    out[at + 2] = p.z;
    out[at + 3] = n.x;
    out[at + 4] = n.y;
    out[at + 5] = n.z;
    out[at + 6] = r;
    out[at + 7] = g;
    out[at + 8] = b;
    out[at + 9] = glow;
    out[at + 10] = alpha;
    out[at + 11] = u;
    out[at + 12] = v;
    out[at + 13] = material;
    return at + vertexStride;
  }
}
