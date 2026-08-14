import 'asset_source_contract.dart';

/// A renderer-facing texture record. Dimensions and colour space are kept in
/// the package manifest so a loader never has to guess how an image should be
/// sampled or silently accept an incomplete mip chain.
final class AssetTextureRecord {
  final String id;
  final String path;
  final String sha256;
  final int width;
  final int height;
  final int mipLevels;
  final String colorSpace;

  const AssetTextureRecord({
    required this.id,
    required this.path,
    required this.sha256,
    required this.width,
    required this.height,
    required this.mipLevels,
    required this.colorSpace,
  });
}

/// Provenance and runtime budgets for one normalized model package.
final class AssetPackageRecord {
  final AssetNormalizedPackage package;
  final String packageHash;
  final String licenseId;
  final List<AssetTextureRecord> textures;

  const AssetPackageRecord({
    required this.package,
    required this.packageHash,
    required this.licenseId,
    this.textures = const [],
  });
}

/// Offline PD-12 validator. It deliberately does not read files or hash GPU
/// resources; the build/audit tool supplies those facts and this validator
/// rejects an inconsistent manifest before runtime can see it.
final class AssetProvenanceValidator {
  static final _sha256 = RegExp(r'^[0-9a-f]{64}$');
  static const _colorSpaces = {'srgb', 'linear'};

  const AssetProvenanceValidator();

  List<String> validate(AssetPackageRecord record) {
    final errors = <String>[];
    final package = record.package;
    _requireHash(errors, 'sourceHash', package.normalization.sourceHash);
    _requireHash(errors, 'outputHash', package.outputHash);
    _requireHash(errors, 'packageHash', record.packageHash);
    if (package.normalization.units != 'metres') {
      errors.add('normalization.units must be metres');
    }
    if (package.normalization.upAxis != 'Y-up') {
      errors.add('normalization.upAxis must be Y-up');
    }
    if (record.licenseId.trim().isEmpty) {
      errors.add('licenseId must not be empty');
    }
    if (package.parts.isEmpty) errors.add('package must contain a part');

    for (final part in package.parts) {
      if (part.lodTriangleCounts.length < 3) {
        errors.add('${part.name} must provide LOD0, LOD1, and LOD2');
      }
      if (part.lodTriangleCounts.any((count) => count <= 0)) {
        errors.add('${part.name} LOD triangle counts must be positive');
      }
      if (part.lodTriangleCounts.isNotEmpty &&
          part.lodTriangleCounts.first > part.triangleCount) {
        errors.add('${part.name} LOD0 cannot exceed source triangle count');
      }
      for (var i = 1; i < part.lodTriangleCounts.length; i++) {
        if (part.lodTriangleCounts[i] >= part.lodTriangleCounts[i - 1]) {
          errors.add('${part.name} LOD counts must strictly decrease');
          break;
        }
      }
    }

    for (final texture in record.textures) {
      if (texture.id.trim().isEmpty) errors.add('texture id must not be empty');
      if (texture.path.trim().isEmpty) {
        errors.add('${texture.id} texture path must not be empty');
      }
      _requireHash(errors, '${texture.id}.sha256', texture.sha256);
      if (texture.width <= 0 || texture.height <= 0) {
        errors.add('${texture.id} dimensions must be positive');
      }
      final largest = texture.width > texture.height
          ? texture.width
          : texture.height;
      final requiredMips = _mipCount(largest);
      if (texture.mipLevels != requiredMips) {
        errors.add(
          '${texture.id} must provide $requiredMips mip levels, got ${texture.mipLevels}',
        );
      }
      if (!_colorSpaces.contains(texture.colorSpace)) {
        errors.add(
          '${texture.id} has unsupported colour space ${texture.colorSpace}',
        );
      }
      if (texture.id.contains('albedo') && texture.colorSpace != 'srgb') {
        errors.add('${texture.id} albedo must be sRGB');
      }
      if ((texture.id.contains('normal') || texture.id.contains('orm')) &&
          texture.colorSpace != 'linear') {
        errors.add('${texture.id} shading map must be linear');
      }
    }
    return errors;
  }

  void validateOrThrow(AssetPackageRecord record) {
    final errors = validate(record);
    if (errors.isNotEmpty) {
      throw FormatException('Invalid asset provenance: ${errors.join('; ')}');
    }
  }

  static int _mipCount(int largestDimension) {
    var levels = 1;
    var size = largestDimension;
    while (size > 1) {
      size = (size / 2).ceil();
      levels++;
    }
    return levels;
  }

  static void _requireHash(List<String> errors, String name, String value) {
    if (!_sha256.hasMatch(value)) {
      errors.add('$name must be a lowercase SHA-256');
    }
  }
}
