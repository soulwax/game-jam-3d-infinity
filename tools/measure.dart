






import 'dart:io';

const List<String> _roots = ['lib', 'web'];

void main() {
  final rows = <(String, int)>[];
  for (final root in _roots) {
    final dir = Directory(root);
    if (!dir.existsSync()) continue;
    for (final e in dir.listSync(recursive: true)) {
      if (e is! File || !e.path.endsWith('.dart')) continue;
      rows.add((_slash(e.path), _lines(e)));
    }
  }
  rows.sort((a, b) => a.$1.compareTo(b.$1));

  var widest = 4;
  for (final r in rows) {
    if (r.$1.length > widest) widest = r.$1.length;
  }

  final bar = '${'-' * widest}  -----';
  stdout.writeln('${'file'.padRight(widest)}  lines');
  stdout.writeln(bar);
  var total = 0;
  for (final r in rows) {
    total += r.$2;
    stdout.writeln('${r.$1.padRight(widest)}  ${r.$2.toString().padLeft(5)}');
  }
  stdout.writeln(bar);
  stdout.writeln('${'total (${rows.length} files)'.padRight(widest)}  ${total.toString().padLeft(5)}');
}

String _slash(String p) => p.replaceAll(r'\', '/');

int _lines(File f) {
  final text = f.readAsStringSync();
  if (text.isEmpty) return 0;
  final n = '\n'.allMatches(text).length;
  return text.endsWith('\n') ? n : n + 1;
}
