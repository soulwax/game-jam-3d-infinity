import 'dart:math' as math;

import 'package:quarantine/presentation/realistic_thunderstorm_engine.dart';

void _check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final first = RealisticThunderstormEngine();
  first.update(9.0, rainIntensity: 0.85);
  final strike = first.flashState;

  _check(strike.active, 'a due strike must be visible on its triggering tick');
  _check(strike.hasValidSource, 'strike must publish a finite source');
  _check(
    strike.sourceDistanceMeters >= 600.0 &&
        strike.sourceDistanceMeters <= 3400.0,
    'source distance must match the authored storm envelope',
  );
  final directionLength = math.sqrt(
    strike.sourceDirectionX * strike.sourceDirectionX +
        strike.sourceDirectionY * strike.sourceDirectionY +
        strike.sourceDirectionZ * strike.sourceDirectionZ,
  );
  _check(
    (directionLength - 1.0).abs() < 1e-9,
    'source direction must be unit length',
  );
  _check(
    strike.sourceDirectionY > 0.0,
    'cloud source must remain above the struck world',
  );
  _check(
    (first.thunderAudioDelaySeconds - strike.sourceDistanceMeters / 343.0)
            .abs() <
        1e-9,
    'thunder delay must use the same physical source distance',
  );
  _check(
    strike.distanceAttenuation > 0.0 && strike.distanceAttenuation.isFinite,
    'source distance must produce finite inverse-square irradiance',
  );
  _check(
    const LightningFlashState(
          active: true,
          sourceDistanceMeters: 600,
        ).distanceAttenuation >
        const LightningFlashState(
          active: true,
          sourceDistanceMeters: 3400,
        ).distanceAttenuation,
    'near lightning must be brighter than a distant strike',
  );

  final directionBeforeDecay = (
    strike.sourceDirectionX,
    strike.sourceDirectionY,
    strike.sourceDirectionZ,
  );
  first.update(0.05, rainIntensity: 0.85);
  final decayed = first.flashState;
  _check(decayed.active, 'source must persist through the strobe envelope');
  _check(
    (
          decayed.sourceDirectionX,
          decayed.sourceDirectionY,
          decayed.sourceDirectionZ,
        ) ==
        directionBeforeDecay,
    'strobe decay must not move the lightning source',
  );

  final second = RealisticThunderstormEngine();
  second.update(9.0, rainIntensity: 0.85);
  _check(
    second.flashState.sourceDirectionX == strike.sourceDirectionX &&
        second.flashState.sourceDirectionY == strike.sourceDirectionY &&
        second.flashState.sourceDirectionZ == strike.sourceDirectionZ &&
        second.flashState.sourceDistanceMeters == strike.sourceDistanceMeters,
    'seeded storm source must be deterministic',
  );

  first.update(0.1, rainIntensity: 0.0);
  _check(!first.flashState.active, 'dry weather must clear the flash source');
  _check(
    first.flashState.sourceDistanceMeters == 0.0,
    'inactive weather must not expose a stale source distance',
  );

  print('realistic thunderstorm source contract: PASS');
}
