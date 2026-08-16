import 'package:pixeldart/assets/assets.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/presentation/model_package_registry.dart';
import 'package:quarantine/presentation/presentation_package_binding_adapter.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

ValidatedModelPackage packageFor(String id) {
  final scene = parseObj('v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3');
  final emitted = ObjModelPackageEmitter.emit(assetId: id, scene: scene, materials: const {});
  final base = ModelPackageManifest(
    assetId: id, packageHash: '0' * 64, sourceFormat: 'obj',
    parts: emitted.manifest.parts, materials: emitted.manifest.materials,
    provenance: const {'promotion': 'approved'},
  );
  return ValidatedModelPackage(
    manifest: ModelPackageManifest(
      assetId: id,
      packageHash: ModelPackageEmitter.computePackageHash(base, emitted.payloads),
      sourceFormat: 'obj', parts: base.parts, materials: base.materials,
      provenance: base.provenance,
    ),
    payloads: emitted.payloads,
  );
}

HouseInventory inventory() => HouseInventory.fromJson({
  'schemaVersion': 1, 'sourceRef': 'assets/house/house.json', 'modelScale': 2.25,
  'assets': [
    {'id': 'porcelain-mermaid', 'kind': 'decor', 'source': '/never/read/source.obj',
      'proxy': 'room-fixture', 'pivot': 'floor-center',
      'bounds': {'min': [-1, 0, -1], 'max': [1, 1, 1]}},
  ],
  'placements': [
    {'id': 'placement-mermaid', 'roomId': 'living-room', 'assetId': 'porcelain-mermaid',
      'role': 'decor', 'transform': {'position': [1, 0, 1], 'rotation': [0, 0, 0], 'scale': [1, 1, 1]},
      'visibility': {'layer': 'micro'}, 'interaction': {'pickable': false}, 'clearance': {'radius': 0.1}},
  ],
});

void main() {
  final registry = PresentationModelPackageRegistry([
    PresentationModelPackageRecord(assetId: 'porcelain-mermaid', licenseId: 'licensed-source', package: packageFor('porcelain-mermaid')),
  ]);
  final adapter = PresentationPackageBindingAdapter(registry);
  final placement = inventory().placements.single;
  Object? received;
  adapter.attach(inventory(), placement, (resolution) {
    received = resolution.package.package;
    return received!;
  });
  check(adapter.count == 1 && received != null, 'validated package reaches binding factory');
  check(adapter.bindingFor(placement.id) == received, 'binding is retained by placement ID');
  adapter.detach(placement.id);
  check(adapter.count == 0, 'detach releases presentation binding');
  print('Presentation package binding adapter tests passed.');
}
