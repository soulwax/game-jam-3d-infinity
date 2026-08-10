import 'package:quarantine/automation/portal_boundary_validator.dart';
import 'package:quarantine/engine/vec3.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final validator = PortalBoundaryValidator(maxStepDistanceMetres: 0.5);

  final p1 = Vec3(10.0, 1.65, 2.0);
  final p2 = Vec3(10.1, 1.65, 2.0); // 0.1m step
  final pTeleport = Vec3(15.0, 1.65, 8.0); // 7.0m jump!

  final v1 = validator.validateStep(previousPosition: p1, currentPosition: p2);
  check(v1.isValid, '0.1m step is valid');

  final v2 = validator.validateStep(previousPosition: p2, currentPosition: pTeleport);
  check(!v2.isValid, '7.0m jump is rejected as teleport');
  check(v2.errorMessage!.contains('Teleport detected'), 'error message explains teleport');

  print('portal boundary validator VIS-036 / T-06: smooth step validation, teleport detection pass');
}
