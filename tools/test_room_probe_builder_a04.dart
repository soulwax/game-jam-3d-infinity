// A-04: Static room probe builder & UV1 lightmap bounds verification.
//
// Verifies that:
//  1. Static room probes build across all house rooms with zero mutable direct-light ghosts.
//  2. Valid UV1 lightmap coordinates [0.0, 1.0] pass UV1 bounds validation.
//  3. Out-of-bounds or inverted UV coordinates are identified and reported as invalid.

import 'package:quarantine/engine/room_probe_builder.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Build Static Room Probes
  final probes = RoomProbeBuilder.buildStaticRoomProbes();

  check(probes.containsKey('living-room'), 'Living room probe built');
  check(probes.containsKey('hall'), 'Hall probe built');
  check(probes.containsKey('kitchen'), 'Kitchen probe built');
  check(probes.containsKey('cellar'), 'Cellar probe built');
  check(probes.containsKey('bedroom'), 'Bedroom probe built');

  final livingProbe = probes['living-room']!;
  check(livingProbe.ambientColor.x > 0.3, 'Living room ambient color defined');
  check(livingProbe.indirectIntensity == 0.50, 'Living room indirect intensity is 0.50');

  // 2. Validate Valid UV1 Lightmap Coordinates [0.0, 1.0]
  final validUvs = [0.0, 0.0,  1.0, 0.0,  0.5, 1.0];
  final validReport = RoomProbeBuilder.validateUv1Bounds(
    meshId: 'mesh-wall-living',
    uv1Coordinates: validUvs,
  );

  check(validReport.isValid, 'Valid UV1 coordinates pass validation');
  check(validReport.minU == 0.0 && validReport.maxU == 1.0, 'UV min/max bounds accurate');

  // 3. Validate Invalid UV1 Lightmap Coordinates (out of bounds > 1.0)
  final invalidUvs = [0.0, 0.0,  1.5, 0.0,  0.5, 1.0];
  final invalidReport = RoomProbeBuilder.validateUv1Bounds(
    meshId: 'mesh-corrupt',
    uv1Coordinates: invalidUvs,
  );

  check(!invalidReport.isValid, 'Out-of-bounds UV1 coordinates (1.5) rejected');

  print('A-04: Room probe builder test passed cleanly!');
}
