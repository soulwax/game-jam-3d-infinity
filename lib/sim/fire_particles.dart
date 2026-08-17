import '../engine/math3.dart';

bool _finiteVec(Vec3 value) =>
    value.x.isFinite && value.y.isFinite && value.z.isFinite;

/// Host-owned thermal/fuel facts for one flame source. Pixeldart receives the
/// resulting particle fields but never decides whether a fixture is burning.
final class FireEmitter {
  final String id;
  final Vec3 position;
  final double heatOutputWatts;
  final double oxygen01;
  final double fuelMoisture01;
  final Vec3 windVelocityMps;

  const FireEmitter({
    required this.id,
    required this.position,
    required this.heatOutputWatts,
    this.oxygen01 = 0.9,
    this.fuelMoisture01 = 0.08,
    this.windVelocityMps = Vec3.zero,
  });

  void validate() {
    if (id.isEmpty ||
        position.x.isNaN || position.y.isNaN || position.z.isNaN ||
        !heatOutputWatts.isFinite || heatOutputWatts <= 0 ||
        !oxygen01.isFinite || oxygen01 < 0 || oxygen01 > 1 ||
        !fuelMoisture01.isFinite || fuelMoisture01 < 0 || fuelMoisture01 > 1 ||
        !_finiteVec(position) ||
        !_finiteVec(windVelocityMps)) {
      throw ArgumentError('invalid fire emitter $id');
    }
  }

  FireEmissionSnapshot resolve() {
    validate();
    final fuel = (heatOutputWatts / 80.0).clamp(0.0, 2.0).toDouble();
    final oxygen = oxygen01;
    final flameIntensity = (fuel * (0.55 + oxygen * 0.45)).clamp(0.0, 1.0);
    // Moisture and oxygen starvation favour cooler white vapour; incomplete
    // combustion favours a smaller, darker soot plume.
    final whiteVapourDensity = (0.10 + fuelMoisture01 * 0.72 +
            (1.0 - oxygen) * 0.24).clamp(0.0, 1.0);
    final blackSootDensity = (0.035 + (1.0 - oxygen) * 0.42 +
            fuelMoisture01 * 0.08).clamp(0.0, 0.65);
    final buoyancyMps = (0.35 + flameIntensity * 1.1 -
            fuelMoisture01 * 0.18).clamp(0.15, 1.8);
    return FireEmissionSnapshot(
      flameIntensity: flameIntensity,
      whiteVapourDensity: whiteVapourDensity,
      blackSootDensity: blackSootDensity,
      buoyancyMps: buoyancyMps,
      temperatureCelsius: 650 + 850 * flameIntensity,
    );
  }
}

final class FireEmissionSnapshot {
  final double flameIntensity;
  final double whiteVapourDensity;
  final double blackSootDensity;
  final double buoyancyMps;
  final double temperatureCelsius;

  const FireEmissionSnapshot({
    required this.flameIntensity,
    required this.whiteVapourDensity,
    required this.blackSootDensity,
    required this.buoyancyMps,
    required this.temperatureCelsius,
  });
}
