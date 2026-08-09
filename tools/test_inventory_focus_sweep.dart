import 'dart:io';

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/inventory.dart';

void main() {
  final house = House(42);
  final inventory = HouseInventory.decode(
    File('assets/house/inventory.json').readAsStringSync(),
  );
  final pickables = inventory.placements.where(
    (placement) => placement.pickable,
  );
  var checked = 0;
  for (final placement in pickables) {
    final room = house.byId(placement.roomId)!;
    final asset = inventory.assetFor(placement.assetId);
    final vertical = placement.runtimeVerticalBounds(
      asset,
      inventory.modelScale,
    );
    final center = room.toWorld(
      placement.runtimePosition(inventory.modelScale) +
          Vec3(0, (vertical.x + vertical.y) * 0.5, 0),
    );
    final focused = _findFromSafePose(
      house: house,
      inventory: inventory,
      placement: placement,
      center: center,
    );
    if (focused?.id != placement.id) {
      throw StateError(
        'focus sweep missed ${placement.id}; got ${focused?.id ?? 'none'}',
      );
    }
    checked++;
  }
  if (checked != 14) {
    throw StateError('expected 14 pickables, checked $checked');
  }
  stdout.writeln('inventory focus sweep: $checked authored pickables resolve');
}

InventoryPlacement? _findFromSafePose({
  required House house,
  required HouseInventory inventory,
  required InventoryPlacement placement,
  required Vec3 center,
}) {
  final directions = [
    Vec3(1, 0, 0),
    Vec3(-1, 0, 0),
    Vec3(0, 0, 1),
    Vec3(0, 0, -1),
  ];
  for (final direction in directions) {
    for (final distance in [1.0, 1.5, 2.0, 2.4]) {
      final eye = Vec3(
        center.x + direction.x * distance,
        house.byId(placement.roomId)!.origin.y + playerEyeHeight,
        center.z + direction.z * distance,
      );
      final capsule = Capsule(
        base: eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0),
        tip: eye - Vec3(0, playerCapsuleRadius, 0),
      );
      if (capsule.intersectsStaticGeometry(house, placement.roomId)) continue;
      final camera = Camera()
        ..eye = eye
        ..fwd = (center - eye).normalized;
      final focused = raycastInventory(
        camera: camera,
        house: house,
        inventory: inventory,
        currentRoom: placement.roomId,
        distance: distance + 1.0,
      );
      if (focused?.id == placement.id) return focused;
    }
  }
  return null;
}
