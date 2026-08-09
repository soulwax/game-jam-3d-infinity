import 'dart:typed_data';

import 'package:pixeldart/rendering/api/mesh.dart' as pixeldart;
import 'package:pixeldart/rendering/math/bounds.dart' as pixeldart_bounds;
import 'package:pixeldart/rendering/math/vec.dart' as pixeldart_vec;

import 'exterior_mesh.dart';

final class ExteriorMeshPart {
  final int material;
  final pixeldart.MeshData mesh;

  const ExteriorMeshPart({required this.material, required this.mesh});
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
    localBounds: pixeldart_bounds.Aabb(
      pixeldart_vec.Vec3(mesh.bounds.minX, mesh.bounds.minY, mesh.bounds.minZ),
      pixeldart_vec.Vec3(mesh.bounds.maxX, mesh.bounds.maxY, mesh.bounds.maxZ),
    ),
  );
}

/// Splits the indexed shell into stable material ranges without expanding the
/// authored geometry. QHMX vertices are shared only when their material is
/// equal, so each triangle has one unambiguous slot; remapping only the
/// vertices referenced by a slot keeps the handoff indexed and compact.
List<ExteriorMeshPart> toPixeldartMeshParts(HouseExteriorMesh mesh) {
  mesh.validate();
  final indicesByMaterial = <int, List<int>>{};
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
    (indicesByMaterial[material] ??= <int>[]).addAll([a, b, c]);
  }
  final parts = <ExteriorMeshPart>[];
  for (final material in indicesByMaterial.keys.toList()..sort()) {
    final sourceIndices = indicesByMaterial[material]!;
    final remap = <int, int>{};
    final vertices = <ExteriorVertex>[];
    final indices = <int>[];
    for (final sourceIndex in sourceIndices) {
      final localIndex = remap[sourceIndex] ??= vertices.length;
      if (localIndex == vertices.length) {
        vertices.add(mesh.vertices[sourceIndex]);
      }
      indices.add(localIndex);
    }
    final partMesh = toPixeldartMeshData(
      HouseExteriorMesh(
        vertices: vertices,
        indices: Uint16List.fromList(indices),
        bounds: _boundsFor(vertices),
      ),
    );
    parts.add(ExteriorMeshPart(material: material, mesh: partMesh));
  }
  return parts;
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
