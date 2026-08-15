import 'dart:typed_data';

import 'package:pixeldart/pixeldart.dart' as pixeldart;

import 'exterior_mesh.dart';
import 'exterior_pvs.dart';

final class ExteriorMeshPart {
  final int material;
  final pixeldart.MeshData mesh;

  const ExteriorMeshPart({required this.material, required this.mesh});
}

/// One indexed material range owned by an authored exterior PVS cell.
/// Cell partitioning is renderer-neutral; the runtime decides which returned
/// parts to submit for the current room/camera band.
final class ExteriorCellMeshPart {
  final String cellId;
  final int material;
  final pixeldart.MeshData mesh;

  const ExteriorCellMeshPart({
    required this.cellId,
    required this.material,
    required this.mesh,
  });
}

/// Converts the compact house-owned QHMX representation into the renderer's
/// compatibility layout without expanding the triangle index buffer. Material
/// slot selection is carried in the legacy material-effect float; the actual
/// palette remains owned by the renderer/material manifest.
pixeldart.MeshData toPixeldartMeshData(HouseExteriorMesh mesh) {
  mesh.validate();
  final vertices = Float32List(mesh.vertices.length * 14);
  for (var i = 0; i < mesh.vertices.length; i++) {
    final source = mesh.vertices[i];
    final offset = i * 14;
    vertices[offset] = source.x;
    vertices[offset + 1] = source.y;
    vertices[offset + 2] = source.z;
    vertices[offset + 3] = source.nx;
    vertices[offset + 4] = source.ny;
    vertices[offset + 5] = source.nz;
    vertices[offset + 6] = 1;
    vertices[offset + 7] = 1;
    vertices[offset + 8] = 1;
    vertices[offset + 9] = 0;
    vertices[offset + 10] = 1;
    vertices[offset + 11] = source.u;
    vertices[offset + 12] = source.v;
    vertices[offset + 13] = source.material.toDouble();
  }
  return pixeldart.MeshData(
    layout: pixeldart.VertexLayoutDescriptor.compatibility14,
    vertices: vertices,
    indices: Uint16List.fromList(mesh.indices),
    localBounds: pixeldart.Aabb(
      pixeldart.Vec3(mesh.bounds.minX, mesh.bounds.minY, mesh.bounds.minZ),
      pixeldart.Vec3(mesh.bounds.maxX, mesh.bounds.maxY, mesh.bounds.maxZ),
    ),
  );
}

/// Splits the indexed shell into stable material ranges without expanding the
/// authored geometry. QHMX vertices are shared only when their material is
/// equal, so each triangle has one unambiguous slot; remapping only the
/// vertices referenced by a slot keeps the handoff indexed and compact.
List<ExteriorMeshPart> toPixeldartMeshParts(HouseExteriorMesh mesh) {
  return [
    for (final part in _splitParts(mesh, (material, _, __, ___) => '$material'))
      ExteriorMeshPart(material: part.material, mesh: part.mesh),
  ];
}

/// Splits the shell into deterministic PVS-cell/material ranges. Each source
/// triangle is assigned once from its centroid, so filtering cells never
/// duplicates geometry or changes mesh ownership. The spatial classifier is a
/// conservative presentation partition for the current authored shell; room,
/// portal, and collision truth remain in [ExteriorPvs]/[House].
List<ExteriorCellMeshPart> toPixeldartCellMeshParts(HouseExteriorMesh mesh) {
  return [
    for (final part in _splitParts(
      mesh,
      (material, a, b, c) =>
          '${_cellForTriangle(mesh.bounds, a, b, c)}:$material',
    ))
      ExteriorCellMeshPart(
        cellId: part.cellId!,
        material: part.material,
        mesh: part.mesh,
      ),
  ];
}

