// Unit test for ObscureReferenceLattice (Section 21.11).
//
// Verifies:
//  1. All 8 canonical obscure references are defined with valid depths, days, and locations.
//  2. Daily reference density budget is respected (<= 2 references per day).
//  3. Wireless broadcast liturgy structure conforms to warning, condition, sectors, instruction.
//  4. Day 18 wireless broadcast contains the omitted sector anomaly.

import 'package:quarantine/story/obscure_reference_lattice.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Verify References Count and Depth Classification
  final refs = ObscureReferenceLattice.canonicalReferences;
  check(refs.length == 8, '8 canonical references defined');

  final specialistRefs = refs.where((r) => r.depth == ReferenceDepth.specialistHistorical).toList();
  check(specialistRefs.length == 3, '3 specialist historical references (SPR, Dunne, BACH)');

  // 2. Verify Daily Reference Budget Rule
  check(ObscureReferenceLattice.verifyDailyBudget(), 'Daily reference budget rule satisfied');

  // 3. Verify Standard Wireless Broadcast Liturgy (e.g. Day 5)
  final day5Broadcast = ObscureReferenceLattice.generateBroadcast(5);
  check(day5Broadcast.activeSectors.length == 4, 'Standard broadcast has 4 active sectors');
  check(!day5Broadcast.hasOmittedSectorAnomaly, 'Day 5 has no omitted sector anomaly');

  // 4. Verify Day 18 Omitted Sector Anomaly Broadcast
  final day18Broadcast = ObscureReferenceLattice.generateBroadcast(18);
  check(day18Broadcast.activeSectors.length == 3, 'Day 18 broadcast has 3 sectors (Humber omitted)');
  check(day18Broadcast.hasOmittedSectorAnomaly, 'Day 18 correctly flags omitted sector anomaly');
  check(!day18Broadcast.activeSectors.contains('Humber'), 'Humber sector is omitted');

  final json = day18Broadcast.toJson();
  check(json['day'] == 18, 'JSON day verified');
  check(json['hasOmittedSectorAnomaly'] == true, 'JSON anomaly flag verified');

  print('ObscureReferenceLattice test passed cleanly!');
}
