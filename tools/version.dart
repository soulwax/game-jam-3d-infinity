import 'dart:io';

const _versionPath = 'VERSION';
final _versionPattern = RegExp(r'^(\d+)\.(\d+)\.(\d+)\.(\d+)$');

void main(List<String> arguments) {
  if (arguments.isEmpty || arguments.first == 'show') {
    print(_readVersion());
    return;
  }

  switch (arguments.first) {
    case 'check':
      final version = _readVersion();
      final changelog = File('CHANGELOG.md');
      if (!changelog.existsSync() ||
          !changelog.readAsStringSync().contains('## [$version]')) {
        stderr.writeln('CHANGELOG.md has no heading for $version');
        exit(2);
      }
      print('VERSION and CHANGELOG.md agree: $version');
    case 'bump':
      _bump(arguments.skip(1).toList());
    case '--help':
    case '-h':
      _usage();
    default:
      stderr.writeln('Unknown command: ${arguments.first}');
      _usage(exitCode: 2);
  }
}

String _readVersion() {
  final file = File(_versionPath);
  if (!file.existsSync()) {
    stderr.writeln('Missing $_versionPath');
    exit(2);
  }
  final value = file.readAsStringSync().trim();
  if (!_versionPattern.hasMatch(value)) {
    stderr.writeln('Invalid $_versionPath: $value');
    exit(2);
  }
  return value;
}

void _bump(List<String> arguments) {
  final kinds = const {
    '--small': 'small',
    '--feelable': 'feelable',
    '--substantial': 'substantial',
    '--release': 'release',
  };
  final selected = arguments
      .where(kinds.containsKey)
      .map((argument) => kinds[argument])
      .toList();
  final unknown = arguments.where(
    (argument) => argument != '--dry-run' && !kinds.containsKey(argument),
  );
  if (selected.length != 1 || unknown.isNotEmpty) {
    stderr.writeln(
      'Choose exactly one of --small, --feelable, --substantial, or --release.',
    );
    _usage(exitCode: 2);
  }

  final current = _readVersion().split('.').map(int.parse).toList();
  switch (selected.single) {
    case 'small':
      current[3]++;
    case 'feelable':
      current[2]++;
      current[3] = 0;
    case 'substantial':
      current[1]++;
      current[2] = 0;
      current[3] = 0;
    case 'release':
      current[0]++;
      current[1] = 0;
      current[2] = 0;
      current[3] = 0;
  }

  final next = current.join('.');
  if (arguments.contains('--dry-run')) {
    print(next);
    return;
  }
  File(_versionPath).writeAsStringSync('$next\n');
  print(
    'Bumped $_versionPath to $next. Add the matching human changelog entry.',
  );
}

Never _usage({int exitCode = 0}) {
  print(
    '''Usage:
  dart run tools/version.dart show
  dart run tools/version.dart check
  dart run tools/version.dart bump --small|--feelable|--substantial|--release [--dry-run]''',
  );
  exit(exitCode);
}
