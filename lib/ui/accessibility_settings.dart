/// Accessibility preferences with explicit overrides taking precedence over
/// system defaults. Null means “follow the platform”.
class AccessibilitySettingsProfile {
  final int version;
  final bool? reducedMotion;
  final bool? photosensitivitySafe;
  final double? uiScale;
  final bool? captions;

  const AccessibilitySettingsProfile({
    this.version = 1,
    this.reducedMotion,
    this.photosensitivitySafe,
    this.uiScale,
    this.captions,
  });

  double get resolvedUiScale => uiScale ?? 1.0;

  /// The untouched first-run profile follows platform motion/transparency
  /// preferences and keeps optional presentation aids off until requested.
  static const firstRun = AccessibilitySettingsProfile();

  AccessibilitySettingsResolved resolve({
    required bool systemReducedMotion,
    required bool systemPhotosensitivitySafe,
  }) {
    final scale = resolvedUiScale;
    if (scale < 0.8 || scale > 2.0) {
      throw const FormatException('UI scale must be between 0.8 and 2.0');
    }
    return AccessibilitySettingsResolved(
      reducedMotion: reducedMotion ?? systemReducedMotion,
      photosensitivitySafe: photosensitivitySafe ?? systemPhotosensitivitySafe,
      uiScale: scale,
      captions: captions ?? false,
    );
  }

  AccessibilitySettingsProfile copyWith({
    bool? reducedMotion,
    bool? photosensitivitySafe,
    double? uiScale,
    bool? captions,
    bool clearReducedMotion = false,
    bool clearPhotosensitivitySafe = false,
    bool clearUiScale = false,
    bool clearCaptions = false,
  }) => AccessibilitySettingsProfile(
    reducedMotion: clearReducedMotion
        ? null
        : (reducedMotion ?? this.reducedMotion),
    photosensitivitySafe: clearPhotosensitivitySafe
        ? null
        : (photosensitivitySafe ?? this.photosensitivitySafe),
    uiScale: clearUiScale ? null : (uiScale ?? this.uiScale),
    captions: clearCaptions ? null : (captions ?? this.captions),
  );

  Map<String, Object?> toJson() => {
    'version': version,
    'reducedMotion': reducedMotion,
    'photosensitivitySafe': photosensitivitySafe,
    'uiScale': uiScale,
    'captions': captions,
  };

  factory AccessibilitySettingsProfile.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != 1) {
      throw const FormatException('unsupported accessibility profile');
    }
    bool? optionalBool(Object? value) => value == null ? null : value as bool;
    return AccessibilitySettingsProfile(
      reducedMotion: optionalBool(raw['reducedMotion']),
      photosensitivitySafe: optionalBool(raw['photosensitivitySafe']),
      uiScale: (raw['uiScale'] as num?)?.toDouble(),
      captions: optionalBool(raw['captions']),
    );
  }
}

class AccessibilitySettingsResolved {
  final bool reducedMotion;
  final bool photosensitivitySafe;
  final double uiScale;
  final bool captions;

  const AccessibilitySettingsResolved({
    required this.reducedMotion,
    required this.photosensitivitySafe,
    required this.uiScale,
    required this.captions,
  });
}
