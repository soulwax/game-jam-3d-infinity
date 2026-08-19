import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/contact_shadows_ssdo.dart';
import 'package:quarantine/presentation/procedural_surface_weathering.dart';
import 'package:quarantine/presentation/subsurface_scattering_params.dart';

/// Shading input parameters for PBR evaluation on a surface fragment.
class PBRSurfaceInput {
  final Vec3 worldPosition;
  final Vec3 normal;
  final Vec3 viewDir;
  final Vec3 albedo;
  final double roughness;
  final double metallic;
  final double ambientOcclusion;
  final double depthHeight;
  final SubsurfaceScatteringParams? sssParams;
  final WeatheringParams? weatheringParams;

  const PBRSurfaceInput({
    required this.worldPosition,
    required this.normal,
    required this.viewDir,
    required this.albedo,
    this.roughness = 0.5,
    this.metallic = 0.0,
    this.ambientOcclusion = 1.0,
    this.depthHeight = 0.0,
    this.sssParams,
    this.weatheringParams,
  });
}

/// Point or directional light source for PBR shading evaluation.
class PBRLightSource {
  final Vec3 position;
  final Vec3 color;
  final double intensity;
  final double radius;
  final bool isDirectional;

  const PBRLightSource({
    required this.position,
    required this.color,
    this.intensity = 1.0,
    this.radius = 8.0,
    this.isDirectional = false,
  });
}

/// Evaluated PBR surface shading output.
class PBRShadingResult {
  final Vec3 diffuse;
  final Vec3 specular;
  final Vec3 sssContribution;
  final Vec3 totalRadiance;
  final double finalRoughness;
  final double finalOcclusion;

  const PBRShadingResult({
    required this.diffuse,
    required this.specular,
    required this.sssContribution,
    required this.totalRadiance,
    required this.finalRoughness,
    required this.finalOcclusion,
  });

  Map<String, dynamic> toJson() => {
        'diffuse': {'x': diffuse.x, 'y': diffuse.y, 'z': diffuse.z},
        'specular': {'x': specular.x, 'y': specular.y, 'z': specular.z},
        'sssContribution': {'x': sssContribution.x, 'y': sssContribution.y, 'z': sssContribution.z},
        'totalRadiance': {'x': totalRadiance.x, 'y': totalRadiance.y, 'z': totalRadiance.z},
        'finalRoughness': finalRoughness,
        'finalOcclusion': finalOcclusion,
      };
}

