import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final frame = RendererFrame(
    snapshot: PresentationSnapshot(values: const {'roomId': 'hall'}),
    interpolation: 0.5,
  );
  _expect(
    frame.snapshot.values['roomId'] == 'hall',
    'frame carries immutable facts',
  );
  const action = RendererInputAction(id: 'use', pressed: true);
  _expect(action.pressed && action.value == 0, 'input boundary is structural');
  var rejected = false;
  try {
    RendererFrame(snapshot: frame.snapshot, interpolation: 2.0);
  } catch (error) {
    rejected = error is ArgumentError;
  }
  _expect(rejected, 'invalid interpolation rejects');
  print('renderer backend: neutral lifecycle/input boundary passes');
}
