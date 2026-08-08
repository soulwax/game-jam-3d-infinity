import 'package:quarantine/presentation/renderer_diagnostics.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final diagnostics = RendererDiagnostics(
    backend: 'next',
    profile: 'standard',
    buildId: 'dev-test',
    capabilities: const ['shadows', 'msaa', 'shadows'],
  );
  _expect(
    diagnostics.capabilities.join(',') == 'msaa,shadows',
    'capabilities are canonical',
  );
  _expect(
    diagnostics.encode().contains('"backend":"next"'),
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
    backend: 'next',
    profile: 'safe',
    buildId: 'game-renderer',
    capabilities: const ['webgl2'],
    rendererSha: 'renderer-sha',
    gameSha: 'game-sha',
    sdkVersion: '3.12.2',
    lockfileDigest: 'lock-sha',
  );
  _expect(pinned.provenancePinned, 'complete provenance is accepted');
  _expect(
    pinned.toJson()['provenancePinned'] == true,
    'complete provenance is serialized',
  );
  print('renderer diagnostics: backend/profile/build identity fixture passes');
}
