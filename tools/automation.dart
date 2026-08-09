import 'dart:io';

import 'package:quarantine/automation/automation_args.dart';
import 'package:quarantine/automation/automation_lifecycle.dart';

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
  try {
    final baseUrl = await lifecycle.startServer();
    final process = await Process.start(
      'node',
      ['tools/browser/renderer_smoke.cjs'],
      environment: {
        ...Platform.environment,
        'AUTOMATION_BASE_URL': baseUrl.toString(),
        'RENDERER_HEADLESS': args.headless ? '1' : '0',
      },
      runInShell: false,
    );
    lifecycle.cleanup.add(() async {
      process.kill(ProcessSignal.sigterm);
    });
    process.stdout.listen(
      stdout.add,
      onError: (Object error, StackTrace _) {
        stderr.writeln('automation: browser stdout failed: $error');
      },
    );
    process.stderr.listen(
      stderr.add,
      onError: (Object error, StackTrace _) {
        stderr.writeln('automation: browser stderr failed: $error');
      },
    );
    stdout.writeln(args.copyWith(baseUrl: baseUrl).encode());
    await stdout.flush();
    final code = await process.exitCode;
    exitCode = code == 0 ? 0 : 5;
  } catch (error) {
    stderr.writeln('automation: run failed: $error');
    exitCode = 5;
  } finally {
    try {
      await lifecycle.close();
    } catch (error) {
      stderr.writeln('automation: cleanup failed: $error');
      exitCode = 6;
    }
  }
}
