import 'renderer_backend.dart';
import 'renderer_diagnostics.dart';

/// Private adapter seam for a backend-owned renderer runtime. It carries only
/// the same structural frame/action values as the public boundary; concrete
/// implementations keep GPU/DOM handles behind this interface.
abstract interface class RendererRuntime {
  /// Backend-owned diagnostics exposed as neutral, serializable values.
  /// Concrete GPU/DOM handles and capability objects remain behind the seam.
  RendererDiagnostics get diagnostics;

  /// True when the backend-owned device cannot accept a frame. This is a
  /// structural lifecycle bit; the concrete runtime keeps the device handle.
  bool get contextLost;

  void initialize();
  /// Updates the backend-owned drawing surface between frames.
  ///
  /// The values are structural pixel dimensions only; DOM and GPU surface
  /// objects remain private to the concrete runtime.
  void resize(int width, int height);
  void submit(RendererFrame frame);
  void handleInput(RendererInputAction action);
  void loseContext();
  void recover();
  void dispose();
}
