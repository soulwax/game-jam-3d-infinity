import 'package:quarantine/config.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/interaction.dart';
import 'house_fixture.dart';

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
  final house = loadAuthoredHouse(seed: 42);
  final room = house.byId('living-room')!;
  _expect(
    room.mantles.isEmpty,
    'authored topology keeps renderer-only mantle fixtures out of the house graph',
  );
  final eye = room.origin + Vec3(1, playerEyeHeight, 1);
  _expect(
    raycastMantle(_facing(eye, eye + Vec3(0, 0, 1)), house, room.id) == null,
    'authored topology must not expose retired showcase mantle targets',
  );
  print('q8 interaction gating: authored house has no retired mantle fixtures');
  return;

}
