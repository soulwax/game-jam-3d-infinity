import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/sim/weather_physics.dart';

void main() {
  const snowWeather = WeatherDay(
    day: 1,
    rain: true,
    rainIntensity: 1,
    daylightHours: 10,
    outsideTemperatureCelsius: -6,
    precipitationKind: PrecipitationKind.snow,
  );
  final snapshot = WeatherPhysics.evaluate(
    const WeatherPhysicsInput(
      weather: snowWeather,
      roomTemperatureCelsius: -6,
      relativeHumidity: 0.8,
      shelterFactor: 0,
      insulationResistance: 1,
      internalHeatWatts: 0,
      thermalMassJoulesPerKelvin: 1000,
      surfaceAreaM2: 1,
      dtSeconds: 0,
    ),
  );
  final surface = WeatherSurfaceAccumulator();
  final deposited = surface.advance(
    weather: snapshot,
    surfaceTemperatureCelsius: -4,
    netHeatFluxWattsPerM2: 0,
    dtSeconds: 600,
  );
  _require(deposited.snowDepthM > 0, 'cold snow did not accumulate');
  _require(deposited.meltedDepthM == 0, 'cold snow melted without heat');

  final suppressed = surface.advance(
    weather: snapshot,
    surfaceTemperatureCelsius: -4,
    netHeatFluxWattsPerM2: 0,
    warmClearanceSuppression01: 1,
    dtSeconds: 600,
  );
  _require(
    suppressed.depositedDepthM == 0,
    'warm clearance did not suppress local snow deposition',
  );
  _require(
    suppressed.materialDissolution01 > 0,
    'warmth did not dissolve material state gradually',
  );
  final lingered = surface.advance(
    weather: snapshot,
    surfaceTemperatureCelsius: -4,
    netHeatFluxWattsPerM2: 0,
    dtSeconds: 30,
  );
  _require(
    lingered.materialDissolution01 > 0 &&
        lingered.materialDissolution01 < suppressed.materialDissolution01,
    'dissolved material did not linger and relax after warmth left',
  );

  final beforeMelt = surface.snowDepthM;
  final melted = surface.advance(
    weather: snapshot,
    surfaceTemperatureCelsius: 6,
    netHeatFluxWattsPerM2: 500,
    dtSeconds: 60,
  );
  _require(
    melted.meltedDepthM > 0 &&
        surface.snowDepthM < beforeMelt &&
        melted.waterFilmDepthM > 0,
    'positive heat did not convert snow into water film',
  );
  final filmBeforeDrying = surface.waterFilmDepthM;
  final drying = surface.advance(
    weather: snapshot,
    surfaceTemperatureCelsius: 6,
    netHeatFluxWattsPerM2: 0,
    relativeHumidity: 0.2,
    dtSeconds: 3600,
  );
  _require(
    drying.evaporatedDepthM > 0 && drying.waterFilmDepthM < filmBeforeDrying,
    'warm low-humidity surface did not evaporate water gradually',
  );

  final capped = WeatherSurfaceAccumulator();
  final capSnapshot = capped.advance(
    weather: snapshot,
    surfaceTemperatureCelsius: -4,
    netHeatFluxWattsPerM2: 0,
    dtSeconds: 100000,
    maxSnowDepthM: 0.01,
  );
  _require(capSnapshot.overflowDepthM > 0, 'snow cap did not report overflow');
  _require(capped.snowDepthM <= 0.01, 'snow depth exceeded authored cap');

  _throws(
    () => surface.advance(
      weather: snapshot,
      surfaceTemperatureCelsius: 0,
      netHeatFluxWattsPerM2: 0,
      dtSeconds: -1,
    ),
    'negative surface step must be rejected',
  );
  // Keep the test linked to the shared vector contract used by the physics
  // package; no renderer data is fabricated here.
  _require(Vec3(0, 0, 0).length == 0, 'vector contract changed');
  print('weather surfaces: snow mass, warm suppression, melt and cap pass');
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
  if (!threw) throw StateError(message);
}
