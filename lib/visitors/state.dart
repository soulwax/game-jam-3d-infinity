import '../story/schema.dart'
    show VisitorClaim, VisitorReaction, ReactionOption;

enum DoorChoice { open, chain, throughDoor, letterbox, ignore }

enum VisitPhase { waiting, atDoor, consulting, resolved }

enum VisitTier { full, compressed, off }

enum VisitorFactKind {
  visitorAnswered,
  visitorIgnored,
  entryVerified,
  entryContradicted,
  exposureAccepted,
}

class VisitorFact {
  const VisitorFact({
    required this.kind,
    required this.visitor,
    required this.day,
    this.choice,
    this.ordinal,
  });

  final VisitorFactKind kind;
  final String visitor;
  final int day;
  final DoorChoice? choice;
  final int? ordinal;

  Map<String, dynamic> toJson() => {
    'kind': kind.name,
    'visitor': visitor,
    'day': day,
    if (choice != null) 'choice': choice!.name,
    if (ordinal != null) 'ordinal': ordinal,
  };
}

enum VisitorIssueCode {
  missingCorpus,
  malformedDay,
  malformedTier,
  missingTierLines,
  noArrival,
  noActiveVisit,
  invalidPhase,
}

class VisitorIssue {
  const VisitorIssue(this.code, this.message);

  final VisitorIssueCode code;
  final String message;

  @override
  bool operator ==(Object other) =>
      other is VisitorIssue && other.code == code && other.message == message;

  @override
  int get hashCode => Object.hash(code, message);
}

class VisitorLine {
  const VisitorLine(this.ordinal, this.text, [this.claims = const []]);

  final int ordinal;
  final String text;
  final List<VisitorClaim> claims;

  @override
  bool operator ==(Object other) =>
      other is VisitorLine && other.ordinal == ordinal && other.text == text;

  @override
  int get hashCode => Object.hash(ordinal, text);
}

class VisitArrival {
  const VisitArrival({
    required this.visitor,
    required this.day,
    required this.hour,
    required this.order,
  });

  final String visitor;
  final int day;
  final int hour;
  final int order;

  @override
  bool operator ==(Object other) =>
      other is VisitArrival &&
      other.visitor == visitor &&
      other.day == day &&
      other.hour == hour &&
      other.order == order;

  @override
  int get hashCode => Object.hash(visitor, day, hour, order);

  Map<String, dynamic> toJson() => {
    'visitor': visitor,
    'day': day,
    'hour': hour,
    'order': order,
  };

  static VisitArrival? tryFromJson(Object? raw) {
    if (raw is! Map) return null;
    final visitor = raw['visitor'];
    final day = raw['day'];
    final hour = raw['hour'];
    final order = raw['order'];
    if (visitor is! String ||
        day is! int ||
        hour is! int ||
        order is! int ||
        day < 1 ||
        hour < 0 ||
        hour > 23 ||
        order < 0) {
      return null;
    }
    return VisitArrival(visitor: visitor, day: day, hour: hour, order: order);
  }
}

/// Atomic runtime state for the data-driven visitor director. It contains no
/// authored dialogue: the director rehydrates that from the current corpus.
class VisitorDirectorState {
  const VisitorDirectorState({
    required this.contacted,
    required this.resolved,
    this.active,
  });

  final Set<String> contacted;
  final Set<VisitArrival> resolved;
  final ActiveVisitState? active;

  Map<String, dynamic> toJson() => {
    'contacted': contacted.toList()..sort(),
    'resolved': resolved.map((arrival) => arrival.toJson()).toList(),
    'active': active?.toJson(),
  };

  static VisitorDirectorState? tryFromJson(Object? raw) {
    if (raw is! Map || raw['contacted'] is! List || raw['resolved'] is! List) {
      return null;
    }
    final contacted = <String>{};
    for (final value in raw['contacted'] as List) {
      if (value is! String) return null;
      contacted.add(value);
    }
    final resolved = <VisitArrival>{};
    for (final value in raw['resolved'] as List) {
      final arrival = VisitArrival.tryFromJson(value);
      if (arrival == null) return null;
      resolved.add(arrival);
    }
    final rawActive = raw['active'];
    final active = rawActive == null
        ? null
        : ActiveVisitState.tryFromJson(rawActive);
    if (rawActive != null && active == null) return null;
    return VisitorDirectorState(
      contacted: contacted,
      resolved: resolved,
      active: active,
    );
  }
}

