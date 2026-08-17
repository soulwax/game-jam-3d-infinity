import 'dart:convert';
import 'dart:typed_data';

import 'package:pixeldart/assets/assets.dart';

import 'model_package_index.dart';
import 'model_package_registry.dart';
import 'presentation_model_package_loader.dart';

/// Browser/application coordinator for promoted packages. Network, cache, and
/// URL policy belong to the host callbacks; validation and registration stay
/// in the presentation boundary.
final class PresentationPackagePromotionCoordinator {
  final PresentationModelPackageLoader loader;

  const PresentationPackagePromotionCoordinator({
    this.loader = const PresentationModelPackageLoader(),
  });

  Future<PresentationModelPackageRegistry> loadIndex(
    PresentationModelPackageIndex index, {
    required Future<String> Function(String manifestPath) fetchManifest,
    required Future<Uint8List> Function(String assetId, String path)
    fetchPayload,
  }) async {
    final records = <PresentationModelPackageRecord>[];
    for (final assetId in index.assetIds) {
      final entry = index.resolve(assetId);
      final manifest = ModelPackageManifest.fromJson(
        jsonDecode(await fetchManifest(entry.manifestPath))
            as Map<String, dynamic>,
      );
      if (manifest.assetId != entry.assetId) {
        throw FormatException(
          'promoted manifest asset ID does not match index: ${entry.assetId}',
        );
      }
      if (manifest.sourceFormat != entry.sourceFormat) {
        throw FormatException(
          'promoted manifest source format does not match index: ${entry.assetId}',
        );
      }
      records.add(
        await loader.load(
          assetId: entry.assetId,
          licenseId: entry.licenseId,
          manifest: manifest,
          fetch: (path) => fetchPayload(entry.assetId, path),
        ),
      );
    }
    return PresentationModelPackageRegistry(records);
  }
}
