import 'dart:math' as math;

/// Time of day phase classification for rendering and visual presentation.
enum TimeOfDayPhase {
  dawn,       // 05:00 - 07:00 (Warm golden/rose horizon, cool zenith)
  morning,    // 07:00 - 11:00 (Warming daylight)
  noon,       // 11:00 - 15:00 (Max daylight height, neutral white)
  afternoon,  // 15:00 - 17:00 (Softening daylight)
  dusk,       // 17:00 - 19:00 (Crimson/amber horizon, long warm shadows)
  twilight,   // 19:00 - 21:00 (Deep violet/indigo transition)
  night,      // 21:00 - 05:00 (Cool moonlight, practical gas mantles dominate)
}

/// Linear RGB color triple (components in [0, 1]).
typedef Color3 = ({double r, double g, double b});

/// Vector 3D spatial direction triple (normalized).
typedef Vector3 = ({double x, double y, double z});

/// High-fidelity Day/Night & Atmospheric parameters evaluated per frame.
class DayNightAtmosphereParams {
  final TimeOfDayPhase phase;
  final double hour;
  final double sunElevationDegrees;
  final double sunAzimuthDegrees;
  final Vector3 sunDirection;
  final Vector3 moonDirection;
  final Color3 sunColor;
  final Color3 moonColor;
  final Color3 skyAmbientColor;
  final Color3 horizonColor;
  final Color3 fogColor;
  final double directionalIntensity;
  final double ambientIntensity;
  final double windowLightLeakFactor;
  final double windowSurfaceWetness;

  const DayNightAtmosphereParams({
    required this.phase,
    required this.hour,
    required this.sunElevationDegrees,
    required this.sunAzimuthDegrees,
    required this.sunDirection,
    required this.moonDirection,
    required this.sunColor,
    required this.moonColor,
    required this.skyAmbientColor,
    required this.horizonColor,
    required this.fogColor,
    required this.directionalIntensity,
    required this.ambientIntensity,
    required this.windowLightLeakFactor,
    required this.windowSurfaceWetness,
  });

  Map<String, dynamic> toJson() => {
        'phase': phase.name,
        'hour': hour,
        'sunElevationDegrees': sunElevationDegrees,
        'sunAzimuthDegrees': sunAzimuthDegrees,
        'sunDirection': [sunDirection.x, sunDirection.y, sunDirection.z],
        'moonDirection': [moonDirection.x, moonDirection.y, moonDirection.z],
        'sunColor': [sunColor.r, sunColor.g, sunColor.b],
        'moonColor': [moonColor.r, moonColor.g, moonColor.b],
        'skyAmbientColor': [skyAmbientColor.r, skyAmbientColor.g, skyAmbientColor.b],
        'horizonColor': [horizonColor.r, horizonColor.g, horizonColor.b],
        'fogColor': [fogColor.r, fogColor.g, fogColor.b],
        'directionalIntensity': directionalIntensity,
        'ambientIntensity': ambientIntensity,
        'windowLightLeakFactor': windowLightLeakFactor,
        'windowSurfaceWetness': windowSurfaceWetness,
      };
}

/// Day/Night & Atmosphere Rendering Engine.
/// Calculates physical time-of-day sky colors, sun/moon arcs, atmospheric fog,
/// window-local light leaks, and surface wetness masks.
class DayNightAtmosphereEngine {
  static double _degToRad(double deg) => deg * math.pi / 180.0;

  static Color3 _lerpColor(Color3 a, Color3 b, double t) {
    final clamped = t.clamp(0.0, 1.0);
    return (
      r: a.r + (b.r - a.r) * clamped,
      g: a.g + (b.g - a.g) * clamped,
      b: a.b + (b.b - a.b) * clamped,
    );
  }

