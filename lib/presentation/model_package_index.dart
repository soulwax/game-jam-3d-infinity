import 'dart:convert';

/// Browser-safe index of promoted package manifests. Payload bytes are loaded
/// later by [PresentationModelPackageLoader].
final class PresentationModelPackageIndexEntry {
  final String assetId;
  final String licenseId;
  final String manifestPath;
  final String sourceFormat;

  const PresentationModelPackageIndexEntry({
    required this.assetId,
    required this.licenseId,
    required this.manifestPath,
    required this.sourceFormat,
  });
}

final class PresentationModelPackageIndex {
  final Map<String, PresentationModelPackageIndexEntry> _entries;

  PresentationModelPackageIndex(
    Iterable<PresentationModelPackageIndexEntry> entries,
  ) : _entries = _validate(entries);

  factory PresentationModelPackageIndex.decode(String source) {
    final raw = jsonDecode(source);
    if (raw is! Map || raw['schema'] != 'quarantine-promoted-models-v1') {
      throw const FormatException('unsupported promoted model index schema');
    }
    final records = raw['entries'];
    if (records is! List) {
      throw const FormatException('promoted model index entries are required');
    }
    return PresentationModelPackageIndex([
      for (final value in records)
        if (value is Map)
          PresentationModelPackageIndexEntry(
            assetId: value['assetId'] as String? ?? '',
            licenseId: value['licenseId'] as String? ?? '',
            manifestPath: value['manifestPath'] as String? ?? '',
            sourceFormat: value['sourceFormat'] as String? ?? '',
          )
        else
          (throw const FormatException(
            'promoted model index entry is malformed',
          )),
    ]);
  }

  PresentationModelPackageIndexEntry resolve(String assetId) =>
      _entries[assetId] ??
      (throw StateError('promoted model index asset is missing: $assetId'));

  Iterable<String> get assetIds => _entries.keys;

  Map<String, dynamic> toJson() => {
    'schema': 'quarantine-promoted-models-v1',
    'entries': [
      for (final entry in _entries.values)
        {
          'assetId': entry.assetId,
          'licenseId': entry.licenseId,
          'manifestPath': entry.manifestPath,
          'sourceFormat': entry.sourceFormat,
        },
    ],
  };

  String canonicalJson() => jsonEncode(toJson());

  static Map<String, PresentationModelPackageIndexEntry> _validate(
    Iterable<PresentationModelPackageIndexEntry> entries,
  ) {
    final result = <String, PresentationModelPackageIndexEntry>{};
    for (final entry in entries) {
      if (!RegExp(r'^[a-z0-9]+(?:-[a-z0-9]+)*$').hasMatch(entry.assetId)) {
        throw FormatException(
          'promoted model index ID is invalid: ${entry.assetId}',
        );
      }
      if (result.containsKey(entry.assetId)) {
        throw FormatException(
          'duplicate promoted model index ID: ${entry.assetId}',
        );
      }
      if (entry.licenseId.trim().isEmpty ||
          entry.licenseId == 'unknown' ||
          entry.licenseId == 'unlicensed') {
        throw FormatException(
          'promoted model index rights are unknown: ${entry.assetId}',
        );
      }
      if (!{'obj', 'gltf', 'glb', 'fbx'}.contains(entry.sourceFormat)) {
        throw FormatException(
          'promoted model index source format is invalid: ${entry.assetId}',
        );
      }
      if (!_safeManifestPath(entry.manifestPath)) {
        throw FormatException(
          'promoted model index manifest path is unsafe: ${entry.assetId}',
        );
      }
      result[entry.assetId] = entry;
    }
    return Map.unmodifiable(result);
  }
}

bool _safeManifestPath(String path) {
  if (path.isEmpty || path.startsWith('/') || path.contains('://')) {
    return false;
  }
  if (path.toLowerCase().endsWith('.obj') ||
      path.toLowerCase().endsWith('.mtl') ||
      path.toLowerCase().endsWith('.fbx')) {
    return false;
  }
  return path
      .split('/')
      .every((segment) => segment.isNotEmpty && segment != '..');
}
