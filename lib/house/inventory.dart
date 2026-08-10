import 'dart:convert';
import 'dart:math' as math;

import '../engine/math3.dart';
import 'house.dart';

/// Renderer-neutral, data-driven model inventory for the authored house.
///
/// Positions in the source file are canonical room-local metres. The house's
/// authored model scale is applied exactly once when a placement is resolved
/// for runtime use. Inventory entries never own collision or story state.
final class HouseInventory {
  final int schemaVersion;
  final String sourceRef;
  final double modelScale;
  final List<InventoryAsset> assets;
  final List<InventoryPlacement> placements;

  const HouseInventory({
    required this.schemaVersion,
    required this.sourceRef,
    required this.modelScale,
    required this.assets,
    required this.placements,
  });

  factory HouseInventory.decode(String source) =>
      HouseInventory.fromJson(jsonDecode(source));

  factory HouseInventory.fromJson(Object? raw) {
    final map = _object(raw, 'house inventory');
    final scale = _number(map, 'modelScale');
    return HouseInventory(
      schemaVersion: _integer(map, 'schemaVersion'),
      sourceRef: _string(map, 'sourceRef'),
      modelScale: scale,
      assets: _list(
        map,
        'assets',
      ).map(InventoryAsset.fromJson).toList(growable: false),
      placements: _list(
        map,
        'placements',
      ).map(InventoryPlacement.fromJson).toList(growable: false),
    );
  }

  Iterable<InventoryPlacement> placementsFor(String roomId) =>
      placements.where((placement) => placement.roomId == roomId);

  Iterable<InventoryPlacement> get pickablePlacements =>
      placements.where((placement) => placement.pickable);

  InventoryPlacement? pickableForFocusId(String focusId) {
    for (final placement in pickablePlacements) {
      if (placement.focusId == focusId) return placement;
    }
    return null;
  }

  InventoryAsset assetFor(String assetId) => assets.firstWhere(
    (asset) => asset.id == assetId,
    orElse: () => throw StateError('inventory asset missing: $assetId'),
  );

  /// Checks references, transforms, room-local bounds, socket uniqueness and
  /// the scale seam against the simulation-owned house.
  void validateAgainst(House house) {
    if (schemaVersion != 1) {
      throw StateError('unsupported house inventory schema $schemaVersion');
    }
    if (sourceRef != 'assets/house/house.json') {
      throw StateError('inventory source changed: $sourceRef');
    }
    if ((modelScale - 2.25).abs() > 0.0001) {
      throw StateError('inventory modelScale must remain 2.25');
    }
    final assetIds = <String>{};
    for (final asset in assets) {
      if (!assetIds.add(asset.id)) {
        throw StateError('duplicate inventory asset ${asset.id}');
      }
      if (asset.bounds.min.x > asset.bounds.max.x ||
          asset.bounds.min.y > asset.bounds.max.y ||
          asset.bounds.min.z > asset.bounds.max.z) {
        throw StateError('invalid bounds for inventory asset ${asset.id}');
      }
    }
    final placementIds = <String>{};
    final sockets = <String>{};
    final focusIds = <String>{};
    for (final placement in placements) {
      if (!placementIds.add(placement.id)) {
        throw StateError('duplicate inventory placement ${placement.id}');
      }
      final room = house.byId(placement.roomId);
      if (room == null) {
        throw StateError(
          'inventory placement ${placement.id} references ${placement.roomId}',
        );
      }
      final asset = assetFor(placement.assetId);
      if (placement.pickable && placement.focusId != null) {
        final focusId = placement.focusId!;
        if (!_stableFocusId.hasMatch(focusId)) {
          throw StateError(
            'invalid inventory focusId ${placement.id}: $focusId',
          );
        }
        if (!focusIds.add(focusId)) {
          throw StateError('duplicate inventory focusId $focusId');
        }
      }
      if (placement.clearanceRadius < 0 ||
          !placement.clearanceRadius.isFinite) {
        throw StateError('invalid clearance for ${placement.id}');
      }
      if (placement.socket != null &&
          !sockets.add('${placement.roomId}:${placement.socket}')) {
        throw StateError(
          'duplicate inventory socket ${placement.roomId}:${placement.socket}',
        );
      }
      final runtimePosition = placement.runtimePosition(modelScale);
      final extents = placement.runtimeExtents(asset, modelScale);
      final vertical = placement.runtimeVerticalBounds(asset, modelScale);
      final margin = 0.43 + placement.clearanceRadius;
      if (runtimePosition.x - extents.x < -margin ||
          runtimePosition.x + extents.x > room.size.x + margin ||
          runtimePosition.z - extents.z < -margin ||
          runtimePosition.z + extents.z > room.size.z + margin ||
          runtimePosition.y + vertical.y > room.size.y + margin ||
          runtimePosition.y + vertical.x < -margin) {
        throw StateError(
          'inventory placement ${placement.id} escapes ${room.id}',
        );
      }
    }
  }
}

final _stableFocusId = RegExp(r'^[a-z0-9][a-z0-9._-]*$');

final class InventoryAsset {
  final String id;
  final String kind;
  final String source;
  final String proxy;
  final String pivot;
  final InventoryBounds bounds;

  const InventoryAsset({
    required this.id,
    required this.kind,
    required this.source,
    required this.proxy,
    required this.pivot,
    required this.bounds,
  });

