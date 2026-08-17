import 'dart:math' as math;

import '../sim/weather.dart';

/// The physical source represented by a weather audio layer.
enum WeatherAudioLayerKind {
  precipitation,
  surfaceImpact,
  wind,
  thunder,
  interiorWater,
  interiorWarmth,
  interiorTexture,
}

/// Host-owned facts used to resolve the weather soundscape.
///
/// This is intentionally renderer-independent. The same input can drive a
/// WebAudio host, an offline mixer, or a capture test without relying on
/// browser state or wall-clock randomness.
final class WeatherAudioInput {
  final PrecipitationKind precipitationKind;
  final double precipitationIntensity01;
  final double windSpeedMps;
  final double temperatureCelsius;
  final double relativeHumidity01;
  final double windowOpen01;
  final double wallTransmission01;
  final double exteriorDistanceM;
  final double stormActivity01;
  final double lightningDistanceM;
  final int lightningStrikeSequence;
  final bool lightningFlashActive;
  final double roomAbsorption01;
  final double roomVolumeM3;
  final double internalWarmth01;
  final double surfaceImpactEnergy01;
  final double dtSeconds;
  final int frameIndex;
  final int seed;

  const WeatherAudioInput({
    required this.precipitationKind,
    required this.precipitationIntensity01,
    required this.windSpeedMps,
    required this.temperatureCelsius,
    required this.relativeHumidity01,
    required this.windowOpen01,
    required this.wallTransmission01,
    required this.exteriorDistanceM,
    required this.stormActivity01,
    required this.lightningDistanceM,
    required this.lightningStrikeSequence,
    required this.lightningFlashActive,
    required this.roomAbsorption01,
    required this.roomVolumeM3,
    required this.internalWarmth01,
    this.surfaceImpactEnergy01 = 0,
    required this.dtSeconds,
    required this.frameIndex,
    required this.seed,
  });

  void validate() {
    final values = [
      precipitationIntensity01,
      windSpeedMps,
      temperatureCelsius,
      relativeHumidity01,
      windowOpen01,
      wallTransmission01,
      exteriorDistanceM,
      stormActivity01,
      lightningDistanceM,
      roomAbsorption01,
      roomVolumeM3,
      internalWarmth01,
      surfaceImpactEnergy01,
      dtSeconds,
    ];
    if (values.any((value) => !value.isFinite)) {
      throw const FormatException('weather audio input is not finite');
    }
    if (precipitationIntensity01 < 0 ||
        precipitationIntensity01 > 1 ||
        relativeHumidity01 < 0 ||
        relativeHumidity01 > 1 ||
        windowOpen01 < 0 ||
        windowOpen01 > 1 ||
        wallTransmission01 < 0 ||
        wallTransmission01 > 1 ||
        exteriorDistanceM < 0 ||
        stormActivity01 < 0 ||
        stormActivity01 > 1 ||
        lightningDistanceM < 0 ||
        roomAbsorption01 < 0 ||
        roomAbsorption01 > 1 ||
        roomVolumeM3 <= 0 ||
        internalWarmth01 < 0 ||
        internalWarmth01 > 1 ||
        surfaceImpactEnergy01 < 0 ||
        surfaceImpactEnergy01 > 1 ||
        dtSeconds < 0 ||
        frameIndex < 0 ||
        lightningStrikeSequence < 0) {
      throw const FormatException('weather audio input is out of bounds');
    }
  }
}

/// One continuous or one-shot contribution to the weather mix.
final class WeatherAudioLayer {
  final String id;
  final WeatherAudioLayerKind kind;
  final String cue;
  final double gainLinear;
  final double lowPassHz;
  final double highPassHz;
  final double stereoPan;
  final double reverbSend01;
  final bool loop;

  const WeatherAudioLayer({
    required this.id,
    required this.kind,
    required this.cue,
    required this.gainLinear,
    required this.lowPassHz,
    required this.highPassHz,
    required this.stereoPan,
    required this.reverbSend01,
    required this.loop,
  });

  void validate() {
    if (id.isEmpty || cue.isEmpty) {
      throw const FormatException('weather audio layer identity is empty');
    }
    if (![
      gainLinear,
      lowPassHz,
      highPassHz,
      stereoPan,
      reverbSend01,
    ].every((value) => value.isFinite)) {
      throw const FormatException('weather audio layer is not finite');
    }
    if (gainLinear < 0 ||
        lowPassHz <= 0 ||
        highPassHz < 0 ||
        highPassHz >= lowPassHz ||
        stereoPan < -1 ||
        stereoPan > 1 ||
        reverbSend01 < 0 ||
        reverbSend01 > 1) {
      throw const FormatException('weather audio layer is out of bounds');
    }
  }
}

