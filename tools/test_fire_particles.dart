import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/sim/fire_particles.dart';

void main() {
  const flame = FireEmitter(
    id: 'mantle',
    position: Vec3(1, 2, 3),
    heatOutputWatts: 80,
    oxygen01: 0.9,
    fuelMoisture01: 0.08,
  );
  final clean = flame.resolve();
  _require(clean.flameIntensity > 0.5, 'healthy flame lost intensity');
  _require(clean.blackSootDensity < 0.2, 'oxygenated flame makes excessive soot');
  _require(clean.temperatureCelsius > 900, 'flame temperature is not hot');

  const starved = FireEmitter(
    id: 'starved',
    position: Vec3.zero,
    heatOutputWatts: 80,
    oxygen01: 0.1,
    fuelMoisture01: 0.4,
  );
  final dirty = starved.resolve();
  _require(dirty.blackSootDensity > clean.blackSootDensity,
      'oxygen starvation must increase soot');
  _require(dirty.whiteVapourDensity > clean.whiteVapourDensity,
      'moisture/starvation must increase white vapour');
  print('fire particles: flame heat, buoyancy, white vapour and soot response pass');
}

void _require(bool condition, String message) {
  if (!condition) throw StateError(message);
}

