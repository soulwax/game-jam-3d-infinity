import 'accessibility_settings.dart';

final class AccessibilityPresentationPolicy {
  final double fontSizeScale;
  final bool highContrastMode;
  final double reducedMotionScale;
  final bool screenReaderAnnounceEnabled;

  const AccessibilityPresentationPolicy({
    this.fontSizeScale = 1.0,
    this.highContrastMode = false,
    this.reducedMotionScale = 1.0,
    this.screenReaderAnnounceEnabled = true,
  });

  Map<String, Object> toJson() => {
        'fontSizeScale': fontSizeScale,
        'highContrastMode': highContrastMode,
        'reducedMotionScale': reducedMotionScale,
        'screenReaderAnnounceEnabled': screenReaderAnnounceEnabled,
      };
}

/// Accessibility presentation policy & high-contrast / large-text coordinator for S-07.
class AccessibilityPresentationCoordinator {
  AccessibilitySettingsProfile _requested;
  AccessibilitySettingsProfile _effective;

  AccessibilityPresentationCoordinator({
    AccessibilitySettingsProfile? initialProfile,
  })  : _requested = initialProfile ?? const AccessibilitySettingsProfile(),
        _effective = initialProfile ?? const AccessibilitySettingsProfile();

  AccessibilitySettingsProfile get requested => _requested;
  AccessibilitySettingsProfile get effective => _effective;

  void setRequested(AccessibilitySettingsProfile profile) {
    _requested = profile;
  }

  void commit() {
    _effective = _requested;
  }

  void revert() {
    _requested = _effective;
  }

  void reset() {
    const defaultProfile = AccessibilitySettingsProfile();
    _requested = defaultProfile;
    _effective = defaultProfile;
  }

  AccessibilityPresentationPolicy projectPolicy() => AccessibilityPresentationPolicy(
        fontSizeScale: _effective.resolvedUiScale,
        highContrastMode: _effective.photosensitivitySafe ?? false,
        reducedMotionScale: (_effective.reducedMotion ?? false) ? 0.0 : 1.0,
        screenReaderAnnounceEnabled: _effective.screenReaderVerbosity != null,
      );
}
