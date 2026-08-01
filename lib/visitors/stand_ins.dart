import 'dart:math';

import '../config.dart';

List<String> eligibleStandIns(
  Map<String, Map<int, Map<String, String>>> visitors,
) {
  final eligible = <String>{};
  for (final entry in visitors.entries) {
    for (final day in entry.value.values) {
      if (day.keys.any((key) => key.startsWith('off.'))) {
        eligible.add(entry.key);
        break;
      }
    }
  }
  return eligible.toList()..sort();
}

List<String> drawStandIns(int runSeed, List<String> eligible) {
  if (runSeed == 0 || eligible.isEmpty) return const [];
  final sorted = List<String>.from(eligible)..sort();
  final rng = Random(runSeed ^ standInSeedSalt);
  final drawn = standInCountChoices[rng.nextInt(standInCountChoices.length)];
  final count = drawn > sorted.length ? sorted.length : drawn;
  if (count == 0) return const [];
  final shuffled = List<String>.from(sorted)..shuffle(rng);
  return shuffled.take(count).toList()..sort();
}
