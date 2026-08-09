import 'dart:async';
import 'dart:io';

import 'package:quarantine/automation/automation_args.dart';
import 'package:quarantine/automation/automation_lifecycle.dart';

Future<void> main() async {
  final order = <int>[];
  final ledger = AutomationCleanupLedger();
  ledger.add(() async => order.add(1));
  ledger.add(() async => order.add(2));
  await ledger.close();
  _expect(order.join(',') == '2,1', 'cleanup is reverse ordered');

  final root = await Directory.systemTemp.createTemp('automation lifecycle ');
  try {
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
