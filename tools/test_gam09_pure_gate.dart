import 'dart:io';

const _fixtures = <String>[
  'tools/test_feature_config.dart',
  'tools/test_gaslight_pure.dart',
  'tools/test_gaslight_state.dart',
  'tools/test_weather.dart',
  'tools/test_temperature.dart',
  'tools/test_environment_facts.dart',
  'tools/test_mantle_history.dart',
  'tools/test_rupture_state.dart',
  'tools/test_rupture_gate.dart',
  'tools/test_tape_state.dart',
  'tools/test_feature_snapshot.dart',
];

Never _fail(String message) =>
    throw StateError('GAM-09 pure gate failed: $message');

void main() {
  final outputs = <String>[];
  for (var pass = 1; pass <= 2; pass++) {
    for (final fixture in _fixtures) {
      final result = Process.runSync(Platform.resolvedExecutable, [
        'run',
        fixture,
      ], runInShell: false);
      if (result.exitCode != 0) {
        _fail('$fixture failed on pass $pass\n${result.stderr}');
      }
      outputs.add('${result.stdout}'.trim());
    }
  }
  final split = _fixtures.length;
  if (outputs.take(split).join('\n') != outputs.skip(split).join('\n')) {
    _fail('pure feature output changed between identical passes');
  }
  print('GAM-09 pure gate: ${_fixtures.length} fixtures passed twice');
}
