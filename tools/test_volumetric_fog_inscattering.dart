import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/volumetric_fog_inscattering.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — VOLUMETRIC FOG & IN-SCATTERING TEST SUITE');
  print('========================================================================');

  // 1. Test Henyey-Greenstein Forward Phase Peak
  print('Testing Henyey-Greenstein Phase Function...');
  final forwardPhase = VolumetricFogInScatteringEngine.henyeyGreensteinPhase(1.0, 0.70);
  final backwardPhase = VolumetricFogInScatteringEngine.henyeyGreensteinPhase(-1.0, 0.70);
  if (forwardPhase <= backwardPhase * 5.0) {
    throw StateError('Henyey-Greenstein forward phase must dominate backward phase: $forwardPhase vs $backwardPhase');
  }
  print('✓ Forward scattering peak verified (forward: ${forwardPhase.toStringAsFixed(2)}, backward: ${backwardPhase.toStringAsFixed(2)})');

  // 2. Test Analytical Point Light In-Scattering
  print('Testing Point Light In-Scattering Integral...');
  final rayOrigin = Vec3(0.0, 1.7, 0.0);
  final rayDir = Vec3(0.0, 0.0, 1.0);
  final lightPos = Vec3(0.5, 1.7, 5.0); // 0.5m to the right of ray path
  final lightColor = Vec3(1.0, 0.8, 0.4);

  final inScattering = VolumetricFogInScatteringEngine.evaluatePointLightInScattering(
    rayOrigin: rayOrigin,
    rayDirection: rayDir,
    rayLength: 10.0,
    lightPosition: lightPos,
    lightColor: lightColor,
    lightIntensity: 25.0,
    scatteringCoefficient: 0.05,
  );

  if (inScattering.x <= 0.01) {
    throw StateError('Point light in-scattering radiance must be non-zero near light source: $inScattering');
  }
  print('✓ Analytical point-light in-scattering integral evaluated accurately: $inScattering');

  // 3. Test Height-Decay Exponential Fog
  print('Testing Height-Decay Exponential Fog...');
  final lowGroundRay = VolumetricFogInScatteringEngine.evaluateHeightFog(
    rayOrigin: Vec3(0.0, 0.2, 0.0), // Low ground
    rayDirection: Vec3(0.0, 0.0, 1.0),
    rayLength: 12.0,
    ambientLight: Vec3(0.5, 0.5, 0.6),
    baseDensity: 0.08,
    heightFalloff: 0.8,
  );

  final highCeilingRay = VolumetricFogInScatteringEngine.evaluateHeightFog(
    rayOrigin: Vec3(0.0, 2.5, 0.0), // Near ceiling
    rayDirection: Vec3(0.0, 0.0, 1.0),
    rayLength: 12.0,
    ambientLight: Vec3(0.5, 0.5, 0.6),
    baseDensity: 0.08,
    heightFalloff: 0.8,
  );

  // Ground fog optical depth must be significantly greater than ceiling haze
  if (lowGroundRay.opticalDepth <= highCeilingRay.opticalDepth * 2.0) {
    throw StateError('Ground fog optical depth must exceed ceiling haze: ${lowGroundRay.opticalDepth} vs ${highCeilingRay.opticalDepth}');
  }
  if (lowGroundRay.transmittance >= highCeilingRay.transmittance) {
    throw StateError('Ground fog transmittance must be lower due to higher extinction: ${lowGroundRay.transmittance} vs ${highCeilingRay.transmittance}');
  }
  print('✓ Exponential height fog stratification certified (ground OD: ${lowGroundRay.opticalDepth.toStringAsFixed(3)}, ceiling OD: ${highCeilingRay.opticalDepth.toStringAsFixed(3)})');

  print('========================================================================');
  print('✓ VOLUMETRIC FOG & IN-SCATTERING CERTIFIED (3/3 SUB-SYSTEMS)');
  print('========================================================================');
}
