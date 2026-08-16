import 'package:quarantine/story/narrative_state.dart';
import 'screenplay.dart';

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
  final StoryScreenplay screenplay;

  TimelineProgressionCoordinator({
    NarrativeState? state,
    required this.screenplay,
  }) : state = state ?? NarrativeState();

  /// The authored day jobs when a compiled screenplay is available. The
  /// screenplay owns scene titles, branch prompts, and beat text; this view
  /// adapts those facts for legacy timeline consumers without copying prose.
  List<DayDramaticJob> get dramaticJobs {
    final scenes = [...screenplay.scenes]
      ..sort((a, b) => a.day.compareTo(b.day));
    return [
      for (final scene in scenes)
        DayDramaticJob(
          day: scene.day,
          title: scene.title,
          humanJob: scene.beats.map((beat) => beat.text).join(' '),
          playerDecision: scene.branches.isEmpty
              ? 'Observe the authored beat'
              : scene.branches.first.prompt,
        ),
    ];
  }

  DayDramaticJob jobForDay(int day) => dramaticJobs.firstWhere(
    (job) => job.day == day,
    orElse: () => throw StateError('screenplay has no day $day'),
  );

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
      closingText =
          'The quarantine period completes. The domestic record is filed.';
    } else if (endingType == 'rupture') {
      closingText =
          'The door remains sealed. A familiar phrase echoes without attribution.';
    } else if (endingType == 'synchronisation') {
      closingText =
          'Truth was distributed across flawed people; an honest correction belongs in a true record.';
    }

    return EndingTextureSummary(
      endingType: endingType,
      measuredFacts: measuredFacts,
      relationalResidues: relationalResidues,
      closingTextureText: closingText,
    );
  }
}
