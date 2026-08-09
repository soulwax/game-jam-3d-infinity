import 'dart:convert';
import 'dart:io';

import 'package:quarantine/automation/automation_args.dart';
import 'package:quarantine/automation/automation_lifecycle.dart';
import 'package:quarantine/automation/automation_reporter.dart';

Future<void> main(List<String> argv) async {
  final result = parseAutomationArgs(argv);
  if (!result.isSuccess) {
    stderr.writeln('automation: ${result.error}');
    exitCode = result.exitCode;
    return;
  }
  final args = result.args!;
  switch (args.mode) {
    case AutomationMode.help:
      stdout.write(automationHelp);
    case AutomationMode.list:
      stdout.write('${registeredAutomationScenarios.join('\n')}\n');
    case AutomationMode.validate:
      stdout.write('${args.encode()}\n');
    case AutomationMode.run:
      await _run(args);
  }
}

Future<void> _run(AutomationArgs args) async {
  if (args.browser != AutomationBrowser.firefox) {
    stderr.writeln(
      'automation: only the Firefox adapter is implemented (T-01)',
    );
    exitCode = 4;
    return;
  }
  final lifecycle = AutomationLifecycle(args: args);
  final reporter = AutomationRunReporter(
    artifactRoot: Directory(args.artifacts),
    scenarioId: args.scenario,
    runId: 'run-${DateTime.now().toUtc().millisecondsSinceEpoch}',
    resolvedRun: args.toJson(),
  );
  var reporterStarted = false;
  var reporterFinished = false;
  try {
    await reporter.start();
    reporterStarted = true;
    await reporter.record(
      'runner.lifecycle',
      tick: 0,
      data: {'phase': 'starting-server', 'browser': args.browser.name},
    );
    final baseUrl = await lifecycle.startServer();
    await reporter.record(
      'runner.lifecycle',
      tick: 0,
      data: {'phase': 'server-ready', 'baseUrl': baseUrl.toString()},
    );
    await reporter.record('runner.config', tick: 0, data: args.toJson());
    final process = await Process.start(
      'node',
      ['tools/browser/renderer_smoke.cjs'],
      environment: {
        ...Platform.environment,
        'AUTOMATION_ARGS': args.encode(),
        'AUTOMATION_BASE_URL': baseUrl.toString(),
        'AUTOMATION_RUN_DIR': reporter.runDirectory.path,
        'RENDERER_HEADLESS': args.headless ? '1' : '0',
      },
      runInShell: false,
    );
    lifecycle.cleanup.add(() async {
      process.kill(ProcessSignal.sigterm);
    });
    final browserStdout = StringBuffer();
    final browserStderr = StringBuffer();
    final stdoutDone = utf8.decoder.bind(process.stdout).forEach((text) {
      stdout.write(text);
      _appendBounded(browserStdout, text);
    });
    final stderrDone = utf8.decoder.bind(process.stderr).forEach((text) {
      stderr.write(text);
      _appendBounded(browserStderr, text);
    });
    stdout.writeln(args.copyWith(baseUrl: baseUrl).encode());
    await stdout.flush();
    final code = await process.exitCode;
    await Future.wait([stdoutDone, stderrDone]);
    await reporter.writeArtifact(
      'browser-stdout.log',
      utf8.encode(browserStdout.toString()),
      contentType: 'text/plain',
    );
    await reporter.writeArtifact(
      'browser-stderr.log',
      utf8.encode(browserStderr.toString()),
      contentType: 'text/plain',
    );
    await _registerScreenshotArtifacts(reporter);
    await reporter.record(
      'runner.browser-exit',
      tick: 0,
      data: {'exitCode': code, 'stdoutBytes': browserStdout.length},
    );
    if (code != 0) {
      await reporter.fail(
        AutomationFailureKind.assertion,
        tick: 0,
        message: 'browser smoke exited with code $code',
      );
    }
    await lifecycle.close();
    await reporter.finish(
      status: code == 0
          ? AutomationRunStatus.passed
          : AutomationRunStatus.failed,
      exitCode: code == 0 ? 0 : 5,
      replayCommand:
          'dart run tools/automation.dart run --scenario ${args.scenario}',
      cleanup: const {'server': 'closed', 'browser': 'closed'},
    );
    reporterFinished = true;
    exitCode = code == 0 ? 0 : 5;
  } catch (error) {
    stderr.writeln('automation: run failed: $error');
    if (reporterStarted && !reporterFinished) {
      await reporter.fail(
        AutomationFailureKind.infrastructure,
        tick: 0,
        message: error.toString(),
      );
    }
    exitCode = 5;
  } finally {
    try {
      await lifecycle.close();
    } catch (error) {
      stderr.writeln('automation: cleanup failed: $error');
      exitCode = 6;
    }
    if (reporterStarted && !reporterFinished) {
      try {
        await reporter.finish(
          status: AutomationRunStatus.failed,
          exitCode: exitCode == 0 ? 5 : exitCode,
          cleanup: const {'server': 'closed-or-unavailable'},
        );
      } catch (error) {
        stderr.writeln('automation: report finalization failed: $error');
        exitCode = 6;
      }
    }
  }
}

const _browserLogLimit = 64 * 1024;

void _appendBounded(StringBuffer target, String text) {
  final remaining = _browserLogLimit - target.length;
  if (remaining <= 0) return;
  target.write(text.length <= remaining ? text : text.substring(0, remaining));
}

Future<void> _registerScreenshotArtifacts(
  AutomationRunReporter reporter,
) async {
  final entries = reporter.runDirectory.listSync().whereType<File>().where((
    file,
  ) {
    final name = file.uri.pathSegments.last;
    return name.startsWith('browser-') &&
        (name.endsWith('.png') || name.endsWith('.json'));
  });
  for (final file in entries) {
    final name = file.uri.pathSegments.last;
    await reporter.record(
      'artifact.external',
      tick: 0,
      data: {
        'name': name,
        'bytes': await file.length(),
        'contentType': name.endsWith('.png') ? 'image/png' : 'application/json',
      },
    );
  }
}
