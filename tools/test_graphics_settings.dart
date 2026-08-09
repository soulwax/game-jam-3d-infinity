import 'package:quarantine/ui/graphics_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  const requested = GraphicsSettingsProfile(
    preset: GraphicsPreset.high,
    dynamicResolution: true,
    antialiasing: 'msaa4',
  );
  final negotiation = negotiateGraphics(
    requested,
    GraphicsCapabilitySnapshot.safe,
  );
  check(negotiation.downgraded, 'safe capabilities report a downgrade');
  check(negotiation.effective.antialiasing == 'off', 'MSAA falls back safely');
  check(
    !negotiation.effective.dynamicResolution,
    'timing fallback disables DR',
  );
  check(
    negotiation.effective.preset == GraphicsPreset.standard,
    'High falls back to Standard',
  );

  final store = GraphicsSettingsStore(
    requested: requested,
    effective: negotiation.effective,
  );
  final restored = GraphicsSettingsStore.fromJson(store.toJson());
  check(restored.requested.preset == GraphicsPreset.high, 'requested persists');
  check(
    restored.effective.preset == GraphicsPreset.standard,
    'effective persists separately',
  );
  print(
    'graphics settings: typed profile, safe negotiation, and round-trip pass',
  );
}
