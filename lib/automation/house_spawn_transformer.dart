import '../engine/vec3.dart';

enum HouseProfile {
  standard15x,
  spacious225x,
}

/// Spacious 2.25x profile spawn coordinate transformer for VIS-040 / T-06.
/// Transforms canonical spawn poses and route waypoints between 1.5x and 2.25x profiles.
class HouseSpawnTransformer {
  static final Vec3 spawnStandard15x = Vec3(8.625, 1.65, 0.55);
  static final Vec3 spawnSpacious225x = Vec3(12.9375, 1.65, 0.825);

  static Vec3 getSpawnForProfile(HouseProfile profile) => switch (profile) {
        HouseProfile.standard15x => spawnStandard15x,
        HouseProfile.spacious225x => spawnSpacious225x,
      };

  static Vec3 transformPosition(Vec3 pos, {required HouseProfile fromProfile, required HouseProfile toProfile}) {
    if (fromProfile == toProfile) return pos;
    final scaleRatio = toProfile == HouseProfile.spacious225x ? (2.25 / 1.5) : (1.5 / 2.25);
    // Scale X and Z horizontally, keep Y eye height unscaled
    return Vec3(pos.x * scaleRatio, pos.y, pos.z * scaleRatio);
  }
}
