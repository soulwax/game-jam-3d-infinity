import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:pixeldart/assets/assets.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

Future<void> main() async {
  const root = 'web/res/models/living-room';
  final manifest = ModelPackageManifest.fromJson(
    jsonDecode(await File('$root/manifest.json').readAsString())
        as Map<String, dynamic>,
  );
  check(manifest.assetId == 'living-room', 'living-room asset ID is stable');
  check(manifest.sourceFormat == 'glb', 'normalized source format is glb');
  check(
    manifest.lods.length == 1 && manifest.lods.single == 'LOD0',
    'manifest declares only the packaged LOD',
  );
  check(
    manifest.provenance['promotion'] == 'approved',
    'package has an approved promotion record',
  );

  final package = await const ModelPackageLoader().load(
    ModelPackageSource(
      manifest: manifest,
      load: (path) async =>
          Uint8List.fromList(await File('$root/$path').readAsBytes()),
    ),
    limits: const ModelPackageLimits(requireQmeshPayloads: true),
  );
  check(
    package.payloads.length == manifest.parts.length,
    'every promoted part has one runtime payload',
  );
  final inventory =
      jsonDecode(await File('assets/house/inventory.json').readAsString())
          as Map<String, dynamic>;
  final assets = (inventory['assets'] as List).cast<Map<String, dynamic>>();
  final placements = (inventory['placements'] as List)
      .cast<Map<String, dynamic>>();
  final authoredAsset = assets.firstWhere(
    (asset) => asset['id'] == 'living-room',
  );
  final placement = placements.firstWhere(
    (entry) => entry['id'] == 'placement-living-fbx-room',
  );
  check(
    authoredAsset['source'] == 'res/models/living-room/manifest.json',
    'inventory resolves the promoted manifest',
  );
  check(
    placement['roomId'] == 'living-room' &&
        placement['assetId'] == 'living-room',
    'promoted package is placed in the reachable living room',
  );
  check(
    placement['role'] == 'renderer-reference',
    'promoted placement remains presentation-owned',
  );
  const porcelainRoot = 'web/res/models/porcelain-mermaid';
  final porcelainManifest = ModelPackageManifest.fromJson(
    jsonDecode(await File('$porcelainRoot/manifest.json').readAsString())
        as Map<String, dynamic>,
  );
  check(
    porcelainManifest.sourceFormat == 'obj' &&
        porcelainManifest.lods.length == 1 &&
        porcelainManifest.lods.single == 'LOD0',
    'OBJ promotion declares its shipped LOD0 contract',
  );
  final porcelain = await const ModelPackageLoader().load(
    ModelPackageSource(
      manifest: porcelainManifest,
      load: (path) async =>
          Uint8List.fromList(await File('$porcelainRoot/$path').readAsBytes()),
    ),
    limits: const ModelPackageLimits(requireQmeshPayloads: true),
  );
  check(
    porcelain.payloads.length == porcelainManifest.parts.length,
    'OBJ promotion has one runtime payload per part',
  );
  check(
    assets.any(
      (asset) =>
          asset['id'] == 'porcelain-mermaid' &&
          asset['source'] == 'res/models/porcelain-mermaid/manifest.json',
    ),
    'inventory resolves the promoted OBJ manifest',
  );
  check(
    placements.any(
      (entry) =>
          entry['assetId'] == 'porcelain-mermaid' &&
          entry['roomId'] == 'living-room',
    ),
    'promoted OBJ package has a reachable renderer-reference placement',
  );
  print(
    'Promoted living-room package passed: '
    '${manifest.parts.length} parts, ${manifest.lods.join(', ')}; '
    'porcelain OBJ ${porcelainManifest.parts.length} part.',
  );
}
