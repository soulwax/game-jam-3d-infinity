import 'package:quarantine/game/domain_event.dart';
import 'package:quarantine/game/feature_snapshot.dart';
import 'package:quarantine/game/gaslight_state.dart';
import 'package:quarantine/game/tape_state.dart';
import 'package:quarantine/sim/rupture.dart';
import 'package:quarantine/sim/temperature.dart';
import 'package:quarantine/sim/tape.dart';
import 'package:quarantine/sim/weather.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final first = FeatureSnapshot(
    facts: const {
      'weather': {'rain': true},
      'tape': {'noise': 0.2},
    },
    events: [
      DomainEvent(kind: 'tape.tracking-after-drift', sequence: 2),
      DomainEvent(kind: 'gaslight.mantle-active', sequence: 1),
    ],
  );
  final second = FeatureSnapshot(
    facts: const {
      'tape': {'noise': 0.2},
      'weather': {'rain': true},
    },
    events: [
      DomainEvent(kind: 'gaslight.mantle-active', sequence: 1),
      DomainEvent(kind: 'tape.tracking-after-drift', sequence: 2),
    ],
  );
  _expect(
    first.encode() == second.encode(),
    'feature bytes ignore update order',
  );
  _expect(first.events.first.sequence == 1, 'events sort by stable sequence');
  var immutable = false;
  try {
    (first.facts.values['weather'] as Map<String, dynamic>)['rain'] = false;
  } catch (error) {
    immutable = error is UnsupportedError;
  }
  _expect(immutable, 'feature facts are deeply immutable');
  final weather = WeatherSchedule(seed: 2).forDay(1);
  final composed = FeatureSnapshot.compose(
    weather: weather,
    temperature: TemperatureModel(
      weather: weather,
      hour: 6,
      roomOffsets: const {'hall': 0},
    ).evaluate(),
    gaslight: GaslightState.compose(
      mantleRooms: const {'mantle-hall': 'hall'},
      roomFlow: const {'hall': 1},
      litMantles: {'mantle-hall'},
    ),
    rupture: RuptureState(),
    tape: TapeState(
      weights: TapeWeights.derive(day: 1, exhaustion: 0, isolation: 0),
    ),
  );
  _expect(
    composed.facts.values.containsKey('rupture'),
    'pure features compose into one payload',
  );
  print('feature snapshot: canonical pure composition passes');
}
