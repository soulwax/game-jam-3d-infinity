import 'package:quarantine/presentation/contact_shadows_ssdo.dart';
import 'package:quarantine/presentation/cascaded_shadow_maps.dart';
import 'package:quarantine/presentation/procedural_surface_weathering.dart';

void main() {
  print('Testing SSDO...');
  assert(SSDOEngine.validate());

  final ssdoSafe = SSDOEngine.evaluateSSDO(
    params: const SSDOParams(sampleCount: 0),
    viewDepthM: 5.0,
    surfaceNormal: (x: 0.0, y: 1.0, z: 0.0),
    dominantLightDir: (x: 0.0, y: 1.0, z: 0.0),
  );
  assert(ssdoSafe.directionalOcclusionFactor == 1.0);
  assert(ssdoSafe.contactShadowMask == 0.0);

  print('Testing CSM...');
  assert(CSMEngine.validate());

  final csmSafe = CSMEngine.evaluateCSM(
    params: const CSMParams(cascadeCount: 0),
    viewDepthM: 5.0,
    surfaceNormal: (x: 0.0, y: 1.0, z: 0.0),
    lightDir: (x: 0.0, y: 1.0, z: 0.0),
    alphaMask: 1.0,
  );
  assert(csmSafe.activeCascadeIndex == -1);
  assert(csmSafe.shadowFactor == 1.0);

  print('Testing Weathering...');
  assert(ProceduralWeatheringEngine.validate());

  final weathClean = ProceduralWeatheringEngine.evaluateSurface(
    params: const WeatheringParams(
      dayIndex: 21,
      roomTemperatureCelsius: 20.0,
      dewPointCelsius: 10.0,
      isFireplaceNearby: false,
      flueDistanceM: 5.0,
      isSurfaceCleaned: true,
    ),
  );
  assert(weathClean.dustOpacity == 0.0);
  assert(weathClean.condensationFactor == 0.0);
  assert(weathClean.sootDarkening == 0.0);

  print('All SSDO/CSM/weathering policy-object tests passed '
        '(policy objects only — no pixels asserted).');
}
