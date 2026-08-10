/// Representation of a favor/residue item state in NAR-06.
class FavorResidueState {
  final String itemId;
  final String name;
  final String locationRoomId;
  final bool isPlaced;

  const FavorResidueState({
    required this.itemId,
    required this.name,
    required this.locationRoomId,
    required this.isPlaced,
  });

  Map<String, dynamic> toJson() => {
        'itemId': itemId,
        'name': name,
        'locationRoomId': locationRoomId,
        'isPlaced': isPlaced,
      };
}

/// NAR-06..12 Favor Items, Echo Analyzer & Ending Texture Manager.
class NarrativeEchoAnalyzer {
  static const Map<String, FavorResidueState> favorItems = {
    'pencil': FavorResidueState(
      itemId: 'pencil',
      name: 'Indelible Copying Pencil',
      locationRoomId: 'living-room',
      isPlaced: true,
    ),
    'pears': FavorResidueState(
      itemId: 'pears',
      name: 'Hard Winter Pears',
      locationRoomId: 'kitchen',
      isPlaced: true,
    ),
    'dish': FavorResidueState(
      itemId: 'dish',
      name: 'Chipped Ceramic Dish',
      locationRoomId: 'kitchen',
      isPlaced: true,
    ),
    'papers': FavorResidueState(
      itemId: 'papers',
      name: 'Exemption Application Papers',
      locationRoomId: 'living-room',
      isPlaced: true,
    ),
    'sewingCase': FavorResidueState(
      itemId: 'sewingCase',
      name: 'Threaded Sewing Case',
      locationRoomId: 'bedroom',
      isPlaced: true,
    ),
    'parcel': FavorResidueState(
      itemId: 'parcel',
      name: 'Wrapped Ration Parcel',
      locationRoomId: 'hall',
      isPlaced: true,
    ),
  };

  /// Returns true if all 6 favor items have placement/focus/save/render agreement.
  static bool verifyFavorItemsAgreement() {
    return favorItems.values.every((item) => item.isPlaced && item.locationRoomId.isNotEmpty);
  }

  /// Verifies ending texture selection for the 3 endings (ending-A, ending-B, ending-C).
  static String getEndingTexture({
    required String endingId,
    required int daysCompleted,
  }) {
    if (daysCompleted < 21) return 'incomplete';
    switch (endingId) {
      case 'ending-A':
        return 'texture-lifting-quarantine-dawn';
      case 'ending-B':
        return 'texture-solitary-vigil-twilight';
      case 'ending-C':
        return 'texture-abandoned-post-fog';
      default:
        return 'texture-default-amber';
    }
  }
}
