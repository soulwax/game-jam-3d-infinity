import 'package:quarantine/presentation/renderer_diagnostics.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final diagnostics = RendererDiagnostics(
    backend: 'pixeldart',
    profile: 'standard',
    buildId: 'dev-test',
    capabilities: const ['shadows', 'msaa', 'shadows'],
  );
  _expect(
    diagnostics.capabilities.join(',') == 'msaa,shadows',
    'capabilities are canonical',
  );
  _expect(
    diagnostics.encode().contains('"backend":"pixeldart"'),
    'backend identity is observable',
  );
  var rejected = false;
  try {
    RendererDiagnostics(
      backend: '',
      profile: 'safe',
      buildId: 'x',
      capabilities: const [],
    );
  } catch (error) {
    rejected = error is ArgumentError;
  }
  _expect(rejected, 'incomplete diagnostics reject');
  final boundary = RendererDiagnostics.fromEnvironment(
    backend: 'legacy',
    profile: 'legacy',
    capabilities: const [],
  );
  _expect(!boundary.provenancePinned, 'missing release defines stay visible');
  final pinned = RendererDiagnostics(
    backend: 'pixeldart',
    profile: 'safe',
    buildId: 'game-renderer',
    capabilities: const ['webgl2'],
    rendererSha: 'renderer-sha',
    gameSha: 'game-sha',
    sdkVersion: '3.12.2',
    lockfileDigest: 'lock-sha',
    projectVersion: '0.1.2.0',
  );
  _expect(pinned.provenancePinned, 'complete provenance is accepted');
  _expect(
    pinned.toJson()['provenancePinned'] == true,
    'complete provenance is serialized',
  );
  final withSelection = pinned.withSelection(const {
    'kind': 'pixeldart',
    'rejected': false,
    'aliasUsed': true,
  });
  final selection = withSelection.toJson()['selection'];
  _expect(
    selection is Map &&
        selection['kind'] == 'pixeldart' &&
        selection['aliasUsed'] == true,
    'selection diagnostics preserve canonical alias facts',
  );

  // R-08: RendererFrameTelemetry
  const telemetry = RendererFrameTelemetry(
    drawCallCount: 12,
    triangleCount: 4500,
    culledInstanceCount: 8,
    gpuFrameTimeMs: 1.45,
    timerOutcome: GpuTimerOutcome.supported,
  );
  final telemetryJson = telemetry.toJson();
  _expect(telemetryJson['drawCallCount'] == 12, 'drawCallCount is 12');
  _expect(telemetryJson['triangleCount'] == 4500, 'triangleCount is 4500');
  _expect(telemetryJson['culledInstanceCount'] == 8, 'culledInstanceCount is 8');
  _expect(telemetryJson['timerOutcome'] == 'supported', 'timerOutcome is supported');

  // R-04: ShadowAtlasProfile
  const atlas = ShadowAtlasProfile(
    activePracticalCasters: 2,
    daylightCasterActive: true,
  );
  _expect(atlas.totalActiveCasters == 3, '2 practicals + 1 daylight = 3 total casters');
  _expect(atlas.constantBias == 0.002, 'constantBias default is 0.002');
  _expect(atlas.pcfRadius == 1.5, 'pcfRadius default is 1.5');

  print('renderer diagnostics: backend/profile/build identity, R-08 telemetry, and R-04 shadow atlas pass');
}
