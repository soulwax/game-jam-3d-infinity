import 'dart:io';
import 'dart:typed_data';

import 'package:quarantine/house/exterior_mesh.dart';
import 'package:quarantine/house/exterior_mesh_adapter.dart';
import 'package:quarantine/house/exterior_scene.dart';
import 'package:quarantine/house/house.dart';

Never fail(String message) => throw StateError('house exterior: $message');

void require(bool condition, String message) {
  if (!condition) fail(message);
}

void main() {
  final generated = buildHouseExteriorMesh(House(42));
  final encoded = encodeHouseExteriorMesh(generated);
  final decoded = decodeHouseExteriorMesh(encoded);
  require(
    decoded.triangleCount == generated.triangleCount,
    'triangle count drifted',
  );
  require(
    decoded.vertices.length == generated.vertices.length,
    'vertex count drifted',
  );
  require(
    decoded.indices.length == generated.indices.length,
    'index count drifted',
  );
  require(
    decoded.indexReuse > 0.25,
    'indexed format is not reusing enough vertices',
  );
  final expandedLegacyBytes = generated.expandedVertexCount * 14 * 4;
  require(
    encoded.length < expandedLegacyBytes,
    'QHMX payload is larger than the expanded compatibility stream',
  );
  final rendererMesh = toPixeldartMeshData(decoded);
  require(rendererMesh.indices != null, 'renderer handoff lost indices');
  require(
    rendererMesh.indices!.length == decoded.indices.length,
    'renderer handoff changed index count',
  );
  require(
    rendererMesh.vertexCount == decoded.vertices.length,
    'renderer handoff changed vertex count',
  );
  require(decoded.bounds.minX < -0.41, 'front/side wall thickness missing');
  require(decoded.bounds.maxX > 10.9, 'opposite wall thickness missing');
  require(decoded.bounds.minY < -0.3, 'foundation/plinth missing');
  require(decoded.bounds.maxY > 10.8, 'roof/chimney silhouette missing');

  final path = File('assets/house/exterior/main_shell.qhmx');
  require(path.existsSync(), 'generated exterior asset is missing');
  final onDisk = decodeHouseExteriorMesh(
    Uint8List.fromList(path.readAsBytesSync()),
  );
  require(
    onDisk.triangleCount == decoded.triangleCount,
    'on-disk triangle count drifted',
  );
  require(
    onDisk.vertices.length == decoded.vertices.length,
    'on-disk vertex count drifted',
  );
  print(
    'house exterior: ${decoded.vertices.length} indexed vertices, '
    '${decoded.triangleCount} triangles, ${path.lengthSync()} bytes, '
    '${(decoded.indexReuse * 100).toStringAsFixed(1)}% reuse pass',
  );
}
