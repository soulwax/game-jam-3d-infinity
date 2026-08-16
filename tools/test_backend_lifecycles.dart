import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

void require(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void expectStateError(void Function() action, String message) {
  try {
    action();
  } catch (error) {
    if (error is StateError) return;
    rethrow;
  }
  throw StateError(message);
}

void check(RendererBackend backend) {
  final frame = RendererFrame(
    snapshot: PresentationSnapshot(values: const {'roomId': 'hall'}),
  );
  expectStateError(() => backend.submit(frame), 'submit before initialize');
  expectStateError(
    () => backend.handleInput(const RendererInputAction(id: 'use')),
    'input before initialize',
  );
  backend.initialize();
  require(backend.state == RendererBackendState.ready, 'backend not ready');
  backend.submit(frame);
  backend.handleInput(const RendererInputAction(id: 'use', pressed: true));
  require(backend.diagnostics.backend.isNotEmpty, 'diagnostics missing');
  backend.dispose();
  require(
    backend.state == RendererBackendState.disposed,
    'backend not disposed',
  );
  expectStateError(() => backend.submit(frame), 'submit after dispose');
  expectStateError(() => backend.initialize(), 'reinitialize after dispose');
}

void main() {
  check(PixeldartBackend());
  print('Pixeldart backend lifecycle fixture passed');
}
