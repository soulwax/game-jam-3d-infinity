import 'renderer_backend.dart';

/// Private adapter seam for a backend-owned renderer runtime. It carries only
/// the same structural frame/action values as the public boundary; concrete
/// implementations keep GPU/DOM handles behind this interface.
abstract interface class RendererRuntime {
  /// True when the backend-owned device cannot accept a frame. This is a
  /// structural lifecycle bit; the concrete runtime keeps the device handle.
  bool get contextLost;

  void initialize();
  void submit(RendererFrame frame);
  void handleInput(RendererInputAction action);
  void loseContext();
  void recover();
  void dispose();
}
