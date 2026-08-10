import '../config.dart';
import '../story/narrative_state.dart';

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

/// Selects a small, truthful human afterimage for an ending.
///
/// This is deliberately not an affinity score or a second ending resolver. It
/// only repeats facts the run actually recorded; absent/legacy narrative state
/// contributes no invented prose.
class NarrativeEndingTexture {
  static List<String> forRun(NarrativeState narrative, EndingKind kind) {
    final lines = <String>[];
    switch (kind) {
      case EndingKind.compliance:
        _addFirst(lines, narrative, const [
          _Fact('stranger.case', 'accepted', 'The sewing case stays closed beside the journal.'),
          _Fact('attercliffe.plate', 'kept', 'A second place remains set, though nobody asks why.'),
          _Fact('hallow.dish', 'returned', 'The dish is settled; the receipt has gone soft at the fold.'),
          _Fact('ronnie.response', 'named', 'A route card has Ronnie written on its back.'),
          _Fact('sylvia.pencil', 'given', 'Somewhere beyond the wall, a pencil is kept for something good.'),
        ]);
      case EndingKind.rupture:
        _addFirst(lines, narrative, const [
          _Fact('stranger.case', 'accepted', 'The sewing case remains shut in the wrong room.'),
          _Fact('ronnie.response', 'named', 'The name Ronnie holds when the room does not.'),
          _Fact('denise.revision', 'accepted', 'One correction remains yours to protect.'),
          _Fact('attercliffe.plate', 'kept', 'A second place survives the room changing around it.'),
        ]);
      case EndingKind.synchronisation:
        _addFirst(lines, narrative, const [
          _Fact('denise.revision', 'accepted', 'One correction was offered without being used as a weapon.'),
          _Fact('ayling.return', 'trusted', 'A form crossed the threshold because someone chose to carry it.'),
          _Fact('attercliffe.plate', 'kept', 'One place was set because a person had not stopped mattering.'),
          _Fact('ronnie.response', 'named', 'The route card gives one name its own line.'),
        ]);
    }
    return lines;
  }

  static void _addFirst(
    List<String> lines,
    NarrativeState narrative,
    List<_Fact> candidates,
  ) {
    for (final fact in candidates) {
      if (narrative.hasFlag(fact.key, fact.value)) {
        lines.add(fact.line);
        return;
      }
    }
  }
}

class _Fact {
  const _Fact(this.key, this.value, this.line);

  final String key;
  final String value;
  final String line;
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
