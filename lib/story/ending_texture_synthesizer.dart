import 'package:quarantine/story/narrative_state.dart';
import 'package:quarantine/story/timeline_progression_coordinator.dart';

/// Synthesizes human-memory ending textures based on the 21-day choice ledger (Section 21.12).
class EndingTextureSynthesizer {
  final NarrativeState state;

  EndingTextureSynthesizer({NarrativeState? state})
      : state = state ?? NarrativeState();

  /// Evaluates the complete ending texture summary from recorded state facts.
  EndingTextureSummary synthesizeEnding() {
    final measuredFacts = <String>[];
    final relationalResidues = <String>[];

    // Evaluate measured facts
    if (state.hasFlag('ashworth.compact', 'accepted')) {
      measuredFacts.add('Accepted Mrs Ashworth’s broth and wall-tap signal compact.');
      relationalResidues.add('The stone jug remains on the hall sideboard.');
    } else {
      measuredFacts.add('Declined neighborhood assistance from the beginning.');
    }

    if (state.hasFlag('denise.pears', 'taken')) {
      measuredFacts.add('Brought Denise’s four garden pears into the domestic room.');
    } else if (state.hasFlag('denise.pears', 'left')) {
      measuredFacts.add('Left Denise’s pears to freeze on the threshold.');
    }

    if (state.hasFlag('sylvia.certificate', 'granted')) {
      measuredFacts.add('Signed the Quarantine Exemption Certificate for Sylvia’s boilers.');
    } else {
      measuredFacts.add('Refused Sylvia’s exemption demand under Ministry Order 14-B.');
    }

    if (state.hasFlag('sowerby.tip', 'paid')) {
      measuredFacts.add('Paid Sowerby for the Welsh anthracite delivery.');
    }

    if (state.hasFlag('ashworth.taps', 'confirmed')) {
      measuredFacts.add('Acknowledged hearing the chimney flue rhythms at dawn.');
    }

    if (state.hasFlag('sylvia.spare_room', 'accessible')) {
      measuredFacts.add('Surrendered the spare room key for wartime billeting.');
    } else {
      measuredFacts.add('Kept the upper storey locked against requisition.');
    }

    if (state.hasFlag('colclough.leonard', 'read')) {
      measuredFacts.add('Allowed Leonard’s name to be spoken in the parish intercession.');
    }

    if (state.hasFlag('inspector.seals', 'passed')) {
      measuredFacts.add('Maintained all eight sanitary window restrictors unbroken.');
    }

    // Determine ending archetype
    String endingType;
    String closingTexture;

    final isCompliant = state.hasFlag('inspector.seals', 'passed') &&
        state.hasFlag('sylvia.certificate', 'granted') &&
        state.hasFlag('ending.choice', 'emerged');

    final isRupture = state.hasFlag('sylvia.spare_room', 'sealed') &&
        state.hasFlag('ashworth.compact', 'declined');

    if (isCompliant) {
      endingType = 'compliance';
      closingTexture = 'The brass latch turns smoothly in the frost. Outside, the church bells of the Armistice have finished their chime. The Ministry ledger records your household cleared for general commerce.';
    } else if (isRupture) {
      endingType = 'rupture';
      closingTexture = 'The latch opens to a quiet, cold street where neighbors turn their heads away. You hold the key in your coat pocket, knowing what was preserved in the dark was bought by distance.';
    } else {
      endingType = 'synchronisation';
      closingTexture = 'You stand at the open threshold between the cold December morning and the warm cedar chimney. The wall taps behind the plasterboard have settled into the quiet breathing of the brick.';
    }

    return EndingTextureSummary(
      endingType: endingType,
      measuredFacts: measuredFacts,
      relationalResidues: relationalResidues,
      closingTextureText: closingTexture,
    );
  }
}
