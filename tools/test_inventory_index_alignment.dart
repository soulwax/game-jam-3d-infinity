import 'dart:convert';
import 'dart:io';

void main() {
  final inventory =
      jsonDecode(File('assets/house/inventory.json').readAsStringSync()) as Map;
  final production = {
    for (final asset in (inventory['assets'] as List))
      if ((asset as Map)['status'] == 'production') asset['id'] as String,
  };
  final index =
      jsonDecode(File('web/res/models/index.json').readAsStringSync()) as Map;
  final indexed = {
    for (final entry in (index['entries'] as List))
      (entry as Map)['assetId'] as String,
  };
  final missing = production.difference(indexed);
  if (missing.isNotEmpty) {
    throw StateError('production inventory is not promoted: $missing');
  }
  print('inventory/index alignment: every production asset is promoted');
}
