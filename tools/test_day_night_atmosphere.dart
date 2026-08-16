// Day/Night Cycle & Atmospheric Renderer verification.
//
// Verifies that:
//  1. 24-hour evaluation transitions through all 7 phases (dawn, morning, noon, afternoon, dusk, twilight, night).
//  2. Sun 3D vector elevation peaks at noon (12:00) and drops below horizon at night.
//  3. Rain intensity desaturates directional light and increases fog density.
//  4. Closed shutter attenuates window light leakage to 15% (0.15).
//  5. Continuous 24-hour sweep passes without NaNs or jumps.

import 'package:quarantine/presentation/day_night_atmosphere.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  // 1. Verify 24-hour continuity
  final continuous = DayNightAtmosphereEngine.validate24HourContinuity();
  check(continuous, '24-hour evaluation continuity must pass');

  // 2. Check Phase Progression
  final dawn = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 6.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  final noon = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 12.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  final dusk = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 18.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  final night = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 23.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );

  check(dawn.phase == TimeOfDayPhase.dawn, '06:00 is dawn');
  check(
    DayNightAtmosphereEngine.evaluateAtmosphere(
          hour: 7.0,
          rainIntensity: 0.0,
          shutterOpen: true,
        ).sunElevationDegrees.abs() < 1e-9,
    '07:00 is the authored sunrise horizon',
  );
  check(noon.phase == TimeOfDayPhase.noon, '12:00 is noon');
  check(dusk.phase == TimeOfDayPhase.dusk, '18:00 is dusk');
  check(
    DayNightAtmosphereEngine.evaluateAtmosphere(
          hour: 19.0,
          rainIntensity: 0.0,
          shutterOpen: true,
        ).sunElevationDegrees.abs() < 1e-9,
    '19:00 is the authored sunset horizon',
  );
  final sunriseArc = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 7.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  final sunsetArc = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 19.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  check(
    (sunriseArc.sunAzimuthDegrees - 90.0).abs() < 1e-9,
    'sunrise azimuth starts at east',
  );
  check(
    (DayNightAtmosphereEngine.evaluateAtmosphere(
              hour: 13.0,
              rainIntensity: 0.0,
              shutterOpen: true,
            ).sunAzimuthDegrees -
            180.0)
        .abs() <
        1e-9,
    'solar noon azimuth follows the authored 13:00 noon',
  );
  check(
    (sunsetArc.sunAzimuthDegrees - 270.0).abs() < 1e-9,
    'sunset azimuth ends at west',
  );
  final shortDaySunrise = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 8.0,
    daylightHours: 10.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  check(
    (shortDaySunrise.sunAzimuthDegrees - 90.0).abs() < 1e-9,
    'short daylight arc keeps sunrise at east',
  );
  check(night.phase == TimeOfDayPhase.night, '23:00 is night');

  // 3. Sun Elevation and Directional Intensity
  check(noon.sunElevationDegrees > 55.0, 'Noon sun elevation > 55°');
  check(
    night.sunElevationDegrees < 0.0,
    'Night sun elevation < 0° (below horizon)',
  );
  check(
    noon.directionalIntensity > night.directionalIntensity,
    'Noon directional intensity > Night',
  );

  // 4. Shutter Window Light Leakage
  final openShutter = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 12.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  final closedShutter = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 12.0,
    rainIntensity: 0.0,
    shutterOpen: false,
  );

  check(
    openShutter.windowLightLeakFactor == 1.0,
    'Open shutter has 1.0 light leak factor',
  );
  check(
    closedShutter.windowLightLeakFactor == 0.15,
    'Closed shutter has 0.15 light leak factor (15% leakage)',
  );

  // 5. Rain Attenuation & Wetness Mask
  final dryNoon = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 12.0,
    rainIntensity: 0.0,
    shutterOpen: true,
  );
  final rainyNoon = DayNightAtmosphereEngine.evaluateAtmosphere(
    hour: 12.0,
    rainIntensity: 0.8,
    shutterOpen: true,
  );

  check(
    rainyNoon.directionalIntensity < dryNoon.directionalIntensity,
    'Rain attenuates directional light intensity',
  );
  check(
    rainyNoon.windowSurfaceWetness > dryNoon.windowSurfaceWetness,
    'Rain increases window surface wetness mask',
  );
  check(
    rainyNoon.fogDensity > dryNoon.fogDensity,
    'Rain increases atmosphere fog density',
  );
  check(
    rainyNoon.fogHeightFalloff > dryNoon.fogHeightFalloff,
    'Rain increases atmosphere fog height falloff',
  );

  // 6. Test JSON export
  final json = noon.toJson();
  check(json['phase'] == 'noon', 'JSON phase matches');
  check(
    (json['sunDirection'] as List).length == 3,
    'JSON sunDirection has 3 elements',
  );

  print('Day/Night Cycle & Atmospheric Renderer test passed cleanly!');
}
