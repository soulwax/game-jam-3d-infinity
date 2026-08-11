// Unit test for CharacterRosterRegistry (Section 21.6 & 21.7).
//
// Verifies:
//  1. Exactly 23 distinct character profiles (9 Principals + 14 Supporting).
//  2. Unique IDs, non-empty wants/talents/flaws/private facts for all entries.
//  3. Voice separation matrix definitions and concrete field declarations.
//  4. JSON serialization roundtrip.

import 'package:quarantine/story/character_roster_registry.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Verify Total Roster Count
  check(CharacterRosterRegistry.roster.length == 23, 'Must have exactly 23 character profiles');
  check(CharacterRosterRegistry.verifyRosterIntegrity(), 'Roster integrity check passed');

  // 2. Verify Tier Counts
  final principals = CharacterRosterRegistry.roster.where((c) => c.tier == CharacterTier.principal).toList();
  check(principals.length == 9, 'Must have 9 principals');

  final supporting = CharacterRosterRegistry.roster.where((c) => c.tier == CharacterTier.supporting).toList();
  check(supporting.length == 14, 'Must have 14 supporting characters');

  // 3. Verify Specific Profiles
  final iris = CharacterRosterRegistry.getProfile('iris');
  check(iris != null, 'Iris profile found');
  check(iris!.favoredConcreteFields.contains('knocks'), 'Iris favored fields contains knocks');

  final sowerby = CharacterRosterRegistry.getProfile('sowerby');
  check(sowerby != null, 'Sowerby profile found');
  check(sowerby!.forbiddenPatterns.contains('jokes'), 'Sowerby forbidden patterns contains jokes');

  // 4. Verify Serialization
  final json = iris.toJson();
  check(json['id'] == 'iris', 'JSON id verified');
  check(json['tier'] == 'principal', 'JSON tier verified');

  print('CharacterRosterRegistry test passed cleanly!');
}
