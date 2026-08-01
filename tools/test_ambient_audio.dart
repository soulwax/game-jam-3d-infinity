import 'package:quarantine/game/ambient_audio.dart';

Never _fail(String message) =>
    throw StateError('ambient audio test failed: $message');
void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  _expect(
    ambientSoundForChannel('street') == 'winnow',
    'street uses shipped winnow',
  );
  _expect(
    ambientSoundForChannel('letterbox') == 'gate',
    'letterbox uses shipped gate',
  );
  _expect(
    ambientSoundForChannel('radio') == null,
    'unknown channel does not fabricate sound',
  );
  print('ambient audio maps only explicit channels to shipped cues');
}
