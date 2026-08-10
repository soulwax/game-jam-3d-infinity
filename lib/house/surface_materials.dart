/// House-owned surface variants. The renderer remains responsible for loading
/// texture handles; this palette keeps authored room identity and presentation
/// tuning in the house layer.
final class HouseSurfaceMaterial {
  final String id;
  final String textureKey;
  final int tint;
  final double roughness;
  final double uvMetres;

  const HouseSurfaceMaterial({
    required this.id,
    required this.textureKey,
    required this.tint,
    required this.roughness,
    required this.uvMetres,
  });
}

final class HouseSurfaceMaterials {
  HouseSurfaceMaterials._();

  static const Map<String, HouseSurfaceMaterial> all = {
    'wallpaper-stripes': HouseSurfaceMaterial(
      id: 'wallpaper-stripes',
      textureKey: 'wall-plaster',
      tint: 0xB3A18B,
      roughness: 0.82,
      uvMetres: 0.55,
    ),
    'wallpaper-damask': HouseSurfaceMaterial(
      id: 'wallpaper-damask',
      textureKey: 'wall-plaster',
      tint: 0x8D7771,
      roughness: 0.76,
      uvMetres: 0.42,
    ),
    'wallpaper-floral': HouseSurfaceMaterial(
      id: 'wallpaper-floral',
      textureKey: 'wall-plaster',
      tint: 0xA99E83,
      roughness: 0.79,
      uvMetres: 0.48,
    ),
    'wallpaper-damp': HouseSurfaceMaterial(
      id: 'wallpaper-damp',
      textureKey: 'grime',
      tint: 0x6C716D,
      roughness: 0.94,
      uvMetres: 0.76,
    ),
    'wallpaper-faded': HouseSurfaceMaterial(
      id: 'wallpaper-faded',
      textureKey: 'wall-plaster',
      tint: 0xB9B09D,
      roughness: 0.86,
      uvMetres: 0.62,
    ),
    'wallpaper-tiles': HouseSurfaceMaterial(
      id: 'wallpaper-tiles',
      textureKey: 'floor-linoleum',
      tint: 0xB4B7A9,
      roughness: 0.63,
      uvMetres: 0.28,
    ),
    'wallpaper-peeling': HouseSurfaceMaterial(
      id: 'wallpaper-peeling',
      textureKey: 'grime',
      tint: 0x8E8678,
      roughness: 0.91,
      uvMetres: 0.68,
    ),
    'floor-wood': HouseSurfaceMaterial(
      id: 'floor-wood',
      textureKey: 'wall-plaster',
      tint: 0x76563F,
      roughness: 0.88,
      uvMetres: 0.22,
    ),
    'floor-linoleum': HouseSurfaceMaterial(
      id: 'floor-linoleum',
      textureKey: 'floor-linoleum',
      tint: 0x74786C,
      roughness: 0.61,
      uvMetres: 0.62,
    ),
    'floor-tiles': HouseSurfaceMaterial(
      id: 'floor-tiles',
      textureKey: 'floor-linoleum',
      tint: 0xB2AEA2,
      roughness: 0.57,
      uvMetres: 0.86,
    ),
    'floor-concrete': HouseSurfaceMaterial(
      id: 'floor-concrete',
      textureKey: 'grime',
      tint: 0x77736B,
      roughness: 0.96,
      uvMetres: 0.92,
    ),
    'ceiling-plaster': HouseSurfaceMaterial(
      id: 'ceiling-plaster',
      textureKey: 'wall-plaster',
      tint: 0xC0B9AA,
      roughness: 0.84,
      uvMetres: 0.70,
    ),
    'ceiling-pipes': HouseSurfaceMaterial(
      id: 'ceiling-pipes',
      textureKey: 'ceiling-stained',
      tint: 0x77736A,
      roughness: 0.92,
      uvMetres: 0.84,
    ),
  };

  static HouseSurfaceMaterial forId(String id) {
    final material = all[id];
    if (material == null) {
      throw StateError('Unknown house surface material: $id');
    }
    return material;
  }
}