class ActiveVisitState {
  const ActiveVisitState({
    required this.arrival,
    required this.tier,
    required this.phase,
    required this.lineIndex,
    this.choice,
    this.complianceMarked = false,
    this.reactionChoiceId,
  });

  final VisitArrival arrival;
  final VisitTier tier;
  final VisitPhase phase;
  final int lineIndex;
  final DoorChoice? choice;
  final bool complianceMarked;
  final String? reactionChoiceId;

  Map<String, dynamic> toJson() => {
    'arrival': arrival.toJson(),
    'tier': tier.name,
    'phase': phase.name,
    'lineIndex': lineIndex,
    'choice': choice?.name,
    'complianceMarked': complianceMarked,
    if (reactionChoiceId != null) 'reactionChoiceId': reactionChoiceId,
  };

  static ActiveVisitState? tryFromJson(Object? raw) {
    if (raw is! Map) return null;
    final arrival = VisitArrival.tryFromJson(raw['arrival']);
    final tier = raw['tier'];
    final phase = raw['phase'];
    final lineIndex = raw['lineIndex'];
    final choice = raw['choice'];
    final complianceMarked = raw['complianceMarked'] ?? false;
    final reactionChoiceId = raw['reactionChoiceId'];
    if (arrival == null ||
        tier is! String ||
        phase is! String ||
        lineIndex is! int ||
        lineIndex < 0 ||
        complianceMarked is! bool ||
        (reactionChoiceId != null && reactionChoiceId is! String) ||
        (choice != null && choice is! String)) {
      return null;
    }
    final parsedTier = VisitTier.values
        .where((candidate) => candidate.name == tier)
        .firstOrNull;
    final parsedPhase = VisitPhase.values
        .where((candidate) => candidate.name == phase)
        .firstOrNull;
    final parsedChoice = choice == null
        ? null
        : DoorChoice.values
              .where((candidate) => candidate.name == choice)
              .firstOrNull;
    if (parsedTier == null ||
        parsedPhase == null ||
        (choice != null && parsedChoice == null)) {
      return null;
    }
    return ActiveVisitState(
      arrival: arrival,
      tier: parsedTier,
      phase: parsedPhase,
      lineIndex: lineIndex,
      choice: parsedChoice,
      complianceMarked: complianceMarked,
      reactionChoiceId: reactionChoiceId as String?,
    );
  }
}

class VisitState {
  VisitState({
    required this.arrival,
    required this.tier,
    required List<VisitorLine> lines,
  }) : lines = List.unmodifiable(lines);

  final VisitArrival arrival;
  final VisitTier tier;
  final List<VisitorLine> lines;
  VisitPhase phase = VisitPhase.waiting;
  DoorChoice? choice;
  int lineIndex = 0;
  bool complianceMarked = false;
  String? reactionChoiceId;

  String? get currentLine =>
      lineIndex < lines.length ? lines[lineIndex].text : null;

  List<VisitorClaim> get currentClaims =>
      lineIndex < lines.length ? lines[lineIndex].claims : const [];

  bool get isComplete => lineIndex >= lines.length;

  /// The authored beat, if this exact compiled line has one.
  VisitorReaction? reaction;
}

abstract class VisitorResult {
  const VisitorResult();
}

class VisitorUnavailable extends VisitorResult {
  const VisitorUnavailable(this.issue);

  final VisitorIssue issue;
}

class VisitStarted extends VisitorResult {
  const VisitStarted(this.state);

  final VisitState state;
}

class VisitChoiceResult extends VisitorResult {
  const VisitChoiceResult(this.state, this.choice);

  final VisitState state;
  final DoorChoice choice;
}

class VisitProgress extends VisitorResult {
  const VisitProgress(this.state, {required this.resolved});

  final VisitState state;
  final bool resolved;
}

class VisitReactionResult extends VisitorResult {
  const VisitReactionResult(this.state, this.reaction, this.option);

  final VisitState state;
  final VisitorReaction reaction;
  final ReactionOption option;
}
