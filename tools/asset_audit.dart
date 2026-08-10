import 'dart:convert';
import 'dart:io';

const _assetsRoot = 'web/res';
const _manifestGroups = {'sfx', 'music', 'fonts', 'tex', 'ir'};
const _sha256RoundConstants = <int>[
  0x428a2f98,
  0x71374491,
  0xb5c0fbcf,
  0xe9b5dba5,
  0x3956c25b,
  0x59f111f1,
  0x923f82a4,
  0xab1c5ed5,
  0xd807aa98,
  0x12835b01,
  0x243185be,
  0x550c7dc3,
  0x72be5d74,
  0x80deb1fe,
  0x9bdc06a7,
  0xc19bf174,
  0xe49b69c1,
  0xefbe4786,
  0x0fc19dc6,
  0x240ca1cc,
  0x2de92c6f,
  0x4a7484aa,
  0x5cb0a9dc,
  0x76f988da,
  0x983e5152,
  0xa831c66d,
  0xb00327c8,
  0xbf597fc7,
  0xc6e00bf3,
  0xd5a79147,
  0x06ca6351,
  0x14292967,
  0x27b70a85,
  0x2e1b2138,
  0x4d2c6dfc,
  0x53380d13,
  0x650a7354,
  0x766a0abb,
  0x81c2c92e,
  0x92722c85,
  0xa2bfe8a1,
  0xa81a664b,
  0xc24b8b70,
  0xc76c51a3,
  0xd192e819,
  0xd6990624,
  0xf40e3585,
  0x106aa070,
  0x19a4c116,
  0x1e376c08,
  0x2748774c,
  0x34b0bcb5,
  0x391c0cb3,
  0x4ed8aa4a,
  0x5b9cca4f,
  0x682e6ff3,
  0x748f82ee,
  0x78a5636f,
  0x84c87814,
  0x8cc70208,
  0x90befffa,
  0xa4506ceb,
  0xbef9a3f7,
  0xc67178f2,
];

int _u32(int value) => value & 0xffffffff;

int _rightRotate(int value, int count) =>
    _u32((value >>> count) | (value << (32 - count)));

String _sha256(List<int> input) {
  final bytes = List<int>.from(input)..add(0x80);
  while (bytes.length % 64 != 56) {
    bytes.add(0);
  }
  final bitLength = input.length * 8;
  for (var shift = 56; shift >= 0; shift -= 8) {
    bytes.add((bitLength >>> shift) & 0xff);
  }
  var h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
  var h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
  final words = List<int>.filled(64, 0);
  for (var offset = 0; offset < bytes.length; offset += 64) {
    for (var i = 0; i < 16; i++) {
      final j = offset + i * 4;
      words[i] =
          (bytes[j] << 24) |
          (bytes[j + 1] << 16) |
          (bytes[j + 2] << 8) |
          bytes[j + 3];
    }
    for (var i = 16; i < 64; i++) {
      final s0 =
          _rightRotate(words[i - 15], 7) ^
          _rightRotate(words[i - 15], 18) ^
          (words[i - 15] >>> 3);
      final s1 =
          _rightRotate(words[i - 2], 17) ^
          _rightRotate(words[i - 2], 19) ^
          (words[i - 2] >>> 10);
      words[i] = _u32(words[i - 16] + s0 + words[i - 7] + s1);
    }
    var a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
    for (var i = 0; i < 64; i++) {
      final s1 = _rightRotate(e, 6) ^ _rightRotate(e, 11) ^ _rightRotate(e, 25);
      final choose = (e & f) ^ (_u32(~e) & g);
      final t1 = _u32(h + s1 + choose + _sha256RoundConstants[i] + words[i]);
      final s0 = _rightRotate(a, 2) ^ _rightRotate(a, 13) ^ _rightRotate(a, 22);
      final majority = (a & b) ^ (a & c) ^ (b & c);
      final t2 = _u32(s0 + majority);
      h = g;
      g = f;
      f = e;
      e = _u32(d + t1);
      d = c;
      c = b;
      b = a;
      a = _u32(t1 + t2);
    }
    h0 = _u32(h0 + a);
    h1 = _u32(h1 + b);
    h2 = _u32(h2 + c);
    h3 = _u32(h3 + d);
    h4 = _u32(h4 + e);
    h5 = _u32(h5 + f);
    h6 = _u32(h6 + g);
    h7 = _u32(h7 + h);
  }
  return [
    h0,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
  ].map((word) => word.toRadixString(16).padLeft(8, '0')).join();
}

