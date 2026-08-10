import 'package:quarantine/engine/math3.dart';

/// Subsurface scattering (SSS) parameters for organic/translucent materials in Pixeldart renderer.
class SubsurfaceScatteringParams {
  final bool enabled;
  final Vec3 scatterColor;
  final double scatterRadius;
  final double translucencyPower;
  final double distortion;

  static final Vec3 defaultScatterColor = Vec3(0.8, 0.3, 0.2);

  const SubsurfaceScatteringParams({
    this.enabled = true,
    Vec3? scatterColor,
    this.scatterRadius = 0.35,
    this.translucencyPower = 2.0,
    this.distortion = 0.1,
  }) : scatterColor = scatterColor ?? const _FallbackScatterColor();

  Map<String, dynamic> toJson() => {
        'enabled': enabled,
        'scatterColor': {'x': scatterColor.x, 'y': scatterColor.y, 'z': scatterColor.z},
        'scatterRadius': scatterRadius,
        'translucencyPower': translucencyPower,
        'distortion': distortion,
      };
}

class _FallbackScatterColor implements Vec3 {
  const _FallbackScatterColor();

  @override
  double get x => 0.8;

  @override
  set x(double val) {}

  @override
  double get y => 0.3;

  @override
  set y(double val) {}

  @override
  double get z => 0.2;

  @override
  set z(double val) {}

  @override
  Vec3 operator +(Vec3 o) => Vec3(x + o.x, y + o.y, z + o.z);

  @override
  Vec3 operator -(Vec3 o) => Vec3(x - o.x, y - o.y, z - o.z);

  @override
  Vec3 operator *(double s) => Vec3(x * s, y * s, z * s);

  @override
  double dot(Vec3 o) => x * o.x + y * o.y + z * o.z;

  @override
  Vec3 cross(Vec3 o) => Vec3(y * o.z - z * o.y, z * o.x - x * o.z, x * o.y - y * o.x);

  @override
  double get length => 0.8774964387392123;

  @override
  Vec3 get normalized => Vec3(x / length, y / length, z / length);
}
