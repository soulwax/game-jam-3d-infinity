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
    _expect(await File('${run.path}/trace.jsonl').exists(), 'trace exists');
    final summary =
        jsonDecode(await File('${run.path}/summary.json').readAsString())
            as Map<String, Object?>;
    _expect(summary['status'] == 'failed', 'failure status');
    _expect(summary['exitCode'] == 5, 'stable failure exit code');
    _expect((summary['history'] as List).length == 2, 'history is capped');
    _expect((summary['droppedEvents'] as int) > 0, 'trace cap is visible');
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
      'automation reporter: bounded trace, atomic summary, replay, cleanup pass',
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
