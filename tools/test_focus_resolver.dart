import 'dart:io';

import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/inventory.dart';

void _fail(String message) => throw StateError(message);

void _expect(bool cond, String message) {
  if (!cond) _fail(message);
}

void main() {
  final house = House(42);
  final inventory = HouseInventory.decode(
    File('assets/house/inventory.json').readAsStringSync(),
  );

  // Place camera in hall, facing roughly towards front-door/stair area.
  final camera = Camera();
  camera
    ..eye = Vec3(5.5, 1.65, 3.5)
    ..fwd = Vec3(0, 0, 1).normalized;

  final snap1 = resolveFocus(
    camera: camera,
    house: house,
    currentRoom: 'hall',
    inventory: inventory,
  );

  // Determinism: repeated calls with same inputs must produce same output.
  final snap2 = resolveFocus(
    camera: camera,
    house: house,
    currentRoom: 'hall',
    inventory: inventory,
  );

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

  final placement = inventory.placements.firstWhere(
    (candidate) => candidate.id == 'placement-hall-clock',
  );
  final asset = inventory.assetFor(placement.assetId);
  final vertical = placement.runtimeVerticalBounds(asset, inventory.modelScale);
  final center = house
      .byId('hall')!
      .toWorld(
        placement.runtimePosition(inventory.modelScale) +
            Vec3(0, (vertical.x + vertical.y) * 0.5, 0),
      );
  final inventoryCamera = Camera()
    ..eye = center - Vec3(0, 0, 1.0)
    ..fwd = Vec3(0, 0, 1).normalized;
  final inventoryFocus = raycastInventory(
    camera: inventoryCamera,
    house: house,
    currentRoom: 'hall',
    inventory: inventory,
  );
  _expect(
    inventoryFocus?.id == 'placement-hall-clock' &&
        inventoryFocus?.focusId == 'front-door-clock',
    'authored pickable inventory focus resolves its stable focus ID',
  );

  // Note: none is allowed for arbitrary camera poses. The contract guarantees
  // deterministic outputs and prompt/kind consistency, not that every pose hits
  // a focus target.

  print('focus resolver: determinism + prompt sanity pass');
}
