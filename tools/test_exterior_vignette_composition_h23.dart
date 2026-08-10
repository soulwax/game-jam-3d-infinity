// H-23: Exterior art cells & window-visible vignette composition verification.
//
// Verifies that:
//  1. Exterior art cells (street, oppositeHouse, roofDrainage) register cleanly with parallax depth scaling.
//  2. Weather rain intensity maps to surface wetness factors.
//  3. Day-20 opposite-window figure silhouette activates at night on Day 20.
//  4. Non-Day-20 days do not display the figure silhouette.

import 'package:quarantine/house/exterior_vignette_composition.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Verify Art Cells
  check(ExteriorVignetteComposition.cells.containsKey('street'), 'Street cell registered');
  check(ExteriorVignetteComposition.cells.containsKey('oppositeHouse'), 'Opposite house cell registered');
  check(ExteriorVignetteComposition.cells.containsKey('roofDrainage'), 'Roof drainage cell registered');

  final opp = ExteriorVignetteComposition.cells['oppositeHouse']!;
  check(opp.hasDay20Variant, 'Opposite house has Day 20 variant');
  check(opp.parallaxDepthScale == 0.08, 'Opposite house parallax depth scale is 0.08');

  // 2. Normal Day State (Day 1, 14:00, Light Rain 0.4)
  final normalState = ExteriorVignetteComposition.getVignetteVisualState(
    currentDay: 1,
    rainIntensity: 0.4,
    currentHour: 14.0,
  );

  check(normalState['wetnessFactor'] == 0.34, 'Wetness factor calculated correctly (0.4 * 0.85 = 0.34)');
  check(normalState['showOppositeWindowFigure'] == false, 'Day 1 does not show opposite window figure');

  // 3. Day 20 Night State (Day 20, 23:00, Rain 0.8)
  final day20NightState = ExteriorVignetteComposition.getVignetteVisualState(
    currentDay: 20,
    rainIntensity: 0.8,
    currentHour: 23.0,
  );

  check(day20NightState['showOppositeWindowFigure'] == true, 'Day 20 night shows opposite window figure silhouette');

  print('H-23: Exterior vignette composition test passed cleanly!');
}
