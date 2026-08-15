#!/usr/bin/env dart

import 'dart:convert';
import 'dart:io';

import 'package:quarantine/engine/asset_source_contract.dart';
import 'package:quarantine/engine/fbx_import_contract.dart';

Future<void> main(List<String> args) async {
  if (args.length == 5 && args[0] == 'init') {
    await _initConfig(args[1], args[2], args[3], args[4]);
    return;
  }
  if (args.length == 2 && args[0] == 'verify') {
    await _verifyManifest(args[1]);
    return;
  }
  if (args.length == 4 && args[0] == 'convert' && args[2] == '--out') {
    await _convert(args[1], args[3]);
    return;
  }
  if (args.length == 4 && args[0] == 'package' && args[2] == '--out') {
    await _package(args[1], args[3]);
    return;
  }
  if (args.length == 1 && args[0] == 'doctor') {
    await _doctor();
    return;
  }
  if (args.length != 3 || args[0] != 'preflight') {
    stderr.writeln(
      'usage: dart run tools/fbx_pipeline.dart init <asset-id> <converter-id> '
      '<converter-version> <import.json>\n'
      '   or: dart run tools/fbx_pipeline.dart verify <generated-manifest.json>\n'
      '   or: dart run tools/fbx_pipeline.dart convert <asset-dir> --out <dir>\n'
      '   or: dart run tools/fbx_pipeline.dart package <asset-dir> --out <dir>\n'
      '   or: dart run tools/fbx_pipeline.dart doctor\n'
      '   or: dart run tools/fbx_pipeline.dart preflight <model.fbx> <import.json>',
    );
    exitCode = 64;
    return;
  }
  final source = File(args[1]);
  final configFile = File(args[2]);
  final errors = <String>[];
  if (!source.existsSync()) {
    errors.add('FBX source does not exist: ${source.path}');
  }
  if (!configFile.existsSync()) {
    errors.add('import config does not exist: ${configFile.path}');
  }

  FbxImportConfig? config;
  if (configFile.existsSync()) {
    try {
      config = FbxImportConfig.fromJson(
        jsonDecode(configFile.readAsStringSync()) as Map<String, dynamic>,
      );
      errors.addAll(config.validate());
      if (config.settingsHash != config.computedSettingsHash()) {
        errors.add('settingsHash does not match canonical import settings');
      }
    } on Object catch (error) {
      errors.add('invalid import config: $error');
    }
  }

  var binaryHeader = false;
  var asciiHeader = false;
  int? fbxVersion;
  String? sourceSha256;
  if (source.existsSync()) {
    final length = source.lengthSync();
    if (length < 27) {
      errors.add('FBX source is too small to contain a binary header');
    } else {
      final bytes = await source
          .openRead(0, 27)
          .fold<List<int>>(<int>[], (all, chunk) => all..addAll(chunk));
      const magic = 'Kaydara FBX Binary';
      final actual = String.fromCharCodes(bytes.take(magic.length));
      if (actual != magic) {
        final prefix = String.fromCharCodes(bytes).replaceAll('\u0000', ' ');
        asciiHeader =
            prefix.contains('FBXHeaderExtension') || prefix.contains('; FBX');
        if (!asciiHeader) {
          errors.add('source is neither binary FBX nor recognized ASCII FBX');
        }
      } else {
        binaryHeader = true;
        fbxVersion =
            bytes[23] |
            (bytes[24] << 8) |
            (bytes[25] << 16) |
            (bytes[26] << 24);
      }
      sourceSha256 = AssetConverter.computeSha256(await source.readAsBytes());
    }
  }
  final result = FbxPreflightResult(
    sourcePath: source.path,
    sourceBytes: source.existsSync() ? source.lengthSync() : 0,
    sourceSha256: sourceSha256,
    fbxVersion: fbxVersion,
    binaryHeader: binaryHeader,
    asciiHeader: asciiHeader,
    errors: errors,
    warnings: config == null
        ? const []
        : const [
            'scene node/material/animation inspection awaits pinned converter',
          ],
  );
  stdout.writeln(const JsonEncoder.withIndent('  ').convert(result.toJson()));
  if (!result.passed) exitCode = 5;
}

