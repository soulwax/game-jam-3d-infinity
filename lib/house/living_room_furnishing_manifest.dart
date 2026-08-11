/// Manifest for living room furnishing props.
library living_room_furnishing_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Enum representing the available props in the living room.
enum LivingRoomProp {
  /// Wireless set prop.
  wirelessSet,
  /// Mantle clock prop.
  mantleClock,
  /// Coal scuttle prop.
  coalScuttle,
  /// Fire tools prop.
  fireTools,
  /// Armchair prop.
  armchair,
  /// Occasional table prop.
  occasionalTable,
  /// Rug prop.
  rug,
  /// Curtains prop.
  curtains,
  /// Photograph prop.
  photograph,
}

/// Class defining the living room furnishing manifest.
class LivingRoomFurnishingManifest {
  /// All props with authored placements in the living room.
  static const List<PropPlacement> props = [
    PropPlacement(
      propId: 'living_room.wireless-set',
      displayName: 'Wireless Set',
      roomId: 'living_room',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 1.6,
      positionY: 0.75,
      positionZ: 1.4,
      rotationYDegrees: -45.0,
      collisionRadiusM: 0.2,
      collisionHeightM: 0.35,
      isInteractive: true,
      stateVariant: 'amber-dial-glow',
    ),
    PropPlacement(
      propId: 'living_room.mantle-clock',
      displayName: 'Mantle Clock',
      roomId: 'living_room',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 0.0,
      positionY: 1.35,
      positionZ: -2.1,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.15,
      collisionHeightM: 0.25,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'living_room.coal-scuttle',
      displayName: 'Coal Scuttle',
      roomId: 'living_room',
      materialFamily: 'mat-iron-cast',
      positionX: -0.7,
      positionY: 0.2,
      positionZ: -2.0,
      rotationYDegrees: 30.0,
      collisionRadiusM: 0.2,
      collisionHeightM: 0.4,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'living_room.fire-tools',
      displayName: 'Fire Tools',
      roomId: 'living_room',
      materialFamily: 'mat-brass-wrought',
      positionX: 0.7,
      positionY: 0.4,
      positionZ: -2.0,
      rotationYDegrees: -30.0,
      collisionRadiusM: 0.12,
      collisionHeightM: 0.75,
    ),
    PropPlacement(
      propId: 'living_room.armchair',
      displayName: 'Armchair',
      roomId: 'living_room',
      materialFamily: 'mat-fabric-curtains',
      positionX: 0.0,
      positionY: 0.45,
      positionZ: -0.5,
      rotationYDegrees: 180.0,
      collisionRadiusM: 0.45,
      collisionHeightM: 0.9,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'living_room.occasional-table',
      displayName: 'Occasional Table',
      roomId: 'living_room',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 1.6,
      positionY: 0.6,
      positionZ: 1.4,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.35,
      collisionHeightM: 0.65,
    ),
    PropPlacement(
      propId: 'living_room.rug',
      displayName: 'Rug',
      roomId: 'living_room',
      materialFamily: 'mat-fabric-curtains',
      positionX: 0.0,
      positionY: 0.01,
      positionZ: -1.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.9,
      collisionHeightM: 0.02,
    ),
    PropPlacement(
      propId: 'living_room.curtains',
      displayName: 'Curtains',
      roomId: 'living_room',
      materialFamily: 'mat-fabric-curtains',
      positionX: -2.1,
      positionY: 1.5,
      positionZ: 0.0,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.15,
      collisionHeightM: 2.1,
      stateVariant: 'alpha-masked',
    ),
    PropPlacement(
      propId: 'living_room.photograph',
      displayName: 'Photograph',
      roomId: 'living_room',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 0.4,
      positionY: 1.35,
      positionZ: -2.1,
      rotationYDegrees: -15.0,
      collisionRadiusM: 0.1,
      collisionHeightM: 0.18,
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
