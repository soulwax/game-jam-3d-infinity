import '../config.dart';

enum EndingKind { compliance, rupture, synchronisation }

class EndingInputs {
  const EndingInputs({
    required this.day,
    required this.accuracy,
    required this.lockedEntries,
    required this.complianceFloorTripped,
    required this.ruptureCompleted,
  });

  final int day;
  final double accuracy;
  final int lockedEntries;
  final bool complianceFloorTripped;
  final bool ruptureCompleted;
}

class EndingState {
  const EndingState(this.kind);
  final EndingKind kind;

  Map<String, String> toJson() => {'kind': kind.name};

  static EndingState? tryFromJson(Object? raw) {
    if (raw is! Map || raw['kind'] is! String) return null;
    final kind = EndingKind.values
        .where((candidate) => candidate.name == raw['kind'])
        .firstOrNull;
    return kind == null ? null : EndingState(kind);
  }
}

/// Pure final-day resolution. It never invents prose: [EndingKind] selects the
/// matching authored `@ending` block.
class EndingResolver {
  static EndingState? resolve(EndingInputs inputs) {
    if (inputs.day != 21) return null;
    if (inputs.ruptureCompleted) return const EndingState(EndingKind.rupture);
    if (!inputs.complianceFloorTripped &&
        inputs.accuracy >= synchronisationAccuracyThreshold &&
        inputs.lockedEntries >= synchronisationLockedEntriesThreshold) {
      return const EndingState(EndingKind.synchronisation);
    }
    return const EndingState(EndingKind.compliance);
  }
}
