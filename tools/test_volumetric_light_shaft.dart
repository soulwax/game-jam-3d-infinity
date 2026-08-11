import 'package:quarantine/presentation/volumetric_light_shaft.dart';
import 'package:quarantine/presentation/day_night_atmosphere.dart';

void main() {
  print('Running Volumetric Light Shaft tests...');

  // Create dummy atmosphere
  const atmosphere = DayNightAtmosphereParams(
    phase: TimeOfDayPhase.noon,
    hour: 12.0,
    sunElevationDegrees: 60.0,
    sunAzimuthDegrees: 180.0,
    sunDirection: (x: 0.0, y: 1.0, z: 0.0),
    moonDirection: (x: 0.0, y: 0.0, z: -1.0),
    sunColor: (r: 1.0, g: 1.0, b: 1.0),
    moonColor: (r: 0.0, g: 0.0, b: 0.0),
    skyAmbientColor: (r: 0.5, g: 0.5, b: 0.5),
    horizonColor: (r: 0.5, g: 0.5, b: 0.5),
    fogColor: (r: 0.5, g: 0.5, b: 0.5),
    directionalIntensity: 1.0,
    ambientIntensity: 0.5,
    windowLightLeakFactor: 1.0,
    windowSurfaceWetness: 0.0,
  );

  bool allPassed = true;

  void expect(bool condition, String message) {
    if (condition) {
      print('PASS: $message');
    } else {
      print('FAIL: $message');
      allPassed = false;
    }
  }

  // 1. Test all 8 rooms produce valid (finite, non-negative) shaft results
  final rooms = PerRoomFogManifest.densities.keys.toList();
  expect(rooms.length == 8, '8 rooms found in manifest');

  for (final room in rooms) {
    final result = VolumetricLightShaftEngine.evaluateShaft(
      atmosphere: atmosphere,
      roomId: room,
      qualitySamples: 6,
      reducedEffects: false,
      shutterOpen: true,
    );
    expect(
      result.shaftIntensity >= 0 && result.shaftIntensity.isFinite &&
      result.fogOpacity >= 0 && result.fogOpacity.isFinite,
      'Room $room produces valid finite non-negative results',
    );
  }

  // 2. Test Safe profile returns zero samples and zero intensity
  final safeResult = VolumetricLightShaftEngine.evaluateShaft(
    atmosphere: atmosphere,
    roomId: 'hall',
    qualitySamples: 0,
    reducedEffects: false,
    shutterOpen: true,
  );
  expect(
    safeResult.activeSamples == 0 && safeResult.shaftIntensity == 0.0,
    'Safe profile (0 samples) returns 0 active samples and 0 intensity',
  );

  // 3. Test reduced-effects returns zero contribution
  final reducedResult = VolumetricLightShaftEngine.evaluateShaft(
    atmosphere: atmosphere,
    roomId: 'hall',
    qualitySamples: 12,
    reducedEffects: true,
    shutterOpen: true,
  );
  expect(
    reducedResult.activeSamples == 0 && reducedResult.shaftIntensity == 0.0,
    'Reduced effects returns zero contribution',
  );

  // 4. Test closed shutter reduces shaft intensity to <= 15% of open
  final openResult = VolumetricLightShaftEngine.evaluateShaft(
    atmosphere: atmosphere,
    roomId: 'hall',
    qualitySamples: 12,
    reducedEffects: false,
    shutterOpen: true,
  );
  final closedResult = VolumetricLightShaftEngine.evaluateShaft(
    atmosphere: atmosphere,
    roomId: 'hall',
    qualitySamples: 12,
    reducedEffects: false,
    shutterOpen: false,
  );
  expect(
    closedResult.shaftIntensity <= openResult.shaftIntensity * 0.150001 && closedResult.shaftIntensity > 0,
    'Closed shutter reduces shaft intensity to <= 15% of open',
  );

  // 5. Test fog density ordering
  final densities = PerRoomFogManifest.densities;
  expect(
    densities['bathroom']! > densities['cellar']! &&
    densities['cellar']! > densities['living-room']! &&
    densities['living-room']! > densities['kitchen']! &&
    densities['kitchen']! > densities['hall']! &&
    densities['hall']! > densities['bedroom']! &&
    densities['bedroom']! > densities['landing']! &&
    densities['landing']! > densities['spare-room']!,
    'Fog density ordering matches requirements: bathroom > cellar > living-room > kitchen > hall > bedroom > landing > spare-room',
  );

  // Test engine validation
  expect(VolumetricLightShaftEngine.validate(), 'Engine validate() passes');

  if (allPassed) {
    print('All tests passed successfully.');
  } else {
    print('Some tests failed.');
  }
}
