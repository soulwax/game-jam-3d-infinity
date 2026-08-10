import 'package:quarantine/story/narrative_state.dart';

/// Representation of a single day's dramatic purpose and decision in the 21-day timeline.
class DayDramaticJob {
  final int day;
  final String title;
  final String humanJob;
  final String playerDecision;

  const DayDramaticJob({
    required this.day,
    required this.title,
    required this.humanJob,
    required this.playerDecision,
  });

  Map<String, dynamic> toJson() => {
        'day': day,
        'title': title,
        'humanJob': humanJob,
        'playerDecision': playerDecision,
      };
}

/// Evaluated ending presentation facts with human memory (Section 21.12).
class EndingTextureSummary {
  final String endingType; // compliance, rupture, synchronisation
  final List<String> measuredFacts;
  final List<String> relationalResidues;
  final String closingTextureText;

  const EndingTextureSummary({
    required this.endingType,
    required this.measuredFacts,
    required this.relationalResidues,
    required this.closingTextureText,
  });

  Map<String, dynamic> toJson() => {
        'endingType': endingType,
        'measuredFacts': measuredFacts,
        'relationalResidues': relationalResidues,
        'closingTextureText': closingTextureText,
      };
}

/// 21-Day Dramatic Timeline Progression & Ending Texture Coordinator (Section 21.10 / 21.12).
class TimelineProgressionCoordinator {
  final NarrativeState state;

  TimelineProgressionCoordinator({NarrativeState? state})
      : state = state ?? NarrativeState();

  static const List<DayDramaticJob> canonical21Days = [
    DayDramaticJob(
      day: 1,
      title: 'Hospitality',
      humanJob: 'Establish mundane neighborhood routines and wall-knock compact',
      playerDecision: 'Accept or refuse tea/assistance',
    ),
    DayDramaticJob(
      day: 2,
      title: 'Family Evidence',
      humanJob: 'Denise delivers ration parcel and domestic facts',
      playerDecision: 'Take or leave pears on threshold',
    ),
    DayDramaticJob(
      day: 3,
      title: 'Being Useful',
      humanJob: 'Sylvia requests window map pencil; Prentice appointment',
      playerDecision: 'Grant or refuse exemption certificate',
    ),
    DayDramaticJob(
      day: 4,
      title: 'Repair',
      humanJob: 'Obsolete but workable systems; wall plate tracing',
      playerDecision: 'Trace dead line or keep outside',
    ),
    DayDramaticJob(
      day: 5,
      title: 'Ownership of a Record',
      humanJob: 'Hallow heirloom inquiry; Sowerby coal delivery',
      playerDecision: 'Show card/record or refuse',
    ),
    DayDramaticJob(
      day: 6,
      title: 'Being Known',
      humanJob: 'Marchant memory questions; Ashworth household knowledge',
      playerDecision: 'Accept identifying detail',
    ),
    DayDramaticJob(
      day: 7,
      title: 'Promises',
      humanJob: 'Week-1 routines close; future journal entry appears',
      playerDecision: 'Keep wall knock or reply promise',
    ),
    DayDramaticJob(
      day: 8,
      title: 'Wording Travels',
      humanJob: 'Sighting phrases circulate among neighbors',
      playerDecision: 'Cite announcement or decline claim',
    ),
    DayDramaticJob(
      day: 9,
      title: 'Performance',
      humanJob: 'Allowance costs and billeting descriptions',
      playerDecision: 'Offer practical aid or preserve fuel/gas',
    ),
    DayDramaticJob(
      day: 10,
      title: 'The Account',
      humanJob: 'Incompatible sighting facts from outside',
      playerDecision: 'Write detail, mark uncertain, or omit',
    ),
    DayDramaticJob(
      day: 11,
      title: 'Categories',
      humanJob: 'Household counting; Ronnie script pause',
      playerDecision: 'Ask direct question or allow script end',
    ),
    DayDramaticJob(
      day: 12,
      title: 'Circulation',
      humanJob: 'Ration rumors admit attribution',
      playerDecision: 'Confront source or treat as rumor',
    ),
    DayDramaticJob(
      day: 13,
      title: 'Mercy in Correction',
      humanJob: 'Ayling accepts correction so action continues',
      playerDecision: 'Decide which document to present',
    ),
    DayDramaticJob(
      day: 14,
      title: 'Honest Revision',
      humanJob: 'Denise crossed-out list; Week-2 emotional climax',
      playerDecision: 'Accept concession or prosecute details',
    ),
    DayDramaticJob(
      day: 15,
      title: 'Inherited Answers',
      humanJob: 'Carrying forward past weeks; door status logs',
      playerDecision: 'Correct inherited answer or conserve effort',
    ),
    DayDramaticJob(
      day: 16,
      title: 'Who Counts as Present',
      humanJob: 'Lit empty house observations',
      playerDecision: 'Challenge compassionate fiction',
    ),
    DayDramaticJob(
      day: 17,
      title: 'Names and Objects',
      humanJob: 'Clipboard handoff; B-A-C-H four-note piano sequence',
      playerDecision: 'Accept or refuse responsibility items',
    ),
    DayDramaticJob(
      day: 18,
      title: 'Public Event, Private Language',
      humanJob: 'Street crowd movements; omitted sector broadcast',
      playerDecision: 'Acknowledge missing details',
    ),
    DayDramaticJob(
      day: 19,
      title: 'What Care Repeats',
      humanJob: 'Physical residues visited during journal replays',
      playerDecision: 'Revisit physical residues',
    ),
    DayDramaticJob(
      day: 20,
      title: 'Unfinished Business',
      humanJob: 'Closing human threads: dish, form, shift, wall knock',
      playerDecision: 'Finalize domestic closures',
    ),
    DayDramaticJob(
      day: 21,
      title: 'Release',
      humanJob: 'Board closing acknowledgment; the record closes',
      playerDecision: 'End sequence texture return',
    ),
  ];

  /// Assembles the ending texture presentation from committed narrative state facts.
  EndingTextureSummary assembleEndingTexture(String endingType) {
    final measuredFacts = <String>[
      'Eight rooms accounted under Order 14-B.',
      'Shutter bolts and door thresholds inspected.',
    ];

    final relationalResidues = <String>[];
    if (state.hasFlag('denise.pears', 'taken')) {
      relationalResidues.add('Four pears placed on the sideboard.');
    } else if (state.hasFlag('denise.pears', 'left')) {
      relationalResidues.add('Pears left on the threshold step.');
    }

    if (state.hasFlag('sylvia.certificate', 'granted')) {
      relationalResidues.add('Exemption slip signed for the mill boilers.');
    } else if (state.hasFlag('sylvia.certificate', 'refused')) {
      relationalResidues.add('Exemption refused under quarantine protocol.');
    }

    String closingText = 'The record closes.';
    if (endingType == 'compliance') {
      closingText = 'The quarantine period completes. The domestic record is filed.';
    } else if (endingType == 'rupture') {
      closingText = 'The door remains sealed. A familiar phrase echoes without attribution.';
    } else if (endingType == 'synchronisation') {
      closingText = 'Truth was distributed across flawed people; an honest correction belongs in a true record.';
    }

    return EndingTextureSummary(
      endingType: endingType,
      measuredFacts: measuredFacts,
      relationalResidues: relationalResidues,
      closingTextureText: closingText,
    );
  }
}
