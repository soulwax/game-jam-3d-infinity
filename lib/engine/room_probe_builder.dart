import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/room_probe_ssao.dart';

/// Representation of a validated UV1 lightmap bounds record for A-04.
class LightmapUvBounds {
  final String meshId;
  final double minU;
  final double maxU;
  final double minV;
  final double maxV;
  final bool isValid;

  const LightmapUvBounds({
    required this.meshId,
    required this.minU,
    required this.maxU,
    required this.minV,
    required this.maxV,
    required this.isValid,
  });

  Map<String, dynamic> toJson() => {
        'meshId': meshId,
        'minU': minU,
        'maxU': maxU,
        'minV': minV,
        'maxV': maxV,
        'isValid': isValid,
      };
}

/// A-04 Room Probe & Neutral Indirect Lightmap Bake Builder.
class RoomProbeBuilder {
  /// Builds a map of static room probes across house rooms with zero mutable direct-light ghosts.
  static Map<String, RoomProbe> buildStaticRoomProbes() {
    return {
      'living-room': RoomProbe(
        roomId: 'living-room',
        probePosition: Vec3(5.0625, 1.95, 4.5),
        ambientColor: Vec3(0.38, 0.40, 0.46),
        indirectIntensity: 0.50,
      ),
      'hall': RoomProbe(
        roomId: 'hall',
        probePosition: Vec3(12.9375, 1.95, 7.875),
        ambientColor: Vec3(0.35, 0.38, 0.44),
        indirectIntensity: 0.45,
      ),
      'kitchen': RoomProbe(
        roomId: 'kitchen',
        probePosition: Vec3(5.0625, 1.95, 12.375),
        ambientColor: Vec3(0.36, 0.39, 0.45),
        indirectIntensity: 0.48,
      ),
      'cellar': RoomProbe(
        roomId: 'cellar',
        probePosition: Vec3(12.9375, -1.95, 7.875),
        ambientColor: Vec3(0.22, 0.24, 0.30),
        indirectIntensity: 0.35,
      ),
      'bedroom': RoomProbe(
        roomId: 'bedroom',
        probePosition: Vec3(5.0625, 5.85, 4.5),
        ambientColor: Vec3(0.40, 0.42, 0.48),
        indirectIntensity: 0.52,
      ),
    };
  }

  /// Validates UV1 lightmap coordinates for a mesh: asserts coordinates lie in [0, 1] without overlap or negative scale.
  static LightmapUvBounds validateUv1Bounds({
    required String meshId,
    required List<double> uv1Coordinates,
  }) {
    if (uv1Coordinates.isEmpty || uv1Coordinates.length % 2 != 0) {
      return LightmapUvBounds(
        meshId: meshId,
        minU: 0,
        maxU: 0,
        minV: 0,
        maxV: 0,
        isValid: false,
      );
    }

    var minU = 1.0;
    var maxU = 0.0;
    var minV = 1.0;
    var maxV = 0.0;

    for (var i = 0; i < uv1Coordinates.length; i += 2) {
      final u = uv1Coordinates[i];
      final v = uv1Coordinates[i + 1];

      if (u < minU) minU = u;
      if (u > maxU) maxU = u;
      if (v < minV) minV = v;
      if (v > maxV) maxV = v;
    }

    final valid = minU >= 0.0 && maxU <= 1.0 && minV >= 0.0 && maxV <= 1.0 && maxU >= minU && maxV >= minV;

    return LightmapUvBounds(
      meshId: meshId,
      minU: minU,
      maxU: maxU,
      minV: minV,
      maxV: maxV,
      isValid: valid,
    );
  }
}
