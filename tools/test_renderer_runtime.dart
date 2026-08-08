import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/presentation/renderer_runtime.dart';

final class _RuntimeProbe implements RendererRuntime {
  @override
  bool contextLost = false;

  int initializes = 0;
  int submits = 0;
  int inputs = 0;
  int losses = 0;
  int recoveries = 0;
  int disposals = 0;

  @override
  void initialize() => initializes++;

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
  backend.handleInput(const RendererInputAction(id: 'use'));
  backend.loseContext();
  backend.recover();
  backend.dispose();
  _expect(runtime.initializes == 1, 'runtime initialize was not delegated');
  _expect(runtime.submits == 1, 'runtime frame was not delegated');
  _expect(runtime.inputs == 1, 'runtime input was not delegated');
  _expect(
    runtime.losses == 1 && runtime.recoveries == 1,
    'recovery not delegated',
  );
  _expect(runtime.disposals == 1, 'runtime dispose was not delegated');
  print('renderer runtime bridge: neutral backend delegates lifecycle safely');
}
