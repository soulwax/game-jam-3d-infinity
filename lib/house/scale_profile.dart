import '../engine/math3.dart';

/// The single authored seam for changing the house's physical presentation.
///
/// [authoredScale] preserves the original MVP enlargement and
/// [spaciousScale] is the current presentation multiplier. Change these two
/// values together with the manifest's `modelScale`; room axes, portals,
/// exterior dimensions, inventory, and spawn anchors then derive from this
/// profile instead of carrying independent literals.
final class HouseScaleProfile {
  final double authoredScale;
  final double spaciousScale;
  final double exteriorScale;
  final double authoredSpawnX;
  final double authoredSpawnZ;

  const HouseScaleProfile({
    required this.authoredScale,
    required this.spaciousScale,
    required this.exteriorScale,
    required this.authoredSpawnX,
    required this.authoredSpawnZ,
  });

  double get modelScale => authoredScale * spaciousScale;

  Vec3 scaleHorizontal(Vec3 value, double factor) =>
      Vec3(value.x * factor, value.y, value.z * factor);

  Vec3 scaleAll(Vec3 value, double factor) => value * factor;

  Vec3 spawn(double eyeHeight) =>
      Vec3(authoredSpawnX * modelScale, eyeHeight, authoredSpawnZ * modelScale);
}

/// Current production house profile. Resize the house here first; all runtime
/// geometry consumers import this profile rather than duplicating scale math.
const double houseAuthoredScale = 1.5;
const double housePresentationScale = 1.5;
const double houseModelScale = houseAuthoredScale * housePresentationScale;

const houseScaleProfile = HouseScaleProfile(
  authoredScale: houseAuthoredScale,
  spaciousScale: housePresentationScale,
  exteriorScale: 1.5,
  authoredSpawnX: 5.75,
  authoredSpawnZ: 0.36666666666666664,
);

// Keep the legacy name as a readable alias for callers that describe the
// second-stage spacious pass.
const double houseSpatialScale = housePresentationScale;
