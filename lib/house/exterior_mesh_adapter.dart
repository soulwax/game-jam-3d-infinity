import 'dart:typed_data';

import 'package:pixeldart/rendering/api/mesh.dart' as pixeldart;
import 'package:pixeldart/rendering/math/bounds.dart' as pixeldart_bounds;
import 'package:pixeldart/rendering/math/vec.dart' as pixeldart_vec;

import 'exterior_mesh.dart';

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
