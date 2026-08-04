import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/house/house.dart';

void _fail(String message) => throw StateError(message);

void _expect(bool cond, String message) {
  if (!cond) _fail(message);
}

void main() {
  final house = House(42);

  // Place camera in hall, facing roughly towards front-door/stair area.
  final camera = Camera();
  camera
    ..eye = Vec3(5.5, 1.65, 3.5)
    ..fwd = Vec3(0, 0, 1).normalized;

  final snap1 = resolveFocus(camera: camera, house: house, currentRoom: 'hall');

  // Determinism: repeated calls with same inputs must produce same output.
  final snap2 = resolveFocus(camera: camera, house: house, currentRoom: 'hall');

  _expect(
    snap1.kind == snap2.kind &&
        snap1.id == snap2.id &&
        snap1.prompt == snap2.prompt,
    'resolveFocus must be deterministic for identical inputs',
  );

  // Basic sanity: prompt is either null or a non-empty string.
  // Additionally, prompt must never appear for the none-focus kind.
  if (snap1.prompt != null) {
    _expect(snap1.prompt!.isNotEmpty, 'prompt must be non-empty when present');
    _expect(
      snap1.kind != FocusKind.none,
      'prompt must only be present when there is a non-none focus kind',
    );
  }

  // Note: none is allowed for arbitrary camera poses. The contract guarantees
  // deterministic outputs and prompt/kind consistency, not that every pose hits
  // a focus target.

  print('focus resolver: determinism + prompt sanity pass');
}
