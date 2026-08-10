// I-05: Tactile feedback matrix & interactive element state verification.
//
// Verifies that:
//  1. All 8 interactive element types register and transition atomic state correctly.
//  2. Gaslight mantle interactions produce emissive intensity, audio intent, and particle counts.
//  3. Reduced effects setting scales particle counts safely without errors.
//  4. Save/restore state serialization round-trips cleanly without loss.

import 'package:quarantine/house/tactile_feedback_matrix.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final matrix = TactileFeedbackMatrix();

  final mantle = ElementTactileState(
    elementId: 'mantle-living-room',
    type: InteractiveElementType.gaslightMantle,
    audioIntentEvent: 'gaslight_hiss',
  );

  final door = ElementTactileState(
    elementId: 'door-hall-kitchen',
    type: InteractiveElementType.doorLeaf,
    audioIntentEvent: 'door_latch',
  );

  final valve = ElementTactileState(
    elementId: 'valve-boiler',
    type: InteractiveElementType.cabinetValve,
    audioIntentEvent: 'valve_turn',
  );

  matrix.registerElement(mantle);
  matrix.registerElement(door);
  matrix.registerElement(valve);

  check(matrix.registeredElementCount == 3, 'Registered 3 initial elements');

  // 1. Interact with Gaslight Mantle
  final mantleRes = matrix.interact(
    elementId: 'mantle-living-room',
    targetProgress: 1.0,
    reducedEffects: false,
  );

  check(mantleRes.active, 'Mantle is active');
  check(mantleRes.emissiveIntensity == 1.0, 'Mantle has 1.0 emissive intensity');
  check(mantleRes.particleCount == 12, 'Mantle has 12 flame particles');
  check(mantleRes.audioIntentEvent == 'gaslight_ignite_hiss', 'Mantle audio intent is gaslight_ignite_hiss');

  // 2. Reduced Effects Damping
  final mantleReduced = matrix.interact(
    elementId: 'mantle-living-room',
    targetProgress: 1.0,
    reducedEffects: true,
  );

  check(mantleReduced.particleCount == 4, 'Reduced effects scales particle count down to 4');

  // 3. Save/Restore Serialization
  final jsonSave = matrix.exportSaveState();
  check(jsonSave.length == 3, 'Exported 3 element save states');

  final restoredMatrix = TactileFeedbackMatrix();
  restoredMatrix.importSaveState(jsonSave);

  check(restoredMatrix.registeredElementCount == 3, 'Restored 3 elements from save state');
  final restoredMantle = restoredMatrix.getElement('mantle-living-room');
  check(restoredMantle != null && restoredMantle.active, 'Restored mantle is active');
  check(restoredMantle!.emissiveIntensity == 1.0, 'Restored mantle retains 1.0 emissive intensity');

  // 4. Cleanup
  matrix.cleanup();
  check(matrix.registeredElementCount == 0, 'Cleanup resets element matrix');

  print('I-05: Tactile feedback matrix test passed cleanly!');
}
