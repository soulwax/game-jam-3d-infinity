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
  print('renderer diagnostics: backend/profile/build identity fixture passes');
}
