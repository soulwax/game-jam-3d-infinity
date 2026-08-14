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
  if (args.length != 3 || args[0] != 'preflight') {
    stderr.writeln(
      'usage: dart run tools/fbx_pipeline.dart init <asset-id> <converter-id> '
      '<converter-version> <import.json>\n'
      '   or: dart run tools/fbx_pipeline.dart verify <generated-manifest.json>\n'
      '   or: dart run tools/fbx_pipeline.dart preflight <model.fbx> <import.json>',
    );
    exitCode = 64;
    return;
  }
  final source = File(args[1]);
  final configFile = File(args[2]);
  final errors = <String>[];
  if (!source.existsSync())
    errors.add('FBX source does not exist: ${source.path}');
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
