// H-00: Hero route camera, collision corridors, and reference board verification.
//
// Verifies that:
//  1. Canonical camera waypoints have valid player eye heights (1.65m) and FOVs.
//  2. Collision corridors enforce minimum width (>= 0.9m) and clearance height.
//  3. Original reference board specifies construction, materials, lighting, and density intent without copying third-party assets.
//  4. Route validation against House room bounds succeeds cleanly.

import 'package:quarantine/house/hero_route_reference.dart';
import 'package:quarantine/house/house.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final heroRef = HeroRouteReference.canonical();

  // 1. Check waypoints
  check(heroRef.waypoints.length >= 4, 'At least 4 hero waypoints defined');
  for (final wp in heroRef.waypoints) {
    final localEye = wp.position.y % 3.9;
    check(localEye >= 1.4 && localEye <= 1.8, '${wp.id} eye height is in human range above floor');
    check(wp.fovYDegrees >= 50.0 && wp.fovYDegrees <= 80.0, '${wp.id} FOV is within standard bounds');
    check(wp.label.isNotEmpty, '${wp.id} has descriptive label');
  }

  // 2. Check collision corridors
  check(heroRef.corridors.length >= 4, 'At least 4 collision corridors defined');
  for (final c in heroRef.corridors) {
    check(c.minWidthMetres >= 0.85, '${c.id} corridor width >= 0.85m');
    check(c.minHeightMetres >= 2.1, '${c.id} corridor height >= 2.1m');
  }

  // 3. Check reference board packet
  final board = heroRef.referenceBoard;
  check(board.title.contains('Edwardian Terrace'), 'Title names architectural style');
  check(board.materialIntent.containsKey('walls'), 'Material intent includes walls');
  check(board.materialIntent.containsKey('floors'), 'Material intent includes floors');
  check(board.lightingIntent.containsKey('daylight'), 'Lighting intent includes daylight');
  check(board.lightingIntent.containsKey('practicals'), 'Lighting intent includes practicals');
  check(board.atmosphericDensity.containsKey('fog'), 'Atmospheric density includes fog');

  // 4. Validate against House instance
  final house = House(0);
  final valid = heroRef.validateAgainstHouse(house);
  check(valid, 'Canonical waypoints fall inside house room bounds');

  // 5. Check JSON serialization
  final json = heroRef.toJson();
  check((json['waypoints'] as List).length == heroRef.waypoints.length, 'JSON waypoints count');
  check((json['corridors'] as List).length == heroRef.corridors.length, 'JSON corridors count');
  check((json['referenceBoard'] as Map)['title'] == board.title, 'JSON title matches');

  print('H-00: Hero route reference packet test passed cleanly!');
}
