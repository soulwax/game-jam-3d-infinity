import 'dart:convert';

import 'house.dart';

/// Renderer-neutral authored house data loaded from assets/house/house.json.
///
/// The runtime House remains the simulation authority until the parity gate is
/// accepted. This object proves the authored scene agrees with that authority.
final class AuthoredHouseManifest {
  final String houseId;
  final String sourceRef;
  final double modelScale;
  final List<AuthoredRoom> rooms;
  final List<AuthoredPortal> portals;
  final List<AuthoredStair> stairs;
  final List<String> exteriorCells;

  const AuthoredHouseManifest({
    required this.houseId,
    required this.sourceRef,
    required this.modelScale,
    required this.rooms,
    required this.portals,
    required this.stairs,
    required this.exteriorCells,
  });

  factory AuthoredHouseManifest.decode(String source) =>
      AuthoredHouseManifest.fromJson(jsonDecode(source));

  factory AuthoredHouseManifest.fromJson(Object? raw) {
    final map = _object(raw, 'house manifest');
    final modelScale = map['modelScale'] is num
        ? (map['modelScale'] as num).toDouble()
        : 1.0;
    if (!modelScale.isFinite || modelScale <= 0) {
      throw const FormatException('modelScale must be positive and finite');
    }
    return AuthoredHouseManifest(
      houseId: _string(map, 'houseId'),
      sourceRef: _string(map, 'sourceRef'),
      modelScale: modelScale,
      rooms: _list(map, 'rooms')
          .map((value) => AuthoredRoom.fromJson(value, modelScale))
          .toList(growable: false),
      portals: _list(map, 'portals')
          .map((value) => AuthoredPortal.fromJson(value, modelScale))
          .toList(growable: false),
      stairs: _list(
        map,
        'stairs',
      ).map((value) => AuthoredStair.fromJson(value)).toList(growable: false),
      exteriorCells: _list(map, 'exteriorCells')
          .map((value) => value is String ? value : _bad('exterior cell'))
          .toList(growable: false),
    );
  }

  void validateAgainst(House house) {
    if (houseId != 'quarantine-house-main') {
      throw StateError('unexpected authored house $houseId');
    }
    if (sourceRef != 'lib/house/house.dart') {
      throw StateError('authored house source changed: $sourceRef');
    }
    if (rooms.length != house.rooms.length ||
        portals.length != house.portals.length) {
      throw StateError('authored/runtime room or portal count mismatch');
    }
    for (final authored in rooms) {
      final runtime = house.byId(authored.id);
      if (runtime == null) {
        throw StateError('authored room missing at runtime: ${authored.id}');
      }
      _checkVec3(
        authored.origin,
        runtime.origin.x,
        runtime.origin.y,
        runtime.origin.z,
        authored.id,
        'origin',
      );
      _checkVec3(
        authored.size,
        runtime.size.x,
        runtime.size.y,
        runtime.size.z,
        authored.id,
        'size',
      );
      if (authored.windows.length != runtime.windows.length) {
        throw StateError('window count mismatch for ${authored.id}');
      }
      for (final window in authored.windows) {
        final runtimeWindow = runtime.windows
            .where((item) => item.id == window.id)
            .firstOrNull;
        if (runtimeWindow == null) {
          throw StateError('authored window missing: ${window.id}');
        }
        _close(window.offset, runtimeWindow.offset, window.id, 'offset');
        _close(window.width, runtimeWindow.w, window.id, 'width');
        _close(window.height, runtimeWindow.h, window.id, 'height');
      }
    }
    for (final authored in portals) {
      final runtime = house.portalById(authored.id);
      if (runtime == null) {
        throw StateError('authored portal missing: ${authored.id}');
      }
      if (runtime.a != authored.a || runtime.b != authored.b) {
        throw StateError('portal endpoints mismatch for ${authored.id}');
      }
      _close(authored.width, runtime.width, authored.id, 'width');
      _close(authored.height, runtime.height, authored.id, 'height');
      if (authored.doorKit != runtime.doorKit) {
        throw StateError('door model mismatch for ${authored.id}');
      }
    }
    if (stairs.length != house.stairs.length ||
        stairs.single.portalId != house.stairs.single.portalId) {
      throw StateError('stair manifest mismatch');
    }
  }
}

