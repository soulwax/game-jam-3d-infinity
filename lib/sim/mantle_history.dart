import 'dart:convert';

/// The append-only, renderer-neutral record of the order in which mantles
/// first became lit.
class MantleHistoryState {
  MantleHistoryState(Iterable<String> firstLitMantleIds)
    : firstLitMantleIds = List.unmodifiable(_validatedIds(firstLitMantleIds));

  final List<String> firstLitMantleIds;

  bool contains(String mantleId) => firstLitMantleIds.contains(mantleId);

  MantleHistoryTransition light(String mantleId) {
    _validateId(mantleId);
    if (contains(mantleId)) {
      return MantleHistoryTransition(
        state: this,
        event: MantleHistoryEvent.alreadyRecorded(mantleId),
      );
    }
    return MantleHistoryTransition(
      state: MantleHistoryState([...firstLitMantleIds, mantleId]),
      event: MantleHistoryEvent.firstLit(mantleId),
    );
  }

  Map<String, dynamic> toJson() => {'firstLitMantleIds': firstLitMantleIds};

  factory MantleHistoryState.fromJson(Object? raw) {
    if (raw is! Map ||
        raw.length != 1 ||
        !raw.containsKey('firstLitMantleIds')) {
      throw const FormatException('mantle history state is malformed');
    }
    final ids = raw['firstLitMantleIds'];
    if (ids is! List) {
      throw const FormatException('mantle history IDs are malformed');
    }
    final decoded = <String>[];
    for (final id in ids) {
      if (id is! String) {
        throw const FormatException('mantle history IDs are malformed');
      }
      decoded.add(id);
    }
    return MantleHistoryState(decoded);
  }
}

class MantleHistoryEvent {
  const MantleHistoryEvent({required this.kind, required this.mantleId});

  const MantleHistoryEvent.firstLit(String mantleId)
    : this(kind: 'mantle.firstLit', mantleId: mantleId);

  const MantleHistoryEvent.alreadyRecorded(String mantleId)
    : this(kind: 'mantle.alreadyRecorded', mantleId: mantleId);

  final String kind;
  final String mantleId;

  Map<String, dynamic> toJson() => {'kind': kind, 'mantleId': mantleId};
}

class MantleHistoryTransition {
  const MantleHistoryTransition({required this.state, required this.event});

  final MantleHistoryState state;
  final MantleHistoryEvent event;
}

/// A small convenience façade for callers that want to keep the current
/// immutable state while applying commands.
class MantleHistory {
  MantleHistory({MantleHistoryState? state})
    : state = state ?? MantleHistoryState(const []);

  MantleHistoryState state;

  List<String> get order => state.firstLitMantleIds;

  MantleHistoryEvent light(String mantleId) {
    final result = state.light(mantleId);
    state = result.state;
    return result.event;
  }

  MantleHistory withLight(String mantleId) {
    if (state.contains(mantleId)) return this;
    return MantleHistory(state: state.light(mantleId).state);
  }

  Map<String, dynamic> toJson() => state.toJson();

  String encode() => jsonEncode(toJson());

  factory MantleHistory.fromJson(Object? raw) =>
      MantleHistory(state: MantleHistoryState.fromJson(raw));
}

void _validateId(String id) {
  if (id.isEmpty) throw const FormatException('mantle ID must not be empty');
}

List<String> _validatedIds(Iterable<String> ids) {
  final result = <String>[];
  final seen = <String>{};
  for (final id in ids) {
    _validateId(id);
    if (!seen.add(id)) {
      throw const FormatException('mantle history contains a duplicate ID');
    }
    result.add(id);
  }
  return result;
}
