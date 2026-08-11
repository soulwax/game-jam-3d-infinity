/// Defines historical detail layers applied to room surfaces.
class SurfaceHistoryLayer {
  /// The identifier for the room.
  final String roomId;

  /// The base material key (e.g., 'plaster_distemper', 'wood_floorboards').
  final String baseMaterialKey;

  /// The number of paint generations (1..4).
  final int paintGenerationsCount;

  /// Whether wallpaper paste shadows are visible.
  final bool wallpaperPasteShadows;

  /// The number of visible nail holes.
  final int nailHolesCount;

  /// The intensity of the wear path (0.0 to 1.0).
  final double wearPathIntensity01;

  /// Whether shadow lines from furniture are visible.
  final bool furnitureShadowLines;

  /// Whether hand-height marks are visible on the walls.
  final bool handHeightMarks;

  /// The active state variant name for this surface.
  final String activeStateVariant;

  /// Creates a new surface history layer.
  const SurfaceHistoryLayer({
    required this.roomId,
    required this.baseMaterialKey,
    required this.paintGenerationsCount,
    required this.wallpaperPasteShadows,
    required this.nailHolesCount,
    required this.wearPathIntensity01,
    required this.furnitureShadowLines,
    required this.handHeightMarks,
    required this.activeStateVariant,
  });

  /// Converts this history layer into a JSON-compatible map.
  Map<String, dynamic> toJson() {
    return {
      'roomId': roomId,
      'baseMaterialKey': baseMaterialKey,
      'paintGenerationsCount': paintGenerationsCount,
      'wallpaperPasteShadows': wallpaperPasteShadows,
      'nailHolesCount': nailHolesCount,
      'wearPathIntensity01': wearPathIntensity01,
      'furnitureShadowLines': furnitureShadowLines,
      'handHeightMarks': handHeightMarks,
      'activeStateVariant': activeStateVariant,
    };
  }
}

/// A pass that defines historical surface details for all rooms.
class SurfaceDetailHistoryPass {
  /// Authored surface history profiles for all 8 rooms.
  static const Map<String, SurfaceHistoryLayer> roomHistoryProfiles = {
    'hall': SurfaceHistoryLayer(
      roomId: 'hall',
      baseMaterialKey: 'plaster_distemper',
      paintGenerationsCount: 3,
      wallpaperPasteShadows: true,
      nailHolesCount: 4,
      wearPathIntensity01: 0.85,
      furnitureShadowLines: true,
      handHeightMarks: true,
      activeStateVariant: 'high-traffic-entry',
    ),
    'kitchen': SurfaceHistoryLayer(
      roomId: 'kitchen',
      baseMaterialKey: 'plaster_distemper',
      paintGenerationsCount: 4,
      wallpaperPasteShadows: false,
      nailHolesCount: 2,
      wearPathIntensity01: 0.75,
      furnitureShadowLines: true,
      handHeightMarks: true,
      activeStateVariant: 'grease-and-steam',
    ),
    'living-room': SurfaceHistoryLayer(
      roomId: 'living-room',
      baseMaterialKey: 'plaster_distemper',
      paintGenerationsCount: 2,
      wallpaperPasteShadows: true,
      nailHolesCount: 6,
      wearPathIntensity01: 0.50,
      furnitureShadowLines: true,
      handHeightMarks: false,
      activeStateVariant: 'soot-and-damp-stain',
    ),
    'cellar': SurfaceHistoryLayer(
      roomId: 'cellar',
      baseMaterialKey: 'brick_whitewash',
      paintGenerationsCount: 1,
      wallpaperPasteShadows: false,
      nailHolesCount: 1,
      wearPathIntensity01: 0.60,
      furnitureShadowLines: false,
      handHeightMarks: true,
      activeStateVariant: 'flaking-whitewash',
    ),
    'bedroom': SurfaceHistoryLayer(
      roomId: 'bedroom',
      baseMaterialKey: 'plaster_distemper',
      paintGenerationsCount: 2,
      wallpaperPasteShadows: true,
      nailHolesCount: 3,
      wearPathIntensity01: 0.40,
      furnitureShadowLines: true,
      handHeightMarks: false,
      activeStateVariant: 'faded-chintz',
    ),
    'landing': SurfaceHistoryLayer(
      roomId: 'landing',
      baseMaterialKey: 'wood_floorboards',
      paintGenerationsCount: 2,
      wallpaperPasteShadows: false,
      nailHolesCount: 2,
      wearPathIntensity01: 0.70,
      furnitureShadowLines: false,
      handHeightMarks: true,
      activeStateVariant: 'runner-edge-fade',
    ),
    'bathroom': SurfaceHistoryLayer(
      roomId: 'bathroom',
      baseMaterialKey: 'tile_painted',
      paintGenerationsCount: 3,
      wallpaperPasteShadows: false,
      nailHolesCount: 1,
      wearPathIntensity01: 0.45,
      furnitureShadowLines: true,
      handHeightMarks: true,
      activeStateVariant: 'condensation-runs',
    ),
    'spare-room': SurfaceHistoryLayer(
      roomId: 'spare-room',
      baseMaterialKey: 'plaster_distemper',
      paintGenerationsCount: 1,
      wallpaperPasteShadows: false,
      nailHolesCount: 1,
      wearPathIntensity01: 0.15,
      furnitureShadowLines: false,
      handHeightMarks: false,
      activeStateVariant: 'disused-pale',
    ),
  };

  /// Finds the history profile for a specific room.
  static SurfaceHistoryLayer? findRoomHistory(String roomId) {
    return roomHistoryProfiles[roomId];
  }

  /// Converts all surface history profiles to JSON.
  static Map<String, dynamic> toJson() {
    return roomHistoryProfiles.map(
      (key, value) => MapEntry(key, value.toJson()),
    );
  }

  /// Validates the surface history profiles.
  static bool validate() {
    final requiredRooms = {
      'hall', 'kitchen', 'living-room', 'cellar', 'bedroom', 'landing',
      'bathroom', 'spare-room'
    };

    if (roomHistoryProfiles.length != requiredRooms.length) {
      return false;
    }

    for (final room in requiredRooms) {
      if (!roomHistoryProfiles.containsKey(room)) {
        return false;
      }
    }

    for (final profile in roomHistoryProfiles.values) {
      if (profile.baseMaterialKey.isEmpty) return false;
      if (profile.paintGenerationsCount < 1 || profile.paintGenerationsCount > 4) return false;
      if (profile.nailHolesCount < 0) return false;
      if (profile.wearPathIntensity01 < 0.0 || profile.wearPathIntensity01 > 1.0) return false;
      if (profile.activeStateVariant.isEmpty) return false;
    }

    return true;
  }
}
