import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/sim/weather_physics.dart';

void main() {
  final floor = WeatherCollisionBox.fromCenter(
    id: 'room-floor',
    center: Vec3(0, 0.025, 0),
    halfExtents: Vec3(2, 0.025, 2),
    surfaceTemperatureCelsius: -4,
  );
  floor.validate();
  final snow = WeatherImpactResolver.evaluate(
    kind: PrecipitationKind.snow,
    startPosition: Vec3(0, 1, 0),
    endPosition: Vec3(0, -0.1, 0),
    velocityMps: Vec3(0, -0.9, 0),
    particleRadiusM: 0.01,
    particleMassKg: 0.00001,
    obstacles: [floor],
  );
  _require(snow.hit, 'snow did not hit the authored floor');
  _require(
    snow.response == WeatherImpactResponse.settle && snow.depositedMassKg > 0,
    'cold snow did not settle with mass',
  );

  final warmFloor = WeatherCollisionBox(
    id: 'heated-sill',
    min: Vec3(-1, 0, -1),
    max: Vec3(1, 0.05, 1),
    surfaceTemperatureCelsius: 12,
  );
  final melted = WeatherImpactResolver.evaluate(
    kind: PrecipitationKind.snow,
    startPosition: Vec3(0, 1, 0),
    endPosition: Vec3(0, -0.1, 0),
    velocityMps: Vec3(0, -0.9, 0),
    particleRadiusM: 0.01,
    particleMassKg: 0.00001,
    obstacles: [warmFloor],
  );
  _require(
    melted.response == WeatherImpactResponse.melt &&
        melted.depositedMassKg == 0,
    'warm snow surface did not melt the deposit',
  );

  final hail = WeatherImpactResolver.evaluate(
    kind: PrecipitationKind.hail,
    startPosition: Vec3(0, 1, 0),
    endPosition: Vec3(0, -0.1, 0),
    velocityMps: Vec3(0, -18, 0),
    particleRadiusM: 0.02,
    particleMassKg: 0.001,
    obstacles: [floor],
  );
  _require(
    hail.response == WeatherImpactResponse.rebound &&
        hail.outgoingVelocityMps.y > 0 &&
        hail.kineticEnergyJoules > 0,
    'hail did not rebound with bounded impact energy',
  );

  final rain = WeatherImpactResolver.evaluate(
    kind: PrecipitationKind.rain,
    startPosition: Vec3(5, 1, 0),
    endPosition: Vec3(5, -1, 0),
    velocityMps: Vec3(0, -8.8, 0),
    particleRadiusM: 0.01,
    particleMassKg: 0.00005,
    obstacles: [floor],
  );
  _require(!rain.hit, 'rain crossed a disjoint obstacle');
  _throws(
    () => WeatherCollisionBox(
      id: 'bad',
      min: Vec3(1, 0, 0),
      max: Vec3(0, 0, 0),
      surfaceTemperatureCelsius: 0,
    ).validate(),
    'invalid collision box must be rejected',
  );
  _throws(
    () => WeatherCollisionBox.fromCenter(
      id: 'bad-extents',
      center: Vec3(0, 0, 0),
      halfExtents: Vec3(-1, 0, 0),
      surfaceTemperatureCelsius: 0,
    ),
    'negative half extents must be rejected',
  );
  print('weather impacts: swept snow, melt, hail rebound and miss pass');
}

void _require(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void _throws(void Function() action, String message) {
  var threw = false;
  try {
    action();
  } catch (_) {
    threw = true;
  }
  if (!threw) {
    throw StateError(message);
  }
}
