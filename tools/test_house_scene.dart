import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:quarantine/house/exterior_mesh.dart';
import 'package:quarantine/house/exterior_pvs.dart';

Never fail(String message) => throw StateError('house scene: $message');

Map<String, dynamic> objectAt(String path) {
  final file = File(path);
  if (!file.existsSync()) fail('missing $path');
  final value = jsonDecode(file.readAsStringSync());
  if (value is! Map<String, dynamic>) fail('$path is not an object');
  return value;
}

List<Object?> listAt(Map<String, dynamic> object, String key, String path) {
  final value = object[key];
  if (value is! List) fail('$path.$key is not a list');
  return value;
}

String stringAt(Map<String, dynamic> object, String key, String path) {
  final value = object[key];
  if (value is! String || value.isEmpty) fail('$path.$key is not a string');
  return value;
}

void require(bool condition, String message) {
  if (!condition) fail(message);
}

void main() {
  final root = Directory.current.path;
  final housePath = '$root/assets/house/house.json';
  final house = objectAt(housePath);
  final exteriorMesh = house['exteriorMesh'];
  if (exteriorMesh is! Map<String, dynamic>) {
    fail('house has no exterior mesh contract');
  }
  require(exteriorMesh['format'] == 'QHMX', 'exterior mesh format drifted');
  require(exteriorMesh['version'] == 1, 'exterior mesh version drifted');
  require(
    exteriorMesh['viewOnly'] == true,
    'exterior mesh must remain view-only',
  );
  require(
    exteriorMesh['wallThickness'] == 0.42,
    'exterior wall thickness drifted',
  );
  final materialsPath = '$root/${exteriorMesh['materialsPath']}';
  final materials = objectAt(materialsPath);
  final materialSlots = listAt(materials, 'slots', materialsPath);
  require(
    materialSlots.length == 8,
    'exterior material table must have 8 slots',
  );
  final exteriorMeshPath = '$root/${exteriorMesh['path']}';
  final exteriorFile = File(exteriorMeshPath);
  require(exteriorFile.existsSync(), 'missing $exteriorMeshPath');
  final exterior = decodeHouseExteriorMesh(
    Uint8List.fromList(exteriorFile.readAsBytesSync()),
  );
  require(
    exterior.triangleCount > 1500,
    'exterior shell has too few triangles',
  );
  require(
    exterior.indexReuse > 0.25,
    'exterior shell is not indexed efficiently',
  );
  final rooms = listAt(house, 'rooms', housePath);
  final expectedRooms = {
    for (final raw in rooms)
      stringAt(raw as Map<String, dynamic>, 'id', housePath),
  };
  final expectedCells = {
    for (final raw in listAt(house, 'exteriorCells', housePath)) raw as String,
  };
  require(
    expectedCells.length == ExteriorPvs.allCells.length &&
        expectedCells.containsAll(ExteriorPvs.allCells),
    'house exterior cells drifted from the PVS contract',
  );

  final kitIds = <String>{};
  for (final family in ['structure', 'openings', 'exterior']) {
    final path = '$root/assets/house/kits/$family.json';
    final kit = objectAt(path);
    for (final raw in listAt(kit, 'modules', path)) {
      final module = raw as Map<String, dynamic>;
      require(kitIds.add(stringAt(module, 'id', path)), 'duplicate kit id');
    }
  }

  final placementIds = <String>{};
  for (final roomId in expectedRooms) {
    final path = '$root/assets/house/rooms/$roomId/base.json';
    final base = objectAt(path);
    require(stringAt(base, 'roomId', path) == roomId, '$path roomId mismatch');
    require(base['viewOnly'] != true, '$path is incorrectly marked view-only');
    require(
      listAt(base, 'architecture', path).isNotEmpty,
      '$path has no architecture',
    );
    require(
      base['focal'] is Map<String, dynamic>,
      '$path has no focal composition',
    );
    final route = base['routeClearance'];
    require(route is Map<String, dynamic>, '$path has no route clearance');
    final routeMap = route as Map<String, dynamic>;
    require(routeMap['capsuleRadius'] == 0.3, '$path capsule radius drifted');
    require(
      ((routeMap['minimumRouteWidth'] as num?)?.toDouble() ?? 0) >= 0.75,
      '$path route is too narrow',
    );
    for (final raw in listAt(base, 'architecture', path)) {
      require(kitIds.contains(raw), '$path references unknown kit $raw');
    }
    for (final raw in listAt(base, 'placements', path)) {
      final placement = raw as Map<String, dynamic>;
      require(
        placementIds.add(stringAt(placement, 'id', path)),
        'duplicate placement ${placement['id']}',
      );
      require(
        stringAt(placement, 'role', path).isNotEmpty,
        '$path placement has no role',
      );
      final asset = placement['asset'];
      if (asset != null) {
        require(
          asset is String && asset.isNotEmpty,
          '$path placement asset is invalid',
        );
      }
    }
  }

  final cellIds = <String>{};
  for (final cellId in expectedCells) {
    final path = '$root/assets/house/exterior/$cellId/base.json';
    final base = objectAt(path);
    require(
      cellIds.add(stringAt(base, 'cellId', path)),
      'duplicate exterior cell $cellId',
    );
    require(base['cellId'] == cellId, '$path cellId mismatch');
    require(base['viewOnly'] == true, '$path must be view-only');
    require(
      listAt(base, 'cameraIds', path).isNotEmpty,
      '$path has no camera coverage',
    );
    final kits = base['kits'];
    if (kits is List) {
      require(kits.isNotEmpty, '$path has no kit list');
      for (final raw in kits) {
        require(kitIds.contains(raw), '$path references unknown kit $raw');
      }
    } else {
      require(
        base['canonicalWindows'] is Map<String, dynamic>,
        '$path without kits must declare canonicalWindows',
      );
    }
    for (final raw in listAt(base, 'placements', path)) {
      final placement = raw as Map<String, dynamic>;
      require(
        placementIds.add(stringAt(placement, 'id', path)),
        'duplicate placement ${placement['id']}',
      );
      require(
        stringAt(placement, 'role', path).isNotEmpty,
        '$path placement has no role',
      );
      require(
        stringAt(placement, 'asset', path).isNotEmpty,
        '$path placement has no asset',
      );
    }
  }
  require(
    cellIds.length == expectedCells.length,
    'not every exterior cell has a base',
  );
  print(
    'house scene: ${expectedRooms.length} room bases, ${cellIds.length} exterior cells, ${placementIds.length} unique proxy placements pass',
  );
}
