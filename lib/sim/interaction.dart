import 'dart:math';

import '../config.dart';
import '../journal/entry.dart';
import '../journal/journal.dart';
import 'time.dart';

enum InteractionType { radio, visitor, warden }

enum WorldComparisonKind { skipped, exact, partial, contradiction }

class WorldFact {
  final InteractionType source;
  final Map<String, String> fields;
  final String statement;

  WorldFact({
    required this.source,
    required Map<String, String> fields,
    required this.statement,
  }) : fields = Map.unmodifiable(fields);

  factory WorldFact.radio(String statement, Map<String, String> fields) =>
      WorldFact(
        source: InteractionType.radio,
        fields: fields,
        statement: statement,
      );

  factory WorldFact.visitor(String statement, Map<String, String> fields) =>
      WorldFact(
        source: InteractionType.visitor,
        fields: fields,
        statement: statement,
      );

  /// Keeps legacy string-only callers representable without inventing facts.
  factory WorldFact.unstructured(InteractionType source, String statement) =>
      WorldFact(source: source, fields: const {}, statement: statement);
}

class WorldComparison {
  final WorldComparisonKind kind;
  final Set<String> matchingFields;
  final Set<String> conflictingFields;

  const WorldComparison({
    required this.kind,
    this.matchingFields = const {},
    this.conflictingFields = const {},
  });

  bool get isExact => kind == WorldComparisonKind.exact;
  bool get isContradiction => kind == WorldComparisonKind.contradiction;
}

class ConsultationPrompt {
  final InteractionType type;
  final String question;
  final String? expectedValue;
  final int dayOfConsultation;

  ConsultationPrompt({
    required this.type,
    required this.question,
    required this.expectedValue,
    required this.dayOfConsultation,
  });
}

class ConsultationResult {
  final int? selectedOrdinal;
  final bool playerConfirmed;
  final bool worldConfirms;
  final bool corroborated;
  final WorldComparison comparison;
  final String? contradiction;

  ConsultationResult({
    required this.selectedOrdinal,
    required this.playerConfirmed,
    required this.worldConfirms,
    this.corroborated = false,
    this.comparison = const WorldComparison(kind: WorldComparisonKind.skipped),
    this.contradiction,
  });
}

class HumiliationEvent {
  final Entry playerEntry;
  final String worldState;
  final String contradictionText;
  final InteractionType audience;

  HumiliationEvent({
    required this.playerEntry,
    required this.worldState,
    required this.contradictionText,
    required this.audience,
  });
}

class InteractionEngine {
  final Journal journal;
  final GameTime time;
  final int runSeed;
  final bool Function(int ordinal)? verifyEntry;

  InteractionEngine({
    required this.journal,
    required this.time,
    this.runSeed = 0,
    this.verifyEntry,
  });

  List<Entry> getSelectableEntries() {
    return [
      for (final entry in journal.entries)
        if (entry.day <= time.dayNumber) entry,
    ].toList()..sort((a, b) => b.ordinal.compareTo(a.ordinal));
  }

  WorldComparison compareEntryWithWorld(Entry entry, WorldFact fact) {
    if (fact.fields.isEmpty) {
      return const WorldComparison(kind: WorldComparisonKind.partial);
    }

    final matching = <String>{};
    final conflicting = <String>{};
    for (final field in fact.fields.keys) {
      final entryValue = entry.current.fields[field];
      if (entryValue == fact.fields[field]) {
        matching.add(field);
      } else {
        conflicting.add(field);
      }
    }
    if (conflicting.isNotEmpty) {
      return WorldComparison(
        kind: WorldComparisonKind.contradiction,
        matchingFields: matching,
        conflictingFields: conflicting,
      );
    }
    if (matching.length == entry.current.fields.length &&
        fact.fields.length == entry.current.fields.length) {
      return WorldComparison(
        kind: WorldComparisonKind.exact,
        matchingFields: matching,
      );
    }
    return WorldComparison(
      kind: WorldComparisonKind.partial,
      matchingFields: matching,
    );
  }

  bool entryMatchesWorld(
    Entry entry,
    InteractionType type,
    String expectedValue, {
    Map<String, String> fields = const {},
  }) => compareEntryWithWorld(
    entry,
    fields.isEmpty
        ? WorldFact.unstructured(type, expectedValue)
        : WorldFact(source: type, fields: fields, statement: expectedValue),
  ).isExact;

