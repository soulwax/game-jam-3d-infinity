import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:quarantine/presentation/model_package_index.dart';
import 'package:pixeldart/assets/assets.dart';
import 'package:pixeldart/rendering/assets/qmesh.dart';

String? option(List<String> args, String name) {
  final index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : null;
}

Future<void> main(List<String> args) async {
  final rootPath = option(args, '--root');
  final outputPath = option(args, '--out');
  if (rootPath == null || outputPath == null) {
    stderr.writeln(
      'usage: build_promoted_model_index.dart --root DIRECTORY --out FILE',
    );
    exitCode = 64;
    return;
  }
  final root = Directory(rootPath);
  if (!root.existsSync()) {
    stderr.writeln('package root does not exist');
    exitCode = 66;
    return;
  }
  final entries = <PresentationModelPackageIndexEntry>[];
  for (final entity in root.listSync(followLinks: false)) {
    if (entity is! Directory) continue;
    final manifestFile = File('${entity.path}/manifest.json');
    if (!manifestFile.existsSync()) {
      throw FormatException(
        'promoted package is missing manifest.json: ${entity.path}',
      );
    }
    final manifestSource = manifestFile.readAsStringSync();
    final manifest = ModelPackageManifest.fromJson(
      manifestSource.isEmpty
          ? <String, dynamic>{}
          : (jsonDecode(manifestSource) as Map<String, dynamic>),
    );
    final errors = validateModelPackageManifest(manifest);
    if (errors.isNotEmpty) {
      throw FormatException(errors.map((error) => error.message).join('; '));
    }
    final licenseId = manifest.provenance['licenseId'];
    if (licenseId == null || licenseId.isEmpty) {
      throw FormatException('package has no licenseId: ${manifest.assetId}');
    }
    final payloads = <String, Uint8List>{};
    for (final part in manifest.parts) {
      for (final path in part.lodFiles.values) {
        final payloadFile = File('${entity.path}/$path');
        if (!payloadFile.existsSync()) {
          throw FormatException(
            'declared payload is missing: ${manifest.assetId}/$path',
          );
        }
        payloads[path] = Uint8List.fromList(payloadFile.readAsBytesSync());
      }
    }
    final payloadErrors = validateModelPackagePayloads(manifest, payloads);
    if (payloadErrors.isNotEmpty) {
      throw FormatException(
        payloadErrors.map((error) => error.message).join('; '),
      );
    }
    for (final entry in payloads.entries) {
      try {
        decodeQmesh(entry.value);
      } on QmeshDecodeException catch (error) {
        throw FormatException(
          'promoted payload is not valid QMSH: ${manifest.assetId}/${entry.key} (${error.reason.name})',
        );
      }
    }
    final packageHash = ModelPackageEmitter.computePackageHash(
      manifest,
      payloads,
    );
    if (packageHash != manifest.packageHash) {
      throw FormatException(
        'promoted package hash mismatch: ${manifest.assetId}',
      );
    }
    for (final file in entity.listSync(recursive: true).whereType<File>()) {
      final lower = file.path.toLowerCase();
      if (lower.endsWith('.obj') ||
          lower.endsWith('.mtl') ||
          lower.endsWith('.fbx') ||
          lower.endsWith('.gltf') ||
          lower.endsWith('.glb')) {
        throw FormatException(
          'promoted package contains source/intermediate payload: ${file.path}',
        );
      }
    }
    final packageName = entity.uri.pathSegments
        .where((segment) => segment.isNotEmpty)
        .last;
    entries.add(
      PresentationModelPackageIndexEntry(
        assetId: manifest.assetId,
        licenseId: licenseId,
        manifestPath: '$packageName/manifest.json',
        sourceFormat: manifest.sourceFormat,
      ),
    );
  }
  final index = PresentationModelPackageIndex(entries);
  File(outputPath).writeAsStringSync('${index.canonicalJson()}\n');
  stdout.writeln(
    'promoted model index: ${entries.length} packages -> $outputPath',
  );
}
