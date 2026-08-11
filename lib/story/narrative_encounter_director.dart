import 'package:quarantine/story/narrative_state.dart';

/// Available visitor IDs across the 21-day quarantine setting.
enum VisitorId {
  denise,
  sylvia,
  sowerby,
  courier,
  inspector,
  mrsAshworth,
  reverendColclough,
  drHallow,
  marchant,
  stranger,
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

/// Section 21.8 / 21.13 / 23.2 Narrative Encounter Director.
///
/// Implements the complete 21-day narrative encounter matrix.
class NarrativeEncounterDirector {
  final NarrativeState state;

  NarrativeEncounterDirector({NarrativeState? state})
      : state = state ?? NarrativeState();

  /// Resolves the canonical visitor encounter for a given quarantine day (1..21).
  ActiveEncounter? resolveEncounter(int day) {
    switch (day) {
      case 1:
        return const ActiveEncounter(
          encounterId: 'ashworth-01-welcome',
          visitor: VisitorId.mrsAshworth,
          day: 1,
          promptLine: 'Ayling? It is Mrs Ashworth. I left a jug of mutton broth by the boot-scraper. The order says we tap three times if the stove smokes.',
          choices: [
            EncounterChoice(
              choiceId: 'accept',
              label: 'Accept the broth and acknowledge the wall-tap compact',
              effects: {'ashworth.compact': 'accepted', 'residue.broth': 'threshold'},
              replyLine: 'Good boy. Keep the draught-excluder tight against the front hall.',
            ),
            EncounterChoice(
              choiceId: 'decline',
              label: 'Politely decline neighborly assistance',
              effects: {'ashworth.compact': 'declined'},
              replyLine: 'Very well. Pride always was the Ayling way.',
            ),
          ],
        );
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
      case 4:
        return const ActiveEncounter(
          encounterId: 'marchant-04-line',
          visitor: VisitorId.marchant,
          day: 4,
          promptLine: 'Post Office Lines. Need to verify the copper drop-wire on your chimney breast.',
          choices: [
            EncounterChoice(
              choiceId: 'allow',
              label: 'Confirm the wire is intact from the window',
              effects: {'marchant.wire': 'inspected'},
              replyLine: 'Signal is humming clear enough. Keep away from the lead flashing.',
            ),
            EncounterChoice(
              choiceId: 'dismiss',
              label: 'State the house is sealed and dismiss inspector',
              effects: {'marchant.wire': 'refused'},
              replyLine: 'Your line, your fault if the exchange cuts you off.',
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
              effects: {'sowerby.tip': 'paid', 'residue.coal': 'cellar'},
              replyLine: 'Obliged. Keep that cellar bolt shot.',
            ),
            EncounterChoice(
              choiceId: 'dismiss',
              label: 'Acknowledge and instruct to leave',
              effects: {'sowerby.tip': 'none', 'residue.coal': 'cellar'},
              replyLine: 'Suit yourself. The frost gets in either way.',
            ),
          ],
        );
      case 6:
        return const ActiveEncounter(
          encounterId: 'hallow-06-health',
          visitor: VisitorId.drHallow,
          day: 6,
          promptLine: 'Dr Hallow. Hold your hand against the glass pane so I may see the tremor.',
          choices: [
            EncounterChoice(
              choiceId: 'comply',
              label: 'Press hand against the window pane',
              effects: {'hallow.tremor': 'normal', 'truth.vitality': 'stable'},
              replyLine: 'Nails are clear. Do not let the coal gas pool near your bed.',
            ),
            EncounterChoice(
              choiceId: 'refuse',
              label: 'Step back into the shadow of the hall',
              effects: {'hallow.tremor': 'concealed', 'truth.vitality': 'suspect'},
              replyLine: 'Hiding only makes the parish ledger harsher.',
            ),
          ],
        );
      case 7:
        return const ActiveEncounter(
          encounterId: 'ashworth-07-compact',
          visitor: VisitorId.mrsAshworth,
          day: 7,
          promptLine: 'First week done, Ayling. Did you hear the tapping at dawn through the chimney flue?',
          choices: [
            EncounterChoice(
              choiceId: 'heard',
              label: 'Confirm hearing the rhythmic wall taps',
              effects: {'ashworth.taps': 'confirmed', 'truth.flue': 'open'},
              replyLine: 'It was three beats, then two. As long as you answer, I know you are above ground.',
            ),
            EncounterChoice(
              choiceId: 'silence',
              label: 'Claim the house was completely silent',
              effects: {'ashworth.taps': 'denied', 'truth.flue': 'disputed'},
              replyLine: 'Then there is someone else walking in the terrace crawlway.',
            ),
          ],
        );
      case 8:
        return const ActiveEncounter(
          encounterId: 'courier-08-dispatch',
          visitor: VisitorId.courier,
          day: 8,
          promptLine: 'Telegram from the Ministry District Bureau. Slipped under the draught runner.',
          choices: [
            EncounterChoice(
              choiceId: 'open',
              label: 'Read the armistice adjustment notice',
              effects: {'telegram.08': 'read', 'residue.telegram': 'hall_floor'},
              replyLine: 'No signature needed. All rations reduced by one dram starting Tuesday.',
            ),
            EncounterChoice(
              choiceId: 'burn',
              label: 'Tear open without reading and place in grate',
              effects: {'telegram.08': 'burned', 'residue.telegram': 'ashes'},
              replyLine: 'Makes no difference to the depot. What is ordered is ordered.',
            ),
          ],
        );
      case 9:
        return const ActiveEncounter(
          encounterId: 'denise-09-shawl',
          visitor: VisitorId.denise,
          day: 9,
          promptLine: 'I found mother’s tartan shawl in the chest. You always said she left it in Leeds.',
          choices: [
            EncounterChoice(
              choiceId: 'concede',
              label: 'Admit your memory was mistaken',
              effects: {'denise.memory': 'conceded', 'truth.shawl': 'home'},
              replyLine: 'The house holds things longer than we do.',
            ),
            EncounterChoice(
              choiceId: 'insist',
              label: 'Insist Leeds was where she died',
              effects: {'denise.memory': 'disputed', 'truth.shawl': 'leeds'},
              replyLine: 'Look at the label stitching then. Look at it tonight.',
            ),
          ],
        );
      case 10:
        return const ActiveEncounter(
          encounterId: 'sylvia-10-requisition',
          visitor: VisitorId.sylvia,
          day: 10,
          promptLine: 'The district council needs the spare room for billeting logistics. I hold the town key.',
          choices: [
            EncounterChoice(
              choiceId: 'surrender_key',
              label: 'Pass the spare room key through the letterbox',
              effects: {'sylvia.spare_room': 'accessible', 'residue.key': 'given'},
              replyLine: 'Order is maintained when each man remembers his place.',
            ),
            EncounterChoice(
              choiceId: 'withhold',
              label: 'Refuse entry to the upper storey',
              effects: {'sylvia.spare_room': 'sealed', 'residue.key': 'held'},
              replyLine: 'When the quarantine lifts, you will answer for every locked latch.',
            ),
          ],
        );
      case 11:
        return const ActiveEncounter(
          encounterId: 'colclough-11-vigil',
          visitor: VisitorId.reverendColclough,
          day: 11,
          promptLine: 'Reverend Colclough. We are reciting the Names of the Fallen across the hedge. Shall I include Leonard?',
          choices: [
            EncounterChoice(
              choiceId: 'include',
              label: 'Give Leonard’s battalion and rank',
              effects: {'colclough.leonard': 'read', 'truth.leonard': 'remembered'},
              replyLine: 'He is entered on the vellum roll. God preserve what remains.',
            ),
            EncounterChoice(
              choiceId: 'omit',
              label: 'Ask for no names to be spoken at your door',
              effects: {'colclough.leonard': 'omitted', 'truth.leonard': 'unspoken'},
              replyLine: 'Silence does not make the dead less departed, Ayling.',
            ),
          ],
        );
      case 12:
        return const ActiveEncounter(
          encounterId: 'inspector-12-seals',
          visitor: VisitorId.inspector,
          day: 12,
          promptLine: 'Ministry Sanitary Guard. Inspection of outer wax seals and window restrictors.',
          choices: [
            EncounterChoice(
              choiceId: 'affirm',
              label: 'Declare all eight restrictors secure',
              effects: {'inspector.seals': 'passed', 'truth.seals': 'intact'},
              replyLine: 'Seals verified intact. Red band remains on your doorpost.',
            ),
            EncounterChoice(
              choiceId: 'report_breach',
              label: 'Report a cracked seal on the kitchen window',
              effects: {'inspector.seals': 'breached', 'truth.seals': 'compromised'},
              replyLine: 'Noted in the red book. Your isolation clock resets four days.',
            ),
          ],
        );
      case 13:
        return const ActiveEncounter(
          encounterId: 'sowerby-13-paraffin',
          visitor: VisitorId.sowerby,
          day: 13,
          promptLine: 'Got one gallon of paraffin. Town supply is rationed tight since the fire at the wharf.',
          choices: [
            EncounterChoice(
              choiceId: 'take_fuel',
              label: 'Accept the paraffin tin',
              effects: {'sowerby.paraffin': 'received', 'residue.paraffin': 'scullery'},
              replyLine: 'Do not spill a drop on the floorboards; it eats the bitumen.',
            ),
            EncounterChoice(
              choiceId: 'refuse_fuel',
              label: 'Rely on existing candle stock',
              effects: {'sowerby.paraffin': 'refused'},
              replyLine: 'Your dark to sit in, not mine.',
            ),
          ],
        );
      case 14:
        return const ActiveEncounter(
          encounterId: 'ashworth-14-rhythm',
          visitor: VisitorId.mrsAshworth,
          day: 14,
          promptLine: 'You tapped four times last night, Ayling. The code was only ever three.',
          choices: [
            EncounterChoice(
              choiceId: 'explain',
              label: 'Explain it was the chimney damper knocking in the wind',
              effects: {'ashworth.rhythm': 'wind_explained'},
              replyLine: 'Wind does not tap in triplets with a pause for breath.',
            ),
            EncounterChoice(
              choiceId: 'admit',
              label: 'Admit you were checking if she still answered',
              effects: {'ashworth.rhythm': 'checked_comfort'},
              replyLine: 'I am here. As long as the wall stays warm.',
            ),
          ],
        );
      case 15:
        return const ActiveEncounter(
          encounterId: 'stranger-15-rain',
          visitor: VisitorId.stranger,
          day: 15,
          promptLine: 'Is this the house of Thomas Ayling? Open the glass. I have the papers from the canal basin.',
          choices: [
            EncounterChoice(
              choiceId: 'speak',
              label: 'Demand identification through the letterbox',
              effects: {'stranger.15': 'interrogated', 'truth.canal': 'discovered'},
              replyLine: 'Ask your sister what was loaded on Barge 4.',
            ),
            EncounterChoice(
              choiceId: 'silence',
              label: 'Maintain total silence until footsteps retreat',
              effects: {'stranger.15': 'evaded', 'truth.canal': 'ignored'},
              replyLine: '...(heavy footsteps splash down the gravel path)...',
            ),
          ],
        );
      case 16:
        return const ActiveEncounter(
          encounterId: 'denise-16-docket',
          visitor: VisitorId.denise,
          day: 16,
          promptLine: 'Ayling, someone took the canal docket from the bureau drawer. Did you give Sylvia the key?',
          choices: [
            EncounterChoice(
              choiceId: 'confess',
              label: 'Admit giving Sylvia the spare room key',
              effects: {'denise.docket': 'betrayed', 'truth.bureau': 'searched'},
              replyLine: 'You let her inside our father’s ledger room. How could you?',
            ),
            EncounterChoice(
              choiceId: 'deny',
              label: 'Deny all knowledge of the room key',
              effects: {'denise.docket': 'defended', 'truth.bureau': 'secret'},
              replyLine: 'Then she had a duplicate made before you were shut in.',
            ),
          ],
        );
      case 17:
        return const ActiveEncounter(
          encounterId: 'sylvia-17-ultimatum',
          visitor: VisitorId.sylvia,
          day: 17,
          promptLine: 'The quarantine ends in four days. The parish committee will review the mill ledgers.',
          choices: [
            EncounterChoice(
              choiceId: 'stand_firm',
              label: 'State the truth of the accounts will be presented',
              effects: {'sylvia.ultimatum': 'defied', 'truth.accounts': 'honest'},
              replyLine: 'You will find truth is an expensive luxury when the war bill arrives.',
            ),
            EncounterChoice(
              choiceId: 'settle',
              label: 'Offer to sign a joint reconciliation statement',
              effects: {'sylvia.ultimatum': 'appeased', 'truth.accounts': 'reconciled'},
              replyLine: 'A practical man at last.',
            ),
          ],
        );
      case 18:
        return const ActiveEncounter(
          encounterId: 'hallow-18-discharge',
          visitor: VisitorId.drHallow,
          day: 18,
          promptLine: 'Medical discharge evaluation. State your pulse and whether the wall-sounds have ceased.',
          choices: [
            EncounterChoice(
              choiceId: 'sound',
              label: 'Report normal health and clear mind',
              effects: {'hallow.discharge': 'cleared', 'truth.sanity': 'certified'},
              replyLine: 'Marked fit for civilian reintegration on the first.',
            ),
            EncounterChoice(
              choiceId: 'confess_taps',
              label: 'Report persistent vibrations in the floorboards',
              effects: {'hallow.discharge': 'conditional', 'truth.sanity': 'questioned'},
              replyLine: 'Prolonged isolation leaves an echo in the ears. It passes.',
            ),
          ],
        );
      case 19:
        return const ActiveEncounter(
          encounterId: 'inspector-19-notice',
          visitor: VisitorId.inspector,
          day: 19,
          promptLine: 'Posting the final unsealing proclamation on your lintel.',
          choices: [
            EncounterChoice(
              choiceId: 'read_notice',
              label: 'Read the proclamation text through the fanlight',
              effects: {'inspector.proclamation': 'acknowledged'},
              replyLine: 'Forty-eight hours remaining. Prepare your household articles for fumigation.',
            ),
            EncounterChoice(
              choiceId: 'wait',
              label: 'Wait silently until the hammer nails cease',
              effects: {'inspector.proclamation': 'unquestioned'},
              replyLine: '...(iron nail driven into oak lintel)...',
            ),
          ],
        );
      case 20:
        return const ActiveEncounter(
          encounterId: 'ashworth-20-farewell',
          visitor: VisitorId.mrsAshworth,
          day: 20,
          promptLine: 'Tomorrow the street opens, Ayling. Will you walk out to the churchyard or stay inside?',
          choices: [
            EncounterChoice(
              choiceId: 'walk_out',
              label: 'Promise to walk out to the morning service',
              effects: {'ashworth.farewell': 'rejoined', 'truth.future': 'public'},
              replyLine: 'I shall save you a seat beside the stove.',
            ),
            EncounterChoice(
              choiceId: 'stay_in',
              label: 'State the house is where you will remain',
              effects: {'ashworth.farewell': 'reclusive', 'truth.future': 'isolated'},
              replyLine: 'The quarantine ends on paper, Ayling. Not always in the bones.',
            ),
          ],
        );
      case 21:
        return const ActiveEncounter(
          encounterId: 'denise-21-resolution',
          visitor: VisitorId.denise,
          day: 21,
          promptLine: 'The bolt is drawn from the outside, Ayling. You can turn the brass latch now.',
          choices: [
            EncounterChoice(
              choiceId: 'open_door',
              label: 'Turn the handle and step into the daylight',
              effects: {'ending.choice': 'emerged', 'truth.finale': 'dawn'},
              replyLine: 'Welcome back to the world. It changed while you were asleep.',
            ),
            EncounterChoice(
              choiceId: 'remain_threshold',
              label: 'Stand at the open threshold without crossing',
              effects: {'ending.choice': 'threshold', 'truth.finale': 'suspended'},
              replyLine: 'Take your time. The air is cold enough to keep.',
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
