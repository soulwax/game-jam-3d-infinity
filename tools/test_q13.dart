import 'dart:convert';
import 'dart:io';

import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/journal/journal.dart';
import 'package:quarantine/sim/interaction.dart';
import 'package:quarantine/sim/time.dart';
import 'package:quarantine/story/corpus.dart';
import 'package:quarantine/story/drift_resolve.dart';
import 'package:quarantine/story/schema.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/state.dart';

Never _fail(String message) => throw StateError('q13 test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

Map<String, Map<String, dynamic>> _loadCorpus() =>
    decodeTextCorpus(File('web/res/text.json').readAsStringSync());

/// Mirrors `TextLibrary.visitorStory()` without the browser-only dependency,
/// so the exact compiled artifact the game ships can be exercised here.
StoryText _loadCompiledStory(Map<String, Map<String, dynamic>> corpus) {
  final story = StoryText();
  final rawVisitors = corpus['visitors']!;
  for (final entry in rawVisitors.entries) {
    if (entry.value is! Map) continue;
    final rawVisitor = entry.value as Map;
    final days = <int, Map<String, String>>{};
    for (final dayEntry in rawVisitor.entries) {
      final day = dayEntry.key is String
          ? int.tryParse(dayEntry.key as String)
          : null;
      if (day == null || dayEntry.value is! Map) continue;
      final lines = <String, String>{};
      for (final line in (dayEntry.value as Map).entries) {
        if (line.key is String && line.value is String) {
          lines[line.key as String] = line.value as String;
        }
      }
      if (lines.isNotEmpty) days[day] = lines;
    }
    if (days.isEmpty) continue;
    story.visitors[entry.key] = days;
    final arrivals = <int, VisitorArrivalMetadata>{};
    final rawArrival = rawVisitor['_arrival'];
    if (rawArrival is Map) {
      for (final day in days.keys) {
        final dayData = rawArrival[day.toString()];
        final hour = dayData is Map ? dayData['hour'] : null;
        final order = dayData is Map ? dayData['order'] : null;
        if (hour is num && order is num) {
          arrivals[day] = VisitorArrivalMetadata(
            hour: hour.toInt(),
            order: order.toInt(),
          );
        }
      }
    }
    if (arrivals.isNotEmpty) story.visitorArrivals[entry.key] = arrivals;
  }
  for (final entry in corpus['claims']!.entries) {
    final raw = entry.value;
    if (raw is! List) continue;
    final claims = <VisitorClaim>[
      for (final item in raw)
        if (item is Map && item['field'] is String && item['value'] is String)
          VisitorClaim(
            field: item['field'] as String,
            value: item['value'] as String,
          ),
    ];
    if (claims.isNotEmpty) story.claims[entry.key] = claims;
  }
  for (final entry in corpus['reactions']!.entries) {
    final raw = entry.value;
    if (raw is! Map ||
        raw['id'] is! String ||
        raw['visitor'] is! String ||
        raw['day'] is! num ||
        raw['tier'] is! String ||
        raw['ordinal'] is! num ||
        raw['options'] is! List) {
      continue;
    }
    final options = <ReactionOption>[];
    for (final item in raw['options'] as List) {
      if (item is! Map ||
          item['id'] is! String ||
          item['label'] is! String ||
          item['reply'] is! String) {
        continue;
      }
      final effects = <String, String>{};
      final rawEffects = item['effects'];
      if (rawEffects is Map) {
        for (final effect in rawEffects.entries) {
          if (effect.key is String && effect.value is String) {
            effects[effect.key as String] = effect.value as String;
          }
        }
      }
      options.add(
        ReactionOption(
          id: item['id'] as String,
          label: item['label'] as String,
          reply: item['reply'] as String,
          effects: effects,
        ),
      );
    }
    if (options.length >= 2) {
      final reaction = VisitorReaction(
        id: raw['id'] as String,
        visitor: raw['visitor'] as String,
        day: (raw['day'] as num).toInt(),
        tier: raw['tier'] as String,
        ordinal: (raw['ordinal'] as num).toInt(),
        options: options,
      );
      story.reactions[reaction.key] = reaction;
    }
  }
  for (final entry in corpus['variants']!.entries) {
    final raw = entry.value;
    if (raw is! Map ||
        raw['id'] is! String ||
        raw['target'] is! String ||
        raw['replacement'] is! String) {
      continue;
    }
    final conditions = <String, String>{};
    final rawConditions = raw['when'];
    if (rawConditions is Map) {
      for (final condition in rawConditions.entries) {
        if (condition.key is String && condition.value is String) {
          conditions[condition.key as String] = condition.value as String;
        }
      }
    }
    final variant = VisitorVariant(
      id: raw['id'] as String,
      targetKey: raw['target'] as String,
      replacement: raw['replacement'] as String,
      conditions: conditions,
    );
    story.variants[variant.id] = variant;
  }
  for (final entry in corpus['residues']!.entries) {
    if (entry.value is String) {
      story.residues[entry.key] = entry.value as String;
    }
  }
  return story;
}

Map<String, List<String>> _loadVocabulary(
  Map<String, Map<String, dynamic>> corpus,
) => {
  for (final field in vocabularyFields)
    field: (corpus['vocabulary']![field] as List).cast<String>(),
};

StoryText _loadRawStory() {
  final sources = <String, String>{};
  for (final file in Directory(
    'text',
  ).listSync(recursive: true).whereType<File>()) {
    if (file.path.endsWith('.txt')) {
      sources[file.path] = file.readAsStringSync();
    }
  }
  return parseStory(sources);
}

VisitorDirector _director(StoryText story) {
  final built = VisitorDirector.build(story);
  final director = visitorDirectorFrom(built);
  _expect(director != null, 'a valid corpus must build a director');
  return director!;
}

InteractionEngine _engine(Journal journal) => InteractionEngine(
  journal: journal,
  time: GameTime(dayNumber: 1, dayLengthSeconds: 24),
);

void _advanceThrough(VisitorDirector director) {
  while (director.active != null) {
    final reaction = director.currentReaction;
    if (reaction != null) director.chooseReaction(reaction.options.first.id);
    final progress = director.advanceLine();
    _expect(
      progress is VisitProgress,
      'every authored reaction must be answerable before advancing',
    );
  }
}

void main() {
  final corpus = _loadCorpus();
  final story = _loadCompiledStory(corpus);
  final vocabulary = Vocabulary(_loadVocabulary(corpus));

  // 1. Every authored visitor/day/tier is discoverable from the compiled corpus.
  _expect(
    story.visitors.length == 22,
    'compiled corpus must expose all 22 authored visitors, found '
    '${story.visitors.length}',
  );
  final director1 = _director(story);
  var totalArrivals = 0;
  for (var day = 1; day <= 21; day++) {
    totalArrivals += director1.arrivalsForDay(day).length;
  }
  var totalAuthoredArrivals = 0;
  for (final days in story.visitorArrivals.values) {
    totalAuthoredArrivals += days.length;
  }
  _expect(
    totalArrivals == totalAuthoredArrivals && totalArrivals > 0,
    'every authored arrival must surface through arrivalsForDay '
    '($totalArrivals of $totalAuthoredArrivals)',
  );
  for (final name in story.visitors.keys) {
    for (final day in story.visitors[name]!.keys) {
      for (final tierKey in story.visitors[name]![day]!.keys) {
        _expect(
          story.visitors[name]![day]![tierKey]!.isNotEmpty,
          '$name day $day tier $tierKey must be non-empty',
        );
      }
    }
  }

  // 2. Same-seed determinism: two directors, identical 21-day queue.
  final directorA = _director(story);
  final directorB = _director(story);
  final scheduleA = [
    for (var day = 1; day <= 21; day++)
      for (final a in directorA.arrivalsForDay(day))
        '${a.day}:${a.hour}:${a.order}:${a.visitor}',
  ].join('|');
  final scheduleB = [
    for (var day = 1; day <= 21; day++)
      for (final a in directorB.arrivalsForDay(day))
        '${a.day}:${a.hour}:${a.order}:${a.visitor}',
  ].join('|');
  _expect(
    scheduleA == scheduleB,
    'same authored corpus must yield the same queue',
  );

  // 3. All five door choices resolve to exactly one terminal state, one event
  // set, and no duplicate compliance mark.
  for (final choice in DoorChoice.values) {
    final director = _director(story);
    final journal = Journal(vocabulary);
    final engine = _engine(journal);
    final arrival = director
        .arrivalsForDay(5)
        .firstWhere((a) => a.visitor == 'warden');
    director.begin(arrival);
    final chosen = director.choose(choice);
    _expect(
      chosen is VisitChoiceResult,
      '$choice must yield a typed choice result',
    );

    if (choice != DoorChoice.ignore) {
      director.advanceLine();
      director.advanceLine();
      final conflicting = journal.write(5, {
        'who': 'I',
        'verb': 'saw',
        'object': 'a form',
        'place': 'kitchen',
        'time': 'morning',
      }, 0.1)!;
      final firstCite = director.cite(conflicting.ordinal, true, engine);
      _expect(firstCite != null, 'cite must produce a result mid-conversation');
      final marginAfterFirst = journal[conflicting.ordinal]!.margin;
      _expect(
        marginAfterFirst != null && director.active!.complianceMarked,
        'a warden contradiction must add a margin note and mark the compliance card',
      );
      final second = journal.write(5, {
        'who': 'I',
        'verb': 'saw',
        'object': 'a name',
        'place': 'hallway',
        'time': 'night',
      }, 0.1)!;
      director.cite(second.ordinal, true, engine);
      _expect(
        journal[conflicting.ordinal]!.margin == marginAfterFirst,
        'a warden margin annotation must not be overwritten by a later citation',
      );
      _advanceThrough(director);
    }

    _expect(
      director.isResolved(arrival),
      '$choice must resolve the visit exactly once',
    );
    _expect(
      director.active == null,
      '$choice must leave no active visit behind',
    );

    final facts = director.drainFacts();
    final answeredOrIgnored = facts.where(
      (f) =>
          f.kind == VisitorFactKind.visitorAnswered ||
          f.kind == VisitorFactKind.visitorIgnored,
    );
    _expect(
      answeredOrIgnored.length == 1,
      '$choice must emit exactly one answered/ignored fact, got '
      '${answeredOrIgnored.length}',
    );
    final exposures = facts.where(
      (f) => f.kind == VisitorFactKind.exposureAccepted,
    );
    _expect(
      exposures.length == (choice == DoorChoice.open ? 1 : 0),
      '$choice must emit exposureAccepted only for open, got ${exposures.length}',
    );
    if (choice != DoorChoice.ignore) {
      final contradictions = facts.where(
        (f) => f.kind == VisitorFactKind.entryContradicted,
      );
      _expect(
        contradictions.length == 2,
        '$choice must record both citations as facts',
      );
    }
  }

  // 4. Citing two entries keeps both ordinals in verifiedToday.
  {
    final director = _director(story);
    final journal = Journal(vocabulary);
    final engine = _engine(journal);
    final arrival = director
        .arrivalsForDay(1)
        .firstWhere((a) => a.visitor == 'ayling');
    director.begin(arrival);
    director.choose(DoorChoice.open);
    director.advanceLine();
    director.advanceLine();
    final first = journal.write(1, {
      'who': 'I',
      'verb': 'heard',
      'object': 'the broadcast',
      'place': 'kitchen',
      'time': 'after dark',
    }, 0.1)!;
    final second = journal.write(1, {
      'who': 'I',
      'verb': 'saw',
      'object': 'the door',
      'place': 'hallway',
      'time': 'morning',
    }, 0.1)!;
    director.cite(first.ordinal, true, engine);
    director.cite(second.ordinal, true, engine);
    final verified = journal.getVerifiedToday();
    _expect(
      verified.contains(first.ordinal) && verified.contains(second.ordinal),
      'citing two entries must keep both ordinals in verifiedToday, got $verified',
    );
  }

  // 5. Save/restore mid-line and resolved visits — continuation identical.
  {
    final director = _director(story);
    final journal = Journal(vocabulary);
    final engine = _engine(journal);
    final arrival = director
        .arrivalsForDay(5)
        .firstWhere((a) => a.visitor == 'warden');
    director.begin(arrival);
    director.choose(DoorChoice.open);
    director.advanceLine();
    director.advanceLine();
    final conflicting = journal.write(5, {
      'who': 'I',
      'verb': 'saw',
      'object': 'a form',
      'place': 'kitchen',
      'time': 'morning',
    }, 0.1)!;
    director.cite(conflicting.ordinal, true, engine);
    _expect(
      director.active!.complianceMarked,
      'a contradicted warden citation must mark the compliance card',
    );

    final encoded = jsonEncode(director.snapshot.toJson());
    final restoredState = VisitorDirectorState.tryFromJson(jsonDecode(encoded));
    _expect(
      restoredState != null,
      'active visit snapshot must round-trip through JSON',
    );
    final resumed = _director(story);
    _expect(resumed.restore(restoredState!), 'mid-line visit must restore');
    _expect(
      resumed.active?.arrival == arrival &&
          resumed.active?.lineIndex == director.active?.lineIndex &&
          resumed.active?.phase == director.active?.phase &&
          resumed.active?.complianceMarked == true,
      'restored visit must continue with identical phase, line and compliance state',
    );
    _advanceThrough(resumed);
    _expect(
      resumed.isResolved(arrival),
      'resumed visit must resolve identically',
    );

    final resolvedEncoded = jsonEncode(resumed.snapshot.toJson());
    final resolvedState = VisitorDirectorState.tryFromJson(
      jsonDecode(resolvedEncoded),
    );
    final afterResolve = _director(story);
    _expect(
      afterResolve.restore(resolvedState!),
      'resolved-visit snapshot must also restore',
    );
    _expect(
      afterResolve.isResolved(arrival) && afterResolve.active == null,
      'a resolved visit must stay resolved and inactive after restore',
    );
  }

  // 6. Missing voice key still resolves via text-only fallback. The director
  // carries no manifest/voice dependency at all, so a fixture with zero audio
  // metadata must still progress and resolve on text alone.
  {
    final fixture = StoryText()
      ..visitors['sample'] = {
        1: {'full.1': 'first line', 'full.2': 'second line'},
      }
      ..visitorArrivals['sample'] = {
        1: const VisitorArrivalMetadata(hour: 10, order: 0),
      };
    final director = _director(fixture);
    final arrival = director.arrivalsForDay(1).single;
    final started = director.begin(arrival) as VisitStarted;
    _expect(
      started.state.currentLine == 'first line',
      'text-only line must be visible',
    );
    director.choose(DoorChoice.open);
    director.advanceLine();
    final progress = director.advanceLine() as VisitProgress;
    _expect(progress.resolved, 'a visit with no voice data must still resolve');
  }

  // 7. Every displayed line matches its raw authored source once drift spans
  // are resolved by the same deterministic function text_build.dart uses —
  // the compiled corpus is never something the raw source didn't say.
  {
    final raw = _loadRawStory();
    resolveDriftSpans(raw);
    var compared = 0;
    for (final name in raw.visitors.keys) {
      for (final day in raw.visitors[name]!.keys) {
        for (final tierKey in raw.visitors[name]![day]!.keys) {
          final rawLine = raw.visitors[name]![day]![tierKey]!;
          final compiledLine = story.visitors[name]?[day]?[tierKey];
          _expect(
            compiledLine == rawLine,
            '$name day $day tier $tierKey drifted between source and compiled '
            'corpus',
          );
          compared++;
        }
      }
    }
    _expect(compared > 0, 'byte-identity check must cover at least one line');
  }

  // 8. NEW — citing an entry against a claimed line returns a genuine confirm
  // or contradiction, not partial, proving the corpus fix closes the loop.
  {
    final director = _director(story);
    final journal = Journal(vocabulary);
    final engine = _engine(journal);
    final arrival = director
        .arrivalsForDay(8)
        .firstWhere((a) => a.visitor == 'neighbour');
    final started = director.begin(arrival) as VisitStarted;
    _expect(
      started.state.currentClaims.any(
        (c) => c.field == 'object' && c.value == 'the sighting',
      ),
      'neighbour day 8 full.1 must carry its authored object=the sighting claim',
    );
    director.choose(DoorChoice.open);
    final contradicting = journal.write(8, {
      'who': 'I',
      'verb': 'saw',
      'object': 'the door',
      'place': 'kitchen',
      'time': 'morning',
    }, 0.1)!;
    final result = director.cite(contradicting.ordinal, true, engine);
    _expect(result != null, 'citing a claimed line must produce a result');
    _expect(
      result!.comparison.kind != WorldComparisonKind.partial,
      'a claimed line must not fall back to partial, got ${result.comparison.kind}',
    );
    _expect(
      result.comparison.kind == WorldComparisonKind.contradiction,
      'a conflicting entry against object=the sighting must contradict, got '
      '${result.comparison.kind}',
    );
    _expect(
      !result.worldConfirms,
      'a contradicted citation must not confirm the world',
    );

    final freshDirector = _director(story);
    final unclaimed = freshDirector
        .arrivalsForDay(1)
        .firstWhere((a) => a.visitor == 'neighbour');
    freshDirector.begin(unclaimed);
    freshDirector.choose(DoorChoice.open);
    freshDirector.advanceLine();
    freshDirector.advanceLine();
    final untouched = journal.write(1, {
      'who': 'I',
      'verb': 'saw',
      'object': 'a form',
      'place': 'kitchen',
      'time': 'morning',
    }, 0.1)!;
    final unclaimedResult = freshDirector.cite(untouched.ordinal, true, engine);
    _expect(
      unclaimedResult!.comparison.kind == WorldComparisonKind.partial,
      'an unclaimed line must still fall back to partial, got '
      '${unclaimedResult.comparison.kind}',
    );
  }

  print(
    'q13 tests passed: ${story.visitors.length} visitors, $totalArrivals arrivals',
  );
}
