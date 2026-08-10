import 'package:quarantine/ui/visual_settings.dart';
import 'package:quarantine/ui/visual_store_coordinator.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final coordinator = VisualStoreCoordinator();
  check(coordinator.effective.exposure == 0.0, 'default exposure is 0.0');
  check(coordinator.effectivePolicy.exposureMultiplier == 1.0, 'default exposure multiplier is 1.0');

  // Stage exposure +1.0
  final candidate = coordinator.requested.copyWith(exposure: 1.0, fov: 90.0);
  coordinator.updateRequested(candidate);
  check(coordinator.requested.exposure == 1.0, 'requested exposure is 1.0');
  check(coordinator.effective.exposure == 0.0, 'effective is unchanged before commit');

  // Commit transaction
  coordinator.commit();
  check(coordinator.effective.exposure == 1.0, 'effective exposure is 1.0 after commit');
  check(coordinator.effectivePolicy.exposureMultiplier == 2.0, 'exposure +1.0 projects 2.0 multiplier');
  check(coordinator.effectivePolicy.fovDegrees == 90.0, 'fov 90 projected');

  // Revert transaction
  final candidate2 = coordinator.requested.copyWith(exposure: -1.0);
  coordinator.updateRequested(candidate2);
  coordinator.revert();
  check(coordinator.requested.exposure == 1.0, 'reverted requested back to effective (1.0)');

  print('visual store coordinator VIS-019 / S-03: transactional commit, revert, policy projection pass');
}
