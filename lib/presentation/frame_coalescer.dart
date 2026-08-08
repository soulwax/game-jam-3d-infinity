import 'renderer_backend.dart';

final class FrameCoalescer {
  String? _lastEncoding;

  bool submitIfChanged(RendererBackend backend, RendererFrame frame) {
    final encoding = frame.snapshot.encode();
    if (encoding == _lastEncoding) return false;
    backend.submit(frame);
    _lastEncoding = encoding;
    return true;
  }

  void reset() => _lastEncoding = null;
}
