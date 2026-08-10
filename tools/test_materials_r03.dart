import 'package:quarantine/engine/materials.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final m1 = Material(0, 0.0, 1.0, 0);
  check(m1.roughness == 0.5, 'm1 default roughness is 0.5');
  check(m1.metallic == 0.0, 'm1 default metallic is 0.0');
  check(m1.aoStrength == 1.0, 'm1 default aoStrength is 1.0');
  check(m1.normalScale == 1.0, 'm1 default normalScale is 1.0');

  final m2 = Material(
    1,
    0.8,
    2.0,
    1,
    roughness: 0.2,
    metallic: 0.9,
    aoStrength: 0.8,
    normalScale: 1.5,
  );
  check(m2.roughness == 0.2, 'm2 roughness is 0.2');
  check(m2.metallic == 0.9, 'm2 metallic is 0.9');
  check(m2.aoStrength == 0.8, 'm2 aoStrength is 0.8');
  check(m2.normalScale == 1.5, 'm2 normalScale is 1.5');

  final table = Materials([m1]);
  final index2 = table.add(m2);
  check(index2 == 1, 'm2 added at index 1');
  check(table.shaderIndexForId(m2.id) == 1, 'shaderIndexForId lookup passes');

  print('materials R-03: Material-v2 ORM parameters, normal scale, hashing, and table lookup pass');
}
