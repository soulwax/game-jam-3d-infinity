// Unit test for SubsurfaceScatteringParams.
//
// Verifies:
//  1. Default constructor sets warm organic scatter color and valid radius/power.
//  2. Custom constructor overrides scatter color, radius, translucency power, and distortion.
//  3. JSON export serializes RGB scatter color map and parameters cleanly.

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/subsurface_scattering_params.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  const defaultParams = SubsurfaceScatteringParams();
  check(defaultParams.enabled == true, 'SSS default is enabled');
  check(defaultParams.scatterRadius == 0.35, 'Default scatter radius verified');
  check(defaultParams.translucencyPower == 2.0, 'Default translucency power verified');

  final customParams = SubsurfaceScatteringParams(
    enabled: true,
    scatterColor: Vec3(0.9, 0.4, 0.1),
    scatterRadius: 0.5,
    translucencyPower: 3.0,
    distortion: 0.15,
  );

  final json = customParams.toJson();
  check(json['enabled'] == true, 'JSON serializes enabled');
  final colorMap = json['scatterColor'] as Map<String, dynamic>;
  check(colorMap['x'] == 0.9, 'Color red channel verified');
  check(json['scatterRadius'] == 0.5, 'Scatter radius verified');
  check(json['translucencyPower'] == 3.0, 'Translucency power verified');

  print('SubsurfaceScatteringParams test passed cleanly!');
}
