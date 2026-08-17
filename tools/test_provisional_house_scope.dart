import 'dart:io';
import 'dart:convert';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  const required = [
    "'data-house-role'",
    'manifest.presentationScope',
    'manifest.storyAuthority',
  ];
  final missing = [for (final marker in required) if (!source.contains(marker)) marker];
  if (missing.isNotEmpty) {
    throw StateError('provisional house scope contract is missing: $missing');
  }
  for (final path in ['assets/house/house.json', 'web/res/house/house.json']) {
    final manifest = jsonDecode(File(path).readAsStringSync()) as Map<String, dynamic>;
    if (manifest['presentationScope'] != 'provisional-visible-place') {
      throw StateError('$path does not declare provisional-visible-place');
    }
    if (manifest['storyAuthority'] != 'external-story-data') {
      throw StateError('$path incorrectly claims story authority');
    }
  }
  stdout.writeln(
    'provisional house scope: runtime identifies the FBX house as a visible place, not final story content',
  );
}
