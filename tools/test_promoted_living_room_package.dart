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
    RegExp(r'^[0-9a-f]{64}$').hasMatch(manifest.packageHash),
    'living-room package hash is a canonical SHA-256 digest',
  );
  check(
    manifest.lods.length == 1 && manifest.lods.single == 'LOD0',
    'manifest declares only the packaged LOD',
  );
  check(
    manifest.provenance['promotion'] == 'approved',
    'package has an approved promotion record',
  );
  check(
    manifest.provenance['licenseId'] == 'owner-authored-fbx-room-source',
    'package has the owner-authored FBX license record',
  );
  check(
    manifest.provenance['originalSourceFormat'] == 'fbx' &&
        manifest.provenance['originalSourceSha256'] ==
            '383a2269f797231bd38d5ab04d1bab685c0526b43b2cb920442d91b85bd96359',
    'package pins the original FBX source hash',
  );
  final roomProvenance = jsonDecode(
    await File('assets/house/models/living-room/PROVENANCE.json').readAsString(),
  ) as Map<String, dynamic>;
  final roomSource = roomProvenance['source'] as Map<String, dynamic>;
  final roomRuntime = roomProvenance['runtimePackage'] as Map<String, dynamic>;
  check(
    roomProvenance['license'] == 'OWNER_AUTHORED_SOURCE' &&
        roomProvenance['licenseId'] == 'owner-authored-fbx-room-source' &&
        roomSource['format'] == 'fbx' &&
        roomSource['offlineOnly'] == true &&
        roomSource['sha256'] ==
            '383a2269f797231bd38d5ab04d1bab685c0526b43b2cb920442d91b85bd96359' &&
        roomRuntime['packageSha256'] == manifest.packageHash,
    'FBX ownership and normalized runtime provenance are consistent',
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
  check(
    RegExp(r'^[0-9a-f]{64}$').hasMatch(porcelainManifest.packageHash) &&
        porcelainManifest.provenance['licenseId'] ==
            'owner-authored-porcelain-source' &&
        porcelainManifest.provenance['sourceSha256'] ==
            '156ffab0ccd6494615daef6f7b485464cfd02e074a533e08baf366f79f58a097',
    'OBJ promotion carries canonical hash and owner-authored provenance',
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
