import 'dart:math' as math;

/// Reticle style options for visual presentation.
enum VisualReticleMode { dot, crosshair, hidden }

/// Color grade choices.
enum VisualColorGrade { neutral, filmic, highContrast }

/// Pure data model representing user visual preferences for S-03.
class VisualSettingsProfile {
  final double brightness;
  final double exposure;
  final double fov;
  final double cameraMotion;
  final VisualReticleMode reticleMode;
  final VisualColorGrade colorGrade;

  const VisualSettingsProfile({
    this.brightness = 1.0,
    this.exposure = 0.0,
    this.fov = 75.0,
    this.cameraMotion = 1.0,
    this.reticleMode = VisualReticleMode.dot,
    this.colorGrade = VisualColorGrade.neutral,
  });

  static const firstRun = VisualSettingsProfile();

  VisualSettingsProfile copyWith({
    double? brightness,
    double? exposure,
    double? fov,
    double? cameraMotion,
    VisualReticleMode? reticleMode,
    VisualColorGrade? colorGrade,
  }) =>
      VisualSettingsProfile(
        brightness: brightness ?? this.brightness,
        exposure: exposure ?? this.exposure,
        fov: fov ?? this.fov,
        cameraMotion: cameraMotion ?? this.cameraMotion,
        reticleMode: reticleMode ?? this.reticleMode,
        colorGrade: colorGrade ?? this.colorGrade,
      );

  Map<String, Object?> toJson() => {
        'version': 1,
        'brightness': brightness,
        'exposure': exposure,
        'fov': fov,
        'cameraMotion': cameraMotion,
        'reticleMode': reticleMode.name,
        'colorGrade': colorGrade.name,
      };

  factory VisualSettingsProfile.fromJson(Map<String, Object?> json) {
    T enumValue<T extends Enum>(String key, List<T> values, T defaultValue) {
      final name = json[key] as String?;
      if (name == null) return defaultValue;
      return values.where((v) => v.name == name).firstOrNull ?? defaultValue;
    }

    final rawBrightness = (json['brightness'] as num?)?.toDouble() ?? 1.0;
    final rawExposure = (json['exposure'] as num?)?.toDouble() ?? 0.0;
    final rawFov = (json['fov'] as num?)?.toDouble() ?? 75.0;
    final rawMotion = (json['cameraMotion'] as num?)?.toDouble() ?? 1.0;

    return VisualSettingsProfile(
      brightness: rawBrightness.clamp(0.6, 1.4),
      exposure: rawExposure.clamp(-1.0, 1.0),
      fov: rawFov.clamp(60.0, 110.0),
      cameraMotion: rawMotion.clamp(0.0, 1.0),
      reticleMode: enumValue('reticleMode', VisualReticleMode.values, VisualReticleMode.dot),
      colorGrade: enumValue('colorGrade', VisualColorGrade.values, VisualColorGrade.neutral),
    );
  }
}

/// Runtime-facing visual policy projected from [VisualSettingsProfile].
final class VisualPresentationPolicy {
  final double brightnessFilter;
  final double exposureMultiplier;
  final double fovDegrees;
  final double cameraBreathScale;
  final VisualReticleMode reticleMode;
  final VisualColorGrade colorGrade;

  const VisualPresentationPolicy({
    required this.brightnessFilter,
    required this.exposureMultiplier,
    required this.fovDegrees,
    required this.cameraBreathScale,
    required this.reticleMode,
    required this.colorGrade,
  });

  factory VisualPresentationPolicy.fromProfile(VisualSettingsProfile profile) {
    final expMult = math.pow(2.0, profile.exposure).toDouble();
    return VisualPresentationPolicy(
      brightnessFilter: profile.brightness,
      exposureMultiplier: expMult,
      fovDegrees: profile.fov,
      cameraBreathScale: profile.cameraMotion,
      reticleMode: profile.reticleMode,
      colorGrade: profile.colorGrade,
    );
  }
}

/// Store maintaining requested vs effective visual profiles for transactional UI settings.
class VisualSettingsStore {
  VisualSettingsProfile _requested;
  VisualSettingsProfile _effective;

  VisualSettingsStore([VisualSettingsProfile profile = VisualSettingsProfile.firstRun])
      : _requested = profile,
        _effective = profile;

  VisualSettingsProfile get requested => _requested;
  VisualSettingsProfile get effective => _effective;

  void updateRequested(VisualSettingsProfile profile) {
    _requested = profile;
  }

  void commit() {
    _effective = _requested;
  }

  void revert() {
    _requested = _effective;
  }

  void reset() {
    _requested = VisualSettingsProfile.firstRun;
    _effective = VisualSettingsProfile.firstRun;
  }

  Map<String, Object> toJson() => {
        'version': 1,
        'requested': requested.toJson(),
        'effective': effective.toJson(),
      };
}
