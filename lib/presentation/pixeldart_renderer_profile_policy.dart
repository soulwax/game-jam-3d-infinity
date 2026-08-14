import 'package:pixeldart/rendering/rendering.dart' as pixeldart;

/// Renderer-owned allocation policy for the three shipped Pixeldart profiles.
/// It contains no DOM, save, or settings-store state.
final class PixeldartRendererProfilePolicy {
  const PixeldartRendererProfilePolicy();

  pixeldart.RendererConfiguration configuration({
    required pixeldart.QualityProfile profile,
    required int surfaceWidth,
    required int surfaceHeight,
    String renderScale = 'auto',
    String antialiasing = 'auto',
    String outputEncoding = 'srgb',
    String diagnosticLevel = 'full',
    String shadowQuality = 'profile',
  }) {
    if (surfaceWidth <= 0 || surfaceHeight <= 0) {
      throw ArgumentError('surface dimensions must be positive');
    }
    final target = switch (profile.kind) {
      pixeldart.QualityProfileKind.high => (width: 1920, height: 1080),
      pixeldart.QualityProfileKind.standard => (width: 1280, height: 720),
      _ => (width: 960, height: 540),
    };
    final scale = switch (renderScale) {
      '0.50' => 0.50,
      '0.67' => 0.67,
      '0.75' => 0.75,
      '0.85' => 0.85,
      '1.00' || 'auto' || _ => 1.0,
    };
    final extent = _fitInside(
      (target.width * scale).round(),
      (target.height * scale).round(),
      surfaceWidth,
      surfaceHeight,
    );
    final isHigh = profile.kind == pixeldart.QualityProfileKind.high;
    final isStandard = profile.kind == pixeldart.QualityProfileKind.standard;
    final shadows =
        profile.installs(pixeldart.PipelineFeatures.shadows) &&
        shadowQuality != 'off';
    final shadowCount = switch (shadowQuality) {
      'high' => shadows ? 3 : 0,
      'standard' => shadows ? 2 : 0,
      'off' => 0,
      _ => shadows ? (isHigh ? 3 : (isStandard ? 2 : 1)) : 0,
    };
    final shadowSize = switch (shadowQuality) {
      'high' => 1024,
      'standard' => 768,
      _ => isHigh ? 1024 : (isStandard ? 768 : 512),
    };
    // MSAA is a target allocation choice, not a post feature toggle. The
    // safe graph can still resolve a requested sample count when hardware
    // negotiation permits it.
    final sampleCount = switch (antialiasing) {
      'msaa4' => 4,
      'msaa2' || 'auto' => 2,
      _ => 1,
    };
    return pixeldart.RendererConfiguration(
      profile: profile,
      internalWidth: extent.width,
      internalHeight: extent.height,
      sampleCount: sampleCount,
      outputEncoding: outputEncoding == 'linear'
          ? pixeldart.ColorEncoding.linear
          : pixeldart.ColorEncoding.srgb,
      shadowMapCount: shadowCount,
      shadowMapSize: shadowSize,
      materialTableCapacity: isHigh ? 64 : (isStandard ? 32 : 16),
      lightTableCapacity: isHigh ? 8 : (isStandard ? 4 : 1),
      textureArrayLayerCapacity: isHigh ? 8 : (isStandard ? 4 : 1),
      diagnosticLevel: switch (diagnosticLevel) {
        'off' => pixeldart.DiagnosticLevel.off,
        'errors' => pixeldart.DiagnosticLevel.errorsOnly,
        _ => pixeldart.DiagnosticLevel.full,
      },
    );
  }

  _Extent _fitInside(
    int targetWidth,
    int targetHeight,
    int maxWidth,
    int maxHeight,
  ) {
    // The viewport height is the authoritative presentation dimension. Width
    // only caps the result on narrow or rotated surfaces, preserving the
    // reference aspect ratio instead of stretching the renderer.
    final widthScale = (maxWidth / targetWidth).clamp(0.0, 1.0).toDouble();
    final heightScale = (maxHeight / targetHeight).clamp(0.0, 1.0).toDouble();
    final scale = widthScale < heightScale ? widthScale : heightScale;
    return _Extent(
      width: _bounded((targetWidth * scale).round(), 320, maxWidth),
      height: _bounded((targetHeight * scale).round(), 180, maxHeight),
    );
  }

  int _bounded(int value, int minimum, int maximum) {
    if (maximum < minimum) return maximum;
    return value.clamp(minimum, maximum);
  }
}

final class _Extent {
  final int width;
  final int height;

  const _Extent({required this.width, required this.height});
}
