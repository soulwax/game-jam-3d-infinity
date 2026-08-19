/// Light table capacity & allocation ledger for VIS-014 / S-04.
/// Manages dynamic light table capacity, active shadow map counts,
/// shader allocation bounds, and fallback downgrade reasons.
///
/// The defaults below are the budget the shipping runtime actually honours,
/// measured against `shaders/rendering/world/shadowed_world.frag` and
/// `passes/pipeline_resource_layout.dart` in `external/pixeldart`:
///
///   * 8 dynamic lights — 4 point (`uPoint*0..3`), 3 unshadowed spot
///     (`uDirectSpot*0..2`), and 1 shadowed spot. The sun is separate and is
///     not counted here.
///   * **1** shadow caster — there is exactly one `shadowMap` resource in the
///     whole pipeline, bound to `spotLights.first`. The directional light does
///     not cast at all.
///
/// This class previously defaulted `maxShadowCasters` to 3, which the runtime
/// has never honoured. Raise it when PLAN_RENDERER.md **R-B2** lands the shadow
/// atlas, and not before — see PLAN_RENDERER.md §2.3 and packet R-A5.
class LightTableCapacityLedger {
  final int maxDynamicLights;
  final int maxShadowCasters;

  int _activeDynamicLights = 0;
  int _activeShadowCasters = 0;
  final List<String> _downgradeReasons = [];

  LightTableCapacityLedger({
    this.maxDynamicLights = 8,
    this.maxShadowCasters = 1,
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
