import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const mapper = PixeldartBackendMapper();
  final mapped = mapper.mapFrame(
    RendererFrame(snapshot: PresentationSnapshot(values: const {'day': 1})),
  );
  _expect(mapped['backend'] == 'next', 'next mapping identifies backend');
  _expect(
    mapped['facts'] is Map<String, dynamic>,
    'next receives structural facts',
  );
  final input = mapper.mapInput(
    const RendererInputAction(id: 'look', value: 0.5),
  );
  _expect(
    input['id'] == 'look' && input['value'] == 0.5,
    'next receives public input',
  );
  print('pixeldart backend: shared boundary mapping fixture passes');
}
