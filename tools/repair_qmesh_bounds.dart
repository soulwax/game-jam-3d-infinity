#!/usr/bin/env dart

import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:pixeldart/assets/packages/model_package_emitter.dart';
import 'package:pixeldart/assets/packages/model_package_manifest.dart';

const _headerBytes = 36;

/// Repairs only the bounds metadata in an already-promoted QMSH package.
///
/// Vertex payloads are never changed. This is useful for packages emitted by
/// older importers which copied a combined scene bound into every part.
Future<void> main(List<String> args) async {
  if (args.length != 1) {
    stderr.writeln('usage: dart run tools/repair_qmesh_bounds.dart <package-dir>');
    exitCode = 64;
    return;
  }
  final root = Directory(args.single);
  final manifestFile = File('${root.path}/manifest.json');
  if (!manifestFile.existsSync()) throw StateError('missing manifest.json');
  final manifest = jsonDecode(manifestFile.readAsStringSync()) as Map<String, dynamic>;
  final parts = (manifest['parts'] as List).cast<Map<String, dynamic>>();
  final combinedMin = [double.infinity, double.infinity, double.infinity];
  final combinedMax = [double.negativeInfinity, double.negativeInfinity, double.negativeInfinity];

  for (final part in parts) {
    final lod = (part['lodFiles'] as Map)['LOD0'] as String;
    final file = File('${root.path}/$lod');
    final bytes = file.readAsBytesSync();
    if (bytes.length < _headerBytes) throw StateError('$lod is truncated');
    final view = ByteData.sublistView(bytes);
    final stride = view.getUint16(6, Endian.little);
    final count = view.getUint32(8, Endian.little);
    if (view.getUint16(4, Endian.little) != 2 || stride != 18) {
      throw StateError('$lod is not a QMSH v2 stride-18 surface payload');
    }
    if (bytes.length != _headerBytes + count * stride * 4) {
      throw StateError('$lod has an invalid payload length');
    }
    final min = [double.infinity, double.infinity, double.infinity];
    final max = [double.negativeInfinity, double.negativeInfinity, double.negativeInfinity];
    for (var vertex = 0; vertex < count; vertex++) {
      final base = _headerBytes + vertex * stride * 4;
      for (var axis = 0; axis < 3; axis++) {
        final value = view.getFloat32(base + axis * 4, Endian.little);
        if (!value.isFinite) throw StateError('$lod has a non-finite position');
        min[axis] = math.min(min[axis], value);
        max[axis] = math.max(max[axis], value);
      }
    }
    for (var axis = 0; axis < 3; axis++) {
      view.setFloat32(12 + axis * 4, min[axis], Endian.little);
      view.setFloat32(24 + axis * 4, max[axis], Endian.little);
      combinedMin[axis] = math.min(combinedMin[axis], min[axis]);
      combinedMax[axis] = math.max(combinedMax[axis], max[axis]);
    }
    part['bounds'] = {'min': min, 'max': max};
    part['boundsSource'] = 'vertex-payload-v1';
    file.writeAsBytesSync(bytes, flush: true);
  }
  // Keep the public manifest shape backward-compatible: ModelPackageManifest
  // consumes combinedBounds as [minX, minY, minZ, maxX, maxY, maxZ].
  manifest['combinedBounds'] = [...combinedMin, ...combinedMax];
  manifest['combinedBoundsSource'] = 'vertex-payload-v1';
  // The loader hashes the canonical manifest (which intentionally ignores
  // editor-only per-part metadata) plus sorted path names and payload bytes.
  // Use the same implementation here so the repair tool cannot drift from
  // the runtime contract.
  final parsed = ModelPackageManifest.fromJson(manifest);
  manifest['packageHash'] = ModelPackageEmitter.computePackageHash(
    parsed,
    {
      for (final part in parts)
        for (final path in (part['lodFiles'] as Map).values)
          path as String: Uint8List.fromList(File('${root.path}/$path').readAsBytesSync()),
    },
  );
  manifestFile.writeAsStringSync('${const JsonEncoder.withIndent('  ').convert(manifest)}\n');
  stdout.writeln('repaired ${parts.length} QMSH part bounds');
  stdout.writeln('packageHash: ${manifest['packageHash']}');
}
