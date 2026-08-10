import 'package:quarantine/engine/portal_state_mapper.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  // Closed door
  final closed = PortalStateFacts.calculate(
    portalId: 'door-hall-living',
    openFraction: 0.0,
  );
  check(!closed.isOpen, 'closed door isOpen is false');
  check(!closed.passableCapsuleClearance, 'closed door is not passable');
  check(closed.visualPivotDegrees == 0.0, 'closed door pivot is 0 deg');
  check((closed.acousticCutoffHz - 350.0).abs() < 0.001, 'closed door cutoff is 350 Hz');
  check(closed.acousticGainDb == -24.0, 'closed door gain is -24 dB');

  // Half-open door
  final half = PortalStateFacts.calculate(
    portalId: 'door-hall-living',
    openFraction: 0.5,
  );
  check(half.isOpen, 'half-open door isOpen is true');
  check(half.passableCapsuleClearance, 'half-open door is passable (frac >= 0.4)');
  check(half.visualPivotDegrees == 45.0, 'half-open door pivot is 45 deg');
  check(half.acousticCutoffHz > 350.0 && half.acousticCutoffHz < 18000.0, 'half-open cutoff is intermediate');
  check(half.acousticGainDb == -12.0, 'half-open gain is -12 dB');

  // Fully open door
  final open = PortalStateFacts.calculate(
    portalId: 'door-hall-living',
    openFraction: 1.0,
  );
  check(open.isFullyOpen, 'fully open is true');
  check(open.visualPivotDegrees == 90.0, 'open door pivot is 90 deg');
  check((open.acousticCutoffHz - 18000.0).abs() < 0.1, 'open door cutoff is 18000 Hz');
  check(open.acousticGainDb == 0.0, 'open door gain is 0 dB');

  print('portal state mapper VIS-007: closed, half-open, fully-open, pivot, clearance, and acoustic curves pass');
}
