// R-07: Depth-aware transient route & back-to-front sorting verification.
//
// Verifies that:
//  1. Transients perform back-to-front depth sorting for correct alpha blending.
//  2. Transients behind opaque geometry (depthDistance > opaqueDepth) are depth-rejected.
//  3. Reduced motion dampens transient opacity alpha without breaking execution.
//  4. Expired transients (lifetimeProgress >= 1.0) are auto-cleaned.

import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/presentation/transient_depth_route.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final queue = TransientDepthQueue();

  final nearItem = TransientDepthItem(
    id: 1,
    type: TransientType.breath,
    position: Vec3(0, 0, 0.5),
    boundsRadius: 0.1,
    depthDistance: 0.5,
  );

  final farItem = TransientDepthItem(
    id: 2,
    type: TransientType.rain,
    position: Vec3(0, 0, 3.0),
    boundsRadius: 0.1,
    depthDistance: 3.0,
  );

  final occludedItem = TransientDepthItem(
    id: 3,
    type: TransientType.smoke,
    position: Vec3(0, 0, 8.0),
    boundsRadius: 0.1,
    depthDistance: 8.0, // Behind opaque depth wall at 5.0m
  );

  queue.enqueue(nearItem);
  queue.enqueue(farItem);
  queue.enqueue(occludedItem);

  check(queue.itemCount == 3, 'Initial queue count is 3');

  // Process frame with opaque depth wall at 5.0m
  final frameItems = queue.processFrame(
    deltaSeconds: 0.1,
    opaqueDepth: 5.0,
    reducedMotion: false,
  );

  check(frameItems.length == 2, 'Occluded item at 8.0m rejected by 5.0m depth wall');
  check(frameItems[0].id == 2, 'Far item (depth 3.0) is first after back-to-front sorting');
  check(frameItems[1].id == 1, 'Near item (depth 0.5) is second in back-to-front order');

  // Check reduced motion dampening
  final fullAlpha = nearItem.calculateOpacity(false);
  final reducedAlpha = nearItem.calculateOpacity(true);
  check(reducedAlpha < fullAlpha, 'Reduced motion dampens transient opacity alpha');

  // Advance time past lifetime to test auto-cleanup
  queue.processFrame(
    deltaSeconds: 3.0, // Exceeds 2.0s lifetime
    opaqueDepth: 10.0,
    reducedMotion: false,
  );

  check(queue.itemCount == 0, 'Expired transients auto-cleaned from queue');

  print('R-07: Depth-aware transient route test passed cleanly!');
}
