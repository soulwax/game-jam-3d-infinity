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

  // S-04: Preset resolution and custom auto-detection
  final highPreset = GraphicsSettingsProfile.forPreset(GraphicsPreset.high);
  check(highPreset.antialiasing == 'msaa4', 'High preset has msaa4');
  check(highPreset.preset == GraphicsPreset.high, 'High preset identity');

  final customOption = highPreset.copyWithOption(antialiasing: 'off');
  check(customOption.preset == GraphicsPreset.custom, 'customizing antialiasing sets preset to Custom');

  final restoredStandard = customOption.copyWithOption(
    antialiasing: 'fxaa',
    renderScale: '1.00',
    dynamicResolution: false,
    frameTarget: 'display',
    textureQuality: 'high',
    shadowQuality: 'standard',
  );
  check(restoredStandard.preset == GraphicsPreset.standard, 'matching standard options resolves to Standard preset');

  // S-04: Store commitWithNegotiation, revert, reset
  final transStore = GraphicsSettingsStore();
  transStore.updateRequested(requested);
  final result = transStore.commitWithNegotiation(GraphicsCapabilitySnapshot.safe);
  check(result.downgraded, 'negotiation reports downgrade');
  check(transStore.effective.antialiasing == 'off', 'effective MSAA downgraded to off');
  check(transStore.requested.antialiasing == 'msaa4', 'requested profile preserved across downgrade');

  transStore.revert();
  check(transStore.requested.antialiasing == 'off', 'revert syncs requested to effective');

  transStore.reset();
  check(transStore.requested.preset == GraphicsPreset.standard, 'reset restores default profile');

  print(
    'graphics settings: typed profile, safe negotiation, preset resolution, and transactional rollback pass',
  );
}
