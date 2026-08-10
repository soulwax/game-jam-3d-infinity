
import 'proof_asset_registry.dart';

/// Representation of a single model placement binding for I-02.
/// Binds normalized asset model parts to placement IDs, sockets, material variants,
/// visibility, and state keys.
class ModelPlacementBinding {
  final String placementId;
  final String assetId;
  final String roomId;
  final ({double x, double y, double z}) position;
  final ({double rx, double ry, double rz}) rotation;
  final double scale;
  final String? materialVariantKey;
  final Map<String, String> socketBindings;
  final bool visible;
  final Map<String, dynamic> stateKeys;

  const ModelPlacementBinding({
    required this.placementId,
    required this.assetId,
    required this.roomId,
    required this.position,
    this.rotation = (rx: 0.0, ry: 0.0, rz: 0.0),
    this.scale = 1.0,
    this.materialVariantKey,
    this.socketBindings = const {},
    this.visible = true,
    this.stateKeys = const {},
  }) : assert(placementId.length > 0, 'placementId must be non-empty'),
       assert(assetId.length > 0, 'assetId must be non-empty');

  factory ModelPlacementBinding.fromJson(Map<String, dynamic> json) {
    final pid = json['placementId'] as String? ?? '';
    final aid = json['assetId'] as String? ?? '';
    final rid = json['roomId'] as String? ?? '';
    if (pid.isEmpty || aid.isEmpty || rid.isEmpty) {
      throw const FormatException('placementId, assetId, and roomId are required');
    }

    final posList = (json['position'] as List?)?.cast<num>();
    if (posList == null || posList.length != 3) {
      throw const FormatException('position must be 3 numbers');
    }
    final rotList = (json['rotation'] as List?)?.cast<num>() ?? [0, 0, 0];

    return ModelPlacementBinding(
      placementId: pid,
      assetId: aid,
      roomId: rid,
      position: (x: posList[0].toDouble(), y: posList[1].toDouble(), z: posList[2].toDouble()),
      rotation: (rx: rotList[0].toDouble(), ry: rotList[1].toDouble(), rz: rotList[2].toDouble()),
      scale: (json['scale'] as num?)?.toDouble() ?? 1.0,
      materialVariantKey: json['materialVariantKey'] as String?,
      socketBindings: (json['socketBindings'] as Map?)?.cast<String, String>() ?? const {},
      visible: json['visible'] as bool? ?? true,
      stateKeys: (json['stateKeys'] as Map?)?.cast<String, dynamic>() ?? const {},
    );
  }

  Map<String, dynamic> toJson() => {
        'placementId': placementId,
        'assetId': assetId,
        'roomId': roomId,
        'position': [position.x, position.y, position.z],
        'rotation': [rotation.rx, rotation.ry, rotation.rz],
        'scale': scale,
        'materialVariantKey': materialVariantKey,
        'socketBindings': socketBindings,
        'visible': visible,
        'stateKeys': stateKeys,
      };
}

/// Registry managing model placement bindings for I-02.
class ModelPlacementBindingRegistry {
  final Map<String, ModelPlacementBinding> _bindings = {};

  void bindPlacement(ModelPlacementBinding binding) {
    _bindings[binding.placementId] = binding;
  }

  ModelPlacementBinding? getBinding(String placementId) => _bindings[placementId];

  Iterable<ModelPlacementBinding> get allBindings => _bindings.values;

  Iterable<ModelPlacementBinding> bindingsForRoom(String roomId) =>
      _bindings.values.where((b) => b.roomId == roomId);

  /// Validates that all bindings reference existing asset definitions and valid sockets.
  bool validateAgainstProofAssets(ProofAssetRegistry proofRegistry) {
    for (final b in _bindings.values) {
      final asset = proofRegistry.getProofAsset(b.assetId);
      if (asset == null) return false;

      // Verify sockets referenced in socketBindings exist on asset
      final assetSockets = asset.sockets.map((s) => s.name).toSet();
      for (final socketName in b.socketBindings.keys) {
        if (!assetSockets.contains(socketName)) return false;
      }
    }
    return true;
  }

  Map<String, dynamic> serializeState() => {
        'bindings': _bindings.values.map((b) => b.toJson()).toList(),
      };

  void restoreState(Map<String, dynamic> stateJson) {
    final rawList = (stateJson['bindings'] as List?)?.cast<Map<String, dynamic>>() ?? [];
    _bindings.clear();
    for (final raw in rawList) {
      final binding = ModelPlacementBinding.fromJson(raw);
      _bindings[binding.placementId] = binding;
    }
  }
}
