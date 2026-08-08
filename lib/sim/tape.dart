class TapeWeights {
  final double chroma;
  final double jitter;
  final double noise;
  final double dropout;
  final double ghosting;
  final double bandwidth;
  final double wow;
  final double hiss;

  const TapeWeights({
    required this.chroma,
    required this.jitter,
    required this.noise,
    required this.dropout,
    required this.ghosting,
    required this.bandwidth,
    required this.wow,
    required this.hiss,
  });

  factory TapeWeights.derive({
    required int day,
    required double exhaustion,
    required double isolation,
    bool reducedMotion = false,
  }) {
    if (day < 1 || day > 21) throw ArgumentError.value(day, 'day');
    final week = (day - 1) / 20.0;
    final e = exhaustion.clamp(0.0, 1.0).toDouble();
    final i = isolation.clamp(0.0, 1.0).toDouble();
    final pressure = (week * 0.18 + e * 0.42 + i * 0.4)
        .clamp(0.0, 1.0)
        .toDouble();
    final motion = reducedMotion ? 0.35 : 1.0;
    return TapeWeights(
      chroma: pressure * 0.8,
      jitter: pressure * 0.7 * motion,
      noise: pressure * 0.65,
      dropout: pressure * 0.45,
      ghosting: pressure * 0.55 * motion,
      bandwidth: pressure * 0.5,
      wow: pressure * 0.4 * motion,
      hiss: pressure * 0.35,
    );
  }

  Map<String, double> toJson() => {
    'chroma': chroma,
    'jitter': jitter,
    'noise': noise,
    'dropout': dropout,
    'ghosting': ghosting,
    'bandwidth': bandwidth,
    'wow': wow,
    'hiss': hiss,
  };
}
