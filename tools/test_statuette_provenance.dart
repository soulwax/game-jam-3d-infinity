import 'dart:convert';
import 'dart:io';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final file = File(
    'assets/house/models/porcelain-mermaid-statuette/PROVENANCE.json',
  );
  check(file.existsSync(), 'statuette provenance must exist');
  final root = jsonDecode(file.readAsStringSync()) as Map<String, dynamic>;
  check(root['schema'] == 'pixeldart-asset-source-v1', 'schema is pinned');
  check(root['assetId'] == 'porcelain-mermaid-statuette', 'asset id is stable');
  check(
    root['status'] == 'source-only',
    'raw source cannot become runtime implicitly',
  );

  final source = root['source'] as Map<String, dynamic>;
  final model = source['model'] as Map<String, dynamic>;
  check(model['faces'] == 37099, 'face count matches OBJ preflight');
  check(
    model['trianglesAfterFanTriangulation'] == 74197,
    'triangle count matches preflight',
  );
  check(model['vertices'] == 37181, 'vertex count matches OBJ preflight');
  check((model['sha256'] as String).length == 64, 'model hash is present');

  for (final key in ['albedo', 'normal']) {
    final map = source[key] as Map<String, dynamic>;
    check(
      map['width'] == 8192 && map['height'] == 8192,
      '$key dimensions are pinned',
    );
    check(map['expectedMipLevels'] == 14, '$key source mip plan is complete');
    check((map['sha256'] as String).length == 64, '$key hash is present');
  }
  check((source['albedo'] as Map)['colorSpace'] == 'srgb', 'albedo is sRGB');
  check(
    (source['normal'] as Map)['colorSpace'] == 'linear',
    'normal is linear',
  );

  final runtime = root['runtimePackage'] as Map<String, dynamic>;
  check(runtime['path'] == null, 'runtime path stays unset until conversion');
  check(
    runtime['packageSha256'] == null,
    'runtime hash stays unset until conversion',
  );
  check(
    runtime['maxTextureDimension'] == 4096,
    'runtime texture cap is pinned',
  );
  check(
    runtime['expectedRuntimeMipLevels'] == 13,
    'runtime mip plan is pinned',
  );
  check(
    (root['material'] as Map)['clearcoatStrength'] == 0.72,
    'authored clearcoat is pinned',
  );
  print('Statuette provenance manifest passed.');
}