  factory InventoryAsset.fromJson(Object? raw) {
    final map = _object(raw, 'inventory asset');
    return InventoryAsset(
      id: _string(map, 'id'),
      kind: _string(map, 'kind'),
      source: _string(map, 'source'),
      proxy: _string(map, 'proxy'),
      pivot: _string(map, 'pivot'),
      bounds: InventoryBounds.fromJson(map['bounds']),
    );
  }
}

final class InventoryPlacement {
  final String id;
  final String roomId;
  final String assetId;
  final String role;
  final String? socket;
  final InventoryTransform transform;
  final String visibilityLayer;
  final String? stateKey;
  final bool pickable;
  final String? focusId;
  final double clearanceRadius;

  const InventoryPlacement({
    required this.id,
    required this.roomId,
    required this.assetId,
    required this.role,
    required this.socket,
    required this.transform,
    required this.visibilityLayer,
    required this.stateKey,
    required this.pickable,
    required this.focusId,
    required this.clearanceRadius,
  });

  factory InventoryPlacement.fromJson(Object? raw) {
    final map = _object(raw, 'inventory placement');
    final visibility = _object(map['visibility'], 'placement visibility');
    final interaction = _object(map['interaction'], 'placement interaction');
    final clearance = map['clearance'];
    return InventoryPlacement(
      id: _string(map, 'id'),
      roomId: _string(map, 'roomId'),
      assetId: _string(map, 'assetId'),
      role: _string(map, 'role'),
      socket: map['socket'] is String ? map['socket'] as String : null,
      transform: InventoryTransform.fromJson(map['transform']),
      visibilityLayer: _string(visibility, 'layer'),
      stateKey: visibility['stateKey'] is String
          ? visibility['stateKey'] as String
          : null,
      pickable: interaction['pickable'] == true,
      focusId: interaction['focusId'] is String
          ? interaction['focusId'] as String
          : null,
      clearanceRadius: clearance is Map<String, dynamic>
          ? _number(clearance, 'radius')
          : 0,
    );
  }

  Vec3 runtimePosition(double modelScale) => transform.position * modelScale;

  Vec3 runtimeExtents(InventoryAsset asset, double modelScale) {
    final local = asset.bounds.halfExtents;
    final scaleX = transform.scale.x * modelScale;
    final scaleY = transform.scale.y * modelScale;
    final scaleZ = transform.scale.z * modelScale;
    final radians = transform.rotation.y * math.pi / 180;
    final c = math.cos(radians).abs();
    final s = math.sin(radians).abs();
    return Vec3(
      (local.x * scaleX) * c + (local.z * scaleZ) * s,
      local.y * scaleY,
      (local.x * scaleX) * s + (local.z * scaleZ) * c,
    );
  }

  /// Y is floor-anchored in the authored inventory. Keeping these as signed
  /// bounds lets tall wall objects sit at a precise sill/eye-line without
  /// pretending their pivot is at geometric centre.
  Vec3 runtimeVerticalBounds(InventoryAsset asset, double modelScale) {
    final scaleY = transform.scale.y * modelScale;
    return Vec3(asset.bounds.min.y * scaleY, asset.bounds.max.y * scaleY, 0);
  }
}

final class InventoryTransform {
  final Vec3 position;
  final Vec3 rotation;
  final Vec3 scale;

  const InventoryTransform({
    required this.position,
    required this.rotation,
    required this.scale,
  });

  factory InventoryTransform.fromJson(Object? raw) {
    final map = _object(raw, 'inventory transform');
    final scale = _vec3(map['scale'], 'transform.scale');
    if (scale.x <= 0 || scale.y <= 0 || scale.z <= 0) {
      throw const FormatException('transform.scale must be positive');
    }
    return InventoryTransform(
      position: _vec3(map['position'], 'transform.position'),
      rotation: _vec3(map['rotation'], 'transform.rotation'),
      scale: scale,
    );
  }
}

final class InventoryBounds {
  final Vec3 min;
  final Vec3 max;

  const InventoryBounds({required this.min, required this.max});

  factory InventoryBounds.fromJson(Object? raw) {
    final map = _object(raw, 'inventory bounds');
    return InventoryBounds(
      min: _vec3(map['min'], 'bounds.min'),
      max: _vec3(map['max'], 'bounds.max'),
    );
  }

  Vec3 get halfExtents => Vec3(
    (max.x - min.x).abs() * 0.5,
    (max.y - min.y).abs() * 0.5,
    (max.z - min.z).abs() * 0.5,
  );
}

Map<String, dynamic> _object(Object? raw, String label) =>
    raw is Map<String, dynamic> ? raw : _bad('$label is not an object');

List<Object?> _list(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is List ? List<Object?>.from(value) : _bad('$key is not a list');
}

String _string(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is String && value.isNotEmpty
      ? value
      : _bad('$key is not a string');
}

int _integer(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is int ? value : _bad('$key is not an integer');
}

double _number(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is num && value.isFinite
      ? value.toDouble()
      : _bad('$key is not finite');
}

Vec3 _vec3(Object? raw, String label) {
  if (raw is! List ||
      raw.length != 3 ||
      raw.any((value) => value is! num || !value.isFinite)) {
    return _bad('$label is not a finite vec3');
  }
  return Vec3(
    (raw[0] as num).toDouble(),
    (raw[1] as num).toDouble(),
    (raw[2] as num).toDouble(),
  );
}

Never _bad(String message) => throw FormatException(message);
