import 'dart:io';

void main() {
  final smoke = File('tools/browser/renderer_smoke.cjs').readAsStringSync();
  final host = File('web/main.dart').readAsStringSync();
  const smokeFields = [
    'diagnosticGroups',
    'rainParticleRequested',
    'rainParticleBudget',
    'rainParticleFrustumVisible',
    'weatherPhase',
    'weatherWindMps',
    'weatherSnowAccumulationRateMps',
    'weatherImpactEnergyFluxWm2',
    'weatherWarmClearanceM',
    'weatherLocalTemperatureC',
    'weatherCondensationSuppression',
    'weatherImpactCount',
    'weatherSettledMassKg',
    'weatherReboundEnergyJ',
    'weatherObstacleCount',
    'solarPhase',
    'solarSunriseHours',
    'solarSunsetHours',
    'solarElevationDegrees',
    'solarTransmittance',
    'volumetricSourceCount',
    'volumetricSourceRadiance',
    'volumetricSourceDirection',
    'weatherSnowCoverage',
    'weatherMaterialDissolution',
    'weatherWaterFilmM',
    'lightningSourceDistanceM',
    'storyJournalEntryCount',
    'endingKind',
    'endingTextureCount',
  ];
  final missingSmoke = [
    for (final field in smokeFields)
      if (!smoke.contains(field)) field,
  ];
  if (missingSmoke.isNotEmpty) {
    throw StateError('capture metadata fields are missing: $missingSmoke');
  }
  for (final marker in [
    'data-renderer-diagnostic-groups',
    'data-renderer-query-rejection',
    'data-renderer-clean-baseline',
    'data-house-inventory-status-counts',
    'data-renderer-shader-lab-document',
    'data-renderer-shader-lab-baseline',
    'data-renderer-rain-particles-frustum-culled',
    'data-renderer-weather-phase',
    'data-renderer-weather-wind-mps',
    'data-renderer-weather-snow-accumulation-mps',
    'data-renderer-weather-impact-energy-w-m2',
    'data-renderer-weather-warm-clearance-m',
    'data-renderer-weather-local-temperature-c',
    'data-renderer-weather-condensation-suppression',
    'data-renderer-weather-impact-count',
    'data-renderer-weather-settled-mass-kg',
    'data-renderer-weather-rebound-energy-j',
    'data-renderer-weather-obstacle-count',
    'data-renderer-solar-phase',
    'data-renderer-solar-sunrise-hours',
    'data-renderer-solar-sunset-hours',
    'data-renderer-solar-elevation-deg',
    'data-renderer-solar-transmittance',
    'data-renderer-volumetric-source-count',
    'data-renderer-volumetric-source-radiance',
    'data-renderer-volumetric-source-direction',
    'data-renderer-weather-snow-coverage',
    'data-renderer-weather-material-dissolution',
    'data-renderer-weather-water-film-m',
    'data-renderer-lightning-source-direction',
    'data-renderer-lightning-distance-attenuation',
    '_publishAutomationPlayerState();',
  ]) {
    if (!host.contains(marker)) {
      throw StateError('host capture marker missing: $marker');
    }
  }
  print(
    'capture metadata contract: shader, rain, solar, journal, and frustum evidence are wired',
  );
}