Future<void> _package(String assetDir, String outputDir) async {
  final output = Directory(outputDir);
  if (output.existsSync() && output.listSync().isNotEmpty) {
    stderr.writeln(
      'refusing to overwrite non-empty output directory: $outputDir',
    );
    exitCode = 73;
    return;
  }
  final staging = await Directory.systemTemp.createTemp('pixeldart-fbx-');
  final neutral = Directory('${staging.path}/neutral');
  try {
    final convert = await Process.run(Platform.resolvedExecutable, [
      'run',
      'tools/fbx_pipeline.dart',
      'convert',
      assetDir,
      '--out',
      neutral.path,
    ]);
    if (convert.exitCode != 0) {
      stderr.writeln('${convert.stdout}\n${convert.stderr}'.trim());
      exitCode = convert.exitCode;
      return;
    }
    final glb = File(
      '${neutral.path}/${FbxImportConfig.fromJson(jsonDecode(File('$assetDir/import.json').readAsStringSync()) as Map<String, dynamic>).assetId}.glb',
    );
    final normalize = await Process.run(Platform.resolvedExecutable, [
      'run',
      'tools/fbx_normalize.dart',
      'normalize',
      glb.path,
      '$assetDir/import.json',
      '--out',
      outputDir,
    ]);
    if (normalize.exitCode != 0) {
      stderr.writeln('${normalize.stdout}\n${normalize.stderr}'.trim());
      exitCode = normalize.exitCode;
      return;
    }
    final manifest = File('$outputDir/generated-manifest.json');
    await _verifyManifest(manifest.path);
    if (exitCode == 0) {
      stdout.writeln('verified FBX runtime package: $outputDir');
    }
  } finally {
    await staging.delete(recursive: true);
  }
}

Future<void> _convert(String assetDir, String outputDir) async {
  final root = Directory(assetDir);
  final configFile = File('${root.path}/import.json');
  final sourceDir = Directory('${root.path}/source');
  final errors = <String>[];
  if (!root.existsSync()) {
    errors.add('asset directory does not exist: $assetDir');
  }
  if (!configFile.existsSync()) errors.add('missing import.json in $assetDir');
  if (!sourceDir.existsSync()) {
    errors.add('missing source directory in $assetDir');
  }
  if (errors.isNotEmpty) {
    stderr.writeln(errors.join('\n'));
    exitCode = 5;
    return;
  }
  final config = FbxImportConfig.fromJson(
    jsonDecode(configFile.readAsStringSync()) as Map<String, dynamic>,
  );
  errors.addAll(config.validate());
  if (config.settingsHash != config.computedSettingsHash()) {
    errors.add('settingsHash does not match canonical import settings');
  }
  final sources = sourceDir
      .listSync(recursive: true)
      .whereType<File>()
      .where((file) => file.path.toLowerCase().endsWith('.fbx'))
      .toList();
  if (sources.length != 1) {
    errors.add('source directory must contain exactly one FBX file');
  }
  if (errors.isNotEmpty) {
    stderr.writeln(errors.join('\n'));
    exitCode = 5;
    return;
  }
  final output = Directory(outputDir);
  if (output.existsSync() && output.listSync().isNotEmpty) {
    stderr.writeln(
      'refusing to overwrite non-empty output directory: $outputDir',
    );
    exitCode = 73;
    return;
  }
  output.createSync(recursive: true);
  final neutral = File('${output.path}/${config.assetId}.glb');
  final isAssimp = config.converterId == 'assimp-cli';
  final command = isAssimp ? 'assimp' : 'blender';
  try {
    final arguments = isAssimp
        ? <String>['export', sources.single.path, neutral.path]
        : <String>[
            '-b',
            '--python',
            'tools/fbx_blender_export.py',
            '--',
            '--source',
            sources.single.path,
            '--out',
            neutral.path,
            '--export-animations',
            config.animationPolicy == 'bake-glb-clips' ? 'true' : 'false',
          ];
    final result = await Process.run(command, arguments);
    if (result.exitCode != 0 || !neutral.existsSync()) {
      stderr.writeln('${result.stdout}\n${result.stderr}'.trim());
      exitCode = 8;
      return;
    }
    stdout.writeln('wrote neutral inspection package: ${neutral.path}');
    stdout.writeln(
      'next: dart run tools/fbx_normalize.dart normalize ${neutral.path} '
      '$assetDir/import.json --out <empty-dir>, then run verify',
    );
  } on ProcessException catch (error) {
    stderr.writeln('$command is unavailable: ${error.message}');
    exitCode = 8;
  }
}

