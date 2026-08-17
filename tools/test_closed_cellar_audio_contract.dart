import 'dart:io';

void main() {
  final browser = File(
    'tools/browser/closed_cellar_door_contract.cjs',
  ).readAsStringSync();
  final web = File('web/main.dart').readAsStringSync();
  for (final marker in [
    'data-audio-transmission-cellar',
    'portalPath',
    'gainDb',
    'lowPassHz',
    'closed-door transmission',
  ]) {
    if (!browser.contains(marker) && !web.contains(marker)) {
      throw StateError('closed-cellar audio contract missing: $marker');
    }
  }
  stdout.writeln(
    'closed-cellar audio contract: portal path, gain, cutoff, and browser telemetry wired',
  );
}
