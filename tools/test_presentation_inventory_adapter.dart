import 'package:pixeldart/assets/assets.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/presentation/model_package_registry.dart';
import 'package:quarantine/presentation/presentation_inventory_adapter.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

ValidatedModelPackage packageFor(String id) {
  final scene = parseObj('v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3');
  final emitted = ObjModelPackageEmitter.emit(
    assetId: id,
    scene: scene,
    materials: const {},
  );
  final base = ModelPackageManifest(
    assetId: id,
    packageHash: '0' * 64,
    sourceFormat: 'obj',
    parts: emitted.manifest.parts,
    materials: emitted.manifest.materials,
    provenance: const {'promotion': 'approved'},
  );
  return ValidatedModelPackage(
    manifest: ModelPackageManifest(
      assetId: id,
      packageHash: ModelPackageEmitter.computePackageHash(base, emitted.payloads),
      sourceFormat: 'obj',
      parts: base.parts,
      materials: base.materials,
      provenance: base.provenance,
    ),
    payloads: emitted.payloads,
  );
}

void main() {
  final inventory = HouseInventory.fromJson({
    'schemaVersion': 1,
    'sourceRef': 'assets/house/house.json',
    'modelScale': 2.25,
    'assets': [
      {
        'id': 'porcelain-mermaid',
        'kind': 'decor',
        'source': '/never/read/source.obj',
        'proxy': 'room-fixture',
        'pivot': 'floor-center',
        'status': 'production',
        'bounds': {'min': [-1, 0, -1], 'max': [1, 1, 1]},
      },
      {
        'id': 'missing-prop',
        'kind': 'decor',
        'source': '/never/read/missing.glb',
        'proxy': 'room-fixture',
        'pivot': 'floor-center',
        'status': 'production',
        'bounds': {'min': [-1, 0, -1], 'max': [1, 1, 1]},
      },
    ],
    'placements': [
      {
        'id': 'placement-mermaid',
        'roomId': 'living-room',
        'assetId': 'porcelain-mermaid',
        'role': 'decor',
        'transform': {
          'position': [1, 0, 1],
          'rotation': [0, 0, 0],
          'scale': [1, 1, 1],
        },
        'visibility': {'layer': 'micro'},
        'interaction': {'pickable': false},
        'clearance': {'radius': 0.1},
      },
    ],
  });
  final registry = PresentationModelPackageRegistry([
    PresentationModelPackageRecord(
      assetId: 'porcelain-mermaid',
      licenseId: 'licensed-source',
      package: packageFor('porcelain-mermaid'),
    ),
  ]);
  final adapter = PresentationInventoryAdapter(registry);
  final resolution = adapter.resolve(inventory, inventory.placements.single);
  check(resolution.package.assetId == 'porcelain-mermaid', 'placement resolves by ID');
  check(resolution.authoredAsset.source == '/never/read/source.obj', 'source is retained as authored metadata only');
  check(adapter.missingPackages(inventory).single == 'missing-prop', 'missing package is reported');
  var gateRejected = false;
  try {
    adapter.requireAllPackages(inventory);
  } on FormatException {
    gateRejected = true;
  }
  check(gateRejected, 'production package gate rejects unresolved inventory');
  final complete = HouseInventory.fromJson({
    'schemaVersion': 1,
    'sourceRef': 'assets/house/house.json',
    'modelScale': 2.25,
    'assets': [
      {
        'id': 'porcelain-mermaid',
        'kind': 'decor',
        'source': '/never/read/source.obj',
        'proxy': 'room-fixture',
        'pivot': 'floor-center',
        'bounds': {'min': [-1, 0, -1], 'max': [1, 1, 1]},
      },
    ],
    'placements': [],
  });
  adapter.requireAllPackages(complete);
  print('Presentation inventory adapter tests passed.');
}
