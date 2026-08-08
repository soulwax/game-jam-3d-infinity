enum RuptureStep {
  inactive,
  gradeLUT,
  affineWarp,
  vertexSnap,
  tapeGiveup,
  portalFail,
  lightsOut,
}

/// The six ordered, timed phases of the rupture. Values are simulation data,
/// not renderer configuration.
const Map<RuptureStep, double> ruptureStageDurations = {
  RuptureStep.gradeLUT: 1.0,
  RuptureStep.affineWarp: 1.5,
  RuptureStep.vertexSnap: 1.5,
  RuptureStep.tapeGiveup: 2.0,
  RuptureStep.portalFail: 2.0,
  RuptureStep.lightsOut: 4.0,
};

class RuptureStartGuard {
  const RuptureStartGuard({
    required this.finalDay,
    required this.atFrontDoor,
    required this.finalArrivalResolved,
  });

  final bool finalDay;
  final bool atFrontDoor;
  final bool finalArrivalResolved;

  bool get allowed => finalDay && atFrontDoor && finalArrivalResolved;
}

class RuptureEvent {
  const RuptureEvent(this.kind, {this.stage, this.mantleId});

  final String kind;
  final RuptureStep? stage;
  final String? mantleId;
}

/// Pure simulation state. It contains stable IDs and scalars only; geometry
/// and presentation systems consume this state but are never mutated here.
class RuptureState {
  RuptureState({
    this.step = RuptureStep.inactive,
    this.stepElapsed = 0.0,
    Iterable<String> mantleIds = const [],
    Iterable<String> extinguishedMantles = const [],
    this.completed = false,
  }) : _mantleIds = _ids(mantleIds),
       _extinguishedMantles = _ids(extinguishedMantles) {
    _validate();
  }

  RuptureStep step;
  double stepElapsed;
  final List<String> _mantleIds;
  final List<String> _extinguishedMantles;
  bool completed;

  List<String> get mantleIds => List.unmodifiable(_mantleIds);
  List<String> get extinguishedMantles =>
      List.unmodifiable(_extinguishedMantles);

  bool get isActive => step != RuptureStep.inactive;
  double get stageDuration => ruptureStageDurations[step] ?? 0.0;

  /// Compatibility adapter for the pre-GAM-05A browser call site. The caller
  /// performs the narrative gate; this leaf neither reads nor mutates it.
  List<RuptureEvent> startRupture(Object ignoredSource) => start(
    guard: const RuptureStartGuard(
      finalDay: true,
      atFrontDoor: true,
      finalArrivalResolved: true,
    ),
    mantleIds: mantleIds,
  );

  List<RuptureEvent> start({
    required RuptureStartGuard guard,
    required Iterable<String> mantleIds,
  }) {
    if (isActive || completed || !guard.allowed) return const [];
    final ids = _ids(mantleIds);
    _mantleIds
      ..clear()
      ..addAll(ids);
    _extinguishedMantles.clear();
    step = RuptureStep.gradeLUT;
    stepElapsed = 0.0;
    completed = false;
    return [const RuptureEvent('rupture.started', stage: RuptureStep.gradeLUT)];
  }

  /// Starts a fresh rupture. The guard is explicit so callers cannot trigger
  /// the sequence from an earlier narrative or calendar state.
  RuptureState begin({required RuptureStartGuard guard}) {
    if (isActive || completed || !guard.allowed) return this;
    step = RuptureStep.gradeLUT;
    stepElapsed = 0.0;
    _extinguishedMantles.clear();
    completed = false;
    return this;
  }

