import 'package:quarantine/engine/weather_audio.dart';
import 'package:quarantine/sim/weather.dart';

Never _fail(String message) =>
    throw StateError('weather audio test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

WeatherAudioInput _input({
  double open = 0,
  PrecipitationKind kind = PrecipitationKind.hail,
  int strike = 0,
  bool flash = false,
  double impactEnergy = 0.7,
  int frame = 1,
}) => WeatherAudioInput(
  precipitationKind: kind,
  precipitationIntensity01: 0.9,
  windSpeedMps: 12,
  temperatureCelsius: 3,
  relativeHumidity01: 0.9,
  windowOpen01: open,
  wallTransmission01: 1,
  exteriorDistanceM: 6,
  stormActivity01: 0.9,
  lightningDistanceM: 680,
  lightningStrikeSequence: strike,
  lightningFlashActive: flash,
  roomAbsorption01: 0.3,
  roomVolumeM3: 180,
  internalWarmth01: 0.8,
  surfaceImpactEnergy01: impactEnergy,
  dtSeconds: 1 / 60,
  frameIndex: frame,
  seed: 42,
);

void main() {
  final engine = WeatherAudioEngine();
  final closed = engine.resolve(_input());
  final open = engine.resolve(_input(open: 1));

  final closedPrecipitation = closed.layers.firstWhere(
    (layer) => layer.id == 'exterior-precipitation',
  );
  final openPrecipitation = open.layers.firstWhere(
    (layer) => layer.id == 'exterior-precipitation',
  );
  _expect(
    open.exteriorLowPassHz > closed.exteriorLowPassHz,
    'open window must preserve more high-frequency detail',
  );
  _expect(
    openPrecipitation.gainLinear > closedPrecipitation.gainLinear,
    'open window must admit more precipitation energy',
  );
  _expect(
    closed.layers.any((layer) => layer.id == 'through-wall-thunder'),
    'sealed room must retain low-frequency thunder',
  );
  _expect(
    open.layers.any((layer) => layer.id == 'interior-window-drip'),
    'open storm window must admit interior water detail',
  );
  _expect(
    !closed.layers.any((layer) => layer.id == 'interior-window-drip'),
    'closed window must not invent interior dripping',
  );
  _expect(
    closed.layers.any((layer) => layer.id == 'structure-hail-impact'),
    'hail must expose a structure-borne impact layer',
  );
  _expect(
    closed.layers.any((layer) => layer.id == 'window-frame-resonance'),
    'wind must excite a closed window frame',
  );
  _expect(
    closed.layers.any((layer) => layer.id == 'interior-coffee-roomtone'),
    'warm shelter must expose the restrained interior coffee texture',
  );
  final noImpact = engine.resolve(_input(impactEnergy: 0));
  _expect(
    !noImpact.layers.any((layer) => layer.id == 'structure-hail-impact'),
    'zero impact energy must silence structural hail impacts',
  );

  final transientEngine = WeatherAudioEngine();
  final hailTransient = transientEngine.resolve(_input(frame: 60));
  _expect(
    hailTransient.events.any((event) => event.cue == 'weather-hail-tick'),
    'hail impact bucket must schedule a short structural tick',
  );
  final repeatedTransient = transientEngine.resolve(_input(frame: 60));
  _expect(
    repeatedTransient.events.isEmpty,
    'the same transient bucket must not retrigger every render frame',
  );
  final coffeeTransient = transientEngine.resolve(_input(frame: 450));
  _expect(
    coffeeTransient.events.any((event) => event.cue == 'weather-coffee-clink'),
    'warm room bucket must schedule an occasional cup texture',
  );

  final firstStrike = engine.resolve(_input(strike: 7, flash: true));
  final repeatedFrame = engine.resolve(_input(strike: 7, flash: true));
  _expect(
    firstStrike.events.length == 1,
    'new lightning strike must schedule thunder',
  );
  _expect(
    firstStrike.events.single.delaySeconds > 1,
    'thunder delay must use speed of sound and source distance',
  );
  _expect(
    repeatedFrame.events.isEmpty,
    'the same flash must not schedule thunder every render frame',
  );
  final nextStrike = engine.resolve(_input(strike: 8, flash: true));
  _expect(nextStrike.events.length == 1, 'a new strike must schedule once');

  final snow = engine.resolve(_input(kind: PrecipitationKind.snow));
  final snowLayer = snow.layers.firstWhere(
    (layer) => layer.id == 'exterior-precipitation',
  );
  _expect(
    snowLayer.highPassHz < closedPrecipitation.highPassHz,
    'snow should be softer than hail in the resolved mix',
  );
  closed.validate();
  print(
    'weather audio resolver: transmission, warmth, precipitation, and thunder timing pass',
  );
}
