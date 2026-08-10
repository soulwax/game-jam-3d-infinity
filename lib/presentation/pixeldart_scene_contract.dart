import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/sim/rupture.dart';
import 'package:quarantine/sim/weather.dart';

/// I-00 — typed scene/resource/light/frame seam.
///
/// Captures every responsibility on `_PixeldartWebRuntime` that touches
/// simulation-owned types (House, Camera, WeatherDay, RuptureState) without
/// leaking any Pixeldart GPU handles through the boundary.  Concrete backends
/// implement this interface; the neutral runtime seam (`RendererRuntime`) stays
/// free of these game-domain types.
///
/// Implementors must not expose GPU handles, DOM references, or
/// Pixeldart-internal objects through this interface.
abstract interface class PixeldartSceneContract {
  // ── Scene assembly ──────────────────────────────────────────────────────

  /// Installs the retained room shells from authored [house] geometry.
  /// Must be idempotent: a second call with the same house is a no-op.
  void attachHouse(House house);

  /// Replaces the inventory binding with [inventory].  All previous inventory
  /// mesh handles are released before the new placements are submitted.
  void setInventory(HouseInventory inventory);

  // ── Per-frame state ──────────────────────────────────────────────────────

  /// Updates the PVS and exterior-shell visibility from the player's current
  /// room position.
  void setVisibleRooms(House house, String currentRoomId);

  /// Uploads the camera transform, projection, and viewport aspect ratio.
  void setCamera(Camera camera);

  /// Computes and uploads the per-frame lighting environment from the
  /// simulation's light facts.  No Pixeldart types appear in the signature;
  /// concrete implementations perform the mapping internally.
  void setLighting(
    House house,
    String currentRoomId,
    ({double x, double y, double z}) eye,
    double sunAngle,
    double daylight,
    WeatherDay weather,
    bool daylightThroughWindow, {
    double? currentHour,
  });

  /// Maps simulation-owned rupture stages into renderer effect weights without
  /// teaching the concrete backend game rules.
  void setPostProcess(
    RuptureState rupture, {
    required bool reducedMotion,
    double rainIntensity,
    double rainWindowVisibility,
  });

  /// Advances the renderer's per-frame clocks.  All values must be finite and
  /// non-negative.
  void setFrameClock({
    required double timeSeconds,
    required int historyEpoch,
    required int noiseSeed,
  });

  // ── Geometry invalidation ────────────────────────────────────────────────

  /// Rebuilds the mesh for a single room whose geometry has changed at runtime
  /// (e.g. after a state-driven geometry update).
  void refreshRoomGeometry(House house, String roomId);

  /// Rebuilds the portal leaf mesh for a single portal whose opening fraction
  /// has changed.
  void refreshPortalGeometry(House house, String portalId);

  // ── Resource loading ─────────────────────────────────────────────────────

  /// Loads texture images from the provided URL map.  Returns when all
  /// requested textures are resident (or have a neutral fallback applied).
  Future<void> loadTextures(Map<String, String> urls);

  // ── Diagnostics ──────────────────────────────────────────────────────────

  /// Human-readable surface label, e.g. "960x540".  Returns null when not
  /// yet initialized.
  String? get surfaceLabel;

  /// Human-readable per-frame stats label for the HUD.  Returns null when no
  /// frame has been submitted.
  String? get frameStatsLabel;

  /// True when the last submitted frame was within the draw/triangle/GPU-byte
  /// budget thresholds.
  bool get frameBudgetWithinLimits;

  /// The reason the backend fell back to a lower quality profile, or null when
  /// no fallback occurred.
  String? get profileFallbackReason;
}

// ── Null implementation ────────────────────────────────────────────────────

/// A no-op implementation used when no Pixeldart context is available (e.g.
/// legacy WebGL-1 path, headless tests).  Proves the boundary is free of GPU
/// handles: the class has zero dependencies on Pixeldart internals.
final class NullPixeldartSceneContract implements PixeldartSceneContract {
  const NullPixeldartSceneContract();

  @override
  void attachHouse(House house) {}

  @override
  void setInventory(HouseInventory inventory) {}

  @override
  void setVisibleRooms(House house, String currentRoomId) {}

  @override
  void setCamera(Camera camera) {}

  @override
  void setLighting(
    House house,
    String currentRoomId,
    ({double x, double y, double z}) eye,
    double sunAngle,
    double daylight,
    WeatherDay weather,
    bool daylightThroughWindow, {
    double? currentHour,
  }) {}

  @override
  void setPostProcess(
    RuptureState rupture, {
    required bool reducedMotion,
    double rainIntensity = 0,
    double rainWindowVisibility = 1,
  }) {}

  @override
  void setFrameClock({
    required double timeSeconds,
    required int historyEpoch,
    required int noiseSeed,
  }) {}

  @override
  void refreshRoomGeometry(House house, String roomId) {}

  @override
  void refreshPortalGeometry(House house, String portalId) {}

  @override
  Future<void> loadTextures(Map<String, String> urls) async {}

  @override
  String? get surfaceLabel => null;

  @override
  String? get frameStatsLabel => null;

  @override
  bool get frameBudgetWithinLimits => true;

  @override
  String? get profileFallbackReason => null;
}