/// A delayed transient, normally a lightning-triggered thunder arrival.
final class WeatherAudioEvent {
  final String id;
  final String cue;
  final double delaySeconds;
  final double gainLinear;
  final double playbackRate;
  final double stereoPan;

  const WeatherAudioEvent({
    required this.id,
    required this.cue,
    required this.delaySeconds,
    required this.gainLinear,
    required this.playbackRate,
    required this.stereoPan,
  });

  void validate() {
    if (id.isEmpty ||
        cue.isEmpty ||
        ![
          delaySeconds,
          gainLinear,
          playbackRate,
          stereoPan,
        ].every((value) => value.isFinite) ||
        delaySeconds < 0 ||
        gainLinear < 0 ||
        playbackRate <= 0 ||
        stereoPan < -1 ||
        stereoPan > 1) {
      throw const FormatException('weather audio event is invalid');
    }
  }
}

/// Fully resolved weather mix for one host frame.
final class WeatherAudioFrame {
  final List<WeatherAudioLayer> layers;
  final List<WeatherAudioEvent> events;
  final double exteriorTransmission01;
  final double exteriorLowPassHz;
  final double roomReverbSend01;
  final double thermalComfort01;

  const WeatherAudioFrame({
    required this.layers,
    required this.events,
    required this.exteriorTransmission01,
    required this.exteriorLowPassHz,
    required this.roomReverbSend01,
    required this.thermalComfort01,
  });

  void validate() {
    final ids = <String>{};
    for (final layer in layers) {
      layer.validate();
      if (!ids.add(layer.id)) {
        throw const FormatException('duplicate weather audio layer');
      }
    }
    for (final event in events) {
      event.validate();
      if (!ids.add(event.id)) {
        throw const FormatException('duplicate weather audio event');
      }
    }
    if (![
          exteriorTransmission01,
          exteriorLowPassHz,
          roomReverbSend01,
          thermalComfort01,
        ].every((value) => value.isFinite) ||
        exteriorTransmission01 < 0 ||
        exteriorTransmission01 > 1 ||
        exteriorLowPassHz <= 0 ||
        roomReverbSend01 < 0 ||
        roomReverbSend01 > 1 ||
        thermalComfort01 < 0 ||
        thermalComfort01 > 1) {
      throw const FormatException('weather audio frame is invalid');
    }
  }
}

/// Deterministic, explainable weather soundscape resolver.
///
/// The aperture model follows the same perceptual ordering as the acoustic
/// portal graph: an open window preserves high frequencies, a closed window
/// transmits mostly low frequencies, and a sealed wall still carries distant
/// thunder. No random number generator is used, so captures and replays are
/// stable for the same frame facts.
final class WeatherAudioEngine {
  int _lastLightningStrike = -1;
  int _lastTransientBucket = -1;

