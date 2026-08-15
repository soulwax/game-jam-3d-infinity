import 'dart:convert';
import 'dart:io';

Future<void> main(List<String> args) async {
  if (args.length != 1) throw ArgumentError('usage: ... <asset-dir>');
  final source = Directory(args.single);
  final temp = await Directory.systemTemp.createTemp('fbx-integrity-test-');
  final packet = Directory('${temp.path}/packet');
  try {
    await _copyTree(source, packet);
    final provenanceFile = File('${packet.path}/PROVENANCE.json');
    final provenance =
        jsonDecode(provenanceFile.readAsStringSync()) as Map<String, dynamic>;
    final files = provenance['sourceFiles'] as List<dynamic>;
    final first = Map<String, dynamic>.from(files.first as Map);
    first['sha256'] = '0' * 64;
    files[0] = first;
    provenanceFile.writeAsStringSync(
      '${const JsonEncoder.withIndent('  ').convert(provenance)}\n',
    );
    final output = Directory('${temp.path}/generated');
    final result = await Process.run(
      Platform.resolvedExecutable,
      [
        'run',
        'tools/fbx_pipeline.dart',
        'package',
        packet.path,
        '--out',
        output.path,
      ],
      environment: {'HOME': '/tmp'},
    );
    if (result.exitCode == 0) {
      throw StateError('tampered provenance unexpectedly passed');
    }
    if (!('${result.stdout}\n${result.stderr}').contains(
      'provenance hash mismatch',
    )) {
      throw StateError(
        'tampered provenance failed without the expected diagnostic',
      );
    }
    print('FBX integrity gate passed: tampered source rejected');
  } finally {
    await temp.delete(recursive: true);
  }
}

Future<void> _copyTree(Directory source, Directory destination) async {
  destination.createSync(recursive: true);
  for (final entity in source.listSync()) {
    final name = entity.path.substring(source.path.length + 1);
    final target = '${destination.path}/$name';
    if (entity is Directory) {
      await _copyTree(entity, Directory(target));
    } else if (entity is File) {
      await entity.copy(target);
    }
  }
}
