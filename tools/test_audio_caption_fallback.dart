import 'package:quarantine/ui/audio_caption_fallback.dart';

void main() {
  const fallback = AudioCaptionFallback(
    cueId: 'threshold-warden',
    caption: 'The warden waits outside.',
  );
  if (fallback.resolve(clipAvailable: true, captionsEnabled: true) !=
      'The warden waits outside.') {
    throw StateError('caption was not retained for an available clip');
  }
  if (fallback.resolve(clipAvailable: false, captionsEnabled: true) !=
      'The warden waits outside.') {
    throw StateError('caption fallback did not preserve authored text');
  }
  if (fallback
      .resolve(clipAvailable: false, captionsEnabled: false)
      .isNotEmpty) {
    throw StateError('disabled captions leaked fallback text');
  }
  print(
    'audio caption fallback: authored text survives missing clips and respects settings',
  );
}