  WeatherAudioFrame resolve(WeatherAudioInput input) {
    input.validate();
    final open = input.windowOpen01;
    final wall = input.wallTransmission01;
    final exterior = (0.05 + 0.95 * open) * (0.18 + 0.82 * wall);
    final distance = 1.0 / math.pow(1.0 + input.exteriorDistanceM / 18.0, 0.72);
    final transmission = (exterior * distance).clamp(0.0, 1.0).toDouble();
    final cutoff = math.exp(
      math.log(320.0) * (1.0 - open) + math.log(20000.0) * open,
    );
    final absorption = input.roomAbsorption01;
    final reverb = (0.18 + 0.62 * (1.0 - absorption))
        .clamp(0.0, 1.0)
        .toDouble();
    final intensity = input.precipitationIntensity01;
    final windNorm = (input.windSpeedMps / 18.0).clamp(0.0, 1.0).toDouble();
    final layers = <WeatherAudioLayer>[];

    if (intensity > 0.001 &&
        input.precipitationKind != PrecipitationKind.none) {
      final cue = switch (input.precipitationKind) {
        PrecipitationKind.rain => 'weather-rain',
        PrecipitationKind.sleet => 'weather-sleet',
        PrecipitationKind.snow => 'weather-snow',
        PrecipitationKind.hail => 'weather-hail',
        PrecipitationKind.none => 'weather-rain',
      };
      final precipitationWeight = switch (input.precipitationKind) {
        PrecipitationKind.rain => 0.82,
        PrecipitationKind.sleet => 0.72,
        PrecipitationKind.snow => 0.38,
        PrecipitationKind.hail => 1.0,
        PrecipitationKind.none => 0.0,
      };
      layers.add(
        WeatherAudioLayer(
          id: 'exterior-precipitation',
          kind: WeatherAudioLayerKind.precipitation,
          cue: cue,
          gainLinear: (intensity * precipitationWeight * transmission)
              .clamp(0.0, 1.0)
              .toDouble(),
          lowPassHz: cutoff,
          highPassHz: input.precipitationKind == PrecipitationKind.snow
              ? 80
              : 120,
          stereoPan: 0,
          reverbSend01: reverb * (0.35 + 0.45 * open),
          loop: true,
        ),
      );
    }

    if (windNorm > 0.001) {
      layers.add(
        WeatherAudioLayer(
          id: 'exterior-wind',
          kind: WeatherAudioLayerKind.wind,
          cue: 'weather-wind',
          gainLinear: (windNorm * (0.26 + 0.74 * transmission))
              .clamp(0.0, 1.0)
              .toDouble(),
          lowPassHz: 700 + 9200 * open + 1800 * windNorm,
          highPassHz: 35,
          stereoPan: 0,
          reverbSend01: reverb * 0.8,
          loop: true,
        ),
      );
    }

    final storm =
        (input.stormActivity01 * (0.22 + 0.78 * input.precipitationIntensity01))
            .clamp(0.0, 1.0)
            .toDouble();
    if (storm > 0.001) {
      layers.add(
        WeatherAudioLayer(
          id: 'through-wall-thunder',
          kind: WeatherAudioLayerKind.thunder,
          cue: 'weather-thunder-bed',
          gainLinear: (storm * (0.16 + 0.34 * distance) * (1.0 - 0.55 * open))
              .clamp(0.0, 1.0)
              .toDouble(),
          lowPassHz: 420 + 1800 * transmission,
          highPassHz: 24,
          stereoPan: 0,
          reverbSend01: reverb,
          loop: true,
        ),
      );
    }

    final isHail =
        input.precipitationKind == PrecipitationKind.hail ||
        input.precipitationKind == PrecipitationKind.sleet;
    final impactEnergy = (input.surfaceImpactEnergy01 * intensity)
        .clamp(0.0, 1.0)
        .toDouble();
    if (isHail && impactEnergy > 0.001) {
      // Roof and sill impacts are structure-borne: a closed aperture still
      // carries them, while an open window adds competing exterior detail.
      layers.add(
        WeatherAudioLayer(
          id: 'structure-hail-impact',
          kind: WeatherAudioLayerKind.surfaceImpact,
          cue: 'weather-hail-roof',
          gainLinear:
              (impactEnergy *
                      (0.16 + 0.38 * (1.0 - open)) *
                      (0.35 + 0.65 * wall))
                  .clamp(0.0, 1.0)
                  .toDouble(),
          lowPassHz: 760 + 1_500 * transmission,
          highPassHz: 48,
          stereoPan: 0,
          reverbSend01: reverb * 0.92,
          loop: true,
        ),
      );
    }

    final windowResonance =
        (windNorm * storm * (1.0 - 0.72 * open) * (0.3 + 0.7 * wall))
            .clamp(0.0, 1.0)
            .toDouble();
    if (windowResonance > 0.01) {
      layers.add(
        WeatherAudioLayer(
          id: 'window-frame-resonance',
          kind: WeatherAudioLayerKind.interiorTexture,
          cue: 'weather-window-rattle',
          gainLinear: windowResonance * 0.22,
          lowPassHz: 1_800 + 1_600 * windowResonance,
          highPassHz: 45,
          stereoPan: 0,
          reverbSend01: reverb * 0.65,
          loop: true,
        ),
      );
    }

    if (open > 0.03 && intensity > 0.08) {
      final water = (intensity * open * (0.35 + 0.65 * windNorm))
          .clamp(0.0, 1.0)
          .toDouble();
      layers.add(
        WeatherAudioLayer(
          id: 'interior-window-drip',
          kind: WeatherAudioLayerKind.interiorWater,
          cue: 'weather-interior-drip',
          gainLinear: water * 0.34,
          lowPassHz: 7200,
          highPassHz: 180,
          stereoPan: 0,
          reverbSend01: reverb,
          loop: true,
        ),
      );
    }

    final comfort =
        ((input.internalWarmth01 * 0.75) +
                ((input.temperatureCelsius + 5.0) / 25.0).clamp(0.0, 1.0) *
                    0.25)
            .clamp(0.0, 1.0)
            .toDouble();
    if (input.internalWarmth01 > 0.02) {
      layers.add(
        WeatherAudioLayer(
          id: 'interior-warmth',
          kind: WeatherAudioLayerKind.interiorWarmth,
          cue: 'weather-interior-warmth',
          gainLinear: 0.08 * input.internalWarmth01,
          lowPassHz: 900,
          highPassHz: 35,
          stereoPan: 0,
          reverbSend01: 0.12,
          loop: true,
        ),
      );
      layers.add(
        WeatherAudioLayer(
          id: 'interior-coffee-roomtone',
          kind: WeatherAudioLayerKind.interiorTexture,
          cue: 'weather-interior-coffee',
          gainLinear:
              0.018 * input.internalWarmth01 * (0.55 + 0.45 * (1.0 - open)),
          lowPassHz: 2_600,
          highPassHz: 110,
          stereoPan: 0,
          reverbSend01: 0.24 * reverb,
          loop: true,
        ),
      );
    }

    final events = <WeatherAudioEvent>[];
    // Transient details are scheduled from simulation time, not wall-clock
    // randomness. At 60 fps a bucket is roughly half a second; cadence is
    // deliberately sparse so a hailstorm has texture without becoming a
    // machine-gun of one-shots.
    final transientBucket = input.frameIndex ~/ 30;
    if (transientBucket != _lastTransientBucket) {
      _lastTransientBucket = transientBucket;
      final transientPan = _stableUnit(input.seed, transientBucket, 17) * 2 - 1;
      final transientRate =
          0.92 + _stableUnit(input.seed, transientBucket, 23) * 0.16;
      if (transientBucket > 0 &&
          isHail &&
          impactEnergy > 0.12 &&
          transientBucket.isEven) {
        events.add(
          WeatherAudioEvent(
            id: 'hail-impact-$transientBucket',
            cue: 'weather-hail-tick',
            delaySeconds: 0,
            gainLinear: (0.08 + impactEnergy * 0.24).clamp(0.0, 1.0).toDouble(),
            playbackRate: transientRate,
            stereoPan: transientPan,
          ),
        );
      }
      if (transientBucket > 0 &&
          windowResonance > 0.2 &&
          transientBucket % 3 == 0) {
        events.add(
          WeatherAudioEvent(
            id: 'window-rattle-$transientBucket',
            cue: 'weather-window-tick',
            delaySeconds: 0,
            gainLinear: (0.035 + windowResonance * 0.12)
                .clamp(0.0, 1.0)
                .toDouble(),
            playbackRate:
                0.94 + _stableUnit(input.seed, transientBucket, 31) * 0.12,
            stereoPan: transientPan * 0.55,
          ),
        );
      }
      if (transientBucket > 0 &&
          input.internalWarmth01 > 0.5 &&
          transientBucket % 15 == 0) {
        events.add(
          WeatherAudioEvent(
            id: 'coffee-clink-$transientBucket',
            cue: 'weather-coffee-clink',
            delaySeconds: 0,
            gainLinear: 0.025 + input.internalWarmth01 * 0.035,
            playbackRate:
                0.98 + _stableUnit(input.seed, transientBucket, 43) * 0.08,
            stereoPan: transientPan * 0.25,
          ),
        );
      }
    }
    if (input.lightningFlashActive &&
        input.lightningStrikeSequence != _lastLightningStrike) {
      _lastLightningStrike = input.lightningStrikeSequence;
      final distanceM = math.max(1.0, input.lightningDistanceM);
      final delay = distanceM / 343.0;
      final gain =
          (0.34 + 0.66 / math.pow(1.0 + distanceM / 1200.0, 0.8)) *
          (0.45 + 0.55 * storm);
      final pan =
          ((input.seed ^ input.lightningStrikeSequence) % 200 - 100) / 100.0;
      events.add(
        WeatherAudioEvent(
          id: 'lightning-thunder-${input.lightningStrikeSequence}',
          cue: distanceM < 900
              ? 'weather-thunder-crack'
              : 'weather-thunder-roll',
          delaySeconds: delay,
          gainLinear: gain.clamp(0.0, 1.0).toDouble(),
          playbackRate: (0.94 + (input.lightningStrikeSequence % 11) * 0.012)
              .clamp(0.88, 1.08)
              .toDouble(),
          stereoPan: pan.clamp(-1.0, 1.0).toDouble(),
        ),
      );
    }

    final frame = WeatherAudioFrame(
      layers: List.unmodifiable(layers),
      events: List.unmodifiable(events),
      exteriorTransmission01: transmission,
      exteriorLowPassHz: cutoff,
      roomReverbSend01: reverb,
      thermalComfort01: comfort,
    );
    frame.validate();
    return frame;
  }

  void reset() {
    _lastLightningStrike = -1;
    _lastTransientBucket = -1;
  }

  double _stableUnit(int seed, int bucket, int salt) {
    var value = seed ^ (bucket * 0x45d9f3b) ^ (salt * 0x27d4eb2d);
    value = (value ^ (value >> 16)) * 0x45d9f3b;
    value = (value ^ (value >> 16)) & 0x7fffffff;
    return value / 0x7fffffff;
  }
}
