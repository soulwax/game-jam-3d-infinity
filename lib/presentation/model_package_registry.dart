import 'dart:typed_data';

import 'package:pixeldart/assets/assets.dart';

/// Game-facing metadata for one promoted renderer package. Source format is
/// retained only for audit labels; presentation resolves by [assetId].
final class PresentationModelPackageRecord {
  final String assetId;
  final String licenseId;
  final ValidatedModelPackage package;

  const PresentationModelPackageRecord({
    required this.assetId,
    required this.licenseId,
    required this.package,
  });
}

/// Immutable registry used by presentation code to resolve promoted packages.
/// It performs no filesystem access and exposes no source-format branch.
final class PresentationModelPackageRegistry {
  final Map<String, PresentationModelPackageRecord> _records;

  PresentationModelPackageRegistry(
    Iterable<PresentationModelPackageRecord> records,
  ) : _records = _validate(records);

  PresentationModelPackageRecord resolve(String assetId) =>
      _records[assetId] ??
      (throw StateError('promoted model package is missing: $assetId'));

  bool contains(String assetId) => _records.containsKey(assetId);

  Iterable<String> get assetIds => _records.keys;

  static Map<String, PresentationModelPackageRecord> _validate(
    Iterable<PresentationModelPackageRecord> records,
  ) {
    final result = <String, PresentationModelPackageRecord>{};
    for (final record in records) {
      if (!RegExp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$').hasMatch(record.assetId)) {
        throw FormatException('asset ID is not stable kebab-case: ${record.assetId}');
      }
      if (result.containsKey(record.assetId)) {
        throw FormatException('duplicate promoted asset ID: ${record.assetId}');
      }
      if (record.package.manifest.assetId != record.assetId) {
        throw FormatException('package asset ID mismatch: ${record.assetId}');
      }
      if (record.licenseId.trim().isEmpty ||
          record.licenseId == 'unknown' ||
          record.licenseId == 'unlicensed') {
        throw FormatException('package rights are not identified: ${record.assetId}');
      }
      if (record.package.manifest.provenance['promotion'] != 'approved') {
        throw FormatException('package is not approved: ${record.assetId}');
      }
      final errors = validateModelPackageManifest(record.package.manifest);
      if (errors.isNotEmpty) {
        throw FormatException(
          'package manifest is invalid for ${record.assetId}: '
          '${errors.map((error) => error.message).join('; ')}',
        );
      }
      final payloadErrors = validateModelPackagePayloads(
        record.package.manifest,
        record.package.payloads,
      );
      if (payloadErrors.isNotEmpty) {
        throw FormatException(
          'package payloads are invalid for ${record.assetId}: '
          '${payloadErrors.map((error) => error.message).join('; ')}',
        );
      }
      final computedHash = ModelPackageEmitter.computePackageHash(
        record.package.manifest,
        record.package.payloads,
      );
      if (computedHash != record.package.manifest.packageHash) {
        throw FormatException('package hash mismatch: ${record.assetId}');
      }
      result[record.assetId] = record;
    }
    return Map.unmodifiable(result);
  }
}

// Keeps the package shape visible to downstream static analysis and prevents
// accidental replacement with untyped maps at the presentation boundary.
typedef PresentationPayloads = Map<String, Uint8List>;
