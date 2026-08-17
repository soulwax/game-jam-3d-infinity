import 'dart:io';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  const required = [
    "'data-house-role'",
    "'provisional-visible-place'",
    'provisional visible place',
  ];
  final missing = [for (final marker in required) if (!source.contains(marker)) marker];
  if (missing.isNotEmpty) {
    throw StateError('provisional house scope contract is missing: $missing');
  }
  stdout.writeln(
    'provisional house scope: runtime identifies the FBX house as a visible place, not final story content',
  );
}
