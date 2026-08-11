// Tests for hall furnishing manifest.
import 'package:quarantine/house/hall_furnishing_manifest.dart';

void main() {
  print('Running HallFurnishingManifest tests...');

  // Test 1: all 6 props exist with non-empty IDs and names
  assert(HallFurnishingManifest.props.length == 6, 'Should have exactly 6 props');
  for (final prop in HallFurnishingManifest.props) {
    assert(prop.propId.isNotEmpty, 'Prop ID must be non-empty');
    assert(prop.displayName.isNotEmpty, 'Prop display name must be non-empty');
  }
  print('PASS: all 6 props exist with non-empty IDs and names');

  // Test 2: all collision radii are positive
  for (final prop in HallFurnishingManifest.props) {
    assert(prop.collisionRadiusM > 0, 'Collision radius must be positive');
  }
  print('PASS: all collision radii are positive');

  // Test 3: all prop IDs are unique
  final ids = <String>{};
  for (final prop in HallFurnishingManifest.props) {
    assert(ids.add(prop.propId), 'Prop IDs must be unique');
  }
  print('PASS: all prop IDs are unique');

  // Test 4: interactive props returns exactly 2
  final interactives = HallFurnishingManifest.interactiveProps();
  assert(interactives.length == 2, 'Should have exactly 2 interactive props');
  assert(interactives.any((p) => p.propId == 'hall.umbrella-stand'), 'Missing umbrella stand');
  assert(interactives.any((p) => p.propId == 'hall.light-switch'), 'Missing light switch');
  print('PASS: interactive props returns exactly 2 (umbrella stand, light switch)');

  // Test 5: material families are valid strings (non-empty)
  for (final prop in HallFurnishingManifest.props) {
    assert(prop.materialFamily.isNotEmpty, 'Material family must be non-empty');
  }
  print('PASS: material families are valid strings (non-empty)');

  // Test 6: validate() returns true
  assert(HallFurnishingManifest.validate() == true, 'validate() should return true');
  print('PASS: validate() returns true');

  // Test 7: findProp returns correct prop for each ID
  for (final prop in HallFurnishingManifest.props) {
    final found = HallFurnishingManifest.findProp(prop.propId);
    assert(found != null, 'findProp should find the prop');
    assert(found?.propId == prop.propId, 'findProp should return the correct prop');
  }
  print('PASS: findProp returns correct prop for each ID');
}