final class AuthoredRoom {
  final String id;
  final List<double> origin;
  final List<double> size;
  final List<AuthoredWindow> windows;

  const AuthoredRoom({
    required this.id,
    required this.origin,
    required this.size,
    required this.windows,
  });

  factory AuthoredRoom.fromJson(Object? raw, double scale) {
    final map = _object(raw, 'room');
    return AuthoredRoom(
      id: _string(map, 'id'),
      origin: _scaledVec3(map['origin'], 'origin', scale),
      size: _scaledVec3(map['size'], 'size', scale),
      windows: _list(map, 'windows')
          .map((value) => AuthoredWindow.fromJson(value, scale))
          .toList(growable: false),
    );
  }
}

final class AuthoredWindow {
  final String id;
  final double offset;
  final double sill;
  final double width;
  final double height;

  const AuthoredWindow({
    required this.id,
    required this.offset,
    required this.sill,
    required this.width,
    required this.height,
  });

  factory AuthoredWindow.fromJson(Object? raw, double scale) {
    final map = _object(raw, 'window');
    return AuthoredWindow(
      id: _string(map, 'id'),
      offset: _number(map, 'offset') * scale,
      sill: _number(map, 'sill') * scale,
      width: _number(map, 'width') * scale,
      height: _number(map, 'height') * scale,
    );
  }
}

final class AuthoredPortal {
  final String id;
  final String a;
  final String b;
  final double width;
  final double height;
  final String? doorKit;

  const AuthoredPortal({
    required this.id,
    required this.a,
    required this.b,
    required this.width,
    required this.height,
    required this.doorKit,
  });

  factory AuthoredPortal.fromJson(Object? raw, double scale) {
    final map = _object(raw, 'portal');
    return AuthoredPortal(
      id: _string(map, 'id'),
      a: _string(map, 'a'),
      b: _string(map, 'b'),
      width: _number(map, 'width') * scale,
      height: _number(map, 'height') * scale,
      doorKit: map['doorKit'] is String ? map['doorKit'] as String : null,
    );
  }
}

final class AuthoredStair {
  final String id;
  final String portalId;

  const AuthoredStair({required this.id, required this.portalId});

  factory AuthoredStair.fromJson(Object? raw) {
    final map = _object(raw, 'stair');
    return AuthoredStair(
      id: _string(map, 'id'),
      portalId: _string(map, 'portalId'),
    );
  }
}

Map<String, dynamic> _object(Object? raw, String label) =>
    raw is Map<String, dynamic> ? raw : _bad('$label is not an object');

List<Object?> _list(Map<String, dynamic> map, String key) =>
    map[key] is List ? (map[key] as List<Object?>) : _bad('$key is not a list');

String _string(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is String && value.isNotEmpty
      ? value
      : _bad('$key is not a string');
}

double _number(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is num && value.isFinite
      ? value.toDouble()
      : _bad('$key is not finite');
}

List<double> _vec3(Object? value, String label) {
  if (value is! List ||
      value.length != 3 ||
      value.any((item) => item is! num || !item.isFinite)) {
    return _bad('$label is not a finite vec3');
  }
  return [for (final item in value) (item as num).toDouble()];
}

List<double> _scaledVec3(Object? value, String label, double scale) => [
  for (final component in _vec3(value, label)) component * scale,
];

Never _bad(String message) => throw FormatException(message);

void _close(double authored, double runtime, String id, String field) {
  if ((authored - runtime).abs() > 0.0001) {
    throw StateError('$id $field mismatch: $authored != $runtime');
  }
}

void _checkVec3(
  List<double> authored,
  double x,
  double y,
  double z,
  String id,
  String field,
) {
  _close(authored[0], x, id, '$field.x');
  _close(authored[1], y, id, '$field.y');
  _close(authored[2], z, id, '$field.z');
}
