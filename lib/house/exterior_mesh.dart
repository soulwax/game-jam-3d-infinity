import 'dart:math' as math;
import 'dart:typed_data';

/// Compact indexed exterior mesh format used by the authored house shell.
///
/// QHMX v1 deliberately differs from the legacy expanded 14-float stream:
/// each vertex stores quantized position (u16x3), octahedral normal (u16x2),
/// UV (u16x2), material and flags in a fixed 16-byte record, followed by a
/// u16 triangle index buffer. The header stores the local AABB needed to
/// reconstruct positions. It is small, deterministic, and maps directly to
/// Pixeldart's indexed MeshData once decoded.
const int qhmxVertexStride = 16;
const int qhmxHeaderBytes = 40;
const int qhmxMaxVertices = 65535;

enum HouseExteriorMeshRejection {
  tooShort,
  badMagic,
  unsupportedVersion,
  unsupportedStride,
  truncatedPayload,
  invalidCounts,
  invalidBounds,
  nonFiniteVertex,
  indexOutOfRange,
}

final class HouseExteriorMeshException implements Exception {
  final HouseExteriorMeshRejection reason;
  final String detail;

  const HouseExteriorMeshException(this.reason, this.detail);

  @override
  String toString() => 'QHMX rejection ${reason.name}: $detail';
}

final class ExteriorVertex {
  final double x;
  final double y;
  final double z;
  final double nx;
  final double ny;
  final double nz;
  final double u;
  final double v;
  final int material;
  final int flags;

  const ExteriorVertex({
    required this.x,
    required this.y,
    required this.z,
    required this.nx,
    required this.ny,
    required this.nz,
    required this.u,
    required this.v,
    required this.material,
    this.flags = 0,
  });
}

final class ExteriorBounds {
  final double minX;
  final double minY;
  final double minZ;
  final double maxX;
  final double maxY;
  final double maxZ;

  const ExteriorBounds({
    required this.minX,
    required this.minY,
    required this.minZ,
    required this.maxX,
    required this.maxY,
    required this.maxZ,
  });

  List<double> get values => [minX, minY, minZ, maxX, maxY, maxZ];

  bool get isValid =>
      values.every((value) => value.isFinite) &&
      maxX >= minX &&
      maxY >= minY &&
      maxZ >= minZ;
}

final class HouseExteriorMesh {
  final List<ExteriorVertex> vertices;
  final Uint16List indices;
  final ExteriorBounds bounds;

  const HouseExteriorMesh({
    required this.vertices,
    required this.indices,
    required this.bounds,
  });

  int get triangleCount => indices.length ~/ 3;
  int get expandedVertexCount => indices.length;
  double get indexReuse =>
      expandedVertexCount == 0 ? 0 : 1 - vertices.length / expandedVertexCount;

  void validate() {
    if (vertices.isEmpty || indices.isEmpty || indices.length % 3 != 0) {
      throw ArgumentError('QHMX mesh needs indexed triangles');
    }
    if (vertices.length > qhmxMaxVertices) {
      throw ArgumentError('QHMX mesh exceeds 16-bit vertex capacity');
    }
    if (!bounds.isValid) {
      throw ArgumentError('QHMX bounds are invalid');
    }
    for (final vertex in vertices) {
      final values = [
        vertex.x,
        vertex.y,
        vertex.z,
        vertex.nx,
        vertex.ny,
        vertex.nz,
        vertex.u,
        vertex.v,
      ];
      if (values.any((value) => !value.isFinite)) {
        throw ArgumentError('QHMX contains a non-finite vertex');
      }
      if (vertex.material < 0 ||
          vertex.material > 255 ||
          vertex.flags < 0 ||
          vertex.flags > 255) {
        throw ArgumentError('QHMX material/flags must fit u8');
      }
    }
    for (final index in indices) {
      if (index >= vertices.length) {
        throw ArgumentError('QHMX index $index exceeds vertex count');
      }
    }
  }
}

/// Deterministic indexed builder with exact attribute-aware vertex reuse.
final class HouseExteriorMeshBuilder {
  final List<ExteriorVertex> _vertices = [];
  final List<int> _indices = [];
  final Map<String, int> _lookup = {};

