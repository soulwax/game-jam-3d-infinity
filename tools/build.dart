import 'dart:io';

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

Future<void> main() async {
  final root = Directory.current.path;

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

  await run('dart', ['run', 'tools/asset_audit.dart', '--build']);
  await run('dart', ['run', 'tools/gen_shaders.dart']);

  await run('dart', [
    'compile',
    'js',
    '-O2',
    '-o',
    'dist/web/main.dart.js',
    'web/main.dart',
  ]);
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
