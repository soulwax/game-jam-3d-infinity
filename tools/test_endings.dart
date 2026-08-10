import 'package:quarantine/game/ending.dart';
import 'package:quarantine/story/narrative_state.dart';

Never _fail(String message) => throw StateError('ending test failed: $message');
void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  _expect(
    EndingResolver.resolve(
          const EndingInputs(
            day: 20,
            accuracy: 1.0,
            lockedEntries: 3,
            complianceFloorTripped: false,
            ruptureCompleted: false,
          ),
        ) ==
        null,
    'ending cannot resolve before Day 21',
  );
  _expect(
    EndingResolver.resolve(
          const EndingInputs(
            day: 21,
            accuracy: 0.0,
            lockedEntries: 0,
            complianceFloorTripped: false,
            ruptureCompleted: false,
          ),
        )!.kind ==
        EndingKind.compliance,
    'empty record resolves to compliance',
  );
  _expect(
    EndingResolver.resolve(
          const EndingInputs(
            day: 21,
            accuracy: 0.75,
            lockedEntries: 3,
            complianceFloorTripped: false,
            ruptureCompleted: false,
          ),
        )!.kind ==
        EndingKind.synchronisation,
    'accurate, sufficiently locked record resolves to synchronisation',
  );
  _expect(
    EndingResolver.resolve(
          const EndingInputs(
            day: 21,
            accuracy: 0.75,
            lockedEntries: 1,
            complianceFloorTripped: false,
            ruptureCompleted: false,
          ),
        )!.kind ==
        EndingKind.compliance,
    'high accuracy without enough locks falls back to compliance',
  );
  _expect(
    EndingResolver.resolve(
          const EndingInputs(
            day: 21,
            accuracy: 1.0,
            lockedEntries: 5,
            complianceFloorTripped: true,
            ruptureCompleted: false,
          ),
        )!.kind ==
        EndingKind.compliance,
    'a tripped compliance floor overrides an otherwise-earned synchronisation',
  );
  _expect(
    EndingResolver.resolve(
          const EndingInputs(
            day: 21,
            accuracy: 0.75,
            lockedEntries: 3,
            complianceFloorTripped: false,
            ruptureCompleted: true,
          ),
        )!.kind ==
        EndingKind.rupture,
    'completed rupture takes precedence',
  );
  final state = const EndingState(EndingKind.synchronisation);
  _expect(
    EndingState.tryFromJson(state.toJson())?.kind == state.kind,
    'ending state persists',
  );
  final synchronisedTexture = NarrativeEndingTexture.forRun(
    NarrativeState(
      flags: {
        'denise.revision': 'accepted',
        'sylvia.pencil': 'given',
      },
    ),
    EndingKind.synchronisation,
  );
  _expect(
    synchronisedTexture.single.contains('correction'),
    'synchronisation texture repeats a recorded relational fact',
  );
  final ruptureTexture = NarrativeEndingTexture.forRun(
    NarrativeState(flags: {'stranger.case': 'accepted'}),
    EndingKind.rupture,
  );
  _expect(
    ruptureTexture.length == 1 && ruptureTexture.single.contains('sewing case'),
    'rupture texture repeats one accepted object only',
  );
  _expect(
    NarrativeEndingTexture.forRun(
      NarrativeState(),
      EndingKind.compliance,
    ).isEmpty,
    'unknown narrative state adds no invented ending texture',
  );
  final savedNarrative = NarrativeState(
    flags: {'attercliffe.plate': 'kept'},
  );
  final restoredNarrative = NarrativeState.tryFromJson(
    savedNarrative.toJson(),
  );
  _expect(
    restoredNarrative != null &&
        NarrativeEndingTexture.forRun(
              restoredNarrative,
              EndingKind.compliance,
            ).single.contains('second place'),
    'ending texture survives narrative save and restore',
  );
  print(
    'ending resolver selects all three authored outcomes deterministically',
  );
}
