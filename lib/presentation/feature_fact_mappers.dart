import '../game/feature_snapshot.dart';

/// Renderer-facing joins for INT-04. These mappers consume only the
/// immutable serialized feature facts; they never import simulation systems or
/// retain mutable feature state.
final class FeatureFactMappers {
  const FeatureFactMappers();

  Map<String, dynamic> environment(FeatureSnapshot snapshot) => {
    'weather': _section(snapshot, 'weather'),
    'temperature': _section(snapshot, 'temperature'),
  };

  Map<String, dynamic> gaslight(FeatureSnapshot snapshot) =>
      _section(snapshot, 'gaslight');

  Map<String, dynamic> weather(FeatureSnapshot snapshot) =>
      _section(snapshot, 'weather');

  Map<String, dynamic> rupture(FeatureSnapshot snapshot) =>
      _section(snapshot, 'rupture');

  Map<String, dynamic> tape(FeatureSnapshot snapshot) =>
      _section(snapshot, 'tape');

  Map<String, dynamic> all(FeatureSnapshot snapshot) => {
    'environment': environment(snapshot),
    'gaslight': gaslight(snapshot),
    'weather': weather(snapshot),
    'rupture': rupture(snapshot),
    'tape': tape(snapshot),
  };

  Map<String, dynamic> _section(FeatureSnapshot snapshot, String name) {
    final value = snapshot.facts.values[name];
    if (value is! Map<String, dynamic>) {
      throw FormatException('feature snapshot is missing $name facts');
    }
    return Map.unmodifiable(value);
  }
}
