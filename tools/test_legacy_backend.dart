import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/legacy_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const mapper = LegacyBackendMapper();
  final frame = RendererFrame(
    snapshot: PresentationSnapshot(values: const {'roomId': 'hall'}),
    interpolation: 0.25,
  );
  final mapped = mapper.mapFrame(frame);
  _expect(mapped['backend'] == 'legacy', 'legacy mapping identifies backend');
  _expect(
    mapped['facts'] is Map<String, dynamic>,
    'legacy receives structural facts',
  );
  final input = mapper.mapInput(
    const RendererInputAction(id: 'use', pressed: true),
  );
  _expect(
    input['id'] == 'use' && input['pressed'] == true,
    'legacy receives public input',
  );
  print('legacy backend: shared boundary mapping fixture passes');
}
