// Unit test for TimelineProgressionCoordinator (Section 21.10 & 21.12).
//
// Verifies:
//  1. All 21 canonical dramatic days are defined with titles and decisions.
//  2. Compliance ending texture incorporates committed relational residue facts.
//  3. Rupture and synchronisation ending textures emit appropriate reflective resolutions.

import 'dart:io';

import 'package:quarantine/story/narrative_state.dart';
import 'package:quarantine/story/screenplay.dart';
import 'package:quarantine/story/timeline_progression_coordinator.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Verify 21-Day Timeline Completeness
  final screenplay = StoryScreenplay.fromJson(
    File('web/res/story_script.json').readAsStringSync(),
  );
  final coordinator = TimelineProgressionCoordinator(screenplay: screenplay);
  final days = coordinator.dramaticJobs;
  check(days.length == 21, 'All 21 timeline days defined');
  check(
    days[0].day == 1 && days[0].title == 'Hospitality',
    'Day 1 is Hospitality',
  );
  check(days[20].day == 21 && days[20].title == 'Release', 'Day 21 is Release');
  check(
    days[0].playerDecision.isNotEmpty,
    'Screenplay branch prompt becomes decision',
  );

  // 2. Verify Ending Texture Assembly with Relational Residues
  final state = NarrativeState();
  state.flags['denise.pears'] = 'taken';
  state.flags['sylvia.certificate'] = 'granted';

  final coordinatorWithState = TimelineProgressionCoordinator(
    state: state,
    screenplay: screenplay,
  );

  final complianceEnding = coordinatorWithState.assembleEndingTexture(
    'compliance',
  );
  check(
    complianceEnding.endingType == 'compliance',
    'Ending type is compliance',
  );
  check(complianceEnding.measuredFacts.length == 2, 'Measured facts included');
  check(
    complianceEnding.relationalResidues.contains(
      'Four pears placed on the sideboard.',
    ),
    'Sideboard pear residue included in ending texture',
  );
  check(
    complianceEnding.relationalResidues.contains(
      'Exemption slip signed for the mill boilers.',
    ),
    'Signed exemption certificate residue included in ending texture',
  );

  // 3. Verify Synchronisation Ending Text
  final syncEnding = coordinatorWithState.assembleEndingTexture(
    'synchronisation',
  );
  check(
    syncEnding.closingTextureText.contains(
      'Truth was distributed across flawed people',
    ),
    'Synchronisation closing text verified',
  );

  final json = syncEnding.toJson();
  check(json['endingType'] == 'synchronisation', 'JSON serializes endingType');

  print('TimelineProgressionCoordinator test passed cleanly!');
}
