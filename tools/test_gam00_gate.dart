import 'dart:io';

const _fixtures = <String>[
  'tools/test_save_v2.dart',
  'tools/test_domain_snapshot.dart',
  'tools/test_presentation_snapshot.dart',
  'tools/test_domain_event.dart',
  'tools/test_house_state.dart',
  'tools/test_session.dart',
  'tools/test_q15.dart',
  'tools/test_q24_drift.dart',
];

Never _fail(String message) => throw StateError('GAM-00 gate failed: $message');

void main() {
  final dart = Platform.resolvedExecutable;
  final outputs = <String>[];
  for (var pass = 1; pass <= 2; pass++) {
    for (final fixture in _fixtures) {
      final result = Process.runSync(dart, [
        '--suppress-analytics',
        'run',
        fixture,
      ], runInShell: false);
      if (result.exitCode != 0) {
        _fail('$fixture failed on pass $pass\n${result.stderr}');
      }
      outputs.add('${result.stdout}'.trim());
    }
  }
  final first = outputs.take(_fixtures.length).join('\n');
  final second = outputs.skip(_fixtures.length).join('\n');
  if (first != second) {
    _fail('fixture output changed between identical passes');
  }
  print('GAM-00 gate: ${_fixtures.length} fixtures passed twice');
}
