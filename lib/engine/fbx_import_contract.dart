import 'dart:convert';

import 'asset_source_contract.dart';

/// Immutable settings for one deterministic offline FBX import.
final class FbxImportConfig {
  final String schema;
  final String assetId;
  final String sourceFormat;
  final String converterId;
  final String converterVersion;
  final String settingsHash;
  final String units;
  final String upAxis;
  final String forwardAxis;
  final double scaleToMetres;
  final String pivot;
  final bool triangulate;
  final String generateTangents;
  final String lodPolicy;
  final int textureCap;
  final String animationPolicy;

  const FbxImportConfig({
    required this.schema,
    required this.assetId,
    required this.sourceFormat,
    required this.converterId,
    required this.converterVersion,
    required this.settingsHash,
    required this.units,
    required this.upAxis,
    required this.forwardAxis,
    required this.scaleToMetres,
    required this.pivot,
    required this.triangulate,
    required this.generateTangents,
    required this.lodPolicy,
    required this.textureCap,
    required this.animationPolicy,
  });

  factory FbxImportConfig.recommended({
    required String assetId,
    required String converterId,
    required String converterVersion,
  }) {
    final seed = FbxImportConfig(
      schema: 'pixeldart-fbx-import-v1',
      assetId: assetId,
      sourceFormat: 'fbx',
      converterId: converterId,
      converterVersion: converterVersion,
      settingsHash: '0' * 64,
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
    return seed.withSettingsHash(seed.computedSettingsHash());
  }

  factory FbxImportConfig.fromJson(Map<String, dynamic> json) {
    T requiredValue<T>(String key) {
      final value = json[key];
      if (value is! T) throw FormatException('import config requires $key');
      return value;
    }

    return FbxImportConfig(
      schema: requiredValue<String>('schema'),
      assetId: requiredValue<String>('assetId'),
      sourceFormat: requiredValue<String>('sourceFormat'),
      converterId: requiredValue<String>('converterId'),
      converterVersion: requiredValue<String>('converterVersion'),
      settingsHash: requiredValue<String>('settingsHash'),
      units: requiredValue<String>('units'),
      upAxis: requiredValue<String>('upAxis'),
      forwardAxis: requiredValue<String>('forwardAxis'),
      scaleToMetres:
          (json['scaleToMetres'] as num?)?.toDouble() ??
          (throw const FormatException('import config requires scaleToMetres')),
      pivot: requiredValue<String>('pivot'),
      triangulate: requiredValue<bool>('triangulate'),
      generateTangents: requiredValue<String>('generateTangents'),
      lodPolicy: requiredValue<String>('lodPolicy'),
      textureCap: requiredValue<int>('textureCap'),
      animationPolicy: requiredValue<String>('animationPolicy'),
    );
  }

  List<String> validate() {
    final errors = <String>[];
    if (schema != 'pixeldart-fbx-import-v1') errors.add('unsupported schema');
    if (!RegExp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$').hasMatch(assetId)) {
      errors.add('assetId must be kebab-case');
    }
    if (sourceFormat != 'fbx') errors.add('sourceFormat must be fbx');
    if (converterId.isEmpty || converterVersion.isEmpty) {
      errors.add('converter identity is required');
    }
    if (!RegExp(r'^[0-9a-f]{64}$').hasMatch(settingsHash)) {
      errors.add('settingsHash must be lowercase SHA-256');
    }
    if (units != 'metres') errors.add('units must be metres');
    if (upAxis != 'Y-up') errors.add('upAxis must be Y-up');
    if (forwardAxis != '-Z') errors.add('forwardAxis must be -Z');
    if (!scaleToMetres.isFinite || scaleToMetres <= 0) {
      errors.add('scaleToMetres must be positive and finite');
    }
    if (pivot != 'floor-center' && pivot != 'origin') {
      errors.add('pivot must be floor-center or origin');
    }
    if (!triangulate) errors.add('triangulate must be enabled');
    if (generateTangents != 'mikktspace-v2') {
      errors.add('generateTangents must be mikktspace-v2');
    }
    if (lodPolicy != 'lod-s-0-1-2') errors.add('unsupported lodPolicy');
    if (textureCap <= 0 || textureCap > 4096) {
      errors.add('textureCap must be in 1..4096');
    }
    if (animationPolicy != 'reject-skinned-input' &&
        animationPolicy != 'bake-glb-clips') {
      errors.add('unsupported animationPolicy');
    }
    return errors;
  }

  Map<String, dynamic> toJson() => {
    'schema': schema,
    'assetId': assetId,
    'sourceFormat': sourceFormat,
    'converterId': converterId,
    'converterVersion': converterVersion,
    'settingsHash': settingsHash,
    'units': units,
    'upAxis': upAxis,
    'forwardAxis': forwardAxis,
    'scaleToMetres': scaleToMetres,
    'pivot': pivot,
    'triangulate': triangulate,
    'generateTangents': generateTangents,
    'lodPolicy': lodPolicy,
    'textureCap': textureCap,
    'animationPolicy': animationPolicy,
  };

  String canonicalJson() =>
      const JsonEncoder.withIndent('  ').convert(toJson());

  String canonicalSettingsJson() {
    final settings = Map<String, dynamic>.from(toJson())
      ..remove('settingsHash');
    return const JsonEncoder.withIndent('  ').convert(settings);
  }

  String computedSettingsHash() =>
      AssetConverter.computeSha256(utf8.encode(canonicalSettingsJson()));

  FbxImportConfig withSettingsHash(String hash) => FbxImportConfig(
    schema: schema,
    assetId: assetId,
    sourceFormat: sourceFormat,
    converterId: converterId,
    converterVersion: converterVersion,
    settingsHash: hash,
    units: units,
    upAxis: upAxis,
    forwardAxis: forwardAxis,
    scaleToMetres: scaleToMetres,
    pivot: pivot,
    triangulate: triangulate,
    generateTangents: generateTangents,
    lodPolicy: lodPolicy,
    textureCap: textureCap,
    animationPolicy: animationPolicy,
  );
}

final class FbxPreflightResult {
  final String sourcePath;
  final int sourceBytes;
  final String? sourceSha256;
  final int? fbxVersion;
  final bool binaryHeader;
  final bool asciiHeader;
  final List<String> errors;
  final List<String> warnings;

