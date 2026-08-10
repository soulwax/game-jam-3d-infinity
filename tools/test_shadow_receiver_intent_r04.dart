import 'package:quarantine/engine/mat4.dart';
import 'package:quarantine/engine/shadow_receiver_intent.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final registry = ShadowReceiverRegistry(maxCasters: 3);
  check(registry.activeCount == 0, 'starts empty');

  final c1 = ShadowReceiverIntent(
    lightId: 'lamp-living',
    casterType: ShadowCasterIntent.dynamicLight,
    lightViewProj: Mat4.identity(),
  );
  final c2 = ShadowReceiverIntent(
    lightId: 'sunlight',
    casterType: ShadowCasterIntent.daylight,
    lightViewProj: Mat4.identity(),
  );
  final c3 = ShadowReceiverIntent(
    lightId: 'lantern-held',
    casterType: ShadowCasterIntent.heldInventory,
    lightViewProj: Mat4.identity(),
  );
  final c4 = ShadowReceiverIntent(
    lightId: 'overflow-light',
    casterType: ShadowCasterIntent.dynamicLight,
    lightViewProj: Mat4.identity(),
  );

  check(registry.registerCaster(c1), 'c1 registered');
  check(registry.registerCaster(c2), 'c2 registered');
  check(registry.registerCaster(c3), 'c3 registered');
  check(!registry.registerCaster(c4), 'c4 rejected by capacity cap (3 max)');

  check(registry.activeCount == 3, '3 active casters');

  final json = c1.toJson();
  check(json['lightId'] == 'lamp-living', 'JSON carries lightId');

  print('shadow receiver intent VIS-003/004 / R-04: registry capacity, caster types, receiver flags pass');
}
