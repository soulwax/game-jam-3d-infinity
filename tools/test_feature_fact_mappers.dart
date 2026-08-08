import 'package:quarantine/game/feature_snapshot.dart';
import 'package:quarantine/presentation/feature_fact_mappers.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final snapshot = FeatureSnapshot(
    facts: const {
      'weather': {'rain': 0.4},
      'temperature': {
        'roomsCelsius': {'hall': 12.0},
      },
      'gaslight': {'lit': true},
      'rupture': {'stage': 'quiet'},
      'tape': {'tracking': 0.2},
    },
    events: const [],
  );
  const mappers = FeatureFactMappers();
  _expect(
    mappers.environment(snapshot)['weather'] is Map,
    'environment maps weather',
  );
  _expect(
    mappers.gaslight(snapshot)['lit'] == true,
    'gaslight maps pure facts',
  );
  _expect(mappers.weather(snapshot)['rain'] == 0.4, 'weather maps pure facts');
  _expect(
    mappers.rupture(snapshot)['stage'] == 'quiet',
    'rupture maps pure facts',
  );
  _expect(mappers.tape(snapshot)['tracking'] == 0.2, 'tape maps pure facts');
  _expect(mappers.all(snapshot).length == 5, 'all INT-04 joins are present');
  var rejected = false;
  try {
    mappers.tape(
      FeatureSnapshot(facts: const {'weather': {}}, events: const []),
    );
  } catch (error) {
    rejected = error is FormatException;
  }
  _expect(rejected, 'missing feature facts fail closed');
  print('INT-04 feature fact mappers pass');
}
