import 'dart:io';

import 'package:quarantine/house/exterior_mesh.dart';
import 'package:quarantine/house/exterior_scene.dart';
import 'house_fixture.dart';

void main() {
  final mesh = buildHouseExteriorMesh(loadAuthoredHouse(seed: 42));
  final bytes = encodeHouseExteriorMesh(mesh);
  final output = File('assets/house/exterior/main_shell.qhmx');
  output.parent.createSync(recursive: true);
  output.writeAsBytesSync(bytes, flush: true);
  print(
    'QHMX exterior: ${mesh.vertices.length} unique vertices, '
    '${mesh.triangleCount} triangles, ${bytes.length} bytes, '
    '${(mesh.indexReuse * 100).toStringAsFixed(1)}% index reuse',
  );
}
