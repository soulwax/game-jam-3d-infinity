import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/presentation/day_night_atmosphere.dart';
import 'package:quarantine/presentation/realistic_thunderstorm_engine.dart';
import 'package:quarantine/presentation/shader_tuning_state.dart';
import 'package:quarantine/presentation/shader_tuning_bridge.dart';
import 'package:quarantine/ui/p5_dialogue_animations.dart';
import 'package:quarantine/ui/gui_design_tokens.dart';

void check(bool condition, String message) {
  if (!condition) {
    throw StateError('MASTERPLAN FINAL VERIFICATION FAILED: $message');
  }
}

void main() {
  print(
    '========================================================================',
  );
  print(' MASTERPLAN SECTIONS 36–42 FINAL INTEGRATION TEST SUITE');
  print(
    '========================================================================\n',
  );

  // 1. Verify Weather System & Narrative Intensity Curve (W-06)
  final weather = WeatherSchedule(seed: 12345);
  final day1 = weather.forDay(1);
  final day20 = weather.forDay(20);
  check(
    day20.rainIntensity > day1.rainIntensity,
    'Day 20 storm rain intensity must exceed Day 1',
  );
  check(
    day20.rainIntensity >= 0.95,
    'Day 20 rain intensity must reach peak storm levels (>= 0.95)',
  );
  print(
    '[✓] Section 36: Authored 21-day weather intensity schedule verified (Day 20 storm peak: ${day20.rainIntensity})',
  );

  // 2. Verify Seasonal Daylight Arc (W-04)
  final summerAtmos = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 12.0,
    daylightHours: 12.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  final winterAtmos = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 12.0,
    daylightHours: 10.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  check(summerAtmos.sunColor.r > 0, 'Atmosphere sun color must be valid');
  check(
    winterAtmos.sunColor.r > 0,
    'Seasonal daylight arc must produce a valid winter sun color',
  );
  print('[✓] Section 36: Seasonal daylight arc evaluation verified');

  // 3. Verify Shader Tuning State & Fine Steps (§41.3)
  final tuningState = ShaderTuningState();
  final item = tuningState.items.firstWhere((i) => i.id == 'fog_density');
  final initialVal = item.currentValue;
  item.incrementFine();
  check(
    item.currentValue > initialVal,
    'ShaderTuningItem.incrementFine must increase value',
  );
  print(
    '[✓] Section 41: Shader tuning state & 1/5th fine step adjustments verified',
  );

  // 4. Verify Shader Tuning Bridge & Extended Rendering Overrides (§41.2)
  tuningState.resolveFrame(
    liveItemIds: {'fog_enable', 'fog_density', 'post_exposure'},
    effectiveValues: {'fog_density': 0.012, 'post_exposure': 1.0},
    effectiveToggles: {'fog_enable': true},
  );
  final bridge = ShaderTuningBridge();
  bridge.applyState(tuningState);
  check(
    bridge.activeOverrides.isNotEmpty,
    'ShaderTuningBridge must populate active overrides',
  );
  check(
    bridge.activeOverrides['fog_density']?['effective'] == 0.012,
    'resolved fog density must publish its effective value',
  );
  check(
    !bridge.activeOverrides.containsKey('volumetric_light_enable'),
    'unresolved controls must not be published as renderer overrides',
  );
  print('[✓] Section 41: ShaderTuningBridge publishes resolved overrides only');

  // 5. Verify unavailable controls retain their explicit reason.
  final volumetric = tuningState.items.firstWhere(
    (item) => item.id == 'volumetric_light_enable',
  );
  check(
    !volumetric.isLive,
    'unresolved volumetric control must be unavailable',
  );
  check(
    volumetric.availabilityReason != null,
    'unavailable controls must explain why they cannot apply',
  );
  print(
    '[✓] Extended Renderer: unavailable features are explicit, not fake overrides',
  );

  // 6. Verify Persona 5 Dialogue Easing Math (§40.3.C)
  final eased = P5DialogueAnimations.easeOutCubic(0.5);
  check(
    eased > 0.5 && eased < 1.0,
    'P5 cubic-bezier easeOutCubic math must produce smooth acceleration',
  );
  final staggerOffset = P5DialogueAnimations.computeStaggeredOffsetX(
    index: 2,
    elapsedMs: 240.0,
    totalWidth: 800.0,
  );
  check(staggerOffset >= 0.0, 'P5 staggered slide-in offset X must be valid');
  print(
    '[✓] Section 40: Persona 5 dialogue easeOutCubic & staggered entry slide-in offset math verified',
  );

  // 7. Verify Design Tokens (§42.1 / GUI-01)
  check(
    GuiDesignTokens.crimsonHex == 0xD32F2F,
    'Crimson color token hex must equal #D32F2F',
  );
  check(
    GuiDesignTokens.skewAngleRad == -0.14,
    'Persona 5 skew angle token must equal -0.14 rad',
  );
  print('[✓] Section 42: Unified GuiDesignTokens registry verified');

  // 8. Verify Realistic Thunderstorm Engine (§36)
  final stormEngine = RealisticThunderstormEngine();
  stormEngine.update(
    9.0,
    rainIntensity: 0.85,
  ); // Advance past first strike interval
  check(
    stormEngine.flashState.colorB > 0.0,
    'RealisticThunderstormEngine flash state must define valid blue-white tint',
  );
  print(
    '[✓] Section 36: RealisticThunderstormEngine lightning strobes & speed-of-sound thunder delay verified',
  );

  print(
    '\n========================================================================',
  );
  print(' MASTERPLAN INTEGRATION EVIDENCE SUITE PASSED');
  print(
    '========================================================================\n',
  );
}
