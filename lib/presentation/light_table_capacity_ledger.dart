/// Light table capacity & allocation ledger for VIS-014 / S-04.
/// Manages dynamic light table capacity, active shadow map counts,
/// shader allocation bounds, and fallback downgrade reasons.
class LightTableCapacityLedger {
  final int maxDynamicLights;
  final int maxShadowCasters;

  int _activeDynamicLights = 0;
  int _activeShadowCasters = 0;
  final List<String> _downgradeReasons = [];

  LightTableCapacityLedger({
    this.maxDynamicLights = 8,
    this.maxShadowCasters = 3,
  }) {
    if (maxDynamicLights <= 0 || maxShadowCasters <= 0) {
      throw ArgumentError('capacity parameters must be positive');
    }
  }

  int get activeDynamicLights => _activeDynamicLights;
  int get activeShadowCasters => _activeShadowCasters;
  List<String> get downgradeReasons => List.unmodifiable(_downgradeReasons);
  bool get hasDowngrades => _downgradeReasons.isNotEmpty;

  bool submitLight({required bool castsShadow}) {
    if (_activeDynamicLights >= maxDynamicLights) {
      _downgradeReasons.add('Dynamic light rejected: exceeds maxDynamicLights ($maxDynamicLights)');
      return false;
    }
    _activeDynamicLights++;

    if (castsShadow) {
      if (_activeShadowCasters >= maxShadowCasters) {
        _downgradeReasons.add('Shadow casting rejected: exceeds maxShadowCasters ($maxShadowCasters)');
      } else {
        _activeShadowCasters++;
      }
    }
    return true;
  }

  Map<String, Object> toJson() => {
        'maxDynamicLights': maxDynamicLights,
        'maxShadowCasters': maxShadowCasters,
        'activeDynamicLights': activeDynamicLights,
        'activeShadowCasters': activeShadowCasters,
        'hasDowngrades': hasDowngrades,
        'downgradeReasons': downgradeReasons,
      };

  void reset() {
    _activeDynamicLights = 0;
    _activeShadowCasters = 0;
    _downgradeReasons.clear();
  }
}