class Findings {
  final bool strict;
  final List<String> errors = [];
  final List<String> warnings = [];

  Findings(this.strict);

  void error(String message) => errors.add(message);

  void debt(String message) {
    if (strict) {
      errors.add(message);
    } else {
      warnings.add(message);
    }
  }

  bool get ok => errors.isEmpty;
}

String _normalPath(Object? raw, String label, Findings f) {
  if (raw is! String || raw.isEmpty) {
    f.error('$label must be a non-empty string');
    return '';
  }
  if (raw.contains('\\') || raw.startsWith('/') || raw.contains('..')) {
    f.error('$label is not a safe relative POSIX path: $raw');
    return '';
  }
  return raw;
}

File _assetFile(String path) => File(
  '$_assetsRoot${Platform.pathSeparator}${path.replaceAll('/', Platform.pathSeparator)}',
);

bool _matches(String path, String pattern) {
  final escaped = RegExp.escape(
    pattern,
  ).replaceAll(r'\*\*', '.*').replaceAll(r'\*', '[^/]*');
  return RegExp('^$escaped\$').hasMatch(path);
}

void _skipWhitespace(String input, List<int> p) {
  while (p[0] < input.length && ' \n\r\t'.contains(input[p[0]])) {
    p[0]++;
  }
}

String _scanString(String input, List<int> p) {
  if (input[p[0]] != '"') throw const FormatException('expected string');
  final start = p[0]++;
  var escaped = false;
  while (p[0] < input.length) {
    final c = input[p[0]++];
    if (escaped) {
      escaped = false;
    } else if (c == '\\') {
      escaped = true;
    } else if (c == '"') {
      return jsonDecode(input.substring(start, p[0])) as String;
    }
  }
  throw const FormatException('unterminated string');
}

void _scanValue(String input, List<int> p) {
  _skipWhitespace(input, p);
  if (p[0] >= input.length) throw const FormatException('missing value');
  final c = input[p[0]];
  if (c == '"') {
    _scanString(input, p);
    return;
  }
  if (c == '{') {
    p[0]++;
    final keys = <String>{};
    _skipWhitespace(input, p);
    if (p[0] < input.length && input[p[0]] == '}') {
      p[0]++;
      return;
    }
    while (true) {
      _skipWhitespace(input, p);
      final key = _scanString(input, p);
      if (!keys.add(key)) throw FormatException('duplicate JSON key "$key"');
      _skipWhitespace(input, p);
      if (p[0] >= input.length || input[p[0]++] != ':') {
        throw const FormatException('expected colon');
      }
      _scanValue(input, p);
      _skipWhitespace(input, p);
      if (p[0] >= input.length) {
        throw const FormatException('unterminated object');
      }
      final delimiter = input[p[0]++];
      if (delimiter == '}') return;
      if (delimiter != ',') throw const FormatException('expected comma');
    }
  }
  if (c == '[') {
    p[0]++;
    _skipWhitespace(input, p);
    if (p[0] < input.length && input[p[0]] == ']') {
      p[0]++;
      return;
    }
    while (true) {
      _scanValue(input, p);
      _skipWhitespace(input, p);
      if (p[0] >= input.length) {
        throw const FormatException('unterminated array');
      }
      final delimiter = input[p[0]++];
      if (delimiter == ']') return;
      if (delimiter != ',') throw const FormatException('expected comma');
    }
  }
  while (p[0] < input.length && !',]} \n\r\t'.contains(input[p[0]])) {
    p[0]++;
  }
}

Map<String, dynamic>? _readJsonObject(File file, String label, Findings f) {
  if (!file.existsSync()) {
    f.error('$label is missing: ${file.path}');
    return null;
  }
  try {
    final raw = file.readAsStringSync();
    final p = [0];
    _scanValue(raw, p);
    _skipWhitespace(raw, p);
    if (p[0] != raw.length) throw const FormatException('trailing JSON data');
    final value = jsonDecode(raw);
    if (value is! Map<String, dynamic>) {
      f.error('$label must be a JSON object');
      return null;
    }
    return value;
  } on FormatException catch (e) {
    f.error('$label is invalid JSON: ${e.message}');
    return null;
  }
}

Future<List<Map<String, dynamic>>?> _loadInventory(Findings f) async {
  final result = await Process.run(
    Platform.resolvedExecutable,
    ['run', 'tmp/tools/fetch_assets.dart'],
    environment: {...Platform.environment, 'MANYFOLD_ASSET_INVENTORY': '1'},
  );
  if (result.exitCode != 0) {
    f.error('could not load source inventory: ${result.stderr}'.trim());
    return null;
  }
  try {
    final decoded = jsonDecode(result.stdout as String) as Map<String, dynamic>;
    final entries = decoded['assets'];
    if (entries is! List) throw const FormatException('assets is not a list');
    return entries
        .cast<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
  } catch (e) {
    f.error('source inventory emitted invalid JSON: $e');
    return null;
  }
}

