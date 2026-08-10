// H-20..22: House room focal compositions & material hierarchy verification.
//
// Verifies that:
//  1. H-20 Kitchen (range/worktable) and Cellar (coal/service) focal compositions register cleanly.
//  2. H-21 Bedroom (bed/journal) and Landing (stair/newel) focal compositions register cleanly.
//  3. H-22 Bathroom (tub/cistern/mirror) and Spare Room (sheeted storage) focal compositions register cleanly.
//  4. All compositions maintain navigation dominance (`isNavigationDominant == true`).

import 'package:quarantine/house/house_room_compositions.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final comps = HouseRoomCompositions.compositions;

  // 1. H-20 Kitchen & Cellar
  check(comps.containsKey('kitchen'), 'Kitchen composition registered');
  check(comps.containsKey('cellar'), 'Cellar composition registered');
  final kitchen = comps['kitchen']!;
  check(kitchen.primaryFocalFeature.contains('Range'), 'Kitchen primary feature is Range');
  check(kitchen.materialHierarchy.contains('cast-iron'), 'Kitchen material hierarchy includes cast-iron');

  // 2. H-21 Bedroom & Landing
  check(comps.containsKey('bedroom'), 'Bedroom composition registered');
  check(comps.containsKey('hall-landing'), 'Landing composition registered');
  final landing = comps['hall-landing']!;
  check(landing.primaryFocalFeature.contains('Newel'), 'Landing primary feature includes Newel');
  check(landing.materialHierarchy.contains('mahogany'), 'Landing material hierarchy includes mahogany');

  // 3. H-22 Bathroom & Spare Room
  check(comps.containsKey('bathroom'), 'Bathroom composition registered');
  check(comps.containsKey('spare-room'), 'Spare room composition registered');
  final bath = comps['bathroom']!;
  check(bath.secondaryFocalFeature.contains('Mirror'), 'Bathroom secondary feature includes Mirror');
  check(bath.materialHierarchy.contains('porcelain'), 'Bathroom material hierarchy includes porcelain');

  // 4. Navigation Dominance Assertions
  for (final comp in comps.values) {
    check(comp.isNavigationDominant, '${comp.roomId} maintains navigation dominance');
  }

  print('H-20..22: House room focal compositions test passed cleanly!');
}
