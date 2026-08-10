import 'package:quarantine/engine/constrained_manipulation.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final controller = ConstrainedManipulationController();

  // 1. Verify descriptors for all three hero manipulables.
  final doorState = controller.getState('door-hall-living');
  check(doorState != null, 'door state exists');
  check(doorState!.descriptor.kind == ManipulableKind.hingedDoor, 'door is hingedDoor');
  check(doorState.fraction == 0.0, 'door starts closed');

  final drawerState = controller.getState('drawer-living-desk');
  check(drawerState != null, 'drawer state exists');
  check(drawerState!.descriptor.kind == ManipulableKind.oneAxisLinear, 'drawer is oneAxisLinear');

  final propState = controller.getState('prop-lantern');
  check(propState != null, 'prop state exists');
  check(propState!.descriptor.kind == ManipulableKind.portableProp, 'prop is portableProp');

  // 2. Drag below commit threshold settles back to closed.
  check(controller.beginHold('door-hall-living'), 'beginHold door');
  check(controller.updateDrag('door-hall-living', 20.0), 'updateDrag partial'); // ~0.1 rad, < 50%
  check(!doorState.isCommitted, 'partial drag is not committed');
  check(doorState.acousticOpeningFraction > 0.0, 'acoustic opening fraction updates continuously');
  final resultBelow = controller.endHold('door-hall-living');
  check(resultBelow == ManipulableCommitState.closed, 'partial drag releases to closed');
  check(doorState.fraction == 0.0, 'travel resets to 0.0');

  // 3. Drag above commit threshold settles to open.
  controller.beginHold('door-hall-living');
  controller.updateDrag('door-hall-living', 200.0); // ~0.9 rad, > 50%
  check(doorState.isCommitted, 'strong drag is committed');
  final resultAbove = controller.endHold('door-hall-living');
  check(resultAbove == ManipulableCommitState.open, 'strong drag releases to open');
  check(doorState.fraction == 1.0, 'travel settles to maxTravel');
  check(doorState.acousticOpeningFraction == 1.0, 'acoustic fraction reaches 1.0 when open');

  // 4. Accessibility toggle.
  final toggle1 = controller.toggleAccessibility('drawer-living-desk');
  check(toggle1 == ManipulableCommitState.open, 'accessibility toggle opens drawer');
  check(drawerState.fraction == 1.0, 'drawer fraction 1.0');

  final toggle2 = controller.toggleAccessibility('drawer-living-desk');
  check(toggle2 == ManipulableCommitState.closed, 'accessibility toggle closes drawer');
  check(drawerState.fraction == 0.0, 'drawer fraction 0.0');

  // 5. Reset & JSON round-trip.
  controller.resetAll();
  check(doorState.fraction == 0.0, 'resetAll closes door');
  check(drawerState.fraction == 0.0, 'resetAll closes drawer');

  final json = controller.toJson();
  check(json.containsKey('door-hall-living'), 'json contains door entry');
  check(json.containsKey('drawer-living-desk'), 'json contains drawer entry');
  check(json.containsKey('prop-lantern'), 'json contains prop entry');

  print('PF-04 constrained manipulation: hero door, drawer, prop, drag, settlement, and accessibility pass');
}
