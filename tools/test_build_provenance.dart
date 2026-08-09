import 'dart:convert';
import 'dart:io';

import 'build.dart' as build;

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main(List<String> arguments) {
  final version = File('VERSION').readAsStringSync().trim();
  if (arguments.contains('--probe')) {
    const compiled = String.fromEnvironment('PROJECT_VERSION');
    _expect(
      compiled == version,
      'compiled PROJECT_VERSION is $version, got ${compiled.isEmpty ? 'empty' : compiled}',
    );
    print('build provenance probe: compiler define consumed as $compiled');
    return;
  }
  _expect(
    build.canonicalProjectVersion() == version,
    'local build reads the canonical VERSION file',
  );
  _expect(
    build.compileDefines(version).contains('-DPROJECT_VERSION=$version'),
    'local compiler receives PROJECT_VERSION',
  );
  _expect(
    build.compileArgs(version, 'out.js').join(' ') ==
        'compile js -O2 -DPROJECT_VERSION=$version -o out.js web/main.dart',
    'local build command keeps the provenance define and entrypoint',
  );
  _expect(
    build.compileArgs(version, 'out.js', sourceMaps: false).join(' ') ==
        'compile js -O2 --no-source-maps -DPROJECT_VERSION=$version -o out.js web/main.dart',
    'release build command disables source maps explicitly',
  );
  final plan = build.buildPlan(version);
  final releasePlan = build.buildPlan(version, sourceMaps: false);
  _expect(
    plan.toJson()['schemaVersion'] == 1 &&
        plan.target == 'js' &&
        plan.output == 'dist/web/main.dart.js' &&
        plan.compileArgs.join(' ') ==
            build.compileArgs(version, plan.output).join(' '),
    'structured build plan preserves the canonical JS command',
  );
  _expect(
    plan.fingerprint.length == 8 && plan.fingerprint != releasePlan.fingerprint,
    'source-map policy changes the deterministic plan fingerprint',
  );
  final roundTrip = build.BuildPlan.fromJson(plan.toJson());
  _expect(
    roundTrip.fingerprint == plan.fingerprint &&
        roundTrip.compileArgs.join(' ') == plan.compileArgs.join(' '),
    'build plan JSON round-trips without changing the command',
  );
  final tampered = Map<String, Object>.from(plan.toJson())
    ..['output'] = 'dist/web/tampered.js';
  _expectThrows(
    () => build.BuildPlan.fromJson(tampered),
    'tampered build plan fingerprint rejected',
  );
  final badSchema = Map<String, Object>.from(plan.toJson())
    ..['schemaVersion'] = 99;
  _expectThrows(
    () => build.BuildPlan.fromJson(badSchema),
    'future build plan schema rejected',
  );
  final defaults = build.parseBuildOptions(const []);
  _expect(
    !defaults.dryRun && defaults.sourceMaps && !defaults.json && !defaults.help,
    'default build options are stable',
  );
  final release = build.parseBuildOptions(const [
    '--dry-run',
    '--no-source-maps',
    '--json',
  ]);
  _expect(
    release.dryRun && !release.sourceMaps && release.json,
    'release dry-run options parse',
  );
  _expectThrows(
    () => build.parseBuildOptions(const ['--mystery']),
    'unknown build option rejected',
  );
  _expectThrows(
    () => build.parseBuildOptions(const ['--json']),
    'json without dry-run rejected',
  );
  final help = Process.runSync(Platform.resolvedExecutable, [
    'run',
    'tools/build.dart',
    '--help',
  ], runInShell: false);
  _expect(
    help.exitCode == 0 && help.stdout.toString().contains('--dry-run'),
    'help prints the build contract',
  );
  final probe = Process.runSync(Platform.resolvedExecutable, [
    'run',
    '-DPROJECT_VERSION=$version',
    'tools/test_build_provenance.dart',
    '--probe',
  ], runInShell: false);
  _expect(
    probe.exitCode == 0 &&
        probe.stdout.toString().contains(
          'build provenance probe: compiler define consumed as $version',
        ),
    'child Dart process consumes PROJECT_VERSION',
  );
  final dryRun = Process.runSync(Platform.resolvedExecutable, [
    'run',
    'tools/build.dart',
    '--dry-run',
  ], runInShell: false);
  final dryOutput = dryRun.stdout.toString();
  _expect(
    dryRun.exitCode == 0 &&
        dryOutput.contains('project version: $version') &&
        dryOutput.contains('source maps: true') &&
        dryOutput.contains(
          'compile: dart compile js -O2 -DPROJECT_VERSION=$version',
        ),
    'dry-run exposes the canonical local build command',
  );
  final releaseDryRun = Process.runSync(Platform.resolvedExecutable, [
    'run',
    'tools/build.dart',
    '--dry-run',
    '--no-source-maps',
  ], runInShell: false);
  _expect(
    releaseDryRun.exitCode == 0 &&
        releaseDryRun.stdout.toString().contains('source maps: false') &&
        releaseDryRun.stdout.toString().contains('--no-source-maps'),
    'release dry-run exposes the no-source-maps command',
  );
  final jsonDryRun = Process.runSync(Platform.resolvedExecutable, [
    'run',
    'tools/build.dart',
    '--dry-run',
    '--json',
  ], runInShell: false);
  final jsonOutput = jsonDecode(jsonDryRun.stdout.toString());
  final jsonMap = jsonOutput as Map<String, dynamic>;
  final jsonArgs = (jsonMap['compileArgs'] as List).cast<String>();
  final parsedJsonPlan = build.BuildPlan.fromJson(jsonMap);
  _expect(
    jsonDryRun.exitCode == 0 &&
        jsonMap['projectVersion'] == version &&
        jsonMap['sourceMaps'] == true &&
        jsonMap['schemaVersion'] == 1 &&
        jsonMap['target'] == 'js' &&
        jsonMap['output'] == 'dist/web/main.dart.js' &&
        (jsonMap['fingerprint'] as String).length == 8 &&
        jsonArgs.contains('-DPROJECT_VERSION=$version') &&
        parsedJsonPlan.fingerprint == jsonMap['fingerprint'],
    'json dry-run exposes structured provenance',
  );
  for (final invalid in const ['', '0.1.2', '0.1.2.x', '0.1.2.3.4']) {
    _expectThrows(
      () => build.validateProjectVersion(invalid),
      'invalid project version rejected: $invalid',
    );
    _expectThrows(
      () => build.compileDefines(invalid),
      'invalid compiler define rejected: $invalid',
    );
  }
  print('build provenance: local compiler version define is wired');
}

void _expectThrows(void Function() action, String message) {
  try {
    action();
  } on FormatException {
    return;
  }
  _fail(message);
}
