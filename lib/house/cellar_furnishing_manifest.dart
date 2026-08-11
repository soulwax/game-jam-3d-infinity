/// Manifest for cellar furnishing props.
library cellar_furnishing_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Enum representing the available props in the cellar.
enum CellarProp {
  coalHeap,
  preservingJars,
  mangle,
  bareBulb,
  ventilationGrille,
  meterCupboard,
}

/// Class defining the cellar furnishing manifest.
class CellarFurnishingManifest {
  /// All props with authored placements in the cellar.
  static const List<PropPlacement> props = [
    PropPlacement(
      propId: 'cellar.coal-heap',
      displayName: 'Coal Heap',
      roomId: 'cellar',
      materialFamily: 'mat-concrete-floor',
      positionX: 1.5,
      positionY: 0.3,
      positionZ: 1.2,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.8,
      collisionHeightM: 0.6,
      stateVariant: 'dusty-coal',
    ),
    PropPlacement(
      propId: 'cellar.preserving-jars',
      displayName: 'Preserving Jars',
      roomId: 'cellar',
      materialFamily: 'mat-glass-clear-window',
      positionX: -1.7,
      positionY: 1.2,
      positionZ: 0.0,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.25,
      collisionHeightM: 0.3,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'cellar.mangle',
      displayName: 'Mangle',
      roomId: 'cellar',
      materialFamily: 'mat-iron-cast',
      positionX: 0.0,
      positionY: 0.6,
      positionZ: -1.5,
      rotationYDegrees: 45.0,
      collisionRadiusM: 0.4,
      collisionHeightM: 1.2,
      isInteractive: true,
    ),
    PropPlacement(
      propId: 'cellar.bare-bulb',
      displayName: 'Bare Bulb',
      roomId: 'cellar',
      materialFamily: 'mat-glass-clear-window',
      positionX: 0.0,
      positionY: 2.1,
      positionZ: 0.0,
      rotationYDegrees: 0.0,
      collisionRadiusM: 0.1,
      collisionHeightM: 0.25,
      isInteractive: true,
      stateVariant: 'pull-cord-switch',
    ),
    PropPlacement(
      propId: 'cellar.ventilation-grille',
      displayName: 'Ventilation Grille',
      roomId: 'cellar',
      materialFamily: 'mat-iron-cast',
      positionX: -1.9,
      positionY: 1.8,
      positionZ: 1.2,
      rotationYDegrees: 90.0,
      collisionRadiusM: 0.2,
      collisionHeightM: 0.2,
    ),
    PropPlacement(
      propId: 'cellar.meter-cupboard',
      displayName: 'Meter Cupboard',
      roomId: 'cellar',
      materialFamily: 'mat-wood-oak-polished',
      positionX: 1.6,
      positionY: 1.3,
      positionZ: -1.4,
      rotationYDegrees: -90.0,
      collisionRadiusM: 0.25,
      collisionHeightM: 0.6,
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
