import 'shader_tuning_state.dart';

/// Serializes only resolved Shader Lab controls for renderer diagnostics.
///
/// It deliberately does not invent uniform names or publish requested values
/// for controls that the active profile cannot execute. The runtime itself
/// maps live values into frame facts; this bridge makes that outcome
/// inspectable.
class ShaderTuningBridge {
  final Map<String, Map<String, Object?>> activeOverrides = {};

  void applyState(ShaderTuningState state) {
    activeOverrides.clear();
    for (final item in state.items.where((item) => item.isLive)) {
      activeOverrides[item.id] = {
        'requested': item.isToggle ? item.boolValue : item.currentValue,
        'effective': item.isToggle
            ? (item.effectiveBoolValue ?? item.boolValue)
            : (item.effectiveValue ?? item.currentValue),
      };
    }
    if (state.debugViewsAvailable) {
      activeOverrides['debug_view'] = {'effective': state.debugMode.name};
    }
  }
}
