#!/usr/bin/env dart

import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:pixeldart/rendering/assets/model_cache.dart';

void main(List<String> args) {
  if (args.length != 1) {
    stderr.writeln(
      'usage: dart run tools/test_fbx_normalized_package.dart <generated-dir>',
    );
    exitCode = 64;
    return;
  }
  final root = Directory(args.single);
  final manifestFile = File('${root.path}/generated-manifest.json');
  if (!manifestFile.existsSync()) {
    throw StateError('missing generated manifest');
  }
  final manifest =
      jsonDecode(manifestFile.readAsStringSync()) as Map<String, dynamic>;
  final parts = manifest['parts'] as List<dynamic>;
  final cache = ModelCache();
  var triangles = 0;
  for (final raw in parts) {
    final part = raw as Map<String, dynamic>;
    final file = File('${root.path}/${part['mesh']}');
    if (!file.existsSync()) throw StateError('missing part ${part['mesh']}');
    final cached = cache.decodeAndCache(
      Uint8List.fromList(file.readAsBytesSync()),
    );
    triangles +=
        cached.deduplicated.vertices.length ~/
        cached.deduplicated.layout.strideFloats ~/
        3;
    cache.release(cached);
  }
  if (cache.cachedCount != 0) throw StateError('QMSH cache leaked entries');
  print(
    'FBX normalized package passed: ${parts.length} parts, $triangles triangles',
  );
}
