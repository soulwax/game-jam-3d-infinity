/// The level of detail for a mesh.
enum LODLevel {
  /// Base level, highest detail.
  lod0,

  /// First reduction level, medium detail.
  lod1,

  /// Second reduction level, lowest detail.
  lod2,
}

/// Describes the Level of Detail configurations for a mesh.
class LODMeshDescriptor {
  /// The identifier for the mesh.
  final String meshId;

  /// The number of triangles at LOD 0.
  final int lod0Triangles;

  /// The number of triangles at LOD 1.
  final int lod1Triangles;

  /// The number of triangles at LOD 2.
  final int lod2Triangles;

  /// Distance in meters to switch from LOD 0 to LOD 1.
  final double switchDistance0to1M;

  /// Distance in meters to switch from LOD 1 to LOD 2.
  final double switchDistance1to2M;

  /// Margin in meters to apply hysteresis to prevent LOD flickering.
  final double hysteresisMarginM;

  /// Creates an [LODMeshDescriptor].
  const LODMeshDescriptor({
    required this.meshId,
    required this.lod0Triangles,
    required this.lod1Triangles,
    required this.lod2Triangles,
    this.switchDistance0to1M = 2.0,
    this.switchDistance1to2M = 5.0,
    this.hysteresisMarginM = 0.25,
  })  : assert(
          lod0Triangles >= lod1Triangles &&
              lod1Triangles >= lod2Triangles &&
              lod2Triangles > 0,
          'Triangles must be strictly descending and positive: lod0 >= lod1 >= lod2 > 0',
        ),
        assert(
          switchDistance1to2M > switchDistance0to1M && switchDistance0to1M > 0,
          'Switch distances must be positive and strictly ascending.',
        );

  /// Converts this descriptor to a JSON map.
  Map<String, dynamic> toJson() => {
        'meshId': meshId,
        'lod0Triangles': lod0Triangles,
        'lod1Triangles': lod1Triangles,
        'lod2Triangles': lod2Triangles,
        'switchDistance0to1M': switchDistance0to1M,
        'switchDistance1to2M': switchDistance1to2M,
        'hysteresisMarginM': hysteresisMarginM,
      };
}

/// The result of evaluating the LOD for a given mesh and camera distance.
class LODEvaluationResult {
  /// The selected LOD level.
  final LODLevel selectedLod;

  /// The number of active triangles for the selected LOD.
  final int activeTriangles;

  /// The reduction ratio in triangles compared to LOD 0.
  final double triangleReductionRatio;

  /// Whether a cross-fade transition is currently active.
  final bool isCrossFading;

  /// The weight of the cross-fade, typically in [0.0, 1.0].
  final double crossFadeWeight01;

  /// Additional diagnostics.
  final Map<String, dynamic> diagnostics;

  /// Creates an [LODEvaluationResult].
  const LODEvaluationResult({
    required this.selectedLod,
    required this.activeTriangles,
    required this.triangleReductionRatio,
    required this.isCrossFading,
    required this.crossFadeWeight01,
    required this.diagnostics,
  });

  /// Converts this result to a JSON map.
  Map<String, dynamic> toJson() => {
        'selectedLod': selectedLod.name,
        'activeTriangles': activeTriangles,
        'triangleReductionRatio': triangleReductionRatio,
        'isCrossFading': isCrossFading,
        'crossFadeWeight01': crossFadeWeight01,
        'diagnostics': diagnostics,
      };
}

/// Pipeline for evaluating Level of Detail (LOD) for meshes.
class LODMeshPipeline {
  /// Evaluates the appropriate LOD for a mesh based on distance and previous state.
  static LODEvaluationResult evaluateLOD({
    required LODMeshDescriptor descriptor,
    required double cameraDistanceM,
    LODLevel? previousLod,
    int crossFadeFramesRemaining = 0,
  }) {
    LODLevel nextLod = previousLod ?? LODLevel.lod0;

    final double d0to1 = descriptor.switchDistance0to1M;
    final double d1to2 = descriptor.switchDistance1to2M;
    final double margin = descriptor.hysteresisMarginM;

    if (previousLod == LODLevel.lod0) {
      if (cameraDistanceM > d0to1 + margin) {
        nextLod = LODLevel.lod1;
        if (cameraDistanceM > d1to2 + margin) {
          nextLod = LODLevel.lod2;
        }
      }
    } else if (previousLod == LODLevel.lod1) {
      if (cameraDistanceM < d0to1 - margin) {
        nextLod = LODLevel.lod0;
      } else if (cameraDistanceM > d1to2 + margin) {
        nextLod = LODLevel.lod2;
      }
    } else if (previousLod == LODLevel.lod2) {
      if (cameraDistanceM < d1to2 - margin) {
        nextLod = LODLevel.lod1;
        if (cameraDistanceM < d0to1 - margin) {
          nextLod = LODLevel.lod0;
        }
      }
    } else {
      if (cameraDistanceM < d0to1) {
        nextLod = LODLevel.lod0;
      } else if (cameraDistanceM < d1to2) {
        nextLod = LODLevel.lod1;
      } else {
        nextLod = LODLevel.lod2;
      }
    }

    int activeTriangles;
    switch (nextLod) {
      case LODLevel.lod0:
        activeTriangles = descriptor.lod0Triangles;
        break;
      case LODLevel.lod1:
        activeTriangles = descriptor.lod1Triangles;
        break;
      case LODLevel.lod2:
        activeTriangles = descriptor.lod2Triangles;
        break;
    }

    double reductionRatio = 0.0;
    if (descriptor.lod0Triangles > 0) {
      reductionRatio =
          (descriptor.lod0Triangles - activeTriangles) / descriptor.lod0Triangles;
    }

    final bool isCrossFading = crossFadeFramesRemaining > 0;
    double crossFadeWeight = 0.0;
    if (isCrossFading) {
      // Dithered cross-fade alpha blend weight when transitioning.
      // E.g., [0, 60] -> [0.0, 1.0]
      crossFadeWeight = (crossFadeFramesRemaining / 60.0).clamp(0.0, 1.0);
    }

    return LODEvaluationResult(
      selectedLod: nextLod,
      activeTriangles: activeTriangles,
      triangleReductionRatio: reductionRatio,
      isCrossFading: isCrossFading,
      crossFadeWeight01: crossFadeWeight,
      diagnostics: <String, dynamic>{
        'cameraDistanceM': cameraDistanceM,
        'previousLod': previousLod?.name,
      },
    );
  }

  /// Self-test for [LODMeshPipeline] logic.
  static bool validate() {
    try {
      const LODMeshDescriptor desc = LODMeshDescriptor(
        meshId: 'test_mesh',
        lod0Triangles: 1000,
        lod1Triangles: 500,
        lod2Triangles: 250,
      );

      final LODEvaluationResult r1 = evaluateLOD(
        descriptor: desc,
        cameraDistanceM: 1.0,
      );
      if (r1.selectedLod != LODLevel.lod0 || r1.activeTriangles != 1000) {
        return false;
      }

      return true;
    } catch (e) {
      return false;
    }
  }
}
