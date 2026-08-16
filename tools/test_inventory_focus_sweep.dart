import 'dart:io';
import 'dart:math' as math;

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/inventory.dart';
import 'house_fixture.dart';

void main() {
  final house = loadAuthoredHouse(seed: 42);
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
  if (checked != pickables.length) {
    throw StateError('expected ${pickables.length} pickables, checked $checked');
  }
  stdout.writeln('inventory focus sweep: $checked authored pickables resolve');
}

InventoryPlacement? _findFromSafePose({
  required House house,
  required HouseInventory inventory,
  required InventoryPlacement placement,
  required Vec3 center,
}) {
  final roomOrigin = house.byId(placement.roomId)!.origin;

  for (var i = 0; i < 32; i++) {
    final angle = i * (math.pi / 16.0);
    final dx = math.cos(angle);
    final dz = math.sin(angle);
    for (final distance in [
      0.4,
      0.6,
      0.8,
      1.0,
      1.2,
      1.4,
      1.6,
      1.8,
      2.0,
      2.2,
      2.3,
      2.5,
      2.8,
      3.0,
      3.2,
      3.5,
    ]) {
      final eye = Vec3(
        center.x + dx * distance,
        roomOrigin.y + playerEyeHeight,
        center.z + dz * distance,
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
      );
      if (focused?.id == placement.id) return focused;
    }
  }
  return null;
}
