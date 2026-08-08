import 'package:quarantine/config.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const config = FeatureConfig.defaults;
  _expect(config.breathThresholdCelsius == 6.0, 'breath threshold is frozen');
  _expect(
    config.reducedMotionTapeScale == 0.35,
    'reduced motion scale is frozen',
  );
  _expect(
    config.mantleFlameScale.isFinite && config.mantleHissScale.isFinite,
    'feature defaults are finite',
  );
  print('feature config: typed immutable defaults pass');
}
