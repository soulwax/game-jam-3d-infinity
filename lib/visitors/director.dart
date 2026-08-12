import 'package:quarantine/sim/interaction.dart';
import 'package:quarantine/story/narrative_state.dart';
import 'package:quarantine/story/schema.dart';
import 'package:quarantine/visitors/state.dart';

class VisitorDirector {
  VisitorDirector._(
    this._visits,
    this._contacted,
    this._resolved,
    this._reactions,
    this._variants,
  );

  final Map<VisitArrival, Map<VisitTier, List<VisitorLine>>> _visits;
  final Set<String> _contacted;
  final Set<VisitArrival> _resolved;
  final Map<String, VisitorReaction> _reactions;
  final Map<String, List<VisitorVariant>> _variants;
  final List<VisitorFact> _facts = [];
  VisitState? _active;

  /// Q19's isolation/scrutiny model does not exist yet. This is the seam it
  /// will drive; Q13 only reads it, it never computes it.
  bool exposureElevated = false;

  /// The run's stand-in draw (§56.2). Visitor keys in this set arrive `off`
  /// instead of `full` wherever an `off` tier is authored for that day; every
  /// other tier rule is unaffected. Q26 computes and assigns this set once at
  /// boot; an empty set (the default) reproduces pre-§56 behaviour exactly.
  Set<String> standIns = const {};
  NarrativeState narrative = NarrativeState();

  VisitState? get active => _active;
  VisitorReaction? get currentReaction {
    final state = _active;
    if (state == null || state.isComplete) return null;
    return _reactions['${state.arrival.visitor}:${state.arrival.day}:${state.tier.name}:${state.lines[state.lineIndex].ordinal}'];
  }

  bool isResolved(VisitArrival arrival) => _resolved.contains(arrival);

  List<VisitorFact> drainFacts() {
    final drained = List<VisitorFact>.unmodifiable(_facts);
    _facts.clear();
    return drained;
  }

  VisitorDirectorState get snapshot => VisitorDirectorState(
    contacted: Set.unmodifiable(_contacted),
    resolved: Set.unmodifiable(_resolved),
    active: _active == null
        ? null
        : ActiveVisitState(
            arrival: _active!.arrival,
            tier: _active!.tier,
            phase: _active!.phase,
            lineIndex: _active!.lineIndex,
            choice: _active!.choice,
            complianceMarked: _active!.complianceMarked,
            reactionChoiceId: _active!.reactionChoiceId,
          ),
  );

  bool restore(VisitorDirectorState state) {
    if (!state.resolved.every(_visits.containsKey) ||
        !state.contacted.every(
          (visitor) =>
              _visits.keys.any((arrival) => arrival.visitor == visitor),
        )) {
      return false;
    }
    VisitState? active;
    final saved = state.active;
    if (saved != null) {
      final tiers = _visits[saved.arrival];
      final authoredLines = tiers?[saved.tier];
      final lines = authoredLines == null
          ? null
          : _linesFor(saved.arrival, saved.tier, authoredLines);
      if (lines == null ||
          state.resolved.contains(saved.arrival) ||
          saved.phase == VisitPhase.resolved ||
          saved.lineIndex >= lines.length ||
          (saved.phase == VisitPhase.waiting &&
              (saved.choice != null || saved.lineIndex != 0)) ||
          (saved.phase != VisitPhase.waiting &&
              (saved.choice == null || saved.choice == DoorChoice.ignore))) {
        return false;
      }
      final reaction =
          _reactions['${saved.arrival.visitor}:${saved.arrival.day}:${saved.tier.name}:${lines[saved.lineIndex].ordinal}'];
      if (saved.reactionChoiceId != null &&
          (reaction == null ||
              !reaction.options.any(
                (option) => option.id == saved.reactionChoiceId,
              ))) {
        return false;
      }
      active =
          VisitState(arrival: saved.arrival, tier: saved.tier, lines: lines)
            ..phase = saved.phase
            ..lineIndex = saved.lineIndex
            ..choice = saved.choice
            ..complianceMarked = saved.complianceMarked
            ..reactionChoiceId = saved.reactionChoiceId
            ..reaction = reaction;
    }
    _contacted
      ..clear()
      ..addAll(state.contacted);
    _resolved
      ..clear()
      ..addAll(state.resolved);
    _active = active;
    return true;
  }

