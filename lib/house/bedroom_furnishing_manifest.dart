/// Manifest for bedroom furnishing props.
library bedroom_furnishing_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Enum representing the available props in the bedroom.
enum BedroomProp {
  bedstead,
  eiderdown,
  wardrobe,
  dressingTable,
  washstand,
  ragRug,
}

/// Class defining the bedroom furnishing manifest.
class BedroomFurnishingManifest {
  /// All props with authored placements in the bedroom.
  static const List<PropPlacement> props = [
    PropPlacement(
      propId: 'bedroom.bedstead',
      displayName: 'Bedstead',
      roomId: 'bedroom',
      materialFamily: 'mat-iron-cast',
      positionX: -0.8,
      positionY: 0.5,
      positionZ: 1.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.9,
      collisionHeightM: 1.1,
    ),
    PropPlacement(
      propId: 'bedroom.eiderdown',
      displayName: 'Eiderdown',
      roomId: 'bedroom',
      materialFamily: 'mat-fabric-curtains',
      positionX: -0.8,
      positionY: 0.55,
      positionZ: 1.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.85,
      collisionHeightM: 0.2,
      stateVariant: 'sss-translucent',
    ),
    PropPlacement(
      propId: 'bedroom.wardrobe',
      displayName: 'Wardrobe',
      roomId: 'bedroom',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 1.6,
      positionY: 1.0,
      positionZ: -1.2,
      rotationYDegrees: -90.0,
      collisionRadiusM: 0.45,
      collisionHeightM: 2.0,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'bedroom.dressing-table',
      displayName: 'Dressing Table',
      roomId: 'bedroom',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 1.6,
      positionY: 0.8,
      positionZ: 1.0,
      rotationYDegrees: -90.0,
      collisionRadiusM: 0.35,
      collisionHeightM: 1.4,
      isInteractive: true,
      stateVariant: 'mirror-ssr-target',
    ),
    PropPlacement(
      propId: 'bedroom.washstand',
      displayName: 'Washstand',
      roomId: 'bedroom',
      materialFamily: 'mat-ceramic-glaze',
      positionX: -1.8,
      positionY: 0.8,
      positionZ: -1.2,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.3,
      collisionHeightM: 0.9,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'bedroom.rag-rug',
      displayName: 'Rag Rug',
      roomId: 'bedroom',
      materialFamily: 'mat-fabric-curtains',
      positionX: -0.8,
      positionY: 0.01,
      positionZ: -0.3,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.6,
      collisionHeightM: 0.02,
    ),
  ];

  /// Finds a prop placement by its unique ID.
  static PropPlacement? findProp(String propId) {
    for (final prop in props) {
      if (prop.propId == propId) return prop;
    }
    return null;
  }

  /// Returns only the interactive props.
  static List<PropPlacement> interactiveProps() {
    return props.where((p) => p.isInteractive).toList();
  }

  /// Returns the full manifest as diagnostics JSON.
  static Map<String, dynamic> toJson() {
    return {
      'props': props.map((p) => p.toJson()).toList(),
    };
  }

  /// Validates the manifest props.
  static bool validate() {
    final library = MaterialFamilyLibrary();
    final ids = <String>{};

    for (final prop in props) {
      if (prop.propId.isEmpty) return false;
      if (!ids.add(prop.propId)) return false; // Not unique
      if (prop.collisionRadiusM <= 0) return false;
      if (prop.collisionHeightM <= 0) return false;
      if (library.getMaterial(prop.materialFamily) == null) return false;
    }

    return true;
  }
}
