import 'package:quarantine/game/rupture_gate.dart';

Never _fail(String message) =>
    throw StateError('rupture gate test failed: $message');
void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  _expect(
    !RuptureGate.canBegin(
      day: 20,
      atFrontDoor: true,
      finalArrivalResolved: true,
    ),
    'rupture cannot begin before the final day',
  );
  _expect(
    !RuptureGate.canBegin(
      day: 21,
      atFrontDoor: false,
      finalArrivalResolved: true,
    ),
    'rupture requires the front door',
  );
  _expect(
    !RuptureGate.canBegin(
      day: 21,
      atFrontDoor: true,
      finalArrivalResolved: false,
    ),
    'rupture requires the final arrival to resolve',
  );
  _expect(
    RuptureGate.canBegin(
      day: 21,
      atFrontDoor: true,
      finalArrivalResolved: true,
    ),
    'final front-door act can begin rupture',
  );
  print('rupture gate requires final-day narrative conditions');
}