  void quad(
    ExteriorVertex a,
    ExteriorVertex b,
    ExteriorVertex c,
    ExteriorVertex d,
  ) {
    _triangle(a, b, c);
    _triangle(a, c, d);
  }

  void box({
    required double minX,
    required double minY,
    required double minZ,
    required double maxX,
    required double maxY,
    required double maxZ,
    required int material,
  }) {
    _face(
      minX,
      minY,
      minZ,
      maxX,
      minY,
      minZ,
      maxX,
      maxY,
      minZ,
      minX,
      maxY,
      minZ,
      0,
      0,
      -1,
      material,
    );
    _face(
      maxX,
      minY,
      maxZ,
      minX,
      minY,
      maxZ,
      minX,
      maxY,
      maxZ,
      maxX,
      maxY,
      maxZ,
      0,
      0,
      1,
      material,
    );
    _face(
      minX,
      minY,
      maxZ,
      minX,
      minY,
      minZ,
      minX,
      maxY,
      minZ,
      minX,
      maxY,
      maxZ,
      -1,
      0,
      0,
      material,
    );
    _face(
      maxX,
      minY,
      minZ,
      maxX,
      minY,
      maxZ,
      maxX,
      maxY,
      maxZ,
      maxX,
      maxY,
      minZ,
      1,
      0,
      0,
      material,
    );
    _face(
      minX,
      maxY,
      minZ,
      maxX,
      maxY,
      minZ,
      maxX,
      maxY,
      maxZ,
      minX,
      maxY,
      maxZ,
      0,
      1,
      0,
      material,
    );
    _face(
      minX,
      minY,
      maxZ,
      maxX,
      minY,
      maxZ,
      maxX,
      minY,
      minZ,
      minX,
      minY,
      minZ,
      0,
      -1,
      0,
      material,
    );
  }

  void _face(
    double ax,
    double ay,
    double az,
    double bx,
    double by,
    double bz,
    double cx,
    double cy,
    double cz,
    double dx,
    double dy,
    double dz,
    double nx,
    double ny,
    double nz,
    int material,
  ) {
    quad(
      _v(ax, ay, az, nx, ny, nz, 0, 0, material),
      _v(bx, by, bz, nx, ny, nz, 1, 0, material),
      _v(cx, cy, cz, nx, ny, nz, 1, 1, material),
      _v(dx, dy, dz, nx, ny, nz, 0, 1, material),
    );
  }

  void _triangle(ExteriorVertex a, ExteriorVertex b, ExteriorVertex c) {
    _indices
      ..add(_index(a))
      ..add(_index(b))
      ..add(_index(c));
  }

  int _index(ExteriorVertex vertex) {
    final key = [
      vertex.x,
      vertex.y,
      vertex.z,
      vertex.nx,
      vertex.ny,
      vertex.nz,
      vertex.u,
      vertex.v,
      vertex.material,
      vertex.flags,
    ].join('|');
    final existing = _lookup[key];
    if (existing != null) return existing;
    if (_vertices.length >= qhmxMaxVertices) {
      throw StateError('QHMX builder exceeded 16-bit vertex capacity');
    }
    final index = _vertices.length;
    _vertices.add(vertex);
    _lookup[key] = index;
    return index;
  }

  ExteriorVertex _v(
    double x,
    double y,
    double z,
    double nx,
    double ny,
    double nz,
    double u,
    double v,
    int material,
  ) => ExteriorVertex(
    x: x,
    y: y,
    z: z,
    nx: nx,
    ny: ny,
    nz: nz,
    u: u,
    v: v,
    material: material,
  );

  HouseExteriorMesh build() {
    if (_vertices.isEmpty) {
      throw StateError('QHMX builder has no triangles');
    }
    var minX = double.infinity;
    var minY = double.infinity;
    var minZ = double.infinity;
    var maxX = -double.infinity;
    var maxY = -double.infinity;
    var maxZ = -double.infinity;
    for (final vertex in _vertices) {
      minX = math.min(minX, vertex.x);
      minY = math.min(minY, vertex.y);
      minZ = math.min(minZ, vertex.z);
      maxX = math.max(maxX, vertex.x);
      maxY = math.max(maxY, vertex.y);
      maxZ = math.max(maxZ, vertex.z);
    }
    final mesh = HouseExteriorMesh(
      vertices: List.unmodifiable(_vertices),
      indices: Uint16List.fromList(_indices),
      bounds: ExteriorBounds(
        minX: minX,
        minY: minY,
        minZ: minZ,
        maxX: maxX,
        maxY: maxY,
        maxZ: maxZ,
      ),
    );
    mesh.validate();
    return mesh;
  }
}

