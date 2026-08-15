import 'package:quarantine/engine/fbx_import_contract.dart';

void check(bool value, String message) {
  if (!value) throw StateError('FAIL: $message');
}

void main() {
  const hash =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  final seedConfig = FbxImportConfig(
    schema: 'pixeldart-fbx-import-v1',
    assetId: 'test-room',
    sourceFormat: 'fbx',
    converterId: 'blender-headless',
    converterVersion: '4.3.0',
    settingsHash: hash,
    units: 'metres',
    upAxis: 'Y-up',
    forwardAxis: '-Z',
    scaleToMetres: 1,
    pivot: 'floor-center',
    triangulate: true,
    generateTangents: 'mikktspace-v2',
    lodPolicy: 'lod-s-0-1-2',
    textureCap: 4096,
    animationPolicy: 'reject-skinned-input',
  );
  final config = seedConfig.withSettingsHash(seedConfig.computedSettingsHash());
  check(config.validate().isEmpty, 'valid config passes');
  check(
    config.computedSettingsHash().length == 64,
    'settings hash is reproducible',
  );
  final recommended = FbxImportConfig.recommended(
    assetId: 'test-room',
    converterId: 'blender-headless',
    converterVersion: '4.3.0',
  );
  check(recommended.validate().isEmpty, 'recommended config passes');
  check(
    recommended.settingsHash == recommended.computedSettingsHash(),
    'recommended config locks settings hash',
  );
  final validManifest = <String, dynamic>{
    'assetId': 'test-room',
    'sourceFormat': 'fbx',
    'packageHash': hash,
    'packageFiles': ['part-000.qmesh'],
    'settingsHash': hash,
    'converterId': 'blender-headless',
    'converterVersion': '4.3.0',
    'licenseId': 'CC-BY-4.0',
    'runtimeProfile': 'inspection-only',
    'sourceFiles': [],
    'sourceHashes': [],
    'units': 'metres',
    'upAxis': 'Y-up',
    'pivot': 'floor-center',
    'materialSlots': 1,
    'parts': [{}],
    'textures': [],
    'mediaStatus': 'complete',
    'lods': ['S', '0', '1', '2'],
    'combinedBounds': {
      'min': [0, 0, 0],
      'max': [1, 1, 1],
    },
  };
  check(
    validateFbxGeneratedPackage(validManifest).isEmpty,
    'package manifest passes',
  );
  check(
    validateFbxGeneratedPackage({
      ...validManifest,
      'packageHash': 'bad',
    }).isNotEmpty,
    'bad package hash fails',
  );
  const asciiResult = FbxPreflightResult(
    sourcePath: 'fixture.fbx',
    sourceBytes: 128,
    binaryHeader: false,
    asciiHeader: true,
  );
  check(asciiResult.toJson()['asciiHeader'] == true, 'ASCII FBX is classified');
  check(
    FbxImportConfig.fromJson(config.toJson()).canonicalJson() ==
        config.canonicalJson(),
    'config round-trips canonically',
  );
  final broken = FbxImportConfig.fromJson({
    ...config.toJson(),
    'units': 'centimetres',
    'settingsHash': 'BAD',
    'triangulate': false,
  });
  final errors = broken.validate();
  check(
    errors.any((error) => error.contains('metres')),
    'units failure reported',
  );
  check(
    errors.any((error) => error.contains('settingsHash')),
    'hash failure reported',
  );
  check(
    errors.any((error) => error.contains('triangulate')),
    'triangulation failure reported',
  );
  print('FBX import contract passed.');
}
