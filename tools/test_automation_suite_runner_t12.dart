import 'package:quarantine/automation/automation_suite_runner.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final runner = AutomationSuiteRunner(
    suiteName: 'mantle-smoke-suite',
    seed: 42,
  );

  runner.addScenario('ground-circuit');
  runner.addScenario('upper-circuit');
  runner.addScenario('mantle-interaction');

  final result = runner.runSuite();

  check(result.isSuccess, 'suite run is successful');
  check(result.totalScenarios == 3, '3 total scenarios');
  check(result.passedScenarios == 3, '3 passed scenarios');
  check(result.seed == 42, 'seed preserved');

  final json = result.toJson();
  check(json['suiteName'] == 'mantle-smoke-suite', 'suiteName serialized');

  print('automation suite runner T-12: scenario registration, seed preservation, and result report pass');
}
