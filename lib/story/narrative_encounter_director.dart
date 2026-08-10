import 'package:quarantine/story/narrative_state.dart';

/// Available visitor IDs across the 21-day quarantine setting.
enum VisitorId {
  denise,
  sylvia,
  sowerby,
  courier,
  inspector,
}

/// Encounter decision structure for visitor threshold interactions.
class EncounterChoice {
  final String choiceId;
  final String label;
  final Map<String, String> effects;
  final String replyLine;

  const EncounterChoice({
    required this.choiceId,
    required this.label,
    required this.effects,
    required this.replyLine,
  });

  Map<String, dynamic> toJson() => {
        'choiceId': choiceId,
        'label': label,
        'effects': effects,
        'replyLine': replyLine,
      };
}

/// Active threshold encounter beat with options and callback replacements.
class ActiveEncounter {
  final String encounterId;
  final VisitorId visitor;
  final int day;
  final String promptLine;
  final List<EncounterChoice> choices;

  const ActiveEncounter({
    required this.encounterId,
    required this.visitor,
    required this.day,
    required this.promptLine,
    required this.choices,
  });

  Map<String, dynamic> toJson() => {
        'encounterId': encounterId,
        'visitor': visitor.name,
        'day': day,
        'promptLine': promptLine,
        'choices': choices.map((c) => c.toJson()).toList(),
      };
}

/// Section 21.8 / 21.13 Narrative Encounter Director.
class NarrativeEncounterDirector {
  final NarrativeState state;

  NarrativeEncounterDirector({NarrativeState? state})
      : state = state ?? NarrativeState();

  /// Resolves the canonical visitor encounter for a given quarantine day.
  ActiveEncounter? resolveEncounter(int day) {
    switch (day) {
      case 2:
        return const ActiveEncounter(
          encounterId: 'sibling-02-pears',
          visitor: VisitorId.denise,
          day: 2,
          promptLine: 'I brought the ration parcel and four pears from the back garden.',
          choices: [
            EncounterChoice(
              choiceId: 'take',
              label: 'Take the pears in',
              effects: {'denise.pears': 'taken', 'residue.pears': 'sideboard'},
              replyLine: 'Good. Mind the bruised one.',
            ),
            EncounterChoice(
              choiceId: 'leave',
              label: 'Leave them on the step',
              effects: {'denise.pears': 'left', 'residue.pears': 'threshold'},
              replyLine: 'Right. I only thought you might want them.',
            ),
          ],
        );
      case 3:
        return const ActiveEncounter(
          encounterId: 'sylvia-03-certificate',
          visitor: VisitorId.sylvia,
          day: 3,
          promptLine: 'Ayling, sign the exemption slip. The mill-house cannot idle.',
          choices: [
            EncounterChoice(
              choiceId: 'grant',
              label: 'Sign the exemption certificate',
              effects: {'sylvia.certificate': 'granted'},
              replyLine: 'Sensible. We need the boilers running.',
            ),
            EncounterChoice(
              choiceId: 'refuse',
              label: 'Refuse under Quarantine Order 14-B',
              effects: {'sylvia.certificate': 'refused'},
              replyLine: 'You always did mistake rigidity for duty.',
            ),
          ],
        );
      case 5:
        return const ActiveEncounter(
          encounterId: 'sowerby-05-coal',
          visitor: VisitorId.sowerby,
          day: 5,
          promptLine: 'Delivered two sacks of anthracite. Latches on the cellar shutter are loose.',
          choices: [
            EncounterChoice(
              choiceId: 'tip',
              label: 'Offer payment through the letterbox',
              effects: {'sowerby.tip': 'paid'},
              replyLine: 'Obliged. Keep that cellar bolt shot.',
            ),
            EncounterChoice(
              choiceId: 'dismiss',
              label: 'Acknowledge and instruct to leave',
              effects: {'sowerby.tip': 'none'},
              replyLine: 'Suit yourself. The frost gets in either way.',
            ),
          ],
        );
      default:
        return null;
    }
  }

  /// Commits chosen response to NarrativeState.
  void commitChoice(ActiveEncounter encounter, EncounterChoice choice) {
    state.flags['encounter.${encounter.encounterId}'] = choice.choiceId;
    for (final effect in choice.effects.entries) {
      state.flags[effect.key] = effect.value;
    }
  }

  /// Resolves conditional line replacements based on prior committed facts.
  String resolveCallbackLine({
    required String defaultLine,
    required String flagKey,
    required String expectedValue,
    required String replacementLine,
  }) {
    if (state.hasFlag(flagKey, expectedValue)) {
      return replacementLine;
    }
    return defaultLine;
  }
}
