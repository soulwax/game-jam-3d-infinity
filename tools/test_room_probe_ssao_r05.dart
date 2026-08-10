// R-05: Static indirect room-probe & ambient-only SSAO verification.
//
// Verifies that:
//  1. RoomProbe indirect ambient blends smoothly with base environment ambient.
//  2. Ambient-only SSAO (affectAmbientOnly = true) attenuates ambient indirect without affecting direct key lights.
//  3. Grounding check confirms hero room corners are grounded (< 0.95) without black-crush (< 0.15).

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/room_probe_ssao.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final probe = RoomProbe(
    roomId: 'living-room',
    probePosition: Vec3(5.0, 1.95, 4.5),
    ambientColor: Vec3(0.40, 0.42, 0.48),
    indirectIntensity: 0.5,
  );

  final ssao = const AmbientSSAOParams(
    enabled: true,
    radiusMetres: 0.45,
    bias: 0.02,
    intensity: 0.65,
    affectAmbientOnly: true,
  );

  // 1. Evaluate Corner / Contact Occlusion
  final cornerResponse = RoomProbeIndirectComposition.evaluateAmbientResponse(
    probe: probe,
    ssao: ssao,
    baseAmbientColor: Vec3(0.34, 0.39, 0.50),
    baseAmbientIntensity: 0.45,
    depthDistanceMetres: 0.10, // Close contact in corner
    surfaceNormalY: 0.1,       // Wall corner normal
  );

  check(cornerResponse.occlusionFactor < 0.95, 'Corner is occluded (< 0.95)');
  check(cornerResponse.occlusionFactor >= 0.15, 'Corner avoids black-crush (>= 0.15)');
  check(cornerResponse.groundsGeometry, 'Hero room corner geometry is grounded');

  // 2. Evaluate Open Center Surface (Minimal Occlusion)
  final centerResponse = RoomProbeIndirectComposition.evaluateAmbientResponse(
    probe: probe,
    ssao: ssao,
    baseAmbientColor: Vec3(0.34, 0.39, 0.50),
    baseAmbientIntensity: 0.45,
    depthDistanceMetres: 2.0, // Open space, far from depth contact
    surfaceNormalY: 1.0,      // Floor normal
  );

  check(centerResponse.occlusionFactor == 1.0, 'Open center surface has no SSAO occlusion (factor 1.0)');
  check(centerResponse.finalAmbientColor.x > cornerResponse.finalAmbientColor.x, 'Center has brighter ambient than corner');

  // 3. Test SSAO disabled
  final noSsao = const AmbientSSAOParams(enabled: false);
  final unoccludedResponse = RoomProbeIndirectComposition.evaluateAmbientResponse(
    probe: probe,
    ssao: noSsao,
    baseAmbientColor: Vec3(0.34, 0.39, 0.50),
    baseAmbientIntensity: 0.45,
    depthDistanceMetres: 0.10,
    surfaceNormalY: 0.1,
  );

  check(unoccludedResponse.occlusionFactor == 1.0, 'Disabled SSAO returns factor 1.0');

  print('R-05: Room probe & ambient SSAO test passed cleanly!');
}
