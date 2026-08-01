export 'mat4.dart';
export 'vec3.dart';

double hashNoise(int i, int seed) {
  var h = (i * 0x9E3779B9) ^ seed;
  h &= 0xFFFFFFFF;
  h = (h ^ (h >> 15)) & 0xFFFFFFFF;
  h = (h * 0x85EBCA6B) & 0xFFFFFFFF;
  h = (h ^ (h >> 13)) & 0xFFFFFFFF;
  h = (h * 0xC2B2AE35) & 0xFFFFFFFF;
  h = (h ^ (h >> 16)) & 0xFFFFFFFF;
  return h / 4294967296.0;
}

double smoothNoise(double t, int seed) {
  final i0 = t.floor();
  final f = t - i0;
  final a = hashNoise(i0, seed);
  final b = hashNoise(i0 + 1, seed);
  final w = smoothstep(f);
  return a + (b - a) * w;
}

double smoothstep(double t) {
  final c = t.clamp(0.0, 1.0);
  return c * c * (3 - 2 * c);
}

int hashCombine(int seed, int value) {
  var h = (seed ^ (value * 0x9E3779B9)) & 0xFFFFFFFF;
  h = (h ^ (h >> 15)) & 0xFFFFFFFF;
  h = (h * 0x85EBCA6B) & 0xFFFFFFFF;
  h = (h ^ (h >> 13)) & 0xFFFFFFFF;
  h = (h * 0xC2B2AE35) & 0xFFFFFFFF;
  return (h ^ (h >> 16)) & 0xFFFFFFFF;
}
