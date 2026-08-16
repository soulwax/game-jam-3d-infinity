import 'dart:typed_data';

import 'package:pixeldart/assets/assets.dart';

import 'model_package_registry.dart';

/// Presentation-owned async loader. The host supplies bytes (fetch, cache,
/// or an embedded bundle); no renderer or game policy is inferred here.
final class PresentationModelPackageLoader {
  const PresentationModelPackageLoader();

  Future<PresentationModelPackageRecord> load({
    required String assetId,
    required String licenseId,
    required ModelPackageManifest manifest,
    required Future<Uint8List> Function(String path) fetch,
  }) async {
    final package = await const ModelPackageLoader().load(
      ModelPackageSource(manifest: manifest, load: fetch),
      limits: const ModelPackageLimits(requireQmeshPayloads: true),
    );
    final record = PresentationModelPackageRecord(
      assetId: assetId,
      licenseId: licenseId,
      package: package,
    );
    PresentationModelPackageRegistry([record]);
    return record;
  }
}
