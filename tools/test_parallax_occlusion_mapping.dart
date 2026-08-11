import 'package:quarantine/presentation/parallax_occlusion_mapping.dart';

void main() {
  print('Testing Parallax Occlusion Mapping...');
  
  bool allPassed = true;

  // Test grazing angle layer expansion
  final resGrazing = POMEngine.evaluatePOM(
    params: const POMParams(maxLayers: 8, minLayers: 2),
    viewAngleZ: 0.0,
  );
  if (resGrazing.layerCount != 8) {
    print('FAIL: Grazing angle test failed (Expected 8 layers, got \${resGrazing.layerCount}).');
    allPassed = false;
  } else {
    print('PASS: Grazing angle layer expansion test.');
  }

  // Test head-on angle
  final resHeadOn = POMEngine.evaluatePOM(
    params: const POMParams(maxLayers: 8, minLayers: 2),
    viewAngleZ: 1.0,
  );
  if (resHeadOn.layerCount != 2) {
    print('FAIL: Head-on angle test failed (Expected 2 layers, got \${resHeadOn.layerCount}).');
    allPassed = false;
  } else {
    print('PASS: Head-on angle test.');
  }

  // Test self-shadowing towards light
  final resShadow = POMEngine.evaluatePOM(
    params: const POMParams(selfShadowing: true, shadowLayers: 4),
    viewAngleZ: 0.5,
  );
  if (resShadow.shadowFactor >= 1.0) {
    print('FAIL: Self-shadowing test failed.');
    allPassed = false;
  } else {
    print('PASS: Self-shadowing test.');
  }

  // Test Safe profile bypass
  final resSafe = POMEngine.evaluatePOM(
    params: const POMParams(maxLayers: 0),
    viewAngleZ: 0.1,
  );
  if (resSafe.layerCount != 0 || resSafe.shadowFactor != 1.0) {
    print('FAIL: Safe profile bypass test failed.');
    allPassed = false;
  } else {
    print('PASS: Safe profile bypass test.');
  }

  // Internal validation
  if (!POMEngine.validate()) {
    print('FAIL: Engine internal validation failed.');
    allPassed = false;
  } else {
    print('PASS: Engine internal validation.');
  }

  assert(allPassed, 'One or more POM tests failed.');
  print('All POM tests passed.');
}
