import 'dart:convert';
import 'dart:io';

void main() {
  final inventory =
      jsonDecode(File('assets/house/inventory.json').readAsStringSync()) as Map;
  final assets = inventory['assets'];
  if (assets is! List || assets.isEmpty) {
    throw StateError('authored inventory has no assets');
  }
  final ids = <String>{};
  const statuses = {'production', 'proxy', 'invisible-anchor'};
  for (final raw in assets) {
    if (raw is! Map || raw['id'] is! String) {
      throw StateError('inventory asset is malformed');
    }
    final id = raw['id'] as String;
    if (!ids.add(id)) throw StateError('duplicate inventory asset: $id');
    final status = (raw['status'] as String?) ?? 'proxy';
    if (!statuses.contains(status)) {
      throw StateError('invalid inventory status for $id: $status');
    }
    if (status == 'production' &&
        (raw['source'] is! String ||
            !(raw['source'] as String).startsWith('res/models/'))) {
      throw StateError('production asset is not browser-package backed: $id');
    }
  }
  stdout.writeln(
    'inventory status contract: ${ids.length} assets use explicit production/proxy/anchor semantics',
  );
}
