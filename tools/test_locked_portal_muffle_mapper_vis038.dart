import 'package:quarantine/engine/locked_portal_muffle_mapper.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  // Locked cellar door
  const lockedState = LockedPortalState(
    portalId: 'hall-cellar',
    isLocked: true,
    sticks: true,
    requestedOpenFraction: 1.0, // Attempted open
  );
  check(lockedState.effectiveOpenFraction == 0.0, 'locked door effective fraction is 0.0');

  final lockedFacts = LockedPortalMuffleMapper.evaluatePortal(lockedState);
  check(!lockedFacts.isOpen, 'locked door isOpen is false');
  check((lockedFacts.acousticCutoffHz - 350.0).abs() < 0.001, 'locked door cutoff is 350 Hz');
  check(lockedFacts.acousticGainDb == -24.0, 'locked door gain is -24 dB');

  // Unlocked cellar door
  const unlockedState = LockedPortalState(
    portalId: 'hall-cellar',
    isLocked: false,
    sticks: false,
    requestedOpenFraction: 1.0,
  );
  final unlockedFacts = LockedPortalMuffleMapper.evaluatePortal(unlockedState);
  check(unlockedFacts.isFullyOpen, 'unlocked door is fully open');
  check((unlockedFacts.acousticCutoffHz - 18000.0).abs() < 0.1, 'unlocked door cutoff is 18000 Hz');

  print('locked portal muffle mapper VIS-038 / T-06: locked/stuck door muffle, unlock transition pass');
}