List<_MeshPartGroupResult> _splitParts(
  HouseExteriorMesh mesh,
  String Function(
    int material,
    ExteriorVertex a,
    ExteriorVertex b,
    ExteriorVertex c,
  )
  keyFor,
) {
  mesh.validate();
  final groups = <String, _MeshPartGroup>{};
  for (var i = 0; i < mesh.indices.length; i += 3) {
    final a = mesh.indices[i];
    final b = mesh.indices[i + 1];
    final c = mesh.indices[i + 2];
    final material = mesh.vertices[a].material;
    if (mesh.vertices[b].material != material ||
        mesh.vertices[c].material != material) {
      throw ArgumentError(
        'QHMX triangle $i crosses material slots $material, '
        '${mesh.vertices[b].material}, ${mesh.vertices[c].material}',
      );
    }
    final key = keyFor(
      material,
      mesh.vertices[a],
      mesh.vertices[b],
      mesh.vertices[c],
    );
    (groups[key] ??= _MeshPartGroup(
      key: key,
      cellId: key.contains(':') ? key.substring(0, key.indexOf(':')) : null,
      material: material,
    )).indices.addAll([a, b, c]);
  }
  return [
    for (final group
        in groups.values.toList()..sort((a, b) => a.key.compareTo(b.key)))
      group.withMesh(mesh),
  ];
}

String _cellForTriangle(
  ExteriorBounds bounds,
  ExteriorVertex a,
  ExteriorVertex b,
  ExteriorVertex c,
) {
  final x = (a.x + b.x + c.x) / 3;
  final y = (a.y + b.y + c.y) / 3;
  final z = (a.z + b.z + c.z) / 3;
  final roofline = bounds.maxY - 2.5;
  final cell = y >= roofline
      ? 'opposite-house'
      : z <= bounds.minZ + 1.2
      ? 'front'
      : z >= bounds.maxZ - 1.2
      ? 'rear-service'
      : x <= bounds.minX + 1.2 || x >= bounds.maxX - 1.2
      ? 'side-boundary'
      : 'street';
  if (!ExteriorPvs.allCells.contains(cell)) {
    throw StateError('exterior mesh classifier produced unknown cell $cell');
  }
  return cell;
}

final class _MeshPartGroup {
  final String key;
  final String? cellId;
  final int material;
  final List<int> indices = [];

  _MeshPartGroup({
    required this.key,
    required this.cellId,
    required this.material,
  });

  _MeshPartGroupResult withMesh(HouseExteriorMesh source) {
    final remap = <int, int>{};
    final vertices = <ExteriorVertex>[];
    final localIndices = <int>[];
    for (final sourceIndex in indices) {
      final localIndex = remap[sourceIndex] ??= vertices.length;
      if (localIndex == vertices.length) {
        vertices.add(source.vertices[sourceIndex]);
      }
      localIndices.add(localIndex);
    }
    final partMesh = toPixeldartMeshData(
      HouseExteriorMesh(
        vertices: vertices,
        indices: Uint16List.fromList(localIndices),
        bounds: _boundsFor(vertices),
      ),
    );
    return _MeshPartGroupResult(
      key: key,
      cellId: cellId,
      material: material,
      mesh: partMesh,
    );
  }
}

final class _MeshPartGroupResult extends _MeshPartGroup {
  final pixeldart.MeshData mesh;

  _MeshPartGroupResult({
    required super.key,
    required super.cellId,
    required super.material,
    required this.mesh,
  });
}

ExteriorBounds _boundsFor(List<ExteriorVertex> vertices) {
  var minX = double.infinity;
  var minY = double.infinity;
  var minZ = double.infinity;
  var maxX = -double.infinity;
  var maxY = -double.infinity;
  var maxZ = -double.infinity;
  for (final vertex in vertices) {
    minX = minX < vertex.x ? minX : vertex.x;
    minY = minY < vertex.y ? minY : vertex.y;
    minZ = minZ < vertex.z ? minZ : vertex.z;
    maxX = maxX > vertex.x ? maxX : vertex.x;
    maxY = maxY > vertex.y ? maxY : vertex.y;
    maxZ = maxZ > vertex.z ? maxZ : vertex.z;
  }
  return ExteriorBounds(
    minX: minX,
    minY: minY,
    minZ: minZ,
    maxX: maxX,
    maxY: maxY,
    maxZ: maxZ,
  );
}
