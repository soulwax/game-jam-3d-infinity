/// Manifest for kitchen furnishing props.
library kitchen_furnishing_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Enum representing the available props in the kitchen.
enum KitchenProp {
  /// Plate rack prop.
  plateRack,
  /// Enamel sink prop.
  enamelSink,
  /// Gas cooker prop.
  gasCooker,
  /// Scrubbed table prop.
  scrubbedTable,
  /// Chair 1 prop.
  chair1,
  /// Chair 2 prop.
  chair2,
  /// Tea caddy prop.
  teaCaddy,
  /// Bread bin prop.
  breadBin,
  /// Wall clock prop.
  wallClock,
  /// Roller towel prop.
  rollerTowel,
}

/// Class defining the kitchen furnishing manifest.
class KitchenFurnishingManifest {
  /// All props with authored placements in the kitchen.
  static const List<PropPlacement> props = [
    PropPlacement(
      propId: 'kitchen.plate-rack',
      displayName: 'Plate Rack',
      roomId: 'kitchen',
      materialFamily: 'mat-wood-oak-polished',
      positionX: -1.8,
      positionY: 1.5,
      positionZ: 2.2,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.2,
      collisionHeightM: 0.6,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'kitchen.enamel-sink',
      displayName: 'Enamel Sink',
      roomId: 'kitchen',
      materialFamily: 'mat-ceramic-glaze',
      positionX: -1.9,
      positionY: 0.85,
      positionZ: 0.8,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.35,
      collisionHeightM: 0.85,
      isInteractive: true,
      stateVariant: 'brass-taps-tarnished',
    ),
    PropPlacement(
      propId: 'kitchen.gas-cooker',
      displayName: 'Gas Cooker',
      roomId: 'kitchen',
      materialFamily: 'mat-iron-cast',
      positionX: -1.9,
      positionY: 0.85,
      positionZ: -0.6,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.35,
      collisionHeightM: 0.9,
      isInteractive: true,
      stateVariant: 'pilot-light-emissive',
    ),
    PropPlacement(
      propId: 'kitchen.scrubbed-table',
      displayName: 'Scrubbed Table',
      roomId: 'kitchen',
      materialFamily: 'mat-wood-oak-polished',
      positionX: 0.2,
      positionY: 0.75,
      positionZ: 0.5,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.6,
      collisionHeightM: 0.75,
      isInteractive: false,
      stateVariant: 'scuff-marks',
    ),
    PropPlacement(
      propId: 'kitchen.chair-1',
      displayName: 'Chair 1',
      roomId: 'kitchen',
      materialFamily: 'mat-wood-oak-polished',
      positionX: 0.2,
      positionY: 0.45,
      positionZ: 1.2,
      rotationYDegrees: 180.0,
      collisionRadiusM: 0.25,
      collisionHeightM: 0.85,
    ),
    PropPlacement(
      propId: 'kitchen.chair-2',
      displayName: 'Chair 2',
      roomId: 'kitchen',
      materialFamily: 'mat-wood-oak-polished',
      positionX: 0.2,
      positionY: 0.45,
      positionZ: -0.2,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.25,
      collisionHeightM: 0.85,
    ),
    PropPlacement(
      propId: 'kitchen.tea-caddy',
      displayName: 'Tea Caddy',
      roomId: 'kitchen',
      materialFamily: 'mat-iron-cast',
      positionX: -1.7,
      positionY: 0.9,
      positionZ: 1.6,
      rotationYDegrees: 15.0,
      collisionRadiusM: 0.08,
      collisionHeightM: 0.15,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'kitchen.bread-bin',
      displayName: 'Bread Bin',
      roomId: 'kitchen',
      materialFamily: 'mat-ceramic-glaze',
      positionX: -0.2,
      positionY: 0.8,
      positionZ: 0.5,
      rotationYDegrees: -10.0,
      collisionRadiusM: 0.18,
      collisionHeightM: 0.25,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'kitchen.wall-clock',
      displayName: 'Wall Clock',
      roomId: 'kitchen',
      materialFamily: 'mat-wood-mahogany-dark',
      positionX: 1.4,
      positionY: 1.8,
      positionZ: -1.4,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.15,
      collisionHeightM: 0.45,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'kitchen.roller-towel',
      displayName: 'Roller Towel',
      roomId: 'kitchen',
      materialFamily: 'mat-fabric-curtains',
      positionX: 1.8,
      positionY: 1.3,
      positionZ: 1.8,
      rotationYDegrees: -90.0,
      collisionRadiusM: 0.1,
      collisionHeightM: 0.7,
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
