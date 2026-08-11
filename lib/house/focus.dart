import 'dart:math' as math;

import '../config.dart';
import '../engine/camera.dart';
import '../engine/math3.dart';
import 'inventory.dart';
import 'house.dart';
import 'interaction.dart'
    show
        raycastMantle,
        raycastPortal,
        raycastWindow,
        hasLineOfSight,
        effectiveRoomRaycastDistance;

import '../story/physical_aftermath_manager.dart';

enum FocusKind { mantle, portal, window, inventory, aftermath, none }

class FocusSnapshot {
  final FocusKind kind;
  final String? id;
  final String? prompt;

  const FocusSnapshot({required this.kind, this.id, this.prompt});

  const FocusSnapshot.none() : kind = FocusKind.none, id = null, prompt = null;
}

/// Deterministic focus resolver.
///
/// This is intentionally pure/deterministic: it uses only the provided camera,
/// house, and currentRoom. It does not persist runtime handles into save state.
FocusSnapshot resolveFocus({
  required Camera camera,
  required House house,
  required String currentRoom,
  HouseInventory? inventory,
  PhysicalAftermathManager? aftermathManager,
}) {
  final mantle = raycastMantle(camera, house, currentRoom);
  if (mantle != null && !mantle.broken) {
    final prompt = mantle.lit ? mantle.name : mantle.name;
    return FocusSnapshot(kind: FocusKind.mantle, id: mantle.id, prompt: prompt);
  }

  final portal = raycastPortal(camera, house, currentRoom);
  if (portal != null) {
    final prompt = portal.passable ? 'close door' : 'open door';
    return FocusSnapshot(kind: FocusKind.portal, id: portal.id, prompt: prompt);
  }

  final window = raycastWindow(camera, house, currentRoom);
  if (window != null) {
    return const FocusSnapshot(
      kind: FocusKind.window,
      id: 'shutter',
      prompt: 'the shutter',
    );
  }

  // Check physical aftermath residues in the current room
  final aftermathItem = raycastAftermath(
    camera: camera,
    house: house,
    aftermathManager: aftermathManager,
    currentRoom: currentRoom,
  );
  if (aftermathItem != null) {
    return FocusSnapshot(
      kind: FocusKind.aftermath,
      id: aftermathItem.id,
      prompt: 'inspect the ${aftermathItem.name}',
    );
  }

  final placement = raycastInventory(
    camera: camera,
    house: house,
    inventory: inventory,
    currentRoom: currentRoom,
  );
  if (placement != null) {
    final asset = inventory!.assetFor(placement.assetId);
    return FocusSnapshot(
      kind: FocusKind.inventory,
      id: placement.focusId ?? placement.id,
      prompt: placement.focusId == null
          ? 'inspect the ${asset.kind}'
          : 'inspect ${placement.focusId}',
    );
  }

  return const FocusSnapshot.none();
}

InventoryPlacement? raycastInventory({
  required Camera camera,
  required House house,
  required HouseInventory? inventory,
  required String currentRoom,
  double distance = raycastDistance,
  double coneAngle = raycastCone,
}) {
  if (inventory == null) return null;
  final room = house.byId(currentRoom);
  if (room == null) return null;

  final effectiveDist = effectiveRoomRaycastDistance(
    house,
    room,
    maxDistance: distance,
  );

  InventoryPlacement? nearest;
  var bestScore = double.infinity;
  for (final placement in inventory.placementsFor(currentRoom)) {
    if (!placement.pickable) continue;
    final asset = inventory.assetFor(placement.assetId);
    final position = placement.runtimePosition(inventory.modelScale);
    final vertical = placement.runtimeVerticalBounds(
      asset,
      inventory.modelScale,
    );
    final center = room.toWorld(
      position + Vec3(0, (vertical.x + vertical.y) * 0.5, 0),
    );
    final toTarget = center - camera.eye;
    final targetDistance = toTarget.length;
    if (targetDistance < 0.01 || targetDistance > effectiveDist) continue;
    final angle = math.acos(
      toTarget.normalized.dot(camera.fwd).clamp(-1.0, 1.0),
    );
    if (angle > coneAngle) continue;
    // Check line of sight against solid walls
    if (!hasLineOfSight(house, currentRoom, camera.eye, center)) {
      continue;
    }
    final score = angle + (targetDistance / effectiveDist) * 0.2;
    if (score < bestScore) {
      nearest = placement;
      bestScore = score;
    }
  }
  return nearest;
}

/// Raycasts against physical aftermath items located in [currentRoom].
PhysicalAftermathItem? raycastAftermath({
  required Camera camera,
  required House house,
  required PhysicalAftermathManager? aftermathManager,
  required String currentRoom,
  double distance = raycastDistance,
  double coneAngle = raycastCone,
}) {
  if (aftermathManager == null) return null;
  final room = house.byId(currentRoom);
  if (room == null) return null;

  final residues = aftermathManager.getResiduesForRoom(currentRoom);
  if (residues.isEmpty) return null;

  final size = house.effectiveSize(room);
  final effectiveDist = effectiveRoomRaycastDistance(
    house,
    room,
    maxDistance: distance,
  );

  for (final item in residues) {
    // Placement near threshold/sideboard
    final itemPos = room.origin + Vec3(size.x * 0.35, 0.6, size.z * 0.35);
    final toTarget = itemPos - camera.eye;
    final dist = toTarget.length;
    if (dist < 0.01 || dist > effectiveDist) continue;
    final norm = toTarget.normalized;
    final angle = math.acos(norm.dot(camera.fwd).clamp(-1.0, 1.0));
    if (angle <= coneAngle && hasLineOfSight(house, currentRoom, camera.eye, itemPos)) {
      return item;
    }
  }
  return null;
}
