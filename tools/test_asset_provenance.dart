import 'dart:convert';
import 'dart:io';

void fail(String message) => throw StateError('asset provenance: $message');

void main() {
  final manifest =
      jsonDecode(File('web/res/manifest.json').readAsStringSync())
          as Map<String, dynamic>;
  final sfx = (manifest['sfx'] as Map).cast<String, dynamic>();
  final soundscape =
      jsonDecode(File('assets/house/soundscape.json').readAsStringSync())
          as Map<String, dynamic>;
  final emitters = soundscape['emitters'] as List<dynamic>;
  final cueIds = <String>{};
  for (final rawEmitter in emitters) {
    final emitter = (rawEmitter as Map).cast<String, dynamic>();
    final cues = (emitter['cues'] as Map).cast<String, dynamic>();
    for (final cue in cues.values) {
      if (cue is! String || !cueIds.add(cue)) continue;
      final path = sfx[cue];
      if (path is! String || path.isEmpty) {
        fail('soundscape cue $cue is absent from manifest.sfx');
      }
      final file = File('web/res/$path');
      if (!file.existsSync() || file.lengthSync() == 0) {
        fail('soundscape cue $cue has no non-empty file at $path');
      }
    }
  }
  if (cueIds.length < 12) {
    fail('expected the expanded house cue set, found ${cueIds.length}');
  }

  final inventory = Process.runSync(
    Platform.resolvedExecutable,
    ['run', 'tools/fetch_assets.dart'],
    environment: {...Platform.environment, 'MANYFOLD_ASSET_INVENTORY': '1'},
  );
  if (inventory.exitCode != 0) {
    fail('source inventory command failed: ${inventory.stderr}');
  }
  final decoded =
      jsonDecode(inventory.stdout as String) as Map<String, dynamic>;
  final paths = {
    for (final raw in (decoded['assets'] as List<dynamic>))
      (raw as Map).cast<String, dynamic>()['path'] as String,
  };
  final assets = (decoded['assets'] as List<dynamic>)
      .cast<Map>()
      .map((raw) => raw.cast<String, dynamic>())
      .toList(growable: false);
  if (assets.length < 40 ||
      assets.any(
        (asset) =>
            asset['sha256'] is! String ||
            !RegExp(r'^[a-f0-9]{64}$').hasMatch(asset['sha256'] as String),
      )) {
    fail('every source record must expose a checked-in payload SHA-256');
  }
  for (final entry in sfx.entries) {
    if (!paths.contains(entry.value)) {
      fail('manifest SFX ${entry.key} is absent from source inventory');
    }
  }
  final audit = (manifest['assetAudit'] as Map).cast<String, dynamic>();
  final licenseFiles = (audit['licenseFiles'] as Map).cast<String, dynamic>();
  for (final entry in licenseFiles.entries) {
    final path = entry.value;
    if (path is! String ||
        !File('web/res/$path').existsSync() ||
        File('web/res/$path').lengthSync() == 0) {
      fail('declared ${entry.key} licence text is missing');
    }
  }
  final strict = Process.runSync(Platform.resolvedExecutable, [
    'run',
    'tools/asset_audit.dart',
    '--strict',
  ]);
  final strictOutput = '${strict.stdout}\n${strict.stderr}';
  if (strict.exitCode != 1 ||
      strictOutput.contains('source inventory has no pinned SHA-256') ||
      strictOutput.contains('fetch state has no valid sha256') ||
      strictOutput.contains('full license text is missing') ||
      !strictOutput.contains('orphan policy permits') ||
      !strictOutput.contains('vo/')) {
    fail(
      'strict audit must leave only the explicit unverified voice orphan policy: '
      '${strictOutput.trim()}',
    );
  }
  print(
    'asset provenance: ${sfx.length} manifest SFX and ${cueIds.length} '
    'soundscape cues have source records',
  );
}
