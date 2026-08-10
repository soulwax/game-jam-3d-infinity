import 'package:quarantine/engine/master_orchestration_bootstrapper.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final bootstrapper = MasterOrchestrationBootstrapper();
  check(bootstrapper.currentStage == BootStage.uninitialized, 'starts uninitialized');
  check(!bootstrapper.isFullyBooted, 'isFullyBooted false initially');

  final report = bootstrapper.executeBootSequence();
  check(bootstrapper.currentStage == BootStage.fullyBooted, 'transitions to fullyBooted');
  check(bootstrapper.isFullyBooted, 'isFullyBooted is true');
  check(report.isReady, 'boot status report isReady is true');

  print('master orchestration bootstrapper PF-06: boot sequence stages and status report pass');
}
