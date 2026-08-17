import 'dart:io';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  for (final marker in [
    "_setBootPhase('renderer-unavailable')",
    "_setBootPhase('renderer-unavailable')",
    'data-renderer-query-rejection',
    'data-renderer-error',
    'data-renderer-backend',
  ]) {
    if (!source.contains(marker)) {
      throw StateError('renderer unavailable contract missing: $marker');
    }
  }
  stdout.writeln(
    'renderer unavailable contract: failure phase, backend, query rejection, and error telemetry wired',
  );
}
