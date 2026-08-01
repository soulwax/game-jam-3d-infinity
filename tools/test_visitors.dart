import 'dart:io';

import 'package:quarantine/story/schema.dart';
import 'package:quarantine/story/validate.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/state.dart';

Never _fail(String message) =>
    throw StateError('visitor test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

StoryText _loadStory() {
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
  _expect(director != null, 'authored corpus must build a director');
  return director!;
}

void main() {
  final story = _loadStory();
  final first = _director(story);
  final second = _director(story);

  final signature = <String>[];
  for (var day = 1; day <= 21; day++) {
    signature.addAll(
      first
          .arrivalsForDay(day)
          .map((a) => '${a.day}:${a.hour}:${a.order}:${a.visitor}'),
    );
  }
  final repeat = <String>[];
  for (var day = 1; day <= 21; day++) {
    repeat.addAll(
      second
          .arrivalsForDay(day)
          .map((a) => '${a.day}:${a.hour}:${a.order}:${a.visitor}'),
    );
  }
  _expect(
    signature.join('|') == repeat.join('|'),
    'schedule must be deterministic',
  );

  _expect(
    first.arrivalsForDay(1).map((a) => a.visitor).join(',') ==
        'milkman,ayling,neighbour',
    'Day 1 comes from authored arrivals only',
  );
  _expect(
    first.arrivalsForDay(2).map((a) => a.visitor).join(',') ==
        'postman,nurse,sibling',
    'Day 2 comes from authored arrivals only',
  );
  _expect(
    first.arrivalsForDay(3).map((a) => a.visitor).join(',') ==
        'milkman,tuner,hazmat-boy,child',
    'Day 3 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(4).map((a) => a.visitor).join(',') ==
        'gas-man,engineer,neighbour,twins',
    'Day 4 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(5).map((a) => a.visitor).join(',') ==
        'sibling,caller,warden',
    'Day 5 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(6).map((a) => a.visitor).join(',') ==
        'doctor,hazmat-boy,ragman,stranger',
    'Day 6 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(7).map((a) => a.visitor).join(',') ==
        'milkman,postman,nurse,neighbour',
    'Day 7 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(8).map((a) => a.visitor).join(',') ==
        'clerk,child,warden,neighbour',
    'Day 8 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(9).map((a) => a.visitor).join(',') ==
        'gas-man,sibling,ayling,evacuee',
    'Day 9 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(10).map((a) => a.visitor).join(',') ==
        'caller,engineer,clerk,sibling',
    'Day 10 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(11).map((a) => a.visitor).join(',') ==
        'census,doctor,hazmat-boy,twins',
    'Day 11 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(12).map((a) => a.visitor).join(',') ==
        'evacuee,tuner,neighbour,postman',
    'Day 12 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(13).map((a) => a.visitor).join(',') ==
        'ayling,clerk,warden,stranger',
    'Day 13 respects the authored density cap and arrival order',
  );
  _expect(
    first.arrivalsForDay(14).map((a) => a.visitor).join(',') ==
        'child,census,evacuee,sibling',
    'Day 14 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(15).map((a) => a.visitor).join(',') ==
        'doctor,warden,watchman',
    'Day 15 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(16).map((a) => a.visitor).join(',') ==
        'gas-man,neighbour,widow',
    'Day 16 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(17).map((a) => a.visitor).join(',') ==
        'ayling,postman,stranger,twins',
    'Day 17 respects the authored density cap and arrival order',
  );
  _expect(
    first.arrivalsForDay(18).map((a) => a.visitor).join(',') ==
        'ayling,hazmat-boy,watchman',
    'Day 18 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(19).map((a) => a.visitor).join(',') ==
        'child,sibling,widow',
    'Day 19 order follows explicit authored arrival times',
  );
  _expect(
    first.arrivalsForDay(20).map((a) => a.visitor).join(',') ==
        'caller,ayling,warden,widow',
    'Day 20 respects the authored density cap and arrival order',
  );
  _expect(
    first.arrivalsForDay(21).map((a) => a.visitor).join(',') == 'watchman',
    'Day 21 has its authored final arrival',
  );

  final dayOne = first.arrivalsForDay(1).first;
  final started = first.begin(dayOne) as VisitStarted;
  _expect(
    started.state.tier == VisitTier.full,
    'first contact selects authored full tier',
  );
  final choice = first.choose(DoorChoice.open);
  _expect(choice is VisitChoiceResult, 'choice yields typed result');
  final resumed = _director(story);
  _expect(resumed.restore(first.snapshot), 'active visit restores atomically');
  _expect(
    resumed.active?.arrival == dayOne &&
        resumed.active?.phase == VisitPhase.atDoor &&
        resumed.active?.lineIndex == 0,
    'restored visit preserves arrival, phase, and line index',
  );
  while (resumed.active != null) {
    final progress = resumed.advanceLine();
    _expect(progress is VisitProgress, 'line advancement stays typed');
  }
  _expect(
    resumed.isResolved(dayOne),
    'resolved arrival does not replay after reload',
  );

  final compressedStory = StoryText()
    ..visitors['sample'] = {
      1: {'full.1': 'first'},
      2: {'full.1': 'again', 'compressed.1': 'short'},
    }
    ..visitorArrivals['sample'] = {
      1: const VisitorArrivalMetadata(hour: 10, order: 0),
      2: const VisitorArrivalMetadata(hour: 14, order: 0),
    };
  final compressed = _director(compressedStory);
  final initial =
      compressed.begin(compressed.arrivalsForDay(1).single) as VisitStarted;
  _expect(
    initial.state.currentLine == 'first',
    'lines remain authored verbatim',
  );
  compressed.choose(DoorChoice.open);
  compressed.advanceLine();
  final later =
      compressed.begin(compressed.arrivalsForDay(2).single) as VisitStarted;
  _expect(
    later.state.tier == VisitTier.compressed,
    'repeat contact selects authored compressed tier',
  );

  final malformed = StoryText()
    ..visitors['broken'] = {
      1: {'full.2': 'gap'},
    };
  final rejected = VisitorDirector.build(malformed);
  _expect(
    rejected is VisitorUnavailable &&
        rejected.issue.code == VisitorIssueCode.missingTierLines,
    'malformed authored tiers must return a typed issue',
  );
  _expect(
    first.begin(const VisitArrival(visitor: 'none', day: 1, hour: 0, order: 0))
        is VisitorUnavailable,
    'missing arrival must return a typed issue',
  );
  // §56.1 / Q25: the off tier namespace, build-time shape validation. Each
  // fixture clones the real, complete corpus and adds one extra visitor, so
  // `validateStory` reaches the tier-shape check instead of failing earlier
  // on unrelated completeness (missing broadcast days, and so on).
  {
    StoryText withSample(Map<int, Map<String, String>> sampleDays) {
      final clone = StoryText()
        ..broadcasts.addAll(story.broadcasts)
        ..vocabulary.addAll(story.vocabulary)
        ..documents.addAll(story.documents)
        ..street.addAll(story.street)
        ..unverifiables.addAll(story.unverifiables)
        ..nights.addAll(story.nights)
        ..endings.addAll(story.endings)
        ..records.addAll(story.records)
        ..cues.addAll(story.cues)
        ..claims.addAll(story.claims)
        ..visitors.addAll(story.visitors)
        ..visitorArrivals.addAll(story.visitorArrivals)
        ..visitorAmbient.addAll(story.visitorAmbient);
      clone.visitors['sample'] = sampleDays;
      return clone;
    }

    bool rejects(StoryText candidate) {
      try {
        validateStory(candidate);
        return false;
      } on TextError {
        return true;
      }
    }

    final gap = withSample({
      1: {'full.1': 'a', 'off.2': 'b'},
    });
    _expect(rejects(gap), 'a non-contiguous off tier must fail validation');

    final tooLate = withSample({
      15: {'full.1': 'a', 'off.1': 'b'},
    });
    _expect(rejects(tooLate), 'an off tier past day 14 must fail validation');

    final orphan = withSample({
      1: {'compressed.1': 'a', 'off.1': 'b'},
    });
    _expect(
      rejects(orphan),
      'an off tier without a full tier must fail validation',
    );

    final valid = withSample({
      1: {'full.1': 'a', 'off.1': 'b'},
    });
    validateStory(valid);
  }

  // Director substitution: a stand-in arrives `off` on an eligible day, falls
  // back to the ordinary rules everywhere else.
  {
    final story = StoryText()
      ..visitors['sample'] = {
        1: {'full.1': 'full line', 'off.1': 'off line'},
        15: {'compressed.1': 'compressed line'},
      }
      ..visitorArrivals['sample'] = {
        1: const VisitorArrivalMetadata(hour: 10, order: 0),
        15: const VisitorArrivalMetadata(hour: 10, order: 0),
      };

    final plain = _director(story);
    final plainStart = plain.begin(plain.arrivalsForDay(1).single) as VisitStarted;
    _expect(
      plainStart.state.tier == VisitTier.full,
      'with no stand-in draw the director still prefers full',
    );

    final standIn = _director(story)..standIns = {'sample'};
    final offStart = standIn.begin(standIn.arrivalsForDay(1).single) as VisitStarted;
    _expect(
      offStart.state.tier == VisitTier.off && offStart.state.currentLine == 'off line',
      'a stand-in visitor arrives off on an eligible full-preferred day',
    );
    standIn.choose(DoorChoice.open);
    while (standIn.active != null) {
      standIn.advanceLine();
    }
    final week3 = standIn.begin(standIn.arrivalsForDay(15).single) as VisitStarted;
    _expect(
      week3.state.tier == VisitTier.compressed,
      'week 3 still forces compressed even for a stand-in',
    );
  }

  print('visitor tests passed: ${signature.length} authored arrivals');
}
