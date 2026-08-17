import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/sim/weather_physics.dart';
import 'package:quarantine/engine/math3.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void _near(
  double actual,
  double expected,
  String message, [
  double epsilon = 1e-9,
]) {
  if ((actual - expected).abs() > epsilon) {
    _fail('$message: expected $expected, got $actual');
  }
}

WeatherPhysicsInput _input({
  required WeatherDay weather,
  double room = 4,
  double humidity = 0.8,
  double shelter = 0,
  double insulation = 2,
  double internalHeat = 0,
  double dt = 60,
}) {
  return WeatherPhysicsInput(
    weather: weather,
    roomTemperatureCelsius: room,
    relativeHumidity: humidity,
    shelterFactor: shelter,
    insulationResistance: insulation,
    internalHeatWatts: internalHeat,
    thermalMassJoulesPerKelvin: 100000,
    surfaceAreaM2: 20,
    dtSeconds: dt,
  );
}

void main() {
  const snow = WeatherDay(
    day: 1,
    rain: true,
    rainIntensity: 0.8,
    daylightHours: 10,
    windSpeedMps: 12,
    windDirectionRadians: 1.25,
    outsideTemperatureCelsius: -4,
    precipitationKind: PrecipitationKind.snow,
  );
  final exposed = WeatherPhysics.evaluate(_input(weather: snow));
  final sheltered = WeatherPhysics.evaluate(_input(weather: snow, shelter: 1));
  _expect(
    exposed.precipitationKind == PrecipitationKind.snow,
    'snow phase is preserved',
  );
  _expect(exposed.terminalFallSpeedMps < 1, 'snow terminal speed is low');
  _expect(
    exposed.snowAccumulationRateMps > 0,
    'snow accumulates on exposed surfaces',
  );
  _expect(
    sheltered.effectiveWindSpeedMps < exposed.effectiveWindSpeedMps,
    'obstacles shield wind',
  );
  _expect(
    sheltered.precipitationMassFluxKgM2S < exposed.precipitationMassFluxKgM2S,
    'obstacles shield precipitation',
  );
  _near(
    exposed.windVelocityMps.length,
    exposed.effectiveWindSpeedMps,
    'wind vector preserves speed',
  );
  _near(
    exposed.windVelocityMps.y,
    0,
    'horizontal wind has no vertical component',
  );

  const hail = WeatherDay(
    day: 2,
    rain: true,
    rainIntensity: 0.7,
    daylightHours: 10,
    windSpeedMps: 4,
    outsideTemperatureCelsius: 2,
    precipitationKind: PrecipitationKind.hail,
  );
  final hailFacts = WeatherPhysics.evaluate(_input(weather: hail));
  _expect(
    hailFacts.terminalFallSpeedMps > 15,
    'hail has a high terminal speed',
  );
  _expect(
    hailFacts.impactEnergyFluxWattsPerM2 > exposed.impactEnergyFluxWattsPerM2,
    'hail carries more impact energy than snow',
  );

  final clear = WeatherPhysics.evaluate(
    _input(
      weather: const WeatherDay(
        day: 3,
        rain: false,
        rainIntensity: 0,
        daylightHours: 12,
        windSpeedMps: 2,
        outsideTemperatureCelsius: 8,
      ),
      room: 4,
      humidity: 1,
    ),
  );
  _expect(
    clear.precipitationKind == PrecipitationKind.none,
    'clear weather has no precipitation',
  );
  _expect(
    clear.condensationRisk,
    'saturated cold room reports condensation risk',
  );

  final insulated = WeatherPhysics.evaluate(
    _input(weather: snow, insulation: 20, room: 18),
  );
  final uninsulated = WeatherPhysics.evaluate(
    _input(weather: snow, insulation: 0.5, room: 18),
  );
  _expect(
    (insulated.nextRoomTemperatureCelsius - 18).abs() <
        (uninsulated.nextRoomTemperatureCelsius - 18).abs(),
    'insulation slows room heat exchange',
  );
  final heated = WeatherPhysics.evaluate(
    _input(weather: snow, insulation: 20, room: 18, internalHeat: 500),
  );
  _expect(
    heated.nextRoomTemperatureCelsius > insulated.nextRoomTemperatureCelsius,
    'internal heat raises room temperature',
  );
  final longStep = WeatherPhysics.evaluate(
    _input(weather: snow, insulation: 0.5, room: 18, dt: 1000),
  );
  _expect(
    longStep.nextRoomTemperatureCelsius > snow.outsideTemperatureCelsius &&
        longStep.nextRoomTemperatureCelsius < 18,
    'long thermal steps approach equilibrium without overshoot',
  );

  var rejected = false;
  try {
    WeatherPhysics.evaluate(_input(weather: snow, shelter: 1.1));
  } catch (_) {
    rejected = true;
  }
  _expect(rejected, 'invalid shelter factors reject');

  final repeat = WeatherPhysics.evaluate(_input(weather: snow));
  _expect(
    repeat.toJson().toString() == exposed.toJson().toString(),
    'evaluation is deterministic',
  );
  _expect(exposed.windVelocityMps.x.isFinite, 'wind vector facts are finite');
  _expect(
    exposed.particleProfile.alignToVelocity == false,
    'snow profile keeps flakes billboarded',
  );
  _expect(
    WeatherParticleProfile.forKind(
          PrecipitationKind.hail,
        ).terminalFallSpeedMps >
        WeatherParticleProfile.forKind(
          PrecipitationKind.snow,
        ).terminalFallSpeedMps,
    'hail profile falls faster than snow',
  );
  final warm = WeatherPhysics.evaluateWarmClearance(
    samplePosition: Vec3(0, 0, 0.5),
    ambientTemperatureCelsius: -2,
    dewPointCelsius: 1,
    sources: [
      WarmObjectSource(
        position: Vec3(0, 0, 0),
        radiusM: 0.25,
        surfaceTemperatureCelsius: 30,
        heatOutputWatts: 20,
      ),
    ],
  );
  _expect(
    warm.temperatureIncreaseCelsius > 0,
    'warm source raises local temperature',
  );
  _expect(warm.clearanceRadiusM > 0, 'warm source has finite clearance radius');
  _expect(warm.frostFree, 'warm clearance can suppress frost/condensation');
  final coldFar = WeatherPhysics.evaluateWarmClearance(
    samplePosition: Vec3(0, 0, 20),
    ambientTemperatureCelsius: -2,
    dewPointCelsius: 1,
    sources: [
      WarmObjectSource(
        position: Vec3(0, 0, 0),
        radiusM: 0.25,
        surfaceTemperatureCelsius: 30,
        heatOutputWatts: 20,
      ),
    ],
  );
  _expect(
    coldFar.temperatureIncreaseCelsius < warm.temperatureIncreaseCelsius,
    'conductive warm influence decays with distance',
  );
  print(
    'weather physics: snow, hail, wind shielding, insulation and condensation pass',
  );
}
