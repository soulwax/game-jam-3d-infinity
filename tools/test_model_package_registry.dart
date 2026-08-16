import 'package:pixeldart/assets/assets.dart';
import 'package:quarantine/presentation/model_package_registry.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

ValidatedModelPackage packageFor(String assetId, {String format = 'obj'}) {
  final scene = parseObj('''
v 0 0 0
v 1 0 0
v 0 1 0
f 1 2 3
''');
  final emitted = ObjModelPackageEmitter.emit(
    assetId: assetId,
    scene: scene,
    materials: const {},
    sourceFormat: format,
  );
  final manifest = ModelPackageManifest(
    assetId: assetId,
    packageHash: ModelPackageEmitter.computePackageHash(
      ModelPackageManifest(
        assetId: assetId,
        packageHash: '0' * 64,
        sourceFormat: format,
        parts: emitted.manifest.parts,
        materials: emitted.manifest.materials,
        provenance: const {'promotion': 'approved'},
      ),
      emitted.payloads,
    ),
    sourceFormat: format,
    parts: emitted.manifest.parts,
    materials: emitted.manifest.materials,
    provenance: const {'promotion': 'approved'},
  );
  return ValidatedModelPackage(manifest: manifest, payloads: emitted.payloads);
}

void main() {
  final registry = PresentationModelPackageRegistry([
    PresentationModelPackageRecord(
      assetId: 'porcelain-mermaid',
      licenseId: 'licensed-porcelain-source',
      package: packageFor('porcelain-mermaid'),
    ),
    PresentationModelPackageRecord(
      assetId: 'living-room',
      licenseId: 'licensed-room-source',
      package: packageFor('living-room', format: 'fbx'),
    ),
    PresentationModelPackageRecord(
      assetId: 'gltf-reference',
      licenseId: 'fixture-rights-cleared',
      package: packageFor('gltf-reference', format: 'glb'),
    ),
  ]);
  check(registry.contains('porcelain-mermaid'), 'asset resolves by stable ID');
  check(registry.resolve('living-room').package.manifest.sourceFormat == 'fbx', 'source is audit metadata');
  var missingRejected = false;
  try {
    registry.resolve('missing-asset');
  } catch (_) {
    missingRejected = true;
  }
  check(missingRejected, 'missing asset fails closed');
  var duplicateRejected = false;
  try {
    PresentationModelPackageRegistry([
      PresentationModelPackageRecord(
        assetId: 'duplicate',
        licenseId: 'rights',
        package: packageFor('duplicate'),
      ),
      PresentationModelPackageRecord(
        assetId: 'duplicate',
        licenseId: 'rights',
        package: packageFor('duplicate'),
      ),
    ]);
  } on FormatException {
    duplicateRejected = true;
  }
  check(duplicateRejected, 'duplicate asset IDs fail closed');
  final valid = packageFor('tampered');
  final tamperedManifest = ModelPackageManifest(
    assetId: valid.manifest.assetId,
    packageHash: '0' * 64,
    sourceFormat: valid.manifest.sourceFormat,
    parts: valid.manifest.parts,
    materials: valid.manifest.materials,
    provenance: valid.manifest.provenance,
  );
  var hashRejected = false;
  try {
    PresentationModelPackageRegistry([
      PresentationModelPackageRecord(
        assetId: 'tampered',
        licenseId: 'rights',
        package: ValidatedModelPackage(
          manifest: tamperedManifest,
          payloads: valid.payloads,
        ),
      ),
    ]);
  } on FormatException {
    hashRejected = true;
  }
  check(hashRejected, 'tampered package hash fails closed');
  print('Presentation model package registry tests passed.');
}
