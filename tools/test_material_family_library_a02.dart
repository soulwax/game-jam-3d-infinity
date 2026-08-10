// A-02: Reusable material family library verification.
//
// Verifies that:
//  1. All 7 material families (plasterWallpaper, wood, metal, ceramicConcrete, fabric, glass, masks) are present.
//  2. Preset materials have valid roughness [0,1] and metallic [0,1] values.
//  3. Neutral scene lighting validation confirms all families produce distinct diffuse responses under single key light.
//  4. JSON serialization of material descriptors is complete.

import 'package:quarantine/engine/material_family_library.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final lib = MaterialFamilyLibrary();

  // 1. Verify all 7 families exist
  for (final family in MaterialFamily.values) {
    final list = lib.materialsForFamily(family);
    check(list.isNotEmpty, 'Family ${family.name} must have at least one material registered');
  }

  // 2. Check material counts & bounds
  final count = lib.allMaterials.length;
  check(count >= 12, 'Library must contain at least 12 preset materials; found $count');

  for (final mat in lib.allMaterials) {
    check(mat.id.startsWith('mat-'), 'Material id "${mat.id}" must start with mat-');
    check(mat.roughness >= 0.0 && mat.roughness <= 1.0, '${mat.id} roughness in bounds');
    check(mat.metallic >= 0.0 && mat.metallic <= 1.0, '${mat.id} metallic in bounds');
    check(mat.alpha >= 0.0 && mat.alpha <= 1.0, '${mat.id} alpha in bounds');
  }

  // 3. Neutral scene lighting test
  final validLighting = lib.validateNeutralSceneLighting();
  check(validLighting, 'Neutral scene lighting validation must pass across all families');

  // Test light response for wood vs metal vs glass
  final oak = lib.getMaterial('mat-wood-oak-polished')!;
  final iron = lib.getMaterial('mat-iron-cast')!;
  final glass = lib.getMaterial('mat-glass-clear-window')!;

  final oakResp = oak.computeNeutralLightResponse(lightR: 1.0, lightG: 1.0, lightB: 1.0, lightIntensity: 1.0);
  final ironResp = iron.computeNeutralLightResponse(lightR: 1.0, lightG: 1.0, lightB: 1.0, lightIntensity: 1.0);
  final glassResp = glass.computeNeutralLightResponse(lightR: 1.0, lightG: 1.0, lightB: 1.0, lightIntensity: 1.0);

  check(oakResp.r > ironResp.r, 'Wood has higher diffuse response than high-metallic iron');
  check(glass.alpha < 0.5, 'Glass has alpha < 0.5 for transparency');
  check(glassResp.r > 0, 'Glass still produces non-zero light response');

  // 4. Test JSON export
  final json = oak.toJson();
  check(json['id'] == 'mat-wood-oak-polished', 'JSON id matches');
  check(json['family'] == 'wood', 'JSON family matches');

  print('A-02: Material family library test passed cleanly!');
}