/// Master Cook-Torrance Microfacet PBR Material Shading Pipeline.
///
/// Unifies physical BRDF, normal displacement, SSDO contact shadows, procedural
/// weathering layers and subsurface scattering.
class PBRMaterialShadingPipeline {
  /// Evaluates Cook-Torrance GGX microfacet BRDF with atmospheric and weathering layers.
  static PBRShadingResult evaluateSurface({
    required PBRSurfaceInput surface,
    required List<PBRLightSource> lights,
    Vec3? ambientLight,
    SSDOResult? ssdoResult,
  }) {
    final n = surface.normal.normalized;
    final v = surface.viewDir.normalized;

    // Apply procedural weathering (dust, condensation, soot)
    var effectiveAlbedo = surface.albedo;
    var effectiveRoughness = surface.roughness;
    var effectiveAO = surface.ambientOcclusion;

    if (surface.weatheringParams != null) {
      final weathering = ProceduralWeatheringEngine.evaluateSurface(
        params: surface.weatheringParams!,
      );
      // Dust increases roughness and lightens/hazes albedo
      effectiveRoughness = math.min(1.0, effectiveRoughness + weathering.dustOpacity * 0.4);
      // Soot darkens albedo and absorbs light
      final sootMultiplier = 1.0 - weathering.sootDarkening * 0.6;
      effectiveAlbedo = effectiveAlbedo * sootMultiplier;
      // Condensation creates glossy streaks
      if (weathering.condensationFactor > 0.3) {
        effectiveRoughness = math.max(0.08, effectiveRoughness - weathering.condensationFactor * 0.3);
      }
    }

    // Modulate AO with SSDO directional occlusion if present
    if (ssdoResult != null) {
      effectiveAO *= (1.0 - ssdoResult.directionalOcclusionFactor);
    }

    // Base reflectivity f0 (0.04 dielectric, albedo for metals)
    final f0Dielectric = Vec3(0.04, 0.04, 0.04);
    final f0 = Vec3(
      _lerp(f0Dielectric.x, effectiveAlbedo.x, surface.metallic),
      _lerp(f0Dielectric.y, effectiveAlbedo.y, surface.metallic),
      _lerp(f0Dielectric.z, effectiveAlbedo.z, surface.metallic),
    );

    var totalDiffuse = Vec3(0, 0, 0);
    var totalSpecular = Vec3(0, 0, 0);
    var totalSSS = Vec3(0, 0, 0);

    for (final light in lights) {
      Vec3 l;
      double attenuation;

      if (light.isDirectional) {
        l = light.position.normalized;
        attenuation = light.intensity;
      } else {
        final toLight = light.position - surface.worldPosition;
        final distance = toLight.length;
        if (distance > light.radius || distance < 1e-4) continue;
        l = toLight.normalized;
        final dNorm = distance / light.radius;
        final window = math.pow(math.max(0.0, 1.0 - math.pow(dNorm, 4)), 2);
        attenuation = (light.intensity / (distance * distance + 1.0)) * window;
      }

      final h = (v + l).normalized;
      final ndotL = math.max(0.0, n.dot(l));
      final ndotV = math.max(1e-4, n.dot(v));
      final ndotH = math.max(0.0, n.dot(h));
      final vdotH = math.max(0.0, v.dot(h));

      if (ndotL <= 0.0) {
        // Evaluate back-face SSS transmission if light is behind translucent surface
        if (surface.sssParams != null && surface.sssParams!.enabled) {
          final sssLightDir = l + n * surface.sssParams!.distortion;
          final sssDot = math.max(0.0, (Vec3(0, 0, 0) - v).dot(sssLightDir));
          final sssIntensity = math.pow(sssDot, surface.sssParams!.translucencyPower) * attenuation;
          totalSSS += surface.sssParams!.scatterColor * sssIntensity;
        }
        continue;
      }

      // 1. Normal Distribution Function D (Trowbridge-Reitz GGX)
      final alpha = effectiveRoughness * effectiveRoughness;
      final alphaSq = alpha * alpha;
      final denomD = (ndotH * ndotH * (alphaSq - 1.0) + 1.0);
      final distD = alphaSq / (math.pi * denomD * denomD);

      // 2. Geometric Shadowing Function G (Smith Schlick-GGX)
      final k = math.pow(effectiveRoughness + 1.0, 2) / 8.0;
      final gV = ndotV / (ndotV * (1.0 - k) + k);
      final gL = ndotL / (ndotL * (1.0 - k) + k);
      final geomG = gV * gL;

      // 3. Fresnel Schlick F
      final fresnelF = Vec3(
        f0.x + (1.0 - f0.x) * math.pow(1.0 - vdotH, 5),
        f0.y + (1.0 - f0.y) * math.pow(1.0 - vdotH, 5),
        f0.z + (1.0 - f0.z) * math.pow(1.0 - vdotH, 5),
      );

      // Specular Cook-Torrance
      final specNumerator = fresnelF * (distD * geomG);
      final specDenominator = 4.0 * ndotV * ndotL + 1e-4;
      final specularBRDF = specNumerator * (1.0 / specDenominator);

      // Energy conservation: kD = (1 - F) * (1 - metallic)
      final kD = Vec3(
        (1.0 - fresnelF.x) * (1.0 - surface.metallic),
        (1.0 - fresnelF.y) * (1.0 - surface.metallic),
        (1.0 - fresnelF.z) * (1.0 - surface.metallic),
      );

      final radiance = light.color * attenuation;
      totalDiffuse += Vec3(
        kD.x * (effectiveAlbedo.x / math.pi) * radiance.x * ndotL,
        kD.y * (effectiveAlbedo.y / math.pi) * radiance.y * ndotL,
        kD.z * (effectiveAlbedo.z / math.pi) * radiance.z * ndotL,
      );
      totalSpecular += Vec3(
        specularBRDF.x * radiance.x * ndotL,
        specularBRDF.y * radiance.y * ndotL,
        specularBRDF.z * radiance.z * ndotL,
      );
    }

    // Ambient Lighting contribution
    final ambient = ambientLight ?? Vec3(0.08, 0.07, 0.06);
    final ambientDiffuse = Vec3(
      effectiveAlbedo.x * ambient.x * effectiveAO,
      effectiveAlbedo.y * ambient.y * effectiveAO,
      effectiveAlbedo.z * ambient.z * effectiveAO,
    );

    final totalRadiance = ambientDiffuse + totalDiffuse + totalSpecular + totalSSS;

    return PBRShadingResult(
      diffuse: ambientDiffuse + totalDiffuse,
      specular: totalSpecular,
      sssContribution: totalSSS,
      totalRadiance: totalRadiance,
      finalRoughness: effectiveRoughness,
      finalOcclusion: effectiveAO,
    );
  }

  static double _lerp(double a, double b, double t) => a + (b - a) * t;

  /// Self-validation for pipeline correctness and unit testing.
  static bool validate() {
    final surface = PBRSurfaceInput(
      worldPosition: Vec3(0, 1, 0),
      normal: Vec3(0, 1, 0),
      viewDir: Vec3(0, 1, 1).normalized,
      albedo: Vec3(0.7, 0.5, 0.3),
      roughness: 0.3,
      metallic: 0.2,
      ambientOcclusion: 1.0,
      weatheringParams: const WeatheringParams(
        dayIndex: 5,
        roomTemperatureCelsius: 14.0,
        dewPointCelsius: 6.0,
        isFireplaceNearby: true,
        flueDistanceM: 1.5,
      ),
    );

    final lights = [
      PBRLightSource(
        position: Vec3(0, 3, 0),
        color: Vec3(1.0, 0.9, 0.8),
        intensity: 2.0,
        radius: 6.0,
      ),
    ];

    final result = evaluateSurface(surface: surface, lights: lights);
    return result.totalRadiance.x > 0 &&
        result.totalRadiance.y > 0 &&
        result.totalRadiance.z > 0 &&
        result.finalRoughness >= 0.0 &&
        result.finalRoughness <= 1.0;
  }
}
