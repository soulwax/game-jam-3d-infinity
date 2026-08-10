// Unit test for SpatialAudioOcclusionCoordinator.
//
// Verifies:
//  1. Distance attenuation scales linear gain properly.
//  2. Spatial panning resolves relative left/right azimuth.
//  3. Same room audio receives unoccluded 20kHz bandwidth.
//  4. Cross-room portal muffle attenuates gain and reduces filter cutoff frequency.

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/spatial_audio_occlusion_coordinator.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  const coordinator = SpatialAudioOcclusionCoordinator(
    distanceModel: DistanceModel.inverseSquare,
    refDistance: 1.0,
    maxDistance: 15.0,
  );

  // 1. Test Same Room Direct Audio
  final sameRoomState = coordinator.evaluate(
    sourcePos: Vec3(2.0, 1.65, 0.0),
    sourceRoom: 'living',
    listenerPos: Vec3(0.0, 1.65, 0.0),
    listenerYaw: 0.0,
    listenerRoom: 'living',
    doorMuffleFraction: 1.0,
    isSameRoom: true,
  );

  check(
    sameRoomState.cutoffHz == 20000.0,
    'Same room receives unoccluded bandwidth',
  );
  check(sameRoomState.muffle01 == 0.0, 'Same room muffle meter is clear');
  check(
    sameRoomState.obstructionReason == 'same-room-clear',
    'Same room reason is clear',
  );
  check(
    sameRoomState.gainLinear > 0.0 && sameRoomState.gainLinear <= 1.0,
    'Linear gain in valid range',
  );
  check(
    sameRoomState.reflectionDelayMs == 15.0,
    'Same room early reflection delay verified',
  );
  check(sameRoomState.pan < 0, 'world +X is screen-left at yaw zero');
  final rightPan = coordinator.evaluate(
    sourcePos: Vec3(-2.0, 1.65, 0.0),
    sourceRoom: 'living',
    listenerPos: Vec3(0.0, 1.65, 0.0),
    listenerYaw: 0.0,
    listenerRoom: 'living',
    doorMuffleFraction: 1.0,
    isSameRoom: true,
  );
  check(rightPan.pan > 0, 'world -X is screen-right at yaw zero');

  // 2. Test Cross Room Occluded Audio
  final crossRoomState = coordinator.evaluate(
    sourcePos: Vec3(5.0, 1.65, 0.0),
    sourceRoom: 'hall',
    listenerPos: Vec3(0.0, 1.65, 0.0),
    listenerYaw: 0.0,
    listenerRoom: 'living',
    doorMuffleFraction: 0.2, // Door mostly closed
    isSameRoom: false,
  );

  check(
    crossRoomState.cutoffHz < 20000.0,
    'Cross room audio is occluded by lowpass filter',
  );
  check(
    crossRoomState.muffle01 == 0.8,
    'Cross room muffle follows closed-door fraction',
  );
  check(
    crossRoomState.obstructionReason == 'wall+portal',
    'Cross room reason names wall and portal',
  );
  check(
    crossRoomState.gainLinear < sameRoomState.gainLinear,
    'Cross room audio attenuated by distance and portal',
  );
  check(
    crossRoomState.reflectionDelayMs == 45.0,
    'Cross room reflection delay verified',
  );

  final json = crossRoomState.toJson();
  check(json['sourceRoom'] == 'hall', 'State serializes source room');
  check(json['listenerRoom'] == 'living', 'State serializes listener room');
  check(json['muffle01'] == 0.8, 'State serializes normalized muffle meter');

  print('SpatialAudioOcclusionCoordinator test passed cleanly!');
}
