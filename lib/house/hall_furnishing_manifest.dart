/// Manifest for hall furnishing props.
library hall_furnishing_manifest;

import 'package:quarantine/engine/material_family_library.dart';

/// Enum representing the available props in the hall.
enum HallProp {
  /// Coat hooks prop.
  coatHooks,
  /// Doormat prop.
  doormat,
  /// Umbrella stand prop.
  umbrellaStand,
  /// Stair runner prop.
  stairRunner,
  /// Picture frames prop.
  pictureFrames,
  /// Light switch prop.
  lightSwitch,
}

/// Data class representing the placement of a prop in a room.
class PropPlacement {
  /// Unique identifier for the prop placement.
  final String propId;
  /// Human-readable display name.
  final String displayName;
  /// ID of the room the prop is located in.
  final String roomId;
  /// The material family key for rendering.
  final String materialFamily;
  /// X coordinate in world space.
  final double positionX;
  /// Y coordinate in world space.
  final double positionY;
  /// Z coordinate in world space.
  final double positionZ;
  /// Yaw rotation in degrees.
  final double rotationYDegrees;
  /// Uniform scale factor.
  final double scaleUniform;
  /// Collision sphere radius in meters.
  final double collisionRadiusM;
  /// Collision cylinder height in meters.
  final double collisionHeightM;
  /// Whether the prop can be picked or focused.
  final bool isInteractive;
  /// Optional visual variant of the prop.
  final String? stateVariant;

  /// Creates a [PropPlacement].
  const PropPlacement({
    required this.propId,
    required this.displayName,
    required this.roomId,
    required this.materialFamily,
    required this.positionX,
    required this.positionY,
    required this.positionZ,
    required this.rotationYDegrees,
    this.scaleUniform = 1.0,
    required this.collisionRadiusM,
    required this.collisionHeightM,
    this.isInteractive = false,
    this.stateVariant,
  });

  /// Converts the placement to a JSON map.
  Map<String, dynamic> toJson() => {
        'propId': propId,
        'displayName': displayName,
        'roomId': roomId,
        'materialFamily': materialFamily,
        'positionX': positionX,
        'positionY': positionY,
        'positionZ': positionZ,
        'rotationYDegrees': rotationYDegrees,
        'scaleUniform': scaleUniform,
        'collisionRadiusM': collisionRadiusM,
        'collisionHeightM': collisionHeightM,
        'isInteractive': isInteractive,
        if (stateVariant != null) 'stateVariant': stateVariant,
      };
}

/// Class defining the hall furnishing manifest.
class HallFurnishingManifest {
  /// All props with authored placements in the hall.
  static const List<PropPlacement> props = [
    PropPlacement(
      propId: 'hall.coat-hooks',
      displayName: 'Coat Hooks',
      roomId: 'hall',
      materialFamily: 'mat-iron-cast',
      positionX: 1.0,
      positionY: 1.6,
      positionZ: 0.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.15,
      collisionHeightM: 1.6,
      stateVariant: 'three-occupied',
    ),
    PropPlacement(
      propId: 'hall.doormat',
      displayName: 'Doormat',
      roomId: 'hall',
      materialFamily: 'mat-fabric-curtains',
      positionX: 0.0,
      positionY: 0.01,
      positionZ: 0.5,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.3,
      collisionHeightM: 0.02,
      stateVariant: 'worn-center',
    ),
    PropPlacement(
      propId: 'hall.umbrella-stand',
      displayName: 'Umbrella Stand',
      roomId: 'hall',
      materialFamily: 'mat-ceramic-glaze',
      positionX: 0.8,
      positionY: 0.0,
      positionZ: 0.2,
      rotationYDegrees: 45.0,
      collisionRadiusM: 0.12,
      collisionHeightM: 0.55,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'hall.stair-runner',
      displayName: 'Stair Runner',
      roomId: 'hall',
      materialFamily: 'mat-fabric-linen-sheet',
      positionX: -1.0,
      positionY: 0.0,
      positionZ: 2.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.4,
      collisionHeightM: 0.01,
      stateVariant: 'threadbare-edges',
    ),
    PropPlacement(
      propId: 'hall.picture-frames',
      displayName: 'Picture Frames',
      roomId: 'hall',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 1.5,
      positionY: 1.8,
      positionZ: 1.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.25,
      collisionHeightM: 0.3,
    ),
    PropPlacement(
      propId: 'hall.light-switch',
      displayName: 'Light Switch',
      roomId: 'hall',
      materialFamily: 'mat-enamel-white',
      positionX: 0.2,
      positionY: 1.3,
      positionZ: 0.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.04,
      collisionHeightM: 0.08,
      isInteractive: true,
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
