import 'dart:math' as math;
import '../engine/math3.dart';
import '../config.dart';

Vec3 sunDirection(double sunAngle) {
  if (sunAngle == 0.0) return Vec3(0.0, 0.0, 1.0);

  const double maxElevation = 70.0 * math.pi / 180.0;
  const double horizonOffset = 30.0;
  final elevation = maxElevation * math.sin(math.pi * sunAngle);
  final azimuth = (horizonOffset + (1.0 - sunAngle) * 180.0) * math.pi / 180.0;

  final y = math.sin(elevation);
  final xy = math.cos(elevation);
  final x = xy * math.cos(azimuth);
  final z = xy * math.sin(azimuth);

  return Vec3(x, y, z).normalized;
}

int sunColor(double sunAngle) {
  if (sunAngle == 0.0) {
    return sunColorNight;
  }

  final r0 = (sunColorNight >> 16) & 0xFF;
  final g0 = (sunColorNight >> 8) & 0xFF;
  final b0 = sunColorNight & 0xFF;

  final r1 = (sunColorNoon >> 16) & 0xFF;
  final g1 = (sunColorNoon >> 8) & 0xFF;
  final b1 = sunColorNoon & 0xFF;

  final r2 = (sunColorDusk >> 16) & 0xFF;
  final g2 = (sunColorDusk >> 8) & 0xFF;
  final b2 = sunColorDusk & 0xFF;

  late int r, g, b;

  if (sunAngle < 0.5) {
    final t = sunAngle * 2.0;
    r = (r0 + (r1 - r0) * t).toInt();
    g = (g0 + (g1 - g0) * t).toInt();
    b = (b0 + (b1 - b0) * t).toInt();
  } else {
    final t = (sunAngle - 0.5) * 2.0;
    r = (r1 + (r2 - r1) * t).toInt();
    g = (g1 + (g2 - g1) * t).toInt();
    b = (b1 + (b2 - b1) * t).toInt();
  }

  return (r << 16) | (g << 8) | b;
}
