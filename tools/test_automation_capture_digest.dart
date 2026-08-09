import 'dart:convert';
import 'dart:io';

import 'automation.dart' as runner;

Future<void> main() async {
  final root = await Directory.systemTemp.createTemp('capture digest ');
  try {
    final valid = File('${root.path}/browser-valid.digest.json')
      ..writeAsStringSync(
        jsonEncode({
          'schemaVersion': 1,
          'screenshot': 'browser-valid.png',
          'metadata': 'browser-valid.json',
          'screenshotSha256': 'a' * 64,
          'metadataSha256': 'b' * 64,
        }),
      );
    File('${root.path}/browser-valid.png').writeAsBytesSync(const [1, 2, 3]);
    File('${root.path}/browser-valid.json').writeAsStringSync('{}');
    final parsed = await runner.parseCaptureDigest(valid);
    _expect(parsed['schemaVersion'] == '1', 'schema version parses');
    _expect(
      parsed['screenshot'] == 'browser-valid.png',
      'screenshot name parses',
    );
    _expect(parsed['metadata'] == 'browser-valid.json', 'metadata name parses');
    _expect(parsed['screenshotSha256'] == 'a' * 64, 'screenshot hash parses');
    _expect(parsed['metadataSha256'] == 'b' * 64, 'metadata hash parses');

    await _expectFormatFailure(
      root,
      'browser-list.digest.json',
      jsonEncode(const []),
      'non-object digest rejects',
    );
    await _expectFormatFailure(
      root,
      'browser-missing.digest.json',
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': 'browser-missing.png',
        'metadata': 'browser-missing.json',
        'screenshotSha256': 'a' * 64,
      }),
      'missing metadata hash rejects',
    );
    await _expectFormatFailure(
      root,
      'browser-short.digest.json',
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': 'browser-short.png',
        'metadata': 'browser-short.json',
        'screenshotSha256': 'a',
        'metadataSha256': 'b' * 64,
      }),
      'short hash rejects',
    );
    await _expectFormatFailure(
      root,
      'browser-uppercase.digest.json',
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': 'browser-uppercase.png',
        'metadata': 'browser-uppercase.json',
        'screenshotSha256': 'A' * 64,
        'metadataSha256': 'b' * 64,
      }),
      'uppercase hash rejects',
    );
    await _expectFormatFailure(
      root,
      'browser-schema.digest.json',
      jsonEncode({
        'schemaVersion': 2,
        'screenshot': 'browser-schema.png',
        'metadata': 'browser-schema.json',
        'screenshotSha256': 'a' * 64,
        'metadataSha256': 'b' * 64,
      }),
      'unsupported schema rejects',
    );
    await _expectFormatFailure(
      root,
      'browser-unsafe.digest.json',
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': '../escape.png',
        'metadata': 'browser-unsafe.json',
        'screenshotSha256': 'a' * 64,
        'metadataSha256': 'b' * 64,
      }),
      'unsafe artifact name rejects',
    );
    await _expectFormatFailure(
      root,
      'browser-no-screenshot.digest.json',
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': 'browser-no-screenshot.png',
        'metadata': 'browser-no-screenshot.json',
        'screenshotSha256': 'a' * 64,
        'metadataSha256': 'b' * 64,
      }),
      'missing screenshot file rejects',
    );
    await _expectFormatFailure(
      root,
      'browser-no-metadata.digest.json',
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': 'browser-no-metadata.png',
        'metadata': 'browser-no-metadata.json',
        'screenshotSha256': 'a' * 64,
        'metadataSha256': 'b' * 64,
      }),
      'missing metadata file rejects',
    );
    stdout.writeln(
      'automation capture digest: valid and malformed sidecars pass',
    );
  } finally {
    await root.delete(recursive: true);
  }
}

Future<void> _expectFormatFailure(
  Directory root,
  String name,
  String content,
  String message,
) async {
  final file = File('${root.path}/$name')..writeAsStringSync(content);
  try {
    await runner.parseCaptureDigest(file);
  } on FormatException {
    return;
  }
  throw StateError(message);
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
