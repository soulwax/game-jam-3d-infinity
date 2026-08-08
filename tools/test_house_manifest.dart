import 'dart:convert';
import 'dart:io';

import 'package:quarantine/house/authored_manifest.dart';
import 'package:quarantine/house/house.dart';

Never fail(String message) => throw StateError('house manifest: $message');

Map<String, dynamic> readObject(String path) {
  final file = File(path);
  if (!file.existsSync()) fail('missing $path');
  final decoded = jsonDecode(file.readAsStringSync());
  if (decoded is! Map<String, dynamic>) fail('$path is not an object');
  return decoded;
}

List<dynamic> listOf(Map<String, dynamic> object, String key) {
  final value = object[key];
  if (value is! List) fail('missing list $key');
  return value;
}

String stringOf(Map<String, dynamic> object, String key) {
  final value = object[key];
  if (value is! String || value.isEmpty) fail('missing string $key');
  return value;
}

void require(bool condition, String message) {
  if (!condition) fail(message);
}

void main() {
  final root = Directory.current.path;
  final housePath = '$root/assets/house/house.json';
  final authored = AuthoredHouseManifest.decode(
    File(housePath).readAsStringSync(),
  );
  authored.validateAgainst(House(42));
  final house = readObject(housePath);
  require(
    stringOf(house, 'houseId') == 'quarantine-house-main',
    'wrong house id',
  );
  require(
    stringOf(house, 'sourceRef') == 'lib/house/house.dart',
    'wrong canonical source',
  );
  final modelScale = (house['modelScale'] as num?)?.toDouble() ?? 1.0;
  require(modelScale == 1.5, 'MVP model scale must be 1.5');
  require(
    stringOf(house, 'inventoryPath') == 'assets/house/inventory.json',
    'house inventory path drifted',
  );
  require(
    stringOf(house, 'soundscapePath') == 'assets/house/soundscape.json',
    'house soundscape path drifted',
  );

  final rooms = listOf(house, 'rooms');
  final portals = listOf(house, 'portals');
  final stairs = listOf(house, 'stairs');
  require(rooms.length == 8, 'expected 8 rooms, got ${rooms.length}');
  require(portals.length == 9, 'expected 9 portals, got ${portals.length}');
  require(stairs.length == 1, 'expected one stair transition');

  final roomIds = <String>{};
  var windowCount = 0;
  for (final raw in rooms) {
    if (raw is! Map<String, dynamic>) fail('room is not an object');
    final id = stringOf(raw, 'id');
    require(roomIds.add(id), 'duplicate room $id');
    final origin = listOf(raw, 'origin');
    final size = listOf(raw, 'size');
    require(
      origin.length == 3 && size.length == 3,
      '$id needs vec3 origin/size',
    );
    require(
      size.every((value) => value is num && value > 0),
      '$id has invalid size',
    );
    final windows = listOf(raw, 'windows');
    final portalIds = listOf(raw, 'portalIds');
    windowCount += windows.length;
    require(portalIds.isNotEmpty, '$id has no portal list');
    require(
      raw['focalComposition'] is Map<String, dynamic>,
      '$id has no focal composition',
    );
    final basePath = '$root/assets/house/rooms/$id/base.json';
    final base = readObject(basePath);
    require(base['roomId'] == id, '$basePath roomId mismatch');
    require(
      base['status'] == 'proxy-composition-v0',
      '$basePath is not a proxy composition',
    );
  }
  require(
    windowCount == 9,
    'expected 9 inside-observable windows, got $windowCount',
  );

  final portalIds = <String>{};
  final portalEndpoints = <String, Set<String>>{};
  for (final raw in portals) {
    if (raw is! Map<String, dynamic>) fail('portal is not an object');
    final id = stringOf(raw, 'id');
    require(portalIds.add(id), 'duplicate portal $id');
    final a = stringOf(raw, 'a');
    final b = stringOf(raw, 'b');
    require(
      a == 'outside' || roomIds.contains(a),
      '$id has unknown endpoint $a',
    );
    require(
      b == 'outside' || roomIds.contains(b),
      '$id has unknown endpoint $b',
    );
    require(
      raw['width'] is num && (raw['width'] as num) > 0,
      '$id has invalid width',
    );
    require(
      raw['height'] is num && (raw['height'] as num) > 0,
      '$id has invalid height',
    );
    final doorKit = raw['doorKit'];
    if (id == 'hall-landing') {
      require(
        doorKit == null,
        '$id stair transition must not have a door leaf',
      );
    } else {
      require(doorKit is String && doorKit.isNotEmpty, '$id has no door model');
    }
    portalEndpoints[id] = {a, b};
  }
  for (final raw in rooms) {
    final room = raw as Map<String, dynamic>;
    final id = room['id'] as String;
    for (final rawPortalId in listOf(room, 'portalIds')) {
      final portalId = rawPortalId as String;
      require(
        portalIds.contains(portalId),
        '$id references unknown portal $portalId',
      );
      require(
        portalEndpoints[portalId]!.contains(id),
        '$portalId does not touch $id',
      );
    }
  }

  final stair = stairs.single as Map<String, dynamic>;
  require(stair['portalId'] == 'hall-landing', 'stair portal mismatch');
  require(
    jsonEncode(stair['landingHeights']) == jsonEncode([1.4, 2.8, 4.2]),
    'stair landing heights drifted',
  );

  final routePath = '$root/assets/house/verification/routes.json';
  final routes = readObject(routePath);
  for (final raw in listOf(routes, 'routes')) {
    if (raw is! Map<String, dynamic>) fail('route is not an object');
    final routeId = stringOf(raw, 'id');
    final routeRooms = listOf(raw, 'rooms').cast<String>();
    final routePortals = listOf(raw, 'portals').cast<String>();
    require(
      routeRooms.length == routePortals.length + 1,
      '$routeId route length mismatch',
    );
    for (var i = 0; i < routePortals.length; i++) {
      require(
        portalIds.contains(routePortals[i]),
        '$routeId references ${routePortals[i]}',
      );
      final endpoints = portalEndpoints[routePortals[i]]!;
      require(
        endpoints.contains(routeRooms[i]) &&
            endpoints.contains(routeRooms[i + 1]),
        '$routeId portal ${routePortals[i]} does not connect consecutive rooms',
      );
    }
  }

  for (final family in ['structure', 'openings', 'exterior']) {
    final path = '$root/assets/house/kits/$family.json';
    final kit = readObject(path);
    require(listOf(kit, 'modules').isNotEmpty, '$family kit has no modules');
  }
  print(
    'house manifest: 8 rooms, 9 portals, 9 windows, 1 stair, 4 routes, and 3 kit families pass',
  );
}
