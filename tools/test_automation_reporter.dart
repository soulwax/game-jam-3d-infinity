import 'dart:convert';
import 'dart:io';

import 'package:quarantine/automation/automation_reporter.dart';

Future<void> main() async {
  final root = await Directory.systemTemp.createTemp('automation reporter ');
  try {
    final reporter = AutomationRunReporter(
      artifactRoot: root,
      scenarioId: 'ground-circuit',
      runId: 'run-001',
      resolvedRun: const {'seed': 42017, 'path': '/redacted/local/path'},
      maxEvents: 4,
      maxHistory: 2,
    );
    await reporter.start();
    await reporter.stepStart('ready', tick: 0);
    await reporter.record('pose', tick: 1, data: const {'room': 'hall'});
    await reporter.fail(
      AutomationFailureKind.assertion,
      tick: 2,
      message: 'expected target was not focused',
    );
    await reporter.writeArtifact(
      'screenshot.txt',
      utf8.encode('bounded evidence'),
    );
    await reporter.finish(
      status: AutomationRunStatus.failed,
      exitCode: 5,
      replayCommand: 'dart run tools/automation.dart replay --run-id run-001',
      cleanup: const {'server': 'closed', 'browser': 'closed'},
    );
    final run = Directory('${root.path}/ground-circuit/run-001');
    _expect(
      await File('${run.path}/manifest.json').exists(),
      'manifest exists',
    );
    _expect(await File('${run.path}/summary.json').exists(), 'summary exists');
    _expect(await File('${run.path}/junit.xml').exists(), 'junit xml exists');
    final manifest =
        jsonDecode(await File('${run.path}/manifest.json').readAsString())
            as Map<String, Object?>;
    _expect(manifest['junit'] == 'junit.xml', 'manifest references junit.xml');
    final junitContent = await File('${run.path}/junit.xml').readAsString();
    _expect(
      junitContent.contains('<failure message="expected target was not focused" type="assertion"/>'),
      'junit xml contains formatted failure tag',
    );
    final summary =
        jsonDecode(await File('${run.path}/summary.json').readAsString())
            as Map<String, Object?>;
    _expect(summary['status'] == 'failed', 'failure status');
    _expect(summary['exitCode'] == 5, 'stable failure exit code');
    _expect((summary['history'] as List).length == 2, 'history is capped');
    _expect((summary['droppedEvents'] as int) > 0, 'trace cap is visible');

    // T-04: Failure kind exit code mapping contract assertions.
    _expect(exitCodeForFailureKind(AutomationFailureKind.schema) == 2, 'schema exit code 2');
    _expect(exitCodeForFailureKind(AutomationFailureKind.boot) == 3, 'boot exit code 3');
    _expect(exitCodeForFailureKind(AutomationFailureKind.infrastructure) == 4, 'infrastructure exit code 4');
    _expect(exitCodeForFailureKind(AutomationFailureKind.move) == 5, 'move exit code 5');
    _expect(exitCodeForFailureKind(AutomationFailureKind.focus) == 6, 'focus exit code 6');
    _expect(exitCodeForFailureKind(AutomationFailureKind.action) == 7, 'action exit code 7');
    _expect(exitCodeForFailureKind(AutomationFailureKind.assertion) == 8, 'assertion exit code 8');
    _expect(exitCodeForFailureKind(AutomationFailureKind.capture) == 9, 'capture exit code 9');
    _expect(exitCodeForFailureKind(AutomationFailureKind.timeout) == 10, 'timeout exit code 10');
    _expect(exitCodeForFailureKind(AutomationFailureKind.crash) == 11, 'crash exit code 11');

    _expectThrows(
      () => AutomationRunReporter(
        artifactRoot: root,
        scenarioId: '../escape',
        runId: 'bad',
        resolvedRun: const {},
      ),
      'path traversal is rejected',
    );
    stdout.writeln(
      'automation reporter: bounded trace, atomic summary, junit xml, exit codes pass',
    );
  } finally {
    await root.delete(recursive: true);
  }
}

void _expect(bool value, String message) {
  if (!value) throw StateError(message);
}

void _expectThrows(void Function() action, String message) {
  try {
    action();
  } catch (_) {
    return;
  }
  throw StateError(message);
}
