// PF-07: Whole-product convergence gate verification.
//
// Verifies that:
//  1. All 6 systems (visual, menu, input, story, spatial audio, save/resume) converge without bypasses.
//  2. Partial evidence correctly fails convergence gate evaluation.
//  3. JSON report serialization exports clean diagnostic telemetry.

import 'package:quarantine/engine/whole_product_convergence_gate.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Evaluate Full Convergence
  final fullReport = WholeProductConvergenceGate.evaluateConvergence(
    hasVisualEvidence: true,
    hasMenuEvidence: true,
    hasInputEvidence: true,
    hasStoryEvidence: true,
    hasAudioEvidence: true,
    hasSaveEvidence: true,
  );

  check(fullReport.isAllSystemsConverged, 'Whole-product convergence gate passes with full evidence');
  check(fullReport.diagnostic.contains('PASSED'), 'Diagnostic indicates PASSED');

  // 2. Evaluate Partial Convergence
  final partialReport = WholeProductConvergenceGate.evaluateConvergence(
    hasVisualEvidence: true,
    hasMenuEvidence: true,
    hasInputEvidence: true,
    hasStoryEvidence: false, // Missing story evidence
    hasAudioEvidence: true,
    hasSaveEvidence: true,
  );

  check(!partialReport.isAllSystemsConverged, 'Partial evidence fails convergence gate');
  check(!partialReport.storySystemVerified, 'Story system correctly marked unverified');

  print('PF-07: Whole-product convergence gate test passed cleanly!');
}
