import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/legacy_backend.dart';
import 'package:quarantine/presentation/renderer_diagnostics.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/presentation/renderer_runtime.dart';

final class _RuntimeProbe implements RendererRuntime {
  @override
  RendererDiagnostics get diagnostics => RendererDiagnostics(
    backend: 'next',
    profile: 'probe',
    buildId: 'probe',
    capabilities: const ['probe-capability'],
  );

  @override
  bool contextLost = false;

  int initializes = 0;
  int submits = 0;
  int resizes = 0;
  int inputs = 0;
  int losses = 0;
  int recoveries = 0;
  int disposals = 0;

  @override
  void initialize() => initializes++;

  @override
  void resize(int width, int height) => resizes++;

  @override
  void submit(RendererFrame frame) => submits++;

  @override
  void handleInput(RendererInputAction action) => inputs++;

  @override
  void loseContext() => losses++;

  @override
  void recover() => recoveries++;

  @override
  void dispose() => disposals++;
}

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final runtime = _RuntimeProbe();
  final backend = PixeldartBackend(runtime: runtime)..initialize();
  final frame = RendererFrame(
    snapshot: PresentationSnapshot(values: const {'day': 1}),
  );
  backend.submit(frame);
  backend.resize(800, 500);
  backend.handleInput(const RendererInputAction(id: 'use'));
  backend.loseContext();
  backend.recover();
  backend.dispose();
  _expect(runtime.initializes == 1, 'runtime initialize was not delegated');
  _expect(
    backend.diagnostics.profile == 'probe' &&
        backend.diagnostics.capabilities.contains('probe-capability'),
    'runtime diagnostics were not exposed through the backend seam',
  );
  _expect(runtime.submits == 1, 'runtime frame was not delegated');
  _expect(runtime.resizes == 1, 'runtime resize was not available');
  _expect(runtime.inputs == 1, 'runtime input was not delegated');
  _expect(
    runtime.losses == 1 && runtime.recoveries == 1,
    'recovery not delegated',
  );
  _expect(runtime.disposals == 1, 'runtime dispose was not delegated');

  final legacyRuntime = _RuntimeProbe();
  final legacy = LegacyBackend(runtime: legacyRuntime)..initialize();
  legacy.submit(frame);
  legacy.resize(640, 480);
  legacy.handleInput(const RendererInputAction(id: 'legacy-use'));
  legacy.loseContext();
  legacy.recover();
  legacy.dispose();
  _expect(
    legacyRuntime.initializes == 1 &&
        legacyRuntime.submits == 1 &&
        legacyRuntime.resizes == 1 &&
        legacyRuntime.inputs == 1 &&
        legacyRuntime.losses == 1 &&
        legacyRuntime.recoveries == 1 &&
        legacyRuntime.disposals == 1,
    'legacy runtime lifecycle was not delegated',
  );
  print('renderer runtime bridge: neutral backend delegates lifecycle safely');
}
