#!/usr/bin/env dart

import 'dart:convert';
import 'dart:io';

import 'package:pixeldart/assets/importers/asset_tool_command.dart';
import 'package:pixeldart/assets/importers/converter_command.dart';
import 'package:pixeldart/assets/importers/fbx_import_config.dart' as px_import;
import 'package:pixeldart/assets/importers/asset_import_diagnostic.dart'
    as px_diag;
import 'package:pixeldart/assets/importers/fbx_import_provenance.dart'
    as px_provenance;
import 'package:pixeldart/assets/packages/model_package_validator.dart'
    as px_package;
import '../external/pixeldart/tools/assets/converter_process.dart'
    as px_process;

Future<void> main(List<String> args) async {
  final command = AssetToolCommand.parse(args);
  if (command == null) {
    stderr.writeln(
      'usage: dart run tools/fbx_pipeline.dart\n${AssetToolCommand.usage}',
    );
    exitCode = 64;
    return;
  }
  switch (command.subcommand) {
    case AssetToolSubcommand.init:
      final init = command.arguments;
      await _initConfig(init[0], init[1], init[2], init[3]);
      return;
    case AssetToolSubcommand.verify:
      await _verifyManifest(command.arguments.single);
      return;
    case AssetToolSubcommand.convert:
      await _convert(command.arguments[0], command.arguments[1]);
      return;
    case AssetToolSubcommand.package:
      await _package(command.arguments[0], command.arguments[1]);
      return;
    case AssetToolSubcommand.doctor:
      await _doctor();
      return;
    case AssetToolSubcommand.preflight:
      break;
  }
  final source = File(command.arguments[0]);
  final configFile = File(command.arguments[1]);
  final diagnostics = <px_diag.AssetImportDiagnostic>[];
  void error(String code, String stage, String message) {
    diagnostics.add(
      px_diag.AssetImportDiagnostic(
        code: code,
        severity: px_diag.DiagnosticSeverity.error,
        stage: stage,
        message: message,
        remediation: 'repair the source packet or import configuration',
      ),
    );
  }

  if (!source.existsSync()) {
    error(
      'SOURCE_MISSING',
      'source',
      'FBX source does not exist: ${source.path}',
    );
  }
  if (!configFile.existsSync()) {
    error(
      'CONFIG_MISSING',
      'config',
      'import config does not exist: ${configFile.path}',
    );
  }

  px_import.FbxImportConfig? config;
  if (configFile.existsSync()) {
    try {
      config = px_import.FbxImportConfig.fromJson(
        jsonDecode(configFile.readAsStringSync()) as Map<String, dynamic>,
      );
      for (final message in config.validate()) {
        error('CONFIG_INVALID', 'config', message);
      }
      if (config.settingsHash != config.computedSettingsHash()) {
        error(
          'CONFIG_HASH_MISMATCH',
          'config',
          'settingsHash does not match canonical import settings',
        );
      }
    } on Object catch (caught) {
      error('CONFIG_PARSE', 'config', 'invalid import config: $caught');
    }
  }

  var binaryHeader = false;
  var asciiHeader = false;
  int? fbxVersion;
  String? sourceSha256;
  if (source.existsSync()) {
    final length = source.lengthSync();
    if (length < 27) {
      error(
        'SOURCE_TOO_SMALL',
        'source',
        'FBX source is too small to contain a binary header',
      );
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
          error(
            'SOURCE_HEADER',
            'source',
            'source is neither binary FBX nor recognized ASCII FBX',
          );
        }
      } else {
        binaryHeader = true;
        fbxVersion =
            bytes[23] |
            (bytes[24] << 8) |
            (bytes[25] << 16) |
            (bytes[26] << 24);
      }
      sourceSha256 = px_import.Sha256.compute(await source.readAsBytes());
    }
  }
  if (config != null) {
    diagnostics.add(
      const px_diag.AssetImportDiagnostic(
        code: 'CONVERTER_INSPECTION_PENDING',
        severity: px_diag.DiagnosticSeverity.warning,
        stage: 'converter',
        message:
            'scene node/material/animation inspection awaits pinned converter',
        remediation: 'run the pinned converter inspection before promotion',
      ),
    );
  }
  final result = px_provenance.FbxPreflightResult(
    sourcePath: source.path,
    sourceBytes: source.existsSync() ? source.lengthSync() : 0,
    sourceSha256: sourceSha256,
    fbxVersion: fbxVersion,
    binaryHeader: binaryHeader,
    asciiHeader: asciiHeader,
    diagnostics: diagnostics,
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
      '${neutral.path}/${px_import.FbxImportConfig.fromJson(jsonDecode(File('$assetDir/import.json').readAsStringSync()) as Map<String, dynamic>).assetId}.glb',
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
  final config = px_import.FbxImportConfig.fromJson(
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
  final converter = ConverterCommandSpec.forConfig(config);
  if (converter == null) {
    stderr.writeln('unsupported converter identity: ${config.converterId}');
    exitCode = 8;
    return;
  }
  try {
    final report = await px_process.runConverterProcess(
      spec: converter,
      config: config,
      sourcePath: sources.single.path,
      outputPath: neutral.path,
      blenderScript: 'external/pixeldart/tools/assets/fbx_blender_export.py',
    );
    if (!report.evidence.passed || !neutral.existsSync()) {
      final messages = <String>[
        for (final diagnostic in report.evidence.diagnostics)
          diagnostic.message,
        report.stderr,
      ];
      stderr.writeln(
        messages.where((message) => message.trim().isNotEmpty).join('\n'),
      );
      exitCode = 8;
      return;
    }
    stdout.writeln('wrote neutral inspection package: ${neutral.path}');
    stdout.writeln(
      'next: dart run tools/fbx_normalize.dart normalize ${neutral.path} '
      '$assetDir/import.json --out <empty-dir>, then run verify',
    );
  } on ProcessException catch (error) {
    stderr.writeln('converter process failed: ${error.message}');
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
      errors.addAll(
        px_package
            .validateGeneratedPackageManifest(manifest)
            .map((diagnostic) => diagnostic.message),
      );
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
            manifest['packageHash'] != px_import.Sha256.compute(bytes)) {
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
  final config = px_import.FbxImportConfig.recommended(
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
