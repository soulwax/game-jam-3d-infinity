import 'dart:convert';
import 'dart:io';

import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/surface_materials.dart';

Never fail(String message) => throw StateError('house materials: $message');

void require(bool condition, String message) {
  if (!condition) fail(message);
}

Map<String, dynamic> readObject(String path) {
  final file = File(path);
  require(file.existsSync(), 'missing $path');
  final decoded = jsonDecode(file.readAsStringSync());
  require(decoded is Map<String, dynamic>, '$path is not an object');
  return decoded as Map<String, dynamic>;
}

void main() {
  final root = Directory.current.path;
  final house = House(42);
  final roomIds = {for (final room in house.rooms) room.id};
  final surfaceIds = <String>{};
  for (final room in house.rooms) {
    surfaceIds
      ..add(room.surfaceWall)
      ..add(room.surfaceFloor)
      ..add(room.surfaceCeiling);
  }
  require(
    surfaceIds.length == HouseSurfaceMaterials.all.length,
    'palette does not cover every canonical surface ID',
  );
  for (final id in surfaceIds) {
    final material = HouseSurfaceMaterials.forId(id);
    require(material.id == id, '$id has mismatched material identity');
    require(
      material.roughness >= 0 && material.roughness <= 1,
      '$id roughness',
    );
    require(material.uvMetres > 0, '$id UV density');
  }

  final authored = readObject('$root/assets/house/materials.json');
  require(
    authored['format'] == 'house-surface-materials-v1',
    'material format drifted',
  );
  final entries = authored['materials'];
  require(entries is List, 'material entries are not a list');
  final materialEntries = entries as List<dynamic>;
  require(
    materialEntries.length == HouseSurfaceMaterials.all.length,
    'material count drifted',
  );
  final textureManifest = readObject('$root/web/res/manifest.json')['tex'];
  require(
    textureManifest is Map<String, dynamic>,
    'texture manifest missing tex map',
  );
  final textureMap = textureManifest as Map<String, dynamic>;

  final authoredIds = <String>{};
  for (final raw in materialEntries) {
    require(raw is Map<String, dynamic>, 'material entry is not an object');
    final entry = raw as Map<String, dynamic>;
    final id = entry['id'];
    final textureKey = entry['textureKey'];
    require(id is String && id.isNotEmpty, 'material has no ID');
    require(authoredIds.add(id), 'duplicate material $id');
    require(
      HouseSurfaceMaterials.all.containsKey(id),
      'unknown authored material $id',
    );
    require(
      textureKey is String && textureMap.containsKey(textureKey),
      '$id texture is not packaged',
    );
  }
  require(
    authoredIds.length == surfaceIds.length,
    'authored material IDs incomplete',
  );

  final houseJson = readObject('$root/assets/house/house.json');
  require(
    houseJson['surfaceMaterialsPath'] == 'assets/house/materials.json',
    'house does not point at surface materials',
  );
  final webPath = '$root/web/res/house/materials.json';
  require(
    File(webPath).readAsStringSync() ==
        File('$root/assets/house/materials.json').readAsStringSync(),
    'web material mirror drifted',
  );
  require(roomIds.length == 8, 'canonical room count changed unexpectedly');
  print(
    'House material palette validated: ${surfaceIds.length} surfaces, packaged texture references intact.',
  );
}
