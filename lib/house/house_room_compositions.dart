/// Representation of a room focal composition descriptor in H-20..22.
class RoomFocalComposition {
  final String roomId;
  final String primaryFocalFeature;
  final String secondaryFocalFeature;
  final String materialHierarchy; // e.g. "wet/dry porcelain", "cast-iron/coal", "polished timber"
  final bool isNavigationDominant; // ensures story/nav objects remain unobstructed

  const RoomFocalComposition({
    required this.roomId,
    required this.primaryFocalFeature,
    required this.secondaryFocalFeature,
    required this.materialHierarchy,
    required this.isNavigationDominant,
  });

  Map<String, dynamic> toJson() => {
        'roomId': roomId,
        'primaryFocalFeature': primaryFocalFeature,
        'secondaryFocalFeature': secondaryFocalFeature,
        'materialHierarchy': materialHierarchy,
        'isNavigationDominant': isNavigationDominant,
      };
}

/// H-20..22 House Room Focal Compositions & Material Hierarchy Manager.
class HouseRoomCompositions {
  /// Map of room focal compositions across house rooms.
  static const Map<String, RoomFocalComposition> compositions = {
    // H-20: Kitchen + cellar service batch
    'kitchen': RoomFocalComposition(
      roomId: 'kitchen',
      primaryFocalFeature: 'Cast-Iron Cooking Range',
      secondaryFocalFeature: 'Prep Worktable & Copper Kettle',
      materialHierarchy: 'cast-iron/copper/ceramic',
      isNavigationDominant: true,
    ),
    'cellar': RoomFocalComposition(
      roomId: 'cellar',
      primaryFocalFeature: 'Coal Bunker & Shovel',
      secondaryFocalFeature: 'Service Shelves & Water Meter',
      materialHierarchy: 'raw-coal/damp-masonry/rusted-iron',
      isNavigationDominant: true,
    ),

    // H-21: Bedroom + landing domestic/stair batch
    'bedroom': RoomFocalComposition(
      roomId: 'bedroom',
      primaryFocalFeature: 'Iron Bedstead & Wool Blanket',
      secondaryFocalFeature: 'Writing Desk & Journal',
      materialHierarchy: 'wrought-iron/stained-oak/fabric',
      isNavigationDominant: true,
    ),
    'hall-landing': RoomFocalComposition(
      roomId: 'hall-landing',
      primaryFocalFeature: 'Stairflight & Carved Newel Post',
      secondaryFocalFeature: 'Grandfather Clock Case',
      materialHierarchy: 'polished-mahogany/brass/carpet-runner',
      isNavigationDominant: true,
    ),

    // H-22: Bathroom + spare-room wet/storage batch
    'bathroom': RoomFocalComposition(
      roomId: 'bathroom',
      primaryFocalFeature: 'Enamel Clawfoot Tub & Copper Cistern',
      secondaryFocalFeature: 'Silvered Glass Mirror',
      materialHierarchy: 'wet-porcelain/silvered-glass/brass',
      isNavigationDominant: true,
    ),
    'spare-room': RoomFocalComposition(
      roomId: 'spare-room',
      primaryFocalFeature: 'Sheeted Storage Furniture',
      secondaryFocalFeature: 'Stacked Travelling Trunks',
      materialHierarchy: 'draped-linen/worn-leather/pine',
      isNavigationDominant: true,
    ),
  };
}
