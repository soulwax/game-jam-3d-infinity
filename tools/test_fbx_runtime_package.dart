import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:pixeldart/rendering/assets/model_cache.dart';
import 'package:quarantine/engine/fbx_runtime_package.dart';

Future<void> main(List<String> args) async {
  if (args.length != 1) throw ArgumentError('usage: ... <generated-dir>');
  final root = Directory(args.single);
  final manifest =
      jsonDecode(
            File('${root.path}/generated-manifest.json').readAsStringSync(),
          )
          as Map<String, dynamic>;
  final package = FbxRuntimePackage.fromManifest(manifest);
  final cache = ModelCache();
  final decoded = await package.decodeLod0(cache, (path) async {
    return Uint8List.fromList(File('${root.path}/$path').readAsBytesSync());
  });
  if (decoded.length != package.parts.length) {
    throw StateError('runtime package did not decode every part');
  }
  for (final mesh in decoded) {
    cache.release(mesh);
  }
  if (cache.cachedCount != 0)
    throw StateError('runtime package leaked cache entries');
  final lod1 = await package.decodeLod(cache, 'LOD1', (path) async {
    return Uint8List.fromList(File('${root.path}/$path').readAsBytesSync());
  });
  for (final mesh in lod1) {
    cache.release(mesh);
  }
  if (cache.cachedCount != 0) throw StateError('LOD1 cache references leaked');
  print(
    'FBX runtime package passed: ${package.assetId}, '
    '${decoded.length} LOD0 + ${lod1.length} LOD1 parts',
  );
}