Future<void> _doctor() async {
  const candidates = ['blender', 'assimp', 'fbx2gltf'];
  final results = <Map<String, dynamic>>[];
  for (final command in candidates) {
    try {
      final result = await Process.run(
        command,
        command == 'assimp' ? ['version'] : ['--version'],
      );
      final output = '${result.stdout}\n${result.stderr}'.trim();
      results.add({
        'command': command,
        'available': result.exitCode == 0,
        'version': output.split('\n').first,
      });
    } on ProcessException catch (error) {
      results.add({
        'command': command,
        'available': false,
        'error': error.message,
      });
    }
  }
  final available = results.any((entry) => entry['available'] == true);
  stdout.writeln(
    const JsonEncoder.withIndent('  ').convert({
      'schema': 'pixeldart-fbx-toolchain-v1',
      'available': available,
      'candidates': results,
      'next': available
          ? 'pin the selected converter in import.json'
          : 'install a licensed/pinned FBX converter before FBX-01 conversion',
    }),
  );
  if (!available) exitCode = 8;
}

Future<void> _verifyManifest(String path) async {
  final file = File(path);
  final errors = <String>[];
  Map<String, dynamic>? manifest;
  if (!file.existsSync()) {
    errors.add('generated manifest does not exist: $path');
  } else {
    try {
      manifest = jsonDecode(file.readAsStringSync()) as Map<String, dynamic>;
      errors.addAll(validateFbxGeneratedPackage(manifest));
      final packageFiles = manifest['packageFiles'];
      if (packageFiles is List &&
          packageFiles.every((entry) => entry is String)) {
        final bytes = <int>[];
        for (final relative in packageFiles.cast<String>()) {
          if (relative.contains('..') || relative.startsWith('/')) {
            errors.add('packageFiles must stay inside the generated directory');
            continue;
          }
          final part = File('${file.parent.path}/$relative');
          if (!part.existsSync()) {
            errors.add('package file does not exist: $relative');
          } else {
            bytes.addAll(part.readAsBytesSync());
          }
        }
        if (errors.isEmpty &&
            manifest['packageHash'] != AssetConverter.computeSha256(bytes)) {
          errors.add('packageHash does not match declared packageFiles');
        }
      }
    } on Object catch (error) {
      errors.add('invalid generated manifest: $error');
    }
  }
  stdout.writeln(
    const JsonEncoder.withIndent('  ').convert({
      'schema': 'pixeldart-fbx-package-verification-v1',
      'path': path,
      'passed': errors.isEmpty,
      'errors': errors,
    }),
  );
  if (errors.isNotEmpty) exitCode = 6;
}

Future<void> _initConfig(
  String assetId,
  String converterId,
  String converterVersion,
  String outputPath,
) async {
  final output = File(outputPath);
  final config = FbxImportConfig.recommended(
    assetId: assetId,
    converterId: converterId,
    converterVersion: converterVersion,
  );
  final errors = config.validate();
  if (errors.isNotEmpty) {
    stderr.writeln(errors.join('\n'));
    exitCode = 64;
    return;
  }
  if (output.existsSync()) {
    stderr.writeln('refusing to overwrite existing import config: $outputPath');
    exitCode = 73;
    return;
  }
  output.parent.createSync(recursive: true);
  output.writeAsStringSync('${config.canonicalJson()}\n');
  stdout.writeln('wrote $outputPath (${config.settingsHash})');
}
