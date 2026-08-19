import 'package:quarantine/presentation/contact_shadows_ssdo.dart';
import 'package:quarantine/presentation/cascaded_shadow_maps.dart';

void main() {
  print('Testing SSDO...');
  assert(SSDOEngine.validate());

  final ssdoSafe = SSDOEngine.evaluateSSDO(
    params: const SSDOParams(sampleCount: 0),
    viewDepthM: 5.0,
    surfaceNormal: (x: 0.0, y: 1.0, z: 0.0),
    dominantLightDir: (x: 0.0, y: 1.0, z: 0.0),
  );
  assert(ssdoSafe.directionalOcclusionFactor == 1.0);
  assert(ssdoSafe.contactShadowMask == 0.0);

  print('Testing CSM...');
  assert(CSMEngine.validate());

  final csmSafe = CSMEngine.evaluateCSM(
    params: const CSMParams(cascadeCount: 0),
    viewDepthM: 5.0,
    surfaceNormal: (x: 0.0, y: 1.0, z: 0.0),
    lightDir: (x: 0.0, y: 1.0, z: 0.0),
    alphaMask: 1.0,
  );
  assert(csmSafe.activeCascadeIndex == -1);
  assert(csmSafe.shadowFactor == 1.0);

  print('All SSDO/CSM policy-object tests passed '
        '(policy objects only — no pixels asserted).');
}
