import 'dart:io';

void main() {
  final source = File('external/docs/MASTERPLAN.md').readAsStringSync();
  final body = <String, ({String state, String owner})>{};
  final heading = RegExp(r'^### ([A-Z0-9-]+) —', multiLine: true);
  for (final match in heading.allMatches(source)) {
    final id = match.group(1)!;
    final end = source.indexOf('\n### ', match.end);
    final block = source.substring(match.start, end < 0 ? source.length : end);
    final state = RegExp(
      r'^State: (OPEN|ACTIVE|PARTIAL|BLOCKED|CLOSED|DROPPED)$',
      multiLine: true,
    ).firstMatch(block)?.group(1);
    final owner = RegExp(
      r'^Owner: (.+)$',
      multiLine: true,
    ).firstMatch(block)?.group(1);
    if (state != null && owner != null) {
      body[id] = (state: state, owner: owner.trim());
    }
  }

  final ledgerStart = source.indexOf('| ID | State | Owner |');
  if (ledgerStart < 0) throw StateError('masterplan compact ledger is missing');
  final ledger = source.substring(ledgerStart);
  final mismatches = <String>[];
  for (final line in ledger.split('\n')) {
    final match = RegExp(
      r'^\| ([A-Z0-9-]+) \| ([A-Z]+) \| ([^|]+) \|',
    ).firstMatch(line);
    if (match == null) {
      continue;
    }
    final id = match.group(1)!;
    final expected = body[id];
    if (expected == null) continue;
    final actualState = match.group(2)!;
    final actualOwner = match.group(3)!.trim();
    if (actualState != expected.state || actualOwner != expected.owner) {
      mismatches.add(
        '$id body=${expected.state}/${expected.owner} ledger=$actualState/$actualOwner',
      );
    }
  }
  if (mismatches.isNotEmpty) {
    throw StateError(
      'masterplan body/ledger mismatch:\n${mismatches.join('\n')}',
    );
  }
  print('masterplan ledger consistency: packet body states and owners agree');
}