Uint8List encodeHouseExteriorMesh(HouseExteriorMesh mesh) {
  mesh.validate();
  final bytes = Uint8List(
    qhmxHeaderBytes +
        mesh.vertices.length * qhmxVertexStride +
        mesh.indices.length * 2,
  );
  final view = ByteData.sublistView(bytes);
  bytes.setRange(0, 4, const [0x51, 0x48, 0x4D, 0x58]); // QHMX
  view.setUint16(4, 1, Endian.little);
  view.setUint16(6, qhmxVertexStride, Endian.little);
  view.setUint32(8, mesh.vertices.length, Endian.little);
  view.setUint32(12, mesh.indices.length, Endian.little);
  for (var i = 0; i < 6; i++) {
    view.setFloat32(16 + i * 4, mesh.bounds.values[i], Endian.little);
  }
  final extentX = mesh.bounds.maxX - mesh.bounds.minX;
  final extentY = mesh.bounds.maxY - mesh.bounds.minY;
  final extentZ = mesh.bounds.maxZ - mesh.bounds.minZ;
  var offset = qhmxHeaderBytes;
  for (final vertex in mesh.vertices) {
    view.setUint16(
      offset,
      _quantize(vertex.x, mesh.bounds.minX, extentX),
      Endian.little,
    );
    view.setUint16(
      offset + 2,
      _quantize(vertex.y, mesh.bounds.minY, extentY),
      Endian.little,
    );
    view.setUint16(
      offset + 4,
      _quantize(vertex.z, mesh.bounds.minZ, extentZ),
      Endian.little,
    );
    final normal = _encodeOcta(vertex.nx, vertex.ny, vertex.nz);
    view.setUint16(offset + 6, normal.$1, Endian.little);
    view.setUint16(offset + 8, normal.$2, Endian.little);
    view.setUint16(offset + 10, _quantizeUnit(vertex.u), Endian.little);
    view.setUint16(offset + 12, _quantizeUnit(vertex.v), Endian.little);
    view.setUint8(offset + 14, vertex.material);
    view.setUint8(offset + 15, vertex.flags);
    offset += qhmxVertexStride;
  }
  for (final index in mesh.indices) {
    view.setUint16(offset, index, Endian.little);
    offset += 2;
  }
  return bytes;
}

