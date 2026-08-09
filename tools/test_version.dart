import 'dart:io';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

ProcessResult _run(List<String> args) => Process.runSync(
  Platform.resolvedExecutable,
  ['run', 'tools/version.dart', ...args],
  runInShell: false,
);

void main() {
  final version = File('VERSION').readAsStringSync().trim();
  final show = _run(const ['show']);
  _expect(
    show.exitCode == 0 && show.stdout.toString().trim() == version,
    'show returns VERSION',
  );
  final check = _run(const ['check']);
  _expect(check.exitCode == 0, 'check accepts the canonical changelog');
  _expect(
    _run(const ['bump', '--small', '--dry-run']).stdout.toString().trim() ==
        _increment(version, 3),
    'small bump',
  );
  _expect(
    _run(const ['bump', '--feelable', '--dry-run']).stdout.toString().trim() ==
        _increment(version, 2),
    'feelable bump',
  );
  _expect(
    _run(const [
          'bump',
          '--substantial',
          '--dry-run',
        ]).stdout.toString().trim() ==
        _increment(version, 1),
    'substantial bump',
  );
  _expect(
    _run(const ['bump', '--release', '--dry-run']).stdout.toString().trim() ==
        _increment(version, 0),
    'release bump',
  );
  _expect(
    _run(const ['bump', '--small', '--feelable']).exitCode == 2,
    'multiple bump kinds reject',
  );
  print('versioning: show, check, bump boundaries, and invalid args pass');
}

String _increment(String raw, int component) {
  final parts = raw.split('.').map(int.parse).toList();
  parts[component]++;
  for (var i = component + 1; i < parts.length; i++) {
    parts[i] = 0;
  }
  return parts.join('.');
}
