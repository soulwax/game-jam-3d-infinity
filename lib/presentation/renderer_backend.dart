import '../game/presentation_snapshot.dart';
import 'renderer_diagnostics.dart';

enum RendererBackendKind {
  legacy,
  pixeldart;

  /// Compatibility symbol for callers that still use the pre-C-01 name.
  @Deprecated('Use RendererBackendKind.pixeldart instead.')
  static const RendererBackendKind next = RendererBackendKind.pixeldart;
}

enum RendererBackendState { constructed, ready, lost, disposed }

class RendererFrame {
  final PresentationSnapshot snapshot;
  final double interpolation;

  RendererFrame({required this.snapshot, this.interpolation = 0.0}) {
    if (!interpolation.isFinite || interpolation < 0 || interpolation > 1) {
      throw ArgumentError.value(interpolation, 'interpolation');
    }
  }
}

class RendererInputAction {
  final String id;
  final bool pressed;
  final double value;

  const RendererInputAction({
    required this.id,
    this.pressed = false,
    this.value = 0.0,
  }) : assert(id != ''),
       assert(
         value == value &&
             value != double.infinity &&
             value != double.negativeInfinity,
       );
}

/// Renderer-neutral lifecycle contract. Implementations own GPU/DOM handles;
/// none may cross this interface.
abstract interface class RendererBackend {
  RendererBackendKind get kind;
  RendererBackendState get state;
  RendererDiagnostics get diagnostics;
  RendererFrame? get lastFrame;
  String? get lastFrameEncoding;
  String? get lastInputEncoding;

  void initialize();

  /// Updates backend-owned surface metrics between frames. Dimensions are
  /// structural values; DOM/GPU surface handles stay behind the adapter.
  void resize(int width, int height);

  void loseContext();

  void recover();

  void submit(RendererFrame frame);

  void handleInput(RendererInputAction action);

  void dispose();
}