  List<VisitArrival> arrivalsForDay(int day) =>
      _visits.keys.where((arrival) => arrival.day == day).toList()
        ..sort((a, b) {
          final byHour = a.hour.compareTo(b.hour);
          return byHour != 0 ? byHour : a.order.compareTo(b.order);
        });

  VisitorResult begin(VisitArrival arrival) {
    if (_active != null) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.invalidPhase,
          'A visit is already active.',
        ),
      );
    }
    final tiers = _visits[arrival];
    if (tiers == null) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.noArrival,
          'The authored arrival is missing.',
        ),
      );
    }
    final week = ((arrival.day - 1) ~/ 7) + 1;
    final preferred =
        _contacted.contains(arrival.visitor) || week >= 3 || exposureElevated
        ? VisitTier.compressed
        : VisitTier.full;
    final standingIn =
        preferred == VisitTier.full &&
        standIns.contains(arrival.visitor) &&
        tiers.containsKey(VisitTier.off);
    final wanted = standingIn ? VisitTier.off : preferred;
    final tier = tiers.containsKey(wanted)
        ? wanted
        : (tiers.containsKey(VisitTier.full)
              ? VisitTier.full
              : VisitTier.compressed);
    final lines = _linesFor(arrival, tier, tiers[tier]!);
    _active = VisitState(arrival: arrival, tier: tier, lines: lines);
    _active!.reaction = currentReaction;
    return VisitStarted(_active!);
  }

  VisitorResult choose(DoorChoice choice) {
    final state = _active;
    if (state == null) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.noActiveVisit,
          'There is no active visit.',
        ),
      );
    }
    if (state.phase != VisitPhase.waiting) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.invalidPhase,
          'The active visit cannot be chosen.',
        ),
      );
    }
    state.choice = choice;
    state.phase = choice == DoorChoice.ignore
        ? VisitPhase.resolved
        : VisitPhase.atDoor;
    _facts.add(
      VisitorFact(
        kind: choice == DoorChoice.ignore
            ? VisitorFactKind.visitorIgnored
            : VisitorFactKind.visitorAnswered,
        visitor: state.arrival.visitor,
        day: state.arrival.day,
        choice: choice,
      ),
    );
    if (choice == DoorChoice.open) {
      _facts.add(
        VisitorFact(
          kind: VisitorFactKind.exposureAccepted,
          visitor: state.arrival.visitor,
          day: state.arrival.day,
          choice: choice,
        ),
      );
    }
    if (choice == DoorChoice.ignore) {
      _resolve(state);
    }
    return VisitChoiceResult(state, choice);
  }

  /// Handles player physically walking away during dialogue per MASTERPLAN §40.2.D.
  VisitorResult playerWalkAway() {
    final state = _active;
    if (state == null) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.noActiveVisit,
          'There is no active visit.',
        ),
      );
    }

    _facts.add(
      VisitorFact(
        kind: VisitorFactKind.visitorIgnored,
        visitor: state.arrival.visitor,
        day: state.arrival.day,
        choice: DoorChoice.ignore,
      ),
    );
    narrative.setFlag('walkAwayPenalty_${state.arrival.visitor}', true);
    state.phase = VisitPhase.resolved;
    _resolve(state);
    return VisitProgress(state, resolved: true);
  }

  VisitorResult advanceLine() {
    final state = _active;
    if (state == null) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.noActiveVisit,
          'There is no active visit.',
        ),
      );
    }
    if (state.phase != VisitPhase.atDoor &&
        state.phase != VisitPhase.consulting) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.invalidPhase,
          'The active visit has no line to advance.',
        ),
      );
    }
    final reaction = currentReaction;
    if (reaction != null && state.reactionChoiceId == null) {
      return VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.invalidPhase,
          'The visitor is waiting for an answer.',
        ),
      );
    }
    state.phase = VisitPhase.consulting;
    state.lineIndex++;
    state.reactionChoiceId = null;
    if (state.isComplete) {
      state.phase = VisitPhase.resolved;
      _resolve(state);
      return VisitProgress(state, resolved: true);
    }
    return VisitProgress(state, resolved: false);
  }

  VisitorResult chooseReaction(String optionId) {
    final state = _active;
    final reaction = currentReaction;
    if (state == null ||
        reaction == null ||
        (state.phase != VisitPhase.atDoor &&
            state.phase != VisitPhase.consulting)) {
      return const VisitorUnavailable(
        VisitorIssue(VisitorIssueCode.invalidPhase, 'No reaction is due.'),
      );
    }
    final option = reaction.options
        .where((candidate) => candidate.id == optionId)
        .firstOrNull;
    if (option == null) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.invalidPhase,
          'That answer is not offered.',
        ),
      );
    }
    state.reactionChoiceId = option.id;
    return VisitReactionResult(state, reaction, option);
  }

  ConsultationResult? cite(
    int ordinal,
    bool confirmed,
    InteractionEngine engine,
  ) {
    final state = _active;
    if (state == null ||
        (state.phase != VisitPhase.atDoor &&
            state.phase != VisitPhase.consulting)) {
      return null;
    }
    final line = state.currentLine;
    if (line == null) return null;
    final fields = {
      for (final claim in state.currentClaims) claim.field: claim.value,
    };
    final result = engine.processVisitorConsultation(
      ordinal,
      confirmed,
      state.arrival.visitor,
      line,
      fact: WorldFact.visitor(line, fields),
    );
    final selected = result.selectedOrdinal;
    if (selected != null) {
      if (result.comparison.kind == WorldComparisonKind.contradiction) {
        _facts.add(
          VisitorFact(
            kind: VisitorFactKind.entryContradicted,
            visitor: state.arrival.visitor,
            day: state.arrival.day,
            ordinal: selected,
          ),
        );
        if (state.arrival.visitor == 'warden' && fields.isNotEmpty) {
          final entry = engine.journal[selected];
          if (entry != null) {
            engine.addWardenCorrection(selected, {
              ...entry.current.fields,
              ...fields,
            });
          }
          if (!state.complianceMarked) state.complianceMarked = true;
        }
      } else if (result.comparison.kind == WorldComparisonKind.exact ||
          (result.comparison.kind == WorldComparisonKind.partial &&
              result.comparison.matchingFields.isNotEmpty)) {
        _facts.add(
          VisitorFact(
            kind: VisitorFactKind.entryVerified,
            visitor: state.arrival.visitor,
            day: state.arrival.day,
            ordinal: selected,
          ),
        );
      }
    }
    return result;
  }

  void _resolve(VisitState state) {
    _contacted.add(state.arrival.visitor);
    _resolved.add(state.arrival);
    _active = null;
  }

  static VisitorResult build(StoryText story) {
    if (story.visitors.isEmpty) {
      return const VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.missingCorpus,
          'The authored visitor corpus is empty.',
        ),
      );
    }
    final visits = <VisitArrival, Map<VisitTier, List<VisitorLine>>>{};
    final names = story.visitors.keys.toList()..sort();
    for (final name in names) {
      final days = story.visitors[name]!;
      for (final entry in days.entries) {
        final day = entry.key;
        if (day < 1 || day > 21) {
          return VisitorUnavailable(
            VisitorIssue(
              VisitorIssueCode.malformedDay,
              '$name has an out-of-range authored day $day.',
            ),
          );
        }
        final tiers = _parseTiers(name, day, entry.value, story.claims);
        if (tiers is VisitorUnavailable) return tiers;
        final metadata = story.visitorArrivals[name]?[day];
        if (metadata == null) continue;
        final arrival = VisitArrival(
          visitor: name,
          day: day,
          hour: metadata.hour,
          order: metadata.order,
        );
        visits[arrival] = (tiers as _ParsedTiers).tiers;
      }
    }
    final variants = <String, List<VisitorVariant>>{};
    for (final variant in story.variants.values) {
      variants.putIfAbsent(variant.targetKey, () => []).add(variant);
    }
    return VisitorDirectorBuilt(
      VisitorDirector._(
        visits,
        <String>{},
        <VisitArrival>{},
        Map<String, VisitorReaction>.unmodifiable(story.reactions),
        {
          for (final entry in variants.entries)
            entry.key: List<VisitorVariant>.unmodifiable(entry.value),
        },
      ),
    );
  }

  List<VisitorLine> _linesFor(
    VisitArrival arrival,
    VisitTier tier,
    List<VisitorLine> authored,
  ) => [for (final line in authored) _lineFor(arrival, tier, line)];

  VisitorLine _lineFor(VisitArrival arrival, VisitTier tier, VisitorLine line) {
    final key =
        'visitor:${arrival.visitor}:${arrival.day}:${tier.name}.${line.ordinal}';
    final variant = _variants[key]
        ?.where(
          (candidate) => candidate.conditions.entries.every(
            (condition) => narrative.hasFlag(condition.key, condition.value),
          ),
        )
        .firstOrNull;
    return variant == null
        ? line
        : VisitorLine(line.ordinal, variant.replacement, line.claims);
  }

  static VisitorResult _parseTiers(
    String visitor,
    int day,
    Map<String, String> authored,
    Map<String, List<VisitorClaim>> claims,
  ) {
    final tiers = <VisitTier, List<VisitorLine>>{};
    for (final tier in VisitTier.values) {
      final prefix = '${tier.name}.';
      final lines = <VisitorLine>[];
      for (final entry in authored.entries) {
        if (!entry.key.startsWith(prefix)) continue;
        final ordinal = int.tryParse(entry.key.substring(prefix.length));
        if (ordinal == null || ordinal < 1 || entry.value.isEmpty) {
          return VisitorUnavailable(
            VisitorIssue(
              VisitorIssueCode.malformedTier,
              '$visitor day $day has malformed ${tier.name} tier data.',
            ),
          );
        }
        final lineClaims =
            claims['visitor:$visitor:$day:${entry.key}'] ?? const [];
        lines.add(VisitorLine(ordinal, entry.value, lineClaims));
      }
      if (lines.isEmpty) continue;
      lines.sort((a, b) => a.ordinal.compareTo(b.ordinal));
      for (var index = 0; index < lines.length; index++) {
        if (lines[index].ordinal != index + 1) {
          return VisitorUnavailable(
            VisitorIssue(
              VisitorIssueCode.missingTierLines,
              '$visitor day $day has a non-contiguous ${tier.name} tier.',
            ),
          );
        }
      }
      tiers[tier] = lines;
    }
    if (tiers.isEmpty) {
      return VisitorUnavailable(
        VisitorIssue(
          VisitorIssueCode.missingTierLines,
          '$visitor day $day has no authored tiers.',
        ),
      );
    }
    return _ParsedTiers(tiers);
  }
}

class VisitorDirectorBuilt extends VisitorResult {
  const VisitorDirectorBuilt(this.director);

  final VisitorDirector director;
}

class _ParsedTiers extends VisitorResult {
  const _ParsedTiers(this.tiers);

  final Map<VisitTier, List<VisitorLine>> tiers;
}

VisitorDirector? visitorDirectorFrom(VisitorResult result) =>
    result is VisitorDirectorBuilt ? result.director : null;
