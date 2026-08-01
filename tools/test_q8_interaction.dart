import 'package:quarantine/config.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/interaction.dart';

Never _fail(String message) =>
    throw StateError('q8 interaction test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

Camera _facing(Vec3 eye, Vec3 target) {
  final camera = Camera();
  camera.eye = eye;
  camera.fwd = (target - eye).normalized;
  return camera;
}

void main() {
  final house = House(42);
  final room = house.byId('living-room')!;
  _expect(
    room.mantles.length >= 2,
    'fixture assumes living-room keeps at least two mantles',
  );
  final near = room.mantles[0];
  final far = room.mantles[1];
  final nearWorld = room.toWorld(near.localAt);
  final farWorld = room.toWorld(far.localAt);

  final midpoint = (nearWorld + farWorld) * 0.5;
  final hit = raycastMantle(
    _facing(midpoint, nearWorld),
    house,
    'living-room',
  );
  _expect(
    hit?.id == near.id,
    'raycast must select the nearer of two candidate mantles, not the farther one',
  );
  _expect(hit?.id != far.id, 'raycast must not select the farther mantle');

  final examine = ExamineState();
  examine.startExamine(near);
  _expect(examine.active, 'examine starts active immediately on interact');
  _expect(near.examined, 'starting examine records the mantle as examined');

  examine.update(1.0);
  _expect(
    examine.active,
    'examine must still be active before its ~2s window elapses',
  );

  examine.breakExamine();
  _expect(
    !examine.active,
    'breakExamine must end the examine immediately regardless of remaining time',
  );
  _expect(
    examine.current == null,
    'breakExamine must clear the current mantle so no stale target lingers',
  );

  final naturalExpiry = ExamineState();
  naturalExpiry.startExamine(near);
  naturalExpiry.update(2.5);
  _expect(
    !naturalExpiry.active,
    'examine must expire on its own after ~2s without an explicit break',
  );

  final farAway = nearWorld + Vec3(0, 0, raycastDistance + 1.0);
  final missByDistance = raycastMantle(
    _facing(farAway, nearWorld),
    house,
    'living-room',
  );
  _expect(
    missByDistance == null,
    'raycast must not select a mantle beyond the configured max distance',
  );

  final sideOnEye = nearWorld - Vec3(1.5, 0, 0);
  final sideOnCamera = Camera()
    ..eye = sideOnEye
    ..fwd = Vec3(0, 0, 1);
  final missByAngle = raycastMantle(sideOnCamera, house, 'living-room');
  _expect(
    missByAngle == null,
    'raycast must not select a mantle outside the interaction cone even if in range',
  );

  print('q8 interaction gating (nearest-target, examine timing) tests passed');
}
