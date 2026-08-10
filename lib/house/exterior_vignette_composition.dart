/// Representation of an authored exterior vignette cell in H-23.
class ExteriorVignetteCell {
  final String cellId;
  final String name;
  final double minX;
  final double minY;
  final double minZ;
  final double maxX;
  final double maxY;
  final double maxZ;
  final double parallaxDepthScale;
  final bool hasDay20Variant;

  ExteriorVignetteCell({
    required this.cellId,
    required this.name,
    required this.minX,
    required this.minY,
    required this.minZ,
    required this.maxX,
    required this.maxY,
    required this.maxZ,
    required this.parallaxDepthScale,
    this.hasDay20Variant = false,
  });

  Map<String, dynamic> toJson() => {
        'cellId': cellId,
        'name': name,
        'minX': minX,
        'minY': minY,
        'minZ': minZ,
        'maxX': maxX,
        'maxY': maxY,
        'maxZ': maxZ,
        'parallaxDepthScale': parallaxDepthScale,
        'hasDay20Variant': hasDay20Variant,
      };
}

/// H-23 Exterior Art Cells & Window-Visible Vignette Composition Manager.
class ExteriorVignetteComposition {
  static final Map<String, ExteriorVignetteCell> cells = {
    'street': ExteriorVignetteCell(
      cellId: 'street',
      name: 'Cobblestone Street & Gas Lamp Silhouette',
      minX: -10.0,
      minY: -0.5,
      minZ: -5.0,
      maxX: 30.0,
      maxY: 1.0,
      maxZ: -0.5,
      parallaxDepthScale: 0.15,
    ),
    'oppositeHouse': ExteriorVignetteCell(
      cellId: 'oppositeHouse',
      name: 'Opposite Row House Facade',
      minX: -10.0,
      minY: 0.0,
      minZ: -15.0,
      maxX: 30.0,
      maxY: 12.0,
      maxZ: -5.1,
      parallaxDepthScale: 0.08,
      hasDay20Variant: true,
    ),
    'roofDrainage': ExteriorVignetteCell(
      cellId: 'roofDrainage',
      name: 'Roof Tiles, Gutter & Chimney Stack',
      minX: -2.0,
      minY: 7.5,
      minZ: -1.0,
      maxX: 20.0,
      maxY: 14.0,
      maxZ: 18.0,
      parallaxDepthScale: 0.25,
    ),
  };

  /// Returns active visual flags for window-visible exterior vignettes.
  static Map<String, dynamic> getVignetteVisualState({
    required int currentDay,
    required double rainIntensity,
    required double currentHour,
  }) {
    final showOppositeWindowFigure = currentDay == 20 && (currentHour < 6.0 || currentHour > 21.0);
    final wetnessFactor = (rainIntensity * 0.85).clamp(0.0, 1.0);

    return {
      'currentDay': currentDay,
      'rainIntensity': rainIntensity,
      'wetnessFactor': wetnessFactor,
      'showOppositeWindowFigure': showOppositeWindowFigure,
      'visibleCellsCount': cells.length,
    };
  }
}
