import '../ui/graphics_settings.dart';

/// Hardware graphics capability limits for VIS-033 / S-04 profile negotiation.
final class HardwareCapabilities {
  final int maxTextureSize;
  final int maxMsaaSamples;
  final bool supportsAnisotropy;
  final double maxAnisotropy;
  final bool supportsInstancing;

  const HardwareCapabilities({
    this.maxTextureSize = 4096,
    this.maxMsaaSamples = 4,
    this.supportsAnisotropy = true,
    this.maxAnisotropy = 16.0,
    this.supportsInstancing = true,
  });

  static const safeDesktop = HardwareCapabilities(
    maxTextureSize: 4096,
    maxMsaaSamples: 4,
    supportsAnisotropy: true,
    maxAnisotropy: 16.0,
    supportsInstancing: true,
  );

  static const constrainedMobile = HardwareCapabilities(
    maxTextureSize: 2048,
    maxMsaaSamples: 1,
    supportsAnisotropy: false,
    maxAnisotropy: 1.0,
    supportsInstancing: false,
  );

  Map<String, Object> toJson() => {
        'maxTextureSize': maxTextureSize,
        'maxMsaaSamples': maxMsaaSamples,
        'supportsAnisotropy': supportsAnisotropy,
        'maxAnisotropy': maxAnisotropy,
        'supportsInstancing': supportsInstancing,
      };
}

/// Profile negotiator for VIS-033 / S-04.
/// Negotiates requested graphics settings against hardware capabilities,
/// emitting an effective profile and diagnostic explanations for downgrades.
final class GraphicsProfileNegotiationResult {
  final GraphicsSettingsProfile requested;
  final GraphicsSettingsProfile effective;
  final HardwareCapabilities hardware;
  final bool isDowngraded;
  final List<String> downgradeReasons;

  const GraphicsProfileNegotiationResult({
    required this.requested,
    required this.effective,
    required this.hardware,
    required this.isDowngraded,
    required this.downgradeReasons,
  });

  Map<String, Object> toJson() => {
        'requested': requested.toJson(),
        'effective': effective.toJson(),
        'hardware': hardware.toJson(),
        'isDowngraded': isDowngraded,
        'downgradeReasons': downgradeReasons,
      };
}

class GraphicsProfileNegotiator {
  static GraphicsProfileNegotiationResult negotiate({
    required GraphicsSettingsProfile requested,
    required HardwareCapabilities hardware,
  }) {
    final reasons = <String>[];
    var effAnti = requested.antialiasing;
    var effTex = requested.textureQuality;

    // Negotiate MSAA antialiasing
    if (requested.antialiasing == 'msaa4' && hardware.maxMsaaSamples < 4) {
      effAnti = hardware.maxMsaaSamples >= 2 ? 'msaa2' : 'off';
      reasons.add('MSAA 4x reduced to $effAnti by GPU max samples (${hardware.maxMsaaSamples})');
    } else if (requested.antialiasing == 'msaa2' && hardware.maxMsaaSamples < 2) {
      effAnti = 'off';
      reasons.add('MSAA 2x reduced to off by GPU max samples (${hardware.maxMsaaSamples})');
    }

    // Negotiate texture quality
    if (requested.textureQuality == 'high' && hardware.maxTextureSize < 2048) {
      effTex = 'medium';
      reasons.add('High texture quality reduced to medium by maxTextureSize (${hardware.maxTextureSize})');
    }

    final isDowngraded = reasons.isNotEmpty;
    final effective = requested.copyWithOption(
      antialiasing: effAnti,
      textureQuality: effTex,
    );

    return GraphicsProfileNegotiationResult(
      requested: requested,
      effective: effective,
      hardware: hardware,
      isDowngraded: isDowngraded,
      downgradeReasons: List.unmodifiable(reasons),
    );
  }
}
