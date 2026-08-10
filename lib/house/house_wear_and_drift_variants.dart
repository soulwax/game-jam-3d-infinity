/// Representation of per-room visual wear & drift state in H-24.
class RoomWearState {
  final String roomId;
  final double dampIntensity; // 0.0 (pristine) to 1.0 (heavy moisture/mould)
  final double wallpaperPeelFraction; // 0.0 to 1.0
  final double floorboardDriftMm; // 0.0 to 5.0 mm offset
  final double timberWearFactor; // 0.0 to 1.0

  const RoomWearState({
    required this.roomId,
    required this.dampIntensity,
    required this.wallpaperPeelFraction,
    required this.floorboardDriftMm,
    required this.timberWearFactor,
  });

  Map<String, dynamic> toJson() => {
        'roomId': roomId,
        'dampIntensity': dampIntensity,
        'wallpaperPeelFraction': wallpaperPeelFraction,
        'floorboardDriftMm': floorboardDriftMm,
        'timberWearFactor': timberWearFactor,
      };

  factory RoomWearState.fromJson(Map<String, dynamic> json) => RoomWearState(
        roomId: json['roomId'] as String,
        dampIntensity: (json['dampIntensity'] as num).toDouble(),
        wallpaperPeelFraction: (json['wallpaperPeelFraction'] as num).toDouble(),
        floorboardDriftMm: (json['floorboardDriftMm'] as num).toDouble(),
        timberWearFactor: (json['timberWearFactor'] as num).toDouble(),
      );
}

/// H-24 Week 2/3 Wear, Displacement, Drift & Damp Variants Manager.
class HouseWearAndDriftVariants {
  /// Computes room wear and drift visual states based on campaign day (Days 1 to 21).
  static Map<String, RoomWearState> computeRoomWearStates(int campaignDay) {
    final dayProgress = ((campaignDay - 1) / 20.0).clamp(0.0, 1.0); // 0.0 on Day 1 to 1.0 on Day 21

    return {
      'living-room': RoomWearState(
        roomId: 'living-room',
        dampIntensity: (0.10 + dayProgress * 0.40).clamp(0.0, 1.0),
        wallpaperPeelFraction: (0.05 + dayProgress * 0.35).clamp(0.0, 1.0),
        floorboardDriftMm: dayProgress * 1.5,
        timberWearFactor: 0.15 + dayProgress * 0.30,
      ),
      'hall': RoomWearState(
        roomId: 'hall',
        dampIntensity: (0.15 + dayProgress * 0.45).clamp(0.0, 1.0),
        wallpaperPeelFraction: (0.08 + dayProgress * 0.40).clamp(0.0, 1.0),
        floorboardDriftMm: dayProgress * 2.0,
        timberWearFactor: 0.20 + dayProgress * 0.40,
      ),
      'kitchen': RoomWearState(
        roomId: 'kitchen',
        dampIntensity: (0.25 + dayProgress * 0.60).clamp(0.0, 1.0),
        wallpaperPeelFraction: (0.02 + dayProgress * 0.20).clamp(0.0, 1.0),
        floorboardDriftMm: dayProgress * 1.0,
        timberWearFactor: 0.10 + dayProgress * 0.25,
      ),
      'cellar': RoomWearState(
        roomId: 'cellar',
        dampIntensity: (0.40 + dayProgress * 0.55).clamp(0.0, 1.0),
        wallpaperPeelFraction: 0.0, // Cellar is masonry/whitewash
        floorboardDriftMm: dayProgress * 4.0,
        timberWearFactor: 0.30 + dayProgress * 0.60,
      ),
      'bedroom': RoomWearState(
        roomId: 'bedroom',
        dampIntensity: (0.05 + dayProgress * 0.30).clamp(0.0, 1.0),
        wallpaperPeelFraction: (0.02 + dayProgress * 0.25).clamp(0.0, 1.0),
        floorboardDriftMm: dayProgress * 1.2,
        timberWearFactor: 0.10 + dayProgress * 0.20,
      ),
    };
  }
}
