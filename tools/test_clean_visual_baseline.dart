import 'package:quarantine/config.dart';

void main() {
  if (vhsEnabled) throw StateError('clean baseline enables VHS distortion');
  if (lutMix != 0.0) throw StateError('clean baseline applies a LUT grade');
  if (flickerDepth != 0.0) {
    throw StateError('clean baseline enables authored light flicker');
  }
  if (postGrain < 0 || postGrain > 0.03) {
    throw StateError('clean baseline grain is outside readable range');
  }
  // PS1 remains an explicit product decision until a human visual review
  // approves disabling it; this test prevents the other distortions from
  // silently creeping into the ordinary state.
  print('clean visual baseline: VHS/LUT/flicker disabled and grain bounded');
}
