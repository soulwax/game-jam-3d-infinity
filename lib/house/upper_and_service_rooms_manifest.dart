/// Manifest for upper and service rooms (Landing, Bathroom, Spare Room).
library upper_and_service_rooms_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Class defining the manifest for upper and service rooms.
class UpperAndServiceRoomsManifest {
  /// All props with authored placements in the landing.
  static const List<PropPlacement> landingProps = [
    PropPlacement(
      propId: 'landing.stair-runner-end',
      displayName: 'Stair Runner End',
      roomId: 'landing',
      materialFamily: 'mat-fabric-curtains',
      positionX: 0.0,
      positionY: 0.0,
      positionZ: 0.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.5,
      collisionHeightM: 0.02,
    ),
    PropPlacement(
      propId: 'landing.airing-cupboard-door',
      displayName: 'Airing Cupboard Door',
      roomId: 'landing',
      materialFamily: 'mat-wood-oak-polished',
      positionX: 1.0,
      positionY: 1.0,
      positionZ: 0.0,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.4,
      collisionHeightM: 2.0,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'landing.light-pull-cord',
      displayName: 'Light Pull Cord',
      roomId: 'landing',
      materialFamily: 'mat-glass-clear-window',
      positionX: 0.5,
      positionY: 1.5,
      positionZ: 0.5,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.1,
      collisionHeightM: 0.5,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'landing.balustrade',
      displayName: 'Balustrade',
      roomId: 'landing',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: -1.0,
      positionY: 0.5,
      positionZ: -1.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.1,
      collisionHeightM: 1.0,
    ),
    PropPlacement(
      propId: 'landing.window-net-curtain',
      displayName: 'Window Net Curtain',
      roomId: 'landing',
      materialFamily: 'mat-fabric-curtains',
      positionX: 0.0,
      positionY: 1.5,
      positionZ: -2.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.5,
      collisionHeightM: 1.5,
    ),
  ];

  /// All props with authored placements in the bathroom.
  static const List<PropPlacement> bathroomProps = [
    PropPlacement(
      propId: 'bathroom.cast-iron-bath',
      displayName: 'Cast Iron Bath',
      roomId: 'bathroom',
      materialFamily: 'mat-iron-cast',
      positionX: 0.0,
      positionY: 0.3,
      positionZ: 0.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.8,
      collisionHeightM: 0.6,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'bathroom.pedestal-basin',
      displayName: 'Pedestal Basin',
      roomId: 'bathroom',
      materialFamily: 'mat-ceramic-glaze',
      positionX: 1.0,
      positionY: 0.5,
      positionZ: 1.0,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.3,
      collisionHeightM: 0.8,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'bathroom.medicine-cabinet',
      displayName: 'Medicine Cabinet',
      roomId: 'bathroom',
      materialFamily: 'mat-wood-oak-polished',
      positionX: 1.0,
      positionY: 1.5,
      positionZ: 1.0,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.2,
      collisionHeightM: 0.4,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'bathroom.chain-pull-cistern',
      displayName: 'Chain Pull Cistern',
      roomId: 'bathroom',
      materialFamily: 'mat-ceramic-glaze',
      positionX: -1.0,
      positionY: 1.8,
      positionZ: -1.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.2,
      collisionHeightM: 0.4,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'bathroom.bath-rack',
      displayName: 'Bath Rack',
      roomId: 'bathroom',
      materialFamily: 'mat-iron-cast',
      positionX: 0.0,
      positionY: 0.6,
      positionZ: 0.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.3,
      collisionHeightM: 0.1,
    ),
  ];

  /// All props with authored placements in the spare room.
  static const List<PropPlacement> spareRoomProps = [
    PropPlacement(
      propId: 'spare-room.single-bed',
      displayName: 'Single Bed',
      roomId: 'spareRoom',
      materialFamily: 'mat-iron-cast',
      positionX: 0.0,
      positionY: 0.4,
      positionZ: 0.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.6,
      collisionHeightM: 0.8,
    ),
    PropPlacement(
      propId: 'spare-room.chest-of-drawers',
      displayName: 'Chest of Drawers',
      roomId: 'spareRoom',
      materialFamily: 'mat-wood-oak-polished',
      positionX: 1.0,
      positionY: 0.5,
      positionZ: 1.0,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.4,
      collisionHeightM: 1.0,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'spare-room.utility-chair',
      displayName: 'Utility Chair',
      roomId: 'spareRoom',
      materialFamily: 'mat-wood-oak-polished',
      positionX: -1.0,
      positionY: 0.4,
      positionZ: -1.0,
      rotationYDegrees: 45.0,
      collisionRadiusM: 0.3,
      collisionHeightM: 0.8,
    ),
    PropPlacement(
      propId: 'spare-room.bare-curtain-rod',
      displayName: 'Bare Curtain Rod',
      roomId: 'spareRoom',
      materialFamily: 'mat-brass-wrought',
      positionX: 0.0,
      positionY: 2.0,
      positionZ: 2.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.1,
      collisionHeightM: 0.1,
    ),
    PropPlacement(
      propId: 'spare-room.paper-archive-box',
      displayName: 'Paper Archive Box',
      roomId: 'spareRoom',
      materialFamily: 'mat-plaster-clean',
      positionX: -1.0,
      positionY: 0.2,
      positionZ: 1.0,
      rotationYDegrees: 15.0,
      collisionRadiusM: 0.25,
      collisionHeightM: 0.3,
      isInteractive: true,
    ),
  ];

  /// Gets all props for all upper and service rooms.
  static List<PropPlacement> get allProps => [
        ...landingProps,
        ...bathroomProps,
        ...spareRoomProps,
      ];

  /// Finds a prop placement by its unique ID across all upper and service rooms.
  static PropPlacement? findProp(String propId) {
    for (final prop in allProps) {
      if (prop.propId == propId) return prop;
    }
    return null;
  }

  /// Returns only the interactive props for these rooms.
  static List<PropPlacement> interactiveProps() {
    return allProps.where((p) => p.isInteractive).toList();
  }

  /// Returns the full manifest as diagnostics JSON.
  static Map<String, dynamic> toJson() {
    return {
      'landingProps': landingProps.map((p) => p.toJson()).toList(),
      'bathroomProps': bathroomProps.map((p) => p.toJson()).toList(),
      'spareRoomProps': spareRoomProps.map((p) => p.toJson()).toList(),
    };
  }

  /// Validates the manifest props.
  static bool validate() {
    final library = MaterialFamilyLibrary();
    final ids = <String>{};

    for (final prop in allProps) {
      if (prop.propId.isEmpty) return false;
      if (!ids.add(prop.propId)) return false; // Not unique
      if (prop.collisionRadiusM <= 0) return false;
      if (prop.collisionHeightM <= 0) return false;
      if (library.getMaterial(prop.materialFamily) == null) return false;
    }

    return true;
  }
}
