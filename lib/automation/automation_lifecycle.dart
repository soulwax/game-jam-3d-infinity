import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'automation_args.dart';

typedef CleanupAction = Future<void> Function();

/// Owns only resources registered by the current automation run.
final class AutomationCleanupLedger {
  final List<CleanupAction> _actions = [];
  bool _closed = false;

  void add(CleanupAction action) {
    if (_closed) {
      throw StateError('cleanup ledger is already closed');
    }
    _actions.add(action);
  }

  Future<void> close() async {
    if (_closed) return;
    _closed = true;
    Object? firstError;
    for (final action in _actions.reversed) {
      try {
        await action();
      } catch (error) {
        firstError ??= error;
      }
    }
    _actions.clear();
    if (firstError != null) throw firstError;
  }
}

abstract interface class AutomationServer {
  Uri get baseUrl;
  bool get owned;
  Future<void> start();
  Future<void> close();
}

/// Small package server used by automation. It does not delete or mutate the
/// package and binds the requested port atomically through HttpServer.bind.
final class StaticAutomationServer implements AutomationServer {
  final Directory root;
  final int requestedPort;
  HttpServer? _server;

  StaticAutomationServer({required this.root, required this.requestedPort});

  @override
  Uri get baseUrl =>
      Uri.parse('http://127.0.0.1:${_server?.port ?? requestedPort}');

  @override
  bool get owned => _server != null;

  @override
  Future<void> start() async {
    if (_server != null) return;
    final canonicalRoot = await root.resolveSymbolicLinks();
    final index = File('$canonicalRoot/index.html');
    if (!await index.exists()) {
      throw StateError('server root has no index.html: ${root.path}');
    }
    _server = await HttpServer.bind(
      InternetAddress.loopbackIPv4,
      requestedPort,
      shared: false,
    );
    _server!.listen((request) => _serve(request, canonicalRoot));
  }

  Future<void> _serve(HttpRequest request, String canonicalRoot) async {
    try {
      var path = request.uri.path;
      if (path == '/') path = '/index.html';
      final relative = path.substring(1);
      final target = File('$canonicalRoot/$relative');
      final canonicalTarget = await target.resolveSymbolicLinks();
      if (!canonicalTarget.startsWith(
            '$canonicalRoot${Platform.pathSeparator}',
          ) ||
          !await File(canonicalTarget).exists()) {
        request.response.statusCode = HttpStatus.notFound;
        await request.response.close();
        return;
      }
      request.response.headers.contentType = _contentType(canonicalTarget);
      await request.response.addStream(File(canonicalTarget).openRead());
      await request.response.close();
    } catch (_) {
      request.response.statusCode = HttpStatus.internalServerError;
      await request.response.close();
    }
  }

  @override
  Future<void> close() async {
    final server = _server;
    _server = null;
    await server?.close(force: true);
  }
}

ContentType _contentType(String path) {
  final extension = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
  return switch (extension) {
    'html' => ContentType('text', 'html', charset: 'utf-8'),
    'js' || 'mjs' => ContentType('application', 'javascript', charset: 'utf-8'),
    'wasm' => ContentType('application', 'wasm'),
    'css' => ContentType('text', 'css', charset: 'utf-8'),
    'json' => ContentType('application', 'json', charset: 'utf-8'),
    'png' => ContentType('image', 'png'),
    'wav' => ContentType('audio', 'wav'),
    _ => ContentType('application', 'octet-stream'),
  };
}

final class AutomationLifecycle {
  final AutomationArgs args;
  final AutomationCleanupLedger cleanup;
  final AutomationServer Function(AutomationArgs args) serverFactory;

  AutomationLifecycle({
    required this.args,
    AutomationCleanupLedger? cleanup,
    AutomationServer Function(AutomationArgs args)? serverFactory,
  }) : cleanup = cleanup ?? AutomationCleanupLedger(),
       serverFactory =
           serverFactory ??
           ((args) => StaticAutomationServer(
             root: Directory(args.serverRoot),
             requestedPort: args.port,
           ));

  Future<Uri> startServer() async {
    final server = serverFactory(args);
    await server.start();
    if (server.owned) cleanup.add(server.close);
    await waitForHealth(server.baseUrl);
    return server.baseUrl;
  }

  Future<void> waitForHealth(
    Uri url, {
    Duration timeout = const Duration(seconds: 5),
  }) async {
    final deadline = DateTime.now().add(timeout);
    Object? lastError;
    while (DateTime.now().isBefore(deadline)) {
      final client = HttpClient()
        ..connectionTimeout = const Duration(milliseconds: 500);
      try {
        final response = await client
            .getUrl(url)
            .then((request) => request.close());
        final body = await utf8.decoder.bind(response).join();
        if (response.statusCode == HttpStatus.ok && body.isNotEmpty) return;
        lastError = StateError('health returned HTTP ${response.statusCode}');
      } catch (error) {
        lastError = error;
      } finally {
        client.close(force: true);
      }
      await Future<void>.delayed(const Duration(milliseconds: 25));
    }
    throw StateError('automation server health timeout: $lastError');
  }

  Future<void> close() => cleanup.close();
}
