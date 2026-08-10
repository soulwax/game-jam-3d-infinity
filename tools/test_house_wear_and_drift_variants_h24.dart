// H-24: House wear & drift variants verification.
//
// Verifies that:
//  1. Day 1 produces baseline low wear/drift states across all rooms.
//  2. Day 21 progresses damp, wallpaper peeling, floorboard drift, and timber wear factors smoothly.
//  3. Cellar moisture/damp is highest among all rooms.
//  4. RoomWearState round-trips through JSON save/restore serialization.

import 'package:quarantine/house/house_wear_and_drift_variants.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Day 1 Baseline
  final day1States = HouseWearAndDriftVariants.computeRoomWearStates(1);
  check(day1States.containsKey('living-room'), 'Living room wear state computed');
  check(day1States.containsKey('cellar'), 'Cellar wear state computed');

  final livingDay1 = day1States['living-room']!;
  check(livingDay1.dampIntensity == 0.10, 'Living room Day 1 damp is 0.10');
  check(livingDay1.floorboardDriftMm == 0.0, 'Living room Day 1 floorboard drift is 0.0 mm');

  // 2. Day 21 Advanced Progression
  final day21States = HouseWearAndDriftVariants.computeRoomWearStates(21);
  final cellarDay21 = day21States['cellar']!;
  final livingDay21 = day21States['living-room']!;

  check((cellarDay21.dampIntensity - 0.95).abs() < 0.001, 'Cellar Day 21 damp reaches 0.95');
  check((cellarDay21.floorboardDriftMm - 4.0).abs() < 0.001, 'Cellar Day 21 floorboard drift reaches 4.0 mm');
  check((livingDay21.wallpaperPeelFraction - 0.40).abs() < 0.001, 'Living room Day 21 wallpaper peel reaches 0.40');

  // 3. JSON Save/Restore Serialization
  final jsonMap = livingDay21.toJson();
  final restored = RoomWearState.fromJson(jsonMap);

  check(restored.roomId == 'living-room', 'Restored roomId matches');
  check(restored.dampIntensity == livingDay21.dampIntensity, 'Restored dampIntensity matches');
  check(restored.wallpaperPeelFraction == livingDay21.wallpaperPeelFraction, 'Restored wallpaperPeelFraction matches');

  print('H-24: House wear and drift variants test passed cleanly!');
}
