import 'house.dart';

enum ExteriorCameraBand { front, rearService, sideBoundary, roofline, street }

/// Renderer-neutral exterior visibility policy. It owns no scene handles and
/// never changes simulation collision; it only chooses which authored exterior
/// cells are worth submitting for a fixed camera band.
final class ExteriorPvs {
  static const Set<String> allCells = {
    'front',
    'rear-service',
    'side-boundary',
    'roof-drainage',
    'street',
    'opposite-house',
    'neighbor-roofs',
  };

  const ExteriorPvs();

  Set<String> cellsForBand(ExteriorCameraBand band) => switch (band) {
    ExteriorCameraBand.front => {'front', 'street', 'opposite-house'},
    ExteriorCameraBand.rearService => {
      'rear-service',
      'side-boundary',
      'roof-drainage',
    },
    ExteriorCameraBand.sideBoundary => {'side-boundary', 'rear-service'},
    ExteriorCameraBand.roofline => {
      'roof-drainage',
      'neighbor-roofs',
      'opposite-house',
    },
    ExteriorCameraBand.street => {'street', 'front', 'opposite-house'},
  };

  /// Interior room to exterior band mapping used when exterior context is
  /// visible through windows. The current room remains the authority; this is
  /// deliberately conservative and returns at most three exterior cells.
  Set<String> cellsForRoom(String roomId) {
    final band = switch (roomId) {
      'hall' ||
      'living-room' ||
      'bedroom' ||
      'landing' => ExteriorCameraBand.front,
      'kitchen' || 'cellar' => ExteriorCameraBand.rearService,
      'bathroom' => ExteriorCameraBand.sideBoundary,
      'spare-room' => ExteriorCameraBand.roofline,
      _ => ExteriorCameraBand.front,
    };
    return cellsForBand(band);
  }

  void validateAgainst(House house) {
    final authored = house.rooms
        .expand((room) => cellsForRoom(room.id))
        .toSet();
    if (!authored.every(allCells.contains)) {
      throw StateError('exterior PVS references an unknown cell');
    }
  }
}
