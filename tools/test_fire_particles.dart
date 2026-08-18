import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/sim/fire_particles.dart';

void main() {
  final flame = FireEmitter(
    id: 'mantle',
    position: Vec3(1, 2, 3),
    heatOutputWatts: 80,
    oxygen01: 0.9,
    fuelMoisture01: 0.08,
  );
  final clean = flame.resolve();
  clean.validate();
  _require(clean.flameIntensity > 0.5, 'healthy flame lost intensity');
  _require(
    clean.blackSootDensity < 0.2,
    'oxygenated flame makes excessive soot',
  );
  _require(clean.temperatureCelsius > 900, 'flame temperature is not hot');

  final starved = FireEmitter(
    id: 'starved',
    position: Vec3(0, 0, 0),
    heatOutputWatts: 80,
    oxygen01: 0.1,
    fuelMoisture01: 0.4,
  );
  final dirty = starved.resolve();
  dirty.validate();
  _require(
    dirty.blackSootDensity > clean.blackSootDensity,
    'oxygen starvation must increase soot',
  );
  _require(
    dirty.whiteVapourDensity > clean.whiteVapourDensity,
    'moisture/starvation must increase white vapour',
  );
  _require(
    dirty.whiteVapourLifetimeSeconds > clean.whiteVapourLifetimeSeconds,
    'moisture/starvation must keep pale vapour suspended longer',
  );
  _require(
    dirty.blackSootLifetimeSeconds > clean.blackSootLifetimeSeconds,
    'oxygen starvation must keep soot suspended longer',
  );
  _require(
    dirty.smokeCoolingRateCelsiusPerSecond.isFinite &&
        clean.smokeCoolingRateCelsiusPerSecond.isFinite &&
        dirty.smokeCoolingRateCelsiusPerSecond > 0,
    'smoke cooling rate must remain finite under changed fuel state',
  );
  _throws(
    () => const FireEmissionSnapshot(
      flameIntensity: 1.1,
      whiteVapourDensity: 0.2,
      blackSootDensity: 0.1,
      buoyancyMps: 1,
      temperatureCelsius: 900,
      whiteVapourLifetimeSeconds: 2,
      blackSootLifetimeSeconds: 4,
      smokeCoolingRateCelsiusPerSecond: 100,
    ).validate(),
    'out-of-range flame intensity must be rejected',
  );
  print(
    'fire particles: flame heat, buoyancy, white vapour and soot response pass',
  );
}

void _throws(void Function() action, String message) {
  try {
    action();
  } catch (_) {
    return;
  }
  throw StateError(message);
}

void _require(bool condition, String message) {
  if (!condition) throw StateError(message);
}
