import 'dart:typed_data';

import 'package:pixeldart/assets/assets.dart';
import 'package:quarantine/presentation/presentation_model_package_loader.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

Future<void> main() async {
  final scene = parseObj('v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3');
  final emitted = ObjModelPackageEmitter.emit(
    assetId: 'loader-fixture',
    scene: scene,
    materials: const {},
  );
  final base = ModelPackageManifest(
    assetId: 'loader-fixture',
    packageHash: '0' * 64,
    sourceFormat: 'obj',
    parts: emitted.manifest.parts,
    materials: emitted.manifest.materials,
    provenance: const {'promotion': 'approved'},
  );
  final manifest = ModelPackageManifest(
    assetId: 'loader-fixture',
    packageHash: ModelPackageEmitter.computePackageHash(base, emitted.payloads),
    sourceFormat: 'obj',
    parts: base.parts,
    materials: base.materials,
    provenance: base.provenance,
  );
  final record = await const PresentationModelPackageLoader().load(
    assetId: 'loader-fixture',
    licenseId: 'fixture-rights-cleared',
    manifest: manifest,
    fetch: (path) async => Uint8List.fromList(emitted.payloads[path]!),
  );
  check(record.package.manifest.assetId == 'loader-fixture', 'loaded package is registered');
  var rejected = false;
  try {
    await const PresentationModelPackageLoader().load(
      assetId: 'loader-fixture',
      licenseId: 'fixture-rights-cleared',
      manifest: manifest,
      fetch: (_) async => Uint8List.fromList([1, 2, 3]),
    );
  } on FormatException {
    rejected = true;
  }
  check(rejected, 'malformed runtime payload is rejected before registration');
  print('Presentation model package loader tests passed.');
}
