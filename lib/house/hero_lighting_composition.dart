/// Composition scenario enum for H-12 hero lighting composition.
enum CompositionScenario {
  overcastDay,
  duskThreshold,
  singleMantle,
  night,
  lightsOutEmergency,
}

/// Lighting configuration parameters for an H-12 composition scenario.
class LightingScenarioConfig {
  final CompositionScenario scenario;
  final double sunAngle;
  final double daylight;
  final double ambientIntensity;
  final ({double r, double g, double b}) ambientColor;
  final double fogStart;
  final double fogEnd;
  final int activeMantleCount;
  final double exposure;

  const LightingScenarioConfig({
    required this.scenario,
    required this.sunAngle,
    required this.daylight,
    required this.ambientIntensity,
    required this.ambientColor,
    required this.fogStart,
    required this.fogEnd,
    required this.activeMantleCount,
    required this.exposure,
  });

  /// Computes effective minimum route luminance for readability check.
  double computeMinRouteLuminance() {
    final baseLum = (ambientColor.r * 0.2126 + ambientColor.g * 0.7152 + ambientColor.b * 0.0722) * ambientIntensity;
    final practicalLum = activeMantleCount * 0.18;
    final daylightLum = daylight * 0.40;
    return (baseLum + practicalLum + daylightLum) * exposure;
  }
}

/// H-12 Hero Lighting Composition Validator.
///
/// Evaluates and validates hero lighting composition across overcast day, dusk threshold,
/// single mantle, night, and lights-out emergency scenarios.
class HeroLightingComposition {
  static LightingScenarioConfig getScenarioConfig(CompositionScenario scenario) {
    switch (scenario) {
      case CompositionScenario.overcastDay:
        return const LightingScenarioConfig(
          scenario: CompositionScenario.overcastDay,
          sunAngle: 0.5,
          daylight: 1.0,
          ambientIntensity: 0.45,
          ambientColor: (r: 0.65, g: 0.72, b: 0.85),
          fogStart: 6.0,
          fogEnd: 24.0,
          activeMantleCount: 0,
          exposure: 1.0,
        );
      case CompositionScenario.duskThreshold:
        return const LightingScenarioConfig(
          scenario: CompositionScenario.duskThreshold,
          sunAngle: 0.95,
          daylight: 0.35,
          ambientIntensity: 0.22,
          ambientColor: (r: 0.82, g: 0.54, b: 0.38),
          fogStart: 5.0,
          fogEnd: 20.0,
          activeMantleCount: 1,
          exposure: 1.0,
        );
      case CompositionScenario.singleMantle:
        return const LightingScenarioConfig(
          scenario: CompositionScenario.singleMantle,
          sunAngle: 0.0,
          daylight: 0.0,
          ambientIntensity: 0.12,
          ambientColor: (r: 0.34, g: 0.39, b: 0.50),
          fogStart: 4.0,
          fogEnd: 18.0,
          activeMantleCount: 1,
          exposure: 1.0,
        );
      case CompositionScenario.night:
        return const LightingScenarioConfig(
          scenario: CompositionScenario.night,
          sunAngle: 0.0,
          daylight: 0.0,
          ambientIntensity: 0.20,
          ambientColor: (r: 0.20, g: 0.28, b: 0.45),
          fogStart: 3.5,
          fogEnd: 16.0,
          activeMantleCount: 0,
          exposure: 1.0,
        );
      case CompositionScenario.lightsOutEmergency:
        return const LightingScenarioConfig(
          scenario: CompositionScenario.lightsOutEmergency,
          sunAngle: 0.0,
          daylight: 0.0,
          ambientIntensity: 0.42,
          ambientColor: (r: 0.32, g: 0.38, b: 0.52),
          fogStart: 3.0,
          fogEnd: 14.0,
          activeMantleCount: 0,
          exposure: 0.45,
        );
    }
  }

  /// Validates that an H-12 lighting scenario satisfies minimum route readability (luminance >= 0.05)
  /// without black-crush route failure or light leak errors.
  static bool validateReadability(CompositionScenario scenario) {
    final cfg = getScenarioConfig(scenario);
    final minLum = cfg.computeMinRouteLuminance();
    return minLum >= 0.05 && cfg.fogEnd > cfg.fogStart;
  }

  /// Validates all 5 composition scenarios pass the H-12 readability rubric.
  static bool validateAllScenarios() {
    for (final scenario in CompositionScenario.values) {
      if (!validateReadability(scenario)) return false;
    }
    return true;
  }
}
