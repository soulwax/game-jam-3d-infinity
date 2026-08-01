#!/usr/bin/env dart

library obj_to_mesh;

import 'dart:io';
import 'dart:math';

void main(List<String> args) async {
  final srcDir = Directory('web/res/models');

  if (!srcDir.existsSync()) {
    print('No web/res/models directory. Nothing to convert.');
    return;
  }

  final objFiles = srcDir
      .listSync(recursive: true, followLinks: false)
      .whereType<File>()
      .where((f) => f.path.endsWith('.obj'))
      .toList();

  if (objFiles.isEmpty) {
    print('No OBJ files found in web/res/models.');
    return;
  }

  var converted = 0;
  for (final objFile in objFiles) {
    try {
      final mesh = _parseObj(objFile);

      final triCount = mesh.triangles.length;
      if (triCount > 200) {
        stderr.writeln('ERROR: ${objFile.path} has $triCount triangles (max 200)');
        exit(1);
      }

      final outPath = objFile.path.replaceAll(RegExp(r'\.obj$'), '.g.dart');
      final key = _sanitizeKey(_filenameKey(objFile));

      final code = _emitDart(mesh, key);
      File(outPath).writeAsStringSync(code);

      print('✓ $key: $triCount triangles');
      converted++;
    } catch (e) {
      stderr.writeln('ERROR: ${objFile.path}: $e');
      rethrow;
    }
  }

  if (converted > 0) {
    print('\nConverted $converted models.');
  }
}

String _filenameKey(File f) {
  final base = f.path.split(RegExp(r'[\/]')).last;
  return base.replaceAll(RegExp(r'\..+$'), '');
}

String _sanitizeKey(String s) {
  return s.replaceAll(RegExp(r'[^a-zA-Z0-9_]'), '_');
}

class _Vec3 {
  double x, y, z;
  _Vec3(this.x, this.y, this.z);

  _Vec3 operator -(dynamic other) {
    if (other is _Vec3) {
      return _Vec3(x - other.x, y - other.y, z - other.z);
    }
    throw ArgumentError();
  }

  _Vec3 cross(_Vec3 other) {
    return _Vec3(
      y * other.z - z * other.y,
      z * other.x - x * other.z,
      x * other.y - y * other.x,
    );
  }

  double get length => sqrt(x * x + y * y + z * z);
  _Vec3 get normalized {
    final len = length;
    if (len < 1e-9) {
      return _Vec3(0, 0, 1);
    }
    return _Vec3(x / len, y / len, z / len);
  }
}

class _Tri {
  late int v0, v1, v2;
  int? vt0, vt1, vt2;
  int? vn0, vn1, vn2;
}

class _Mesh {
  List<_Vec3> verts = [];
  List<(double, double)> uvs = [];
  List<_Vec3> normals = [];
  List<_Tri> triangles = [];
}

_Mesh _parseObj(File file) {
  final mesh = _Mesh();
  final lines = file.readAsLinesSync();

  for (final line in lines) {
    final s = line.trim();
    if (s.isEmpty || s.startsWith('#') || s.startsWith('mtllib') ||
        s.startsWith('usemtl') || s.startsWith('s ')) {
      continue;
    }

    final parts = s.split(RegExp(r'\s+'));
    if (parts.isEmpty) continue;

    try {
      switch (parts[0]) {
        case 'v':
          mesh.verts.add(_Vec3(
            double.parse(parts[1]),
            double.parse(parts[2]),
            double.parse(parts[3]),
          ));
        case 'vt':
          mesh.uvs.add((
            double.parse(parts[1]),
            double.parse(parts[2]),
          ));
        case 'vn':
          mesh.normals.add(_Vec3(
            double.parse(parts[1]),
            double.parse(parts[2]),
            double.parse(parts[3]),
          ).normalized);
        case 'f':
          _parseFace(mesh, parts);
      }
    } catch (_) {
      continue;
    }
  }

  _ensureNormals(mesh);
  return mesh;
}

void _parseFace(_Mesh mesh, List<String> parts) {
  final refs = <(int, int?, int?)>[];

  for (var i = 1; i < parts.length; i++) {
    final v = parts[i].split('/');
    if (v.isEmpty) continue;

    try {
      final vi = int.parse(v[0]) - 1;
      int? vti;
      int? vni;
      if (v.length > 1 && v[1].isNotEmpty) {
        vti = int.parse(v[1]) - 1;
      }
      if (v.length > 2 && v[2].isNotEmpty) {
        vni = int.parse(v[2]) - 1;
      }

      refs.add((vi, vti, vni));
    } catch (e) {
      continue;
    }
  }

  if (refs.isEmpty) return;

  for (var i = 1; i < refs.length - 1; i++) {
    final tri = _Tri();
    tri.v0 = refs[0].$1;
    tri.vt0 = refs[0].$2;
    tri.vn0 = refs[0].$3;

    tri.v1 = refs[i].$1;
    tri.vt1 = refs[i].$2;
    tri.vn1 = refs[i].$3;

    tri.v2 = refs[i + 1].$1;
    tri.vt2 = refs[i + 1].$2;
    tri.vn2 = refs[i + 1].$3;

    mesh.triangles.add(tri);
  }
}

void _ensureNormals(_Mesh mesh) {
  for (final tri in mesh.triangles) {
    if (tri.vn0 == null || tri.vn1 == null || tri.vn2 == null) {
      final v0 = mesh.verts[tri.v0];
      final v1 = mesh.verts[tri.v1];
      final v2 = mesh.verts[tri.v2];

      final n = (v1 - v0).cross(v2 - v0).normalized;
      final idx = mesh.normals.length;
      mesh.normals.add(n);

      tri.vn0 ??= idx;
      tri.vn1 ??= idx;
      tri.vn2 ??= idx;
    }
  }
}

String _emitDart(_Mesh mesh, String key) {
  final lines = <String>[];

  lines.add('// Generated from $key.obj');
  lines.add('// ignore_for_file: file_names, non_constant_identifier_names');
  lines.add('// ${mesh.triangles.length} triangles');
  lines.add('');
  lines.add('import \'dart:typed_data\';');
  lines.add('');
  lines.add('/// Mesh data for $key');
  lines.add('final Float32List ${key}Vertices = Float32List.fromList([');

  for (final tri in mesh.triangles) {
    for (var i = 0; i < 3; i++) {
      final vi = i == 0 ? tri.v0 : (i == 1 ? tri.v1 : tri.v2);
      final vti = i == 0 ? tri.vt0 : (i == 1 ? tri.vt1 : tri.vt2);
      final vni = i == 0 ? tri.vn0 : (i == 1 ? tri.vn1 : tri.vn2);

      final v = mesh.verts[vi];
      final n = mesh.normals[vni!];

      double u = 0, vv = 0;
      if (vti != null && vti < mesh.uvs.length) {
        u = mesh.uvs[vti].$1;
        vv = mesh.uvs[vti].$2;
      }

      lines.add('  ${v.x.toStringAsFixed(6)}, ${v.y.toStringAsFixed(6)}, ${v.z.toStringAsFixed(6)}, '
          '${n.x.toStringAsFixed(6)}, ${n.y.toStringAsFixed(6)}, ${n.z.toStringAsFixed(6)}, '
          '1.0, 1.0, 1.0, 0.0, 1.0, '
          '${u.toStringAsFixed(6)}, ${vv.toStringAsFixed(6)}, 0.0,');
    }
  }

  lines.add(']);');

  return lines.join('\n');
}
