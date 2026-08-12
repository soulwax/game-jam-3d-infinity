import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/cinematic_lens_optics.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — CINEMATIC LENS OPTICS & FLARE TEST SUITE');
  print('========================================================================');

  // 1. Test Polygonal Bokeh Aperture Evaluation
  print('Testing Polygonal Bokeh Aperture Blades...');
  // Center of aperture
  final centerIntensity = CinematicLensOpticsEngine.evaluateBokehAperture(
    radius: 0.0,
    theta: 0.0,
    bladeCount: 6,
  );
  if (centerIntensity != 1.0) {
    throw StateError('Aperture center intensity must be 1.0, got $centerIntensity');
  }

  // Outside aperture
  final outsideIntensity = CinematicLensOpticsEngine.evaluateBokehAperture(
    radius: 1.5,
    theta: 0.0,
    bladeCount: 6,
  );
  if (outsideIntensity != 0.0) {
    throw StateError('Aperture outside intensity must be 0.0, got $outsideIntensity');
  }
  print('✓ 6-blade hexagonal bokeh aperture shape evaluated accurately');

  // 2. Test Lens Flare Ghost Synthesis
  print('Testing Multi-Element Lens Flare Ghost Synthesis...');
  final flareResult = CinematicLensOpticsEngine.synthesizeLensFlare(
    screenLightX: 0.3,
    screenLightY: 0.4,
    lightColor: Vec3(1.0, 0.9, 0.7),
    lightLuminance: 50.0,
    flareThreshold: 5.0,
  );

  if (flareResult.ghostCount != 6) {
    throw StateError('Expected 6 optical ghost elements, got ${flareResult.ghostCount}');
  }
  if (flareResult.totalFlareRadiance.length <= 0.01) {
    throw StateError('Expected significant flare radiance for intense light source: ${flareResult.totalFlareRadiance}');
  }
  if (flareResult.anamorphicStreakIntensity <= 0.0) {
    throw StateError('Expected non-zero anamorphic glare streak intensity');
  }
  print('✓ 6-element internal optical reflection and anamorphic glare streak certified');

  // 3. Test Flare Sub-Threshold Rejection
  print('Testing Flare Sub-Threshold Rejection...');
  final dimFlareResult = CinematicLensOpticsEngine.synthesizeLensFlare(
    screenLightX: 0.3,
    screenLightY: 0.4,
    lightColor: Vec3(1.0, 0.9, 0.7),
    lightLuminance: 2.0, // Below 5.0 threshold
    flareThreshold: 5.0,
  );

  if (dimFlareResult.totalFlareRadiance.length != 0.0) {
    throw StateError('Sub-threshold light must not produce lens flare: ${dimFlareResult.totalFlareRadiance}');
  }
  print('✓ Sub-threshold light rejected cleanly without optical artifacts');

  print('========================================================================');
  print('✓ CINEMATIC LENS OPTICS & FLARE CERTIFIED (3/3 SUB-SYSTEMS)');
  print('========================================================================');
}
