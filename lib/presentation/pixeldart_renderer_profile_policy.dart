import 'package:pixeldart/rendering/rendering.dart' as pixeldart;

/// Renderer-owned allocation policy for the three shipped Pixeldart profiles.
/// It contains no DOM, save, or settings-store state.
final class PixeldartRendererProfilePolicy {
  const PixeldartRendererProfilePolicy();

  pixeldart.RendererConfiguration configuration({
    required pixeldart.QualityProfile profile,
    required int surfaceWidth,
    required int surfaceHeight,
  }) {
    if (surfaceWidth <= 0 || surfaceHeight <= 0) {
      throw ArgumentError('surface dimensions must be positive');
    }
    final target = switch (profile.kind) {
      pixeldart.QualityProfileKind.high => (width: 960, height: 540),
      pixeldart.QualityProfileKind.standard => (width: 640, height: 360),
      _ => (width: 384, height: 216),
    };
    final extent = _fitInside(
      target.width,
      target.height,
      surfaceWidth,
      surfaceHeight,
    );
    final isHigh = profile.kind == pixeldart.QualityProfileKind.high;
    final isStandard = profile.kind == pixeldart.QualityProfileKind.standard;
    final shadows = profile.installs(pixeldart.PipelineFeatures.shadows);
    return pixeldart.RendererConfiguration(
      profile: profile,
      internalWidth: extent.width,
      internalHeight: extent.height,
      sampleCount: profile.installs(pixeldart.PipelineFeatures.msaa) ? 2 : 1,
      shadowMapCount: shadows ? (isHigh ? 3 : (isStandard ? 2 : 1)) : 0,
      shadowMapSize: isHigh ? 1024 : (isStandard ? 768 : 512),
      materialTableCapacity: isHigh ? 64 : (isStandard ? 32 : 16),
      lightTableCapacity: isHigh ? 8 : (isStandard ? 4 : 1),
      textureArrayLayerCapacity: isHigh ? 8 : (isStandard ? 4 : 1),
      diagnosticLevel: pixeldart.DiagnosticLevel.full,
    );
  }

  _Extent _fitInside(
    int targetWidth,
    int targetHeight,
    int maxWidth,
    int maxHeight,
  ) {
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
