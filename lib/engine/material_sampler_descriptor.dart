enum TextureFilterMode {
  nearest,
  linear,
  nearestMipmapNearest,
  linearMipmapLinear,
}

enum TextureWrapMode {
  clampToEdge,
  repeat,
  mirroredRepeat,
}

/// Material sampler descriptor & capability negotiation for VIS-015 / R-03.
final class MaterialSamplerDescriptor {
  final TextureFilterMode minFilter;
  final TextureFilterMode magFilter;
  final TextureWrapMode wrapS;
  final TextureWrapMode wrapT;
  final double requestedAnisotropy;
  final double effectiveAnisotropy;
  final bool useMipmaps;

  const MaterialSamplerDescriptor._({
    required this.minFilter,
    required this.magFilter,
    required this.wrapS,
    required this.wrapT,
    required this.requestedAnisotropy,
    required this.effectiveAnisotropy,
    required this.useMipmaps,
  });

  factory MaterialSamplerDescriptor.create({
    TextureFilterMode minFilter = TextureFilterMode.linearMipmapLinear,
    TextureFilterMode magFilter = TextureFilterMode.linear,
    TextureWrapMode wrapS = TextureWrapMode.repeat,
    TextureWrapMode wrapT = TextureWrapMode.repeat,
    double requestedAnisotropy = 16.0,
    double maxAnisotropySupported = 16.0,
    bool useMipmaps = true,
  }) {
    if (requestedAnisotropy < 1.0 || maxAnisotropySupported < 1.0) {
      throw ArgumentError('anisotropy levels must be >= 1.0');
    }
    final effectiveAniso = requestedAnisotropy.clamp(1.0, maxAnisotropySupported);
    return MaterialSamplerDescriptor._(
      minFilter: minFilter,
      magFilter: magFilter,
      wrapS: wrapS,
      wrapT: wrapT,
      requestedAnisotropy: requestedAnisotropy,
      effectiveAnisotropy: effectiveAniso,
      useMipmaps: useMipmaps,
    );
  }

  Map<String, Object> toJson() => {
        'minFilter': minFilter.name,
        'magFilter': magFilter.name,
        'wrapS': wrapS.name,
        'wrapT': wrapT.name,
        'requestedAnisotropy': requestedAnisotropy,
        'effectiveAnisotropy': effectiveAnisotropy,
        'useMipmaps': useMipmaps,
      };
}
