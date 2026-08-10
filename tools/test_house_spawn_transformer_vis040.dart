import 'package:quarantine/automation/house_spawn_transformer.dart';
import 'package:quarantine/engine/vec3.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final spawnSpacious = HouseSpawnTransformer.getSpawnForProfile(HouseProfile.spacious225x);
  check(spawnSpacious.x == 12.9375, 'spacious X spawn is 12.9375');
  check(spawnSpacious.y == 1.65, 'spacious Y spawn is 1.65');
  check(spawnSpacious.z == 0.825, 'spacious Z spawn is 0.825');

  final spawnStandard = HouseSpawnTransformer.getSpawnForProfile(HouseProfile.standard15x);
  check(spawnStandard.x == 8.625, 'standard X spawn is 8.625');
  check(spawnStandard.z == 0.55, 'standard Z spawn is 0.55');

  // Transform 1.5x pos to 2.25x
  final pos15 = Vec3(10.0, 1.65, 2.0);
  final pos225 = HouseSpawnTransformer.transformPosition(
    pos15,
    fromProfile: HouseProfile.standard15x,
    toProfile: HouseProfile.spacious225x,
  );

  check(pos225.x == 15.0, 'X scaled 1.5x (10 -> 15)');
  check(pos225.y == 1.65, 'Y eye height preserved (1.65)');
  check(pos225.z == 3.0, 'Z scaled 1.5x (2 -> 3)');

  print('house spawn transformer VIS-040 / T-06: 2.25x spacious spawn vector, profile coordinate scaling pass');
}
