import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/mesh.dart';
import 'package:quarantine/engine/vertex_format.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

double _normalY(Vec3 a, Vec3 b, Vec3 c, Vec3 d) {
  final mesh = StaticMeshBuilder()..quad(a, b, c, d, 0xFFFFFF);
  return mesh.build()[attrNormalOffset + 1];
}

void main() {
  final floorY = _normalY(
    Vec3(0, 0, 0),
    Vec3(0, 0, 1),
    Vec3(1, 0, 1),
    Vec3(1, 0, 0),
  );
  final ceilingY = _normalY(
    Vec3(0, 2, 0),
    Vec3(1, 2, 0),
    Vec3(1, 2, 1),
    Vec3(0, 2, 1),
  );
  _expect(floorY > 0, 'floor normals must face the room');
  _expect(ceilingY < 0, 'ceiling normals must face into the room');
  _expect(
    vertexStride == 14,
    'the static mesh fixture guards its vertex layout',
  );
  print('floor and ceiling normals face the playable room');
}
