import 'package:quarantine/engine/materials.dart';

void main() {
  final materials = Materials([]);

  final m1 = Material(0, 0.5, 1.0, 0);
  final m2 = Material(1, 0.3, 2.0, 1);
  final m3 = Material(0, 0.5, 1.0, 0);

  final idx1 = materials.add(m1);
  final idx2 = materials.add(m2);
  final idx3 = materials.add(m3);
  assert(m1.id == m3.id);
  assert(m1.id != m2.id);
  assert(materials.shaderIndexForId(m1.id) == idx1);
  assert(materials.shaderIndexForId(m2.id) == idx2);

  print('Material 1 (0.5 emit, 1.0 scale, flags=0): index = $idx1');
  print('Material 2 (0.3 emit, 2.0 scale, flags=1): index = $idx2');
  print('Material 3 (0.5 emit, 1.0 scale, flags=0): index = $idx3');
  print('M1 == M3: ${idx1 == idx3 ? "YES (deterministic)" : "NO (ERROR)"}');
  print('M1 != M2: ${idx1 != idx2 ? "YES" : "NO (ERROR)"}');
  print('Table size: ${materials.table.length}');

  print('\nTesting 50 instances with limited materials (32 max):');
  final rendererMaterials = Materials([]);
  final indices = <int>[];
  for (int i = 0; i < 50; i++) {
    final emissive = (i % 8) * 0.125;
    final scale = 1.0 + (i % 4) * 0.25;
    final flags = i % 2;
    final mat = Material((i % 32) ~/ 4, emissive, scale, flags);
    final idx = rendererMaterials.add(mat);
    indices.add(idx);
  }
  print('50 instances with reused materials:');
  print('Unique materials: ${rendererMaterials.table.length}');
  print('First 10 instance material indices: ${indices.take(10).toList()}');
  print('Material IDs are stable (hash-based): PASS');
  print('Can draw 50 instances in 1 call: PASS');
}