void _checkSelfTest() {
  var duplicateRejected = false;
  try {
    final p = [0];
    _scanValue('{"a": 1, "a": 2}', p);
  } on FormatException {
    duplicateRejected = true;
  }
  if (!duplicateRejected ||
      !_matches('vo/a.ogg', 'vo/**') ||
      _matches('sfx/a.wav', 'vo/**') ||
      _sha256(utf8.encode('abc')) !=
          'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad') {
    stderr.writeln('asset_audit self-test failed');
    exitCode = 1;
    return;
  }
  stdout.writeln('asset_audit self-test passed');
}

Future<void> main(List<String> args) async {
  if (args.length == 1 && args.single == '--self-test') {
    _checkSelfTest();
    return;
  }
  if (args.any((arg) => arg != '--strict' && arg != '--build')) {
    stderr.writeln(
      'usage: dart run tools/asset_audit.dart [--strict|--build|--self-test]',
    );
    exitCode = 64;
    return;
  }
  final strict = !args.contains('--build');
  final findings = Findings(strict);
  final manifest = _readJsonObject(
    File('$_assetsRoot/manifest.json'),
    'manifest',
    findings,
  );
  final inventory = await _loadInventory(findings);
  if (manifest == null || inventory == null) {
    exitCode = 1;
    return;
  }

  final manifestPaths = <String>{};
  for (final group in _manifestGroups) {
    final entries = manifest[group];
    if (entries is! Map) {
      findings.error('manifest.$group must be an object');
      continue;
    }
    for (final entry in entries.entries) {
      if (entry.key is! String || (entry.key as String).isEmpty) {
        findings.error('manifest.$group has an invalid key');
        continue;
      }
      final path = _normalPath(
        entry.value,
        'manifest.$group.${entry.key}',
        findings,
      );
      if (path.isEmpty) {
        continue;
      }
      if (!manifestPaths.add(path)) {
        findings.error('duplicate manifest asset path: $path');
      }
      final file = _assetFile(path);
      if (!file.existsSync() || file.lengthSync() == 0) {
        findings.error('manifest asset is missing or empty: $path');
      }
    }
  }

  final inventoryNames = <String>{};
  final inventoryPaths = <String>{};
  final licenses = <String>{};
  final sourceByName = <String, Map<String, dynamic>>{};
  for (final source in inventory) {
    final name = source['name'];
    final path = _normalPath(
      source['path'],
      'inventory path for $name',
      findings,
    );
    if (name is! String || name.isEmpty || !inventoryNames.add(name)) {
      findings.error('duplicate or invalid inventory name: $name');
    } else {
      sourceByName[name] = source;
    }
    if (path.isNotEmpty && !inventoryPaths.add(path)) {
      findings.error('duplicate inventory path: $path');
    }
    for (final field in ['license', 'author', 'sourcePage']) {
      if (source[field] is! String || (source[field] as String).isEmpty) {
        findings.error('inventory $name has no $field record');
      }
    }
    if (source['license'] is String) licenses.add(source['license'] as String);
    final pinned = source['sha256'];
    if (pinned is String &&
        pinned.isNotEmpty &&
        path.isNotEmpty &&
        _assetFile(path).existsSync()) {
      final actual = _sha256(_assetFile(path).readAsBytesSync());
      if (actual != pinned) {
        findings.error('source-pinned sha256 mismatch for $name');
      }
    }
  }
  if (inventory.every(
    (source) =>
        source['sha256'] is! String || (source['sha256'] as String).isEmpty,
  )) {
    findings.debt(
      'source inventory has no pinned SHA-256 values; all ${inventory.length} assets rely on local fetch state',
    );
  }
  if (manifestPaths.length != inventoryPaths.length ||
      !manifestPaths.containsAll(inventoryPaths)) {
    findings.error(
      'manifest paths and source inventory paths must match exactly',
    );
  }

  final state = _readJsonObject(
    File('$_assetsRoot/.fetch_state.json'),
    'fetch state',
    findings,
  );
  if (state != null) {
    for (final entry in sourceByName.entries) {
      final recorded = state[entry.key];
      final path = entry.value['path'] as String;
      if (recorded is! String ||
          !RegExp(r'^[a-f0-9]{64}$').hasMatch(recorded)) {
        // `.fetch_state.json` is an ignored accelerator, not provenance. A
        // checkout may have no cache at all; the source inventory's
        // checked-in payload hash is the authoritative fallback in that case.
        final sourcePinned = entry.value['sha256'];
        if (sourcePinned is String &&
            RegExp(r'^[a-f0-9]{64}$').hasMatch(sourcePinned)) {
          final actual = _sha256(_assetFile(path).readAsBytesSync());
          if (actual != sourcePinned) {
            findings.error('source-pinned sha256 mismatch for ${entry.key}');
          }
          continue;
        }
        findings.debt('fetch state has no valid sha256 for ${entry.key}');
        continue;
      }
      final actual = _sha256(_assetFile(path).readAsBytesSync());
      if (actual != recorded) {
        findings.error('fetch-state sha256 mismatch for ${entry.key}');
      }
    }
    for (final name in state.keys) {
      if (!sourceByName.containsKey(name)) {
        findings.error('fetch state has unknown asset: $name');
      }
    }
  }

  final audit = manifest['assetAudit'];
  if (audit is! Map) {
    findings.error('manifest.assetAudit must be an object');
  } else {
    final licenseFiles = audit['licenseFiles'];
    if (licenseFiles is! Map) {
      findings.error('manifest.assetAudit.licenseFiles must be an object');
    } else {
      for (final license in licenses) {
        final path = _normalPath(
          licenseFiles[license],
          'license file for $license',
          findings,
        );
        if (path.isNotEmpty &&
            (!_assetFile(path).existsSync() ||
                _assetFile(path).lengthSync() == 0)) {
          findings.debt('full license text is missing: $path ($license)');
        }
      }
    }
    final orphanPolicy = audit['orphanPolicy'];
    final allowed = <Map<String, String>>[];
    if (orphanPolicy is! Map || orphanPolicy['allow'] is! List) {
      findings.error('manifest.assetAudit.orphanPolicy.allow must be a list');
    } else {
      for (final raw in orphanPolicy['allow'] as List) {
        if (raw is! Map) {
          findings.error('orphan policy entry must be an object');
          continue;
        }
        final path = _normalPath(raw['path'], 'orphan policy path', findings);
        final reason = raw['reason'];
        final status = raw['status'];
        if (reason is! String ||
            reason.isEmpty ||
            (status != 'generated' && status != 'unverified')) {
          findings.error(
            'orphan policy $path needs a reason and generated/unverified status',
          );
          continue;
        }
        allowed.add({'path': path, 'status': status as String});
      }
    }
    final known = {...inventoryPaths, 'manifest.json', '.fetch_state.json'};
    if (licenseFiles is Map) {
      for (final path in licenseFiles.values) {
        if (path is String) {
          known.add(path);
        }
      }
    }
    final unverified = <String>[];
    for (final entity in Directory(_assetsRoot).listSync(recursive: true)) {
      if (entity is! File) {
        continue;
      }
      final absolute = entity.absolute.path.replaceAll('\\', '/');
      final root = Directory(_assetsRoot).absolute.path.replaceAll('\\', '/');
      final path = absolute.substring(root.length + 1);
      // Authored house manifests are copied into web/res by tools/build.dart
      // for runtime loading, but they are not fetched/licensed media entries
      // and therefore do not belong to the external asset inventory.
      if (path == 'house' || path.startsWith('house/')) {
        continue;
      }
      if (known.contains(path)) {
        continue;
      }
      final policy = allowed
          .where((entry) => _matches(path, entry['path']!))
          .toList();
      if (policy.isEmpty) {
        findings.error('orphan asset has no policy record: $path');
      } else if (policy.length > 1) {
        findings.error('orphan asset matches multiple policy records: $path');
      } else if (policy.single['status'] == 'unverified') {
        unverified.add(path);
      }
    }
    if (unverified.isNotEmpty) {
      findings.debt(
        'orphan policy permits ${unverified.length} unverified asset(s): ${unverified.take(3).join(', ')}${unverified.length > 3 ? ', …' : ''}',
      );
    }
  }

  for (final warning in findings.warnings) {
    stdout.writeln('WARN asset_audit: $warning');
  }
  for (final error in findings.errors) {
    stderr.writeln('FAIL asset_audit: $error');
  }
  if (!findings.ok) {
    exitCode = 1;
  } else {
    stdout.writeln(
      'asset_audit passed (${strict ? 'strict' : 'build'} mode): ${inventory.length} inventoried assets',
    );
  }
}
