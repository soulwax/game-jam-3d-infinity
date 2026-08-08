import 'package:pixeldart/rendering/rendering.dart';
import 'package:quarantine/presentation/pixeldart_capability_bridge.dart';

Never _fail(String message) => throw StateError(message);
void _expect(bool ok, String message) {
  if (!ok) _fail(message);
}

RenderCapabilities _caps({int samples = 1, bool floatTargets = false}) =>
    RenderCapabilities(
      webglVersion: '2.0',
      maxTextureSize: 4096,
      maxTextureArrayLayers: 4,
      maxSamples: samples,
      maxVertexAttributes: 16,
      maxColorAttachments: 4,
      floatRenderTarget: floatTargets,
      contextLossExtension: true,
    );

void main() {
  const bridge = PixeldartCapabilityBridge();
  final safe = bridge.decide(_caps());
  _expect(safe.profile == 'safe', 'minimum capability profile is safe');
  final rich = bridge.decide(_caps(samples: 4, floatTargets: true));
  _expect(
    rich.profile == 'standard',
    'rich capabilities enable standard profile',
  );
  _expect(rich.capabilities.contains('webgl2'), 'WebGL identity is retained');
  final serialized = bridge.serialize(_caps(samples: 2));
  _expect(
    bridge.deserialize(serialized).maxSamples == 2,
    'capability serialization round trips',
  );
  _expect(
    bridge
        .qualityProfile(_caps(samples: 4, floatTargets: true))
        .installs(PipelineFeatures.msaa),
    'Pixeldart quality profile is selected at the adapter edge',
  );
  final runtimeProfile = bridge.runtimeProfile(
    _caps(samples: 4, floatTargets: true),
  );
  _expect(
    runtimeProfile.kind == QualityProfileKind.high,
    'rich capabilities select the executable clean profile',
  );
  final labels = bridge.capabilityLabels(
    _caps(samples: 4, floatTargets: true),
    profile: runtimeProfile,
  );
  _expect(
    labels.contains('max-color-attachments-4') &&
        labels.contains('max-texture-array-layers-4') &&
        labels.contains('profile-high') &&
        labels.contains('feature-bloom'),
    'diagnostics expose limits and installed runtime features',
  );
  _expect(
    bridge.supportsContextRecovery(_caps()),
    'context-loss support remains observable',
  );
  _expect(
    bridge.diagnostics(_caps()).profile == safe.profile,
    'diagnostics use the same capability decision',
  );
  var rejected = false;
  try {
    bridge.decide(
      const RenderCapabilities(
        maxTextureSize: 0,
        maxTextureArrayLayers: 1,
        maxSamples: 1,
        maxVertexAttributes: 16,
        maxColorAttachments: 1,
      ),
    );
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, 'invalid Pixeldart limits fail closed');
  print('Pixeldart capability bridge: capability boundary checks pass');
}