  const FbxPreflightResult({
    required this.sourcePath,
    required this.sourceBytes,
    this.sourceSha256,
    this.fbxVersion,
    required this.binaryHeader,
    this.asciiHeader = false,
    this.errors = const [],
    this.warnings = const [],
  });

  bool get passed => errors.isEmpty;

  Map<String, dynamic> toJson() => {
    'schema': 'pixeldart-fbx-preflight-v1',
    'sourcePath': sourcePath,
    'sourceBytes': sourceBytes,
    'sourceSha256': sourceSha256,
    'fbxVersion': fbxVersion,
    'binaryHeader': binaryHeader,
    'asciiHeader': asciiHeader,
    'passed': passed,
    'errors': errors,
    'warnings': warnings,
    'next': 'converter invocation and scene inspection are required',
  };
}

/// Validates the manifest emitted by an external FBX normalizer before the
/// package is copied into runtime assets. This stays map-based until the
/// normalized package schema is promoted into the shared asset contract.
List<String> validateFbxGeneratedPackage(Map<String, dynamic> manifest) {
  final errors = <String>[];
  void requiredString(String key) {
    if (manifest[key] is! String || (manifest[key] as String).isEmpty) {
      errors.add('$key must be a non-empty string');
    }
  }

  requiredString('assetId');
  requiredString('packageHash');
  requiredString('converterId');
  requiredString('converterVersion');
  requiredString('settingsHash');
  requiredString('licenseId');
  for (final key in [
    'packageFiles',
    'sourceFiles',
    'sourceHashes',
    'units',
    'upAxis',
    'pivot',
    'materialSlots',
    'runtimeProfile',
  ]) {
    if (!manifest.containsKey(key)) errors.add('$key is required');
  }
  final packageFiles = manifest['packageFiles'];
  if (packageFiles is List &&
      packageFiles.any((file) => file is! String || file.isEmpty)) {
    errors.add('packageFiles must contain non-empty paths');
  }
  if (packageFiles is List &&
      packageFiles.any(
        (file) =>
            file is String &&
            (file.toLowerCase().endsWith('.fbx') ||
                file.toLowerCase().endsWith('.glb') ||
                file.toLowerCase().endsWith('.gltf')),
      )) {
    errors.add(
      'runtime package must not contain FBX or glTF source/intermediates',
    );
  }
  if (manifest['sourceFormat'] != 'fbx') {
    errors.add('sourceFormat must be fbx');
  }
  for (final key in ['packageHash', 'settingsHash']) {
    final value = manifest[key];
    if (value is String && !RegExp(r'^[0-9a-f]{64}$').hasMatch(value)) {
      errors.add('$key must be lowercase SHA-256');
    }
  }
  final parts = manifest['parts'];
  if (parts is! List || parts.isEmpty) errors.add('parts must be non-empty');
  final textures = manifest['textures'];
  if (textures is! List) errors.add('textures must be a list');
  final mediaStatus = manifest['mediaStatus'];
  if (mediaStatus != 'complete' && mediaStatus != 'incomplete') {
    errors.add('mediaStatus must be complete or incomplete');
  }
  if (manifest['runtimeProfile'] == 'runtime' && mediaStatus != 'complete') {
    errors.add('runtime packages cannot contain incomplete texture media');
  }
  final lods = manifest['lods'];
  if (lods is! List || lods.length < 3) {
    errors.add('lods must contain LOD-S, LOD0, LOD1, and LOD2');
  }
  final bounds = manifest['combinedBounds'];
  if (bounds is! Map || bounds['min'] is! List || bounds['max'] is! List) {
    errors.add('combinedBounds must contain min and max arrays');
  }
  return errors;
}
