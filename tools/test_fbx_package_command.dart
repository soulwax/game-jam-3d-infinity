import 'dart:io';
import 'dart:convert';

Future<void> main(List<String> args) async {
  if (args.length != 1) throw ArgumentError('usage: ... <asset-dir>');
  final output = await Directory.systemTemp.createTemp('fbx-package-test-');
  try {
    final result = await Process.run(
      Platform.resolvedExecutable,
      [
        'run',
        'tools/fbx_pipeline.dart',
        'package',
        args.single,
        '--out',
        output.path,
      ],
      environment: {'HOME': '/tmp'},
    );
    if (result.exitCode != 0) {
      throw StateError('${result.stdout}\n${result.stderr}'.trim());
    }
    final forbidden = output.listSync(recursive: true).whereType<File>().where((
      file,
    ) {
      final path = file.path.toLowerCase();
      return path.endsWith('.fbx') ||
          path.endsWith('.glb') ||
          path.endsWith('.gltf');
    }).toList();
    if (forbidden.isNotEmpty) {
      throw StateError(
        'runtime package contains source/intermediate files: $forbidden',
      );
    }
    if (!File('${output.path}/generated-manifest.json').existsSync()) {
      throw StateError('runtime package manifest is missing');
    }
    final manifest =
        jsonDecode(
              File('${output.path}/generated-manifest.json').readAsStringSync(),
            )
            as Map<String, dynamic>;
    final provenance =
        jsonDecode(File('${args.single}/PROVENANCE.json').readAsStringSync())
            as Map<String, dynamic>;
    if (manifest['licenseId'] != provenance['licenseId']) {
      throw StateError(
        'runtime manifest license provenance does not match source',
      );
    }
    print('FBX package command passed: source excluded, manifest present');
  } finally {
    await output.delete(recursive: true);
  }
}
