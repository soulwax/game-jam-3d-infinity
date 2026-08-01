import 'package:quarantine/engine/fps_motion.dart';
import 'package:quarantine/engine/math3.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

Vec3 _advanceFor(FpsMotion motion, Vec3 desired, int frames) {
  var velocity = Vec3(0, 0, 0);
  for (var frame = 0; frame < frames; frame++) {
    velocity = motion.advance(desired, 1 / frames, acceleration: 14, drag: 10);
  }
  return velocity;
}

void main() {
  final at30 = _advanceFor(FpsMotion(), Vec3(0, 0, 2), 30);
  final at60 = _advanceFor(FpsMotion(), Vec3(0, 0, 2), 60);
  final at120 = _advanceFor(FpsMotion(), Vec3(0, 0, 2), 120);
  _expect(
    (at30 - at60).length < 1e-9 && (at60 - at120).length < 1e-9,
    'acceleration must be frame-rate independent',
  );
  _expect(at60.z > 1.9 && at60.z < 2.0, 'movement must ease toward full speed');

  final motion = FpsMotion();
  _advanceFor(motion, Vec3(0, 0, 2), 60);
  final firstRelease = motion.advance(
    Vec3(0, 0, 0),
    1 / 60,
    acceleration: 14,
    drag: 10,
  );
  _expect(
    firstRelease.z > 0 && firstRelease.z < 2,
    'release must decelerate rather than stop instantly',
  );
  for (var frame = 0; frame < 120; frame++) {
    motion.advance(Vec3(0, 0, 0), 1 / 60, acceleration: 14, drag: 10);
  }
  _expect(motion.velocity.length < 1e-6, 'drag must settle to rest');
  motion.stop();
  _expect(motion.velocity.length == 0, 'modal controls must stop immediately');
  print('FPS acceleration, drag, and frame-rate invariance pass');
}
