import 'package:quarantine/presentation/lut_color_grading_policy.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  const gothic = LutColorGradingPolicy(
    preset: LutPreset.gothicCinematic,
    intensity: 1.0,
    textureDim: 32,
  );

  check(!gothic.isIdentity, 'gothic cinematic preset is not identity');
  check(gothic.textureDim == 32, '3D LUT dimension is 32');

  const zeroIntensity = LutColorGradingPolicy(
    preset: LutPreset.gothicCinematic,
    intensity: 0.0,
  );
  check(zeroIntensity.isIdentity, '0.0 intensity evaluates to isIdentity');

  const identityPreset = LutColorGradingPolicy(
    preset: LutPreset.identity,
  );
  check(identityPreset.isIdentity, 'identity preset evaluates to isIdentity');

  print('LUT color grading policy VIS-012 / R-10: gothic LUT preset, neutral identity pass-through pass');
}
