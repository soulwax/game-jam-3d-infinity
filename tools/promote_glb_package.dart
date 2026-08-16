import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:pixeldart/assets/assets.dart';

String? option(List<String> args, String name) {
  final index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : null;
}

Future<void> main(List<String> args) async {
  final glbPath = option(args, '--glb');
  final assetId = option(args, '--asset-id');
  final licenseId = option(args, '--license-id');
  final outputPath = option(args, '--out');
  if ([glbPath, assetId, licenseId, outputPath].any((value) => value == null)) {
    stderr.writeln(
      'usage: promote_glb_package.dart --glb FILE --asset-id ID '
      '--license-id ID --out DIRECTORY',
    );
    exitCode = 64;
    return;
  }
  if (licenseId == 'unknown' || licenseId == 'unlicensed' || licenseId!.trim().isEmpty) {
    stderr.writeln('license ID must identify the rights record');
    exitCode = 65;
    return;
  }
  if (!File(glbPath!).existsSync()) {
    stderr.writeln('GLB input must exist');
    exitCode = 66;
    return;
  }
  final container = GlbContainer.parse(
    Uint8List.fromList(File(glbPath).readAsBytesSync()),
  );
  final binary = container.binary;
  if (binary == null) {
    stderr.writeln('GLB input must contain a BIN chunk');
    exitCode = 65;
    return;
  }
  final emitted = GltfModelPackageEmitter.emit(
    assetId: assetId!,
    document: container.json,
    binary: binary,
    sourceFormat: 'glb',
  );
  final base = ModelPackageManifest(
    assetId: assetId,
    packageHash: '0' * 64,
    sourceFormat: 'glb',
    parts: emitted.manifest.parts,
    materials: emitted.manifest.materials,
    textures: emitted.manifest.textures,
    combinedBounds: emitted.manifest.combinedBounds,
    provenance: {
      'promotion': 'approved',
      'licenseId': licenseId,
      'sourceFormat': 'glb',
    },
  );
  final manifest = ModelPackageManifest(
    assetId: assetId,
    packageHash: ModelPackageEmitter.computePackageHash(base, emitted.payloads),
    sourceFormat: 'glb',
    parts: base.parts,
    materials: base.materials,
    textures: base.textures,
    combinedBounds: base.combinedBounds,
    provenance: base.provenance,
  );
  final output = Directory(outputPath!);
  output.createSync(recursive: true);
  for (final entry in emitted.payloads.entries) {
    final file = File('${output.path}/${entry.key}');
    file.parent.createSync(recursive: true);
    file.writeAsBytesSync(entry.value);
  }
  File('${output.path}/manifest.json').writeAsStringSync(
    const JsonEncoder.withIndent('  ').convert(manifest.toJson()),
  );
  stdout.writeln(
    'promoted ${manifest.assetId}: hash=${manifest.packageHash} '
    'parts=${manifest.parts.length} out=${output.path}',
  );
}
