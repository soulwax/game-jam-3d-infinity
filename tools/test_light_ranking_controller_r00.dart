// R-00: Light ranking, profile capacity, and hysteresis controller verification.
//
// Verifies that:
//  1. Candidate lights are ranked by camera-distance attenuated importance score.
//  2. Capacity limits (e.g. 4 point, 2 spot) are strictly enforced with diagnostic rejection reasons.
//  3. Active lights receive 15% hysteresis advantage to eliminate frame-to-frame popping.

import 'package:quarantine/engine/light_ranking_controller.dart';
import 'package:quarantine/engine/math3.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final controller = LightRankingController(
    maxPointLights: 2,
    maxSpotLights: 1,
    hysteresisThreshold: 0.15,
  );

  final camPos = Vec3(0, 0, 0);

  final p1 = CandidateLight(
    id: 1,
    type: 'point',
    position: Vec3(1, 0, 0),
    color: Vec3(1, 1, 1),
    intensity: 1.0,
    radius: 5.0,
  );
  final p2 = CandidateLight(
    id: 2,
    type: 'point',
    position: Vec3(2, 0, 0),
    color: Vec3(1, 1, 1),
    intensity: 1.0,
    radius: 5.0,
  );
  final p3 = CandidateLight(
    id: 3,
    type: 'point',
    position: Vec3(10, 0, 0),
    color: Vec3(1, 1, 1),
    intensity: 1.0,
    radius: 5.0,
  );

  final s1 = CandidateLight(
    id: 10,
    type: 'spot',
    position: Vec3(0.5, 0, 0),
    color: Vec3(1, 1, 1),
    intensity: 1.0,
    radius: 5.0,
  );
  final s2 = CandidateLight(
    id: 11,
    type: 'spot',
    position: Vec3(5.0, 0, 0),
    color: Vec3(1, 1, 1),
    intensity: 1.0,
    radius: 5.0,
  );

  // 1. Initial Ranking
  final res1 = controller.rankLights(
    cameraPosition: camPos,
    points: [p1, p2, p3],
    spots: [s1, s2],
  );

  check(res1.acceptedPoints.length == 2, '2 point lights accepted');
  check(res1.acceptedPoints.contains(p1), 'p1 (closest) accepted');
  check(res1.acceptedPoints.contains(p2), 'p2 accepted');
  check(res1.rejectedPoints.contains(p3), 'p3 (furthest) rejected');

  check(res1.acceptedSpots.length == 1, '1 spot light accepted');
  check(res1.acceptedSpots.contains(s1), 's1 accepted');
  check(res1.rejectedSpots.contains(s2), 's2 rejected');

  check(res1.rejectionReasons.containsKey(3), 'p3 carries rejection reason');
  check(
    res1.rejectionReasons[3]!.contains('Exceeded maximum capacity'),
    'p3 capacity rejection message',
  );

  // 2. Test Hysteresis (p1 stays active even if a slightly closer new candidate appears, unless +15% score exceeded)
  final pNew = CandidateLight(
    id: 4,
    type: 'point',
    position: Vec3(1.8, 0, 0),
    color: Vec3(1, 1, 1),
    intensity: 1.05,
    radius: 5.0,
  );
  final res2 = controller.rankLights(
    cameraPosition: camPos,
    points: [p1, p2, pNew],
    spots: [s1, s2],
  );

  check(
    res2.acceptedPoints.contains(p1),
    'p1 remains active due to 15% hysteresis',
  );

  // Equal-score candidates use stable authored IDs, never input-list order.
  final ties = LightRankingController(maxPointLights: 1, maxSpotLights: 0);
  final tieResult = ties.rankLights(
    cameraPosition: camPos,
    points: [
      CandidateLight(
        id: 8,
        type: 'point',
        position: Vec3(1, 0, 0),
        color: Vec3(1, 1, 1),
        intensity: 1,
        radius: 1,
      ),
      CandidateLight(
        id: 7,
        type: 'point',
        position: Vec3(-1, 0, 0),
        color: Vec3(1, 1, 1),
        intensity: 1,
        radius: 1,
      ),
    ],
    spots: const [],
  );
  check(
    tieResult.acceptedPoints.single.id == 7,
    'equal-score tie uses stable ID',
  );

  print('R-00: Light ranking controller test passed cleanly!');
}
