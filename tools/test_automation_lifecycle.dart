import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:quarantine/automation/automation_args.dart';
import 'package:quarantine/automation/automation_lifecycle.dart';
import 'package:quarantine/automation/automation_reporter.dart';

Future<void> main() async {
  final order = <int>[];
  final ledger = AutomationCleanupLedger();
  ledger.add(() async => order.add(1));
  ledger.add(() async => order.add(2));
  await ledger.close();
  _expect(order.join(',') == '2,1', 'cleanup is reverse ordered');

  final root = await Directory.systemTemp.createTemp('automation lifecycle ');
  try {
    final aliasArgs = parseAutomationArgs(const [
      'validate',
      '--renderer=next',
      '--profile=clean',
    ]).args!;
    final reporter = AutomationRunReporter(
      artifactRoot: root,
      scenarioId: 'days-1-3',
      runId: 'resolved-run',
      resolvedRun: aliasArgs.toJson(),
    );
    await reporter.start();
    final manifest =
        jsonDecode(
              await File(
                '${reporter.runDirectory.path}/manifest.json',
              ).readAsString(),
            )
            as Map<String, dynamic>;
    final resolvedConfig = manifest['resolvedRun'] as Map<String, dynamic>;
    final resolvedRun = resolvedConfig['resolvedRun'] as Map<String, dynamic>;
    final canonical = resolvedRun['canonical'] as Map<String, dynamic>;
    final aliases = resolvedRun['compatibilityAliases'] as Map<String, dynamic>;
    _expect(
      resolvedRun['schemaVersion'] == 2 &&
          canonical['renderer'] == 'pixeldart' &&
          canonical['profile'] == 'high' &&
          aliases['renderer'] == 'next' &&
          aliases['profile'] == 'clean',
      'reporter manifest preserves canonical resolved-run aliases',
    );
    await reporter.finish(
      status: AutomationRunStatus.passed,
      exitCode: 0,
      cleanup: const {'server': 'closed'},
    );

    await File('${root.path}/index.html').writeAsString('<!doctype html>ok');
    final args = AutomationArgs.defaults().copyWith(
      serverRoot: root.path,
      port: 0,
    );
    final lifecycle = AutomationLifecycle(args: args);
    final url = await lifecycle.startServer();
    _expect(url.port > 0, 'ephemeral port was allocated');
    await lifecycle.waitForHealth(url);
    await lifecycle.close();
    _expect(await _isClosed(url), 'owned server was closed');
  } finally {
    await root.delete(recursive: true);
  }
  stdout.writeln(
    'automation lifecycle: cleanup, health, ephemeral port, and teardown pass',
  );
}

Future<bool> _isClosed(Uri url) async {
  final client = HttpClient()
    ..connectionTimeout = const Duration(milliseconds: 200);
  try {
    await client.getUrl(url).then((request) => request.close());
    return false;
  } catch (_) {
    return true;
  } finally {
    client.close(force: true);
  }
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
