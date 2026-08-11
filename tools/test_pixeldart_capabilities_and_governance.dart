import 'package:quarantine/presentation/pixeldart_capability_matrix.dart';
import 'package:quarantine/presentation/pixeldart_resource_governor.dart';
import 'package:quarantine/presentation/pixeldart_shader_pipeline_exporter.dart';

Never _fail(String message) =>
    throw StateError('Pixeldart capabilities and governance test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('Testing Pixeldart Capabilities Expansion & Wise Governance Suite...');

  // 1. Capability Matrix Negotiation Tests
  _expect(PixeldartCapabilityMatrix.validate(), 'PixeldartCapabilityMatrix validate failed');

  final webgpuMatrix = PixeldartCapabilityMatrix.negotiate(isWebGPUAvailable: true);
  _expect(webgpuMatrix.qualityTier == PixeldartQualityTier.ultra, 'WebGPU should select Ultra tier');
  _expect(webgpuMatrix.maxVramBudgetMB == 512, 'WebGPU VRAM budget should be 512MB');

  final webgl2Matrix = PixeldartCapabilityMatrix.negotiate(
    isWebGPUAvailable: false,
    isWebGL2Available: true,
  );
  _expect(webgl2Matrix.qualityTier == PixeldartQualityTier.high, 'WebGL2 with float16 should select High tier');

  // 2. Resource Governor & VRAM Caching Tests
  _expect(PixeldartResourceGovernor.validate(), 'PixeldartResourceGovernor validate failed');

  final governor = PixeldartResourceGovernor(matrix: webgl2Matrix);
  _expect(governor.allocateTexture('tex-test-1', 100), 'Allocation 1 should succeed');
  _expect(governor.allocateTexture('tex-test-2', 100), 'Allocation 2 should succeed');
  _expect(governor.allocateTexture('tex-test-3', 100), 'Allocation 3 should evict tex-test-1 and succeed');
  _expect(governor.currentVramUsageMB <= webgl2Matrix.maxVramBudgetMB, 'VRAM must not exceed budget');

  final batches = governor.processInstancedBatches(100, instanceBatchSize: 10);
  _expect(batches == 10, '100 props batched by 10 should produce 10 draw calls');
  _expect(governor.isWithinDrawCallBudget(), '10 draw calls must be within 35 budget');

  // 3. Shader Pipeline Exporter & ACES Tone Mapping Tests
  _expect(PixeldartShaderPipelineExporter.validate(), 'PixeldartShaderPipelineExporter validate failed');

  final toneMap0 = PixeldartShaderPipelineExporter.evaluateAcesToneMap(0.0);
  final toneMap1 = PixeldartShaderPipelineExporter.evaluateAcesToneMap(1.0);
  final toneMap10 = PixeldartShaderPipelineExporter.evaluateAcesToneMap(10.0);

  _expect(toneMap0 == 0.0, '0.0 HDR maps to 0.0 LDR');
  _expect(toneMap1 > 0.5 && toneMap1 < 1.0, '1.0 HDR maps to shoulder of ACES curve');
  _expect(toneMap10 <= 1.0, '10.0 HDR highlights clip smoothly below 1.0');

  print('All Pixeldart Capabilities Expansion & Wise Governance tests passed successfully!');
}
