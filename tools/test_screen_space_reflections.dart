import 'package:quarantine/presentation/screen_space_reflections.dart';

void main() {
  print('Testing Screen-Space Reflections...');
  
  bool allPassed = true;
  
  // Test smooth/mirror reflection
  final resSmooth = ScreenSpaceReflectionEngine.evaluateSSR(
    params: const ScreenSpaceReflectionParams(),
    roughness: 0.1,
  );
  if (!resSmooth.hasHit || resSmooth.confidence01 < 0.8) {
    print('FAIL: Smooth reflection test failed.');
    allPassed = false;
  } else {
    print('PASS: Smooth reflection test.');
  }

  // Test roughness falloff
  final resRough = ScreenSpaceReflectionEngine.evaluateSSR(
    params: const ScreenSpaceReflectionParams(),
    roughness: 0.9,
  );
  if (resRough.hasHit) {
    print('FAIL: Roughness falloff test failed.');
    allPassed = false;
  } else {
    print('PASS: Roughness falloff test.');
  }

  // Test Safe profile (zero-cost)
  final resSafe = ScreenSpaceReflectionEngine.evaluateSSR(
    params: const ScreenSpaceReflectionParams(maxRaySteps: 0),
    roughness: 0.1,
  );
  if (resSafe.hasHit || resSafe.confidence01 != 0.0 || resSafe.activeSteps != 0) {
    print('FAIL: Safe profile bypass test failed.');
    allPassed = false;
  } else {
    print('PASS: Safe profile bypass test.');
  }

  // Internal validation
  if (!ScreenSpaceReflectionEngine.validate()) {
    print('FAIL: Engine internal validation failed.');
    allPassed = false;
  } else {
    print('PASS: Engine internal validation.');
  }

  assert(allPassed, 'One or more SSR tests failed.');
  print('All SSR tests passed.');
}
