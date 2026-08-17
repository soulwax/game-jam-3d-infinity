import 'dart:io';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  for (final marker in [
    'EndingResolver.resolve',
    'data-ending-kind',
    'data-ending-texture-count',
    "if (_ending != null) return;",
    '_ending!.toJson()',
  ]) {
    if (!source.contains(marker)) {
      throw StateError('ending browser contract missing: $marker');
    }
  }
  if (source.contains('EndingKind.compliance =') ||
      source.contains('EndingKind.synchronisation =') ||
      source.contains('EndingKind.rupture =')) {
    throw StateError('ending browser contract exposes a direct selector');
  }
  stdout.writeln(
    'ending browser contract: fact resolver, persistence, texture, and no direct selector wired',
  );
}
