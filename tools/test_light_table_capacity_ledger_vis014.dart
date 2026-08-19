import 'package:pixeldart/rendering/rendering.dart' as pixeldart;
import 'package:quarantine/presentation/light_table_capacity_ledger.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  // R-A5: the ledger's defaults must be what the runtime honours, not an
  // aspiration. Pinned to pixeldart's RuntimeLightBudget, which is itself
  // pinned to the shader and the pipeline resource layout.
  final defaults = LightTableCapacityLedger();
  check(
    defaults.maxDynamicLights == pixeldart.RuntimeLightBudget.dynamicLights,
    'default dynamic-light cap must match the shader light budget',
  );
  check(
    defaults.maxShadowCasters == pixeldart.RuntimeLightBudget.shadowMaps,
    'default shadow-caster cap must match the one allocated shadow map',
  );

  // An explicitly widened ledger still caps and reports correctly.
  final ledger = LightTableCapacityLedger(
    maxDynamicLights: 8,
    maxShadowCasters: 3,
  );

  check(ledger.activeDynamicLights == 0, 'starts with 0 lights');
  check(ledger.activeShadowCasters == 0, 'starts with 0 casters');

  // Submit 3 shadow casters
  check(ledger.submitLight(castsShadow: true), 'light 1 submitted');
  check(ledger.submitLight(castsShadow: true), 'light 2 submitted');
  check(ledger.submitLight(castsShadow: true), 'light 3 submitted');
  check(ledger.activeShadowCasters == 3, '3 shadow casters active');
  check(!ledger.hasDowngrades, 'no downgrades yet');

  // Submit 4th shadow caster -> light accepted, shadow rejected
  check(ledger.submitLight(castsShadow: true), 'light 4 accepted');
  check(ledger.activeShadowCasters == 3, 'shadow casters capped at 3');
  check(ledger.hasDowngrades, 'downgrades present');
  check(ledger.downgradeReasons.first.contains('Shadow casting rejected'), 'downgrade reason explains shadow cap');

  print('light table capacity ledger VIS-014 / S-04: capacity bounds, shadow cap, and downgrade reasons pass');
}
