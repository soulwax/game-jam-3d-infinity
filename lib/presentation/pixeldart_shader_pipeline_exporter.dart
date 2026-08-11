import 'package:quarantine/presentation/pixeldart_capability_matrix.dart';

/// Shader pipeline exporter and ACES Filmic tone mapping evaluator for Pixeldart engine.
class PixeldartShaderPipelineExporter {
  final PixeldartCapabilityMatrix matrix;

  const PixeldartShaderPipelineExporter({required this.matrix});

  /// Evaluates ACES Filmic Tone Mapping curve on a high-dynamic-range color value.
  /// $f(x) = \frac{x(a x + b)}{x(c x + d) + e}$
  static double evaluateAcesToneMap(double colorHDR) {
    const a = 2.51;
    const b = 0.03;
    const c = 2.43;
    const d = 0.59;
    const e = 0.14;

    final x = colorHDR.clamp(0.0, 100.0);
    final mapped = (x * (a * x + b)) / (x * (c * x + d) + e);
    return mapped.clamp(0.0, 1.0);
  }

  /// Selects active shader language shader source based on GPU capability.
  String selectAtmosphericFogShader() {
    if (matrix.supportsComputeShaders) {
      return '''
      // WebGPU Compute Voxel Fog Shader
      @compute @workgroup_size(8, 8, 1)
      fn main(@builtin(global_invocation_id) id : vec3<u32>) {
        // Voxel fog density calculation
      }
      ''';
    } else if (matrix.hasWebGL2) {
      return '''
      #version 300 es
      // WebGL2 GLSL 3.0 ES Raymarched Fog Shader
      in vec2 vUv;
      out vec4 fragColor;
      void main() {
        fragColor = vec4(0.08, 0.07, 0.06, 0.15);
      }
      ''';
    } else {
      return '''
      // WebGL1 Fallback Distance Fog Shader
      precision mediump float;
      void main() {
        gl_FragColor = vec4(0.08, 0.07, 0.06, 0.10);
      }
      ''';
    }
  }

  /// Self-validation for unit tests.
  static bool validate() {
    final mapped1 = evaluateAcesToneMap(0.5);
    final mapped2 = evaluateAcesToneMap(2.5);
    if (mapped1 <= 0.0 || mapped1 >= 1.0) return false;
    if (mapped2 <= mapped1 || mapped2 > 1.0) return false;

    final matrixHigh = PixeldartCapabilityMatrix.negotiate(isWebGL2Available: true);
    final exporter = PixeldartShaderPipelineExporter(matrix: matrixHigh);
    final shader = exporter.selectAtmosphericFogShader();
    if (!shader.contains('#version 300 es')) return false;

    return true;
  }
}
