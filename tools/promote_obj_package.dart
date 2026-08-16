import 'dart:convert';
import 'dart:io';

import 'package:pixeldart/assets/assets.dart';

String? option(List<String> args, String name) {
  final index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : null;
}

Future<void> main(List<String> args) async {
  final objPath = option(args, '--obj');
  final mtlPath = option(args, '--mtl');
  final assetId = option(args, '--asset-id');
  final licenseId = option(args, '--license-id');
  final outputPath = option(args, '--out');
  if ([objPath, mtlPath, assetId, licenseId, outputPath].any((value) => value == null)) {
    stderr.writeln(
      'usage: promote_obj_package.dart --obj FILE --mtl FILE '
      '--asset-id ID --license-id ID --out DIRECTORY',
    );
    exitCode = 64;
    return;
  }
  if (licenseId == 'unknown' || licenseId == 'unlicensed' || licenseId!.trim().isEmpty) {
    stderr.writeln('license ID must identify the rights record');
    exitCode = 65;
    return;
  }
  if (!File(objPath!).existsSync() || !File(mtlPath!).existsSync()) {
    stderr.writeln('OBJ and MTL inputs must exist');
    exitCode = 66;
    return;
  }
  final scene = parseObj(File(objPath).readAsStringSync());
  final materials = parseMtl(File(mtlPath).readAsStringSync());
  final emitted = ObjModelPackageEmitter.emit(
    assetId: assetId!,
    scene: scene,
    materials: materials,
  );
  final base = ModelPackageManifest(
    assetId: assetId,
    packageHash: '0' * 64,
    sourceFormat: 'obj',
    parts: emitted.manifest.parts,
    materials: emitted.manifest.materials,
    textures: emitted.manifest.textures,
    combinedBounds: emitted.manifest.combinedBounds,
    provenance: {
      'promotion': 'approved',
      'licenseId': licenseId,
      'sourceFormat': 'obj',
    },
  );
  final manifest = ModelPackageManifest(
    assetId: assetId,
    packageHash: ModelPackageEmitter.computePackageHash(base, emitted.payloads),
    sourceFormat: 'obj',
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
