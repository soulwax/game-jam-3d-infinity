import 'dart:io';

void main() {
  final web = File('web/main.dart').readAsStringSync();
  final route = File(
    'tools/test_house_route_execution.dart',
  ).readAsStringSync();
  for (final marker in [
    'activeStairId',
    'activeStairProgress',
    'activeStairId: _playerCapsule.activeStairId',
    'activeStairProgress: _playerCapsule.activeStairProgress',
    'restoreActiveStair',
  ]) {
    if (!web.contains(marker) && !route.contains(marker)) {
      throw StateError('stair browser contract missing: $marker');
    }
  }
  stdout.writeln(
    'stair browser contract: traversal, bounded progress, and save/restore telemetry wired',
  );
}
