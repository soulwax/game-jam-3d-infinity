import 'dart:math';

import '../config.dart';

String? pickUnverifiable(List<String> lines, int runSeed, int day) {
  if (lines.isEmpty) return null;
  if (lines.length == 1) return lines.single;
  final rng = Random(runSeed ^ unverifiableSeedSalt ^ day);
  return lines[rng.nextInt(lines.length)];
}
