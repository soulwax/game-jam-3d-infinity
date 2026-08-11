import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/pbr_material_shading_pipeline.dart';
import 'package:quarantine/presentation/subsurface_scattering_params.dart';
import 'package:quarantine/presentation/procedural_surface_weathering.dart';
import 'package:quarantine/presentation/contact_shadows_ssdo.dart';
import 'package:quarantine/presentation/screen_space_reflections.dart';

Never _fail(String message) =>
    throw StateError('PBR Shading Pipeline test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('Testing PBR Material Shading Pipeline...');

  // 1. Self-validation check
  _expect(PBRMaterialShadingPipeline.validate(), 'PBRMaterialShadingPipeline self-validation failed');

  // 2. Dielectric vs Metallic BRDF test
  final dielectricSurface = PBRSurfaceInput(
    worldPosition: Vec3(0, 0, 0),
    normal: Vec3(0, 1, 0),
    viewDir: Vec3(0, 1, 1).normalized,
    albedo: Vec3(0.8, 0.2, 0.2),
    roughness: 0.2,
    metallic: 0.0,
  );

  final metallicSurface = PBRSurfaceInput(
    worldPosition: Vec3(0, 0, 0),
    normal: Vec3(0, 1, 0),
    viewDir: Vec3(0, 1, 1).normalized,
    albedo: Vec3(0.8, 0.2, 0.2),
    roughness: 0.2,
    metallic: 1.0,
  );

  final light = PBRLightSource(
    position: Vec3(0, 2, 2),
    color: Vec3(1, 1, 1),
    intensity: 1.0,
    radius: 5.0,
  );

  final dielectricResult = PBRMaterialShadingPipeline.evaluateSurface(
    surface: dielectricSurface,
    lights: [light],
  );

  final metallicResult = PBRMaterialShadingPipeline.evaluateSurface(
    surface: metallicSurface,
    lights: [light],
  );

  _expect(dielectricResult.diffuse.length > metallicResult.diffuse.length, 'Dielectric should have more diffuse than pure metal');
  _expect(metallicResult.specular.length > 0, 'Metallic should produce specular radiance');

  // 3. Subsurface scattering transmission test
  final sssSurface = PBRSurfaceInput(
    worldPosition: Vec3(0, 0, 0),
    normal: Vec3(0, 0, 1),
    viewDir: Vec3(0, 0, 1), // Looking forward at front face
    albedo: Vec3(0.9, 0.9, 0.9),
    sssParams: const SubsurfaceScatteringParams(
      enabled: true,
      scatterRadius: 0.5,
      translucencyPower: 1.5,
    ),
  );

  final backLight = PBRLightSource(
    position: Vec3(0, 0, -2), // Light behind surface
    color: Vec3(1, 0.8, 0.6),
    intensity: 2.0,
    radius: 5.0,
  );

  final sssResult = PBRMaterialShadingPipeline.evaluateSurface(
    surface: sssSurface,
    lights: [backLight],
  );

  _expect(sssResult.sssContribution.length > 0, 'Translucent fabric must capture back-face SSS transmission');

  // 4. SSDO & Weathering modulation test
  final weatheredSurface = PBRSurfaceInput(
    worldPosition: Vec3(0, 0, 0),
    normal: Vec3(0, 1, 0),
    viewDir: Vec3(0, 1, 1).normalized,
    albedo: Vec3(0.5, 0.5, 0.5),
    roughness: 0.3,
    weatheringParams: const WeatheringParams(
      dayIndex: 10,
      roomTemperatureCelsius: 11.0,
      dewPointCelsius: 5.0,
      isFireplaceNearby: true,
      flueDistanceM: 0.8,
    ),
  );

  const ssdoResult = SSDOResult(
    directionalOcclusionFactor: 0.35,
    contactShadowMask: 0.8,
    bounceColor: (r: 0.05, g: 0.04, b: 0.03),
    activeSamples: 16,
    diagnostics: {},
  );

  final weatheredResult = PBRMaterialShadingPipeline.evaluateSurface(
    surface: weatheredSurface,
    lights: [light],
    ssdoResult: ssdoResult,
  );

  _expect(weatheredResult.finalRoughness > 0.3, 'Dust accumulation must increase effective surface roughness');
  _expect(weatheredResult.finalOcclusion < 1.0, 'SSDO must modulate effective ambient occlusion');

  // 5. Screen Space Reflection Integration
  const ssrResult = ScreenSpaceReflectionResult(
    hasHit: true,
    confidence01: 0.85,
    roughnessConeSpread: 0.1,
    hitDistance: 1.5,
    activeSteps: 12,
    diagnostics: {},
  );

  final ssrShadedResult = PBRMaterialShadingPipeline.evaluateSurface(
    surface: dielectricSurface,
    lights: [light],
    ssrResult: ssrResult,
  );

  _expect(ssrShadedResult.ssrReflection.length > 0, 'SSR hit must contribute to specular radiance');

  print('All PBR Material Shading Pipeline tests passed successfully!');
}
