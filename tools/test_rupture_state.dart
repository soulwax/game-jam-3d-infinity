import 'package:quarantine/sim/rupture.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final state = RuptureState();
  final started = state.start(
    guard: const RuptureStartGuard(
      finalDay: true,
      atFrontDoor: true,
      finalArrivalResolved: true,
    ),
    mantleIds: const ['mantle-hall', 'mantle-living'],
  );
  _expect(
    started.single.kind == 'rupture.started',
    'guarded start emits one event',
  );
  final mid = state.advance(1.25);
  _expect(state.step == RuptureStep.affineWarp, 'stage transition is ordered');
  _expect(
    mid.any((event) => event.kind == 'rupture.stageStarted'),
    'transition emits stage event',
  );
  final resumed = RuptureState.fromJson(state.toJson());
  _expect(
    resumed.toJson().toString() == state.toJson().toString(),
    'mid-stage save is canonical',
  );
  final completion = state.advance(20);
  _expect(
    state.completed && state.step == RuptureStep.inactive,
    'large delta completes all stages',
  );
  _expect(
    completion
            .where((event) => event.kind == 'rupture.mantleExtinguished')
            .length ==
        2,
    'lights-out preserves authored mantle order',
  );
  print('rupture state: guarded six-stage progression and resume pass');
}
