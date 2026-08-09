import 'dart:convert';
import 'dart:io';

final class BuildOptions {
  final bool dryRun;
  final bool sourceMaps;
  final bool json;
  final bool help;

  const BuildOptions({
    required this.dryRun,
    required this.sourceMaps,
    required this.json,
    required this.help,
  });
}

const buildUsage = '''Usage:
  dart run tools/build.dart [--no-source-maps]
  dart run tools/build.dart --dry-run [--no-source-maps] [--json]
  dart run tools/build.dart --help''';

BuildOptions parseBuildOptions(Iterable<String> arguments) {
  var dryRun = false;
  var sourceMaps = true;
  var json = false;
  var help = false;
  for (final argument in arguments) {
    switch (argument) {
      case '--dry-run':
        dryRun = true;
      case '--no-source-maps':
        sourceMaps = false;
      case '--json':
        json = true;
      case '--help':
      case '-h':
        help = true;
      default:
        throw FormatException('unknown build option: $argument');
    }
  }
  if (json && !dryRun) {
    throw const FormatException('--json requires --dry-run');
  }
  return BuildOptions(
    dryRun: dryRun,
    sourceMaps: sourceMaps,
    json: json,
    help: help,
  );
}

Future<void> run(String cmd, List<String> args) async {
  stdout.writeln('\$ $cmd ${args.join(' ')}');
  final p = await Process.start(cmd, args, runInShell: true);
  p.stdout.transform(systemEncoding.decoder).listen(stdout.write);
  p.stderr.transform(systemEncoding.decoder).listen(stderr.write);
  final code = await p.exitCode;
  if (code != 0) {
    stderr.writeln('command failed ($code): $cmd ${args.join(' ')}');
    exit(code);
  }
}

void copyFile(String from, String to) {
  File(to).parent.createSync(recursive: true);
  File(from).copySync(to);
}

void copyDir(Directory from, Directory to) {
  if (to.existsSync()) to.deleteSync(recursive: true);
  to.createSync(recursive: true);
  for (final e in from.listSync(recursive: true)) {
    final rel = e.path.substring(from.path.length + 1);
    final dest = '${to.path}${Platform.pathSeparator}$rel';
    if (e is File) {
      File(dest).parent.createSync(recursive: true);
      e.copySync(dest);
    } else if (e is Directory) {
      Directory(dest).createSync(recursive: true);
    }
  }
}

/// Reads the repository's four-part version for compiler provenance.
///
/// Keep this in the local build path as well as the hosted build path so a
/// packaged build cannot silently report an unpinned project version.
String canonicalProjectVersion() {
  return validateProjectVersion(File('VERSION').readAsStringSync());
}

String validateProjectVersion(String raw) {
  final value = raw.trim();
  if (!RegExp(r'^\d+\.\d+\.\d+\.\d+$').hasMatch(value)) {
    throw FormatException('VERSION must contain four numeric components');
  }
  return value;
}

List<String> compileDefines(String projectVersion) => [
  '-DPROJECT_VERSION=${validateProjectVersion(projectVersion)}',
];

List<String> compileArgs(
  String projectVersion,
  String output, {
  bool sourceMaps = true,
}) {
  final args = <String>['compile', 'js', '-O2'];
  if (!sourceMaps) args.add('--no-source-maps');
  return [
    ...args,
    ...compileDefines(projectVersion),
    '-o',
    output,
    'web/main.dart',
  ];
}

Future<void> main(List<String> arguments) async {
  late final BuildOptions options;
  try {
    options = parseBuildOptions(arguments);
  } on FormatException catch (error) {
    stderr.writeln(error.message);
    stderr.writeln(buildUsage);
    exit(2);
  }
  if (options.help) {
    stdout.writeln(buildUsage);
    return;
  }
  final root = Directory.current.path;
  final projectVersion = canonicalProjectVersion();

  if (options.dryRun) {
    final args = compileArgs(
      projectVersion,
      'dist/web/main.dart.js',
      sourceMaps: options.sourceMaps,
    );
    if (options.json) {
      stdout.writeln(
        jsonEncode({
          'projectVersion': projectVersion,
          'sourceMaps': options.sourceMaps,
          'compileArgs': args,
        }),
      );
      return;
    }
    stdout.writeln('project version: $projectVersion');
    stdout.writeln('source maps: ${options.sourceMaps}');
    stdout.writeln('compile: dart ${args.join(' ')}');
    return;
  }

  if (File('pubspec.lock').existsSync() &&
      Directory('.dart_tool').existsSync()) {
    stdout.writeln('pub deps already present, skipping dart pub get');
  } else {
    await run('dart', ['pub', 'get']);
  }

  final fetcher = File('tmp/tools/fetch_assets.dart');
  if (File('web/res/manifest.json').existsSync()) {
    stdout.writeln('web/res already populated, skipping asset fetch');
  } else if (fetcher.existsSync()) {
    await run('dart', ['run', fetcher.path]);
  } else {
    stdout.writeln(
      'no web/res/manifest.json and no fetcher available, continuing without assets',
    );
  }

  final authoredHouse = Directory('assets/house');
  if (authoredHouse.existsSync()) {
    copyDir(authoredHouse, Directory('web/res/house'));
    stdout.writeln('copied authored house manifest to web/res/house');
  }

  await run('dart', ['run', 'tools/asset_audit.dart', '--build']);
  await run('dart', ['run', 'tools/gen_shaders.dart']);

  await run(
    'dart',
    compileArgs(
      projectVersion,
      'dist/web/main.dart.js',
      sourceMaps: options.sourceMaps,
    ),
  );
  final mainJs = File('dist/web/main.dart.js');
  final bootJs = File('dist/web/boot.js');
  if (!mainJs.existsSync() && bootJs.existsSync()) {
    copyFile(bootJs.path, mainJs.path);
  }

  copyFile('web/index.html', 'dist/web/index.html');
  copyFile('web/styles.css', 'dist/web/styles.css');
  if (Directory('web/res').existsSync()) {
    copyDir(Directory('web/res'), Directory('dist/web/res'));
  }

  final exeName = Platform.isWindows ? 'serve_release.exe' : 'serve_release';
  await run('dart', [
    'compile',
    'exe',
    'tools/serve_release.dart',
    '-o',
    'dist/$exeName',
  ]);

  final linkName = Platform.isWindows ? 'play.exe' : 'play';
  final linkPath = '$root${Platform.pathSeparator}$linkName';
  final targetPath =
      '$root${Platform.pathSeparator}dist${Platform.pathSeparator}$exeName';

  if (Link(linkPath).existsSync()) {
    Link(linkPath).deleteSync();
  } else if (File(linkPath).existsSync()) {
    File(linkPath).deleteSync();
  }

  try {
    Link(linkPath).createSync(targetPath);
    stdout.writeln('symlink created: $linkName -> dist/$exeName');
  } catch (e) {
    stderr.writeln(
      'symlink creation failed ($e), falling back to a direct copy',
    );
    stderr.writeln(
      'on Windows, enable Developer Mode or run this as an administrator for a real symlink next time',
    );
    File(targetPath).copySync(linkPath);
    if (!Platform.isWindows) {
      await run('chmod', ['+x', linkPath]);
    }
  }

  stdout.writeln('done. run ./$linkName and open http://localhost:8081');
}
