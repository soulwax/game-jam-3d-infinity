import 'package:quarantine/engine/asset_provenance_validator.dart';
import 'package:quarantine/engine/asset_source_contract.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  const hash =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  final package = AssetConverter().convertSource({
    'id': 'porcelain-mermaid-statuette',
    'kind': 'hero-prop',
    'pivot': 'floor-center',
    'normalization': {'sourceHash': hash, 'units': 'metres', 'upAxis': 'Y-up'},
    'sockets': [],
    'parts': [
      {
        'name': 'statuette',
        'materialKey': 'porcelain-clearcoat',
        'boundsMin': [-0.3, 0.0, -0.2],
        'boundsMax': [0.3, 0.8, 0.2],
        'vertexCount': 12000,
        'triangleCount': 15000,
        'lodTriangleCounts': [15000, 6000, 1200],
      },
    ],
  });
  final record = AssetPackageRecord(
    package: package,
    packageHash: hash,
    licenseId: 'CC-BY-4.0',
    textures: const [
      AssetTextureRecord(
        id: 'albedo',
        path: 'textures/albedo.webp',
        sha256: hash,
        width: 4096,
        height: 4096,
        mipLevels: 13,
        colorSpace: 'srgb',
      ),
      AssetTextureRecord(
        id: 'normal',
        path: 'textures/normal.webp',
        sha256: hash,
        width: 4096,
        height: 4096,
        mipLevels: 13,
        colorSpace: 'linear',
      ),
    ],
  );
  const validator = AssetProvenanceValidator();
  check(validator.validate(record).isEmpty, 'valid package must pass');

  final broken = AssetPackageRecord(
    package: package,
    packageHash: 'not-a-hash',
    licenseId: '',
    textures: [
      const AssetTextureRecord(
        id: 'normal',
        path: 'textures/normal.webp',
        sha256: hash,
        width: 4096,
        height: 4096,
        mipLevels: 1,
        colorSpace: 'srgb',
      ),
    ],
  );
  final errors = validator.validate(broken);
  check(
    errors.any((error) => error.contains('packageHash')),
    'hash mismatch reported',
  );
  check(
    errors.any((error) => error.contains('mip levels')),
    'mip completeness reported',
  );
  check(
    errors.any((error) => error.contains('shading map')),
    'colour space reported',
  );
  check(errors.any((error) => error.contains('licenseId')), 'license reported');
  print('PD-12 asset provenance validator passed.');
}
