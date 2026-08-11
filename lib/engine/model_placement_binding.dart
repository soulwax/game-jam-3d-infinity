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
       assert(assetId.length > 0, 'assetId must be non-empty'),
       assert(roomId.length > 0, 'roomId must be non-empty'),
       assert(
         scale > 0.0,
         'scale must be positive',
       );

  factory ModelPlacementBinding.fromJson(Map<String, dynamic> json) {
    final pid = _requiredString(json, 'placementId');
    final aid = _requiredString(json, 'assetId');
    final rid = _requiredString(json, 'roomId');
    if (pid.isEmpty || aid.isEmpty || rid.isEmpty) {
      throw const FormatException(
        'placementId, assetId, and roomId are required',
      );
    }

    final posList = _finiteTriple(json['position'], 'position');
    final rotList = json.containsKey('rotation')
        ? _finiteTriple(json['rotation'], 'rotation')
        : const [0.0, 0.0, 0.0];
    final scale = json['scale'] == null
        ? 1.0
        : _positiveFinite(json['scale'], 'scale');
    final materialVariantKey = _optionalNonEmptyString(
      json['materialVariantKey'],
      'materialVariantKey',
    );
    final socketBindings = _stringMap(json['socketBindings'], 'socketBindings');
    final stateKeys = _dynamicMap(json['stateKeys'], 'stateKeys');
    final visible = json['visible'];
    if (visible != null && visible is! bool) {
      throw const FormatException('visible must be a boolean');
    }

    return ModelPlacementBinding(
      placementId: pid,
      assetId: aid,
      roomId: rid,
      position: (
        x: posList[0].toDouble(),
        y: posList[1].toDouble(),
        z: posList[2].toDouble(),
      ),
      rotation: (
        rx: rotList[0].toDouble(),
        ry: rotList[1].toDouble(),
        rz: rotList[2].toDouble(),
      ),
      scale: scale,
      materialVariantKey: materialVariantKey,
      socketBindings: socketBindings,
      visible: visible as bool? ?? true,
      stateKeys: stateKeys,
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

  ModelPlacementBinding? getBinding(String placementId) =>
      _bindings[placementId];

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
    final rawList = stateJson['bindings'];
    if (rawList is! List) {
      throw const FormatException('bindings must be a list');
    }
    final restored = <String, ModelPlacementBinding>{};
    for (final value in rawList) {
      if (value is! Map<String, dynamic>) {
        throw const FormatException('binding entry must be an object');
      }
      final raw = value;
      final binding = ModelPlacementBinding.fromJson(raw);
      if (restored.containsKey(binding.placementId)) {
        throw FormatException('duplicate placement ${binding.placementId}');
      }
      restored[binding.placementId] = binding;
    }
    _bindings
      ..clear()
      ..addAll(restored);
  }
}

String _requiredString(Map<String, dynamic> json, String key) {
  final value = json[key];
  if (value is! String || value.isEmpty) {
    throw FormatException('$key must be a non-empty string');
  }
  return value;
}

String? _optionalNonEmptyString(Object? value, String key) {
  if (value == null) return null;
  if (value is! String || value.isEmpty) {
    throw FormatException('$key must be a non-empty string when present');
  }
  return value;
}

List<double> _finiteTriple(Object? value, String key) {
  if (value is! List ||
      value.length != 3 ||
      value.any((entry) => entry is! num || !entry.isFinite)) {
    throw FormatException('$key must be three finite numbers');
  }
  return value
      .map((entry) => (entry as num).toDouble())
      .toList(growable: false);
}

double _positiveFinite(Object? value, String key) {
  if (value is! num || !value.isFinite || value <= 0.0) {
    throw FormatException('$key must be finite and positive');
  }
  return value.toDouble();
}

Map<String, String> _stringMap(Object? value, String key) {
  if (value == null) return const {};
  if (value is! Map) throw FormatException('$key must be an object');
  final result = <String, String>{};
  for (final entry in value.entries) {
    if (entry.key is! String ||
        (entry.key as String).isEmpty ||
        entry.value is! String ||
        (entry.value as String).isEmpty) {
      throw FormatException('$key must contain non-empty string pairs');
    }
    result[entry.key as String] = entry.value as String;
  }
  return result;
}

Map<String, dynamic> _dynamicMap(Object? value, String key) {
  if (value == null) return const {};
  if (value is! Map) throw FormatException('$key must be an object');
  final result = <String, dynamic>{};
  for (final entry in value.entries) {
    if (entry.key is! String || (entry.key as String).isEmpty) {
      throw FormatException('$key keys must be non-empty strings');
    }
    result[entry.key as String] = entry.value;
  }
  return result;
}
