import '../engine/camera.dart';
import 'house.dart';
import 'interaction.dart' show raycastMantle, raycastPortal, raycastWindow;

enum FocusKind { mantle, portal, window, none }

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

  return const FocusSnapshot.none();
}
