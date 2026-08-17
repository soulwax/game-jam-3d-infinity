import 'dart:io';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  const markers = [
    'wasControllerActionPressed',
    'caption',
    'focusLossBehavior',
    'pauseAndMute',
    'exitPointerLock',
    'data-accessibility-captions',
  ];
  final missing = [
    for (final marker in markers)
      if (!source.contains(marker)) marker,
  ];
  if (missing.isNotEmpty) {
    throw StateError(
      'Day 1 accessibility production seam is missing: $missing',
    );
  }
  stdout.writeln(
    'accessibility Day 1 contract: input, captions, focus-loss, pause, and settings seams present',
  );
}