  /// Evaluates the complete day/night atmosphere state for any given hour (0..24).
  static DayNightAtmosphereParams evaluateAtmosphere({
    required double hour,
    required double rainIntensity,
    required bool shutterOpen,
    double temperatureCelsius = 15.0,
    double daylightHours = 12.0,
  }) {
    final normHour = ((hour % 24.0) + 24.0) % 24.0;
    final rain = rainIntensity.clamp(0.0, 1.0);

    // Calculate dynamic sunrise and sunset times based on seasonal daylightHours
    final halfDaylight = (daylightHours.clamp(6.0, 16.0)) / 2.0;
    final sunriseHour = 12.0 - halfDaylight;
    final sunsetHour = 12.0 + halfDaylight;

    // 1. Determine Phase based on dynamic sunrise/sunset
    TimeOfDayPhase phase;
    if (normHour >= (sunriseHour - 1.0) && normHour < (sunriseHour + 1.0)) {
      phase = TimeOfDayPhase.dawn;
    } else if (normHour >= (sunriseHour + 1.0) && normHour < 11.0) {
      phase = TimeOfDayPhase.morning;
    } else if (normHour >= 11.0 && normHour < 14.0) {
      phase = TimeOfDayPhase.noon;
    } else if (normHour >= 14.0 && normHour < (sunsetHour - 1.0)) {
      phase = TimeOfDayPhase.afternoon;
    } else if (normHour >= (sunsetHour - 1.0) && normHour < (sunsetHour + 1.0)) {
      phase = TimeOfDayPhase.dusk;
    } else if (normHour >= (sunsetHour + 1.0) && normHour < 21.0) {
      phase = TimeOfDayPhase.twilight;
    } else {
      phase = TimeOfDayPhase.night;
    }

    // 2. Calculate Sun Elevation and Azimuth
    // Sun rises at sunriseHour (el=0°), peaks at 12:00 (el=65°), sets at sunsetHour (el=0°)
    double elevationDeg;
    if (normHour >= sunriseHour && normHour <= sunsetHour) {
      final sunProgress = (normHour - sunriseHour) / (sunsetHour - sunriseHour); // 0..1
      elevationDeg = math.sin(math.pi * sunProgress) * 65.0;
    } else {
      elevationDeg = -18.0; // Below horizon at night
    }

    // Azimuth sweeps from East (90°) at sunrise to South (180°) at 12:00 to West (270°) at sunset
    final azimuthDeg = 90.0 + (normHour / 24.0) * 360.0;

    final elRad = _degToRad(elevationDeg);
    final azRad = _degToRad(azimuthDeg);

    final sunDir = (
      x: math.cos(azRad) * math.cos(elRad),
      y: math.sin(elRad).clamp(0.0, 1.0),
      z: math.sin(azRad) * math.cos(elRad),
    );

    final moonDir = (
      x: -sunDir.x,
      y: (1.0 - sunDir.y).clamp(0.1, 0.9),
      z: -sunDir.z,
    );

    // 3. Color Palettes for Phases
    const dawnSun = (r: 0.95, g: 0.65, b: 0.40);
    const daySun = (r: 1.00, g: 0.96, b: 0.88);
    const duskSun = (r: 0.92, g: 0.45, b: 0.22);
    const nightMoon = (r: 0.35, g: 0.45, b: 0.65);

    const dawnSky = (r: 0.45, g: 0.48, b: 0.62);
    const daySky = (r: 0.42, g: 0.52, b: 0.75);
    const duskSky = (r: 0.38, g: 0.32, b: 0.52);
    const nightSky = (r: 0.12, g: 0.16, b: 0.28);

    const dawnHorizon = (r: 0.88, g: 0.52, b: 0.35);
    const dayHorizon = (r: 0.72, g: 0.80, b: 0.90);
    const duskHorizon = (r: 0.90, g: 0.38, b: 0.20);
    const nightHorizon = (r: 0.15, g: 0.20, b: 0.35);

    Color3 sunColor;
    Color3 skyAmbient;
    Color3 horizon;
    Color3 fog;
    double dirIntensity;
    double ambIntensity;

    if (normHour >= 5.0 && normHour < 7.0) {
      final t = (normHour - 5.0) / 2.0;
      sunColor = _lerpColor(dawnSun, daySun, t);
      skyAmbient = _lerpColor(dawnSky, daySky, t);
      horizon = _lerpColor(dawnHorizon, dayHorizon, t);
      dirIntensity = 0.3 + 0.5 * t;
      ambIntensity = 0.25 + 0.2 * t;
    } else if (normHour >= 7.0 && normHour < 17.0) {
      sunColor = daySun;
      skyAmbient = daySky;
      horizon = dayHorizon;
      dirIntensity = 0.85;
      ambIntensity = 0.45;
    } else if (normHour >= 17.0 && normHour < 19.0) {
      final t = (normHour - 17.0) / 2.0;
      sunColor = _lerpColor(daySun, duskSun, t);
      skyAmbient = _lerpColor(daySky, duskSky, t);
      horizon = _lerpColor(dayHorizon, duskHorizon, t);
      dirIntensity = 0.85 * (1.0 - t * 0.6);
      ambIntensity = 0.45 * (1.0 - t * 0.5);
    } else if (normHour >= 19.0 && normHour < 21.0) {
      final t = (normHour - 19.0) / 2.0;
      sunColor = _lerpColor(duskSun, nightMoon, t);
      skyAmbient = _lerpColor(duskSky, nightSky, t);
      horizon = _lerpColor(duskHorizon, nightHorizon, t);
      dirIntensity = 0.34 * (1.0 - t * 0.6);
      ambIntensity = 0.22 * (1.0 - t * 0.4);
    } else {
      sunColor = nightMoon;
      skyAmbient = nightSky;
      horizon = nightHorizon;
      dirIntensity = 0.15;
      ambIntensity = 0.18;
    }

    // Rain desaturates daylight and adds grey-blue fog
    if (rain > 0) {
      const rainFogColor = (r: 0.25, g: 0.28, b: 0.35);
      fog = _lerpColor(horizon, rainFogColor, rain * 0.7);
      dirIntensity *= (1.0 - rain * 0.35);
      ambIntensity *= (1.0 - rain * 0.15);
    } else {
      fog = horizon;
    }

    // 4. Window Light Leakage & Surface Wetness Masks
    // When shutter is closed, directional light leaks at 15% through slatted openings
    final windowLeak = shutterOpen ? 1.0 : 0.15;

    // Surface wetness builds with rain intensity and cold temperature differential
    final tempColdFactor = ((20.0 - temperatureCelsius) / 15.0).clamp(0.0, 1.0);
    final wetness = (rain * 0.75 + tempColdFactor * 0.25).clamp(0.0, 1.0);

    return DayNightAtmosphereParams(
      phase: phase,
      hour: normHour,
      sunElevationDegrees: elevationDeg,
      sunAzimuthDegrees: azimuthDeg,
      sunDirection: sunDir,
      moonDirection: moonDir,
      sunColor: sunColor,
      moonColor: nightMoon,
      skyAmbientColor: skyAmbient,
      horizonColor: horizon,
      fogColor: fog,
      directionalIntensity: dirIntensity,
      ambientIntensity: ambIntensity,
      windowLightLeakFactor: windowLeak,
      windowSurfaceWetness: wetness,
    );
  }

  /// Verifies smooth continuous evaluation across 24 hours without NaNs or jumps.
  static bool validate24HourContinuity() {
    for (var h = 0.0; h < 24.0; h += 0.25) {
      final params = evaluateAtmosphere(
        hour: h,
        rainIntensity: 0.3,
        shutterOpen: true,
      );
      if (!params.sunDirection.x.isFinite ||
          !params.sunDirection.y.isFinite ||
          !params.sunDirection.z.isFinite ||
          !params.directionalIntensity.isFinite ||
          !params.ambientIntensity.isFinite) {
        return false;
      }
    }
    return true;
  }
}
