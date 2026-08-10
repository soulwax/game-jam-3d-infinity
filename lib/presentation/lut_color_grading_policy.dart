enum LutPreset {
  identity,
  gothicCinematic,
  warmParchment,
  coldNight,
}

class LutColorGradingPolicy {
  final LutPreset preset;
  final double intensity;
  final int textureDim;

  const LutColorGradingPolicy({
    this.preset = LutPreset.gothicCinematic,
    this.intensity = 1.0,
    this.textureDim = 32,
  }) : assert(intensity >= 0.0 && intensity <= 1.0, 'intensity must be in [0.0, 1.0]'),
       assert(textureDim > 0, 'textureDim must be positive');

  bool get isIdentity => preset == LutPreset.identity || intensity == 0.0;

  Map<String, Object> toJson() => {
        'preset': preset.name,
        'intensity': intensity,
        'textureDim': textureDim,
        'isIdentity': isIdentity,
      };
}