  List<RuptureEvent> advance(double dt, [Object? ignoredSource]) {
    if (!dt.isFinite || dt < 0) {
      throw ArgumentError(
        'rupture advance must be a finite non-negative duration',
      );
    }
    if (!isActive || dt == 0) return const [];
    final events = <RuptureEvent>[];
    var remaining = dt;
    while (remaining > 0 && isActive) {
      final before = step;
      final available = stageDuration - stepElapsed;
      final consumed = remaining < available ? remaining : available;
      stepElapsed += consumed;
      remaining -= consumed;
      if (step == RuptureStep.lightsOut) _updateExtinguished(events);
      if (stepElapsed < stageDuration) continue;
      events.add(RuptureEvent('rupture.stageCompleted', stage: before));
      if (before == RuptureStep.lightsOut) {
        step = RuptureStep.inactive;
        stepElapsed = 0.0;
        completed = true;
        events.add(const RuptureEvent('rupture.completed'));
      } else {
        step = RuptureStep.values[before.index + 1];
        stepElapsed = 0.0;
        events.add(RuptureEvent('rupture.stageStarted', stage: step));
      }
    }
    return List.unmodifiable(events);
  }

  bool isMantleExtinguished(String roomId, int mantleIndex) =>
      _extinguishedMantles.contains('$roomId:$mantleIndex');

  Map<String, dynamic> toJson() => {
    'step': step.name,
    'stepElapsed': stepElapsed,
    'mantleIds': mantleIds,
    'extinguishedMantles': extinguishedMantles,
    'completed': completed,
  };

  factory RuptureState.fromJson(Object? raw) {
    if (raw is! Map) {
      throw const FormatException('rupture state is malformed');
    }
    final input = <String, Object?>{};
    for (final entry in raw.entries) {
      if (entry.key is! String) {
        throw const FormatException('rupture state keys are malformed');
      }
      input[entry.key as String] = entry.value;
    }
    const keys = {
      'step',
      'stepElapsed',
      'mantleIds',
      'extinguishedMantles',
      'completed',
    };
    if (input.length != keys.length || !input.keys.toSet().containsAll(keys)) {
      throw const FormatException('rupture state fields are malformed');
    }
    final step = input['step'];
    final elapsed = input['stepElapsed'];
    if (step is! String ||
        elapsed is! num ||
        !elapsed.isFinite ||
        input['mantleIds'] is! List ||
        input['extinguishedMantles'] is! List ||
        input['completed'] is! bool) {
      throw const FormatException('rupture state is malformed');
    }
    final parsed = RuptureStep.values.where((value) => value.name == step);
    if (parsed.length != 1) {
      throw const FormatException('rupture stage is malformed');
    }
    final rawMantleIds = input['mantleIds'] as List<Object?>;
    final rawExtinguished = input['extinguishedMantles'] as List<Object?>;
    if (rawMantleIds.any((id) => id is! String) ||
        rawExtinguished.any((id) => id is! String)) {
      throw const FormatException('rupture mantle IDs are malformed');
    }
    return RuptureState(
      step: parsed.single,
      stepElapsed: elapsed.toDouble(),
      mantleIds: rawMantleIds.whereType<String>(),
      extinguishedMantles: rawExtinguished.whereType<String>(),
      completed: input['completed'] as bool,
    );
  }

  void _updateExtinguished(List<RuptureEvent> events) {
    final count = ((stepElapsed / stageDuration) * mantleIds.length)
        .floor()
        .clamp(0, mantleIds.length);
    while (extinguishedMantles.length < count) {
      final id = mantleIds[extinguishedMantles.length];
      _extinguishedMantles.add(id);
      events.add(RuptureEvent('rupture.mantleExtinguished', mantleId: id));
    }
  }

  void _validate() {
    if (!stepElapsed.isFinite ||
        stepElapsed < 0 ||
        (isActive && stepElapsed > stageDuration)) {
      throw const FormatException('rupture elapsed time is malformed');
    }
    if (!_extinguishedMantles.every(_mantleIds.contains)) {
      throw const FormatException('rupture extinguished mantle is unknown');
    }
    if (step == RuptureStep.inactive && stepElapsed != 0.0 && !completed) {
      throw const FormatException('inactive rupture has elapsed time');
    }
  }
}

List<String> _ids(Iterable<String> ids) {
  final result = <String>[];
  final seen = <String>{};
  for (final id in ids) {
    if (id.isEmpty || !seen.add(id)) {
      throw const FormatException('rupture mantle IDs are malformed');
    }
    result.add(id);
  }
  return result;
}
