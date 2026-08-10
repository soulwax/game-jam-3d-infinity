import 'package:quarantine/ui/settings_apply_coordinator.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

class TestProfile {
  final int resolution;
  const TestProfile(this.resolution);
}

void main() async {
  TestProfile current = const TestProfile(1080);

  final coordinator = SettingsApplyCoordinator<TestProfile>(
    getCurrentProfile: () => current,
    applyProfile: (p) async {
      if (p.resolution < 0) return false;
      current = p;
      return true;
    },
  );

  // 1. Live change applies immediately
  final liveResult = await coordinator.requestApply(
    const TestProfile(720),
    changeType: SettingsChangeType.live,
  );
  check(liveResult == SettingsApplyStatus.applied, 'live change applied');
  check(current.resolution == 720, 'current updated to 720');
  check(coordinator.lastKnownGood.resolution == 720, 'lastKnownGood is 720');
  check(!coordinator.isConfirmationPending, 'not pending');

  // 2. Display-risk change starts 15s pending confirmation
  final riskResult = await coordinator.requestApply(
    const TestProfile(2160),
    changeType: SettingsChangeType.displayRisk,
    confirmationTimeoutSeconds: 15,
  );
  check(riskResult == SettingsApplyStatus.pendingConfirmation, 'displayRisk pending confirmation');
  check(coordinator.isConfirmationPending, 'isConfirmationPending is true');
  check(coordinator.remainingSeconds == 15, '15 seconds remaining');
  check(current.resolution == 2160, 'current applied 2160 for preview');
  check(coordinator.lastKnownGood.resolution == 720, 'lastKnownGood remains 720');

  // 3. Confirming pending locks profile
  coordinator.confirmPending();
  check(!coordinator.isConfirmationPending, 'no longer pending after confirmation');
  check(coordinator.lastKnownGood.resolution == 2160, 'lastKnownGood locked to 2160');

  // 4. Display-risk change timeout reverts to lastKnownGood
  await coordinator.requestApply(
    const TestProfile(4000),
    changeType: SettingsChangeType.displayRisk,
    confirmationTimeoutSeconds: 3,
  );
  check(coordinator.isConfirmationPending, 'pending 4000');
  await coordinator.tickConfirmationTimer(); // 2 left
  check(coordinator.remainingSeconds == 2, '2s left');
  await coordinator.tickConfirmationTimer(); // 1 left
  check(coordinator.remainingSeconds == 1, '1s left');
  await coordinator.tickConfirmationTimer(); // 0 -> triggers revert
  check(!coordinator.isConfirmationPending, 'reverted after timeout');
  check(current.resolution == 2160, 'restored to lastKnownGood 2160');
  check(coordinator.status == SettingsApplyStatus.reverted, 'status is reverted');

  // 5. Apply failure automatically reverts
  final failResult = await coordinator.requestApply(
    const TestProfile(-1),
    changeType: SettingsChangeType.live,
  );
  check(failResult == SettingsApplyStatus.failed, 'apply failure detected');
  check(current.resolution == 2160, 'restored to 2160 on failure');

  coordinator.dispose();
  print('settings apply coordinator S-08: live, displayRisk confirmation timer, timeout revert, and failure recovery pass');
}
