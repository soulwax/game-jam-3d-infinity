import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/legacy_backend.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/presentation/renderer_parity.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final frame = RendererFrame(
    snapshot: PresentationSnapshot(values: const {'day': 3, 'roomId': 'hall'}),
    interpolation: 0.5,
  );
  final report = const RendererParityHarness().run(
    legacy: LegacyBackend(),
    next: PixeldartBackend(),
    actions: [
      RendererReplayAction.initialize(),
      RendererReplayAction.submit(frame),
      RendererReplayAction.input(RendererInputAction(id: 'use', pressed: true)),
      RendererReplayAction.loseContext(),
      RendererReplayAction.recover(),
      RendererReplayAction.dispose(),
    ],
  );
  _expect(report.equivalent, report.mismatches.join('; '));
  _expect(report.trace.length == 6, 'replay trace records every public action');
  _expect(report.traceDigest.isNotEmpty, 'replay exposes a stable digest');
  print('renderer parity: legacy and next public replay is equivalent');
}
