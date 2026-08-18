import 'dart:math' as math;

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

  FireEmitter({
    required this.id,
    required this.position,
    required this.heatOutputWatts,
    this.oxygen01 = 0.9,
    this.fuelMoisture01 = 0.08,
    Vec3? windVelocityMps,
  }) : windVelocityMps = windVelocityMps ?? Vec3(0, 0, 0);

  void validate() {
    if (id.isEmpty ||
        position.x.isNaN ||
        position.y.isNaN ||
        position.z.isNaN ||
        !heatOutputWatts.isFinite ||
        heatOutputWatts <= 0 ||
        !oxygen01.isFinite ||
        oxygen01 < 0 ||
        oxygen01 > 1 ||
        !fuelMoisture01.isFinite ||
        fuelMoisture01 < 0 ||
        fuelMoisture01 > 1 ||
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
    final whiteVapourDensity =
        (0.10 + fuelMoisture01 * 0.72 + (1.0 - oxygen) * 0.24).clamp(0.0, 1.0);
    final blackSootDensity =
        (0.035 + (1.0 - oxygen) * 0.42 + fuelMoisture01 * 0.08).clamp(
          0.0,
          0.65,
        );
    final windSpeedMps = math.sqrt(
      windVelocityMps.x * windVelocityMps.x +
          windVelocityMps.y * windVelocityMps.y +
          windVelocityMps.z * windVelocityMps.z,
    );
    // Moist plumes condense into pale vapour before dispersing. Soot is a
    // finer, warmer aerosol and lingers longer when oxygen is scarce. Wind
    // shortens both residence times rather than changing the emitted mass.
    final whiteVapourLifetimeSeconds =
        ((1.8 + fuelMoisture01 * 2.4 + (1.0 - oxygen) * 0.8) /
                (1.0 + windSpeedMps * 0.12))
            .clamp(1.0, 4.8)
            .toDouble();
    final blackSootLifetimeSeconds =
        ((3.2 + (1.0 - oxygen) * 3.2 + fuelMoisture01 * 0.7) /
                (1.0 + windSpeedMps * 0.08))
            .clamp(2.0, 7.2)
            .toDouble();
    final smokeCoolingRateCelsiusPerSecond =
        (85.0 + windSpeedMps * 28.0 + oxygen * 20.0).clamp(60.0, 220.0);
    final buoyancyMps = (0.35 + flameIntensity * 1.1 - fuelMoisture01 * 0.18)
        .clamp(0.15, 1.8);
    final snapshot = FireEmissionSnapshot(
      flameIntensity: flameIntensity,
      whiteVapourDensity: whiteVapourDensity,
      blackSootDensity: blackSootDensity,
      buoyancyMps: buoyancyMps,
      temperatureCelsius: 650 + 850 * flameIntensity,
      whiteVapourLifetimeSeconds: whiteVapourLifetimeSeconds,
      blackSootLifetimeSeconds: blackSootLifetimeSeconds,
      smokeCoolingRateCelsiusPerSecond: smokeCoolingRateCelsiusPerSecond,
    );
    snapshot.validate();
    return snapshot;
  }
}

final class FireEmissionSnapshot {
  final double flameIntensity;
  final double whiteVapourDensity;
  final double blackSootDensity;
  final double buoyancyMps;
  final double temperatureCelsius;
  final double whiteVapourLifetimeSeconds;
  final double blackSootLifetimeSeconds;
  final double smokeCoolingRateCelsiusPerSecond;

  const FireEmissionSnapshot({
    required this.flameIntensity,
    required this.whiteVapourDensity,
    required this.blackSootDensity,
    required this.buoyancyMps,
    required this.temperatureCelsius,
    this.whiteVapourLifetimeSeconds = 2.8,
    this.blackSootLifetimeSeconds = 4.4,
    this.smokeCoolingRateCelsiusPerSecond = 100.0,
  });

  void validate() {
    if (!flameIntensity.isFinite ||
        flameIntensity < 0 ||
        flameIntensity > 1 ||
        !whiteVapourDensity.isFinite ||
        whiteVapourDensity < 0 ||
        whiteVapourDensity > 1 ||
        !blackSootDensity.isFinite ||
        blackSootDensity < 0 ||
        blackSootDensity > 1 ||
        !buoyancyMps.isFinite ||
        buoyancyMps < 0 ||
        !temperatureCelsius.isFinite ||
        temperatureCelsius <= 0 ||
        !whiteVapourLifetimeSeconds.isFinite ||
        whiteVapourLifetimeSeconds < 0 ||
        !blackSootLifetimeSeconds.isFinite ||
        blackSootLifetimeSeconds < 0 ||
        !smokeCoolingRateCelsiusPerSecond.isFinite ||
        smokeCoolingRateCelsiusPerSecond <= 0) {
      throw ArgumentError('invalid fire emission snapshot');
    }
  }
}
