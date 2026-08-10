// H-12: Hero lighting composition verification.
//
// Verifies that:
//  1. All 5 composition scenarios (overcastDay, duskThreshold, singleMantle, night, lightsOutEmergency) are configured.
//  2. Minimum route luminance passes readability floor (>= 0.05) across all scenarios.
//  3. Fog parameters define valid positive distances (fogEnd > fogStart).
//  4. Emergency lights-out scenario uses reduced exposure (0.45) while preserving route readability.

import 'package:quarantine/house/hero_lighting_composition.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Verify all 5 scenarios validate
  final allPassed = HeroLightingComposition.validateAllScenarios();
  check(allPassed, 'All 5 composition scenarios must pass readability validation');

  // 2. Inspect each scenario's parameters
  final overcast = HeroLightingComposition.getScenarioConfig(CompositionScenario.overcastDay);
  final dusk = HeroLightingComposition.getScenarioConfig(CompositionScenario.duskThreshold);
  final mantle = HeroLightingComposition.getScenarioConfig(CompositionScenario.singleMantle);
  final night = HeroLightingComposition.getScenarioConfig(CompositionScenario.night);
  final emergency = HeroLightingComposition.getScenarioConfig(CompositionScenario.lightsOutEmergency);

  check(overcast.daylight == 1.0, 'Overcast day has max daylight');
  check(dusk.sunAngle > 0.9, 'Dusk threshold has low sun angle');
  check(mantle.activeMantleCount == 1, 'Single mantle scenario has 1 active mantle');
  check(night.daylight == 0.0, 'Night scenario has zero daylight');
  check(emergency.exposure == 0.45, 'Lights out emergency uses reduced 0.45 exposure');

  for (final cfg in [overcast, dusk, mantle, night, emergency]) {
    final lum = cfg.computeMinRouteLuminance();
    check(lum >= 0.05, '${cfg.scenario.name} min route luminance $lum >= 0.05');
    check(cfg.fogEnd > cfg.fogStart, '${cfg.scenario.name} fogEnd > fogStart');
  }

  print('H-12: Hero lighting composition test passed cleanly!');
}
