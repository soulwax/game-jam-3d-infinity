import 'visual_settings.dart';

/// Visual presentation store transaction coordinator for VIS-019 / S-03.
/// Manages requested vs effective visual settings, transactional commit/revert/reset,
/// and projects effective VisualPresentationPolicy (exposure multiplier, FOV, reticle, color grade).
class VisualStoreCoordinator {
  final VisualSettingsStore store;

  VisualStoreCoordinator({VisualSettingsStore? store})
      : store = store ?? VisualSettingsStore();

  VisualSettingsProfile get requested => store.requested;
  VisualSettingsProfile get effective => store.effective;

  VisualPresentationPolicy get effectivePolicy =>
      VisualPresentationPolicy.fromProfile(store.effective);

  void updateRequested(VisualSettingsProfile profile) {
    store.updateRequested(profile);
  }

  void commit() {
    store.commit();
  }

  void revert() {
    store.revert();
  }

  void reset() {
    store.reset();
  }

  Map<String, Object> toJson() => store.toJson();
}
