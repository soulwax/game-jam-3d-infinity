/// Graphics hardware tier profile.
enum PixeldartQualityTier {
  ultra,
  high,
  medium,
  low,
}

/// Hardware capability matrix and tier negotiator for Pixeldart engine expansion.
class PixeldartCapabilityMatrix {
  final bool hasWebGPU;
  final bool hasWebGL2;
  final bool supportsFloat16Framebuffers;
  final bool supportsInstancedArrays;
  final bool supportsComputeShaders;
  final PixeldartQualityTier qualityTier;
  final int maxDrawCallsPerFrame;
  final int maxVramBudgetMB;

  const PixeldartCapabilityMatrix({
    required this.hasWebGPU,
    required this.hasWebGL2,
    required this.supportsFloat16Framebuffers,
    required this.supportsInstancedArrays,
    required this.supportsComputeShaders,
    required this.qualityTier,
    required this.maxDrawCallsPerFrame,
    required this.maxVramBudgetMB,
  });

  /// Negotiates capability matrix based on detected GPU flags.
  factory PixeldartCapabilityMatrix.negotiate({
    bool isWebGPUAvailable = false,
    bool isWebGL2Available = true,
    bool float16Supported = true,
    bool instancingSupported = true,
  }) {
    if (isWebGPUAvailable) {
      return const PixeldartCapabilityMatrix(
        hasWebGPU: true,
        hasWebGL2: true,
        supportsFloat16Framebuffers: true,
        supportsInstancedArrays: true,
        supportsComputeShaders: true,
        qualityTier: PixeldartQualityTier.ultra,
        maxDrawCallsPerFrame: 45,
        maxVramBudgetMB: 512,
      );
    } else if (isWebGL2Available && float16Supported && instancingSupported) {
      return const PixeldartCapabilityMatrix(
        hasWebGPU: false,
        hasWebGL2: true,
        supportsFloat16Framebuffers: true,
        supportsInstancedArrays: true,
        supportsComputeShaders: false,
        qualityTier: PixeldartQualityTier.high,
        maxDrawCallsPerFrame: 35,
        maxVramBudgetMB: 256,
      );
    } else if (isWebGL2Available) {
      return const PixeldartCapabilityMatrix(
        hasWebGPU: false,
        hasWebGL2: true,
        supportsFloat16Framebuffers: false,
        supportsInstancedArrays: true,
        supportsComputeShaders: false,
        qualityTier: PixeldartQualityTier.medium,
        maxDrawCallsPerFrame: 25,
        maxVramBudgetMB: 128,
      );
    } else {
      return const PixeldartCapabilityMatrix(
        hasWebGPU: false,
        hasWebGL2: false,
        supportsFloat16Framebuffers: false,
        supportsInstancedArrays: false,
        supportsComputeShaders: false,
        qualityTier: PixeldartQualityTier.low,
        maxDrawCallsPerFrame: 15,
        maxVramBudgetMB: 64,
      );
    }
  }

  Map<String, dynamic> toJson() => {
        'hasWebGPU': hasWebGPU,
        'hasWebGL2': hasWebGL2,
        'supportsFloat16Framebuffers': supportsFloat16Framebuffers,
        'supportsInstancedArrays': supportsInstancedArrays,
        'supportsComputeShaders': supportsComputeShaders,
        'qualityTier': qualityTier.name,
        'maxDrawCallsPerFrame': maxDrawCallsPerFrame,
        'maxVramBudgetMB': maxVramBudgetMB,
      };

  /// Self-validation for unit tests.
  static bool validate() {
    final matrixHigh = PixeldartCapabilityMatrix.negotiate(
      isWebGPUAvailable: false,
      isWebGL2Available: true,
      float16Supported: true,
      instancingSupported: true,
    );
    if (matrixHigh.qualityTier != PixeldartQualityTier.high) return false;
    if (matrixHigh.maxVramBudgetMB != 256) return false;

    final matrixUltra = PixeldartCapabilityMatrix.negotiate(
      isWebGPUAvailable: true,
    );
    if (matrixUltra.qualityTier != PixeldartQualityTier.ultra) return false;
    if (!matrixUltra.supportsComputeShaders) return false;

    return true;
  }
}
