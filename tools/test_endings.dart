import 'package:quarantine/game/ending.dart';

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
  print(
    'ending resolver selects all three authored outcomes deterministically',
  );
}
