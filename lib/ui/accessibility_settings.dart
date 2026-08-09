/// Accessibility preferences with explicit overrides taking precedence over
/// system defaults. Null means “follow the platform”.
enum AccessibilityScreenReaderVerbosity { concise, standard, verbose }

class AccessibilitySettingsProfile {
  final int version;
  final bool? reducedMotion;
  final bool? photosensitivitySafe;
  final double? uiScale;
  final bool? captions;
  final AccessibilityScreenReaderVerbosity? screenReaderVerbosity;

  const AccessibilitySettingsProfile({
    this.version = 1,
    this.reducedMotion,
    this.photosensitivitySafe,
    this.uiScale,
    this.captions,
    this.screenReaderVerbosity,
  });

  double get resolvedUiScale => uiScale ?? 1.0;

  /// The untouched first-run profile follows platform motion/transparency
  /// preferences and keeps optional presentation aids off until requested.
  static const firstRun = AccessibilitySettingsProfile();

  AccessibilitySettingsResolved resolve({
    required bool systemReducedMotion,
    required bool systemPhotosensitivitySafe,
    AccessibilityScreenReaderVerbosity systemScreenReaderVerbosity =
        AccessibilityScreenReaderVerbosity.standard,
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
      screenReaderVerbosity:
          screenReaderVerbosity ?? systemScreenReaderVerbosity,
      essentialCues: true,
    );
  }

  AccessibilitySettingsProfile copyWith({
    bool? reducedMotion,
    bool? photosensitivitySafe,
    double? uiScale,
    bool? captions,
    AccessibilityScreenReaderVerbosity? screenReaderVerbosity,
    bool clearReducedMotion = false,
    bool clearPhotosensitivitySafe = false,
    bool clearUiScale = false,
    bool clearCaptions = false,
    bool clearScreenReaderVerbosity = false,
  }) => AccessibilitySettingsProfile(
    reducedMotion: clearReducedMotion
        ? null
        : (reducedMotion ?? this.reducedMotion),
    photosensitivitySafe: clearPhotosensitivitySafe
        ? null
        : (photosensitivitySafe ?? this.photosensitivitySafe),
    uiScale: clearUiScale ? null : (uiScale ?? this.uiScale),
    captions: clearCaptions ? null : (captions ?? this.captions),
    screenReaderVerbosity: clearScreenReaderVerbosity
        ? null
        : (screenReaderVerbosity ?? this.screenReaderVerbosity),
  );

  Map<String, Object?> toJson() => {
    'version': version,
    'reducedMotion': reducedMotion,
    'photosensitivitySafe': photosensitivitySafe,
    'uiScale': uiScale,
    'captions': captions,
    'screenReaderVerbosity': screenReaderVerbosity?.name,
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
      screenReaderVerbosity: raw['screenReaderVerbosity'] == null
          ? null
          : AccessibilityScreenReaderVerbosity.values.firstWhere(
              (value) => value.name == raw['screenReaderVerbosity'],
              orElse: () => throw const FormatException(
                'invalid screen-reader verbosity',
              ),
            ),
    );
  }
}

class AccessibilitySettingsResolved {
  final bool reducedMotion;
  final bool photosensitivitySafe;
  final double uiScale;
  final bool captions;
  final AccessibilityScreenReaderVerbosity screenReaderVerbosity;
  final bool essentialCues;

  const AccessibilitySettingsResolved({
    required this.reducedMotion,
    required this.photosensitivitySafe,
    required this.uiScale,
    required this.captions,
    required this.screenReaderVerbosity,
    required this.essentialCues,
  });
}

/// Requested/effective accessibility profile holder.
///
/// The effective profile is kept separately so platform defaults and future
/// capability negotiation never overwrite the user's requested overrides.
final class AccessibilitySettingsStore {
  AccessibilitySettingsProfile requested;
  AccessibilitySettingsProfile effective;

  AccessibilitySettingsStore({
    AccessibilitySettingsProfile? requested,
    AccessibilitySettingsProfile? effective,
  }) : requested = requested ?? AccessibilitySettingsProfile.firstRun,
       effective = effective ?? AccessibilitySettingsProfile.firstRun;

  void setRequested(AccessibilitySettingsProfile profile) {
    requested = profile;
  }

  void setEffective(AccessibilitySettingsProfile profile) {
    effective = profile;
  }

  void reset() {
    requested = AccessibilitySettingsProfile.firstRun;
    effective = AccessibilitySettingsProfile.firstRun;
  }

  Map<String, Object?> toJson() => {
    'version': 1,
    'requested': requested.toJson(),
    'effective': effective.toJson(),
  };

  factory AccessibilitySettingsStore.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != 1) {
      throw const FormatException('unsupported accessibility settings store');
    }
    return AccessibilitySettingsStore(
      requested: AccessibilitySettingsProfile.fromJson(raw['requested']),
      effective: AccessibilitySettingsProfile.fromJson(raw['effective']),
    );
  }
}
