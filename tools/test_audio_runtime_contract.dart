import 'dart:io';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  const required = [
    'data-audio-planner',
    'data-audio-spatial-active',
    'data-audio-muffle01',
    'data-audio-transmission-cellar',
    'data-audio-context-suspended',
    'data-audio-muted',
    'data-audio-master-mix',
    'data-audio-captions',
    'data-audio-paused',
    'setAcousticPlanner',
    'data-audio-weather-transmission',
    'data-audio-weather-cutoff-hz',
    'data-audio-weather-layers',
    'data-audio-weather-events',
    'applyWeatherLayers',
    'playDelayed',
    '_pendingSounds.clear()',
  ];
  final missing = [
    for (final marker in required)
      if (!source.contains(marker)) marker,
  ];
  if (missing.isNotEmpty) {
    throw StateError(
      'production audio telemetry contract is missing: $missing',
    );
  }
  stdout.writeln(
    'audio runtime contract: planner, transmission, spatial, muffle, and queue telemetry present',
  );
}
