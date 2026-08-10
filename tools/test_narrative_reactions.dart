import 'dart:io';

import 'package:quarantine/game/save.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/story/narrative_state.dart';
import 'package:quarantine/story/schema.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/state.dart';

Never _fail(String message) =>
    throw StateError('narrative reaction test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  final sources = <String, String>{};
  for (final file in Directory(
    'text',
  ).listSync(recursive: true).whereType<File>()) {
    if (file.path.endsWith('.txt')) {
      sources[file.path] = file.readAsStringSync();
    }
  }
  final story = parseStory(sources);
  _expect(story.reactions.length == 12, 'twelve authored beats are present');
  _expect(
    story.residues.length == 14,
    'fourteen authored material residues are present',
  );
  _expect(
    story.residues['denise.pears=taken:bread-loaf']?.contains('pear') == true,
    'pear residue is bound to an existing focus id',
  );

  final built = VisitorDirector.build(story);
  _expect(built is VisitorDirectorBuilt, 'director builds with reactions');
  final director = (built as VisitorDirectorBuilt).director;
  final arrival = director
      .arrivalsForDay(2)
      .firstWhere((candidate) => candidate.visitor == 'sibling');
  _expect(director.begin(arrival) is VisitStarted, 'sibling visit starts');
  _expect(director.choose(DoorChoice.open) is VisitChoiceResult, 'door opens');
  for (var i = 0; i < 3; i++) {
    _expect(director.advanceLine() is VisitProgress, 'line $i advances');
  }
  final reaction = director.currentReaction;
  _expect(reaction?.id == 'pears', 'pear beat is due on line four');
  final choice = director.chooseReaction('leave');
  _expect(choice is VisitReactionResult, 'choice is accepted');
  final result = choice as VisitReactionResult;
  _expect(
    result.option.effects['denise.pears'] == 'left',
    'choice effect stored',
  );

  final narrative = NarrativeState();
  narrative.apply(result.reaction, result.option);
  _expect(
    narrative.hasFlag('denise.pears', 'left'),
    'narrative remembers the choice',
  );
  final restoredNarrative = NarrativeState.tryFromJson(narrative.toJson());
  _expect(
    restoredNarrative?.choiceFor('pears') == 'leave',
    'narrative round-trips',
  );

  final revisionDirector =
      (VisitorDirector.build(story) as VisitorDirectorBuilt).director;
  final revisionArrival = revisionDirector
      .arrivalsForDay(14)
      .firstWhere((candidate) => candidate.visitor == 'sibling');
  revisionDirector.begin(revisionArrival);
  revisionDirector.choose(DoorChoice.open);
  _expect(
    revisionDirector.advanceLine() is VisitProgress,
    'revision prelude advances',
  );
  _expect(
    revisionDirector.currentReaction?.id == 'revision',
    'Denise revision beat is due after her admission',
  );
  final revisionChoice = revisionDirector.chooseReaction('accept');
  _expect(
    revisionChoice is VisitReactionResult &&
        revisionChoice.option.effects['denise.revision'] == 'accepted',
    'accepting Denise persists the human posture',
  );

  final stranger = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'stranger' &&
        reaction.day == 17 &&
        reaction.tier == 'compressed' &&
        reaction.ordinal == 1,
  );
  _expect(stranger.id == 'case', 'stranger case beat is authored');
  _expect(stranger.options.length == 3, 'stranger case has three choices');

  final hallow = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'caller' &&
        reaction.day == 5 &&
        reaction.tier == 'full' &&
        reaction.ordinal == 3,
  );
  _expect(hallow.id == 'dish', 'Hallow dish beat is authored');
  _expect(hallow.options.length == 3, 'Hallow dish has three choices');
  _expect(
    story.variants.containsKey('hallow-20-dish-returned'),
    'Hallow closure variant is authored',
  );
  final ayling = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'ayling' &&
        reaction.day == 17 &&
        reaction.tier == 'compressed' &&
        reaction.ordinal == 2,
  );
  _expect(ayling.id == 'clipboard', 'Ayling clipboard beat is authored');
  _expect(ayling.options.length == 3, 'Ayling clipboard has three choices');
  _expect(
    story.variants.containsKey('ayling-20-trusted'),
    'Ayling trust callback is authored',
  );
  final ronnie = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'hazmat-boy' &&
        reaction.day == 11 &&
        reaction.tier == 'full' &&
        reaction.ordinal == 1,
  );
  _expect(ronnie.id == 'word', 'Ronnie word beat is authored');
  _expect(ronnie.options.length == 3, 'Ronnie word has three choices');
  _expect(
    story.variants.containsKey('ronnie-18-name'),
    'Ronnie name callback is authored',
  );
  final attercliffe = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'widow' &&
        reaction.day == 16 &&
        reaction.tier == 'full' &&
        reaction.ordinal == 2,
  );
  _expect(attercliffe.id == 'plate', 'Attercliffe plate beat is authored');
  _expect(
    attercliffe.options.length == 3,
    'Attercliffe plate has three choices',
  );
  _expect(
    story.variants.containsKey('attercliffe-20-plate-kept'),
    'Attercliffe plate callback is authored',
  );
  final marchant = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'doctor' &&
        reaction.day == 6 &&
        reaction.tier == 'full' &&
        reaction.ordinal == 4,
  );
  _expect(marchant.id == 'entry', 'Marchant entry beat is authored');
  _expect(marchant.options.length == 3, 'Marchant entry has three choices');
  _expect(
    story.variants.containsKey('marchant-15-entry-invited'),
    'Marchant entry callback is authored',
  );
  final iris = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'neighbour' &&
        reaction.day == 7 &&
        reaction.tier == 'full' &&
        reaction.ordinal == 5,
  );
  _expect(iris.id == 'wall', 'Iris wall beat is authored');
  _expect(iris.options.length == 3, 'Iris wall has three choices');
  _expect(
    story.variants.containsKey('iris-20-wall-promised'),
    'Iris wall callback is authored',
  );
  final ashworth = story.reactions.values.firstWhere(
    (reaction) =>
        reaction.visitor == 'stranger' &&
        reaction.day == 6 &&
        reaction.tier == 'full' &&
        reaction.ordinal == 5,
  );
  _expect(ashworth.id == 'detail', 'Ashworth detail beat is authored');
  _expect(ashworth.options.length == 3, 'Ashworth detail has three choices');
  _expect(
    story.variants.containsKey('ashworth-13-detail-accepted'),
    'Ashworth detail callback is authored',
  );

  final vocabulary = Vocabulary({
    for (final field in vocabularyFields) field: story.vocabulary[field]!,
  });
  final session = GameSession.create(vocabulary: vocabulary);
  final quotedEntry = session.journal.write(1, {
    'who': 'I',
    'verb': 'saw',
    'object': 'the door',
    'place': 'kitchen',
    'time': 'morning',
  }, 0.1)!;
  session.journal.correct(quotedEntry.ordinal, {
    'who': 'I',
    'verb': 'heard',
    'object': 'the door',
    'place': 'kitchen',
    'time': 'morning',
  }, 0.1);
  final frozenQuote = session.freezeJournalQuote('stranger-17-eileen-case')!;
  _expect(
    frozenQuote.ordinal == quotedEntry.ordinal && frozenQuote.revision == 1,
    'case quote selects the current corrected revision',
  );
  final frozenText = frozenQuote.text;
  session.journal.correct(quotedEntry.ordinal, {
    'who': 'I',
    'verb': 'wrote down',
    'object': 'the door',
    'place': 'kitchen',
    'time': 'morning',
  }, 0.1);
  _expect(
    session.freezeJournalQuote('stranger-17-eileen-case')!.text == frozenText,
    'a later journal revision cannot rewrite the case note',
  );
  _expect(
    session.applyNarrativeReaction(result.reaction, result.option),
    'session accepts reaction',
  );
  session.recordVisitorFacts([
    const VisitorFact(
      kind: VisitorFactKind.visitorIgnored,
      visitor: 'sibling',
      day: 2,
    ),
  ]);
  _expect(
    session.narrative.hasFlag('ignored.sibling.2', 'true'),
    'ignored visit leaves a remembered residue flag',
  );
  final snapshot = SaveCodec().decode(
    SaveCodec().encode(session.toSaveSnapshot()),
  );
  final resumed = GameSession.restore(
    vocabulary: vocabulary,
    snapshot: snapshot,
  );
  _expect(
    resumed.narrative.hasFlag('denise.pears', 'left'),
    'save preserves reaction memory',
  );
  _expect(
    resumed.narrative.quoteFor('stranger-17-eileen-case')?.text == frozenText,
    'save preserves the frozen quote text',
  );
  _expect(
    resumed.narrative.hasFlag('ignored.sibling.2', 'true'),
    'save preserves ignored-visit residue',
  );

  final callbackDirector =
      (VisitorDirector.build(story) as VisitorDirectorBuilt).director
        ..narrative = NarrativeState(flags: {'sylvia.pencil': 'given'});
  final callbackArrival = callbackDirector
      .arrivalsForDay(19)
      .firstWhere((candidate) => candidate.visitor == 'child');
  final callbackStart = callbackDirector.begin(callbackArrival) as VisitStarted;
  _expect(
    callbackStart.state.currentLine ==
        "I put the pencil somewhere safe. I don't know where safe is yet.",
    'given pencil selects Sylvia callback',
  );
  final defaultDirector =
      (VisitorDirector.build(story) as VisitorDirectorBuilt).director;
  final defaultStart = defaultDirector.begin(callbackArrival) as VisitStarted;
  _expect(
    defaultStart.state.currentLine ==
        "I've still got the pencil. I've not used it up. I'm keeping it for something good.",
    'unknown pencil keeps the authored default',
  );
  print('narrative reaction tests passed: ${story.reactions.length} beats');
}
