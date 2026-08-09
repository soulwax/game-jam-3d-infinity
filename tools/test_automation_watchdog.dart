import 'dart:io';

import 'package:quarantine/automation/automation_args.dart';

import 'automation.dart' as runner;

void main() {
  _expect(
    runner.automationWatchdogGrace == const Duration(seconds: 2),
    'watchdog has a bounded termination grace period',
  );
  final defaults = AutomationArgs.defaults();
  _expect(
    runner.automationWallTimeout(defaults) == const Duration(seconds: 120),
    'default tick budget maps to 120-second watchdog',
  );
  _expect(
    runner.automationWallTimeout(defaults.copyWith(timeoutTicks: 1)) ==
        const Duration(seconds: 15),
    'short runs keep startup floor',
  );
  _expect(
    runner.automationWallTimeout(defaults.copyWith(timeoutTicks: 100000)) ==
        const Duration(seconds: 300),
    'large runs clamp watchdog',
  );
  stdout.writeln(
    'automation watchdog: deterministic floor, scaling, and clamp pass',
  );
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
