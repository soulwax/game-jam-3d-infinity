import 'dart:io';

void main() {
  final smoke = File('tools/browser/renderer_smoke.cjs').readAsStringSync();
  final host = File('web/main.dart').readAsStringSync();
  const smokeFields = [
    'rainParticleRequested',
    'rainParticleBudget',
    'rainParticleFrustumVisible',
    'lightningSourceDistanceM',
    'storyJournalEntryCount',
  ];
  final missingSmoke = [
    for (final field in smokeFields)
      if (!smoke.contains(field)) field,
  ];
  if (missingSmoke.isNotEmpty) {
    throw StateError('capture metadata fields are missing: $missingSmoke');
  }
  for (final marker in [
    'data-renderer-shader-lab-document',
    'data-renderer-rain-particles-frustum-culled',
    'data-renderer-lightning-source-direction',
  ]) {
    if (!host.contains(marker))
      throw StateError('host capture marker missing: $marker');
  }
  print(
    'capture metadata contract: shader, rain, journal, and frustum evidence are wired',
  );
}
