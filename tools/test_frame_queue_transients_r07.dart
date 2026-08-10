import 'package:quarantine/engine/vec3.dart';
import 'package:quarantine/presentation/frame_queue_transients.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final queue = FrameQueueTransients();
  check(queue.activeCount == 0, 'starts empty');

  final id1 = queue.spawn(
    type: TransientType.breathFog,
    position: Vec3(0, 1.65, 0),
    durationSec: 1.0,
  );
  check(queue.activeCount == 1, '1 active item');
  check(queue.activeItems.first.progress == 0.0, 'initial progress is 0');
  check(queue.activeItems.first.alpha == 1.0, 'initial alpha is 1');

  // Step 0.5s
  queue.step(0.5);
  check(queue.activeCount == 1, 'still 1 item at 0.5s');
  check((queue.activeItems.first.progress - 0.5).abs() < 0.001, 'progress is 0.5');
  check((queue.activeItems.first.alpha - 0.5).abs() < 0.001, 'alpha is 0.5');

  // Step 0.6s -> total 1.1s -> item expires and is removed
  queue.step(0.6);
  check(queue.activeCount == 0, 'expired item automatically removed');

  print('frame queue transients VIS-016 / R-07: spawning, progress, alpha decay, and expiration cleanup pass');
}
