import 'renderer_backend.dart';

final class RenderScaleTransaction {
  final RenderResolutionProfile previousProfile;
  final RenderResolutionProfile currentProfile;
  final double devicePixelRatio;

  const RenderScaleTransaction({
    required this.previousProfile,
    required this.currentProfile,
    required this.devicePixelRatio,
  });

  bool get isResized =>
      previousProfile.renderWidth != currentProfile.renderWidth ||
      previousProfile.renderHeight != currentProfile.renderHeight;

  Map<String, Object> toJson() => {
        'previous': previousProfile.toJson(),
        'current': currentProfile.toJson(),
        'devicePixelRatio': devicePixelRatio,
        'isResized': isResized,
      };
}

/// Render scale & live surface resize transaction coordinator for VIS-013 / R-01.
class RenderScaleCoordinator {
  final double maxDevicePixelRatio;
  RenderResolutionProfile _currentProfile;

  RenderScaleCoordinator({
    required int initialWidth,
    required int initialHeight,
    String initialScale = '1.00',
    this.maxDevicePixelRatio = 2.0,
  }) : _currentProfile = RenderResolutionProfile.calculate(
          displayWidth: initialWidth,
          displayHeight: initialHeight,
          scaleOption: initialScale,
        ) {
    if (initialWidth <= 0 || initialHeight <= 0 || maxDevicePixelRatio <= 0) {
      throw ArgumentError('dimensions and maxDevicePixelRatio must be positive');
    }
  }

  RenderResolutionProfile get currentProfile => _currentProfile;

  RenderScaleTransaction updateSurface({
    required int displayWidth,
    required int displayHeight,
    required String scaleOption,
    required double devicePixelRatio,
  }) {
    final cappedDpr = devicePixelRatio.clamp(0.5, maxDevicePixelRatio);
    final prev = _currentProfile;
    final next = RenderResolutionProfile.calculate(
      displayWidth: (displayWidth * cappedDpr).round(),
      displayHeight: (displayHeight * cappedDpr).round(),
      scaleOption: scaleOption,
    );
    _currentProfile = next;

    return RenderScaleTransaction(
      previousProfile: prev,
      currentProfile: next,
      devicePixelRatio: cappedDpr,
    );
  }
}
