import 'mat4.dart';

enum ShadowCasterIntent {
  none,
  dynamicLight,
  heldInventory,
  daylight,
}

class ShadowReceiverFlags {
  final bool castsShadow;
  final bool receivesShadow;

  const ShadowReceiverFlags({
    this.castsShadow = true,
    this.receivesShadow = true,
  });

  static const defaultOpaque = ShadowReceiverFlags(
    castsShadow: true,
    receivesShadow: true,
  );

  static const transparentProp = ShadowReceiverFlags(
    castsShadow: false,
    receivesShadow: true,
  );

  Map<String, Object> toJson() => {
        'castsShadow': castsShadow,
        'receivesShadow': receivesShadow,
      };
}

/// Receiver & caster intent record for VIS-003/004 / R-04.
class ShadowReceiverIntent {
  final String lightId;
  final ShadowCasterIntent casterType;
  final ShadowReceiverFlags receiverFlags;
  final Mat4 lightViewProj;
  final double shadowBias;

  ShadowReceiverIntent({
    required this.lightId,
    required this.casterType,
    this.receiverFlags = ShadowReceiverFlags.defaultOpaque,
    required this.lightViewProj,
    this.shadowBias = 0.002,
  }) {
    if (lightId.isEmpty) {
      throw ArgumentError('lightId must be non-empty');
    }
  }

  Map<String, Object> toJson() => {
        'lightId': lightId,
        'casterType': casterType.name,
        'receiverFlags': receiverFlags.toJson(),
        'shadowBias': shadowBias,
      };
}

/// Registry managing active shadow casters & receiver intents for R-04.
class ShadowReceiverRegistry {
  final int maxCasters;
  final List<ShadowReceiverIntent> _casters = [];

  ShadowReceiverRegistry({this.maxCasters = 3}) {
    if (maxCasters <= 0) {
      throw ArgumentError('maxCasters must be positive');
    }
  }

  List<ShadowReceiverIntent> get activeCasters => List.unmodifiable(_casters);
  int get activeCount => _casters.length;

  bool registerCaster(ShadowReceiverIntent caster) {
    if (_casters.length >= maxCasters) {
      return false; // Capacity cap reached
    }
    _casters.add(caster);
    return true;
  }

  void clear() {
    _casters.clear();
  }
}