HouseExteriorMesh decodeHouseExteriorMesh(Uint8List bytes) {
  if (bytes.length < qhmxHeaderBytes) {
    throw HouseExteriorMeshException(
      HouseExteriorMeshRejection.tooShort,
      '${bytes.length} bytes, need $qhmxHeaderBytes',
    );
  }
  if (bytes[0] != 0x51 ||
      bytes[1] != 0x48 ||
      bytes[2] != 0x4D ||
      bytes[3] != 0x58) {
    throw const HouseExteriorMeshException(
      HouseExteriorMeshRejection.badMagic,
      'expected QHMX magic',
    );
  }
  final view = ByteData.sublistView(bytes);
  if (view.getUint16(4, Endian.little) != 1) {
    throw const HouseExteriorMeshException(
      HouseExteriorMeshRejection.unsupportedVersion,
      'only QHMX v1 is supported',
    );
  }
  if (view.getUint16(6, Endian.little) != qhmxVertexStride) {
    throw const HouseExteriorMeshException(
      HouseExteriorMeshRejection.unsupportedStride,
      'QHMX v1 vertex stride must be 16 bytes',
    );
  }
  final vertexCount = view.getUint32(8, Endian.little);
  final indexCount = view.getUint32(12, Endian.little);
  final expected =
      qhmxHeaderBytes + vertexCount * qhmxVertexStride + indexCount * 2;
  if (vertexCount == 0 ||
      vertexCount > qhmxMaxVertices ||
      indexCount == 0 ||
      indexCount % 3 != 0 ||
      bytes.length != expected) {
    throw HouseExteriorMeshException(
      HouseExteriorMeshRejection.invalidCounts,
      'vertices=$vertexCount indices=$indexCount bytes=${bytes.length} expected=$expected',
    );
  }
  final bounds = ExteriorBounds(
    minX: view.getFloat32(16, Endian.little),
    minY: view.getFloat32(20, Endian.little),
    minZ: view.getFloat32(24, Endian.little),
    maxX: view.getFloat32(28, Endian.little),
    maxY: view.getFloat32(32, Endian.little),
    maxZ: view.getFloat32(36, Endian.little),
  );
  if (!bounds.isValid) {
    throw const HouseExteriorMeshException(
      HouseExteriorMeshRejection.invalidBounds,
      'bounds are non-finite or inverted',
    );
  }
  final extentX = bounds.maxX - bounds.minX;
  final extentY = bounds.maxY - bounds.minY;
  final extentZ = bounds.maxZ - bounds.minZ;
  final vertices = <ExteriorVertex>[];
  var offset = qhmxHeaderBytes;
  for (var i = 0; i < vertexCount; i++) {
    final x = _dequantize(
      view.getUint16(offset, Endian.little),
      bounds.minX,
      extentX,
    );
    final y = _dequantize(
      view.getUint16(offset + 2, Endian.little),
      bounds.minY,
      extentY,
    );
    final z = _dequantize(
      view.getUint16(offset + 4, Endian.little),
      bounds.minZ,
      extentZ,
    );
    final normal = _decodeOcta(
      view.getUint16(offset + 6, Endian.little),
      view.getUint16(offset + 8, Endian.little),
    );
    final vertex = ExteriorVertex(
      x: x,
      y: y,
      z: z,
      nx: normal.$1,
      ny: normal.$2,
      nz: normal.$3,
      u: _dequantizeUnit(view.getUint16(offset + 10, Endian.little)),
      v: _dequantizeUnit(view.getUint16(offset + 12, Endian.little)),
      material: view.getUint8(offset + 14),
      flags: view.getUint8(offset + 15),
    );
    vertices.add(vertex);
    offset += qhmxVertexStride;
  }
  final indices = Uint16List(indexCount);
  for (var i = 0; i < indexCount; i++) {
    final index = view.getUint16(offset, Endian.little);
    if (index >= vertexCount) {
      throw HouseExteriorMeshException(
        HouseExteriorMeshRejection.indexOutOfRange,
        'index $index exceeds vertex count $vertexCount',
      );
    }
    indices[i] = index;
    offset += 2;
  }
  return HouseExteriorMesh(
    vertices: List.unmodifiable(vertices),
    indices: indices,
    bounds: bounds,
  );
}

int _quantize(double value, double min, double extent) => extent.abs() < 1e-12
    ? 0
    : ((value - min) / extent * 65535).round().clamp(0, 65535);

double _dequantize(int value, double min, double extent) =>
    min + extent * (value / 65535);

int _quantizeUnit(double value) => (value.clamp(0.0, 1.0) * 65535).round();

double _dequantizeUnit(int value) => value / 65535;

(int, int) _encodeOcta(double x, double y, double z) {
  final length = x.abs() + y.abs() + z.abs();
  if (length < 1e-12) return (32768, 32768);
  x /= length;
  y /= length;
  z /= length;
  if (z < 0) {
    final oldX = x;
    x = (1 - y.abs()) * (oldX < 0 ? -1 : 1);
    y = (1 - oldX.abs()) * (y < 0 ? -1 : 1);
  }
  return (_quantizeUnit(x * 0.5 + 0.5), _quantizeUnit(y * 0.5 + 0.5));
}

(double, double, double) _decodeOcta(int packedX, int packedY) {
  var x = packedX / 65535 * 2 - 1;
  var y = packedY / 65535 * 2 - 1;
  var z = 1 - x.abs() - y.abs();
  if (z < 0) {
    final oldX = x;
    x = (1 - y.abs()) * (oldX < 0 ? -1 : 1);
    y = (1 - oldX.abs()) * (y < 0 ? -1 : 1);
    z = 1 - x.abs() - y.abs();
  }
  final length = math.sqrt(x * x + y * y + z * z);
  return length < 1e-12 ? (0, 1, 0) : (x / length, y / length, z / length);
}
