import 'dart:convert';
import 'dart:typed_data';

import 'package:pixeldart/assets/assets.dart';
import 'package:quarantine/presentation/model_package_index.dart';
import 'package:quarantine/presentation/presentation_package_promotion_coordinator.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

Future<void> main() async {
  final scene = parseObj('v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3');
  final emitted = ObjModelPackageEmitter.emit(
    assetId: 'coordinator-fixture',
    scene: scene,
    materials: const {},
  );
  final base = ModelPackageManifest(
    assetId: 'coordinator-fixture',
    packageHash: '0' * 64,
    sourceFormat: 'obj',
    parts: emitted.manifest.parts,
    materials: emitted.manifest.materials,
    provenance: const {'promotion': 'approved'},
  );
  final manifest = ModelPackageManifest(
    assetId: 'coordinator-fixture',
    packageHash: ModelPackageEmitter.computePackageHash(base, emitted.payloads),
    sourceFormat: 'obj',
    parts: base.parts,
    materials: base.materials,
    provenance: base.provenance,
  );
  final index = PresentationModelPackageIndex([
    const PresentationModelPackageIndexEntry(
      assetId: 'coordinator-fixture',
      licenseId: 'fixture-rights-cleared',
      manifestPath: 'models/coordinator/manifest.json',
      sourceFormat: 'obj',
    ),
  ]);
  final registry = await const PresentationPackagePromotionCoordinator().loadIndex(
    index,
    fetchManifest: (_) async => jsonEncode(manifest.toJson()),
    fetchPayload: (_, path) async => Uint8List.fromList(emitted.payloads[path]!),
  );
  check(registry.contains('coordinator-fixture'), 'coordinator registers loaded package');
  print('Presentation package promotion coordinator tests passed.');
}
