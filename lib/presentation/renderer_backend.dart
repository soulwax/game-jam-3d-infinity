import '../game/presentation_snapshot.dart';
import 'renderer_diagnostics.dart';

enum RendererBackendKind { legacy, next }

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
  String? get lastFrameEncoding;
  String? get lastInputEncoding;

  void initialize();

  void loseContext();

  void recover();

  void submit(RendererFrame frame);

  void handleInput(RendererInputAction action);

  void dispose();
}
