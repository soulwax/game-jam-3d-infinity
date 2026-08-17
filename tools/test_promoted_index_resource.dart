import 'dart:convert';
import 'dart:io';

void main() {
  final root = jsonDecode(File('web/res/models/index.json').readAsStringSync());
  final entries = (root as Map)['entries'];
  if (entries is! List || entries.isEmpty) {
    throw StateError('promoted model index has no runtime package');
  }
  final living = entries.whereType<Map>().firstWhere(
    (entry) => entry['assetId'] == 'living-room',
    orElse: () => throw StateError('living-room package is not promoted'),
  );
  final manifest = File('web/res/models/${living['manifestPath']}');
  if (!manifest.existsSync()) throw StateError('promoted manifest is missing');
  print('promoted index resource: living-room package is browser-addressable');
}
