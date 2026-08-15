import 'dart:convert';
import 'dart:typed_data';

import 'package:pixeldart/rendering/assets/model_cache.dart';

/// Runtime-facing view of a verified static FBX package. It deliberately
/// accepts bytes from an injected loader so browser fetch policy stays outside
/// the asset contract and tests can use the same code with local files.
final class FbxRuntimePackage {
  final String assetId;
  final String runtimeProfile;
  final List<FbxRuntimePart> parts;

  const FbxRuntimePackage({
    required this.assetId,
    required this.runtimeProfile,
    required this.parts,
  });

  factory FbxRuntimePackage.fromManifest(Map<String, dynamic> manifest) {
    if (manifest['schema'] != 'pixeldart-fbx-package-v1') {
      throw const FormatException('unsupported FBX package schema');
    }
    final rawParts = manifest['parts'];
    if (rawParts is! List || rawParts.isEmpty) {
      throw const FormatException('FBX package contains no parts');
    }
    return FbxRuntimePackage(
      assetId:
          manifest['assetId'] as String? ??
          (throw const FormatException('FBX package assetId is required')),
      runtimeProfile:
          manifest['runtimeProfile'] as String? ??
          (throw const FormatException(
            'FBX package runtimeProfile is required',
          )),
      parts: [
        for (final raw in rawParts)
          FbxRuntimePart.fromJson(raw as Map<String, dynamic>),
      ],
    );
  }

  /// Decodes every LOD0 part into the shared Pixeldart cache. The caller owns
  /// the returned references and must release them when the package leaves the
  /// scene.
  Future<List<CachedMesh>> decodeLod0(
    ModelCache cache,
    Future<Uint8List> Function(String path) load,
  ) => decodeLod(cache, 'LOD0', load);

  Future<List<CachedMesh>> decodeLod(
    ModelCache cache,
    String lod,
    Future<Uint8List> Function(String path) load,
  ) async {
    if (!const {'LOD-S', 'LOD0', 'LOD1', 'LOD2'}.contains(lod)) {
      throw ArgumentError.value(lod, 'lod', 'unsupported room package LOD');
    }
    final decoded = <CachedMesh>[];
    for (final part in parts) {
      final path = part.lodFiles[lod] ?? (lod == 'LOD0' ? part.lod0Path : null);
      if (path == null) {
        throw StateError('part ${part.id} has no $lod mesh');
      }
      final bytes = await load(path);
      decoded.add(cache.decodeAndCache(bytes));
    }
    return decoded;
  }

  String toCanonicalJson() => jsonEncode({
    'assetId': assetId,
    'runtimeProfile': runtimeProfile,
    'parts': parts.map((part) => part.toJson()).toList(),
  });
}

final class FbxRuntimePart {
  final String id;
  final String lod0Path;
  final Map<String, String> lodFiles;

  const FbxRuntimePart({
    required this.id,
    required this.lod0Path,
    required this.lodFiles,
  });

  factory FbxRuntimePart.fromJson(Map<String, dynamic> json) {
    final lodFiles =
        (json['lodFiles'] as Map?)?.map(
          (key, value) => MapEntry(key.toString(), value.toString()),
        ) ??
        const <String, String>{};
    final lod0 = lodFiles['LOD0'] ?? json['mesh'] as String?;
    if (lod0 == null || lod0.isEmpty) {
      throw const FormatException('FBX part requires an LOD0 mesh path');
    }
    return FbxRuntimePart(
      id:
          json['id'] as String? ??
          (throw const FormatException('FBX part id is required')),
      lod0Path: lod0,
      lodFiles: lodFiles,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'lod0Path': lod0Path,
    'lodFiles': lodFiles,
  };
}
