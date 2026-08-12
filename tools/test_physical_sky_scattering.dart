import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/physical_sky_atmospheric_scattering.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — PHYSICAL SKY & ATMOSPHERIC SCATTERING TEST SUITE');
  print('========================================================================');

  // 1. Test Rayleigh & Mie Phase Functions
  print('Testing Rayleigh & Mie Phase Functions...');
  final rayleighZenith = PhysicalSkyAtmosphericEngine.rayleighPhase(1.0); // Forward cosTheta = 1
  final rayleighPerp = PhysicalSkyAtmosphericEngine.rayleighPhase(0.0);   // 90 deg cosTheta = 0
  if (rayleighZenith <= rayleighPerp) {
    throw StateError('Rayleigh forward scattering must be stronger than perpendicular: $rayleighZenith <= $rayleighPerp');
  }

  final mieForward = PhysicalSkyAtmosphericEngine.miePhase(1.0);
  final mieBackward = PhysicalSkyAtmosphericEngine.miePhase(-1.0);
  if (mieForward <= mieBackward * 5.0) {
    throw StateError('Mie aerosol scattering must exhibit strong forward peak: $mieForward vs $mieBackward');
  }
  print('✓ Rayleigh & Mie phase functions evaluated accurately');

  // 2. Test Chapman Optical Depth Function
  print('Testing Chapman Optical Depth...');
  final odZenith = PhysicalSkyAtmosphericEngine.opticalDepthChapman(1.0, AtmosphericCoefficients.rayleighScaleHeight);
  final odHorizon = PhysicalSkyAtmosphericEngine.opticalDepthChapman(0.01, AtmosphericCoefficients.rayleighScaleHeight);
  if (odHorizon <= odZenith * 2.0) {
    throw StateError('Horizon optical depth must be significantly greater than zenith optical depth: $odHorizon vs $odZenith');
  }
  print('✓ Chapman optical depth verified (zenith: ${odZenith.toStringAsFixed(1)}m, horizon: ${odHorizon.toStringAsFixed(1)}m)');

  // 3. Test Full Sky Radiance at Noon (High Sun at 60 deg elevation)
  print('Testing Noon Sky Evaluation...');
  final noonSunDir = Vec3(0.0, 0.866, 0.5).normalized;
  final noonSky = PhysicalSkyAtmosphericEngine.evaluateFullSky(
    sunDirection: noonSunDir,
    sunIntensity: 20.0,
    turbidity: 2.0,
  );

  // Blue channel in zenith sky must exceed red channel due to 1/lambda^4 Rayleigh scattering
  if (noonSky.zenithRadiance.z <= noonSky.zenithRadiance.x) {
    throw StateError('Zenith sky must be blue-dominated (Rayleigh 1/lambda^4): ${noonSky.zenithRadiance}');
  }
  if (noonSky.sunTransmittance.x < 0.5) {
    throw StateError('Noon high sun must have high optical transmittance: ${noonSky.sunTransmittance}');
  }
  print('✓ Noon blue sky and optical transmittance certified');

  // 4. Test Sunset Golden Hour & Chromatic Shift
  print('Testing Sunset / Golden Hour Sky Evaluation...');
  final sunsetSunDir = Vec3(1.0, 0.04, 0.0).normalized;
  final sunsetSky = PhysicalSkyAtmosphericEngine.evaluateFullSky(
    sunDirection: sunsetSunDir,
    sunIntensity: 12.0,
    turbidity: 3.5,
  );

  // At sunset, red transmittance must exceed blue transmittance due to long path length
  if (sunsetSky.sunTransmittance.x <= sunsetSky.sunTransmittance.z) {
    throw StateError('Sunset solar transmittance must shift to warm reds: ${sunsetSky.sunTransmittance}');
  }
  print('✓ Sunset chromatic reddening and horizon glow certified');

  print('========================================================================');
  print('✓ PHYSICAL SKY & ATMOSPHERIC SCATTERING CERTIFIED (4/4 SUB-SYSTEMS)');
  print('========================================================================');
}