  ConsultationResult processRadioConsultation(
    int? selectedOrdinal,
    bool confirmed,
    String broadcastText, {
    WorldFact? fact,
  }) {
    return _processConsultation(
      selectedOrdinal: selectedOrdinal,
      confirmed: confirmed,
      corroborator: 'broadcast',
      fact:
          fact ?? WorldFact.unstructured(InteractionType.radio, broadcastText),
      corroborationEnabled: enableRadioCorroboration,
    );
  }

  ConsultationResult processVisitorConsultation(
    int? selectedOrdinal,
    bool confirmed,
    String visitorName,
    String visitorClaim, {
    WorldFact? fact,
  }) {
    return _processConsultation(
      selectedOrdinal: selectedOrdinal,
      confirmed: confirmed,
      corroborator: visitorName,
      fact:
          fact ?? WorldFact.unstructured(InteractionType.visitor, visitorClaim),
      corroborationEnabled: enableVisitorCorroboration,
    );
  }

  ConsultationResult _processConsultation({
    required int? selectedOrdinal,
    required bool confirmed,
    required String corroborator,
    required WorldFact fact,
    required bool corroborationEnabled,
  }) {
    if (selectedOrdinal == null) {
      return ConsultationResult(
        selectedOrdinal: null,
        playerConfirmed: false,
        worldConfirms: false,
      );
    }

    final entry = journal[selectedOrdinal];
    if (entry == null) {
      return ConsultationResult(
        selectedOrdinal: selectedOrdinal,
        playerConfirmed: confirmed,
        worldConfirms: false,
      );
    }

    final corroborated = entry.corroborator == corroborator;
    final comparison = compareEntryWithWorld(entry, fact);
    final worldConfirms =
        !corroborationEnabled || (corroborated && comparison.isExact);

    if (confirmed) {
      (verifyEntry ?? journal.verifyToday)(selectedOrdinal);
    }

    return ConsultationResult(
      selectedOrdinal: selectedOrdinal,
      playerConfirmed: confirmed,
      worldConfirms: worldConfirms,
      corroborated: corroborated,
      comparison: comparison,
      contradiction: comparison.isContradiction && corroborated
          ? "The world says \"${fact.statement}\". The entry says \"${entry.current.toString()}\"."
          : null,
    );
  }

  int? selectRandomEntryForWarden(int seedDay) {
    final candidates = [
      for (final entry in journal.entries)
        if (entry.day < seedDay && !entry.locked) entry,
    ];

    if (candidates.isEmpty) return null;

    final rng = Random(_wardenSeedFor(seedDay));
    return candidates[rng.nextInt(candidates.length)].ordinal;
  }

  ConsultationResult processWardenConsultation(
    int? selectedOrdinal,
    bool confirmed,
  ) {
    if (selectedOrdinal == null) {
      return ConsultationResult(
        selectedOrdinal: null,
        playerConfirmed: false,
        worldConfirms: false,
      );
    }

    final entry = journal[selectedOrdinal];
    if (entry == null) {
      return ConsultationResult(
        selectedOrdinal: selectedOrdinal,
        playerConfirmed: confirmed,
        worldConfirms: false,
      );
    }

    if (confirmed) {
      journal.setVerifiedToday([selectedOrdinal]);
    }

    return ConsultationResult(
      selectedOrdinal: selectedOrdinal,
      playerConfirmed: confirmed,
      worldConfirms: true,
    );
  }

  bool addWardenCorrection(int entryOrdinal, Map<String, String> correction) {
    return journal.addWardenAnnotation(entryOrdinal, correction);
  }

  HumiliationEvent? createHumiliationEvent(
    ConsultationResult result,
    InteractionType type,
  ) {
    if (result.selectedOrdinal == null ||
        !result.corroborated ||
        !result.comparison.isContradiction) {
      return null;
    }

    final entry = journal[result.selectedOrdinal!];
    if (entry == null) return null;

    return HumiliationEvent(
      playerEntry: entry,
      worldState: result.contradiction ?? 'Unknown contradiction',
      contradictionText:
          "${entry.current.toString()} but ${result.contradiction}",
      audience: type,
    );
  }

  int _wardenSeedFor(int day) => runSeed ^ (42689 + day * 11213);
}
